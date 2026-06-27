import { memo } from "react";
import { Handle, Position } from "@xyflow/react";

function ProcessNode({ data }) {
  return (
    <>
      {/* Incoming edges */}
      <Handle
        type="target"
        position={Position.Left}
        style={{
          width: 10,
          height: 10,
          background: "#ff4d88",
          border: "2px solid white",
        }}
      />

      <div
        style={{
          width: 82,
          height: 82,
          borderRadius: "50%",
          position: "relative",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          background:
            "radial-gradient(circle at 30% 30%, #a91f56 0%, #641430 60%, #2c0b18 100%)",

          border: "2px solid #ff4d88",

          boxShadow: `
            0 0 10px rgba(255,77,136,.9),
            0 0 25px rgba(255,77,136,.5),
            inset 0 0 20px rgba(255,255,255,.08)
          `,
        }}
      >
        {/* Inner glow */}
        <div
          style={{
            position: "absolute",
            width: 58,
            height: 58,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,.08)",
            boxShadow: "0 0 18px rgba(255,77,136,.4)",
          }}
        />

        <div
          style={{
            textAlign: "center",
            zIndex: 10,
          }}
        >
          <div
            style={{
              color: "#ffffff",
              fontSize: 17,
              fontWeight: 700,
              letterSpacing: 1,
            }}
          >
            {data.label}
          </div>

          <div
            style={{
              marginTop: 3,
              color: "#ffb7ce",
              fontSize: 9,
              letterSpacing: 1,
            }}
          >
            PROCESS
          </div>
        </div>

        {/* Decorative ring */}
        <div
          style={{
            position: "absolute",
            width: 96,
            height: 96,
            borderRadius: "50%",
            border: "1px solid rgba(255,77,136,.18)",
          }}
        />
      </div>

      {/* Outgoing edges */}
      <Handle
        type="source"
        position={Position.Right}
        style={{
          width: 10,
          height: 10,
          background: "#4db7ff",
          border: "2px solid white",
        }}
      />
    </>
  );
}

export default memo(ProcessNode);