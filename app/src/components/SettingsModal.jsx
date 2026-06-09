import Modal from './Modal'

function Toggle({ checked, onChange, label }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      className="relative h-[30px] w-[50px] rounded-full transition-colors"
      style={{ backgroundColor: checked ? 'var(--fg)' : 'var(--line)' }}
    >
      <span
        className={`absolute top-[3px] h-6 w-6 rounded-full bg-white shadow transition-all ${
          checked ? 'left-[23px]' : 'left-[3px]'
        }`}
      />
    </button>
  )
}

const rowClass =
  'flex items-center justify-between py-3.5 border-b border-[var(--line)] last:border-0'

export default function SettingsModal({
  settings,
  onSetDark,
  onSetReadingLimit,
  onRequestClear,
  onClose,
}) {
  return (
    <Modal title="Ustawienia" onClose={onClose}>
      <section>
        <h3 className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[var(--fg2)] mb-1">
          Wygląd
        </h3>
        <div className={rowClass}>
          <div>
            <p className="text-[14px] font-medium text-[var(--fg)]">
              Tryb ciemny
            </p>
            <p className="text-[12px] text-[var(--fg2)]">
              Wygodniejsza nauka wieczorem, optymalizacja pod ekran OLED
            </p>
          </div>
          <Toggle
            checked={settings.dark}
            onChange={onSetDark}
            label="Tryb ciemny"
          />
        </div>
      </section>

      <section className="mt-5">
        <h3 className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[var(--fg2)] mb-1">
          Lista „W trakcie"
        </h3>
        <div className={rowClass}>
          <div>
            <p className="text-[14px] font-medium text-[var(--fg)]">
              Limit ostrzeżenia
            </p>
            <p className="text-[12px] text-[var(--fg2)]">
              Ostrzeż, gdy zaczynam zbyt wiele naraz
            </p>
          </div>
          <select
            value={settings.readingLimit}
            onChange={(e) => onSetReadingLimit(Number(e.target.value))}
            aria-label="Limit ostrzeżenia"
            className="rounded-full border border-[var(--line)] bg-transparent px-3 py-1.5 text-[14px] text-[var(--fg)] appearance-none cursor-pointer hover:bg-[var(--hover)] transition"
          >
            {[2, 3, 4, 5].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>
      </section>

      <section className="mt-5">
        <h3 className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[var(--fg2)] mb-1">
          Dane
        </h3>
        <div className={rowClass}>
          <div>
            <p className="text-[14px] font-medium text-[var(--fg)]">
              Wyczyść wszystkie dane
            </p>
            <p className="text-[12px] text-[var(--fg2)]">Usuwa wszystkie książki</p>
          </div>
          <button
            type="button"
            onClick={onRequestClear}
            className="rounded-full border px-3.5 py-1.5 text-[14px] font-medium hover:bg-[var(--hover)] transition"
            style={{ color: 'var(--danger)', borderColor: 'var(--line)' }}
          >
            Wyczyść
          </button>
        </div>
      </section>

      <p className="mt-5 text-center text-[12px] text-[var(--fg2)]">
        ReadLab v1.0
      </p>
    </Modal>
  )
}
