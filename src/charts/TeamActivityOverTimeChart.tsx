// src/components/TeamActivityOverTimeChart.tsx
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { data } from "../data";

// Register required components for ChartJS
ChartJS.register(
  LineElement,
  PointElement,
  Tooltip,
  Legend,
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
      text: "Team Activity Over Time",
    },
    tooltip: {
      callbacks: {
        label: function (tooltipItem: any) {
          return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
        },
      },
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Time",
      },
      type: "category" as const,
      labels: data.AuthorWorklog.rows.map((row) => row.name), // Assuming 'name' represents time or date
    },
    y: {
      title: {
        display: true,
        text: "Activity Count",
      },
    },
  },
};

const TeamActivityOverTimeChart: React.FC = () => {
  const labels = data.AuthorWorklog.activityMeta.map(
    (activity) => activity.label
  );

  const chartData = {
    labels: data.AuthorWorklog.rows.map((row) => row.name), // Adjust as needed for actual time data
    datasets: data.AuthorWorklog.activityMeta.map((activity) => ({
      label: activity.label,
      data: data.AuthorWorklog.rows.map((row) => {
        const activityItem = row.totalActivity.find(
          (a) => a.name === activity.label
        );
        return activityItem ? parseInt(activityItem.value) : 0;
      }),
      borderColor: activity.fillColor,
      backgroundColor: "rgba(0, 0, 0, 0)", // Transparent background for lines
      fill: false,
    })),
  };

  return <Line data={chartData} options={options} />;
};

export default TeamActivityOverTimeChart;
