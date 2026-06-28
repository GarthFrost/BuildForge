const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:3001/api";

export async function getChampions() {
  const res = await fetch(`${API_BASE}/champions`);
  return res.json();
}

export async function getItems() {
  const res = await fetch(`${API_BASE}/items`);
  return res.json();
}

export async function getRunes() {
  const res = await fetch(`${API_BASE}/runes`);
  return res.json();
}

export async function calculateBuild(payload) {
  const res = await fetch(`${API_BASE}/calculate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  return res.json();
}
