import { useEffect, useMemo, useRef, useState } from 'react';
import {
  ALL_TRADE_OFFS,
  CATEGORIES,
  Category,
  getCategoryForTradeOff,
  TradeOff,
  VIRTUE_INDEX,
} from '../data/tradeOffs';
import { TradeOffSlider } from './TradeOffSlider';
import { TradeOffTable } from './TradeOffTable';
import { TradeOffDetail } from './TradeOffDetail';
import { TradeOffListSidebar } from './TradeOffListSidebar';
import { TradeOffsOverview } from './TradeOffsOverview';
import { useAssessments } from '../hooks/useAssessments';
import { navigate, useRoute } from '../routing';
import { categoryAccent } from '../data/theme';
import { stripTradeOffPrefix } from '../data/textUtils';
import { CloseIcon } from './Icon';

type LearnMode = 'compact' | 'sidebar';

function useLearnMode(): [LearnMode, (m: LearnMode) => void] {
  const [mode, setMode] = useState<LearnMode>(() => {
    try {
      const stored = localStorage.getItem('pa:learn-mode');
      return stored === 'sidebar' ? 'sidebar' : 'compact';
    } catch {
      return 'compact';
    }
  });
  const setAndPersist = (m: LearnMode) => {
    setMode(m);
    try { localStorage.setItem('pa:learn-mode', m); } catch { /* quota or SSR */ }
  };
  return [mode, setAndPersist];
}

export function TradeOffsView() {
  const route = useRoute();
  const activeCode = route.view === 'trade-offs' ? route.tradeOffCode ?? null : null;
  const { assessments, setCurrent, setTarget } = useAssessments();
  const [learnMode, setLearnMode] = useLearnMode();

  // browsing = false → show the overview/landing page
  const [browsing, setBrowsing] = useState(() => activeCode !== null);

  // ── Compact accordion state (always initialised — hooks must not be conditional) ──
  const [openCategories, setOpenCategories] = useState<Set<string>>(
    () => new Set([CATEGORIES[0].romanId]),
  );
  const [search, setSearch] = useState('');
  const [browseDrawerOpen, setBrowseDrawerOpen] = useState(false);

  // Lock body scroll while the mobile browse drawer is open
  useEffect(() => {
    if (!browseDrawerOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setBrowseDrawerOpen(false);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [browseDrawerOpen]);

  // ── Sidebar ref / derived data ───────────────────────────────────
  const detailRef = useRef<HTMLDivElement>(null);
  const tradeOff = useMemo(
    () => (activeCode ? ALL_TRADE_OFFS.find(t => t.code === activeCode) ?? null : null),
    [activeCode],
  );
  const category = tradeOff ? getCategoryForTradeOff(tradeOff.code) ?? CATEGORIES[0] : null;
  const assessment = tradeOff ? assessments.get(tradeOff.code) : undefined;

  // Deep-link: if a trade-off code arrives via URL, auto-enter browsing mode
  // and open the relevant category
  useEffect(() => {
    if (activeCode === null) return;
    setBrowsing(true);
    for (const cat of CATEGORIES) {
      if (cat.tradeOffs.some(t => t.code === activeCode)) {
        setOpenCategories(prev =>
          prev.has(cat.romanId) ? prev : new Set([...prev, cat.romanId]),
        );
        break;
      }
    }
  }, [activeCode]);

  // Auto-open categories that have matching trade-offs when searching
  useEffect(() => {
    const q = search.trim().toLowerCase();
    if (!q) return;
    const matching = CATEGORIES
      .filter(cat => cat.tradeOffs.some(t => t.axis.toLowerCase().includes(q) || t.code.toLowerCase().includes(q) || t.summary.toLowerCase().includes(q)))
      .map(cat => cat.romanId);
    setOpenCategories(prev => new Set([...prev, ...matching]));
  }, [search]);

  // Listen for nav "Browse trade-offs" when already on this view (same hash = no re-mount)
  useEffect(() => {
    const handler = () => setBrowsing(false);
    window.addEventListener('pa:trade-offs-overview', handler);
    return () => window.removeEventListener('pa:trade-offs-overview', handler);
  }, []);

  // ── Handlers ─────────────────────────────────────────────────────
  const toggleCategory = (romanId: string) => {
    setOpenCategories(prev => {
      const next = new Set(prev);
      if (next.has(romanId)) next.delete(romanId);
      else next.add(romanId);
      return next;
    });
  };

  const handleSelect = (code: string) => {
    navigate({ view: 'trade-offs', tradeOffCode: code });
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      window.requestAnimationFrame(() => {
        detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  };

  // ── Landing page ─────────────────────────────────────────────────
  if (!browsing) {
    return (
      <TradeOffsOverview
        onBrowse={(romanId?: string) => {
          // Navigate to the first trade-off in the chosen category (or the very first overall).
          // The deep-link useEffect will set browsing=true and open the right category.
          const cat = romanId ? CATEGORIES.find(c => c.romanId === romanId) : CATEGORIES[0];
          const firstCode = cat?.tradeOffs[0]?.code ?? ALL_TRADE_OFFS[0]?.code;
          if (firstCode) navigate({ view: 'trade-offs', tradeOffCode: firstCode });
          else setBrowsing(true);
        }}
      />
    );
  }

  // ── Shared header: search + browse (mobile) + view-mode toggle (desktop-only) ──
  const header = (
    <div className="mb-4 flex flex-wrap items-center justify-end gap-3">
      <div className="flex w-full items-center gap-2 sm:w-auto">
        <button
          type="button"
          onClick={() => setBrowseDrawerOpen(true)}
          className="inline-flex min-h-9 items-center gap-1.5 rounded-md border border-neutral-300 bg-white px-3 py-2 text-xs font-medium text-neutral-700 shadow-sm hover:bg-neutral-100 sm:hidden"
        >
          <span aria-hidden>☰</span>
          Browse
        </button>
        <input
          type="search"
          placeholder="Search…"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="min-w-0 flex-1 rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-sm text-neutral-900 placeholder-neutral-400 shadow-sm focus:border-neutral-400 focus:outline-none sm:w-44 sm:flex-none sm:py-1"
        />
        <div role="tablist" className="hidden rounded-md border border-neutral-200 bg-white p-0.5 shadow-sm sm:inline-flex">
          <ModeButton active={learnMode === 'compact'} onClick={() => setLearnMode('compact')} label="Compact" />
          <ModeButton active={learnMode === 'sidebar'} onClick={() => setLearnMode('sidebar')} label="Sidebar" />
        </div>
      </div>
    </div>
  );

  // ── Mobile-only browse drawer (slides in from left) ────────────────
  const browseDrawer = browseDrawerOpen ? (
    <div className="fixed inset-0 z-40 sm:hidden" role="dialog" aria-modal="true" aria-label="Browse trade-offs">
      <div
        className="absolute inset-0 bg-neutral-900/40 backdrop-blur-sm"
        onClick={() => setBrowseDrawerOpen(false)}
        aria-hidden
      />
      <aside className="absolute inset-y-0 left-0 flex w-80 max-w-[90vw] flex-col bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-3">
          <span className="text-sm font-semibold tracking-tight text-neutral-900">Browse trade-offs</span>
          <button
            type="button"
            onClick={() => setBrowseDrawerOpen(false)}
            aria-label="Close browse"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-neutral-500 hover:bg-neutral-100"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>
        <div className="px-3 pt-3">
          <input
            type="search"
            placeholder="Search…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 placeholder-neutral-400 shadow-sm focus:border-neutral-400 focus:outline-none"
          />
        </div>
        <div className="flex-1 overflow-y-auto px-3 py-3">
          <TradeOffListSidebar
            activeCode={activeCode ?? ''}
            onSelect={code => {
              handleSelect(code);
              setBrowseDrawerOpen(false);
            }}
            search={search}
          />
        </div>
      </aside>
    </div>
  ) : null;

  // ── Mobile-only: one fixed layout (detail + drawer) ────────────────
  const mobileLayout = (
    <div className="sm:hidden">
      {tradeOff && category ? (
        <TradeOffDetail
          tradeOff={tradeOff}
          category={category}
          currentColumn={assessment?.currentColumn ?? null}
          targetColumn={assessment?.targetColumn ?? null}
          onSetCurrent={col => setCurrent(tradeOff.code, col)}
          onSetTarget={col => setTarget(tradeOff.code, col)}
        />
      ) : (
        <div className="rounded-xl border border-neutral-200 bg-white p-6 text-center text-sm text-neutral-500 shadow-sm">
          <p>Tap <strong>Browse</strong> above to pick a trade-off.</p>
        </div>
      )}
    </div>
  );

  // ── Sidebar layout (desktop only) ─────────────────────────────────
  if (learnMode === 'sidebar') {
    return (
      <>
        {header}
        {mobileLayout}
        <div className="hidden gap-8 sm:grid lg:grid-cols-[280px_minmax(0,1fr)]">
          <TradeOffListSidebar activeCode={activeCode ?? ''} onSelect={handleSelect} search={search} />
          <div ref={detailRef}>
            {tradeOff && category ? (
              <TradeOffDetail
                tradeOff={tradeOff}
                category={category}
                currentColumn={assessment?.currentColumn ?? null}
                targetColumn={assessment?.targetColumn ?? null}
                onSetCurrent={col => setCurrent(tradeOff.code, col)}
                onSetTarget={col => setTarget(tradeOff.code, col)}
              />
            ) : (
              <div className="rounded-xl border border-neutral-200 bg-white p-8 text-sm text-neutral-500 shadow-sm">
                Pick a trade-off from the sidebar.
              </div>
            )}
          </div>
        </div>
        {browseDrawer}
      </>
    );
  }

  // ── Compact accordion layout (desktop) ───────────────────────────
  return (
    <>
      {header}
      {mobileLayout}
      <div className="hidden space-y-3 sm:block">
        {CATEGORIES.map(cat => {
          const q = search.trim().toLowerCase();
          const filteredTradeOffs = q
            ? cat.tradeOffs.filter(t => t.axis.toLowerCase().includes(q) || t.code.toLowerCase().includes(q) || t.summary.toLowerCase().includes(q))
            : cat.tradeOffs;
          if (q && filteredTradeOffs.length === 0) return null;
          const accent = categoryAccent(cat.romanId);
          const isOpen = openCategories.has(cat.romanId);

          return (
            <section
              key={cat.romanId}
              className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm"
            >
              <button
                type="button"
                onClick={() => toggleCategory(cat.romanId)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left transition hover:bg-neutral-50"
              >
                <div className="flex min-w-0 flex-col gap-0.5">
                  <div className="flex items-center gap-3">
                    <span className={`shrink-0 text-xs font-bold uppercase tracking-widest ${accent.text}`}>
                      {cat.romanId}
                    </span>
                    <span className="truncate text-base font-semibold text-neutral-900">{cat.title}</span>
                    <span className="shrink-0 text-xs text-neutral-400">{filteredTradeOffs.length}{q ? `/${cat.tradeOffs.length}` : ''}</span>
                  </div>
                  <p className="text-xs leading-relaxed text-neutral-500 pr-8">{cat.definition}</p>
                </div>
                <ChevronIcon open={isOpen} />
              </button>

              {isOpen && (
                <div className="border-t border-neutral-100">
                  <div className="space-y-0">
                    {filteredTradeOffs.map((t, idx) => {
                      const assessment = assessments.get(t.code);
                      return (
                        <TradeOffAccordionRow
                          key={t.code}
                          tradeOff={t}
                          category={cat}
                          index={idx}
                          deepLinked={activeCode === t.code}
                          currentColumn={assessment?.currentColumn ?? null}
                          targetColumn={assessment?.targetColumn ?? null}
                          onSetCurrent={col => setCurrent(t.code, col)}
                          onSetTarget={col => setTarget(t.code, col)}
                        />
                      );
                    })}
                  </div>
                </div>
              )}
            </section>
          );
        })}
      </div>
      {browseDrawer}
    </>
  );
}

interface TradeOffAccordionRowProps {
  tradeOff: TradeOff;
  category: Category;
  index: number;
  deepLinked: boolean;
  currentColumn: number | null;
  targetColumn: number | null;
  onSetCurrent: (col: number | null) => void;
  onSetTarget: (col: number | null) => void;
}

function TradeOffAccordionRow({
  tradeOff,
  index,
  deepLinked,
  currentColumn,
  targetColumn,
  onSetCurrent,
  onSetTarget,
}: TradeOffAccordionRowProps) {
  const [selectedColumn, setSelectedColumn] = useState(VIRTUE_INDEX);
  const [mode, setMode] = useState<'slider' | 'table'>('slider');
  const [showDetail, setShowDetail] = useState(deepLinked);

  useEffect(() => {
    if (deepLinked) setShowDetail(true);
  }, [deepLinked]);

  const isEven = index % 2 === 1;

  return (
    <article className={[
      'border-t border-neutral-200 px-6 py-5 space-y-4',
      isEven ? 'bg-neutral-50' : 'bg-white',
    ].join(' ')}>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-neutral-900">{tradeOff.axis}</h3>
          <p className="mt-0.5 text-xs leading-relaxed text-neutral-500">
            {stripTradeOffPrefix(tradeOff.summary)}
          </p>
          <div className="mt-1 flex items-center gap-2">
            <span className="text-[10px] font-medium text-neutral-400 uppercase tracking-wider">{tradeOff.code}</span>
            <span
              className={[
                'inline-flex items-center rounded-full px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider',
                tradeOff.type === 'G'
                  ? 'bg-neutral-900 text-neutral-100'
                  : 'bg-neutral-100 text-neutral-600',
              ].join(' ')}
            >
              {tradeOff.type === 'G' ? 'Genuine' : 'Legitimate'}
            </span>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <div
            role="tablist"
            className="inline-flex rounded-md border border-neutral-200 bg-white p-0.5 shadow-sm"
          >
            <ModeButton active={mode === 'slider'} onClick={() => setMode('slider')} label="Spectrum" />
            <ModeButton active={mode === 'table'} onClick={() => setMode('table')} label="Table" />
          </div>
          <button
            type="button"
            onClick={() => setShowDetail(v => !v)}
            className={[
              'inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs font-medium transition',
              showDetail
                ? 'border-neutral-900 bg-neutral-900 text-white'
                : 'border-neutral-300 bg-white text-neutral-700 hover:bg-neutral-100',
            ].join(' ')}
          >
            Full detail
            <ChevronIcon open={showDetail} />
          </button>
        </div>
      </div>

      {mode === 'slider' ? (
        <TradeOffSlider
          tradeOff={tradeOff}
          selectedColumn={selectedColumn}
          onSelect={setSelectedColumn}
          currentColumn={currentColumn}
          targetColumn={targetColumn}
          onSetCurrent={onSetCurrent}
          onSetTarget={onSetTarget}
          showDetail={showDetail}
        />
      ) : (
        <TradeOffTable
          tradeOff={tradeOff}
          selectedColumn={selectedColumn}
          onSelect={setSelectedColumn}
          currentColumn={currentColumn}
          targetColumn={targetColumn}
          onSetCurrent={onSetCurrent}
          onSetTarget={onSetTarget}
        />
      )}
    </article>
  );
}

function ModeButton({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button
      role="tab"
      type="button"
      aria-selected={active}
      onClick={onClick}
      className={[
        'rounded px-2.5 py-1 text-xs font-medium transition',
        active ? 'bg-neutral-900 text-white shadow-sm' : 'text-neutral-600 hover:text-neutral-900',
      ].join(' ')}
    >
      {label}
    </button>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={`shrink-0 h-4 w-4 text-neutral-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
    >
      <path
        fillRule="evenodd"
        d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export const LearnView = TradeOffsView;
