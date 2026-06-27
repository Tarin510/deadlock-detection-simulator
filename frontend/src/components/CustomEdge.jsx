import { memo } from "react";
import { BaseEdge } from "@xyflow/react";

function CustomEdge({
  sourceX,
  sourceY,
  targetX,
  targetY,
  markerEnd,
  data,
}) {
  const isRequest = data?.type === "request";

  const color = isRequest ? "#43b9ff" : "#f8b84e";

  const dx = targetX - sourceX;
  const dy = targetY - sourceY;

  // Horizontal distance
  const distance = Math.abs(dx);

  // Stronger curve for long edges
  const curve = Math.max(160, distance * 0.45);

  let c1x = sourceX + curve;
  let c2x = targetX - curve;

  let c1y = sourceY;
  let c2y = targetY;

  // Edge going downward
  if (dy > 40) {
    c1y = sourceY + 80;
    c2y = targetY - 80;
  }

  // Edge going upward
  else if (dy < -40) {
    c1y = sourceY - 80;
    c2y = targetY + 80;
  }

  // Nearly horizontal
  else {
    c1y = sourceY;
    c2y = targetY;
  }

  const path = `
    M ${sourceX} ${sourceY}
    C
    ${c1x} ${c1y},
    ${c2x} ${c2y},
    ${targetX} ${targetY}
  `;

  return (
    <>
      {/* Glow */}
      <BaseEdge
        path={path}
        style={{
          stroke: color,
          strokeWidth: 10,
          opacity: 0.16,
        }}
      />

      {/* Soft glow */}
      <BaseEdge
        path={path}
        style={{
          stroke: color,
          strokeWidth: 6,
          opacity: 0.28,
        }}
      />

      {/* Main edge */}
      <BaseEdge
        path={path}
        markerEnd={markerEnd}
        style={{
          stroke: color,
          strokeWidth: 2.6,
          strokeLinecap: "round",
          strokeDasharray: isRequest ? "8 6" : undefined,
          filter: `drop-shadow(0 0 8px ${color})
                   drop-shadow(0 0 16px ${color})`,
        }}
      />
    </>
  );
}

export default memo(CustomEdge);