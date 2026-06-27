import { useState } from "react";

function App() {
  const [champion, setChampion] = useState(null);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>BuildForge MVP</h1>
      <p>Select a champion to begin.</p>

      <select onChange={(e) => setChampion(e.target.value)}>
        <option value="">-- Choose Champion --</option>
        <option value="Aatrox">Aatrox</option>
        <option value="Ahri">Ahri</option>
        <option value="Akali">Akali</option>
      </select>

      {champion && (
        <div style={{ marginTop: "20px" }}>
          <h2>{champion}</h2>
          <p>Stats, items, runes, and graph will appear here.</p>
        </div>
      )}
    </div>
  );
}

export default App;
