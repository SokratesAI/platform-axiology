import { useEffect } from 'react';
import { Nav } from './components/Nav';
import { TradeOffsView } from './components/LearnView';
import { RoadmapView } from './components/RoadmapView';
import { CompareView } from './components/CompareView';
import { LandingPage } from './components/LandingPage';
import { navigate, navigateView, useRoute, View } from './routing';

export default function App() {
  const route = useRoute();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [route.view]);

  return (
    <div className="relative min-h-screen overflow-x-clip text-neutral-900">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-amber-50/40 via-white to-white"
      />

      <Nav
        view={route.view}
        tradeOffCode={route.tradeOffCode}
        onChange={(v: View) => navigateView(v)}
        onHome={() => navigate({ view: 'home' })}
      />
      <main className="mx-auto max-w-[1440px] px-3 py-6 sm:px-6 sm:py-10">
        {route.view === 'home' && <LandingPage onNavigate={(v: View) => navigateView(v)} />}
        {route.view === 'trade-offs' && <TradeOffsView />}
        {route.view === 'roadmap' && <RoadmapView />}
        {route.view === 'compare' && <CompareView />}
      </main>
    </div>
  );
}
