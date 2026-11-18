export interface SpectrumColors {
  base: string;
  baseHover: string;
  selected: string;
  text: string;
  ring: string;
  dot: string;
  topBar: string;
}

export function spectrumColors(idx: number): SpectrumColors {
  // Extremes (col 0, col 6) are a shade darker than the inner positions on
  // their side, to subtly reinforce that they are the failure-mode extremes.
  if (idx === 0) {
    return {
      base: 'border-rose-300 bg-rose-100 text-rose-900',
      baseHover: 'hover:border-rose-500 hover:bg-rose-200',
      selected: 'border-rose-700 bg-gradient-to-br from-rose-600 to-rose-800 text-white shadow-sm',
      text: 'text-rose-700',
      ring: 'ring-rose-300',
      dot: 'bg-rose-600',
      topBar: 'bg-gradient-to-r from-rose-500 to-rose-700',
    };
  }
  if (idx <= 2) {
    return {
      base: 'border-rose-200 bg-rose-50 text-rose-900',
      baseHover: 'hover:border-rose-400 hover:bg-rose-100',
      selected: 'border-rose-600 bg-gradient-to-br from-rose-500 to-rose-700 text-white shadow-sm',
      text: 'text-rose-700',
      ring: 'ring-rose-300',
      dot: 'bg-rose-500',
      topBar: 'bg-gradient-to-r from-rose-400 to-rose-600',
    };
  }
  if (idx === 3) {
    return {
      base: 'border-amber-300 bg-amber-50 text-amber-900',
      baseHover: 'hover:border-amber-500 hover:bg-amber-100',
      selected: 'border-amber-600 bg-gradient-to-br from-amber-400 to-amber-600 text-white shadow-sm',
      text: 'text-amber-800',
      ring: 'ring-amber-300',
      dot: 'bg-amber-500',
      topBar: 'bg-gradient-to-r from-amber-400 to-amber-600',
    };
  }
  if (idx === 6) {
    return {
      base: 'border-sky-300 bg-sky-100 text-sky-900',
      baseHover: 'hover:border-sky-500 hover:bg-sky-200',
      selected: 'border-sky-700 bg-gradient-to-br from-sky-600 to-sky-800 text-white shadow-sm',
      text: 'text-sky-700',
      ring: 'ring-sky-300',
      dot: 'bg-sky-600',
      topBar: 'bg-gradient-to-r from-sky-500 to-sky-700',
    };
  }
  return {
    base: 'border-sky-200 bg-sky-50 text-sky-900',
    baseHover: 'hover:border-sky-400 hover:bg-sky-100',
    selected: 'border-sky-600 bg-gradient-to-br from-sky-500 to-sky-700 text-white shadow-sm',
    text: 'text-sky-700',
    ring: 'ring-sky-300',
    dot: 'bg-sky-500',
    topBar: 'bg-gradient-to-r from-sky-400 to-sky-600',
  };
}

export interface CategoryAccent {
  name: string;
  dot: string;
  bgSoft: string;
  bgGradient: string;
  text: string;
  textOnLight: string;
  border: string;
  ring: string;
  fromHex: string;
  toHex: string;
}

const ACCENTS_BY_ROMAN: Record<string, CategoryAccent> = {
  I: {
    name: 'violet',
    dot: 'bg-violet-500',
    bgSoft: 'bg-violet-50',
    bgGradient: 'from-violet-500 to-purple-600',
    text: 'text-violet-800',
    textOnLight: 'text-violet-800',
    border: 'border-violet-300',
    ring: 'ring-violet-200',
    fromHex: '#8b5cf6',
    toHex: '#9333ea',
  },
  II: {
    name: 'sky',
    dot: 'bg-sky-500',
    bgSoft: 'bg-sky-50',
    bgGradient: 'from-sky-500 to-blue-600',
    text: 'text-sky-800',
    textOnLight: 'text-sky-800',
    border: 'border-sky-300',
    ring: 'ring-sky-200',
    fromHex: '#0ea5e9',
    toHex: '#2563eb',
  },
  III: {
    name: 'emerald',
    dot: 'bg-emerald-500',
    bgSoft: 'bg-emerald-50',
    bgGradient: 'from-emerald-500 to-teal-600',
    text: 'text-emerald-800',
    textOnLight: 'text-emerald-800',
    border: 'border-emerald-300',
    ring: 'ring-emerald-200',
    fromHex: '#10b981',
    toHex: '#0d9488',
  },
  IV: {
    name: 'rose',
    dot: 'bg-rose-500',
    bgSoft: 'bg-rose-50',
    bgGradient: 'from-rose-500 to-pink-600',
    text: 'text-rose-800',
    textOnLight: 'text-rose-800',
    border: 'border-rose-300',
    ring: 'ring-rose-200',
    fromHex: '#f43f5e',
    toHex: '#db2777',
  },
  V: {
    name: 'amber',
    dot: 'bg-amber-500',
    bgSoft: 'bg-amber-50',
    bgGradient: 'from-amber-500 to-orange-600',
    text: 'text-amber-900',
    textOnLight: 'text-amber-900',
    border: 'border-amber-300',
    ring: 'ring-amber-200',
    fromHex: '#f59e0b',
    toHex: '#ea580c',
  },
  VI: {
    name: 'fuchsia',
    dot: 'bg-fuchsia-500',
    bgSoft: 'bg-fuchsia-50',
    bgGradient: 'from-fuchsia-500 to-pink-600',
    text: 'text-fuchsia-800',
    textOnLight: 'text-fuchsia-800',
    border: 'border-fuchsia-300',
    ring: 'ring-fuchsia-200',
    fromHex: '#d946ef',
    toHex: '#db2777',
  },
  VII: {
    name: 'teal',
    dot: 'bg-teal-500',
    bgSoft: 'bg-teal-50',
    bgGradient: 'from-teal-500 to-emerald-600',
    text: 'text-teal-800',
    textOnLight: 'text-teal-800',
    border: 'border-teal-300',
    ring: 'ring-teal-200',
    fromHex: '#14b8a6',
    toHex: '#059669',
  },
};

const FALLBACK: CategoryAccent = ACCENTS_BY_ROMAN.I;

export function categoryAccent(romanId: string): CategoryAccent {
  return ACCENTS_BY_ROMAN[romanId] ?? FALLBACK;
}

const CATEGORY_SHORT_LABEL: Record<string, string> = {
  I: 'Composition',
  II: 'Process',
  III: 'Structure',
  IV: 'Relational',
  V: 'Temporal',
  VI: 'Purpose',
  VII: 'Environment',
};

export function categoryShortLabel(romanId: string): string {
  return CATEGORY_SHORT_LABEL[romanId] ?? romanId;
}

export function tradeOffShortAxis(axis: string): string {
  const left = axis.split('↔')[0]?.trim();
  return left || axis;
}
