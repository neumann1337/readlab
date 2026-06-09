import { PRIORITIES, labelOf } from '../lib/constants'

function dueInfo(due) {
  if (!due) return null
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const d = new Date(due + 'T00:00:00')
  const days = Math.round((d - today) / (1000 * 60 * 60 * 24))
  const label = d.toLocaleDateString('pl-PL', { day: 'numeric', month: 'long' })
  return { label, overdue: days < 0 }
}

export default function Card({ material, onClick, onDragStart, dimmed }) {
  const due = dueInfo(material.due)
  const hasMeta = material.tag || material.priority || due

  return (
    <button
      type="button"
      draggable
      onDragStart={(e) => onDragStart?.(e, material)}
      onClick={() => onClick(material)}
      className={`group w-full text-left rounded-[18px] border p-4 transition duration-200
        border-[var(--line)] bg-[var(--surface)]
        hover:shadow-[0_6px_24px_rgba(0,0,0,0.07)] hover:-translate-y-px cursor-pointer
        ${dimmed ? 'opacity-55' : ''}`}
    >
      <p className="text-[15px] font-medium leading-snug tracking-[-0.01em] text-[var(--fg)] break-words">
        {material.title}
      </p>
      {material.author && (
        <p className="mt-0.5 text-[13px] text-[var(--fg2)] truncate">
          {material.author}
        </p>
      )}

      {hasMeta && (
        <div className="mt-3 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[12px] text-[var(--fg2)]">
          {material.tag && (
            <span className="rounded-full border border-[var(--line)] px-2 py-[1px] text-[11px]">
              {material.tag}
            </span>
          )}

          {material.priority && (
            <span>{labelOf(PRIORITIES, material.priority)}</span>
          )}

          {due && (
            <span style={due.overdue ? { color: 'var(--danger)' } : undefined}>
              {due.overdue ? '⚠ ' : ''}
              {due.label}
            </span>
          )}
        </div>
      )}
    </button>
  )
}
