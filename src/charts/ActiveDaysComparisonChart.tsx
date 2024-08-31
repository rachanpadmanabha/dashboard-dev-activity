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

const ActiveDaysComparisonChart: React.FC = () => {
  const chartData = {
    labels: data.AuthorWorklog.rows.map((row) => row.name),
    datasets: [
      {
        label: "Active Days",
        data: data.AuthorWorklog.rows.map((row) => row.activeDays.days),
        backgroundColor: "#36A2EB",
        borderColor: "#2A6EBB",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem: any) {
            return `Active Days: ${tooltipItem.raw}`;
          },
        },
      },
      legend: {
        position: "top" as const,
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
          text: "Active Days",
        },
        beginAtZero: true,
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default ActiveDaysComparisonChart;
