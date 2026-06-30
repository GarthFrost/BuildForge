export function calculateStats(champion, items = [], runes = [], level = 1) {
  if (!champion || !champion.stats) {
    throw new Error("Invalid champion object: missing champion or champion.stats");
  }

  const base = champion.stats;

  // Ensure numeric level
  level = Number(level) || 1;
  if (level < 1) level = 1;

  // Helper to safely read numeric stat fields
  const n = (v, fallback = 0) => (typeof v === "number" ? v : Number(v) || fallback);

  const result = {
    hp: n(base.hp) + n(base.hpperlevel) * (level - 1),
    ad: n(base.attackdamage) + n(base.attackdamageperlevel) * (level - 1),
    armor: n(base.armor) + n(base.armorperlevel) * (level - 1),
    mr: n(base.spellblock) + n(base.spellblockperlevel) * (level - 1),
    movespeed: n(base.movespeed),
    bonusAD: 0,
    bonusAP: 0
  };

  // Apply item stats safely
  if (Array.isArray(items)) {
    for (const item of items) {
      const s = item && item.stats ? item.stats : {};
      if (s.FlatHPPoolMod) result.hp += n(s.FlatHPPoolMod);
      if (s.FlatPhysicalDamageMod) result.bonusAD += n(s.FlatPhysicalDamageMod);
      if (s.FlatMagicDamageMod) result.bonusAP += n(s.FlatMagicDamageMod);
    }
  }

  // Apply rune stats (placeholder)
  result.bonusAD += (Array.isArray(runes) ? runes.length : 0) * 2;

  return result;
}
