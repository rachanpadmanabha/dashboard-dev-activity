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
  const cardDetails = [
    {
      icon: <FaUserCog className="text-white text-3xl" />,
      bgColor: "bg-teal-600",
      title: "User Profile",
      description:
        "Update your personal information and manage your account details.",
      buttonText: "Manage Profile",
      textColor: "text-teal-400",
      buttonColor: "text-teal-400",
    },
    {
      icon: <FaLock className="text-white text-3xl" />,
      bgColor: "bg-yellow-600",
      title: "Security",
      description:
        "Enhance your account security by updating your password and managing security settings.",
      buttonText: "Manage Security",
      textColor: "text-yellow-400",
      buttonColor: "text-yellow-400",
    },
    {
      icon: <FaLanguage className="text-white text-3xl" />,
      bgColor: "bg-blue-600",
      title: "Language",
      description:
        "Select your preferred language for the interface and notifications.",
      buttonText: "Change Language",
      textColor: "text-blue-400",
      buttonColor: "text-blue-400",
    },
    {
      icon: <FaBell className="text-white text-3xl" />,
      bgColor: "bg-red-600",
      title: "Notifications",
      description:
        "Manage your notification preferences and stay updated with important alerts.",
      buttonText: "Manage Notifications",
      textColor: "text-red-400",
      buttonColor: "text-red-400",
    },
    {
      icon: <FaInfoCircle className="text-white text-3xl" />,
      bgColor: "bg-gray-600",
      title: "About",
      description:
        "Learn more about the application, its features, and the development team.",
      buttonText: "Learn More",
      textColor: "text-gray-400",
      buttonColor: "text-gray-400",
    },
  ];

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
        {cardDetails.map(
          (
            {
              icon,
              bgColor,
              title,
              description,
              buttonText,
              textColor,
              buttonColor,
            },
            index
          ) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`bg-gray-800 shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300 dark:bg-gray-800 dark:text-white`}
            >
              <div
                className={`flex items-center justify-center ${bgColor} p-4 rounded-full mb-4`}
              >
                {icon}
              </div>
              <h2
                className={`text-xl font-semibold ${textColor} dark:${textColor} mb-2`}
              >
                {title}
              </h2>
              <p className="text-gray-300 dark:text-gray-400">{description}</p>
              <button
                className={`mt-4 ${buttonColor} dark:${buttonColor} hover:underline`}
              >
                {buttonText}
              </button>
            </motion.div>
          )
        )}
      </section>
    </div>
  );
};

export default Settings;
