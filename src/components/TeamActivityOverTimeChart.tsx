// src/components/TeamActivityOverTimeChart.tsx
import React from "react";
import { Line } from "react-chartjs-2";
import { data } from "../data";

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
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Time",
      },
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
  const labels = data.AuthorWorklog.rows.map((row) => row.name);
  const chartData = {
    labels,
    datasets: data.AuthorWorklog.activityMeta.map((activity) => ({
      label: activity.label,
      data: data.AuthorWorklog.rows.map((row) => {
        const activityItem = row.totalActivity.find(
          (a) => a.name === activity.label
        );
        return activityItem ? parseInt(activityItem.value) : 0;
      }),
      backgroundColor: activity.fillColor,
      borderColor: activity.fillColor,
      fill: false,
    })),
  };

  return <Line data={chartData} options={options} />;
};

export default TeamActivityOverTimeChart;
