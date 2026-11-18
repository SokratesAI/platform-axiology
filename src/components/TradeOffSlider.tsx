import { useEffect, useRef } from 'react';
import { COLUMN_LABELS, TradeOff, TradeOffColumn, VIRTUE_INDEX } from '../data/tradeOffs';
import { spectrumColors } from '../data/theme';
import { getCncfMapping } from '../data/cncfMappings';
import { TechChips } from './TechPanel';
import { MarkButton } from './MarkButton';

interface TradeOffSliderProps {
  tradeOff: TradeOff;
  selectedColumn: number;
  onSelect: (columnIndex: number) => void;
  currentColumn?: number | null;
  targetColumn?: number | null;
  /** Provide both to render the MarkTrack and let users set positions inline. */
  onSetCurrent?: (col: number | null) => void;
  onSetTarget?: (col: number | null) => void;
  /** When false, hides the detail article card (spectrum + mark track still shown). */
  showDetail?: boolean;
}

interface FieldSpec {
  key: keyof TradeOffColumn;
  label: string;
}

const FIELDS: FieldSpec[] = [
  { key: 'internalNarrative', label: 'Internal narrative' },
  { key: 'description', label: 'Description' },
  { key: 'whatItProduces', label: 'What it produces' },
  { key: 'whenCorrect', label: 'When it is correct' },
  { key: 'howArrive', label: 'How you arrive here' },
  { key: 'failureSignal', label: 'Failure signal' },
  { key: 'theCorrective', label: 'The corrective' },
];

export function TradeOffSlider({
  tradeOff,
  selectedColumn,
  onSelect,
  currentColumn,
  targetColumn,
  onSetCurrent,
  onSetTarget,
  showDetail = true,
}: TradeOffSliderProps) {
  const column = tradeOff.columns[selectedColumn];
  const selectedColours = spectrumColors(selectedColumn);
  const mapping = getCncfMapping(tradeOff.code, selectedColumn);
  const canMark = Boolean(onSetCurrent && onSetTarget);

  const scrollRef = useRef<HTMLDivElement>(null);
  const didMountRef = useRef(false);
  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    }
    const wrap = scrollRef.current;
    if (!wrap) return;
    const cell = wrap.querySelector<HTMLElement>(`[data-col="${selectedColumn}"]`);
    if (!cell) return;
    // inline-only scroll to avoid pulling the page vertically toward the carousel
    const wrapRect = wrap.getBoundingClientRect();
    const cellRect = cell.getBoundingClientRect();
    const offset = cellRect.left - wrapRect.left - (wrapRect.width - cellRect.width) / 2;
    wrap.scrollBy({ left: offset, behavior: 'smooth' });
  }, [selectedColumn, tradeOff.code]);

  return (
    <div className="space-y-6">
      <div>
        <div className="mb-2 flex items-center justify-between gap-1 text-[9px] font-medium uppercase tracking-wider sm:text-[10px]">
          <span className="truncate text-rose-700">{tradeOff.columns[0].positionName}</span>
          <span className="shrink-0 text-amber-700">↔ Mean ↔</span>
          <span className="truncate text-right text-sky-700">{tradeOff.columns[6].positionName}</span>
        </div>

        <div
          aria-hidden
          className="mb-3 h-1.5 rounded-full bg-gradient-to-r from-rose-300 via-amber-300 to-sky-300"
        />

        <div
          ref={scrollRef}
          className="-mx-3 overflow-x-auto px-3 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:overflow-visible sm:px-0 sm:pb-0"
        >
          <div
            role="radiogroup"
            aria-label={`${tradeOff.axis} positions`}
            className="flex snap-x snap-mandatory gap-2 sm:grid sm:grid-cols-7 sm:gap-1.5"
          >
            {tradeOff.columns.map((c, i) => {
              const isSelected = i === selectedColumn;
              const isCurrent = currentColumn === i;
              const isTarget = targetColumn === i;
              const colours = spectrumColors(i);
              return (
                <button
                  key={i}
                  role="radio"
                  type="button"
                  data-col={i}
                  aria-checked={isSelected}
                  onClick={() => onSelect(i)}
                  title={`${COLUMN_LABELS[i]} — ${c.positionName}`}
                  className={[
                    'group relative flex w-[38vw] max-w-[140px] shrink-0 snap-center flex-col items-center rounded-lg border px-2 pb-7 pt-2.5 text-center transition sm:w-auto sm:max-w-none sm:shrink sm:snap-start sm:px-2 sm:pt-3',
                    isSelected ? colours.selected : `${colours.base} ${colours.baseHover}`,
                  ].join(' ')}
                >
                  <span className="text-[9px] font-medium uppercase tracking-wider opacity-80">
                    {COLUMN_LABELS[i]}
                  </span>
                  <span className="mt-1 line-clamp-2 text-xs font-semibold leading-tight">
                    {c.positionName}
                  </span>
                  <div className="absolute inset-x-0 bottom-1.5 flex h-3 items-center justify-center gap-1">
                    {isCurrent && (
                      <span
                        aria-hidden
                        title="We're here"
                        className="h-2 w-2 rounded-full bg-indigo-600 ring-2 ring-white"
                      />
                    )}
                    {isTarget && (
                      <span
                        aria-hidden
                        title="We want this"
                        className="h-2 w-2 rounded-full border-2 border-emerald-600 bg-white"
                      />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile-only: position indicator + prev/next */}
        <div className="mt-3 flex items-center justify-between gap-3 sm:hidden">
          <button
            type="button"
            onClick={() => onSelect(Math.max(0, selectedColumn - 1))}
            disabled={selectedColumn === 0}
            aria-label="Previous position"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 shadow-sm disabled:opacity-40"
          >
            ←
          </button>
          <div className="flex items-center gap-1.5" aria-hidden>
            {tradeOff.columns.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => onSelect(i)}
                aria-label={`Go to position ${i + 1}`}
                className={[
                  'h-2 rounded-full transition-all',
                  i === selectedColumn ? 'w-5 bg-neutral-900' : 'w-2 bg-neutral-300',
                ].join(' ')}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => onSelect(Math.min(6, selectedColumn + 1))}
            disabled={selectedColumn === 6}
            aria-label="Next position"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 shadow-sm disabled:opacity-40"
          >
            →
          </button>
        </div>

        {canMark && (
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:justify-start">
            <MarkButton
              tone="current"
              label="We're here"
              active={currentColumn === selectedColumn}
              onClick={() =>
                onSetCurrent!(currentColumn === selectedColumn ? null : selectedColumn)
              }
            />
            <MarkButton
              tone="target"
              label="We want this"
              active={targetColumn === selectedColumn}
              onClick={() =>
                onSetTarget!(targetColumn === selectedColumn ? null : selectedColumn)
              }
            />
          </div>
        )}
      </div>

      {/* Compact summary — hidden when full detail is open (redundant there) */}
      {!showDetail && (
        <div className="border-t border-neutral-100 pt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400">Mindset</p>
            <p className="mt-1 text-sm italic leading-relaxed text-neutral-700">{column.internalNarrative}</p>
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400">Effect</p>
            <p className="mt-1 text-sm leading-relaxed text-neutral-600">{column.description}</p>
          </div>
        </div>
      )}

      {showDetail && (
        <article className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
          <div aria-hidden className={`h-1 w-full ${selectedColours.topBar}`} />
          <div className="space-y-5 p-4 sm:space-y-6 sm:p-6">
            <header>
              <p className={`text-[10px] font-medium uppercase tracking-wider ${selectedColours.text}`}>
                {COLUMN_LABELS[selectedColumn]}
                {selectedColumn === VIRTUE_INDEX ? ' ● reference point' : ''}
              </p>
              <h3 className="mt-1 text-xl font-semibold tracking-tight text-neutral-900 sm:text-2xl md:text-3xl">
                {column.positionName}
              </h3>
            </header>

            <section className="divide-y divide-neutral-200">
              {FIELDS.map(f => (
                <FieldRow key={f.key} label={f.label} body={resolveField(column, f.key)} />
              ))}
            </section>

            <section className="border-t border-neutral-100 pt-5">
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-neutral-700">
                What gets you here
              </p>
              <TechChips mapping={mapping} />
            </section>
          </div>
        </article>
      )}
    </div>
  );
}

function resolveField(column: TradeOffColumn, key: keyof TradeOffColumn): string {
  const body = column[key];
  if (key === 'theCorrective' && (body === '—' || body.trim() === '')) {
    return 'No correction needed — this is the calibrated reference position.';
  }
  return body;
}

function FieldRow({ label, body }: { label: string; body: string }) {
  return (
    <div className="py-3 first:pt-0 last:pb-0 sm:py-4">
      <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-800 sm:text-xs">{label}</p>
      <p className="mt-1.5 text-sm leading-relaxed text-neutral-700 sm:text-base">{body}</p>
    </div>
  );
}

