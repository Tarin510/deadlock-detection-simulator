import { useMemo } from "react";

import {
  ReactFlow,
  Background,
  Controls,
  MarkerType,
  Position,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

import ProcessNode from "./ProcessNode";
import ResourceNode from "./ResourceNode";
import CustomEdge from "./CustomEdge";

const nodeTypes = {
  process: ProcessNode,
  resource: ResourceNode,
};

const edgeTypes = {
  custom: CustomEdge,
};

export default function Graph({
  processes = [],
  resources = [],
  allocations = [],
  requests = [],
  result,
}) {
  const { nodes, edges } = useMemo(() => {
    const generatedNodes = [];
    const generatedEdges = [];

    // ==========================================
    // PROCESS NODES (LEFT SIDE)
    // ==========================================

    const processX = 120;
    const processSpacing = 150;
    const processStartY = 80;

    processes.forEach((process, index) => {
      generatedNodes.push({
        id: process,
        type: "process",

        position: {
          x: processX,
          y: processStartY + index * processSpacing,
        },

        draggable: false,

        sourcePosition: Position.Right,
        targetPosition: Position.Right,

        data: {
          label: process,
        },
      });
    });

    // ==========================================
    // RESOURCE NODES (RIGHT SIDE)
    // ==========================================

    const resourceX = 760;
    const resourceSpacing = 170;
    const resourceStartY = 100;

    resources.forEach((resource, index) => {
      generatedNodes.push({
        id: resource,
        type: "resource",

        position: {
          x: resourceX,
          y: resourceStartY + index * resourceSpacing,
        },

        draggable: false,

        sourcePosition: Position.Left,
        targetPosition: Position.Left,

        data: {
          label: resource,
        },
      });
    });
// ==========================================
// ALLOCATION EDGES (Resource → Process)
// ==========================================

allocations.forEach((allocation) => {
  generatedEdges.push({
    id: `alloc-${allocation.resource}-${allocation.process}`,

    source: allocation.resource,
    target: allocation.process,

    type: "straight",

    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#f8b84e",
      width: 20,
      height: 20,
    },

    style: {
      stroke: "#f8b84e",
      strokeWidth: 2.5,
    },
  });
});
// ==========================================
// REQUEST EDGES (Process → Resource)
// ==========================================

requests.forEach((request) => {
  generatedEdges.push({
    id: `req-${request.process}-${request.resource}`,

    source: request.process,
    target: request.resource,

    type: "straight",

    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#49b8ff",
      width: 22,
      height: 22,
    },

    style: {
      stroke: "#49b8ff",
      strokeWidth: 2.5,
      strokeDasharray: "8 6",
    },
  });
});

    return {
      nodes: generatedNodes,
      edges: generatedEdges,
    };
  }, [processes, resources, allocations, requests]);
    return (
    <div
      className="
      flex-1
      sidebar
      border
      border-[#222]
      rounded-xl
      bg-[#0b1017]
      overflow-hidden
      "
    >
      <div
        className="
        p-5
        text-xl
        font-bold
        tracking-wide
        text-cyan-300
        drop-shadow-[0_0_10px_rgba(34,211,238,.8)]
        "
      >
        🔗 Resource Allocation Graph

        <div
          className="
          mt-2
          h-[2px]
          w-40
          bg-gradient-to-r
          from-cyan-400
          to-transparent
          "
        />
      </div>

       <div className="relative h-[620px]">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          fitView
          fitViewOptions={{
            padding: 0.25,
          }}
          minZoom={0.5}
          maxZoom={1.6}
          defaultViewport={{
            x: 0,
            y: 0,
            zoom: 1,
          }}
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={true}
          panOnDrag={true}
          zoomOnScroll={true}
          zoomOnPinch={true}
          panOnScroll={false}
          zoomOnDoubleClick={false}
          
        >
          <Background
            color="#27303b"
            gap={22}
            size={1}
          />

          <Controls
            position="bottom-right"
            showInteractive={false}
          />
        </ReactFlow>
        {result?.hasDeadlock && (
  <div
    className="
      absolute
      bottom-4
      left-4
      flex
      items-center
      gap-2
      px-4
      py-2
      rounded-lg
      bg-red-900/25
      border
      border-red-500
      shadow-[0_0_18px_rgba(239,68,68,.45)]
      animate-pulse
      font-semibold
      text-red-300
      text-sm
    "
  >
    ⚠ {result.processes.length} CYCLE
  </div>
)}
      </div>
    </div>
  );
}