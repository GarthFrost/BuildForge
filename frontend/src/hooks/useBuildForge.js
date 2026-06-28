import { useEffect, useState } from "react";
import { getChampions, getItems, getRunes, calculateBuild } from "../api/client";

export function useBuildForge() {
  const [champions, setChampions] = useState([]);
  const [items, setItems] = useState([]);
  const [runes, setRunes] = useState([]);

  const [selectedChampion, setSelectedChampion] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedRunes, setSelectedRunes] = useState([]);
  const [level, setLevel] = useState(1);

  const [stats, setStats] = useState(null);

  // Load data on mount
  useEffect(() => {
    getChampions().then(setChampions);
    getItems().then(setItems);
    getRunes().then(setRunes);
  }, []);

  // Recalculate stats whenever inputs change
  useEffect(() => {
    if (!selectedChampion) return;

    calculateBuild({
      champion: selectedChampion,
      items: selectedItems,
      runes: selectedRunes,
      level
    }).then(setStats);
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
