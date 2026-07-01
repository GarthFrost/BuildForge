import PowerCurveGraph from "./components/PowerCurveGraph";
import { useBuildForge } from "./hooks/useBuildForge";
import RuneCarousel from "./components/RuneCarousel";


export default function App() {
  const {
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
  } = useBuildForge();

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>BuildForge</h1>

      {/* Champion Selector */}
      <h2>Champion</h2>
      <select onChange={(e) => setSelectedChampion(JSON.parse(e.target.value))}>
        <option value="">-- Choose Champion --</option>
        {champions.map((c) => (
          <option key={c.id} value={JSON.stringify(c)}>
            {c.name}
          </option>
        ))}
      </select>

      {/* Level Slider */}
      <h2>Level: {level}</h2>
      <input
        type="range"
        min="1"
        max="18"
        value={level}
        onChange={(e) => setLevel(Number(e.target.value))}
      />

      {/* Items */}
      <h2>Items</h2>
      <select
        multiple
        size="6"
        onChange={(e) =>
          setSelectedItems(
            [...e.target.selectedOptions].map((o) => JSON.parse(o.value))
          )
        }
      >
        {items.map((i) => (
          <option key={i.id} value={JSON.stringify(i)}>
            {i.name}
          </option>
        ))}
      </select>

      {/* Runes */}
      <h2>Runes</h2>
      <select
        multiple
        size="6"
        onChange={(e) =>
          setSelectedRunes(
            [...e.target.selectedOptions].map((o) => JSON.parse(o.value))
          )
        }
      >
        {runes.map((r) => (
          <option key={r.id} value={JSON.stringify(r)}>
            {r.name}
          </option>
        ))}
      </select>

      {/* Graph */}
      <h2>Power Curve</h2>
      <PowerCurveGraph stats={stats} />
    </div>
  );
}
