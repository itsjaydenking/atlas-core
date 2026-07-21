import { EntityDetails } from '../components/EntityDetails'
import { EntityList } from '../components/EntityList'
import { PageHeader } from '../components/PageHeader'
import { useEntitySelection } from '../hooks/useEntitySelection'
import { mockEntities } from '../mock'

export function EntitiesPage() {
  const { selectedEntity, selectedEntityId, setSelectedEntityId } =
    useEntitySelection(mockEntities)

  return (
    <section>
      <PageHeader
        title="Entities"
        description="Browse entities and inspect foundational world data."
      />
      <div className="entities-page-grid">
        <EntityList
          entities={mockEntities}
          selectedEntityId={selectedEntityId}
          onSelectEntity={setSelectedEntityId}
        />
        <EntityDetails entity={selectedEntity} />
      </div>
    </section>
  )
}
