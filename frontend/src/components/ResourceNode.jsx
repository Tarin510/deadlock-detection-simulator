import { memo } from "react";
import { Handle, Position } from "@xyflow/react";

function ResourceNode({ data }) {
  return (
    <>
      {/* Incoming edge */}
      <Handle
        type="target"
        position={Position.Left}
        style={{
          width: 10,
          height: 10,
          background: "#4db7ff",
          border: "2px solid white",
        }}
      />

      <div
        style={{
          width: 82,
          height: 56,
          borderRadius: 12,
          position: "relative",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          background:
            "linear-gradient(180deg,#463115 0%,#2b1d0c 100%)",

          border: "2px solid #f7b538",

          boxShadow: `
            0 0 10px rgba(247,181,56,.8),
            0 0 22px rgba(247,181,56,.35),
            inset 0 0 15px rgba(255,255,255,.05)
          `,
        }}
      >
        {/* inner glow */}
        <div
          style={{
            position: "absolute",
            inset: 6,
            borderRadius: 8,
            border: "1px solid rgba(255,255,255,.08)",
          }}
        />

        <div
          style={{
            textAlign: "center",
            zIndex: 2,
          }}
        >
          <div
            style={{
              color: "#ffe08a",
              fontWeight: 700,
              fontSize: 16,
              letterSpacing: 1,
            }}
          >
            {data.label}
          </div>

          <div
            style={{
              marginTop: 2,
              color: "#d9b45c",
              fontSize: 9,
              letterSpacing: 1,
            }}
          >
            RESOURCE
          </div>
        </div>
      </div>

      {/* Outgoing edge */}
      <Handle
        type="source"
        position={Position.Right}
        style={{
          width: 10,
          height: 10,
          background: "#f7b538",
          border: "2px solid white",
        }}
      />
    </>
  );
}

export default memo(ResourceNode);