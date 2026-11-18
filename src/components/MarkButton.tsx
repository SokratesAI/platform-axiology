interface MarkButtonProps {
  tone: 'current' | 'target';
  label: string;
  active: boolean;
  onClick: () => void;
}

export function MarkButton({ tone, label, active, onClick }: MarkButtonProps) {
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
