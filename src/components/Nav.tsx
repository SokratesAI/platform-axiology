import { type JSX, useEffect, useRef, useState } from 'react';
import { BookIcon, CloseIcon, CompareIcon, CompassIcon, GaugeIcon, MenuIcon } from './Icon';
import type { View } from '../routing';
import { navigate } from '../routing';
import { ALL_TRADE_OFFS } from '../data/tradeOffs';

interface NavProps {
  view: View;
  tradeOffCode?: string;
  onChange: (next: View) => void;
  onHome: () => void;
}

interface NavItem {
  id: View;
  label: string;
  description: string;
  icon: (props: { className?: string }) => JSX.Element;
}

const ITEMS: readonly NavItem[] = [
  { id: 'trade-offs', label: 'Trade-offs', description: 'Browse and mark your positions', icon: BookIcon },
  { id: 'roadmap', label: 'Roadmap', description: 'Your current → target gap, with suggestions', icon: GaugeIcon },
  { id: 'compare', label: 'Compare', description: 'Overlay multiple roadmap JSONs on one direction map', icon: CompareIcon },
];

export function Nav({ view, tradeOffCode, onChange, onHome }: NavProps) {
  const onOverview = view === 'trade-offs' && !tradeOffCode;
  const onBrowse = view === 'trade-offs' && !!tradeOffCode;
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    if (!drawerOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDrawerOpen(false);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [drawerOpen]);

  const goHome = () => {
    setDrawerOpen(false);
    onHome();
  };

  const goSection = (id: View) => {
    setDrawerOpen(false);
    onChange(id);
  };

  const goTradeOffsOverview = () => {
    setDrawerOpen(false);
    window.dispatchEvent(new CustomEvent('pa:trade-offs-overview'));
    navigate({ view: 'trade-offs' });
  };

  const goTradeOffsBrowse = () => {
    setDrawerOpen(false);
    const firstCode = ALL_TRADE_OFFS[0]?.code;
    if (firstCode) navigate({ view: 'trade-offs', tradeOffCode: firstCode });
    else navigate({ view: 'trade-offs' });
  };

  return (
    <>
      <nav className="sticky top-0 z-20 border-b border-neutral-200 bg-white/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-2 px-3 py-2.5 sm:px-6 sm:py-3">
          <button
            type="button"
            onClick={goHome}
            className="flex h-11 items-center gap-2.5 sm:h-auto"
            aria-label="Platform Axiology home"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-900 text-white shadow-sm">
              <CompassIcon className="h-4 w-4" />
            </span>
            <span className="hidden text-sm font-semibold tracking-tight text-neutral-900 sm:inline">
              Platform Axiology
            </span>
          </button>
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
            aria-expanded={drawerOpen}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-neutral-700 hover:bg-neutral-100 sm:hidden"
          >
            <MenuIcon className="h-5 w-5" />
          </button>
          <ul className="hidden items-center gap-1 sm:flex" role="tablist" aria-label="Sections">
            {ITEMS.map(item => {
              const active = item.id === view;
              const Icon = item.icon;
              if (item.id === 'trade-offs') {
                return (
                  <li key={item.id}>
                    <TradeOffsNavItem active={active} />
                  </li>
                );
              }
              return (
                <li key={item.id}>
                  <button
                    role="tab"
                    type="button"
                    aria-selected={active}
                    onClick={() => onChange(item.id)}
                    title={item.description}
                    aria-label={item.label}
                    className={[
                      'inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition',
                      active
                        ? 'bg-neutral-900 text-white shadow-sm'
                        : 'text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900',
                    ].join(' ')}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Mobile drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 z-40 sm:hidden" role="dialog" aria-modal="true" aria-label="Navigation menu">
          <div
            className="absolute inset-0 bg-neutral-900/40 backdrop-blur-sm"
            onClick={() => setDrawerOpen(false)}
            aria-hidden
          />
          <aside className="absolute inset-y-0 right-0 flex w-72 max-w-[85vw] flex-col bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-3">
              <span className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-900 text-white shadow-sm">
                  <CompassIcon className="h-4 w-4" />
                </span>
                <span className="text-sm font-semibold tracking-tight text-neutral-900">
                  Platform Axiology
                </span>
              </span>
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                aria-label="Close menu"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md text-neutral-500 hover:bg-neutral-100"
              >
                <CloseIcon className="h-5 w-5" />
              </button>
            </div>
            <div className="flex flex-col gap-1 p-3">
              <DrawerItem
                icon={<CompassIcon className="h-5 w-5" />}
                label="Home"
                active={view === 'home'}
                onClick={goHome}
              />
              <DrawerItem
                icon={<BookIcon className="h-5 w-5" />}
                label="Trade-offs overview"
                description="What is a trade-off?"
                active={onOverview}
                onClick={goTradeOffsOverview}
              />
              <DrawerItem
                icon={<BookIcon className="h-5 w-5" />}
                label="Browse trade-offs"
                description="All 7 categories, 42 trade-offs"
                active={onBrowse}
                onClick={goTradeOffsBrowse}
              />
              {ITEMS.filter(item => item.id !== 'trade-offs').map(item => {
                const Icon = item.icon;
                return (
                  <DrawerItem
                    key={item.id}
                    icon={<Icon className="h-5 w-5" />}
                    label={item.label}
                    description={item.description}
                    active={item.id === view}
                    onClick={() => goSection(item.id)}
                  />
                );
              })}
            </div>
          </aside>
        </div>
      )}
    </>
  );
}

interface DrawerItemProps {
  icon: JSX.Element;
  label: string;
  description?: string;
  active: boolean;
  onClick: () => void;
}

function DrawerItem({ icon, label, description, active, onClick }: DrawerItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-current={active ? 'page' : undefined}
      className={[
        'flex w-full items-start gap-3 rounded-lg px-3 py-3 text-left transition',
        active ? 'bg-neutral-900 text-white' : 'text-neutral-800 hover:bg-neutral-100',
      ].join(' ')}
    >
      <span className={active ? 'text-white' : 'text-neutral-500'}>{icon}</span>
      <span className="flex min-w-0 flex-1 flex-col">
        <span className="text-sm font-semibold">{label}</span>
        {description && (
          <span className={['text-xs', active ? 'text-white/70' : 'text-neutral-500'].join(' ')}>
            {description}
          </span>
        )}
      </span>
    </button>
  );
}

export const TRADE_OFFS_BROWSE_FLAG = 'pa:trade-offs-browsing';

function TradeOffsNavItem({ active }: { active: boolean }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };
  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const goOverview = () => {
    window.dispatchEvent(new CustomEvent('pa:trade-offs-overview'));
    navigate({ view: 'trade-offs' });
    setOpen(false);
  };

  const goBrowse = () => {
    const firstCode = ALL_TRADE_OFFS[0]?.code;
    if (firstCode) navigate({ view: 'trade-offs', tradeOffCode: firstCode });
    else navigate({ view: 'trade-offs' });
    setOpen(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => { cancelClose(); setOpen(true); }}
      onMouseLeave={scheduleClose}
    >
      <button
        role="tab"
        type="button"
        aria-selected={active}
        aria-haspopup="true"
        aria-expanded={open}
        onClick={goOverview}
        aria-label="Trade-offs"
        className={[
          'inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition',
          active
            ? 'bg-neutral-900 text-white shadow-sm'
            : 'text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900',
        ].join(' ')}
      >
        <BookIcon className="h-4 w-4" />
        <span>Trade-offs</span>
        <svg
          aria-hidden
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-3 w-3 opacity-60"
        >
          <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
        </svg>
      </button>

      {open && (
        <div
          className="absolute right-0 top-full z-30 w-52 max-w-[calc(100vw-1rem)] overflow-hidden rounded-lg border border-neutral-200 bg-white py-1 shadow-lg"
          style={{ marginTop: '6px' }}
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        >
          <div className="absolute -top-1.5 left-0 h-1.5 w-full" />
          <DropdownItem label="Overview" description="What is a trade-off?" onClick={goOverview} />
          <DropdownItem label="Browse trade-offs" description="All 7 categories, 42 trade-offs" onClick={goBrowse} />
        </div>
      )}
    </div>
  );
}

function DropdownItem({
  label,
  description,
  onClick,
}: {
  label: string;
  description: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full flex-col gap-0.5 px-4 py-2.5 text-left transition hover:bg-neutral-50"
    >
      <span className="text-sm font-medium text-neutral-900">{label}</span>
      <span className="text-xs text-neutral-500">{description}</span>
    </button>
  );
}
