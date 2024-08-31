import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 rounded-lg">
      <div className="text-6xl font-bold text-gray-600 mb-4">404</div>
      <h1 className="text-3xl font-semibold mb-4">Page Not Found</h1>
      <p className="text-lg mb-6">
        The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
      >
        <FaHome className="mr-2" />
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFound;
