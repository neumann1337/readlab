import { useMemo, useState } from 'react'
import { useMaterials } from './hooks/useMaterials'
import { useSettings } from './hooks/useSettings'
import { PRIORITY_RANK } from './lib/constants'
import TopBar from './components/TopBar'
import FilterBar from './components/FilterBar'
import Board from './components/Board'
import MaterialModal from './components/MaterialModal'
import ConfirmDialog from './components/ConfirmDialog'
import SettingsModal from './components/SettingsModal'

export default function App() {
  const {
    materials,
    addMaterial,
    updateMaterial,
    deleteMaterial,
    setStatus,
    clearAll,
  } = useMaterials()
  const { settings, setDark, setReadingLimit } = useSettings()

  const [search, setSearch] = useState('')
  const [filters, setFilters] = useState({ tag: '', priority: '' })
  const [sort, setSort] = useState('created')

  const [editing, setEditing] = useState(null)
  const [confirm, setConfirm] = useState(null)
  const [settingsOpen, setSettingsOpen] = useState(false)

  const tags = useMemo(
    () =>
      [...new Set(materials.map((m) => m.tag).filter(Boolean))].sort((a, b) =>
        a.localeCompare(b, 'pl')
      ),
    [materials]
  )

  const visible = useMemo(() => {
    const q = search.trim().toLowerCase()
    let list = materials.filter((m) => {
      if (filters.tag && m.tag !== filters.tag) return false
      if (filters.priority && m.priority !== filters.priority) return false
      if (q) {
        const hay = `${m.title} ${m.author} ${m.tag}`.toLowerCase()
        if (!hay.includes(q)) return false
      }
      return true
    })

    list = [...list].sort((a, b) => {
      switch (sort) {
        case 'title':
          return a.title.localeCompare(b.title, 'pl')
        case 'priority':
          return (
            (PRIORITY_RANK[b.priority] || 0) - (PRIORITY_RANK[a.priority] || 0)
          )
        case 'due':
          if (!a.due) return 1
          if (!b.due) return -1
          return a.due.localeCompare(b.due)
        default:
          return b.createdAt - a.createdAt
      }
    })
    return list
  }, [materials, filters, search, sort])

  const handleSave = (data) => {
    if (data.id) updateMaterial(data.id, data)
    else addMaterial(data)
  }

  const totalCount = materials.length
  const noResults = visible.length === 0 && totalCount > 0

  return (
    <div className="min-h-full bg-[var(--bg)] text-[var(--fg)]">
      <TopBar
        search={search}
        onSearch={setSearch}
        onAdd={() => setEditing({})}
        onOpenSettings={() => setSettingsOpen(true)}
      />

      <main className="mx-auto max-w-6xl px-5 py-8">
        <div className="mb-6">
          <FilterBar
            filters={filters}
            onChange={setFilters}
            sort={sort}
            onSort={setSort}
            tags={tags}
          />
        </div>

        {totalCount === 0 ? (
          <EmptyState onAdd={() => setEditing({})} />
        ) : noResults ? (
          <div className="rounded-[20px] border border-dashed border-[var(--line)] p-16 text-center text-[14px] text-[var(--fg2)]">
            Nic nie pasuje do wyszukiwania ani filtrów.
          </div>
        ) : (
          <Board
            materials={visible}
            onCardClick={(m) => setEditing(m)}
            onSetStatus={setStatus}
            readingLimit={settings.readingLimit}
          />
        )}
      </main>

      {editing && (
        <MaterialModal
          material={editing.id ? editing : null}
          onSave={handleSave}
          onRequestDelete={(m) =>
            setConfirm({ type: 'delete', payload: m })
          }
          onClose={() => setEditing(null)}
        />
      )}

      {settingsOpen && (
        <SettingsModal
          settings={settings}
          onSetDark={setDark}
          onSetReadingLimit={setReadingLimit}
          onRequestClear={() => setConfirm({ type: 'clear' })}
          onClose={() => setSettingsOpen(false)}
        />
      )}

      {confirm?.type === 'delete' && (
        <ConfirmDialog
          title="Usunąć książkę?"
          message={`„${confirm.payload.title}" zostanie trwale usunięty.`}
          onConfirm={() => {
            deleteMaterial(confirm.payload.id)
            setEditing(null)
          }}
          onClose={() => setConfirm(null)}
        />
      )}

      {confirm?.type === 'clear' && (
        <ConfirmDialog
          title="Wyczyścić wszystkie dane?"
          message="Wszystkie książki zostaną usunięte. Tej operacji nie można cofnąć."
          confirmLabel="Wyczyść wszystko"
          onConfirm={() => {
            clearAll()
            setSettingsOpen(false)
          }}
          onClose={() => setConfirm(null)}
        />
      )}
    </div>
  )
}

function EmptyState({ onAdd }) {
  return (
    <div className="flex flex-col items-center justify-center py-28 text-center">
      <h2 className="text-[24px] font-semibold tracking-[-0.02em] text-[var(--fg)]">
        Twoja kolejka jest pusta
      </h2>
      <p className="mt-2 max-w-sm text-[15px] leading-relaxed text-[var(--fg2)]">
        Dodaj pierwszą książkę, którą chcesz przeczytać.
      </p>
      <button
        type="button"
        onClick={onAdd}
        className="mt-6 inline-flex items-center gap-1 rounded-full bg-[var(--fg)] px-5 py-2.5 text-[14px] font-medium text-[var(--surface)] hover:opacity-85 transition"
      >
        <span className="text-[16px] leading-none -mt-px">+</span> Dodaj książkę
      </button>
    </div>
  )
}
