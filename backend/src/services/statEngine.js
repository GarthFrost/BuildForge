export function calculateStats(champion, items, runes, level) {
  const base = champion.stats;

  const result = {
    hp: base.hp + base.hpperlevel * (level - 1),
    ad: base.attackdamage + base.attackdamageperlevel * (level - 1),
    armor: base.armor + base.armorperlevel * (level - 1),
    mr: base.spellblock + base.spellblockperlevel * (level - 1),
    movespeed: base.movespeed,
    bonusAD: 0,
    bonusAP: 0
  };

  // Apply item stats
  for (const item of items) {
    if (item.stats.FlatHPPoolMod) result.hp += item.stats.FlatHPPoolMod;
    if (item.stats.FlatPhysicalDamageMod) result.bonusAD += item.stats.FlatPhysicalDamageMod;
    if (item.stats.FlatMagicDamageMod) result.bonusAP += item.stats.FlatMagicDamageMod;
  }

  // Apply rune stats (placeholder)
  result.bonusAD += runes.length * 2;

  return result;
}
