import type { Entity } from '../models/entity'

interface EntityCardProps {
  entity: Entity
  isSelected: boolean
  onSelect: (entityId: string) => void
}

export function EntityCard({ entity, isSelected, onSelect }: EntityCardProps) {
  return (
    <li>
      <button
        type="button"
        className={`entity-card ${isSelected ? 'is-selected' : ''}`}
        onClick={() => onSelect(entity.id)}
      >
        <span>{entity.name}</span>
        <small>{entity.entityType}</small>
      </button>
    </li>
  )
}
