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
import { User, Filter } from "../types";
const initialUserData: User[] = [
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
  const [users, setUsers] = useState<User[]>(initialUserData);
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [editUser, setEditUser] = useState<User | null>(null);
  const [newUser, setNewUser] = useState<Omit<User, "id">>({
    name: "",
    email: "",
    role: "",
    status: "Active",
  });
  const [filter, setFilter] = useState<Filter>({ role: "", status: "" });

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

  const handleOpenEditModal = (user: User) => {
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
    <div className="p-8 rounded-lg bg-gradient-to-r from-green-900 to-blue-800 min-h-screen text-white dark:bg-gray-900">
      {/* Header Section */}
      <header className="mb-12 text-center">
        <motion.h1
          className="text-4xl sm:text-5xl font-extrabold text-yellow-300"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Users Management
        </motion.h1>
        <motion.p
          className="mt-4 text-base sm:text-lg text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Manage and oversee user accounts with ease. View, search, and filter
          user data effectively.
        </motion.p>
      </header>

      {/* Search and Actions Section */}
      <section className="mb-8 flex flex-col sm:flex-row items-center justify-between">
        {/* Search Bar */}
        <div className="relative mb-4 sm:mb-0 w-full sm:w-1/2">
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
        <div className="flex flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full justify-between sm:w-fit sm:justify-normal ">
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
        <div className="bg-gray-800 shadow-lg rounded-lg p-6 overflow-x-scroll">
          <table className="min-w-full divide-y divide-gray-700">
            <thead className="bg-gray-700">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-gray-800 divide-y divide-gray-700">
              {filteredData.map((user) => (
                <tr key={user.id}>
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-300">
                    {user.name}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-400">
                    {user.email}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-400">
                    {user.role}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-400">
                    {user.status}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-400 flex space-x-2">
                    <button
                      className="text-blue-500 hover:text-blue-400"
                      onClick={() => handleOpenEditModal(user)}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="text-red-500 hover:text-red-400"
                      onClick={() => handleDeleteUser(user.id)}
                    >
                      <FaTrash />
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
        className="bg-gray-900 text-white max-w-md mx-auto p-6 rounded-lg"
      >
        <h2 className="text-xl font-bold mb-4">Add New User</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAddUser();
          }}
        >
          <div className="mb-4">
            <label className="block text-gray-300 mb-1" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 bg-gray-800 border border-gray-600 rounded-lg text-gray-300"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 bg-gray-800 border border-gray-600 rounded-lg text-gray-300"
              value={newUser.email}
              onChange={(e) =>
                setNewUser({ ...newUser, email: e.target.value })
              }
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-1" htmlFor="role">
              Role
            </label>
            <select
              id="role"
              className="w-full p-2 bg-gray-800 border border-gray-600 rounded-lg text-gray-300"
              value={newUser.role}
              onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
              required
            >
              <option value="">Select Role</option>
              <option value="Admin">Admin</option>
              <option value="User">User</option>
              <option value="Moderator">Moderator</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-1" htmlFor="status">
              Status
            </label>
            <select
              id="status"
              className="w-full p-2 bg-gray-800 border border-gray-600 rounded-lg text-gray-300"
              value={newUser.status}
              onChange={(e) =>
                setNewUser({ ...newUser, status: e.target.value })
              }
              required
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-gray-600 text-gray-200 px-4 py-2 rounded-lg mr-2"
              onClick={() => setIsAddModalOpen(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg"
            >
              Add User
            </button>
          </div>
        </form>
      </Modal>

      {/* Edit User Modal */}
      {editUser && (
        <Modal
          isOpen={isEditModalOpen}
          onRequestClose={() => setIsEditModalOpen(false)}
          contentLabel="Edit User Modal"
          className="bg-gray-900 text-white max-w-md mx-auto p-6 rounded-lg"
        >
          <h2 className="text-xl font-bold mb-4">Edit User</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleEditUser();
            }}
          >
            <div className="mb-4">
              <label className="block text-gray-300 mb-1" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2 bg-gray-800 border border-gray-600 rounded-lg text-gray-300"
                value={editUser.name}
                onChange={(e) =>
                  setEditUser({ ...editUser, name: e.target.value })
                }
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 bg-gray-800 border border-gray-600 rounded-lg text-gray-300"
                value={editUser.email}
                onChange={(e) =>
                  setEditUser({ ...editUser, email: e.target.value })
                }
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 mb-1" htmlFor="role">
                Role
              </label>
              <select
                id="role"
                className="w-full p-2 bg-gray-800 border border-gray-600 rounded-lg text-gray-300"
                value={editUser.role}
                onChange={(e) =>
                  setEditUser({ ...editUser, role: e.target.value })
                }
                required
              >
                <option value="Admin">Admin</option>
                <option value="User">User</option>
                <option value="Moderator">Moderator</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 mb-1" htmlFor="status">
                Status
              </label>
              <select
                id="status"
                className="w-full p-2 bg-gray-800 border border-gray-600 rounded-lg text-gray-300"
                value={editUser.status}
                onChange={(e) =>
                  setEditUser({ ...editUser, status: e.target.value })
                }
                required
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                className="bg-gray-600 text-gray-200 px-4 py-2 rounded-lg mr-2"
                onClick={() => setIsEditModalOpen(false)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg"
              >
                Save Changes
              </button>
            </div>
          </form>
        </Modal>
      )}

      {/* Filter Modal */}
      <Modal
        isOpen={isFilterModalOpen}
        onRequestClose={() => setIsFilterModalOpen(false)}
        contentLabel="Filter Modal"
        className="bg-gray-900 text-white max-w-md mx-auto p-6 rounded-lg"
      >
        <h2 className="text-xl font-bold mb-4">Filter Users</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleApplyFilter();
          }}
        >
          <div className="mb-4">
            <label className="block text-gray-300 mb-1" htmlFor="role">
              Role
            </label>
            <select
              id="role"
              className="w-full p-2 bg-gray-800 border border-gray-600 rounded-lg text-gray-300"
              value={filter.role}
              onChange={(e) => setFilter({ ...filter, role: e.target.value })}
            >
              <option value="">All Roles</option>
              <option value="Admin">Admin</option>
              <option value="User">User</option>
              <option value="Moderator">Moderator</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-1" htmlFor="status">
              Status
            </label>
            <select
              id="status"
              className="w-full p-2 bg-gray-800 border border-gray-600 rounded-lg text-gray-300"
              value={filter.status}
              onChange={(e) => setFilter({ ...filter, status: e.target.value })}
            >
              <option value="">All Statuses</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-gray-600 text-gray-200 px-4 py-2 rounded-lg mr-2"
              onClick={() => setIsFilterModalOpen(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg"
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
