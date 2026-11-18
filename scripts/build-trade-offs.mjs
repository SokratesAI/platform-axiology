#!/usr/bin/env node
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC_DIR = join(__dirname, '..', 'axiology', 'Tensions');
const OUT_FILE = join(__dirname, '..', 'src', 'data', 'tradeOffs.ts');

const FIELD_MAP = {
  Position: 'positionName',
  Description: 'description',
  'How you arrive here': 'howArrive',
  'Internal narrative': 'internalNarrative',
  'What it produces': 'whatItProduces',
  'When it is correct': 'whenCorrect',
  'Failure signal': 'failureSignal',
  'The corrective': 'theCorrective',
};

function splitRow(line) {
  const stripped = line.trim().replace(/^\|/, '').replace(/\|$/, '');
  return stripped.split('|').map(c => c.trim());
}

function stripBold(s) {
  return s.replace(/^\*\*/, '').replace(/\*\*$/, '').trim();
}

function parseTable(lines, startIdx) {
  let i = startIdx;
  while (i < lines.length && !lines[i].startsWith('|')) i++;
  if (i >= lines.length) return null;
  // header row + separator
  i += 2;
  const rows = [];
  while (i < lines.length && lines[i].startsWith('|')) {
    rows.push(splitRow(lines[i]));
    i++;
  }
  return { rows, endIdx: i };
}

const files = readdirSync(SRC_DIR).filter(f => f.endsWith('.md')).sort();

const categories = [];
let currentCat = null;

for (const file of files) {
  const content = readFileSync(join(SRC_DIR, file), 'utf8');
  const lines = content.split('\n');

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Match category H1. Two formats:
    //   # Platform Axiology — Category I: Composition & Substance
    //   # Category IV: Relational & Social
    const catMatch = line.match(/^# (?:Platform Axiology — )?Category ([IVX]+): (.+)$/);
    if (catMatch) {
      currentCat = {
        romanId: catMatch[1],
        title: catMatch[2].trim(),
        theme: '',
        definition: '',
        tradeOffs: [],
      };
      categories.push(currentCat);

      // Search the following ~30 lines for the italic theme and the blockquote category definition
      for (let j = i + 1; j < Math.min(lines.length, i + 30); j++) {
        const trimmed = lines[j].trim();
        if (!trimmed) continue;
        // italic single-line theme: *Who are the platform's relationships...*
        if (!currentCat.theme && trimmed.startsWith('*') && trimmed.endsWith('*') && !trimmed.startsWith('**')) {
          currentCat.theme = trimmed.replace(/^\*+|\*+$/g, '').trim();
        }
        const defMatch = lines[j].match(/^> \*\*Category definition:\*\* (.+)$/);
        if (defMatch && !currentCat.definition) {
          currentCat.definition = defMatch[1].trim();
        }
        if (lines[j].startsWith('## ') && /^## [IVX]+-[LG]\d:/.test(lines[j])) break;
      }
      continue;
    }

    // Match tradeOff H2: "## I-L1: Capability Breadth ↔ Capability Depth"
    const tradeOffMatch = line.match(/^## ([IVX]+-[LG]\d): (.+)$/);
    if (tradeOffMatch && currentCat) {
      const code = tradeOffMatch[1];
      const axis = tradeOffMatch[2].trim();
      const type = code.includes('-L') ? 'L' : 'G';

      let summary = '';
      for (let j = i + 1; j < lines.length && j < i + 6; j++) {
        const t = lines[j].trim();
        if (!t) continue;
        if (t.startsWith('*') && t.endsWith('*') && !t.startsWith('**')) {
          summary = t.replace(/^\*+|\*+$/g, '').trim();
        }
        break;
      }

      const parsed = parseTable(lines, i + 1);
      if (!parsed) continue;

      const columns = [];
      for (let c = 0; c < 7; c++) {
        const col = {
          positionName: '',
          description: '',
          howArrive: '',
          internalNarrative: '',
          whatItProduces: '',
          whenCorrect: '',
          failureSignal: '',
          theCorrective: '',
        };
        for (const row of parsed.rows) {
          if (row.length < 8) continue;
          const fieldName = stripBold(row[0]);
          const key = FIELD_MAP[fieldName];
          if (!key) continue;
          col[key] = row[c + 1] ?? '';
        }
        columns.push(col);
      }

      currentCat.tradeOffs.push({ code, axis, type, summary, columns });
      i = parsed.endIdx;
      continue;
    }
  }
}

const tradeOffCount = categories.reduce((a, c) => a + c.tradeOffs.length, 0);

const output = `// AUTO-GENERATED from axiology/TradeOffs/*.md by scripts/build-trade-offs.mjs.
// Do not edit by hand. Re-run \`node scripts/build-trade-offs.mjs\` after changing the markdown.

export const COLUMN_LABELS = [
  'Far Excess',
  'Moderate Excess',
  'Mild Excess',
  'The Mean',
  'Mild Deficiency',
  'Moderate Deficiency',
  'Far Deficiency',
] as const;

export const VIRTUE_INDEX = 3;

export type ColumnIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type TradeOffType = 'L' | 'G';

export interface TradeOffColumn {
  positionName: string;
  description: string;
  howArrive: string;
  internalNarrative: string;
  whatItProduces: string;
  whenCorrect: string;
  failureSignal: string;
  theCorrective: string;
}

export interface TradeOff {
  code: string;
  axis: string;
  type: TradeOffType;
  summary: string;
  columns: readonly TradeOffColumn[];
}

export interface Category {
  romanId: string;
  title: string;
  theme: string;
  definition: string;
  tradeOffs: readonly TradeOff[];
}

export const CATEGORIES: readonly Category[] = ${JSON.stringify(categories, null, 2)};

export const ALL_TRADE_OFFS: readonly TradeOff[] = CATEGORIES.flatMap(c => c.tradeOffs);

export function getTradeOff(code: string): TradeOff | undefined {
  return ALL_TRADE_OFFS.find(t => t.code === code);
}

export function getCategory(romanId: string): Category | undefined {
  return CATEGORIES.find(c => c.romanId === romanId);
}

export function getCategoryForTradeOff(code: string): Category | undefined {
  return CATEGORIES.find(c => c.tradeOffs.some(t => t.code === code));
}
`;

writeFileSync(OUT_FILE, output);
console.log(`Wrote ${categories.length} categories with ${tradeOffCount} tradeOffs to ${OUT_FILE}`);
for (const c of categories) {
  console.log(`  Category ${c.romanId}: ${c.title} — ${c.tradeOffs.length} tradeOffs`);
  for (const t of c.tradeOffs) console.log(`    ${t.code}: ${t.axis} [${t.type}]`);
}
