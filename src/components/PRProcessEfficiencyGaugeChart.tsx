import React, { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"; // Import default styles
import { data } from "../data";
import { Tooltip } from "react-tooltip";

const PRProcessEfficiencyGaugeChart: React.FC = () => {
  // State to handle tooltip visibility
  const [tooltipContent, setTooltipContent] = useState("");

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
    strokeLinecap: "round", // Rounded edges for the progress path
  });

  return (
    <div
      className="relative w-80 h-80 mx-auto my-4"
      data-tooltip-id="prEfficiencyTooltip"
    >
      <CircularProgressbar
        value={efficiency}
        text={`${efficiency.toFixed(0)}%`}
        styles={styles}
      />

      <h3 className="text-center mt-4">PR Process Efficiency</h3>

      {/* Tooltip */}
      <Tooltip
        id="prEfficiencyTooltip"
        // effect="solid"
        place="top"
        content={`Open PRs: ${openPRs} \n
        Merged PRs: ${mergedPRs}`}
        // type="info"
        // multiline={true}
      >
        {/* {tooltipContent} */}
      </Tooltip>
    </div>
  );
};

export default PRProcessEfficiencyGaugeChart;
