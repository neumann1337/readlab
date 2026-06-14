import { useState } from 'react'
import Column from './Column'
import Card from './Card'
import { STATUSES } from '../lib/constants'

export default function Board({ materials, onCardClick, onSetStatus, readingLimit }) {
  const [activeTab, setActiveTab] = useState('queue')

  const byStatus = (statusId) => materials.filter((m) => m.status === statusId)

  const handleDragStart = (e, material) => {
    e.dataTransfer.setData('text/plain', material.id)
    e.dataTransfer.effectAllowed = 'move'
  }

  const handleDrop = (id, statusId) => onSetStatus(id, statusId)

  const readingCount = byStatus('reading').length

  return (
    <>
      <div className="hidden md:grid grid-cols-3 gap-6 items-start">
        {STATUSES.map((status) => (
          <Column
            key={status.id}
            status={status}
            materials={byStatus(status.id)}
            onCardClick={onCardClick}
            onDragStart={handleDragStart}
            onDrop={handleDrop}
            overLimit={status.id === 'reading' && readingCount > readingLimit}
          />
        ))}
      </div>

      <div className="md:hidden">
        <div role="tablist" className="flex rounded-full bg-[var(--hover)] p-1 mb-6">
          {STATUSES.map((status) => {
            const count = byStatus(status.id).length
            const active = activeTab === status.id
            return (
              <button
                key={status.id}
                role="tab"
                aria-selected={active}
                onClick={() => setActiveTab(status.id)}
                className={`flex-1 rounded-full px-2 py-1.5 text-[13px] font-medium transition cursor-pointer
                  ${
                    active ? 'bg-[var(--surface)] text-[var(--fg)] shadow-sm' : 'text-[var(--fg2)]'
                  }`}
              >
                {status.label}
                <span className="ml-1 tabular-nums opacity-60">{count}</span>
              </button>
            )
          })}
        </div>

        {activeTab === 'reading' && readingCount > readingLimit && (
          <p className="mb-3 text-[12px] text-[var(--fg2)]">
            Sporo rzeczy naraz w trakcie - może najpierw dokończ jedną?
          </p>
        )}

        <div className="flex flex-col gap-2.5">
          {byStatus(activeTab).length === 0 ? (
            <div className="rounded-[18px] border border-dashed border-[var(--line)] p-10 text-center text-[13px] text-[var(--fg2)]">
              Brak książek w tej sekcji.
            </div>
          ) : (
            byStatus(activeTab).map((m) => (
              <Card
                key={m.id}
                material={m}
                onClick={onCardClick}
                onDragStart={handleDragStart}
                dimmed={activeTab === 'done'}
              />
            ))
          )}
        </div>
      </div>
    </>
  )
}
