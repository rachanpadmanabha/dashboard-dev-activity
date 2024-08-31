import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";
import { data } from "../data";

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const ActivityDistributionPieChart: React.FC = () => {
  // Aggregate data for each activity
  const activityData = data.AuthorWorklog.activityMeta.map((activity) => {
    const total = data.AuthorWorklog.rows.reduce((total, row) => {
      const activityEntry = row.totalActivity.find(
        (a) => a.name === activity.label
      );
      return total + (activityEntry ? parseInt(activityEntry.value) : 0);
    }, 0);

    return {
      label: activity.label,
      backgroundColor: activity.fillColor,
      data: total,
    };
  });

  const chartData = {
    labels: activityData.map((a) => a.label),
    datasets: [
      {
        data: activityData.map((a) => a.data),
        backgroundColor: activityData.map((a) => a.backgroundColor),
      },
    ],
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
            const dataset = tooltipItem.dataset;
            const value = dataset.data[tooltipItem.dataIndex];
            return ` ${value}`;
          },
        },
      },
    },
  };

  return <Pie data={chartData} options={options} />;
};

export default ActivityDistributionPieChart;
