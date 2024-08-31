import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { data } from "../data";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const ActivityDistributionOverTimeChart: React.FC = () => {
  const labels = data.AuthorWorklog.rows.map((row) => row.name);

  const datasets = data.AuthorWorklog.activityMeta.map((activity) => {
    const activityData = data.AuthorWorklog.rows.map((row) => {
      const activityItem = row.totalActivity.find(
        (a) => a.name === activity.label
      );
      return activityItem ? parseInt(activityItem.value) : 0;
    });

    return {
      label: activity.label,
      backgroundColor: activity.fillColor,
      data: activityData,
    };
  });

  const chartData = {
    labels,
    datasets,
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top" as const,
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
          text: "Authors",
        },
      },
      y: {
        title: {
          display: true,
          text: "Activity Count",
        },
        beginAtZero: true,
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default ActivityDistributionOverTimeChart;
