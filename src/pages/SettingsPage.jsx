import { EmptyState } from '../components/EmptyState'
import { PageHeader } from '../components/PageHeader'

export function SettingsPage() {
  return (
    <section>
      <PageHeader
        title="Settings"
        description="Application settings and preferences will be available in future updates."
      />
      <EmptyState
        title="Settings coming soon"
        description="Global and project configuration options will appear in this section."
      />
    </section>
  )
}
