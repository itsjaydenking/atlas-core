export function StatCard({ label, value }) {
  return (
    <article className="stat-card panel">
      <p>{label}</p>
      <strong>{value}</strong>
    </article>
  )
}
