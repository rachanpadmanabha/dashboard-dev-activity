import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaTachometerAlt,
  FaChartLine,
  FaListAlt,
  FaCog,
  FaUsers,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Sidebar: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Burger Menu Icon */}
      {!isOpen && (
        <div className="fixed top-0 left-0 z-50 block lg:hidden p-4 text-gray-900">
          <button
            className="text-white bg-gray-800 p-2 rounded"
            onClick={toggleMenu}
          >
            {<FaBars />}
          </button>
        </div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white flex flex-col shadow-lg transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:relative lg:w-80 lg:translate-x-0 lg:flex`}
      >
        {/* Header */}
        <div className="p-4 text-2xl font-bold flex items-center space-x-2 border-b border-gray-700 bg-gray-800">
          <FaTachometerAlt className="text-yellow-400" />
          <span>Dashboard</span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-2 mt-4">
          <SidebarLink
            to="/overview"
            icon={<FaChartLine />}
            label="Overview"
            isActive={location.pathname === "/overview"}
          />
          <SidebarLink
            to="/activity"
            icon={<FaListAlt />}
            label="Activity"
            isActive={location.pathname === "/activity"}
          />
          <SidebarLink
            to="/settings"
            icon={<FaCog />}
            label="Settings"
            isActive={location.pathname === "/settings"}
          />
          <SidebarLink
            to="/users"
            icon={<FaUsers />}
            label="Users"
            isActive={location.pathname === "/users"}
          />
        </nav>

        {/* User Profile Section */}
        <div className="p-4 border-t border-gray-700 bg-gray-800 flex items-center space-x-4 mt-auto">
          <i className="fa fa-user text-2xl" aria-hidden="true" />
          <div className="text-gray-300">
            <p className="font-semibold text-lg">John Doe</p>
            <p className="text-sm">john.doe@example.com</p>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white flex flex-col shadow-lg transition-transform duration-300 ease-in-out z-40 lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="p-4 text-2xl font-bold flex items-center space-x-2 border-b border-gray-700 bg-gray-800">
          <FaTachometerAlt className="text-yellow-400" />
          <span>Dashboard</span>
          {isOpen && (
            <div className="lg:hidden p-4 text-gray-900">
              <button
                className="text-white bg-gray-800 p-2 rounded"
                onClick={toggleMenu}
              >
                {<FaTimes />}
              </button>
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-2 mt-4">
          <SidebarLink
            to="/overview"
            icon={<FaChartLine />}
            label="Overview"
            isActive={location.pathname === "/overview"}
          />
          <SidebarLink
            to="/activity"
            icon={<FaListAlt />}
            label="Activity"
            isActive={location.pathname === "/activity"}
          />
          <SidebarLink
            to="/settings"
            icon={<FaCog />}
            label="Settings"
            isActive={location.pathname === "/settings"}
          />
          <SidebarLink
            to="/users"
            icon={<FaUsers />}
            label="Users"
            isActive={location.pathname === "/users"}
          />
        </nav>
      </div>
    </div>
  );
};

interface SidebarLinkProps {
  to: string;
  icon: React.ReactElement;
  label: string;
  isActive: boolean;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({
  to,
  icon,
  label,
  isActive,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, backgroundColor: "#4b5563" }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      <Link
        to={to}
        className={`flex items-center py-3 px-4 rounded-md transition-colors ${
          isActive
            ? "bg-gray-700 text-yellow-300"
            : "text-gray-300 hover:bg-gray-700"
        }`}
      >
        <span className="mr-4 text-2xl">{icon}</span>
        <span className="text-lg font-medium">{label}</span>
      </Link>
    </motion.div>
  );
};

export default Sidebar;
