// InfoCards.tsx
import React from "react";

interface Activity {
  name: string;
  value: string;
}

interface ActiveDays {
  days: number;
  isBurnOut: boolean;
  insight: string[];
}

interface InfoCardsProps {
  totalActivity: Activity[];
  activeDays: ActiveDays;
}

const InfoCards: React.FC<InfoCardsProps> = ({ totalActivity, activeDays }) => {
  return (
    <div className="flex space-x-4 p-4">
      {/* Card 1: Total Activity */}
      <div className="bg-white p-4 rounded-lg shadow-md flex-1">
        <h3 className="text-lg font-semibold mb-2">Total Activity</h3>
        <ul>
          {totalActivity.map((activity, index) => (
            <li key={index} className="text-gray-700">
              {activity.name}: {activity.value}
            </li>
          ))}
        </ul>
      </div>

      {/* Card 2: Active Days */}
      <div className="bg-white p-4 rounded-lg shadow-md flex-1">
        <h3 className="text-lg font-semibold mb-2">Active Days</h3>
        <p className="text-gray-700">Total Active Days: {activeDays.days}</p>
        <p className={`text-${activeDays.isBurnOut ? "red" : "green"}-600`}>
          {activeDays.isBurnOut ? "Burnout Risk Detected" : "No Burnout Risk"}
        </p>
      </div>
    </div>
  );
};

export default InfoCards;
