// src/components/TeamInteractionsNetworkGraph.tsx
import React from "react";
import { ForceGraph3D } from "react-force-graph";
import { data } from "../data";

// Generate dummy links for demonstration
const generateLinks = (nodes: any[]) => {
  const links = [];
  for (let i = 0; i < nodes.length - 1; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      links.push({ source: nodes[i].id, target: nodes[j].id });
    }
  }
  return links;
};

const TeamInteractionsNetworkGraph: React.FC = () => {
  // Generate graph data
  const nodes = data.AuthorWorklog.rows.map((row) => ({
    id: row.name,
    group: row.activeDays.isBurnOut ? 2 : 1, // Example grouping based on burnout status
    color: row.activeDays.isBurnOut ? "#FF6347" : "#4CAF50", // Red for burnout, green otherwise
    size: (row.totalActivity.length + 1) * 0.5, // Smaller node size
    label: row.name, // Node label
  }));

  const links = generateLinks(nodes); // Generate example links

  return (
    <div className="relative w-full h-[450px] overflow-hidden">
      {" "}
      {/* Constrain the height and prevent overflow */}
      <div className="absolute z-10 top-0 right-0 p-2 bg-white border rounded shadow-md">
        <h4 className="font-bold text-sm">Legend</h4>{" "}
        {/* Smaller legend text */}
        <div className="flex items-center mt-1 text-xs">
          <div className="w-3 h-3 bg-green-500 mr-1"></div>
          <span>No Burnout</span>
        </div>
        <div className="flex items-center mt-1 text-xs">
          <div className="w-3 h-3 bg-red-500 mr-1"></div>
          <span>Burnout</span>
        </div>
        <div className="flex items-center mt-1 text-xs">
          <div className="w-3 h-3 bg-gray-300 mr-1"></div>
          <span>Node Size: Activity Count</span>
        </div>
      </div>
      <ForceGraph3D
        graphData={{ nodes, links }}
        nodeAutoColorBy="group"
        nodeLabel="label" // Show node labels
        nodeRelSize={10} // Smaller node size
        linkDirectionalParticles={1} // Fewer particles
        linkDirectionalParticleSpeed={0.03} // Adjusted speed of the particles
        linkWidth={5} // Thinner links
        backgroundColor="#f0f0f0" // Background color of the graph
        nodeId="id" // Specify the key to use as node ID
        nodeColor="color" // Specify the key to use as node color
        nodeVal="size" // Specify the key to use as node size
        width={500} // Constrain the width of the graph
        height={450} // Constrain the height of the graph
      />
    </div>
  );
};

export default TeamInteractionsNetworkGraph;
