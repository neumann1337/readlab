export default function EmptyState({ onAdd }) {
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
        className="mt-6 inline-flex items-center gap-1 rounded-full bg-[var(--fg)] px-5 py-2.5 text-[14px] font-medium text-[var(--surface)] hover:opacity-85 transition cursor-pointer"
      >
        <span className="text-[16px] leading-none -mt-px">+</span> Dodaj książkę
      </button>
    </div>
  )
}
