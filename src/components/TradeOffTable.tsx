import { COLUMN_LABELS, TradeOff, VIRTUE_INDEX, TradeOffColumn } from '../data/tradeOffs';
import { MarkButton } from './MarkButton';

interface TradeOffTableProps {
  tradeOff: TradeOff;
  selectedColumn?: number;
  onSelect?: (columnIndex: number) => void;
  currentColumn?: number | null;
  targetColumn?: number | null;
  /** Provide both to render the mark buttons under the table. */
  onSetCurrent?: (col: number | null) => void;
  onSetTarget?: (col: number | null) => void;
}

const ROWS: { key: keyof TradeOffColumn; label: string }[] = [
  { key: 'description', label: 'Description' },
  { key: 'howArrive', label: 'How you arrive' },
  { key: 'internalNarrative', label: 'Internal narrative' },
  { key: 'whatItProduces', label: 'What it produces' },
  { key: 'whenCorrect', label: 'When correct' },
  { key: 'failureSignal', label: 'Failure signal' },
  { key: 'theCorrective', label: 'The corrective' },
];

function headerTint(i: number): string {
  if (i <= 2) return 'bg-gradient-to-b from-rose-100 to-rose-50';
  if (i === 3) return 'bg-gradient-to-b from-amber-100 to-amber-50';
  return 'bg-gradient-to-b from-sky-100 to-sky-50';
}

function cellTint(i: number): string {
  if (i === 3) return 'bg-amber-50/30';
  return '';
}

export function TradeOffTable({
  tradeOff,
  selectedColumn,
  onSelect,
  currentColumn,
  targetColumn,
  onSetCurrent,
  onSetTarget,
}: TradeOffTableProps) {
  const canMark = Boolean(onSetCurrent && onSetTarget);
  return (
    <div className="space-y-4">
      {canMark && selectedColumn != null && (
        <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
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
    {/* Mobile: stack of column cards (one per column, all 7 fields) */}
    <div className="space-y-3 sm:hidden">
      {tradeOff.columns.map((c, i) => {
        const isVirtue = i === VIRTUE_INDEX;
        const isSelected = selectedColumn === i;
        return (
          <button
            key={i}
            type="button"
            onClick={() => onSelect?.(i)}
            className={[
              'block w-full overflow-hidden rounded-xl border bg-white text-left shadow-sm transition',
              isSelected ? 'border-neutral-900 ring-1 ring-neutral-900' : 'border-neutral-200',
            ].join(' ')}
          >
            <div className={['flex items-start gap-3 px-4 py-3', headerTint(i)].join(' ')}>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-medium uppercase tracking-wider text-neutral-600">
                  {COLUMN_LABELS[i]}
                  {isVirtue ? ' ★' : ''}
                </p>
                <p className="mt-0.5 text-sm font-semibold text-neutral-900">{c.positionName}</p>
              </div>
              <div className="flex shrink-0 items-center gap-1 pt-1">
                {currentColumn === i && (
                  <span aria-hidden title="We're here" className="h-2.5 w-2.5 rounded-full bg-indigo-600 ring-2 ring-white" />
                )}
                {targetColumn === i && (
                  <span aria-hidden title="We want this" className="h-2.5 w-2.5 rounded-full border-2 border-emerald-600 bg-white" />
                )}
              </div>
            </div>
            <dl className="divide-y divide-neutral-100 px-4 py-3 text-[13px] text-neutral-800">
              {ROWS.map(row => (
                <div key={row.key} className="py-2 first:pt-0 last:pb-0">
                  <dt className="text-[10px] font-medium uppercase tracking-wider text-neutral-500">{row.label}</dt>
                  <dd className="mt-0.5 leading-snug">{c[row.key]}</dd>
                </div>
              ))}
            </dl>
          </button>
        );
      })}
    </div>

    {/* Desktop: full table */}
    <div className="hidden overflow-hidden overflow-x-auto rounded-xl border border-neutral-200 bg-white shadow-sm sm:block">
      <table className="w-full min-w-[980px] table-fixed border-collapse text-xs">
        <thead>
          <tr>
            <th className="w-32 border-b border-r border-neutral-200 bg-neutral-50 px-2.5 py-2.5 text-left text-[10px] font-medium uppercase tracking-wider text-neutral-500">
              Field
            </th>
            {tradeOff.columns.map((c, i) => {
              const isVirtue = i === VIRTUE_INDEX;
              const isSelected = selectedColumn === i;
              return (
                <th
                  key={i}
                  scope="col"
                  className={[
                    'border-b border-r border-neutral-200 px-2 py-2.5 align-top text-left',
                    headerTint(i),
                    isSelected ? 'ring-2 ring-inset ring-neutral-900' : '',
                  ].join(' ')}
                >
                  <button
                    type="button"
                    onClick={() => onSelect?.(i)}
                    className="flex w-full flex-col items-start text-left"
                  >
                    <span className="text-[9px] font-medium uppercase tracking-wider text-neutral-600">
                      {COLUMN_LABELS[i]}
                      {isVirtue ? ' ★' : ''}
                    </span>
                    <span className="mt-0.5 text-[12px] font-semibold leading-tight text-neutral-900">
                      {c.positionName}
                    </span>
                    <div className="mt-1.5 flex h-3 items-center gap-1">
                      {currentColumn === i && (
                        <span aria-hidden title="We're here" className="h-2 w-2 rounded-full bg-indigo-600 ring-2 ring-white" />
                      )}
                      {targetColumn === i && (
                        <span aria-hidden title="We want this" className="h-2 w-2 rounded-full border-2 border-emerald-600 bg-white" />
                      )}
                    </div>
                  </button>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {ROWS.map(row => (
            <tr key={row.key}>
              <th
                scope="row"
                className="border-b border-r border-neutral-200 bg-neutral-50 px-2.5 py-2.5 align-top text-left text-[10px] font-medium uppercase tracking-wider text-neutral-500"
              >
                {row.label}
              </th>
              {tradeOff.columns.map((c, i) => {
                const isSelected = selectedColumn === i;
                const value = c[row.key];
                return (
                  <td
                    key={i}
                    className={[
                      'border-b border-r border-neutral-200 px-2 py-2.5 align-top text-[12px] leading-snug text-neutral-800',
                      cellTint(i),
                      isSelected ? 'ring-2 ring-inset ring-neutral-900' : '',
                    ].join(' ')}
                  >
                    {value}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}
