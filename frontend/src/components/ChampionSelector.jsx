export default function ChampionSelector({ onSelect }) {
  return (
    <select onChange={(e) => onSelect(e.target.value)}>
      <option value="">-- Choose Champion --</option>
      <option value="Aatrox">Aatrox</option>
      <option value="Ahri">Ahri</option>
      <option value="Akali">Akali</option>
    </select>
  );
}
