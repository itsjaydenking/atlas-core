import type { EntityType } from '../models/entity'
import type { Entity } from '../models/entity'

const entityTypes: EntityType[] = [
  'Character',
  'Organization',
  'Location',
  'Event',
]

export function getEntityTypeCount(
  entities: Entity[],
  entityType: EntityType,
): number {
  return entities.filter((entity) => entity.entityType === entityType).length
}

export function getDashboardEntityStats(
  entities: Entity[],
): Record<EntityType, number> {
  return entityTypes.reduce<Record<EntityType, number>>(
    (accumulator, entityType) => ({
      ...accumulator,
      [entityType]: getEntityTypeCount(entities, entityType),
    }),
    {
      Character: 0,
      Organization: 0,
      Location: 0,
      Event: 0,
    },
  )
}
