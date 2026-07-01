import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export default function StarGraph({ stats }) {
  // Expect stats = {
  //   dps, maxDamage, burstDamage,
  //   movespeed, attackSpeed,
  //   lifesteal, omnivamp,
  //   armor, mr, durability,
  //   hp, mana
  // }

  const labels = [
    "DPS",
    "Max Damage",
    "Burst Damage",
    "Move Speed",
    "Attack Speed",
    "Lifesteal / Omnivamp",
    "Armor",
    "Magic Resist",
    "Durability",
    "HP",
    "Mana"
  ];

  const values = [
    stats.dps || 0,
    stats.maxDamage || 0,
    stats.burstDamage || 0,
    stats.movespeed || 0,
    stats.attackSpeed || 0,
    stats.lifesteal || stats.omnivamp || 0,
    stats.armor || 0,
    stats.mr || 0,
    stats.durability || 0,
    stats.hp || 0,
    stats.mana || 0
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Build Profile",
        data: values,
        backgroundColor: "rgba(78, 121, 167, 0.3)",
        borderColor: "#4e79a7",
        borderWidth: 2,
        pointBackgroundColor: "#4e79a7",
        pointRadius: 3
      }
    ]
  };

  const options = {
    responsive: true,
    scales: {
      r: {
        beginAtZero: true,
        angleLines: { color: "#ccc" },
        grid: { color: "#ddd" },
        pointLabels: {
          font: { size: 12 }
        }
      }
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx) => `${ctx.label}: ${ctx.parsed.r}`
        }
      }
    }
  };

  return <Radar data={data} options={options} />;
}
