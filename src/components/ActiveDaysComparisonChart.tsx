import React from "react";
import { Bar } from "react-chartjs-2";
import { data } from "../data";

const ActiveDaysComparisonChart: React.FC = () => {
  const chartData = {
    labels: data.AuthorWorklog.rows.map((row) => row.name),
    datasets: [
      {
        label: "Active Days",
        data: data.AuthorWorklog.rows.map((row) => row.activeDays.days),
        backgroundColor: "#36A2EB",
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem: any) {
            return `Active Days: ${tooltipItem.raw}`;
          },
        },
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default ActiveDaysComparisonChart;
