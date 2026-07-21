import { EntityCard } from './EntityCard'

export function EntityList({ entities, selectedEntityId, onSelectEntity }) {
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
