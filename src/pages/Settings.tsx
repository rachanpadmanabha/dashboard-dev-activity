// src/pages/Settings.tsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaUserCog,
  FaLock,
  FaLanguage,
  FaBell,
  FaInfoCircle,
} from "react-icons/fa";

const Settings: React.FC = () => {
  return (
    <div className="p-8 bg-gradient-to-r from-gray-800 via-gray-900 to-black min-h-screen dark:bg-gray-900">
      {/* Header Section */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-teal-400 dark:text-teal-300">
          Settings
        </h1>
        <p className="mt-4 text-gray-300 dark:text-gray-400">
          Customize your preferences and manage your account settings here.
        </p>
      </header>

      {/* Settings Sections */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* User Settings Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gray-800 shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300 dark:bg-gray-800 dark:text-white"
        >
          <div className="flex items-center justify-center bg-teal-600 p-4 rounded-full mb-4">
            <FaUserCog className="text-white text-3xl" />
          </div>
          <h2 className="text-xl font-semibold text-teal-400 dark:text-teal-300 mb-2">
            User Profile
          </h2>
          <p className="text-gray-300 dark:text-gray-400">
            Update your personal information and manage your account details.
          </p>
          <button className="mt-4 text-teal-400 dark:text-teal-300 hover:underline">
            Manage Profile
          </button>
        </motion.div>

        {/* Security Settings Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gray-800 shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300 dark:bg-gray-800 dark:text-white"
        >
          <div className="flex items-center justify-center bg-yellow-600 p-4 rounded-full mb-4">
            <FaLock className="text-white text-3xl" />
          </div>
          <h2 className="text-xl font-semibold text-yellow-400 dark:text-yellow-300 mb-2">
            Security
          </h2>
          <p className="text-gray-300 dark:text-gray-400">
            Enhance your account security by updating your password and managing
            security settings.
          </p>
          <button className="mt-4 text-yellow-400 dark:text-yellow-300 hover:underline">
            Manage Security
          </button>
        </motion.div>

        {/* Language Settings Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-gray-800 shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300 dark:bg-gray-800 dark:text-white"
        >
          <div className="flex items-center justify-center bg-blue-600 p-4 rounded-full mb-4">
            <FaLanguage className="text-white text-3xl" />
          </div>
          <h2 className="text-xl font-semibold text-blue-400 dark:text-blue-300 mb-2">
            Language
          </h2>
          <p className="text-gray-300 dark:text-gray-400">
            Select your preferred language for the interface and notifications.
          </p>
          <button className="mt-4 text-blue-400 dark:text-blue-300 hover:underline">
            Change Language
          </button>
        </motion.div>

        {/* Notifications Settings Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="bg-gray-800 shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300 dark:bg-gray-800 dark:text-white"
        >
          <div className="flex items-center justify-center bg-red-600 p-4 rounded-full mb-4">
            <FaBell className="text-white text-3xl" />
          </div>
          <h2 className="text-xl font-semibold text-red-400 dark:text-red-300 mb-2">
            Notifications
          </h2>
          <p className="text-gray-300 dark:text-gray-400">
            Manage your notification preferences and stay updated with important
            alerts.
          </p>
          <button className="mt-4 text-red-400 dark:text-red-300 hover:underline">
            Manage Notifications
          </button>
        </motion.div>

        {/* About Settings Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="bg-gray-800 shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300 dark:bg-gray-800 dark:text-white"
        >
          <div className="flex items-center justify-center bg-gray-600 p-4 rounded-full mb-4">
            <FaInfoCircle className="text-white text-3xl" />
          </div>
          <h2 className="text-xl font-semibold text-gray-400 dark:text-gray-300 mb-2">
            About
          </h2>
          <p className="text-gray-300 dark:text-gray-400">
            Learn more about the application, its features, and the development
            team.
          </p>
          <button className="mt-4 text-gray-400 dark:text-gray-300 hover:underline">
            Learn More
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default Settings;
