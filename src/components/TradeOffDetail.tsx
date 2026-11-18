import { useEffect, useState } from 'react';
import { Category, TradeOff, VIRTUE_INDEX } from '../data/tradeOffs';
import { TradeOffSlider } from './TradeOffSlider';
import { TradeOffTable } from './TradeOffTable';
import { categoryAccent } from '../data/theme';
import { stripTradeOffPrefix } from '../data/textUtils';

interface TradeOffDetailProps {
  tradeOff: TradeOff;
  category: Category;
  currentColumn?: number | null;
  targetColumn?: number | null;
  onSetCurrent?: (col: number | null) => void;
  onSetTarget?: (col: number | null) => void;
}

type ViewMode = 'slider' | 'table';

export function TradeOffDetail({
  tradeOff,
  category,
  currentColumn,
  targetColumn,
  onSetCurrent,
  onSetTarget,
}: TradeOffDetailProps) {
  const [selected, setSelected] = useState<number>(VIRTUE_INDEX);
  const [mode, setMode] = useState<ViewMode>('slider');
  const accent = categoryAccent(category.romanId);

  useEffect(() => {
    setSelected(VIRTUE_INDEX);
  }, [tradeOff.code]);

  const isGenuine = tradeOff.type === 'G';

  return (
    <section className="space-y-6">
      <header
        className={[
          'relative overflow-hidden rounded-2xl border bg-white p-4 shadow-sm sm:p-6',
          isGenuine ? 'border-l-[3px]' : 'border-neutral-200',
        ].join(' ')}
        style={isGenuine ? { borderLeftColor: accent.fromHex } : undefined}
      >
        <div className="flex flex-wrap items-center gap-2">
          {isGenuine ? (
            <span
              className="inline-flex items-center rounded-full bg-neutral-900 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-neutral-100"
              title="Genuine trade-off: positional choice required"
            >
              Genuine trade-off
            </span>
          ) : (
            <span
              className="inline-flex items-center rounded-full bg-neutral-100 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-neutral-600"
              title="Legitimate trade-off"
            >
              Legitimate
            </span>
          )}
          <span className={`text-[10px] font-medium uppercase tracking-wider ${accent.text}`}>
            {category.title}
          </span>
        </div>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl md:text-4xl">
          {tradeOff.axis}
        </h2>
        <p className="mt-2 max-w-3xl text-sm italic text-neutral-700 sm:text-base">
          {stripTradeOffPrefix(tradeOff.summary)}
        </p>
      </header>

      <div className="hidden items-center justify-end gap-2 sm:flex">
        <span className="text-[10px] font-medium uppercase tracking-wider text-neutral-500">
          View
        </span>
        <div
          role="tablist"
          aria-label="View mode"
          className="inline-flex rounded-md border border-neutral-200 bg-white p-0.5 shadow-sm"
        >
          <ModeButton active={mode === 'slider'} onClick={() => setMode('slider')} label="Spectrum" />
          <ModeButton active={mode === 'table'} onClick={() => setMode('table')} label="Full table" />
        </div>
      </div>

      {/* Mobile always shows the slider — no toggle */}
      <div className="sm:hidden">
        <TradeOffSlider
          tradeOff={tradeOff}
          selectedColumn={selected}
          onSelect={setSelected}
          currentColumn={currentColumn ?? null}
          targetColumn={targetColumn ?? null}
          onSetCurrent={onSetCurrent}
          onSetTarget={onSetTarget}
        />
      </div>

      {/* Desktop honors the mode toggle */}
      <div className="hidden sm:block">
        {mode === 'slider' ? (
          <TradeOffSlider
            tradeOff={tradeOff}
            selectedColumn={selected}
            onSelect={setSelected}
            currentColumn={currentColumn ?? null}
            targetColumn={targetColumn ?? null}
            onSetCurrent={onSetCurrent}
            onSetTarget={onSetTarget}
          />
        ) : (
          <TradeOffTable
            tradeOff={tradeOff}
            selectedColumn={selected}
            onSelect={setSelected}
            currentColumn={currentColumn ?? null}
            targetColumn={targetColumn ?? null}
            onSetCurrent={onSetCurrent}
            onSetTarget={onSetTarget}
          />
        )}
      </div>
    </section>
  );
}

interface ModeButtonProps {
  active: boolean;
  onClick: () => void;
  label: string;
}

function ModeButton({ active, onClick, label }: ModeButtonProps) {
  return (
    <button
      role="tab"
      type="button"
      aria-selected={active}
      onClick={onClick}
      className={[
        'rounded px-3 py-1 text-[11px] font-medium uppercase tracking-wider transition',
        active ? 'bg-neutral-900 text-white' : 'text-neutral-600 hover:text-neutral-900',
      ].join(' ')}
    >
      {label}
    </button>
  );
}
