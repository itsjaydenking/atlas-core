export function EntityCard({ entity, isSelected, onSelect }) {
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
