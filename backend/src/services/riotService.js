import axios from "axios";

const DDRAGON_VERSION = "14.10.1"; // update as needed
const DDRAGON_BASE = `https://ddragon.leagueoflegends.com/cdn/${DDRAGON_VERSION}`;

export async function fetchChampions() {
  const url = `${DDRAGON_BASE}/data/en_US/champion.json`;
  const res = await axios.get(url);
  return res.data.data;
}

export async function fetchItems() {
  const url = `${DDRAGON_BASE}/data/en_US/item.json`;
  const res = await axios.get(url);
  return res.data.data;
}

export async function fetchRunes() {
  const url = `${DDRAGON_BASE}/data/en_US/runesReforged.json`;
  const res = await axios.get(url);
  return res.data;
}
