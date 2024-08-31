import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Overview from "./pages/Overview";
import Activity from "./pages/Activity";
import Settings from "./pages/Settings";
import Users from "./pages/Users";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 overflow-y-auto p-6 ml-64">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
