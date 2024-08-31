// src/pages/Users.tsx
import React, { useState } from "react";
import {
  FaSearch,
  FaUserPlus,
  FaFilter,
  FaEdit,
  FaTrash,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Modal from "react-modal";

// Sample user data
const initialUserData = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: "User",
    status: "Inactive",
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    role: "User",
    status: "Active",
  },
  {
    id: 4,
    name: "Bob Brown",
    email: "bob.brown@example.com",
    role: "Moderator",
    status: "Active",
  },
];

const Users: React.FC = () => {
  const [users, setUsers] = useState(initialUserData);
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [editUser, setEditUser] = useState<any>(null);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    role: "",
    status: "Active",
  });
  const [filter, setFilter] = useState({ role: "", status: "" });

  // Filter data based on search term
  const filteredData = users
    .filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(
      (user) =>
        (filter.role === "" || user.role === filter.role) &&
        (filter.status === "" || user.status === filter.status)
    );

  // Handlers
  const handleAddUser = () => {
    setUsers([...users, { ...newUser, id: users.length + 1 }]);
    setNewUser({ name: "", email: "", role: "", status: "Active" });
    setIsAddModalOpen(false);
  };

  const handleEditUser = () => {
    if (editUser) {
      setUsers(
        users.map((user) => (user.id === editUser.id ? editUser : user))
      );
      setEditUser(null);
      setIsEditModalOpen(false);
    }
  };

  const handleDeleteUser = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleOpenEditModal = (user: any) => {
    setEditUser(user);
    setIsEditModalOpen(true);
  };

  const handleOpenFilterModal = () => {
    setIsFilterModalOpen(true);
  };

  const handleApplyFilter = () => {
    setIsFilterModalOpen(false);
  };

  return (
    <div className="p-8 bg-gradient-to-r from-green-900 to-blue-800 min-h-screen text-white dark:bg-gray-900">
      {/* Header Section */}
      <header className="mb-12 text-center">
        <motion.h1
          className="text-5xl font-extrabold text-yellow-300"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Users Management
        </motion.h1>
        <motion.p
          className="mt-4 text-lg text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Manage and oversee user accounts with ease. View, search, and filter
          user data effectively.
        </motion.p>
      </header>

      {/* Search and Actions Section */}
      <section className="mb-8 flex flex-col md:flex-row items-center justify-between">
        {/* Search Bar */}
        <div className="relative mb-4 md:mb-0 w-full md:w-1/2">
          <input
            type="text"
            placeholder="Search users..."
            className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="absolute top-3 right-3 text-gray-400" />
        </div>

        {/* Actions */}
        <div className="flex space-x-4">
          <motion.button
            className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-full shadow-lg hover:bg-yellow-600 transition-colors duration-300 flex items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            onClick={() => setIsAddModalOpen(true)}
          >
            <FaUserPlus className="mr-2" />
            Add User
          </motion.button>
          <motion.button
            className="bg-gray-800 text-gray-300 px-6 py-3 rounded-full shadow-lg hover:bg-gray-700 transition-colors duration-300 flex items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            onClick={handleOpenFilterModal}
          >
            <FaFilter className="mr-2" />
            Filter
          </motion.button>
        </div>
      </section>

      {/* User Table Section */}
      <section>
        <div className="bg-gray-800 shadow-lg rounded-lg p-6">
          <table className="min-w-full divide-y divide-gray-700">
            <thead className="bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-gray-800 divide-y divide-gray-700">
              {filteredData.map((user) => (
                <tr key={user.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-300">
                    {user.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                    {user.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                    {user.role}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        user.status === "Active"
                          ? "bg-green-500 text-green-900"
                          : "bg-red-500 text-red-900"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400 flex items-center space-x-3">
                    <button
                      className="text-yellow-400 hover:text-yellow-300"
                      onClick={() => handleOpenEditModal(user)}
                    >
                      <FaEdit className="text-xl" />
                    </button>
                    <button
                      className="text-red-400 hover:text-red-300"
                      onClick={() => handleDeleteUser(user.id)}
                    >
                      <FaTrash className="text-xl" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Add User Modal */}
      <Modal
        isOpen={isAddModalOpen}
        onRequestClose={() => setIsAddModalOpen(false)}
        contentLabel="Add User Modal"
        className="bg-gray-800 p-6 mx-auto my-20 max-w-md rounded-lg"
        overlayClassName="fixed inset-0 bg-gray-900 bg-opacity-75"
      >
        <h2 className="text-2xl font-bold text-yellow-300 mb-4">Add User</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAddUser();
          }}
        >
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Name
            <input
              type="text"
              className="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              required
            />
          </label>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Email
            <input
              type="email"
              className="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              value={newUser.email}
              onChange={(e) =>
                setNewUser({ ...newUser, email: e.target.value })
              }
              required
            />
          </label>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Role
            <input
              type="text"
              className="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              value={newUser.role}
              onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
              required
            />
          </label>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Status
            <select
              className="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              value={newUser.status}
              onChange={(e) =>
                setNewUser({ ...newUser, status: e.target.value })
              }
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </label>
          <div className="flex justify-end space-x-4 mt-4">
            <button
              type="button"
              className="bg-gray-600 px-4 py-2 rounded-lg hover:bg-gray-500"
              onClick={() => setIsAddModalOpen(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-yellow-500 px-4 py-2 rounded-lg text-gray-900 hover:bg-yellow-600"
            >
              Add User
            </button>
          </div>
        </form>
      </Modal>

      {/* Edit User Modal */}
      <Modal
        isOpen={isEditModalOpen}
        onRequestClose={() => setIsEditModalOpen(false)}
        contentLabel="Edit User Modal"
        className="bg-gray-800 p-6 mx-auto my-20 max-w-md rounded-lg"
        overlayClassName="fixed inset-0 bg-gray-900 bg-opacity-75"
      >
        <h2 className="text-2xl font-bold text-yellow-300 mb-4">Edit User</h2>
        {editUser && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleEditUser();
            }}
          >
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Name
              <input
                type="text"
                className="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                value={editUser.name}
                onChange={(e) =>
                  setEditUser({ ...editUser, name: e.target.value })
                }
                required
              />
            </label>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email
              <input
                type="email"
                className="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                value={editUser.email}
                onChange={(e) =>
                  setEditUser({ ...editUser, email: e.target.value })
                }
                required
              />
            </label>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Role
              <input
                type="text"
                className="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                value={editUser.role}
                onChange={(e) =>
                  setEditUser({ ...editUser, role: e.target.value })
                }
                required
              />
            </label>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Status
              <select
                className="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                value={editUser.status}
                onChange={(e) =>
                  setEditUser({ ...editUser, status: e.target.value })
                }
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </label>
            <div className="flex justify-end space-x-4 mt-4">
              <button
                type="button"
                className="bg-gray-600 px-4 py-2 rounded-lg hover:bg-gray-500"
                onClick={() => setIsEditModalOpen(false)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-yellow-500 px-4 py-2 rounded-lg text-gray-900 hover:bg-yellow-600"
              >
                Save Changes
              </button>
            </div>
          </form>
        )}
      </Modal>

      {/* Filter Modal */}
      <Modal
        isOpen={isFilterModalOpen}
        onRequestClose={() => setIsFilterModalOpen(false)}
        contentLabel="Filter Modal"
        className="bg-gray-800 p-6 mx-auto my-20 max-w-md rounded-lg"
        overlayClassName="fixed inset-0 bg-gray-900 bg-opacity-75"
      >
        <h2 className="text-2xl font-bold text-yellow-300 mb-4">
          Filter Users
        </h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleApplyFilter();
          }}
        >
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Role
            <input
              type="text"
              className="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              value={filter.role}
              onChange={(e) => setFilter({ ...filter, role: e.target.value })}
            />
          </label>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Status
            <select
              className="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              value={filter.status}
              onChange={(e) => setFilter({ ...filter, status: e.target.value })}
            >
              <option value="">All</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </label>
          <div className="flex justify-end space-x-4 mt-4">
            <button
              type="button"
              className="bg-gray-600 px-4 py-2 rounded-lg hover:bg-gray-500"
              onClick={() => setIsFilterModalOpen(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-yellow-500 px-4 py-2 rounded-lg text-gray-900 hover:bg-yellow-600"
            >
              Apply Filter
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Users;
