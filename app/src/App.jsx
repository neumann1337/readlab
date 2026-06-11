import { useState } from 'react'
import { useMaterials } from './hooks/useMaterials'
import { useSettings } from './hooks/useSettings'
import { useMaterialsView } from './hooks/useMaterialsView'
import TopBar from './components/TopBar'
import FilterBar from './components/FilterBar'
import Board from './components/Board'
import EmptyState from './components/EmptyState'
import NoResults from './components/NoResults'
import MaterialModal from './components/MaterialModal'
import ConfirmDialog from './components/ConfirmDialog'
import SettingsModal from './components/SettingsModal'

export default function App() {
  const { materials, addMaterial, updateMaterial, deleteMaterial, setStatus, clearAll } =
    useMaterials()
  const { settings, setDark, setReadingLimit } = useSettings()
  const { search, setSearch, filters, setFilters, sort, setSort, tags, visible } =
    useMaterialsView(materials)

  const [editing, setEditing] = useState(null)
  const [confirm, setConfirm] = useState(null)
  const [settingsOpen, setSettingsOpen] = useState(false)

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
          <NoResults />
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
          onRequestDelete={(m) => setConfirm({ type: 'delete', payload: m })}
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
