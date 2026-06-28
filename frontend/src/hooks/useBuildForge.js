import { useEffect, useState } from "react";

export function useBuildForge() {
  const [champions, setChampions] = useState([]);
  const [items, setItems] = useState([]);
  const [runes, setRunes] = useState([]);

  const [selectedChampion, setSelectedChampion] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedRunes, setSelectedRunes] = useState([]);

  const [level, setLevel] = useState(1);
  const [stats, setStats] = useState([]);

  // -----------------------------------------
  // ⭐ FETCH CHAMPIONS, ITEMS, RUNES
  // -----------------------------------------
  useEffect(() => {
    async function loadAllData() {
      try {
        const [champRes, itemRes, runeRes] = await Promise.all([
          fetch("https://buildforge-backend-au0a.onrender.com/api/champions"),
          fetch("https://buildforge-backend-au0a.onrender.com/api/items"),
          fetch("https://buildforge-backend-au0a.onrender.com/api/runes")
        ]);

        setChampions(await champRes.json());
        setItems(await itemRes.json());
        setRunes(await runeRes.json());
      } catch (err) {
        console.error("Failed to load BuildForge data:", err);
      }
    }

    loadAllData();
  }, []);

  // -----------------------------------------
  // ⭐ FETCH POWER CURVE WHEN SELECTION CHANGES
  // -----------------------------------------
  useEffect(() => {
    async function loadStats() {
      if (!selectedChampion) return;

      try {
        const res = await fetch(
          "https://buildforge-backend-au0a.onrender.com/api/calc",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              champion: selectedChampion,
              level,
              items: selectedItems,
              runes: selectedRunes
            })
          }
        );

        const data = await res.json();
        setStats(data);
      } catch (err) {
        console.error("Failed to calculate stats:", err);
      }
    }

    loadStats();
  }, [selectedChampion, selectedItems, selectedRunes, level]);

  return {
    champions,
    items,
    runes,
    selectedChampion,
    setSelectedChampion,
    selectedItems,
    setSelectedItems,
    selectedRunes,
    setSelectedRunes,
    level,
    setLevel,
    stats
  };
}
