import { useState } from 'react';
import { COLUMN_LABELS, VIRTUE_INDEX } from '../data/tradeOffs';
import { spectrumColors } from '../data/theme';
import { PositionMapping, TechItem } from '../data/cncfMappings';

interface TechPanelProps {
  columnIndex: number;
  mapping: PositionMapping | null;
  positionName: string;
  showHeader?: boolean;
}

/**
 * Stand-alone tech panel with its own card chrome. Use this when the panel
 * lives on its own. Prefer `TechChips` for embedding inside another card.
 */
export function TechPanel({ columnIndex, mapping, positionName, showHeader = true }: TechPanelProps) {
  const colours = spectrumColors(columnIndex);
  return (
    <section
      aria-label={`Technologies and patterns for ${positionName}`}
      className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm"
    >
      <div aria-hidden className={['h-1 w-full', colours.topBar].join(' ')} />
      {showHeader && (
        <header className="flex flex-wrap items-baseline gap-2 border-b border-neutral-100 px-5 py-3">
          <p className={['text-[10px] font-medium uppercase tracking-wider', colours.text].join(' ')}>
            {COLUMN_LABELS[columnIndex]}
            {columnIndex === VIRTUE_INDEX ? ' ●' : ''}
          </p>
          <h4 className="text-lg font-semibold tracking-tight text-neutral-900">{positionName}</h4>
          <span className="ml-auto text-[10px] uppercase tracking-wider text-neutral-400">
            Technology mapping
          </span>
        </header>
      )}
      <div className="p-5">
        <TechChips mapping={mapping} />
      </div>
    </section>
  );
}

interface TechChipsProps {
  mapping: PositionMapping | null;
}

/**
 * Just the chips + empty state. Use this when embedding inside an existing
 * card so the chips share the surrounding chrome.
 */
export function TechChips({ mapping }: TechChipsProps) {
  const empty = !mapping || (mapping.techs.length === 0 && mapping.patterns.length === 0);
  if (empty) return <EmptyState note={mapping?.note} />;
  return (
    <div className="space-y-5">
      {mapping!.techs.length > 0 && <Group title="Technologies" items={mapping!.techs} />}
      {mapping!.patterns.length > 0 && (
        <Group title="Architectural patterns" items={mapping!.patterns} />
      )}
      {mapping!.note && (
        <p className="border-t border-neutral-100 pt-3 text-xs italic text-neutral-500">
          {mapping!.note}
        </p>
      )}
    </div>
  );
}

function Group({ title, items }: { title: string; items: readonly TechItem[] }) {
  return (
    <div>
      <p className="text-[10px] font-medium uppercase tracking-wider text-neutral-500">{title}</p>
      <ul className="mt-2 flex flex-wrap gap-2">
        {items.map(item => (
          <li key={`${item.kind}-${item.name}`}>
            <Chip item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function Chip({ item }: { item: TechItem }) {
  const chipClass = [
    'group inline-flex items-center gap-2 rounded-full border bg-white py-1 pl-1 pr-3 shadow-sm transition',
    'hover:border-neutral-400 hover:shadow',
    item.kind === 'tech' ? 'border-neutral-200' : 'border-dashed border-neutral-300',
  ].join(' ');

  const content = (
    <>
      <ChipIcon item={item} />
      <span className="text-sm font-medium text-neutral-900">{item.name}</span>
      {item.url && (
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.75}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-3 w-3 text-neutral-400 transition group-hover:text-neutral-700"
        >
          <path d="M14 4h6v6" />
          <path d="M10 14L20 4" />
          <path d="M20 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5" />
        </svg>
      )}
    </>
  );

  if (item.url) {
    return (
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        title={item.reason}
        className={chipClass}
      >
        {content}
      </a>
    );
  }
  return (
    <span title={item.reason} className={chipClass}>
      {content}
    </span>
  );
}

function ChipIcon({ item }: { item: TechItem }) {
  const [failed, setFailed] = useState(false);
  const showLogo = item.kind === 'tech' && item.iconSlug && !failed;

  if (showLogo) {
    return (
      <span
        aria-hidden
        className="flex h-6 w-6 items-center justify-center rounded-full bg-white ring-1 ring-neutral-200"
      >
        <img
          src={`https://cdn.simpleicons.org/${item.iconSlug}`}
          alt=""
          loading="lazy"
          className="h-3.5 w-3.5"
          onError={() => setFailed(true)}
        />
      </span>
    );
  }

  return (
    <span
      aria-hidden
      className={[
        'flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-semibold',
        item.kind === 'tech'
          ? 'bg-slate-900 text-white'
          : 'border border-neutral-300 bg-white text-neutral-900',
      ].join(' ')}
    >
      {item.initials}
    </span>
  );
}

function EmptyState({ note }: { note?: string }) {
  return (
    <div className="rounded-lg border border-dashed border-neutral-300 bg-neutral-50/60 p-5 text-center">
      <p className="text-[10px] font-medium uppercase tracking-wider text-neutral-500">
        No technology here
      </p>
      <p className="mt-2 text-sm leading-relaxed text-neutral-700">
        {note ??
          'This position is determined by organisational decisions, not tool choices. No specific technology places you here.'}
      </p>
    </div>
  );
}
