import { EmptyState } from '../components/EmptyState'
import { PageHeader } from '../components/PageHeader'

export function RelationshipsPage() {
  return (
    <section>
      <PageHeader
        title="Relationships"
        description="Relationship graph management will be introduced in a future milestone."
      />
      <EmptyState
        title="Relationship tools coming soon"
        description="This view is reserved for browsing and editing relationship records."
      />
    </section>
  )
}
