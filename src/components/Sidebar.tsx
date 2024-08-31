import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaTachometerAlt,
  FaChartLine,
  FaListAlt,
  FaCog,
  FaUsers,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white flex flex-col shadow-lg transition-transform duration-300 ease-in-out">
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
        <i className="fa fa-user" aria-hidden="true"></i>
        <div className="text-gray-300">
          <p className="font-semibold text-lg">John Doe</p>
          <p className="text-sm">john.doe@example.com</p>
        </div>
      </div>
    </div>
  );
};

interface SidebarLinkProps {
  to: string;
  icon: React.ReactNode;
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
