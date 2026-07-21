import { useMemo, useState } from 'react'

import type { Entity } from '../models/entity'

export function useEntitySelection(entities: Entity[]) {
  const [selectedEntityId, setSelectedEntityId] = useState<string | null>(
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
