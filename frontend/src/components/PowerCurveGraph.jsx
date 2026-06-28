import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function PowerCurveGraph({ stats }) {
  if (!stats) return <p>No data yet.</p>;

  const levels = Array.from({ length: 18 }, (_, i) => i + 1);

  const data = {
    labels: levels,
    datasets: [
      {
        label: "Attack Damage",
        data: levels.map(l => stats.ad + stats.bonusAD * (l / stats.level)),
        borderColor: "#ff4d4d",
        tension: 0.3
      },
      {
        label: "Ability Power",
        data: levels.map(l => stats.bonusAP * (l / stats.level)),
        borderColor: "#4d79ff",
        tension: 0.3
      }
    ]
  };

  return (
    <div style={{ width: "600px", marginTop: "20px" }}>
      <Line data={data} />
    </div>
  );
}
