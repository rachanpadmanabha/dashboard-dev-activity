// src/components/TopPerformerCard.tsx
import React, { useEffect, useState } from "react";
import { data } from "../data";
import { FaMedal, FaCrown } from "react-icons/fa";

const TopPerformerCard: React.FC = () => {
  const topPerformer = data.AuthorWorklog.rows.reduce(
    (top, member) => {
      const total = member.totalActivity.reduce(
        (sum, activity) => sum + parseInt(activity.value),
        0
      );
      return total > top.total ? { name: member.name, total } : top;
    },
    { name: "", total: 0 }
  );

  // State to control the animation on initial load
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    // Trigger animation after a slight delay
    const timer = setTimeout(() => setAnimated(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`${
        animated ? "animate-bounce" : ""
      } w-fit  bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 p-6 shadow-xl rounded-xl transform transition-all duration-500 hover:scale-110 hover:rotate-2`}
    >
      <div className="flex items-center space-x-4">
        <FaCrown
          className={`${
            animated ? "animate-pulse" : ""
          } text-yellow-300 text-6xl`}
        />
        <div>
          <h3 className="text-3xl font-bold text-white">Top Performer</h3>
          <p className="text-xl text-gray-100">{topPerformer.name}</p>
          <p className="text-md text-gray-200">
            Total Activities: {topPerformer.total}
          </p>
        </div>
        <FaMedal
          className={`${
            animated ? "animate-spin-slow" : ""
          } text-yellow-300 text-4xl ml-auto`}
        />
      </div>
    </div>
  );
};

export default TopPerformerCard;
