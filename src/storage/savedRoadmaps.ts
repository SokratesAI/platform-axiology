import type { Assessment } from './assessments';

export interface SavedRoadmap {
    id: string;
    name: string;
    colourIndex: number;
    /** Hex colours stored alongside colourIndex so custom picks survive refresh. */
    currentHex?: string;
    targetHex?: string;
    /** Raw assessment data serialised for storage. */
    assessments: Record<string, { currentColumn: number | null; targetColumn: number | null; updatedAt: number }>;
}

interface SavedRoadmapsBlob {
    version: 1;
    roadmaps: SavedRoadmap[];
}

const STORAGE_KEY = 'platform-axiology:compare-roadmaps:v1';

function safeLocalStorage(): Storage | null {
    try {
        if (typeof window === 'undefined' || !window.localStorage) return null;
        return window.localStorage;
    } catch {
        return null;
    }
}

export function loadSavedRoadmaps(): SavedRoadmap[] {
    const ls = safeLocalStorage();
    if (!ls) return [];
    try {
        const raw = ls.getItem(STORAGE_KEY);
        if (!raw) return [];
        const parsed = JSON.parse(raw) as Partial<SavedRoadmapsBlob>;
        if (parsed?.version !== 1 || !Array.isArray(parsed.roadmaps)) return [];
        return parsed.roadmaps;
    } catch {
        return [];
    }
}

export function persistSavedRoadmaps(roadmaps: SavedRoadmap[]): void {
    const ls = safeLocalStorage();
    if (!ls) return;
    try {
        const blob: SavedRoadmapsBlob = { version: 1, roadmaps };
        ls.setItem(STORAGE_KEY, JSON.stringify(blob));
    } catch {
        // quota exceeded — silently skip
    }
}

/** Converts the stored plain object back to a Map<string, Assessment>. */
export function savedRoadmapToAssessmentMap(saved: SavedRoadmap): Map<string, Assessment> {
    const map = new Map<string, Assessment>();
    for (const [code, raw] of Object.entries(saved.assessments)) {
        map.set(code, {
            tradeOffCode: code,
            currentColumn: typeof raw.currentColumn === 'number' ? raw.currentColumn : null,
            targetColumn: typeof raw.targetColumn === 'number' ? raw.targetColumn : null,
            updatedAt: typeof raw.updatedAt === 'number' ? raw.updatedAt : Date.now(),
        });
    }
    return map;
}

/** Converts a Map<string, Assessment> to the plain object format for storage. */
export function assessmentMapToSaved(
    map: Map<string, Assessment>,
): SavedRoadmap['assessments'] {
    const obj: SavedRoadmap['assessments'] = {};
    for (const [code, a] of map) {
        obj[code] = { currentColumn: a.currentColumn, targetColumn: a.targetColumn, updatedAt: a.updatedAt };
    }
    return obj;
}
