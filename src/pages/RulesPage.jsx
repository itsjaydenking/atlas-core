import { EmptyState } from '../components/EmptyState'
import { PageHeader } from '../components/PageHeader'

export function RulesPage() {
  return (
    <section>
      <PageHeader
        title="Rules"
        description="Rule engine authoring and validation will be implemented later."
      />
      <EmptyState
        title="Rules workspace coming soon"
        description="Define constraints and world logic here in future milestones."
      />
    </section>
  )
}
