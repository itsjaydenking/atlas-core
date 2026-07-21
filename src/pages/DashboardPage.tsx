import { PageHeader } from '../components/PageHeader'
import { StatCard } from '../components/StatCard'
import { mockEntities, mockRelationships } from '../mock'
import { getDashboardEntityStats } from '../utils/dashboardStats'

const entityLabels = [
  { key: 'Character', label: 'Characters' },
  { key: 'Organization', label: 'Organizations' },
  { key: 'Location', label: 'Locations' },
  { key: 'Event', label: 'Events' },
] as const

export function DashboardPage() {
  const stats = getDashboardEntityStats(mockEntities)

  return (
    <section>
      <PageHeader
        title="Dashboard"
        description="Welcome to Atlas. Build and navigate a connected world model."
      />
      <div className="dashboard-grid">
        {entityLabels.map((stat) => (
          <StatCard key={stat.key} label={stat.label} value={stats[stat.key]} />
        ))}
        <StatCard label="Relationships" value={mockRelationships.length} />
      </div>
    </section>
  )
}
