// src/components/CommitPatternsHeatmap.tsx
import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import { data } from "../data";

// Adjust the type to match the expected input type
type HeatmapValue = {
  date: string;
  count?: number;
};

const CommitPatternsHeatmap: React.FC = () => {
  // Format heatmap data correctly
  const heatmapData: HeatmapValue[] = data.AuthorWorklog.rows.flatMap((row) =>
    row.dayWiseActivity.map((day) => ({
      date: new Date(day.date).toISOString().split("T")[0], // Format date as ISO string
      count: day.items.children.reduce(
        (sum, activity) => sum + parseInt(activity.count),
        0
      ),
    }))
  );

  // Map count to Tailwind classes
  const classForValue = (value: HeatmapValue | undefined) => {
    if (!value || !value.count) return "bg-gray-100"; // Default empty state class

    if (value.count > 10) return "bg-green-500"; // High activity
    if (value.count > 5) return "bg-green-200"; // Medium activity
    return "bg-gray-200"; // Low activity
  };

  return (
    <div className="heatmap-container">
      <CalendarHeatmap
        startDate={new Date("2024-01-01")}
        endDate={new Date("2024-12-31")}
        values={heatmapData}
        classForValue={(value) => {
          if (!value) {
            return "color-empty";
          }
          return `color-github-${value.count}`;
        }}
        tooltipDataAttrs={(value: { date: any; count: any }) => {
          if (!value) return {};
          return {
            "data-tip": `${value.date} has count: ${value.count || 0}`,
          };
        }}
        showMonthLabels
      />
    </div>
  );
};

export default CommitPatternsHeatmap;
