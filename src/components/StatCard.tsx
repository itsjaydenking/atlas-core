interface StatCardProps {
  label: string
  value: number
}

export function StatCard({ label, value }: StatCardProps) {
  return (
    <article className="stat-card panel">
      <p>{label}</p>
      <strong>{value}</strong>
    </article>
  )
}
