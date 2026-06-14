import { useEffect, useState } from 'react'
import { KEYS, loadJSON, saveJSON } from '../lib/storage'
import { seedMaterials } from '../data/seed'

const uid = () => `m-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`

const SEED_VERSION = 3

export function useMaterials() {
  const [materials, setMaterials] = useState(() => {
    const stored = loadJSON(KEYS.materials, null)
    const storedVersion = loadJSON(KEYS.seedVersion, null)
    if (stored === null || storedVersion !== SEED_VERSION) {
      saveJSON(KEYS.seedVersion, SEED_VERSION)
      saveJSON(KEYS.materials, seedMaterials)
      return seedMaterials
    }
    return stored
  })

  useEffect(() => {
    saveJSON(KEYS.materials, materials)
  }, [materials])

  const addMaterial = (data) => {
    const material = {
      id: uid(),
      createdAt: Date.now(),
      status: data.status || 'queue',
      ...data,
    }
    setMaterials((prev) => [material, ...prev])
    return material
  }

  const updateMaterial = (id, data) => {
    setMaterials((prev) => prev.map((m) => (m.id === id ? { ...m, ...data } : m)))
  }

  const deleteMaterial = (id) => {
    setMaterials((prev) => prev.filter((m) => m.id !== id))
  }

  const setStatus = (id, status) => {
    setMaterials((prev) => prev.map((m) => (m.id === id ? { ...m, status } : m)))
  }

  const clearAll = () => setMaterials([])

  return {
    materials,
    addMaterial,
    updateMaterial,
    deleteMaterial,
    setStatus,
    clearAll,
  }
}
