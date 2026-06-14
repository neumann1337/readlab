export const STATUSES = [
  { id: 'queue', label: 'Kolejka' },
  { id: 'reading', label: 'W trakcie' },
  { id: 'done', label: 'Skończone' },
]

export const PRIORITIES = [
  { id: 'low', label: 'Niski' },
  { id: 'medium', label: 'Średni' },
  { id: 'high', label: 'Wysoki' },
]

export const SORT_OPTIONS = [
  { id: 'created', label: 'Data dodania' },
  { id: 'title', label: 'Tytuł (A–Z)' },
  { id: 'priority', label: 'Priorytet' },
  { id: 'due', label: 'Termin' },
]

export const PRIORITY_RANK = { high: 3, medium: 2, low: 1, '': 0 }

export const labelOf = (list, id) => list.find((x) => x.id === id)?.label ?? ''
