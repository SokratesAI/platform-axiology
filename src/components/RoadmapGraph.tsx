import { useState } from 'react';
import { CATEGORIES } from '../data/tradeOffs';
import type { Assessment } from '../storage/assessments';
import { categoryAccent } from '../data/theme';

interface RoadmapGraphProps {
  assessments: Map<string, Assessment>;
  onSelect?: (tradeOffCode: string) => void;
}

const WIDTH = 340;
const PADDING_X = 14;
const COL_COUNT = 7;
const DOTS_X_START = 22;
const DOTS_X_END = WIDTH - PADDING_X;
const COL_SPACING = (DOTS_X_END - DOTS_X_START) / (COL_COUNT - 1);
const ROW_H = 26;
const HEADER_TOP_GAP = 14;
const HEADER_BOTTOM_GAP = 6;
const CATEGORY_BOTTOM_GAP = 12;
const TOP_LABEL_H = 28;
const CURRENT_COLOUR = '#4f46e5';
const TARGET_COLOUR = '#10b981';
const NEUTRAL_DOT = '#e5e7eb';

function colX(col: number): number {
  return DOTS_X_START + col * COL_SPACING;
}

interface RowLayout {
  tradeOffCode: string;
  axis: string;
  y: number;
}

interface CategoryLayout {
  romanId: string;
  title: string;
  accentHex: string;
  startY: number;
  rows: RowLayout[];
}

function buildLayout(assessments: Map<string, Assessment>): {
  categories: CategoryLayout[];
  rows: RowLayout[];
  height: number;
} {
  const categories: CategoryLayout[] = [];
  const rows: RowLayout[] = [];
  let y = TOP_LABEL_H + HEADER_TOP_GAP;

  for (const cat of CATEGORIES) {
    // Only tradeOffs with at least one mark in this category
    const marked = cat.tradeOffs.filter(t => {
      const a = assessments.get(t.code);
      return a && (a.currentColumn != null || a.targetColumn != null);
    });
    if (marked.length === 0) continue;

    const startY = y;
    y += HEADER_BOTTOM_GAP;
    const catRows: RowLayout[] = [];
    for (const t of marked) {
      const row: RowLayout = { tradeOffCode: t.code, axis: t.axis, y };
      catRows.push(row);
      rows.push(row);
      y += ROW_H;
    }
    categories.push({
      romanId: cat.romanId,
      title: cat.title,
      accentHex: categoryAccent(cat.romanId).fromHex,
      startY,
      rows: catRows,
    });
    y += CATEGORY_BOTTOM_GAP;
  }

  return { categories, rows, height: y };
}

export function RoadmapGraph({ assessments, onSelect }: RoadmapGraphProps) {
  const { categories, rows, height } = buildLayout(assessments);
  const [hoveredCode, setHoveredCode] = useState<string | null>(null);

  const enter = (code: string) => setHoveredCode(code);
  const leave = () => setHoveredCode(null);
  const activate = (code: string) => onSelect?.(code);
  const handleKey = (code: string, e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      activate(code);
    }
  };

  if (rows.length === 0) {
    return (
      <div className="rounded-md border border-dashed border-neutral-300 bg-neutral-50/60 p-6 text-center text-sm text-neutral-600">
        Nothing marked yet. Open the Trade-offs page and set <strong>We&apos;re here</strong> or{' '}
        <strong>We want this</strong> on any column to start drawing the map.
      </div>
    );
  }

  const currentPts = rows
    .map(r => ({ y: r.y, col: assessments.get(r.tradeOffCode)?.currentColumn ?? null }))
    .filter((p): p is { y: number; col: number } => typeof p.col === 'number');
  const targetPts = rows
    .map(r => ({ y: r.y, col: assessments.get(r.tradeOffCode)?.targetColumn ?? null }))
    .filter((p): p is { y: number; col: number } => typeof p.col === 'number');

  const gapScore = Array.from(assessments.values()).reduce((sum, a) => {
    if (a.currentColumn != null && a.targetColumn != null) {
      return sum + Math.abs(a.targetColumn - a.currentColumn);
    }
    return sum;
  }, 0);

  const buildPath = (pts: { y: number; col: number }[]): string =>
    pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${colX(p.col).toFixed(2)},${p.y.toFixed(2)}`).join(' ');

  const COL_LABELS_SHORT = ['Far', 'Mod', 'Mild', '●', 'Mild', 'Mod', 'Far'];
  const COL_LABELS_TONE = ['rose', 'rose', 'rose', 'amber', 'sky', 'sky', 'sky'] as const;
  const toneHex: Record<(typeof COL_LABELS_TONE)[number], string> = {
    rose: '#be185d',
    amber: '#b45309',
    sky: '#0369a1',
  };

  return (
    <>
      <svg
        viewBox={`0 0 ${WIDTH} ${height}`}
        width={WIDTH}
        height={height}
        role="img"
        aria-label="Direction map — current versus target across every marked trade-off"
        className="block max-w-full"
      >
        <text x={DOTS_X_START} y={10} fontSize="8" fontWeight="600" fill="#be185d" textAnchor="middle">
          EXCESS
        </text>
        <text x={colX(3)} y={10} fontSize="8" fontWeight="600" fill="#b45309" textAnchor="middle">
          MEAN
        </text>
        <text x={colX(6)} y={10} fontSize="8" fontWeight="600" fill="#0369a1" textAnchor="middle">
          DEFICIENCY
        </text>

        {COL_LABELS_SHORT.map((label, c) => (
          <text
            key={c}
            x={colX(c)}
            y={22}
            fontSize="8"
            fill={toneHex[COL_LABELS_TONE[c]]}
            textAnchor="middle"
          >
            {label}
          </text>
        ))}

        {Array.from({ length: COL_COUNT }, (_, c) => (
          <line
            key={c}
            x1={colX(c)}
            y1={TOP_LABEL_H}
            x2={colX(c)}
            y2={height - 4}
            stroke={c === 3 ? '#fde68a' : '#f3f4f6'}
            strokeWidth={c === 3 ? 1.5 : 1}
          />
        ))}

        {categories.map(cat => (
          <text
            key={cat.romanId}
            x={PADDING_X}
            y={cat.startY}
            fontSize="9"
            fontWeight="700"
            letterSpacing="0.08em"
            fill={cat.accentHex}
          >
            {cat.title.toUpperCase()}
          </text>
        ))}

        {rows.map(row => {
          const a = assessments.get(row.tradeOffCode);
          const cur = a?.currentColumn;
          const tgt = a?.targetColumn;
          const isHovered = hoveredCode === row.tradeOffCode;
          const interactive = Boolean(onSelect);
          const commonInteractiveProps = interactive
            ? {
              onClick: () => activate(row.tradeOffCode),
              onMouseEnter: () => enter(row.tradeOffCode),
              onMouseLeave: leave,
              onFocus: () => enter(row.tradeOffCode),
              onBlur: leave,
              onKeyDown: (e: React.KeyboardEvent) => handleKey(row.tradeOffCode, e),
              role: 'button' as const,
              tabIndex: 0,
              style: { cursor: 'pointer' as const, outline: 'none' as const },
            }
            : {};
          return (
            <g key={row.tradeOffCode}>
              {Array.from({ length: COL_COUNT }, (_, c) => {
                if (c === cur || c === tgt) return null;
                return <circle key={c} cx={colX(c)} cy={row.y} r={2} fill={NEUTRAL_DOT} />;
              })}
              {tgt != null && (
                <circle
                  cx={colX(tgt)}
                  cy={row.y}
                  r={isHovered ? 6.5 : 4.5}
                  fill={isHovered ? '#ecfdf5' : 'white'}
                  stroke={TARGET_COLOUR}
                  strokeWidth={isHovered ? 2.5 : 2}
                  aria-label={`${row.axis} — target`}
                  {...commonInteractiveProps}
                >
                  <title>{row.axis} — we want this</title>
                </circle>
              )}
              {cur != null && (
                <circle
                  cx={colX(cur)}
                  cy={row.y}
                  r={isHovered ? 6 : 4}
                  fill={CURRENT_COLOUR}
                  stroke="white"
                  strokeWidth={isHovered ? 2.5 : 1.5}
                  aria-label={`${row.axis} — current`}
                  {...commonInteractiveProps}
                >
                  <title>{row.axis} — we&apos;re here</title>
                </circle>
              )}
            </g>
          );
        })}

        {targetPts.length > 1 && (
          <path
            d={buildPath(targetPts)}
            stroke={TARGET_COLOUR}
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            opacity={0.7}
            pointerEvents="none"
          />
        )}
        {currentPts.length > 1 && (
          <path
            d={buildPath(currentPts)}
            stroke={CURRENT_COLOUR}
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            opacity={0.85}
            pointerEvents="none"
          />
        )}
      </svg>
      {gapScore > 0 && (
        <p className="mt-2 text-center text-[10px] text-neutral-400">
          {gapScore} step{gapScore !== 1 ? 's' : ''} total gap
        </p>
      )}
    </>
  );
}
