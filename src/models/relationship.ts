export type RelationshipType =
  'parent_of' | 'located_in' | 'member_of' | 'adjacent_to'

export interface Relationship {
  id: string
  sourceEntityId: string
  targetEntityId: string
  relationshipType: RelationshipType
}
