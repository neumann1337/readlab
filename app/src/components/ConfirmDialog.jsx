import Modal from './Modal'

export default function ConfirmDialog({
  title,
  message,
  confirmLabel = 'Usuń',
  onConfirm,
  onClose,
}) {
  return (
    <Modal
      title={title}
      onClose={onClose}
      size="sm"
      footer={
        <>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-[var(--line)] px-4 py-2 text-[14px] font-medium text-[var(--fg)] hover:bg-[var(--hover)] transition"
          >
            Anuluj
          </button>
          <button
            type="button"
            onClick={() => {
              onConfirm()
              onClose()
            }}
            className="ml-auto rounded-full px-5 py-2 text-[14px] font-medium text-white hover:opacity-90 transition"
            style={{ backgroundColor: 'var(--danger)' }}
          >
            {confirmLabel}
          </button>
        </>
      }
    >
      <p className="text-[14px] leading-relaxed text-[var(--fg2)]">{message}</p>
    </Modal>
  )
}
