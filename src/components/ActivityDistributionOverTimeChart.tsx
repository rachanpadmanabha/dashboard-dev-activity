import React from "react";
import { Bar } from "react-chartjs-2";
import { data } from "../data";

const ActivityDistributionOverTimeChart: React.FC = () => {
  const labels = data.AuthorWorklog.rows.map((row) => row.name);
  const datasets = data.AuthorWorklog.activityMeta.map((activity) => ({
    label: activity.label,
    backgroundColor: activity.fillColor,
    data: data.AuthorWorklog.rows.map((row) => {
      const activityItem = row.totalActivity.find(
        (a) => a.name === activity.label
      );
      return activityItem ? parseInt(activityItem.value) : 0;
    }),
  }));

  const chartData = {
    labels,
    datasets,
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "top" as const,
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default ActivityDistributionOverTimeChart;
