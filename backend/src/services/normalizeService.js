export function normalizeChampions(raw) {
  return Object.values(raw).map(champ => ({
    id: champ.id,
    name: champ.name,
    title: champ.title,
    tags: champ.tags,
    stats: champ.stats
  }));
}

export function normalizeItems(raw) {
  return Object.entries(raw).map(([id, item]) => ({
    id,
    name: item.name,
    description: item.description,
    stats: item.stats || {},
    tags: item.tags || []
  }));
}

export function normalizeRunes(raw) {
  return raw.map(tree => ({
    id: tree.id,
    key: tree.key,
    name: tree.name,
    slots: tree.slots
  }));
}
