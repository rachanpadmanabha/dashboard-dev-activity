# Developer Activity Dashboard

This project is a single-page dashboard application built using React and TypeScript. The dashboard provides an interactive interface for visualizing developer activity data over the course of a week, including various activities like committing code, opening and merging pull requests, and attending meetings. The application fetches data dynamically and displays it using a series of charts and components.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Pages Overview](#pages-overview)
- [Charts Overview](#charts-overview)
- [Performance Optimizations](#performance-optimizations)
- [Build Configuration](#build-configuration)
- [Running Tests](#running-tests)
- [Building for Production](#building-for-production)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Interactive Data Visualization**: Visualize developer activities using interactive charts.
- **Dynamic Data Fetching**: Fetch data to simulate real-world usage.
- **Lazy Loading**: Implement lazy loading for charts to reduce initial load time.
- **Tree Shaking**: Remove unused code from the production build for a leaner bundle.
- **Responsive Design**: Optimized for various screen sizes with a responsive layout.
- **Fixed Sidebar Navigation**: The sidebar remains fixed while allowing the main content to scroll.

## Tech Stack

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A strongly typed programming language that builds on JavaScript.
- **Vite**: A modern frontend build tool that provides a faster and leaner development experience.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Chart.js** and **react-chartjs-2**: For creating interactive charts.
- **ESLint**: For identifying and reporting on patterns in JavaScript/TypeScript.
- **PostCSS**: A tool for transforming CSS with JavaScript.
- **Firebase**: For hosting and potentially other backend services.

## Installation

### Prerequisites

- Node.js (version 14 or later)
- npm or Yarn

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/developer-activity-dashboard.git
   cd developer-activity-dashboard
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

The app will run in development mode. Open http://localhost:3000 to view it in the browser.

## Project Structure

```
├── README.md
├── eslint.config.js
├── firebase.json
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
│   └── vite.svg
├── src
│   ├── App.css
│   ├── App.tsx
│   ├── assets
│   │   └── react.svg
│   ├── charts
│   │   ├── ActiveDaysComparisonChart.tsx
│   │   ├── ActivityChart.tsx
│   │   ├── ActivityDistributionOverTimeChart.tsx
│   │   ├── ActivityDistributionPieChart.tsx
│   │   ├── BurnoutRisk.tsx
│   │   ├── CodeReviewDistributionChart.tsx
│   │   ├── CommitPatternsHeatmap.tsx
│   │   ├── DayWiseActivity.tsx
│   │   ├── DeveloperActivityCompositionChart.tsx
│   │   ├── IncidentResponseTimeChart.tsx
│   │   ├── PRProcessEfficiencyGaugeChart.tsx
│   │   ├── TeamActivityOverTimeChart.tsx
│   │   ├── TeamInteractionsNetworkGraph.tsx
│   │   └── TotalActivity.tsx
│   ├── components
│   │   ├── BarChart.tsx
│   │   ├── Header.tsx
│   │   ├── InfoCards.tsx
│   │   ├── LineChart.tsx
│   │   ├── PieChart.tsx
│   │   ├── Sidebar.tsx
│   │   └── TopPerformerCard.tsx
│   ├── data.ts
│   ├── index.css
│   ├── main.tsx
│   ├── output.css
│   ├── pages
│   │   ├── Activity.tsx
│   │   ├── NotFound.tsx
│   │   ├── Overview.tsx
│   │   ├── Settings.tsx
│   │   └── Users.tsx
│   ├── types.ts
│   └── vite-env.d.ts
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── webpack.config.js
```

## Pages Overview

1. **Activity Page**: Main hub for tracking developer activities throughout the week.
2. **Overview Page**: High-level summary of key metrics and activities across the organization.
3. **Settings Page**: Configure dashboard aspects like theme preferences and notification settings.
4. **Users Page**: List of all developers and team members involved in the project.

## Charts Overview

The `charts` directory contains various chart components, including:

1. Activity Distribution Pie Chart
2. Activity Distribution Over Time Chart
3. Developer Activity Composition Chart
4. Code Review Distribution Chart
5. PR Process Efficiency Gauge Chart
6. Commit Patterns Heatmap
7. Incident Response Time Chart
8. Team Interactions Network Graph
9. Active Days Comparison Chart
10. Burnout Risk Chart

## Performance Optimizations

1. Use of Vite for fast builds and hot module replacement
2. Code Splitting (automatic with Vite)
3. Tree Shaking (built into Vite)
4. Minification and Compression (handled by Vite in production builds)
5. Responsive Design with Tailwind CSS

## Build Configuration

This project uses Vite as the build tool. The main configuration files are:

- `vite.config.ts`: Vite configuration
- `tsconfig.json`: TypeScript configuration
- `postcss.config.js`: PostCSS configuration for processing CSS
- `tailwind.config.js`: Tailwind CSS configuration
- `eslint.config.js`: ESLint configuration for code linting

## Running Tests

To run tests (assuming you have set up testing):

```bash
npm run test
# or
yarn test
```

## Building for Production

To build the application for production, run:

```bash
npm run build
# or
yarn build
```

This command creates an optimized build of the app in the `dist` folder.

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any questions or suggestions, feel free to reach out:

- Email: padmarachan@gmail.com
- GitHub: https://github.com/rachanpadmanabha/dashboard-dev-activity
- Project Link: https://dev-activity-4e838.web.app/overview
