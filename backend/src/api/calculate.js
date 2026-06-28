export function calculateStats(champion, items, runes, level) {
  return {
    champion,
    level,
    items,
    runes,
    totalAttackDamage: 69 + level * 3, // placeholder
    totalAbilityPower: 0, // placeholder
    notes: "Real stat engine will replace this."
  };
}
