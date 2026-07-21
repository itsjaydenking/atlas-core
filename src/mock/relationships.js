export const mockRelationships = [
  {
    id: 'rel-1',
    sourceEntityId: 'char-1',
    targetEntityId: 'org-1',
    relationshipType: 'member_of',
  },
  {
    id: 'rel-2',
    sourceEntityId: 'char-2',
    targetEntityId: 'org-1',
    relationshipType: 'member_of',
  },
  {
    id: 'rel-3',
    sourceEntityId: 'char-3',
    targetEntityId: 'org-2',
    relationshipType: 'member_of',
  },
  {
    id: 'rel-4',
    sourceEntityId: 'char-4',
    targetEntityId: 'char-1',
    relationshipType: 'parent_of',
  },
  {
    id: 'rel-5',
    sourceEntityId: 'char-5',
    targetEntityId: 'char-2',
    relationshipType: 'parent_of',
  },
  {
    id: 'rel-6',
    sourceEntityId: 'org-1',
    targetEntityId: 'loc-2',
    relationshipType: 'located_in',
  },
  {
    id: 'rel-7',
    sourceEntityId: 'org-2',
    targetEntityId: 'loc-3',
    relationshipType: 'located_in',
  },
  {
    id: 'rel-8',
    sourceEntityId: 'org-3',
    targetEntityId: 'loc-4',
    relationshipType: 'located_in',
  },
  {
    id: 'rel-9',
    sourceEntityId: 'org-4',
    targetEntityId: 'loc-5',
    relationshipType: 'located_in',
  },
  {
    id: 'rel-10',
    sourceEntityId: 'loc-1',
    targetEntityId: 'loc-2',
    relationshipType: 'adjacent_to',
  },
  {
    id: 'rel-11',
    sourceEntityId: 'loc-2',
    targetEntityId: 'loc-3',
    relationshipType: 'adjacent_to',
  },
  {
    id: 'rel-12',
    sourceEntityId: 'event-1',
    targetEntityId: 'loc-1',
    relationshipType: 'located_in',
  },
]
