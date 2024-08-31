// src/components/PRProcessEfficiencyGaugeChart.tsx
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { data } from "../data";
import { Tooltip } from "react-tooltip";

const PRProcessEfficiencyGaugeChart: React.FC = () => {
  // Calculate PR efficiency
  const openPRs = data.AuthorWorklog.rows.reduce((sum, row) => {
    const prOpen = row.totalActivity.find((a) => a.name === "PR Open");
    return sum + (prOpen ? parseInt(prOpen.value) : 0);
  }, 0);

  const mergedPRs = data.AuthorWorklog.rows.reduce((sum, row) => {
    const prMerged = row.totalActivity.find((a) => a.name === "PR Merged");
    return sum + (prMerged ? parseInt(prMerged.value) : 0);
  }, 0);

  const totalPRs = openPRs + mergedPRs;
  const efficiency = totalPRs === 0 ? 0 : (mergedPRs / totalPRs) * 100; // Percentage

  const styles = buildStyles({
    pathColor: "#61CDBB",
    textColor: "#333",
    trailColor: "#d6d6d6",
    strokeLinecap: "round",
  });

  return (
    <div className="relative w-80 h-80 mx-auto my-4">
      <CircularProgressbar
        value={efficiency}
        text={`${efficiency.toFixed(0)}%`}
        styles={styles}
        data-tooltip-id="prEfficiencyTooltip"
      />

      <h3 className="text-center mt-4">PR Process Efficiency</h3>

      {/* Tooltip */}
      <Tooltip
        id="prEfficiencyTooltip"
        place="top"
        content={`Open PRs: ${openPRs}\nMerged PRs: ${mergedPRs}`}
      />
    </div>
  );
};

export default PRProcessEfficiencyGaugeChart;
