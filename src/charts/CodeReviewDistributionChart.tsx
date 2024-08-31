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

// Register required components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const CodeReviewDistributionChart: React.FC = () => {
  const labels = data.AuthorWorklog.rows.map((row) => row.name);

  const chartData = {
    labels,
    datasets: [
      {
        label: "PR Reviewed",
        data: data.AuthorWorklog.rows.map((row) => {
          const prReviewed = row.totalActivity.find(
            (a) => a.name === "PR Reviewed"
          );
          return prReviewed ? parseInt(prReviewed.value) : 0;
        }),
        backgroundColor: "#C2528B",
        borderColor: "#A23B7B",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: "y" as const,
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Number of PRs Reviewed",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Author",
        },
      },
    },
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
  };

  return <Bar data={chartData} options={options} />;
};

export default CodeReviewDistributionChart;
