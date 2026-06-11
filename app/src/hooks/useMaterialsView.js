import { useMemo, useState } from 'react'
import { PRIORITY_RANK } from '../lib/constants'

export function useMaterialsView(materials) {
  const [search, setSearch] = useState('')
  const [filters, setFilters] = useState({ tag: '', priority: '' })
  const [sort, setSort] = useState('created')

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

  return { search, setSearch, filters, setFilters, sort, setSort, tags, visible }
}
