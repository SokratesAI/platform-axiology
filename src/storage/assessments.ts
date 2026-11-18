export interface Assessment {
  tradeOffCode: string;
  currentColumn: number | null;
  targetColumn: number | null;
  updatedAt: number;
}

export interface AssessmentsBlob {
  version: 1;
  assessments: Record<string, Assessment>;
}

const STORAGE_KEY = 'platform-axiology:assessments:v1';

const listeners = new Set<() => void>();

function emptyBlob(): AssessmentsBlob {
  return { version: 1, assessments: {} };
}

function safeLocalStorage(): Storage | null {
  try {
    if (typeof window === 'undefined' || !window.localStorage) return null;
    return window.localStorage;
  } catch {
    return null;
  }
}

function load(): AssessmentsBlob {
  const ls = safeLocalStorage();
  if (!ls) return emptyBlob();
  try {
    const raw = ls.getItem(STORAGE_KEY);
    if (!raw) return emptyBlob();
    const parsed = JSON.parse(raw) as Partial<AssessmentsBlob>;
    if (parsed?.version !== 1 || typeof parsed.assessments !== 'object' || parsed.assessments == null) {
      return emptyBlob();
    }
    // Strip any legacy notes fields when reading.
    const clean: Record<string, Assessment> = {};
    for (const [code, raw] of Object.entries(parsed.assessments as Record<string, Partial<Assessment>>)) {
      clean[code] = {
        tradeOffCode: code,
        currentColumn: typeof raw.currentColumn === 'number' ? raw.currentColumn : null,
        targetColumn: typeof raw.targetColumn === 'number' ? raw.targetColumn : null,
        updatedAt: typeof raw.updatedAt === 'number' ? raw.updatedAt : Date.now(),
      };
    }
    return { version: 1, assessments: clean };
  } catch {
    return emptyBlob();
  }
}

function persist(blob: AssessmentsBlob): void {
  const ls = safeLocalStorage();
  if (!ls) return;
  try {
    ls.setItem(STORAGE_KEY, JSON.stringify(blob));
  } catch {
    // ignore quota / privacy mode
  }
  listeners.forEach(l => l());
}

export function subscribe(fn: () => void): () => void {
  listeners.add(fn);
  return () => {
    listeners.delete(fn);
  };
}

export function getAllAssessments(): Map<string, Assessment> {
  const blob = load();
  return new Map(Object.entries(blob.assessments));
}

export function getAssessment(code: string): Assessment | null {
  return load().assessments[code] ?? null;
}

function upsert(code: string, patch: Partial<Assessment>): Assessment {
  const blob = load();
  const existing = blob.assessments[code];
  const next: Assessment = {
    tradeOffCode: code,
    currentColumn: patch.currentColumn !== undefined ? patch.currentColumn : (existing?.currentColumn ?? null),
    targetColumn: patch.targetColumn !== undefined ? patch.targetColumn : (existing?.targetColumn ?? null),
    updatedAt: Date.now(),
  };
  blob.assessments[code] = next;
  persist(blob);
  return next;
}

export function setCurrentColumn(code: string, col: number | null): void {
  upsert(code, { currentColumn: col });
}

export function setTargetColumn(code: string, col: number | null): void {
  upsert(code, { targetColumn: col });
}

export function clearAll(): void {
  const ls = safeLocalStorage();
  if (ls) ls.removeItem(STORAGE_KEY);
  listeners.forEach(l => l());
}

export function exportJSON(): string {
  return JSON.stringify(load(), null, 2);
}

export interface ImportResult {
  ok: boolean;
  count?: number;
  error?: string;
}

export function importJSON(json: string): ImportResult {
  let parsed: unknown;
  try {
    parsed = JSON.parse(json);
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : 'Could not parse JSON' };
  }
  if (typeof parsed !== 'object' || parsed === null) {
    return { ok: false, error: 'Top-level JSON must be an object.' };
  }
  const obj = parsed as Partial<AssessmentsBlob>;
  if (obj.version !== 1) {
    return { ok: false, error: `Unsupported version: ${String(obj.version)}` };
  }
  if (typeof obj.assessments !== 'object' || obj.assessments == null) {
    return { ok: false, error: 'Missing "assessments" object.' };
  }
  const records = obj.assessments as Record<string, Partial<Assessment>>;
  const sanitised: Record<string, Assessment> = {};
  for (const [code, raw] of Object.entries(records)) {
    if (typeof code !== 'string') continue;
    sanitised[code] = {
      tradeOffCode: code,
      currentColumn: typeof raw.currentColumn === 'number' ? raw.currentColumn : null,
      targetColumn: typeof raw.targetColumn === 'number' ? raw.targetColumn : null,
      updatedAt: typeof raw.updatedAt === 'number' ? raw.updatedAt : Date.now(),
    };
  }
  persist({ version: 1, assessments: sanitised });
  return { ok: true, count: Object.keys(sanitised).length };
}
