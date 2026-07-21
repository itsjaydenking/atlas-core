export function EmptyState({ title, description }) {
  return (
    <section className="panel empty-state" aria-live="polite">
      <h2>{title}</h2>
      <p>{description}</p>
    </section>
  )
}
