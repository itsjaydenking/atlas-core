import { useMemo, useState } from 'react'

export function useEntitySelection(entities) {
  const [selectedEntityId, setSelectedEntityId] = useState(
    entities[0]?.id ?? null,
  )

  const selectedEntity = useMemo(
    () => entities.find((entity) => entity.id === selectedEntityId) ?? null,
    [entities, selectedEntityId],
  )

  return {
    selectedEntity,
    selectedEntityId,
    setSelectedEntityId,
  }
}
