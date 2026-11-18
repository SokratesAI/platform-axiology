import { useEffect, useRef, useState } from 'react';
import {
  ALL_TRADE_OFFS,
  COLUMN_LABELS,
  CATEGORIES,
  TradeOff,
  TradeOffColumn,
  VIRTUE_INDEX,
} from '../data/tradeOffs';
import { useAssessments } from '../hooks/useAssessments';
import { categoryAccent, spectrumColors } from '../data/theme';
import { getCncfMapping } from '../data/cncfMappings';
import { TechChips } from './TechPanel';
import { GaugeIcon } from './Icon';
import { RoadmapGraph } from './RoadmapGraph';
import { navigate } from '../routing';

export function RoadmapView() {
  const { assessments, clear, exportJSON, importJSON } = useAssessments();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dragCounter = useRef(0);
  const [confirmClear, setConfirmClear] = useState(false);
  const [importMsg, setImportMsg] = useState<{ ok: boolean; text: string } | null>(null);
  const [flashCode, setFlashCode] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [exportNameDraft, setExportNameDraft] = useState<string | null>(null);
  const exportNameRef = useRef<HTMLInputElement>(null);
  const [search, setSearch] = useState('');
  const [manageOpen, setManageOpen] = useState(false);

  useEffect(() => {
    if (!flashCode) return;
    const id = setTimeout(() => setFlashCode(null), 1400);
    return () => clearTimeout(id);
  }, [flashCode]);

  const handleGraphSelect = (code: string) => {
    const el = document.getElementById(`tradeOff-${code}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setFlashCode(code);
    }
  };

  const assessed = ALL_TRADE_OFFS.filter(t => {
    const a = assessments.get(t.code);
    return a && (a.currentColumn != null || a.targetColumn != null);
  });

  const handleExport = (name: string) => {
    const json = exportJSON();
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const safe = name.trim().replace(/[^a-z0-9\-_. ]/gi, '').replace(/\s+/g, '-') || 'roadmap';
    a.href = url;
    a.download = `${safe}.json`;
    a.click();
    URL.revokeObjectURL(url);
    setExportNameDraft(null);
  };

  const openExportDialog = () => {
    const now = new Date().toISOString().slice(0, 10);
    setExportNameDraft(`platform-axiology-roadmap-${now}`);
    setTimeout(() => exportNameRef.current?.select(), 50);
  };

  const handleImportFile = async (file: File) => {
    const text = await file.text();
    const result = importJSON(text);
    if (result.ok) {
      setImportMsg({ ok: true, text: `Imported ${result.count ?? 0} trade-offs.` });
    } else {
      setImportMsg({ ok: false, text: result.error ?? 'Import failed.' });
    }
    setTimeout(() => setImportMsg(null), 4000);
  };

  const triggerImport = () => {
    fileInputRef.current?.click();
  };

  const handleClear = () => {
    clear();
    setConfirmClear(false);
  };

  const onDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    if (!e.dataTransfer.types.includes('Files')) return;
    dragCounter.current += 1;
    setIsDragging(true);
  };
  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };
  const onDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    dragCounter.current = Math.max(0, dragCounter.current - 1);
    if (dragCounter.current === 0) setIsDragging(false);
  };
  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    dragCounter.current = 0;
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) void handleImportFile(file);
  };

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
            <p className="text-base font-semibold text-indigo-700">Drop the JSON to import</p>
            <p className="mt-1 text-sm text-neutral-600">
              Replaces all current and target positions.
            </p>
          </div>
        </div>
      )}
      <header className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-900 text-white shadow-sm">
              <GaugeIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-[11px] font-medium uppercase tracking-wider text-neutral-500">
                Roadmap
              </p>
              <h2 className="text-xl font-semibold tracking-tight text-neutral-900 sm:text-2xl md:text-3xl">
                Where you are → where you want to be
              </h2>
            </div>
          </div>
          <div className="flex w-full flex-wrap items-center gap-2 sm:w-auto">
            <input
              type="search"
              placeholder="Search…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="hidden min-w-0 flex-1 rounded-md border border-neutral-200 bg-white px-3 py-1.5 text-sm text-neutral-900 placeholder-neutral-400 focus:border-neutral-400 focus:outline-none sm:block sm:w-40 sm:flex-none"
            />
            {/* Mobile: collapsible "Manage" group */}
            <button
              type="button"
              onClick={() => setManageOpen(o => !o)}
              aria-expanded={manageOpen}
              className="inline-flex w-full items-center justify-between gap-2 rounded-md border border-neutral-300 bg-white px-3 py-2 text-xs font-medium text-neutral-700 shadow-sm hover:bg-neutral-100 sm:hidden"
            >
              <span>Import / Export / Reset</span>
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
                <ToolbarButton onClick={triggerImport}>Import JSON</ToolbarButton>
                <ToolbarButton onClick={openExportDialog} disabled={assessed.length === 0}>
                  Export JSON
                </ToolbarButton>
                <ToolbarButton onClick={() => setConfirmClear(true)} disabled={assessed.length === 0} danger>
                  Reset
                </ToolbarButton>
              </div>
            )}
            {/* Desktop: inline buttons */}
            <div className="hidden items-center gap-2 sm:flex">
              <ToolbarButton onClick={triggerImport}>Import JSON</ToolbarButton>
              <ToolbarButton onClick={openExportDialog} disabled={assessed.length === 0}>
                Export JSON
              </ToolbarButton>
              <ToolbarButton onClick={() => setConfirmClear(true)} disabled={assessed.length === 0} danger>
                Reset
              </ToolbarButton>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              className="hidden"
              onChange={e => {
                const file = e.target.files?.[0];
                if (file) void handleImportFile(file);
                e.target.value = '';
              }}
            />
          </div>
        </div>
        <p className="mt-4 max-w-3xl text-sm text-neutral-700">
          Each trade-off you&apos;ve marked appears below. The gap between current and target is the
          movement that needs to happen. The corrective is what to do first. The chips are technologies
          and patterns that push you toward your target.{' '}
          <span className="text-neutral-500">
            Tip: you can also drop a JSON file anywhere on this page to import.
          </span>
        </p>
        {exportNameDraft !== null && (
          <div className="mt-4 flex items-center gap-2">
            <input
              ref={exportNameRef}
              type="text"
              value={exportNameDraft}
              onChange={e => setExportNameDraft(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter') handleExport(exportNameDraft);
                if (e.key === 'Escape') setExportNameDraft(null);
              }}
              placeholder="File name"
              className="flex-1 rounded-md border border-neutral-300 px-3 py-1.5 text-sm text-neutral-900 focus:border-neutral-500 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => handleExport(exportNameDraft)}
              className="inline-flex items-center rounded-md bg-neutral-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-neutral-700"
            >
              Download
            </button>
            <button
              type="button"
              onClick={() => setExportNameDraft(null)}
              className="rounded-md border border-neutral-200 px-3 py-1.5 text-sm text-neutral-500 hover:bg-neutral-50"
            >
              Cancel
            </button>
          </div>
        )}
        {importMsg && (
          <p
            className={[
              'mt-3 text-xs',
              importMsg.ok ? 'text-emerald-700' : 'text-rose-700',
            ].join(' ')}
          >
            {importMsg.text}
          </p>
        )}
        {assessed.length > 0 && (
          <p className="mt-3 text-[11px] text-neutral-500">
            {assessed.length} trade-off{assessed.length !== 1 ? 's' : ''} assessed
          </p>
        )}
      </header>

      <div className="grid gap-8 lg:grid-cols-[360px_minmax(0,1fr)]">
        <aside>
          <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
            <p className="mb-2 text-[11px] font-medium uppercase tracking-wider text-neutral-500">
              Direction map
            </p>
            <p className="mb-3 text-xs leading-relaxed text-neutral-600">
              One row per trade-off. Filled dot = where you are. Outlined dot = where you want to be.
              The lines criss-cross where current and target diverge.
            </p>
            <RoadmapGraph assessments={assessments} onSelect={handleGraphSelect} />
            <div className="mt-3 flex flex-wrap items-center gap-3 text-[11px] text-neutral-600">
              <span className="inline-flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-indigo-600" /> Current
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full border-2 border-emerald-600 bg-white" /> Target
              </span>
            </div>
          </div>
        </aside>

        <div>
          <input
            type="search"
            placeholder="Search trade-offs…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="mb-4 w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 placeholder-neutral-400 focus:border-neutral-400 focus:outline-none sm:hidden"
          />
          {assessed.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="space-y-10">
              {CATEGORIES.map(c => {
                const q = search.trim().toLowerCase();
                const tradeOffsInCat = c.tradeOffs.filter(t => {
                  const a = assessments.get(t.code);
                  if (!(a && (a.currentColumn != null || a.targetColumn != null))) return false;
                  if (!q) return true;
                  return t.axis.toLowerCase().includes(q) || t.code.toLowerCase().includes(q);
                });
                if (tradeOffsInCat.length === 0) return null;
                const accent = categoryAccent(c.romanId);
                return (
                  <section key={c.romanId}>
                    <h3
                      className={`mb-4 text-sm font-semibold uppercase tracking-wider ${accent.text}`}
                    >
                      {c.title}
                    </h3>
                    <div className="space-y-4">
                      {tradeOffsInCat.map(t => (
                        <RoadmapRow
                          key={t.code}
                          tradeOff={t}
                          current={assessments.get(t.code)?.currentColumn ?? null}
                          target={assessments.get(t.code)?.targetColumn ?? null}
                          flashing={flashCode === t.code}
                        />
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {confirmClear && (
        <ConfirmDialog
          title="Reset all positions?"
          body="This deletes every current and target position you've marked. The action cannot be undone."
          confirmLabel="Yes, reset"
          onCancel={() => setConfirmClear(false)}
          onConfirm={handleClear}
        />
      )}
    </section>
  );
}

interface RoadmapRowProps {
  tradeOff: TradeOff;
  current: number | null;
  target: number | null;
  flashing: boolean;
}

function RoadmapRow({ tradeOff, current, target, flashing }: RoadmapRowProps) {
  const currentCol = current != null ? tradeOff.columns[current] : null;
  const targetCol = target != null ? tradeOff.columns[target] : null;
  const gap = current != null && target != null ? Math.abs(target - current) : null;
  const direction =
    current != null && target != null
      ? target === current
        ? 'stay'
        : target < current
          ? 'left'
          : 'right'
      : null;

  // Tech suggestions to reach the TARGET position.
  const targetMapping = target != null ? getCncfMapping(tradeOff.code, target) : null;

  return (
    <article
      id={`tradeOff-${tradeOff.code}`}
      className={[
        'overflow-hidden rounded-xl border bg-white shadow-sm transition',
        flashing
          ? 'border-indigo-400 ring-2 ring-indigo-200'
          : 'border-neutral-200',
      ].join(' ')}
    >
      <div className="p-5">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <div className="flex items-baseline gap-3">
            <h4 className="text-lg font-semibold tracking-tight text-neutral-900">{tradeOff.axis}</h4>
            <button
              type="button"
              onClick={() => navigate({ view: 'trade-offs', tradeOffCode: tradeOff.code })}
              className="text-xs font-medium text-indigo-600 hover:text-indigo-800 hover:underline"
            >
              Read more →
            </button>
          </div>
          {gap != null && (
            <span
              className={[
                'rounded-full px-2 py-0.5 text-xs font-medium',
                gap === 0
                  ? 'bg-emerald-100 text-emerald-800'
                  : gap === 1
                    ? 'bg-amber-100 text-amber-800'
                    : gap === 2
                      ? 'bg-amber-200 text-amber-900'
                      : 'bg-red-200 text-red-900',
              ].join(' ')}
            >
              {direction === 'stay'
                ? 'on target'
                : `move ${gap} ${gap === 1 ? 'step' : 'steps'} ${direction === 'left' ? '←' : '→'}`}
            </span>
          )}
        </div>

        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <PositionCard label="We're here" tone="current" column={current} columnObj={currentCol} />
          <PositionCard label="We want this" tone="target" column={target} columnObj={targetCol} />
        </div>

        {currentCol && currentCol.theCorrective && currentCol.theCorrective !== '—' && (
          <div className="mt-4 rounded-md border border-neutral-200 bg-neutral-50 p-4">
            <p className="text-[10px] font-medium uppercase tracking-wider text-neutral-500">
              First corrective from where you are
            </p>
            <p className="mt-1 text-sm leading-relaxed text-neutral-800">{currentCol.theCorrective}</p>
          </div>
        )}

        {target != null && targetMapping && (targetMapping.techs.length > 0 || targetMapping.patterns.length > 0) && (
          <div className="mt-4 border-t border-neutral-100 pt-4">
            <p className="mb-3 text-[10px] font-medium uppercase tracking-wider text-neutral-500">
              What gets you to the target
            </p>
            <TechChips mapping={targetMapping} />
          </div>
        )}
      </div>
    </article>
  );
}

interface PositionCardProps {
  label: string;
  tone: 'current' | 'target';
  column: number | null;
  columnObj: TradeOffColumn | null;
}

function PositionCard({ label, tone, column, columnObj }: PositionCardProps) {
  const dotClass =
    tone === 'current'
      ? 'bg-indigo-600 ring-2 ring-white'
      : 'border-2 border-emerald-600 bg-white';
  const labelClass = tone === 'current' ? 'text-indigo-700' : 'text-emerald-700';

  if (column == null || !columnObj) {
    return (
      <div className="rounded-md border border-dashed border-neutral-300 p-3 text-sm text-neutral-500">
        <span className={`text-[10px] font-medium uppercase tracking-wider ${labelClass}`}>
          {label}
        </span>
        <p className="mt-1">Not set</p>
      </div>
    );
  }

  const cols = spectrumColors(column);
  return (
    <div className="rounded-md border border-neutral-200 bg-white p-3">
      <div className="flex items-center gap-2">
        <span aria-hidden className={`inline-block h-2 w-2 rounded-full ${dotClass}`} />
        <span className={`text-[10px] font-medium uppercase tracking-wider ${labelClass}`}>
          {label}
        </span>
      </div>
      <div className="mt-2 flex items-baseline gap-2">
        <span className={`text-[10px] font-medium uppercase tracking-wider ${cols.text}`}>
          {COLUMN_LABELS[column]}
          {column === VIRTUE_INDEX ? ' ●' : ''}
        </span>
      </div>
      <p className="mt-1 text-sm font-semibold text-neutral-900">{columnObj.positionName}</p>
      <p className="mt-1 text-xs leading-relaxed text-neutral-600">{columnObj.description}</p>
    </div>
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

function EmptyState() {
  return (
    <div className="rounded-xl border border-dashed border-neutral-300 bg-white p-10 text-center">
      <p className="text-base font-semibold text-neutral-800">
        No positions marked yet.
      </p>
      <p className="mt-2 text-sm text-neutral-600">
        Open the Trade-offs page, pick a trade-off, and use{' '}
        <strong>We&apos;re here</strong> / <strong>We want this</strong> on any column. Come back
        here to see the gap and the suggested next moves.
      </p>
    </div>
  );
}

interface ConfirmDialogProps {
  title: string;
  body: string;
  confirmLabel: string;
  onCancel: () => void;
  onConfirm: () => void;
}

function ConfirmDialog({ title, body, confirmLabel, onCancel, onConfirm }: ConfirmDialogProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-900/40 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="confirm-title"
    >
      <div className="w-full max-w-md rounded-xl border border-neutral-200 bg-white p-6 shadow-xl">
        <h3 id="confirm-title" className="text-lg font-semibold tracking-tight text-neutral-900">
          {title}
        </h3>
        <p className="mt-2 text-sm text-neutral-700">{body}</p>
        <div className="mt-5 flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={onCancel}
            className="inline-flex items-center rounded-md border border-neutral-300 bg-white px-3 py-1.5 text-sm font-medium text-neutral-700 hover:bg-neutral-100"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="inline-flex items-center rounded-md bg-rose-600 px-3 py-1.5 text-sm font-medium text-white shadow-sm hover:bg-rose-700"
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
