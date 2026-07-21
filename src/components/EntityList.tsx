import type { Entity } from '../models/entity'

import { EntityCard } from './EntityCard'

interface EntityListProps {
  entities: Entity[]
  selectedEntityId: string | null
  onSelectEntity: (entityId: string) => void
}

export function EntityList({
  entities,
  selectedEntityId,
  onSelectEntity,
}: EntityListProps) {
  return (
    <section className="panel entities-list" aria-label="Entity list">
      <h2>Entity List</h2>
      <ul>
        {entities.map((entity) => (
          <EntityCard
            key={entity.id}
            entity={entity}
            isSelected={entity.id === selectedEntityId}
            onSelect={onSelectEntity}
          />
        ))}
      </ul>
    </section>
  )
}
