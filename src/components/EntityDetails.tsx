import type { Entity } from '../models/entity'

import { EmptyState } from './EmptyState'

interface EntityDetailsProps {
  entity: Entity | null
}

export function EntityDetails({ entity }: EntityDetailsProps) {
  if (!entity) {
    return (
      <EmptyState
        title="No entity selected"
        description="Select an entity from the list to view details."
      />
    )
  }

  return (
    <section className="panel entity-details" aria-label="Entity details">
      <h2>Entity Details</h2>
      <dl>
        <dt>Name</dt>
        <dd>{entity.name}</dd>

        <dt>Type</dt>
        <dd>{entity.entityType}</dd>

        <dt>Description</dt>
        <dd>{entity.description}</dd>
      </dl>
    </section>
  )
}
