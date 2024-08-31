// src/index.tsx or src/App.tsx
import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // Adjust the path if your CSS file is named differently

import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title,
  Filler,
  LineElement,
} from "chart.js";
import App from "./App";

// Register Chart.js components
ChartJS.register(
  LineElement,
  ArcElement, // For pie and doughnut charts
  BarElement, // For bar charts
  PointElement, // For line charts
  CategoryScale, // For category axis (used in bar charts)
  LinearScale, // For linear axis (used in line charts)
  Tooltip, // For tooltips
  Legend, // For legend
  Title, // For chart title
  Filler // For filling under the line in line charts
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
