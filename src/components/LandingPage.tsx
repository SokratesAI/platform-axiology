import { useEffect, useRef, useState } from 'react';
import {
  COLUMN_LABELS,
  VIRTUE_INDEX,
  getCategoryForTradeOff,
  getTradeOff,
} from '../data/tradeOffs';
import { spectrumColors } from '../data/theme';
import { getCncfMapping } from '../data/cncfMappings';
import { TechChips } from './TechPanel';
import { BookIcon, ChatIcon, ClipboardIcon, CompareIcon, CompassIcon, GaugeIcon } from './Icon';
import type { JSX } from 'react';
import type { View } from '../routing';

interface LandingPageProps {
  onNavigate: (view: View) => void;
}

export function LandingPage({ onNavigate }: LandingPageProps) {
  return (
    <div className="pb-20">
      <Hero onNavigate={onNavigate} />
      <div className="mt-12 space-y-12 sm:mt-24 sm:space-y-20 md:mt-32 md:space-y-24">
        <LeverageSection />
        {/* <ValueSection /> */}
        <WhatIsATradeOffSection />
        <WhatIsTheRoadmapSection />
        <GetStartedSection onNavigate={onNavigate} />
        <CompareToolSection onNavigate={onNavigate} />
        <PhilosophySection />
      </div>
    </div>
  );
}

function Hero({ onNavigate }: LandingPageProps) {
  return (
    <section className="pt-8 sm:pt-16 md:pt-28">
      <h1 className="max-w-3xl text-3xl font-semibold leading-[1.05] tracking-tight text-neutral-900 sm:text-4xl md:text-6xl">
        Give your platform team a{' '}
        <span className="text-amber-600">clear direction</span>.
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-700 sm:mt-10 sm:text-lg md:text-xl">
        <strong><span className="text-rose-600">Total Autonomy</span> vs <span className="text-sky-600">Total Standardisation</span></strong> <br />
        Every architectural decision is a trade-off between two extremes. <br />
        This tool explores an exhaustive list of opposites extremes, where your golden path is usually somewhere close to the <strong className="text-amber-600">Mean</strong>.
      </p>
      <div className="mt-12 flex flex-wrap gap-3">
        <CTAButton
          onClick={() => onNavigate('trade-offs')}
          icon={<BookIcon className="h-4 w-4" />}
          label="Explore the trade-offs"

        />
        <CTAButton
          onClick={() => onNavigate('roadmap')}
          icon={<ClipboardIcon className="h-4 w-4" />}
          label="See the roadmap"
        />
        <CTAButton
          onClick={() => onNavigate('compare')}
          icon={<CompareIcon className="h-4 w-4" />}
          label="Compare roadmaps"
        />
      </div>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string | JSX.Element;
  intro?: JSX.Element | string;
}) {
  return (
    <header className="mb-8">
      <p className="text-[11px] font-medium uppercase tracking-wider text-neutral-500">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl md:text-4xl">
        {title}
      </h2>
      {intro && (
        <p className="mt-4 max-w-8xl text-base leading-relaxed text-neutral-700 md:text-lg">
          {intro}
        </p>
      )}
    </header>
  );
}

type LayerTone = 'tools' | 'patterns' | 'tradeoffs' | 'mindset';

const TONES: Record<
  LayerTone,
  {
    rowBg: string;
    label: string;
    rightNote: string;
    dotFilled: string;
    chip: string;
  }
> = {
  tools: {
    rowBg: 'bg-white',
    label: 'text-rose-600',
    rightNote: 'text-rose-500',
    dotFilled: 'bg-rose-500',
    chip: 'border-rose-100 bg-white text-rose-900/80',
  },
  patterns: {
    rowBg: 'bg-white',
    label: 'text-amber-700',
    rightNote: 'text-amber-600',
    dotFilled: 'bg-amber-500',
    chip: 'border-amber-100 bg-white text-amber-900/80',
  },
  tradeoffs: {
    rowBg: 'bg-indigo-50/60',
    label: 'text-indigo-700',
    rightNote: 'text-indigo-700',
    dotFilled: 'bg-indigo-600',
    chip: 'border-indigo-200 bg-white font-medium text-indigo-900',
  },
  mindset: {
    rowBg: 'bg-white',
    label: 'text-emerald-700',
    rightNote: 'text-emerald-700',
    dotFilled: 'bg-emerald-500',
    chip: 'border-emerald-100 bg-white text-emerald-900/80',
  },
};

interface LeverageRowProps {
  label: string;
  examples: string[];
  frequency: { level: 0 | 1 | 2 | 3 | 4 | 5; label: string };
  rightNote: string;
  tone: LayerTone;
}

function LeverageRow({ label, examples, frequency, rightNote, tone }: LeverageRowProps) {
  const t = TONES[tone];
  return (
    <div
      className={[
        'flex flex-col items-center gap-2 border-b border-neutral-200 px-4 py-4 text-center last:border-b-0',
        'sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 sm:px-6 sm:text-left',
        t.rowBg,
      ].join(' ')}
    >
      <p className={['text-sm font-semibold uppercase tracking-wider sm:hidden', t.label].join(' ')}>
        {label}
      </p>
      <div className="flex items-center justify-center gap-2 sm:w-40 sm:shrink-0 sm:justify-start">
        <div className="flex gap-0.5" aria-hidden>
          {[0, 1, 2, 3, 4].map(i => (
            <span
              key={i}
              className={[
                'h-1.5 w-1.5 rounded-full',
                i < frequency.level ? t.dotFilled : 'bg-neutral-200',
              ].join(' ')}
            />
          ))}
        </div>
        <span className="text-[11px] font-medium text-neutral-700">{frequency.label}</span>
      </div>
      <div className="hidden sm:block sm:w-28 sm:shrink-0">
        <p className={['text-xs font-semibold uppercase tracking-wider', t.label].join(' ')}>
          {label}
        </p>
      </div>
      <ul className="flex flex-wrap justify-center gap-1.5 sm:flex-1 sm:justify-start">
        {examples.map(ex => (
          <li key={ex} className={['rounded-full border px-2.5 py-0.5 text-xs', t.chip].join(' ')}>
            {ex}
          </li>
        ))}
      </ul>
      <p
        className={[
          'text-[10px] font-medium uppercase tracking-wider sm:w-44 sm:shrink-0 sm:text-right',
          t.rightNote,
        ].join(' ')}
      >
        {rightNote}
      </p>
    </div>
  );
}

function LeverageSection() {
  return (
    <section>
      <SectionHeader
        eyebrow="The paradigm shift"
        title="Understanding the trade-offs, makes the solutions clearer."
        intro={
          <>
            <strong><i>What problem does the tool solve? Is it necessary? What measurable benefit justifies its implementation?</i></strong> <br /> Avoid proposing tools or solutions before you've explicitly evaluated their <strong><span className="text-indigo-700">trade-offs</span></strong>. Define the direction first, and these questions become straightforward.
          </>
        }
      />

      <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
        <div className="hidden flex-wrap items-end gap-4 border-b border-neutral-200 bg-neutral-50/60 px-6 py-2 sm:flex">
          <p className="w-40 shrink-0 text-[10px] font-medium uppercase tracking-wider text-neutral-400">
            How often the team talks about it
          </p>
          <p className="w-28 shrink-0 text-[10px] font-medium uppercase tracking-wider text-neutral-400">
            Layer
          </p>
          <p className="flex-1 text-[10px] font-medium uppercase tracking-wider text-neutral-400">
            What it sounds like
          </p>
          <p className="w-44 shrink-0 text-right text-[10px] font-medium uppercase tracking-wider text-neutral-400">
            Leverage
          </p>
        </div>
        <LeverageRow
          label="Tools"
          examples={['Crossplane?', 'ArgoCD?', 'Backstage?', 'Terraform vs Pulumi?']}
          frequency={{ level: 5, label: 'Constantly' }}
          rightNote="low leverage"
          tone="tools"
        />
        <LeverageRow
          label="Patterns"
          examples={['GitOps', 'Service mesh', 'Golden paths', 'Policy-as-Code']}
          frequency={{ level: 3, label: 'Sometimes' }}
          rightNote="↓ go deeper"
          tone="patterns"
        />
        <LeverageRow
          label="Trade-offs"
          examples={[
            'Autonomy ↔ Standardisation',
            'Build ↔ Adopt',
            'Stability ↔ Velocity',
            'Platform as Product ↔ Platform as Infrastructure',
          ]}
          frequency={{ level: 1, label: 'Rarely' }}
          rightNote="this site lives here"
          tone="tradeoffs"
        />
        <LeverageRow
          label="Mindset"
          examples={['What kind of platform are we?', 'What do we owe our consumers?']}
          frequency={{ level: 0, label: 'Almost never' }}
          rightNote="highest leverage"
          tone="mindset"
        />
      </div>

      <p className="mt-4 max-w-6xl text-xs text-neutral-500">
        Frame adapted from Donella Meadows,{' '}
        <a
          href="https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-neutral-300 underline-offset-2 hover:text-neutral-900 hover:decoration-neutral-700"
        >
          <em>Places to Intervene in a System</em>
        </a>
        . Tool choice is the lowest-leverage intervention; the highest leverage is in the rules and
        trade-offs underneath.
      </p>
    </section>
  );
}

export function ValueSection() {
  return (
    <section>
      <SectionHeader eyebrow="What you get" title="Three things, all of them practical." />
      <div className="grid gap-5 md:grid-cols-3">
        <ValueCard
          accent="from-violet-500 to-fuchsia-500"
          icon={<ChatIcon className="h-5 w-5" />}
          headline="Shared language"
          body="Stop arguing about which choice is better. Start arguing about what trade-off you're making."
        />
        <ValueCard
          accent="from-neutral-900 to-neutral-700"
          icon={<CompassIcon className="h-5 w-5" />}
          headline="A clear compass"
          body="Find the position that fits your size, maturity, risk profile, and moment in time."
        />
        <ValueCard
          accent="from-emerald-500 to-teal-500"
          icon={<GaugeIcon className="h-5 w-5" />}
          headline="A platform diagnostic"
          body="Mark where you are. Pick where to go. The gap is your roadmap."
        />
      </div>
    </section>
  );
}

function WhatIsATradeOffSection() {
  const tradeOff = getTradeOff('IV-G1');
  const category = getCategoryForTradeOff('IV-G1');
  const [selectedColumn, setSelectedColumn] = useState<number>(VIRTUE_INDEX);
  const [currentColumn, setCurrentColumn] = useState<number | null>(null);
  const [targetColumn, setTargetColumn] = useState<number | null>(null);
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
  }, [selectedColumn]);

  if (!tradeOff || !category) return null;
  const col = tradeOff.columns[selectedColumn];
  const mapping = getCncfMapping(tradeOff.code, selectedColumn);
  const colours = spectrumColors(selectedColumn);

  const toggleCurrent = () =>
    setCurrentColumn(prev => (prev === selectedColumn ? null : selectedColumn));
  const toggleTarget = () =>
    setTargetColumn(prev => (prev === selectedColumn ? null : selectedColumn));

  return (
    <section>
      <SectionHeader
        eyebrow="What is a trade-off?"
        title="The right answer is usually the mean of two extremes."
        intro={
          <>
            Every trade-off has seven meaningful positions — three on each side, plus a calibrated{' '}
            <strong>Mean</strong> that most organisations at scale converge on. The Mean is not
            always the correct solution for your team or organization. Your context may require a different position.
          </>
        }
      />

      <p className="mb-6 max-w-8xl text-base leading-relaxed text-neutral-700">
        Below is the <strong><span className="text-purple-600">trade-off</span></strong>   — <strong>{tradeOff.axis}</strong>. Click any position to see what it looks like in practice and what technologies push you there.
      </p>

      <div
        aria-hidden
        className="mb-3 h-1.5 rounded-full bg-gradient-to-r from-rose-300 via-amber-300 to-sky-300"
      />
      <div ref={scrollRef} className="-mx-3 overflow-x-auto px-3 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:overflow-visible sm:px-0 sm:pb-0">
      <div className="grid snap-x snap-mandatory grid-cols-[repeat(7,140px)] gap-1.5 sm:grid-cols-7">
        {tradeOff.columns.map((c, i) => {
          const isSelected = i === selectedColumn;
          const isCurrent = currentColumn === i;
          const isTarget = targetColumn === i;
          const cellColours = spectrumColors(i);
          return (
            <button
              key={i}
              type="button"
              data-col={i}
              onClick={() => setSelectedColumn(i)}
              title={`${COLUMN_LABELS[i]} — ${c.positionName}`}
              className={[
                'group relative flex snap-start flex-col items-center rounded-lg border px-2 pb-7 pt-3 text-center transition',
                isSelected ? cellColours.selected : `${cellColours.base} ${cellColours.baseHover}`,
              ].join(' ')}
            >
              <span className="text-[9px] font-medium uppercase tracking-wider opacity-80">
                {COLUMN_LABELS[i]}
                {i === VIRTUE_INDEX ? ' ●' : ''}
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
          onClick={() => setSelectedColumn(Math.max(0, selectedColumn - 1))}
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
              onClick={() => setSelectedColumn(i)}
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
          onClick={() => setSelectedColumn(Math.min(6, selectedColumn + 1))}
          disabled={selectedColumn === 6}
          aria-label="Next position"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 shadow-sm disabled:opacity-40"
        >
          →
        </button>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:justify-start">
        <ExampleMarkButton
          tone="current"
          label="We're here"
          active={currentColumn === selectedColumn}
          onClick={toggleCurrent}
        />
        <ExampleMarkButton
          tone="target"
          label="We want this"
          active={targetColumn === selectedColumn}
          onClick={toggleTarget}
        />
      </div>

      <article className="mt-6 overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
        <div aria-hidden className={`h-1 w-full ${colours.topBar}`} />
        <div className="space-y-5 p-4 sm:space-y-6 sm:p-6">
          <header>
            <p className={`text-[10px] font-medium uppercase tracking-wider ${colours.text}`}>
              {COLUMN_LABELS[selectedColumn]}
              {selectedColumn === VIRTUE_INDEX ? ' ● reference' : ''}
            </p>
            <h3 className="mt-1 text-xl font-semibold tracking-tight text-neutral-900 md:text-2xl">
              {col.positionName}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-neutral-700">{col.description}</p>
          </header>

          <div className="border-t border-neutral-100 pt-5">
            <p className="mb-3 text-[10px] font-medium uppercase tracking-wider text-neutral-500">
              What gets you here
            </p>
            <TechChips mapping={mapping} />
          </div>
        </div>
      </article>
    </section>
  );
}

interface ExampleMarkButtonProps {
  tone: 'current' | 'target';
  label: string;
  active: boolean;
  onClick: () => void;
}

function ExampleMarkButton({ tone, label, active, onClick }: ExampleMarkButtonProps) {
  const activeClass =
    tone === 'current'
      ? 'border-indigo-600 bg-indigo-600 text-white shadow-sm'
      : 'border-emerald-600 bg-emerald-600 text-white shadow-sm';
  const inactiveClass =
    tone === 'current'
      ? 'border-neutral-300 bg-white text-neutral-700 hover:border-indigo-400 hover:text-indigo-700'
      : 'border-neutral-300 bg-white text-neutral-700 hover:border-emerald-400 hover:text-emerald-700';
  const dotClass =
    tone === 'current'
      ? active
        ? 'bg-white'
        : 'bg-indigo-600'
      : active
        ? 'border-white bg-emerald-600'
        : 'border-2 border-emerald-600 bg-white';
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={[
        'inline-flex items-center gap-2 rounded-md border px-2.5 py-1.5 text-xs font-medium transition',
        active ? activeClass : inactiveClass,
      ].join(' ')}
    >
      <span
        aria-hidden
        className={[
          'inline-block h-2 w-2 rounded-full',
          tone === 'target' ? 'border-2' : '',
          dotClass,
        ].join(' ')}
      />
      {label}
    </button>
  );
}

function WhatIsTheRoadmapSection() {
  return (
    <section>
      <SectionHeader
        eyebrow="What is a roadmap?"
        title={
          <>
            The map of your platform&apos;s{' '}
            <span className="text-emerald-700">intended direction</span>.
          </>
        }
        intro={
          <>
            On every trade-off, click{' '}
            <strong className="text-indigo-700">we&apos;re here</strong> on your current column and{' '}
            <strong className="text-emerald-700">we want this</strong> on your target. The Roadmap
            stitches every mark into a single visual — a graph showing where the team stands today,
            where it&apos;s headed, and the technologies that actually move you between them.
          </>
        }
      />

      <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
        <div className="grid gap-5 p-4 sm:gap-6 sm:p-6 md:grid-cols-3 md:gap-8 md:p-8">
          <RoadmapStep
            number="1"
            accent="indigo"
            title="Mark your positions"
            body={
              <>
                On any trade-off, click{' '}
                <strong className="text-indigo-700">we&apos;re here</strong> on the column you&apos;re at,
                and <strong className="text-emerald-700">we want this</strong> on the column you want
                to reach.
              </>
            }
          />
          <RoadmapStep
            number="2"
            accent="emerald"
            title="See the gap"
            body={
              <>
                Every marked trade-off becomes a row in the Roadmap graph. A{' '}
                <strong className="text-indigo-700">blue line</strong> threads your current
                positions; a <strong className="text-emerald-700">green line</strong> threads your
                targets. Where they criss-cross is where the team needs to move.
              </>
            }
          />
          <RoadmapStep
            number="3"
            accent="amber"
            title="Get the next move"
            body={
              <>
                Each row tells you the gap, the{' '}
                <strong className="text-amber-700">corrective</strong> from your current position,
                and the technologies and patterns that push you toward your target.
              </>
            }
          />
        </div>
      </div>
    </section>
  );
}

interface RoadmapStepProps {
  number: string;
  accent: 'indigo' | 'emerald' | 'amber';
  title: string;
  body: JSX.Element;
}

function RoadmapStep({ number, accent, title, body }: RoadmapStepProps) {
  const ring =
    accent === 'indigo'
      ? 'bg-indigo-100 text-indigo-700'
      : accent === 'emerald'
        ? 'bg-emerald-100 text-emerald-700'
        : 'bg-amber-100 text-amber-700';
  return (
    <div>
      <span
        className={['flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold', ring].join(' ')}
      >
        {number}
      </span>
      <h4 className="mt-3 text-lg font-semibold tracking-tight text-neutral-900">{title}</h4>
      <p className="mt-2 text-sm leading-relaxed text-neutral-700">{body}</p>
    </div>
  );
}

interface GetStartedSectionProps {
  onNavigate: (view: View) => void;
}

function GetStartedSection({ onNavigate }: GetStartedSectionProps) {
  return (
    <section>
      <SectionHeader eyebrow="Start here" title="Two ways in." />
      <div className="grid gap-5 md:grid-cols-2">
        <StartCard
          accent="indigo"
          icon={<BookIcon className="h-5 w-5" />}
          title="Explore the trade-offs"
          body="Browse all 42 trade-offs across 7 categories. Read what each position produces, then mark where the team stands and where it should head."
          ctaLabel="Open Trade-offs"
          onClick={() => onNavigate('trade-offs')}
        />
        <StartCard
          accent="emerald"
          icon={<GaugeIcon className="h-5 w-5" />}
          title="See your roadmap"
          body="The visual gap between current and target, plus tech suggestions to close it. Empty until you've marked a few positions."
          ctaLabel="Open Roadmap"
          onClick={() => onNavigate('roadmap')}
        />
      </div>
    </section>
  );
}

interface CompareToolSectionProps {
  onNavigate: (view: View) => void;
}

function CompareToolSection({ onNavigate }: CompareToolSectionProps) {
  return (
    <section>
      <SectionHeader
        eyebrow="Aligning teams"
        title={
          <>
            Get every team pointing the <span className="text-amber-600">same direction</span>.
          </>
        }
        intro={
          <>
            Each team builds its own roadmap — current and target positions across all 42 trade-offs.
            <strong> Compare</strong> overlays them on one direction map so you can see, at a glance,
            where teams already agree, where they disagree, and where any of them drift from the
            organisation&apos;s technical strategy.
          </>
        }
      />

      <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
        <div className="grid gap-5 p-4 sm:gap-6 sm:p-6 md:grid-cols-3 md:gap-8 md:p-8">
          <RoadmapStep
            number="1"
            accent="indigo"
            title="Each team marks its roadmap"
            body={
              <>
                Every team takes the same 42 trade-offs and marks{' '}
                <strong className="text-indigo-700">we&apos;re here</strong> and{' '}
                <strong className="text-emerald-700">we want this</strong> from their own
                perspective. Export it as JSON.
              </>
            }
          />
          <RoadmapStep
            number="2"
            accent="emerald"
            title="Overlay them on one map"
            body={
              <>
                Drop every team&apos;s JSON into <strong>Compare</strong>. Each roadmap becomes a
                distinct coloured line on a shared direction map — current as a solid line, target
                as a dashed one.
              </>
            }
          />
          <RoadmapStep
            number="3"
            accent="amber"
            title="Spot alignment and drift"
            body={
              <>
                Tightly bundled lines = teams already agree. Lines that diverge from the
                organisation&apos;s reference roadmap = where alignment conversations are needed
                most.
              </>
            }
          />
        </div>

        <div className="border-t border-neutral-200 bg-neutral-50/60 p-4 sm:p-6 md:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-neutral-500">
            Two angles of alignment
          </p>
          <div className="mt-3 grid gap-5 md:grid-cols-2">
            <div>
              <h4 className="text-base font-semibold tracking-tight text-neutral-900">
                Internal alignment
              </h4>
              <p className="mt-1.5 text-sm leading-relaxed text-neutral-700">
                Compare roadmaps inside one team — engineers vs. tech lead vs. product — to
                surface unspoken assumptions before they harden into separate plans.
              </p>
            </div>
            <div>
              <h4 className="text-base font-semibold tracking-tight text-neutral-900">
                Strategic alignment
              </h4>
              <p className="mt-1.5 text-sm leading-relaxed text-neutral-700">
                Add the organisation&apos;s technical strategy as one of the roadmaps. Every other
                team&apos;s lines now show, concretely, where they support the strategy and where
                they pull away from it.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('compare')}
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-neutral-800"
          >
            <CompareIcon className="h-4 w-4" />
            Open Compare
            <span aria-hidden>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

interface StartCardProps {
  accent: 'indigo' | 'emerald';
  icon: JSX.Element;
  title: string;
  body: string;
  ctaLabel: string;
  onClick: () => void;
}

function StartCard({ accent, icon, title, body, ctaLabel, onClick }: StartCardProps) {
  const accentClasses =
    accent === 'indigo'
      ? {
        stripe: 'bg-indigo-600',
        iconWrap: 'bg-indigo-100 text-indigo-700',
        cta: 'bg-indigo-600 hover:bg-indigo-700',
      }
      : {
        stripe: 'bg-emerald-600',
        iconWrap: 'bg-emerald-100 text-emerald-700',
        cta: 'bg-emerald-600 hover:bg-emerald-700',
      };
  return (
    <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm sm:p-6 md:p-8">
      <div aria-hidden className={`absolute inset-x-0 top-0 h-1 ${accentClasses.stripe}`} />
      <span
        className={`flex h-10 w-10 items-center justify-center rounded-xl ${accentClasses.iconWrap}`}
      >
        {icon}
      </span>
      <h3 className="mt-4 text-xl font-semibold tracking-tight text-neutral-900">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-neutral-700">{body}</p>
      <button
        type="button"
        onClick={onClick}
        className={[
          'mt-5 inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-white shadow-sm transition',
          accentClasses.cta,
        ].join(' ')}
      >
        {ctaLabel}
        <span aria-hidden>→</span>
      </button>
    </div>
  );
}

function PhilosophySection() {
  return (
    <section className="rounded-2xl border border-amber-200 bg-amber-50/50 p-4 shadow-sm sm:p-7 md:p-9">
      <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-wider text-amber-700">
            The Aristotelian corrective
          </p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-900">
            Aim past the mean toward the opposite vice.
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-700 md:text-base">
            The Mean is where the platform is most calibrated. But organisations have inertia. If
            you know which side you are drifting toward, aim further than the centre — toward the
            opposite extreme. The inertia will pull you back to the middle. Aim for the middle and
            inertia keeps you on the side you started.
          </p>
        </div>
        <blockquote className="rounded-xl border border-amber-200 bg-white p-5 text-sm italic text-neutral-800 shadow-sm md:max-w-xs">
          "Every virtue is the mean between two vices — one of excess, one of deficiency."
        </blockquote>
      </div>

      <div className="mt-6 flex flex-wrap items-baseline gap-x-2 gap-y-1 border-t border-amber-200 pt-5 text-sm">
        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-amber-700">
          ax·i·ol·o·gy
        </span>
        <span className="text-xs italic text-neutral-500">/æk.siˈɒl.ə.dʒi/ noun</span>
        <span className="text-neutral-700">
          the philosophical study of value — what is worth having, what it costs, and how we judge
          between them.
        </span>
      </div>
    </section>
  );
}

interface CTAButtonProps {
  onClick: () => void;
  icon: JSX.Element;
  label: string;
  primary?: boolean;
}

function CTAButton({ onClick, icon, label, primary }: CTAButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        'inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium shadow-sm transition',
        primary
          ? 'bg-neutral-900 text-white hover:bg-neutral-800'
          : 'border border-neutral-200 bg-white text-neutral-800 hover:border-neutral-400 hover:text-neutral-900',
      ].join(' ')}
    >
      {icon}
      {label}
    </button>
  );
}

interface ValueCardProps {
  accent: string;
  icon: JSX.Element;
  headline: string;
  body: string;
}

function ValueCard({ accent, icon, headline, body }: ValueCardProps) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-neutral-200 bg-white p-4 shadow-sm sm:p-6">
      <div aria-hidden className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accent}`} />
      <span
        className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${accent} text-white shadow-sm`}
      >
        {icon}
      </span>
      <h3 className="mt-4 text-xl font-semibold tracking-tight text-neutral-900">{headline}</h3>
      <p className="mt-3 text-sm leading-relaxed text-neutral-700">{body}</p>
    </div>
  );
}
