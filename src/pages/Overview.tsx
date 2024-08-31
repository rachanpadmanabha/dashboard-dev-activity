// src/pages/Overview.tsx
import React from "react";
import { FaChartLine, FaUsers, FaCog, FaRocket } from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

// Sample data for the chart
const data = [
  { name: "Monday", users: 120 },
  { name: "Tuesday", users: 210 },
  { name: "Wednesday", users: 150 },
  { name: "Thursday", users: 280 },
  { name: "Friday", users: 300 },
  { name: "Saturday", users: 200 },
  { name: "Sunday", users: 180 },
];

// Custom Tooltip Component
const CustomTooltip = ({ payload, label, active }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-800 border border-gray-600 rounded-lg p-4">
        <p className="text-yellow-300 font-semibold">{label}</p>
        <p className="text-gray-300">{`Users: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const Overview: React.FC = () => {
  return (
    <div className="p-8 bg-gradient-to-r from-blue-900 to-purple-700 min-h-screen text-white dark:bg-gray-900">
      {/* Header Section */}
      <header className="mb-12 text-center">
        <motion.h1
          className="text-5xl font-extrabold text-yellow-300"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Dashboard Overview
        </motion.h1>
        <motion.p
          className="mt-4 text-lg text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Welcome to your dashboard! Explore the features and functionalities
          that empower you to manage your data effectively.
        </motion.p>
      </header>

      {/* Chart Section */}
      <section className="mb-12">
        <motion.h2
          className="text-3xl font-semibold text-yellow-300 mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          User Activity Over the Week
        </motion.h2>
        <div className="bg-gray-800 shadow-lg rounded-lg p-4">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke="#fbbf24" />
              <YAxis />
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey="users"
                stroke="#fbbf24"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Feature Card */}
        <motion.div
          className="bg-gray-800 shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center justify-center bg-yellow-800 p-4 rounded-full mb-4">
            <FaChartLine className="text-yellow-300 text-4xl" />
          </div>
          <h3 className="text-xl font-semibold text-yellow-300 mb-2">
            Analytics
          </h3>
          <p className="text-gray-400">
            Gain insights into your data with comprehensive analytics tools.
            Track key metrics and make informed decisions.
          </p>
        </motion.div>

        <motion.div
          className="bg-gray-800 shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center justify-center bg-green-800 p-4 rounded-full mb-4">
            <FaUsers className="text-green-300 text-4xl" />
          </div>
          <h3 className="text-xl font-semibold text-green-300 mb-2">
            User Management
          </h3>
          <p className="text-gray-400">
            Manage user roles and permissions seamlessly. Ensure the right
            people have access to the right resources.
          </p>
        </motion.div>

        <motion.div
          className="bg-gray-800 shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center justify-center bg-yellow-600 p-4 rounded-full mb-4">
            <FaCog className="text-yellow-300 text-4xl" />
          </div>
          <h3 className="text-xl font-semibold text-yellow-300 mb-2">
            Settings
          </h3>
          <p className="text-gray-400">
            Customize your dashboard to fit your needs. Adjust settings,
            preferences, and configurations with ease.
          </p>
        </motion.div>

        <motion.div
          className="bg-gray-800 shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex items-center justify-center bg-red-800 p-4 rounded-full mb-4">
            <FaRocket className="text-red-300 text-4xl" />
          </div>
          <h3 className="text-xl font-semibold text-red-300 mb-2">
            Performance
          </h3>
          <p className="text-gray-400">
            Monitor system performance and ensure optimal operation. Identify
            and resolve issues promptly.
          </p>
        </motion.div>
      </section>

      {/* Call to Action Section */}
      <section className="mt-16 text-center">
        <motion.h2
          className="text-4xl font-extrabold text-yellow-300 mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get Started Now!
        </motion.h2>
        <motion.p
          className="text-lg text-gray-200 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Unlock the full potential of your data management with our intuitive
          dashboard. Explore the features and start optimizing your workflow
          today.
        </motion.p>
        <button className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-full shadow-lg hover:bg-yellow-600 transition-colors duration-300">
          Learn More
        </button>
      </section>

      {/* Testimonials Section */}
      <section className="mt-20">
        <motion.h2
          className="text-4xl font-extrabold text-center text-yellow-300 mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What Our Users Say
        </motion.h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {/* Testimonial Card */}
          <motion.div
            className="bg-gray-800 shadow-md rounded-lg p-6 max-w-sm"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-300 mb-4">
              "This dashboard has completely transformed the way we manage our
              data. The intuitive design and powerful features make it a
              must-have tool for tracking and analyzing our team's performance.
              Highly recommended!"
            </p>
            <p className="font-semibold text-yellow-300">Jordan Smith</p>
            <p className="text-gray-400">Product Manager at Innovate Ltd.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Overview;
