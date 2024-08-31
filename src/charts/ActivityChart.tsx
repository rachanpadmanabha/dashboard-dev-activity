import React from "react";
import { DayWiseActivity } from "../types";

interface ActivityChartProps {
  dayWiseActivity: DayWiseActivity[];
}

const ActivityChart: React.FC<ActivityChartProps> = ({ dayWiseActivity }) => {
  return (
    <div className="flex flex-col space-y-4">
      {dayWiseActivity.map((day, index) => (
        <div key={index}>
          <div className="font-semibold">{day.date}</div>
          <div className="flex space-x-2">
            {day.items.children.map((item, i) => (
              <div
                key={i}
                style={{ backgroundColor: item.fillColor }}
                className="flex-1 p-2 text-center text-white"
              >
                {item.label}: {item.count}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActivityChart;
