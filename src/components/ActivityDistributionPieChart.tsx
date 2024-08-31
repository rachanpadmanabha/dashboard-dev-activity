import React from "react";
import { Pie } from "react-chartjs-2";
import { data } from "../data";

const ActivityDistributionPieChart: React.FC = () => {
  const activityData = data.AuthorWorklog.activityMeta.map((activity) => ({
    label: activity.label,
    backgroundColor: activity.fillColor,
    data: data.AuthorWorklog.rows.reduce((total, row) => {
      const activityEntry = row.totalActivity.find(
        (a) => a.name === activity.label
      );
      return total + (activityEntry ? parseInt(activityEntry.value) : 0);
    }, 0),
  }));

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
    plugins: {
      legend: {
        display: true,
        position: "top" as const,
      },
    },
  };

  return <Pie data={chartData} options={options} />;
};

export default ActivityDistributionPieChart;
