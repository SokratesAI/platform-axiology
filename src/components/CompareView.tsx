import { useMemo, useRef, useState } from 'react';
import type { Assessment } from '../storage/assessments';
import { getAllAssessments } from '../storage/assessments';
import { ALL_TRADE_OFFS, COLUMN_LABELS } from '../data/tradeOffs';
import type { TradeOff } from '../data/tradeOffs';
import { CompareIcon, TrashIcon } from './Icon';
import { CompareDataset, CompareRoadmapGraph } from './CompareRoadmapGraph';
import { stripTradeOffPrefix } from '../data/textUtils';
import { navigate } from '../routing';
import {
  loadSavedRoadmaps,
  persistSavedRoadmaps,
  savedRoadmapToAssessmentMap,
  assessmentMapToSaved,
} from '../storage/savedRoadmaps';

// Fixed colour for the user's own roadmap — slate, kept separate from the upload palette
const OWN_COLOUR = { current: '#0f172a', target: '#64748b' } as const;
const OWN_ID = '__own__';

// Each entry: distinct hue, with current = stronger shade, target = lighter shade.
// Same hue keeps a single roadmap visually grouped; different hues separate roadmaps.
const COLOUR_PALETTE: readonly { current: string; target: string; name: string }[] = [
  { name: 'indigo', current: '#4338ca', target: '#a5b4fc' },
  { name: 'emerald', current: '#047857', target: '#6ee7b7' },
  { name: 'rose', current: '#be123c', target: '#fda4af' },
  { name: 'amber', current: '#b45309', target: '#fcd34d' },
  { name: 'violet', current: '#6d28d9', target: '#c4b5fd' },
  { name: 'cyan', current: '#0e7490', target: '#67e8f9' },
  { name: 'orange', current: '#c2410c', target: '#fdba74' },
  { name: 'teal', current: '#0f766e', target: '#5eead4' },
  { name: 'fuchsia', current: '#a21caf', target: '#f0abfc' },
  { name: 'slate', current: '#334155', target: '#cbd5e1' },
];

interface UploadedRoadmap {
  id: string;
  name: string;
  current: string;
  target: string;
  colourIndex: number;
  assessments: Map<string, Assessment>;
  markedCount: number;
  showCurrent: boolean;
  showTarget: boolean;
}

interface ParsedBlob {
  version: 1;
  assessments: Record<string, Partial<Assessment>>;
}

function parseRoadmap(json: string): { ok: true; assessments: Map<string, Assessment> } | { ok: false; error: string } {
  let parsed: unknown;
  try {
    parsed = JSON.parse(json);
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : 'Invalid JSON' };
  }
  if (typeof parsed !== 'object' || parsed === null) {
    return { ok: false, error: 'JSON must be an object.' };
  }
  const obj = parsed as Partial<ParsedBlob>;
  if (obj.version !== 1) {
    return { ok: false, error: `Unsupported version: ${String(obj.version)}` };
  }
  if (typeof obj.assessments !== 'object' || obj.assessments == null) {
    return { ok: false, error: 'Missing "assessments" object.' };
  }
  const map = new Map<string, Assessment>();
  for (const [code, raw] of Object.entries(obj.assessments)) {
    if (typeof code !== 'string') continue;
    map.set(code, {
      tradeOffCode: code,
      currentColumn: typeof raw.currentColumn === 'number' ? raw.currentColumn : null,
      targetColumn: typeof raw.targetColumn === 'number' ? raw.targetColumn : null,
      updatedAt: typeof raw.updatedAt === 'number' ? raw.updatedAt : Date.now(),
    });
  }
  return { ok: true, assessments: map };
}

function computeGapScore(assessments: Map<string, Assessment>): number {
  let total = 0;
  for (const a of assessments.values()) {
    if (a.currentColumn != null && a.targetColumn != null) {
      total += Math.abs(a.targetColumn - a.currentColumn);
    }
  }
  return total;
}

function lightenHex(hex: string, factor = 0.55): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const toHex = (n: number) => Math.round(n + (255 - n) * factor).toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

export function CompareView() {
  const [uploads, setUploads] = useState<UploadedRoadmap[]>(() => {
    return loadSavedRoadmaps().map(saved => {
      const palette = COLOUR_PALETTE[saved.colourIndex % COLOUR_PALETTE.length];
      const colour = saved.currentHex
        ? { current: saved.currentHex, target: saved.targetHex ?? saved.currentHex }
        : palette;
      const assessments = savedRoadmapToAssessmentMap(saved);
      const markedCount = Array.from(assessments.values()).filter(
        a => a.currentColumn != null || a.targetColumn != null,
      ).length;
      return {
        id: saved.id,
        name: saved.name,
        current: colour.current,
        target: colour.target,
        colourIndex: saved.colourIndex,
        assessments,
        markedCount,
        showCurrent: true,
        showTarget: true,
      };
    });
  });
  const [error, setError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [focusedDatasetId, setFocusedDatasetId] = useState<string | null>(null);
  const [selectedDatasetId, setSelectedDatasetId] = useState<string | null>(null);
  const [selectedRowCode, setSelectedRowCode] = useState<string | null>(null);
  const [ownShowCurrent, setOwnShowCurrent] = useState(true);
  const [ownShowTarget, setOwnShowTarget] = useState(true);
  const [renamingId, setRenamingId] = useState<string | null>(null);
  const [renameValue, setRenameValue] = useState('');
  const [manageOpen, setManageOpen] = useState(false);
  const ownAssessments = useMemo(() => getAllAssessments(), []);
  const ownMarkedCount = useMemo(
    () => Array.from(ownAssessments.values()).filter(a => a.currentColumn != null || a.targetColumn != null).length,
    [ownAssessments],
  );
  const ownGapScore = useMemo(() => computeGapScore(ownAssessments), [ownAssessments]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dragCounter = useRef(0);

  const activeFocusedDataset = selectedDatasetId ?? focusedDatasetId;

  const saveToStorage = (list: UploadedRoadmap[]) => {
    persistSavedRoadmaps(
      list.map((u) => ({
        id: u.id,
        name: u.name,
        colourIndex: u.colourIndex,
        currentHex: u.current,
        targetHex: u.target,
        assessments: assessmentMapToSaved(u.assessments),
      })),
    );
  };

  const nextColour = (currentCount: number) =>
    COLOUR_PALETTE[currentCount % COLOUR_PALETTE.length];

  const handleFiles = async (files: FileList | File[]) => {
    const list = Array.from(files);
    if (list.length === 0) return;
    setError(null);
    const additions: UploadedRoadmap[] = [];
    const errors: string[] = [];
    let idx = uploads.length;
    for (const file of list) {
      const text = await file.text();
      const res = parseRoadmap(text);
      if (!res.ok) {
        errors.push(`${file.name}: ${res.error}`);
        continue;
      }
      const colour = nextColour(idx);
      idx += 1;
      const markedCount = Array.from(res.assessments.values()).filter(
        a => a.currentColumn != null || a.targetColumn != null,
      ).length;
      additions.push({
        id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
        name: file.name.replace(/\.json$/i, ''),
        current: colour.current,
        target: colour.target,
        colourIndex: idx - 1,
        assessments: res.assessments,
        markedCount,
        showCurrent: true,
        showTarget: true,
      });
    }
    if (additions.length > 0) {
      setUploads(prev => {
        const next = [...prev, ...additions];
        saveToStorage(next);
        return next;
      });
    }
    if (errors.length > 0) setError(errors.join(' · '));
  };

  const remove = (id: string) => {
    setUploads(prev => {
      const next = prev.filter(u => u.id !== id);
      saveToStorage(next);
      return next;
    });
    if (selectedDatasetId === id) setSelectedDatasetId(null);
  };

  const toggleVisibility = (id: string, kind: 'current' | 'target') => {
    setUploads(prev =>
      prev.map(u =>
        u.id === id
          ? { ...u, showCurrent: kind === 'current' ? !u.showCurrent : u.showCurrent, showTarget: kind === 'target' ? !u.showTarget : u.showTarget }
          : u,
      ),
    );
  };

  const setCustomColour = (id: string, hex: string) => {
    setUploads(prev => {
      const next = prev.map(u =>
        u.id !== id ? u : { ...u, current: hex, target: lightenHex(hex) },
      );
      saveToStorage(next);
      return next;
    });
  };

  const commitRename = (id: string, newName: string) => {
    const trimmed = newName.trim();
    setRenamingId(null);
    if (!trimmed) return;
    setUploads(prev => {
      const next = prev.map(u => u.id === id ? { ...u, name: trimmed } : u);
      saveToStorage(next);
      return next;
    });
  };

  const clearAll = () => {
    setUploads([]);
    persistSavedRoadmaps([]);
    setError(null);
    setSelectedDatasetId(null);
    setFocusedDatasetId(null);
  };

  const onDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    if (!e.dataTransfer.types.includes('Files')) return;
    dragCounter.current += 1;
    setIsDragging(true);
  };
  const onDragOver = (e: React.DragEvent) => e.preventDefault();
  const onDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    dragCounter.current = Math.max(0, dragCounter.current - 1);
    if (dragCounter.current === 0) setIsDragging(false);
  };
  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    dragCounter.current = 0;
    setIsDragging(false);
    if (e.dataTransfer.files?.length) void handleFiles(e.dataTransfer.files);
  };

  const datasets = useMemo<CompareDataset[]>(() => {
    const own: CompareDataset[] = ownMarkedCount > 0
      ? [{
        id: OWN_ID,
        name: 'My roadmap',
        currentColour: OWN_COLOUR.current,
        targetColour: OWN_COLOUR.target,
        assessments: ownAssessments,
        showCurrent: ownShowCurrent,
        showTarget: ownShowTarget,
      }]
      : [];
    return [
      ...own,
      ...uploads.map(u => ({
        id: u.id,
        name: u.name,
        currentColour: u.current,
        targetColour: u.target,
        assessments: u.assessments,
        showCurrent: u.showCurrent,
        showTarget: u.showTarget,
      })),
    ];
  }, [uploads, ownAssessments, ownMarkedCount, ownShowCurrent, ownShowTarget]);

  return (
    <section
      className="relative space-y-8"
      onDragEnter={onDragEnter}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      {isDragging && (
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-40 flex items-center justify-center bg-indigo-600/15 backdrop-blur-sm"
        >
          <div className="rounded-2xl border-2 border-dashed border-indigo-500 bg-white px-8 py-6 text-center shadow-xl">
            <p className="text-base font-semibold text-indigo-700">Drop roadmap JSON(s)</p>
            <p className="mt-1 text-sm text-neutral-600">
              Each file becomes a new line pair on the shared direction map.
            </p>
          </div>
        </div>
      )}

      <header className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-900 text-white shadow-sm">
              <CompareIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-[11px] font-medium uppercase tracking-wider text-neutral-500">
                Compare
              </p>
              <h2 className="text-xl font-semibold tracking-tight text-neutral-900 sm:text-2xl md:text-3xl">
                Overlay multiple roadmaps on one direction map.
              </h2>
            </div>
          </div>
          <div className="flex w-full flex-wrap items-start gap-2 sm:w-auto">
            {/* Mobile: collapsible "Manage" group */}
            <button
              type="button"
              onClick={() => setManageOpen(o => !o)}
              aria-expanded={manageOpen}
              className="inline-flex w-full items-center justify-between gap-2 rounded-md border border-neutral-300 bg-white px-3 py-2 text-xs font-medium text-neutral-700 shadow-sm hover:bg-neutral-100 sm:hidden"
            >
              <span>Add / Clear roadmaps</span>
              <svg
                aria-hidden
                viewBox="0 0 16 16"
                fill="currentColor"
                className={['h-3.5 w-3.5 transition-transform', manageOpen ? 'rotate-180' : ''].join(' ')}
              >
                <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </svg>
            </button>
            {manageOpen && (
              <div className="flex w-full flex-col gap-2 sm:hidden">
                <ToolbarButton onClick={() => fileInputRef.current?.click()}>
                  Add roadmap JSON
                </ToolbarButton>
                <ToolbarButton onClick={clearAll} disabled={uploads.length === 0} danger>
                  Clear all
                </ToolbarButton>
              </div>
            )}
            {/* Desktop: inline buttons */}
            <div className="hidden flex-wrap items-start gap-2 sm:flex">
              <div className="flex flex-col items-center">
                <ToolbarButton onClick={() => fileInputRef.current?.click()}>
                  Add roadmap JSON
                </ToolbarButton>
                <span className="mt-1 text-[10px] text-neutral-500">(or drag-drop)</span>
              </div>
              <ToolbarButton onClick={clearAll} disabled={uploads.length === 0} danger>
                Clear all
              </ToolbarButton>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              className="hidden"
              onChange={e => {
                if (e.target.files?.length) void handleFiles(e.target.files);
                e.target.value = '';
              }}
            />
          </div>
        </div>
        <p className="mt-4 max-w-3xl text-sm text-neutral-700">
          Upload one or more roadmap JSONs (the same files{' '}
          <strong>Roadmap → Export JSON</strong> produces). Each one gets a distinct hue: a strong
          line for <strong>current</strong>, a lighter dashed line for{' '}
          <strong>target</strong>.{' '}
          <span className="hidden text-neutral-500 sm:inline">
            Tip: drop files anywhere on this page to upload.
          </span>
        </p>
        {error && <p className="mt-3 text-xs text-rose-700">{error}</p>}
      </header>

      {uploads.length === 0 && ownMarkedCount === 0 ? (
        <EmptyState onPickFile={() => fileInputRef.current?.click()} />
      ) : (
        <div className="grid gap-6 lg:grid-cols-[220px_1fr_360px] lg:items-start">
          {/* Left: uploaded roadmaps */}
          <aside className="self-start space-y-4">
            {ownMarkedCount > 0 && (
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-800">My roadmap</h3>
                <div
                  className={[
                    'mt-2 flex items-start justify-between gap-2 rounded-xl border p-3 shadow-sm transition cursor-pointer select-none',
                    activeFocusedDataset === OWN_ID
                      ? 'border-neutral-900 bg-neutral-50 ring-1 ring-neutral-900/20'
                      : 'border-neutral-200 bg-white hover:border-neutral-300 hover:bg-neutral-50',
                  ].join(' ')}
                  onClick={() => setSelectedDatasetId(prev => prev === OWN_ID ? null : OWN_ID)}
                  onMouseEnter={() => { if (!selectedDatasetId) setFocusedDatasetId(OWN_ID); }}
                  onMouseLeave={() => { if (!selectedDatasetId) setFocusedDatasetId(null); }}
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <div className="flex flex-col gap-1" aria-hidden>
                        <span className="h-1 w-6 rounded-full" style={{ backgroundColor: OWN_COLOUR.current }} />
                        <span className="h-1 w-6 rounded" style={{ background: `repeating-linear-gradient(to right, ${OWN_COLOUR.target} 0 4px, transparent 4px 7px)` }} />
                      </div>
                      <p className="truncate text-sm font-medium text-neutral-900">My roadmap</p>
                    </div>
                    <p className="mt-1 text-[11px] text-neutral-500">{ownMarkedCount} marked · {ownGapScore} step{ownGapScore !== 1 ? 's' : ''} gap</p>
                    <div className="mt-2 flex gap-1.5">
                      <VisToggle label="Current" colour={OWN_COLOUR.current} active={ownShowCurrent}
                        onClick={e => { e.stopPropagation(); setOwnShowCurrent(v => !v); }} />
                      <VisToggle label="Target" colour={OWN_COLOUR.target} dashed active={ownShowTarget}
                        onClick={e => { e.stopPropagation(); setOwnShowTarget(v => !v); }} />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {uploads.length > 0 && (
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-800">Uploaded roadmaps</h3>
                <ul className="mt-2 space-y-2">
                  {uploads.map(u => {
                    const gapScore = computeGapScore(u.assessments);
                    const isFocused = activeFocusedDataset === u.id;
                    return (
                      <li
                        key={u.id}
                        className={[
                          'flex items-start justify-between gap-2 rounded-xl border p-3 shadow-sm transition cursor-pointer select-none',
                          isFocused
                            ? 'border-neutral-900 bg-neutral-50 ring-1 ring-neutral-900/20'
                            : 'border-neutral-200 bg-white hover:border-neutral-300 hover:bg-neutral-50',
                        ].join(' ')}
                        onClick={() => setSelectedDatasetId(prev => prev === u.id ? null : u.id)}
                        onMouseEnter={() => { if (!selectedDatasetId) setFocusedDatasetId(u.id); }}
                        onMouseLeave={() => { if (!selectedDatasetId) setFocusedDatasetId(null); }}
                      >
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <ColourSwatchPicker
                              current={u.current}
                              target={u.target}
                              onPick={hex => setCustomColour(u.id, hex)}
                            />
                            {renamingId === u.id ? (
                              <input
                                autoFocus
                                className="min-w-0 flex-1 rounded border border-neutral-300 px-1.5 py-0.5 text-sm font-medium text-neutral-900 focus:outline-none focus:border-neutral-500"
                                value={renameValue}
                                onChange={e => setRenameValue(e.target.value)}
                                onBlur={() => commitRename(u.id, renameValue)}
                                onKeyDown={e => {
                                  if (e.key === 'Enter') { e.preventDefault(); commitRename(u.id, renameValue); }
                                  if (e.key === 'Escape') setRenamingId(null);
                                }}
                                onClick={e => e.stopPropagation()}
                              />
                            ) : (
                              <p
                                className="truncate text-sm font-medium text-neutral-900 cursor-text"
                                title="Click to rename"
                                onClick={e => { e.stopPropagation(); setRenamingId(u.id); setRenameValue(u.name); }}
                              >
                                {u.name}
                              </p>
                            )}
                          </div>
                          <p className="mt-1 text-[11px] text-neutral-500">
                            {u.markedCount} marked · {gapScore} step{gapScore !== 1 ? 's' : ''} gap
                          </p>
                          <div className="mt-2 flex gap-1.5">
                            <VisToggle
                              label="Current"
                              colour={u.current}
                              active={u.showCurrent}
                              onClick={e => { e.stopPropagation(); toggleVisibility(u.id, 'current'); }}
                            />
                            <VisToggle
                              label="Target"
                              colour={u.target}
                              dashed
                              active={u.showTarget}
                              onClick={e => { e.stopPropagation(); toggleVisibility(u.id, 'target'); }}
                            />
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={e => { e.stopPropagation(); remove(u.id); }}
                          aria-label={`Remove ${u.name}`}
                          className="rounded-md border border-rose-200 bg-white p-1.5 text-rose-700 hover:bg-rose-50"
                        >
                          <TrashIcon className="h-3.5 w-3.5" />
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </aside>

          {/* Middle: graph */}
          <div className="rounded-2xl border border-neutral-200 bg-white p-3 shadow-sm min-w-0 self-start sm:p-6">
            <CompareRoadmapGraph
              datasets={datasets}
              focusedDatasetId={activeFocusedDataset}
              onRowClick={setSelectedRowCode}
            />
          </div>

          {/* Right: trade-off detail */}
          <div className="self-start">
            <TradeOffDetailPanel
              tradeOffCode={selectedRowCode}
              datasets={datasets}
            />
          </div>
        </div>
      )}
    </section>
  );
}

interface ToolbarButtonProps {
  onClick: () => void;
  disabled?: boolean;
  danger?: boolean;
  children: string;
}

function ToolbarButton({ onClick, disabled, danger, children }: ToolbarButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={[
        'inline-flex min-h-9 items-center rounded-md border px-3 py-2 text-xs font-medium transition',
        'disabled:cursor-not-allowed disabled:opacity-50',
        danger
          ? 'border-rose-300 bg-white text-rose-700 hover:bg-rose-50'
          : 'border-neutral-300 bg-white text-neutral-700 hover:bg-neutral-100',
      ].join(' ')}
    >
      {children}
    </button>
  );
}

function ColourSwatchPicker({ current, target, onPick }: {
  current: string;
  target: string;
  onPick: (hex: string) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div
      className="flex shrink-0 flex-col gap-1 rounded p-0.5 hover:bg-neutral-100 transition cursor-pointer"
      title="Pick colour"
      onClick={e => { e.stopPropagation(); inputRef.current?.click(); }}
    >
      <span className="h-1 w-6 rounded-full" style={{ backgroundColor: current }} />
      <span className="h-1 w-6 rounded" style={{ background: `repeating-linear-gradient(to right, ${target} 0 4px, transparent 4px 7px)` }} />
      <input
        ref={inputRef}
        type="color"
        className="sr-only"
        value={current}
        onChange={e => onPick(e.target.value)}
        onClick={e => e.stopPropagation()}
      />
    </div>
  );
}

interface TradeOffDetailPanelProps {
  tradeOffCode: string | null;
  datasets: CompareDataset[];
}

function TradeOffDetailPanel({ tradeOffCode, datasets }: TradeOffDetailPanelProps) {
  const tradeOff: TradeOff | null = tradeOffCode
    ? ALL_TRADE_OFFS.find(t => t.code === tradeOffCode) ?? null
    : null;

  if (!tradeOff) {
    return (
      <div className="rounded-2xl border border-dashed border-neutral-200 bg-neutral-50/60 p-6 text-center">
        <p className="text-sm text-neutral-400">Click a row on the graph to see details.</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm space-y-4">
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400">{tradeOff.code}</p>
        <h3 className="mt-0.5 text-sm font-semibold text-neutral-900 leading-snug">{tradeOff.axis}</h3>
        <p className="mt-2 text-[11px] text-neutral-600 leading-relaxed">
          {stripTradeOffPrefix(tradeOff.summary)}
        </p>
        <button
          type="button"
          onClick={() => navigate({ view: 'trade-offs', tradeOffCode: tradeOff.code })}
          className="mt-3 inline-flex items-center gap-1 rounded-md border border-neutral-300 bg-white px-2.5 py-1 text-[11px] font-medium text-neutral-700 transition hover:border-neutral-900 hover:bg-neutral-900 hover:text-white"
        >
          Read more <span aria-hidden>→</span>
        </button>
      </div>

      <div className="space-y-4">
        {datasets.map(d => {
          const assessment = d.assessments.get(tradeOff.code);
          const showCurrent = !!(d.showCurrent && assessment && assessment.currentColumn != null);
          const showTarget = !!(d.showTarget && assessment && assessment.targetColumn != null);
          const hasVisible = showCurrent || showTarget;
          return (
            <div key={d.id}>
              <div className="flex items-center gap-2">
                <span className="h-1 w-5 shrink-0 rounded-full" style={{ backgroundColor: d.currentColour }} />
                <span className="truncate text-[11px] font-semibold text-neutral-800">{d.name}</span>
              </div>
              {!hasVisible && (
                <p className="mt-0.5 pl-7 text-[11px] italic text-neutral-400">Not marked</p>
              )}
              {showCurrent && assessment && assessment.currentColumn != null && (() => {
                const col = tradeOff.columns[assessment.currentColumn];
                return (
                  <div className="mt-1.5 pl-7">
                    <p className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: d.currentColour }}>
                      Current · {COLUMN_LABELS[assessment.currentColumn]}
                    </p>
                    <p className="mt-0.5 text-[11px] font-medium text-neutral-700 leading-snug">{col.positionName}</p>
                    <p className="mt-0.5 text-[11px] text-neutral-500 leading-snug line-clamp-3">{col.description}</p>
                  </div>
                );
              })()}
              {showTarget && assessment && assessment.targetColumn != null && assessment.targetColumn !== assessment.currentColumn && (() => {
                const col = tradeOff.columns[assessment.targetColumn];
                return (
                  <div className="mt-2 pl-7">
                    <p className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: d.targetColour }}>
                      Target → {COLUMN_LABELS[assessment.targetColumn]}
                    </p>
                    <p className="mt-0.5 text-[11px] font-medium text-neutral-700 leading-snug">{col.positionName}</p>
                    <p className="mt-0.5 text-[11px] text-neutral-500 leading-snug line-clamp-3">{col.description}</p>
                  </div>
                );
              })()}
              {showCurrent && showTarget && assessment && assessment.targetColumn === assessment.currentColumn && (
                <p className="mt-0.5 pl-7 text-[11px] text-neutral-400">Target · same position as current</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function VisToggle({
  label,
  colour,
  dashed,
  active,
  onClick,
}: {
  label: string;
  colour: string;
  dashed?: boolean;
  active: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={`${active ? 'Hide' : 'Show'} ${label.toLowerCase()}`}
      className={[
        'inline-flex items-center gap-1.5 rounded px-1.5 py-0.5 text-[10px] font-medium transition border',
        active
          ? 'border-transparent bg-neutral-100 text-neutral-700'
          : 'border-neutral-200 bg-white text-neutral-400 line-through',
      ].join(' ')}
    >
      <span
        className="block h-0.5 w-4 shrink-0 rounded"
        style={
          dashed
            ? { background: `repeating-linear-gradient(to right, ${active ? colour : '#d1d5db'} 0 3px, transparent 3px 5px)` }
            : { backgroundColor: active ? colour : '#d1d5db' }
        }
      />
      {label}
    </button>
  );
}

function EmptyState({ onPickFile }: { onPickFile: () => void }) {
  return (
    <div className="rounded-2xl border border-dashed border-neutral-300 bg-white p-6 text-center shadow-sm sm:p-12">
      <p className="text-base font-semibold text-neutral-800">
        <span className="sm:hidden">Upload roadmap JSON(s).</span>
        <span className="hidden sm:inline">Drop or upload roadmap JSON(s).</span>
      </p>
      <p className="mt-2 max-w-md text-sm text-neutral-600">
        Each file you add becomes a separate line pair on a shared direction map — so you can see
        how multiple teams (or scenarios) stand against each other.
      </p>
      <button
        type="button"
        onClick={onPickFile}
        className="mt-5 inline-flex items-center rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-neutral-800"
      >
        Choose files…
      </button>
    </div>
  );
}
