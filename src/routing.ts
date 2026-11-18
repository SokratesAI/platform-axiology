import { useEffect, useState } from 'react';

export type View = 'home' | 'trade-offs' | 'roadmap' | 'compare';

export interface Route {
  view: View;
  tradeOffCode?: string;
}

const KEY_PREFIX = 'pa:last-route:';

function isView(value: string): value is View {
  return value === 'home' || value === 'trade-offs' || value === 'roadmap' || value === 'compare';
}

export function parseHash(hash: string): Route {
  // Drop leading "#" and optional leading "/".
  const cleaned = hash.replace(/^#\/?/, '').replace(/^\/+/, '');
  if (!cleaned) return { view: 'home' };
  const [first, second] = cleaned.split('/');
  if (!first) return { view: 'home' };
  if (!isView(first)) return { view: 'home' };
  if (first === 'trade-offs') {
    return { view: 'trade-offs', tradeOffCode: second ? decodeURIComponent(second) : undefined };
  }
  return { view: first };
}

export function routeToHash(route: Route): string {
  if (route.view === 'home') return '#/';
  if (route.view === 'trade-offs') {
    return route.tradeOffCode
      ? `#/trade-offs/${encodeURIComponent(route.tradeOffCode)}`
      : '#/trade-offs';
  }
  return `#/${route.view}`;
}

export function navigate(route: Route): void {
  if (typeof window === 'undefined') return;
  const target = routeToHash(route);
  if (window.location.hash === target) return;
  window.location.hash = target;
}

/** Look up the last URL we were on for this view, if we've been there before. */
export function getRememberedRoute(view: View): Route | null {
  if (typeof sessionStorage === 'undefined') return null;
  try {
    const raw = sessionStorage.getItem(`${KEY_PREFIX}${view}`);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Route;
    if (!isView(parsed.view)) return null;
    return parsed;
  } catch {
    return null;
  }
}

function rememberRoute(route: Route): void {
  if (typeof sessionStorage === 'undefined') return;
  try {
    sessionStorage.setItem(`${KEY_PREFIX}${route.view}`, JSON.stringify(route));
  } catch {
    // ignore quota / privacy mode
  }
}

/**
 * Nav-click handler: jump back to the last URL you were on for that view, or
 * the view's root if you've never visited it this session.
 */
export function navigateView(view: View): void {
  const remembered = getRememberedRoute(view);
  navigate(remembered ?? { view });
}

export function useRoute(): Route {
  const [route, setRoute] = useState<Route>(() =>
    typeof window === 'undefined' ? { view: 'home' } : parseHash(window.location.hash),
  );

  useEffect(() => {
    const onChange = () => setRoute(parseHash(window.location.hash));
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  // Remember the last URL per view so Nav clicks can restore it.
  useEffect(() => {
    rememberRoute(route);
  }, [route]);

  return route;
}
