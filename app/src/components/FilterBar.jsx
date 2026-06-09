import { PRIORITIES, SORT_OPTIONS } from '../lib/constants'

const selectClass =
  'rounded-full border border-[var(--line)] bg-transparent px-3 py-1.5 text-[13px] text-[var(--fg)] hover:bg-[var(--hover)] focus:outline-none focus:border-[var(--fg2)] transition cursor-pointer appearance-none'

export default function FilterBar({ filters, onChange, sort, onSort, tags }) {
  const set = (key, value) => onChange({ ...filters, [key]: value })
  const hasFilters = filters.tag || filters.priority

  return (
    <div className="flex flex-wrap items-center gap-2">
      <select
        value={filters.tag}
        onChange={(e) => set('tag', e.target.value)}
        aria-label="Filtruj po tagu"
        className={selectClass}
      >
        <option value="">Tag: wszystkie</option>
        {tags.map((tag) => (
          <option key={tag} value={tag}>
            {tag}
          </option>
        ))}
      </select>

      <select
        value={filters.priority}
        onChange={(e) => set('priority', e.target.value)}
        aria-label="Filtruj po priorytecie"
        className={selectClass}
      >
        <option value="">Priorytet: każdy</option>
        {PRIORITIES.map((p) => (
          <option key={p.id} value={p.id}>
            {p.label}
          </option>
        ))}
      </select>

      {hasFilters && (
        <button
          type="button"
          onClick={() => onChange({ tag: '', priority: '' })}
          className="px-2 text-[13px] text-[var(--fg2)] hover:text-[var(--fg)] transition"
        >
          Wyczyść
        </button>
      )}

      <div className="ml-auto flex items-center gap-2">
        <span className="text-[13px] text-[var(--fg2)]">Sortuj</span>
        <select
          value={sort}
          onChange={(e) => onSort(e.target.value)}
          aria-label="Sortowanie"
          className={selectClass}
        >
          {SORT_OPTIONS.map((s) => (
            <option key={s.id} value={s.id}>
              {s.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
