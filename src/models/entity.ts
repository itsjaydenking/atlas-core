export type EntityType = 'Character' | 'Organization' | 'Location' | 'Event'

export interface Entity {
  id: string
  name: string
  description: string
  entityType: EntityType
}
