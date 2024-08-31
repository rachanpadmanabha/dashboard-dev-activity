// src/pages/ActivityPage.tsx
import React, { Suspense, lazy } from "react";

// Lazy load chart components
const ActivityDistributionPieChart = lazy(
  () => import("../charts/ActivityDistributionPieChart")
);
const TopPerformerCard = lazy(() => import("../components/TopPerformerCard"));
const CodeReviewDistributionChart = lazy(
  () => import("../charts/CodeReviewDistributionChart")
);
const ActivityDistributionOverTimeChart = lazy(
  () => import("../charts/ActivityDistributionOverTimeChart")
);
const BurnoutRisk = lazy(() => import("../charts/BurnoutRisk"));
const PRProcessEfficiencyGauge = lazy(
  () => import("../charts/PRProcessEfficiencyGaugeChart")
);
const CommitPatternsHeatmap = lazy(
  () => import("../charts/CommitPatternsHeatmap")
);
const IncidentResponseTimeLineChart = lazy(
  () => import("../charts/IncidentResponseTimeChart")
);
const DeveloperActivityStackedBarChart = lazy(
  () => import("../charts/DeveloperActivityCompositionChart")
);
const TeamActivityOverTimeLineChart = lazy(
  () => import("../charts/TeamActivityOverTimeChart")
);

import { data } from "../data";

const InfoCard: React.FC<{ title: string; value: number; icon: string }> = ({
  title,
  value,
  icon,
}) => (
  <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-between transform transition-transform hover:scale-105">
    <div>
      <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
    </div>
    <div className="text-4xl" aria-label={title}>
      {icon}
    </div>
  </div>
);

const ActivityPage: React.FC = () => {
  const { AuthorWorklog } = data;

  // Info card data
  const infoCards = [
    {
      title: "Total Commits",
      value: AuthorWorklog.rows.reduce(
        (total, row) =>
          total +
          (Number(row.totalActivity.find((a) => a.name === "Commits")?.value) ||
            0),
        0
      ),
      icon: "📊",
    },
    {
      title: "Total PR Opened",
      value: AuthorWorklog.rows.reduce(
        (total, row) =>
          total +
          (Number(row.totalActivity.find((a) => a.name === "PR Open")?.value) ||
            0),
        0
      ),
      icon: "🔓",
    },
    {
      title: "Total Incidents Resolved",
      value: AuthorWorklog.rows.reduce(
        (total, row) =>
          total +
          (Number(
            row.totalActivity.find((a) => a.name === "Incidents Resolved")
              ?.value
          ) || 0),
        0
      ),
      icon: "✅",
    },
    {
      title: "Total PR Merged",
      value: AuthorWorklog.rows.reduce(
        (total, row) =>
          total +
          (Number(
            row.totalActivity.find((a) => a.name === "PR Merged")?.value
          ) || 0),
        0
      ),
      icon: "🔀",
    },
  ];

  return (
    <div className="p-6 rounded-lg bg-gradient-to-r from-blue-100 to-purple-100 min-h-screen">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Developer Activity Dashboard
        </h1>
        <p className="text-lg text-gray-600">
          Explore detailed insights into your team's activities, performance,
          and productivity across various metrics.
        </p>
      </header>

      {/* Info Cards */}
      <section className="mb-8">
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Suspense fallback={<div>Loading...</div>}>
              {infoCards.map((card, index) => (
                <InfoCard key={index} {...card} />
              ))}
            </Suspense>
          </div>
          <TopPerformerCard />
        </div>
      </section>

      {/* Commit Patterns Heatmap */}
      <section className="bg-white p-6 rounded-lg shadow-lg mb-8 transform transition-transform hover:scale-105">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Commit Patterns
        </h2>
        <p className="text-gray-700 mb-6">
          The calendar heatmap below illustrates the distribution of commits
          over time. It highlights periods of high productivity and identifies
          trends in code commits, helping to assess the rhythm of development
          work.
        </p>
        <Suspense fallback={<div>Loading...</div>}>
          <CommitPatternsHeatmap />
        </Suspense>
      </section>

      {/* Charts */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Pie Chart for Activity Distribution */}
        <div className="bg-white p-6 rounded-lg col-span-1 shadow-lg transform transition-transform hover:scale-105">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Activity Distribution
          </h2>
          <Suspense fallback={<div>Loading...</div>}>
            <ActivityDistributionPieChart />
          </Suspense>
        </div>

        {/* Code Review Distribution (Horizontal Bar Chart) */}
        <div className="bg-white p-6 rounded-lg shadow-lg col-span-1 lg:col-span-2 transform transition-transform hover:scale-105">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Code Review Distribution
          </h2>
          <p className="text-gray-700 mb-6">
            The horizontal bar chart below shows the distribution of code
            reviews across the team, indicating who is contributing to code
            quality and collaboration.
          </p>
          <Suspense fallback={<div>Loading...</div>}>
            <CodeReviewDistributionChart />
          </Suspense>
        </div>

        {/* Incident Response Time (Line Chart) */}
        <div className="bg-white p-6 rounded-lg shadow-lg col-span-1 lg:col-span-2 transform transition-transform hover:scale-105">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Incident Response Time
          </h2>
          <p className="text-gray-700 mb-6">
            This line chart tracks the time taken to respond to incidents over a
            period. It helps in identifying any delays and measuring the
            efficiency of incident management.
          </p>
          <Suspense fallback={<div>Loading...</div>}>
            <IncidentResponseTimeLineChart />
          </Suspense>
        </div>

        {/* PR Process Efficiency (Gauge Chart) */}
        <div className="bg-white p-6 rounded-lg col-span-1 shadow-lg transform transition-transform hover:scale-105">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            PR Process Efficiency
          </h2>
          <p className="text-gray-700 mb-6">
            The gauge chart below measures the efficiency of the pull request
            process, providing insights into how quickly PRs are reviewed and
            merged.
          </p>
          <Suspense fallback={<div>Loading...</div>}>
            <PRProcessEfficiencyGauge />
          </Suspense>
        </div>

        {/* Developer Activity Composition (Stacked Bar Chart) */}
        <div className="bg-white p-6 rounded-lg shadow-lg col-span-1 lg:col-span-3 transform transition-transform hover:scale-105">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Developer Activity Composition
          </h2>
          <p className="text-gray-700 mb-6">
            This stacked bar chart visualizes the composition of various
            activities by developers. It provides an overview of who is
            contributing to different aspects of the project.
          </p>
          <Suspense fallback={<div>Loading...</div>}>
            <DeveloperActivityStackedBarChart />
          </Suspense>
        </div>

        {/* Team Activity Over Time (Line Chart) */}
        <div className="bg-white p-6 rounded-lg shadow-lg col-span-1 lg:col-span-3 transform transition-transform hover:scale-105">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Team Activity Over Time
          </h2>
          <p className="text-gray-700 mb-6">
            The line chart below tracks team activity over time, showing peaks
            and troughs in productivity and helping identify patterns in team
            behavior.
          </p>
          <Suspense fallback={<div>Loading...</div>}>
            <TeamActivityOverTimeLineChart />
          </Suspense>
        </div>
      </section>
    </div>
  );
};

export default ActivityPage;
