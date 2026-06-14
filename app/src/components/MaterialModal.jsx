import { useState } from 'react'
import Modal from './Modal'
import { PRIORITIES, STATUSES } from '../lib/constants'

const empty = {
  title: '',
  author: '',
  tag: '',
  priority: '',
  due: '',
  status: 'queue',
}

const fieldClass =
  'w-full rounded-xl border border-[var(--line)] bg-[var(--surface)] px-3.5 py-2.5 text-[14px] text-[var(--fg)] placeholder:text-[var(--fg2)] focus:outline-none focus:border-[var(--fg2)] transition'
const labelClass = 'block text-[12px] font-medium text-[var(--fg2)] mb-1.5'

export default function MaterialModal({ material, onSave, onRequestDelete, onClose }) {
  const isEdit = Boolean(material)
  const [form, setForm] = useState(material ? { ...empty, ...material } : empty)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState(false)

  const set = (key, value) => setForm((f) => ({ ...f, [key]: value }))

  const validate = (data) => {
    const e = {}
    if (!data.title.trim()) e.title = 'Podaj tytuł'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setTouched(true)
    const errs = validate(form)
    setErrors(errs)
    if (Object.keys(errs).length > 0) return
    onSave({ ...form, title: form.title.trim(), author: form.author.trim() })
    onClose()
  }

  const errBorder = { borderColor: 'var(--danger)' }

  return (
    <Modal
      title={isEdit ? 'Edytuj książkę' : 'Dodaj książkę'}
      onClose={onClose}
      footer={
        <>
          {isEdit && (
            <button
              type="button"
              onClick={() => onRequestDelete(material)}
              className="rounded-full px-3 py-2 text-[14px] font-medium hover:bg-[var(--hover)] transition cursor-pointer"
              style={{ color: 'var(--danger)' }}
            >
              Usuń
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="ml-auto rounded-full border border-[var(--line)] px-4 py-2 text-[14px] font-medium text-[var(--fg)] hover:bg-[var(--hover)] transition cursor-pointer"
          >
            Anuluj
          </button>
          <button
            type="submit"
            form="material-form"
            className="rounded-full bg-[var(--fg)] px-5 py-2 text-[14px] font-medium text-[var(--surface)] hover:opacity-85 transition cursor-pointer"
          >
            Zapisz
          </button>
        </>
      }
    >
      <form id="material-form" onSubmit={handleSubmit} className="space-y-4" noValidate>
        <div>
          <label htmlFor="title" className={labelClass}>
            Tytuł
          </label>
          <input
            id="title"
            className={fieldClass}
            style={touched && errors.title ? errBorder : undefined}
            value={form.title}
            onChange={(e) => set('title', e.target.value)}
            placeholder="np. Basic Economics"
            autoFocus
          />
          {touched && errors.title && (
            <p className="mt-1.5 text-[12px]" style={{ color: 'var(--danger)' }}>
              {errors.title}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="author" className={labelClass}>
            Autor
          </label>
          <input
            id="author"
            className={fieldClass}
            value={form.author}
            onChange={(e) => set('author', e.target.value)}
            placeholder="np. Thomas Sowell"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="tag" className={labelClass}>
              Tag
            </label>
            <input
              id="tag"
              className={fieldClass}
              value={form.tag}
              onChange={(e) => set('tag', e.target.value)}
              placeholder="np. ekonomia"
            />
          </div>
          <div>
            <label htmlFor="priority" className={labelClass}>
              Priorytet
            </label>
            <select
              id="priority"
              className={`${fieldClass} appearance-none cursor-pointer`}
              value={form.priority}
              onChange={(e) => set('priority', e.target.value)}
            >
              <option value="">- brak -</option>
              {PRIORITIES.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="due" className={labelClass}>
              Termin
            </label>
            <input
              id="due"
              type="date"
              className={fieldClass}
              value={form.due}
              onChange={(e) => set('due', e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="status" className={labelClass}>
              Status
            </label>
            <select
              id="status"
              className={`${fieldClass} appearance-none cursor-pointer`}
              value={form.status}
              onChange={(e) => set('status', e.target.value)}
            >
              {STATUSES.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </form>
    </Modal>
  )
}
