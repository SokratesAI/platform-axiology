import { ALL_TRADE_OFFS, CATEGORIES } from '../data/tradeOffs';
import { categoryAccent } from '../data/theme';

interface TradeOffsOverviewProps {
  /** Called when the user wants to browse. Pass a romanId to pre-open that category. */
  onBrowse?: (openCategoryId?: string) => void;
}

export function TradeOffsOverview({ onBrowse }: TradeOffsOverviewProps = {}) {
  const totalTradeOffs = ALL_TRADE_OFFS.length;
  const legitimateCount = ALL_TRADE_OFFS.filter(t => t.type === 'L').length;
  const genuineCount = ALL_TRADE_OFFS.filter(t => t.type === 'G').length;

  return (
    <section className="space-y-10">
      <header className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm md:p-10">
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-amber-700">
          Trade-offs
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
          Every choice is a position on a spectrum.
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-neutral-700">
          Every architectural choice your platform team makes lives on a spectrum between two real
          values. Browse the trade-offs, read where each of the seven positions actually lands you —
          then mark where you are and where you want to be.
        </p>

        {onBrowse && (
          <button
            type="button"
            onClick={() => onBrowse()}
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-neutral-700"
          >
            Browse trade-offs
            <span aria-hidden>→</span>
          </button>
        )}
      </header>

      <section>
        <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-800">
          What you&apos;re browsing
        </h3>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          <StatCard label="Categories" value={CATEGORIES.length} />
          <StatCard label="Trade-offs" value={totalTradeOffs} />
          <StatCard
            label="Genuine / Legitimate"
            value={`${genuineCount} / ${legitimateCount}`}
          />
        </div>
      </section>

      <section>
        <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-800">
          Two kinds of trade-offs
        </h3>
        <div className="mt-3 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
            <span className="inline-flex items-center rounded-full bg-neutral-100 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-neutral-600">
              Legitimate
            </span>
            <h4 className="mt-3 text-lg font-semibold text-neutral-900">
              Improvable through better design.
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-neutral-700">
              Better tooling, communication, or investment can move you closer to where you want to
              be <em>without</em> giving up the opposite value. The aim is to soften the trade-off,
              not pick a side.
            </p>
            <p className="mt-3 text-[11px] uppercase tracking-wider text-neutral-400">
              {legitimateCount} of {totalTradeOffs} trade-offs
            </p>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50/40 p-5 shadow-sm">
            <div aria-hidden className="absolute inset-y-0 left-0 w-[3px] bg-neutral-900" />
            <div className="ml-2">
              <span className="inline-flex items-center rounded-full bg-neutral-900 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-neutral-100">
                Genuine trade-off
              </span>
              <h4 className="mt-3 text-lg font-semibold text-neutral-900">
                Cannot be resolved — only positioned.
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                No amount of skill, resources, or goodwill removes the trade-off. The work is
                choosing where on the spectrum to sit and accepting what that costs. Marked with a{' '}
                <span className="rounded bg-rose-100 px-1 text-[9px] font-semibold text-rose-700">
                  G
                </span>{' '}
                in the sidebar.
              </p>
              <p className="mt-3 text-[11px] uppercase tracking-wider text-neutral-500">
                {genuineCount} of {totalTradeOffs} trade-offs
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-800">
          The seven categories
        </h3>
        <ol className="mt-3 grid gap-3">
          {CATEGORIES.map(c => {
            const accent = categoryAccent(c.romanId);
            return (
              <li
                key={c.romanId}
                className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm"
                style={{ borderLeftWidth: '3px', borderLeftColor: accent.fromHex }}
              >
                <p
                  className={`text-[11px] font-semibold uppercase tracking-[0.12em] ${accent.text}`}
                >
                  {c.title}
                </p>
                <p className="mt-1.5 line-clamp-3 text-xs leading-relaxed text-neutral-600">
                  {c.theme || c.definition}
                </p>
                <p className="mt-2 text-[10px] uppercase tracking-wider text-neutral-400">
                  {c.tradeOffs.length} trade-offs
                </p>
                {onBrowse && (
                  <button
                    type="button"
                    onClick={() => onBrowse(c.romanId)}
                    className="mt-2 text-[11px] font-medium text-amber-700 hover:underline"
                  >
                    Browse →
                  </button>
                )}
              </li>
            );
          })}
        </ol>
      </section>
    </section>
  );
}

interface StatCardProps {
  label: string;
  value: number | string;
}

function StatCard({ label, value }: StatCardProps) {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
      <p className="text-[11px] font-medium uppercase tracking-wider text-neutral-500">{label}</p>
      <p className="mt-1 text-3xl font-semibold tracking-tight text-amber-700">{value}</p>
    </div>
  );
}
