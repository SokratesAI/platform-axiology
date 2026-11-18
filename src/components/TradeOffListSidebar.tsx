import { useEffect, useMemo, useState } from 'react';
import { CATEGORIES } from '../data/tradeOffs';
import { categoryAccent } from '../data/theme';

interface TradeOffListSidebarProps {
  activeCode: string;
  onSelect: (code: string) => void;
  search?: string;
}

export function TradeOffListSidebar({ activeCode, onSelect, search = '' }: TradeOffListSidebarProps) {
  const [expanded, setExpanded] = useState<Set<string>>(() => new Set());

  const activeCategoryId = useMemo(() => {
    for (const cat of CATEGORIES) {
      if (cat.tradeOffs.some(t => t.code === activeCode)) return cat.romanId;
    }
    return null;
  }, [activeCode]);

  // Auto-open the category containing the active trade-off whenever it changes.
  useEffect(() => {
    if (!activeCategoryId) return;
    setExpanded(prev => {
      if (prev.has(activeCategoryId)) return prev;
      const next = new Set(prev);
      next.add(activeCategoryId);
      return next;
    });
  }, [activeCategoryId]);

  const toggle = (romanId: string) => {
    setExpanded(prev => {
      const next = new Set(prev);
      if (next.has(romanId)) next.delete(romanId);
      else next.add(romanId);
      return next;
    });
  };

  return (
    <aside className="lg:sticky lg:top-20 lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto lg:pr-2">
      <nav aria-label="Trade-offs">
        <div className="space-y-2">
          {CATEGORIES.map(c => {
            const q = search.trim().toLowerCase();
            const filteredTradeOffs = q
              ? c.tradeOffs.filter(t => t.axis.toLowerCase().includes(q) || t.code.toLowerCase().includes(q))
              : c.tradeOffs;
            if (q && filteredTradeOffs.length === 0) return null;
            const accent = categoryAccent(c.romanId);
            const isOpen = expanded.has(c.romanId);
            return (
              <section key={c.romanId}>
                <button
                  type="button"
                  onClick={() => toggle(c.romanId)}
                  aria-expanded={isOpen}
                  className={[
                    'flex w-full items-center justify-between rounded-md px-2 py-2 text-left transition hover:bg-neutral-100',
                  ].join(' ')}
                >
                  <span
                    className={[
                      'text-[11px] font-semibold uppercase tracking-[0.12em]',
                      accent.text,
                    ].join(' ')}
                  >
                    {c.title}
                  </span>
                  <Chevron open={isOpen} />
                </button>
                {isOpen && (
                  <ul className="mt-1 space-y-0.5">
                    {filteredTradeOffs.map(t => {
                      const active = t.code === activeCode;
                      const isGenuine = t.type === 'G';
                      return (
                        <li key={t.code}>
                          <button
                            type="button"
                            onClick={() => onSelect(t.code)}
                            aria-current={active ? 'true' : undefined}
                            title={t.axis}
                            className={[
                              'group flex w-full items-center justify-between gap-2 rounded-md px-3 py-1.5 text-left transition',
                              active
                                ? `bg-gradient-to-br ${accent.bgGradient} text-white shadow-sm`
                                : 'text-neutral-700 hover:bg-neutral-100',
                            ].join(' ')}
                          >
                            <span className="truncate text-sm font-medium leading-tight">
                              {t.axis}
                            </span>
                            {isGenuine && (
                              <span
                                aria-hidden
                                title="Genuine trade-off"
                                className={[
                                  'shrink-0 rounded px-1 text-[9px] font-semibold',
                                  active ? 'bg-white/25 text-white' : 'bg-rose-100 text-rose-700',
                                ].join(' ')}
                              >
                                G
                              </span>
                            )}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </section>
            );
          })}
        </div>
      </nav>
    </aside>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={[
        'h-3.5 w-3.5 text-neutral-400 transition-transform duration-200',
        open ? 'rotate-90' : '',
      ].join(' ')}
      aria-hidden
    >
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}
