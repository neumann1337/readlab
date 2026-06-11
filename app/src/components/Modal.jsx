import { useEffect } from 'react'

export default function Modal({ title, onClose, children, footer, size = 'md' }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  const maxW = size === 'sm' ? 'max-w-sm' : 'max-w-md'

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/30 backdrop-blur-sm p-0 sm:p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`w-full ${maxW} rounded-t-[24px] sm:rounded-[24px] bg-[var(--surface)] border border-[var(--line)] shadow-[0_24px_64px_rgba(0,0,0,0.24)] max-h-[92vh] overflow-y-auto`}
      >
        <div className="flex items-center justify-between px-6 pt-5 pb-4">
          <h2 className="text-[18px] font-semibold tracking-[-0.01em] text-[var(--fg)]">
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Zamknij"
            className="grid h-8 w-8 place-items-center rounded-full text-[var(--fg2)] hover:bg-[var(--hover)] hover:text-[var(--fg)] transition text-[15px] cursor-pointer"
          >
            ✕
          </button>
        </div>

        <div className="px-6 pb-2">{children}</div>

        {footer && (
          <div className="flex items-center gap-2 px-6 py-5 mt-2">{footer}</div>
        )}
      </div>
    </div>
  )
}
