// src/components/DeveloperActivityCompositionChart.tsx
import React from "react";
import { Bar } from "react-chartjs-2";
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
      text: "Developer Activity Composition",
    },
  },
  scales: {
    x: {
      stacked: true,
      title: {
        display: true,
        text: "Team Members",
      },
    },
    y: {
      stacked: true,
      title: {
        display: true,
        text: "Activity Count",
      },
    },
  },
};

const DeveloperActivityCompositionChart: React.FC = () => {
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

  return (
    <Bar
      data={chartData}
      options={options}
      //   options={{
      //     scales: { xAxes: [{ stacked: true }], yAxes: [{ stacked: true }] },
      //   }}
    />
  );
};

export default DeveloperActivityCompositionChart;
