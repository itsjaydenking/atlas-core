import { ENTITY_TYPES } from '../models/entity'

export function getEntityTypeCount(entities, entityType) {
  return entities.filter((entity) => entity.entityType === entityType).length
}

export function getDashboardEntityStats(entities) {
  return ENTITY_TYPES.reduce(
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
