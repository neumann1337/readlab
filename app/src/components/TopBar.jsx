export default function TopBar({ search, onSearch, onAdd, onOpenSettings }) {
  return (
    <header className="sticky top-0 z-10 border-b border-[var(--line)] backdrop-blur-xl bg-[color-mix(in_srgb,var(--bg)_72%,transparent)]">
      <div className="mx-auto max-w-6xl px-5 py-3 flex items-center gap-4">
        <span className="shrink-0 text-[17px] font-semibold tracking-[-0.02em] text-[var(--fg)]">
          ReadLab
        </span>

        <div className="relative flex-1 max-w-sm">
          <svg
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--fg2)]"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden
          >
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.45 4.39l3.08 3.08a1 1 0 01-1.42 1.42l-3.08-3.08A7 7 0 012 9z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="search"
            value={search}
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Szukaj"
            aria-label="Szukaj książek"
            className="w-full rounded-full border border-transparent bg-[var(--hover)] py-2 pl-9 pr-3 text-[14px] text-[var(--fg)] placeholder:text-[var(--fg2)] focus:outline-none focus:border-[var(--line)]"
          />
        </div>

        <div className="flex items-center gap-1.5 ml-auto">
          <button
            type="button"
            onClick={onOpenSettings}
            aria-label="Ustawienia"
            className="grid h-9 w-9 place-items-center rounded-full text-[var(--fg2)] hover:bg-[var(--hover)] hover:text-[var(--fg)] transition"
          >
            <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 110 4h-.09a1.65 1.65 0 00-1.51 1z" />
            </svg>
          </button>
          <button
            type="button"
            onClick={onAdd}
            className="inline-flex items-center gap-1 rounded-full bg-[var(--fg)] px-4 py-2 text-[14px] font-medium text-[var(--surface)] hover:opacity-85 transition"
          >
            <span className="text-[16px] leading-none -mt-px">+</span>
            <span className="hidden sm:inline">Dodaj</span>
          </button>
        </div>
      </div>
    </header>
  )
}
