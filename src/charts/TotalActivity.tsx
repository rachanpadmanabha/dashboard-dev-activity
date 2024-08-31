import React from "react";
import { TotalActivityItem } from "../types";

interface TotalActivityProps {
  totalActivity: TotalActivityItem[];
}

const TotalActivity: React.FC<TotalActivityProps> = ({ totalActivity }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Total Activity Summary</h2>
      <div className="grid grid-cols-3 gap-4">
        {totalActivity.map((item, index) => (
          <div
            key={index}
            className="p-4 bg-gray-100 rounded-lg text-center shadow-sm"
          >
            <div className="text-lg font-semibold">{item.name}</div>
            <div className="text-2xl font-bold">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TotalActivity;
