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
      const urls = [
        "https://buildforge-backend-au0a.onrender.com/api/champions",
        "https://buildforge-backend-au0a.onrender.com/api/items",
        "https://buildforge-backend-au0a.onrender.com/api/runes"
      ];

      try {
        const [champRes, itemRes, runeRes] = await Promise.all(
          urls.map(u => fetch(u))
        );

        console.log("champRes status", champRes.status, "content-type", champRes.headers.get("content-type"));
        console.log("itemRes status", itemRes.status, "content-type", itemRes.headers.get("content-type"));
        console.log("runeRes status", runeRes.status, "content-type", runeRes.headers.get("content-type"));

        console.log("champRes text (first 500):", (await champRes.clone().text()).slice(0, 500));
        console.log("itemRes text (first 500):", (await itemRes.clone().text()).slice(0, 500));
        console.log("runeRes text (first 500):", (await runeRes.clone().text()).slice(0, 500));

        if (!champRes.ok || !itemRes.ok || !runeRes.ok) {
          throw new Error("One or more data endpoints returned non-OK status");
        }

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
          "https://buildforge-backend-au0a.onrender.com/api/calculate",
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

        console.log("calc status", res.status, "content-type", res.headers.get("content-type"));
        const text = await res.clone().text();
        console.log("calc text (first 500):", text.slice(0, 500));

        if (!res.ok) {
          throw new Error(`Calculate endpoint returned ${res.status}`);
        }

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
