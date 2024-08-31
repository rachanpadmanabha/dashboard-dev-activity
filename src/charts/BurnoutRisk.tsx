import React from "react";
import { data } from "../data";

const BurnoutRisk: React.FC = () => {
  const riskData = data.AuthorWorklog.rows.map((row) => ({
    name: row.name,
    days: row.activeDays.days,
    isBurnOut: row.activeDays.isBurnOut,
  }));

  return (
    <div className="bg-white p-4 shadow-lg rounded-lg">
      <h3 className="text-xl font-bold">Burnout Risk</h3>
      <ul>
        {riskData.map((member, index) => (
          <li
            key={index}
            className={`p-2 ${
              member.isBurnOut ? "bg-red-200" : "bg-green-200"
            } rounded`}
          >
            {member.name}: {member.days} days{" "}
            {member.isBurnOut ? "- At Risk" : ""}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BurnoutRisk;
