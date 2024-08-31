// src/components/IncidentResponseTimeChart.tsx
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { data } from "../data";

// Register required components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Incident Response Time",
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Team Members",
      },
    },
    y: {
      title: {
        display: true,
        text: "Response Time",
      },
    },
  },
};

const IncidentResponseTimeChart: React.FC = () => {
  const labels = data.AuthorWorklog.rows.map((row) => row.name);
  const chartData = {
    labels,
    datasets: [
      {
        label: "Incident Response Time",
        data: data.AuthorWorklog.rows.map((row) => {
          const incidentResolved = row.totalActivity.find(
            (a) => a.name === "Incidents Resolved"
          );
          return incidentResolved ? parseInt(incidentResolved.value) : 0;
        }),
        backgroundColor: "#8F3519",
        borderColor: "#8F3519",
        fill: false,
      },
    ],
  };

  return <Line data={chartData} options={options} />;
};

export default IncidentResponseTimeChart;
