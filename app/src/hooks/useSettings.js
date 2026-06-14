import { useEffect, useState } from 'react'
import { KEYS, loadJSON, saveJSON } from '../lib/storage'

const DEFAULTS = { dark: false, readingLimit: 3 }

export function useSettings() {
  const [settings, setSettings] = useState(() => loadJSON(KEYS.settings, DEFAULTS))

  useEffect(() => {
    saveJSON(KEYS.settings, settings)
    document.documentElement.classList.toggle('dark', settings.dark)
  }, [settings])

  const setDark = (dark) => setSettings((s) => ({ ...s, dark }))
  const setReadingLimit = (readingLimit) => setSettings((s) => ({ ...s, readingLimit }))

  return { settings, setDark, setReadingLimit }
}
