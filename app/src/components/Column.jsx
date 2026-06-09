import { useState } from 'react'
import Card from './Card'

export default function Column({
  status,
  materials,
  onCardClick,
  onDragStart,
  onDrop,
  overLimit,
}) {
  const [isOver, setIsOver] = useState(false)

  const handleDrop = (e) => {
    e.preventDefault()
    setIsOver(false)
    const id = e.dataTransfer.getData('text/plain')
    if (id) onDrop(id, status.id)
  }

  return (
    <section
      onDragOver={(e) => {
        e.preventDefault()
        setIsOver(true)
      }}
      onDragLeave={() => setIsOver(false)}
      onDrop={handleDrop}
      className={`flex flex-col rounded-[20px] p-1 transition-colors
        ${isOver ? 'bg-[var(--hover)]' : 'bg-transparent'}`}
    >
      <div className="flex items-baseline justify-between px-2 pb-3 pt-1">
        <h2 className="text-[12px] font-semibold uppercase tracking-[0.06em] text-[var(--fg2)]">
          {status.label}
        </h2>
        <span className="text-[12px] tabular-nums text-[var(--fg2)]">
          {materials.length}
        </span>
      </div>

      {overLimit && (
        <p className="mb-2 px-2 text-[12px] leading-snug text-[var(--fg2)]">
          Sporo rzeczy naraz w trakcie — może najpierw dokończ jedną?
        </p>
      )}

      <div className="flex flex-1 flex-col gap-2.5 min-h-[64px]">
        {materials.length === 0 ? (
          <div className="flex flex-1 items-center justify-center rounded-[18px] border border-dashed border-[var(--line)] p-8 text-center text-[13px] text-[var(--fg2)]">
            Przeciągnij tu książkę
          </div>
        ) : (
          materials.map((m) => (
            <Card
              key={m.id}
              material={m}
              onClick={onCardClick}
              onDragStart={onDragStart}
              dimmed={status.id === 'done'}
            />
          ))
        )}
      </div>
    </section>
  )
}
