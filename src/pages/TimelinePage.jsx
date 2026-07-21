import { EmptyState } from '../components/EmptyState'
import { PageHeader } from '../components/PageHeader'

export function TimelinePage() {
  return (
    <section>
      <PageHeader
        title="Timeline"
        description="Timeline management and filtering will be added in future releases."
      />
      <EmptyState
        title="Timeline view coming soon"
        description="Use this area to plan chronological event workflows in upcoming versions."
      />
    </section>
  )
}
