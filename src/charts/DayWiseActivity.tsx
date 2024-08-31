import React from "react";
import { DayWiseActivity } from "../types";
import ActivityChart from "./ActivityChart";

interface DayWiseActivityProps {
  dayWiseActivity: DayWiseActivity[];
}

const DayWiseActivitty: React.FC<DayWiseActivityProps> = ({
  dayWiseActivity,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Day-wise Activity</h2>
      <ActivityChart dayWiseActivity={dayWiseActivity} />
    </div>
  );
};

export default DayWiseActivitty;
