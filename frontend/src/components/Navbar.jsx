import { FaLock } from "react-icons/fa";
export default function Navbar() {
  return (
    <div
      className="
      h-16
      border-b
      border-[#16324d]
      flex
      items-center
      justify-between
      px-10
      bg-[#070b10]
      shadow-[0_2px_12px_rgba(0,180,255,0.05)]
      "
    >
      {/* Left Section */}
      <div className="flex items-center gap-4">
 <div
  className="
  w-10
  h-10
  rounded-lg
  flex
  items-center
  justify-center
  bg-cyan-500/10
  border
  border-cyan-500/30
  "
>
  <FaLock className="text-cyan-400 text-lg" />
</div>

        <div>
          <h1
            className="
            text-xl
            font-bold
            uppercase
            tracking-wider
            text-white
            drop-shadow-[0_0_8px_rgba(34,211,238,1)]
            "
          >
            DEADLOCK DETECTOR
          </h1>

          <p
            className="
            text-[10px]
            text-cyan-400
            tracking-[0.25em]
            uppercase
            "
          >
            Resource Allocation Graph Analyzer
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3">
        <div
          className="
          px-3
          py-1.5
          rounded-md
          border
          border-orange-500/30
          bg-orange-500/10
          text-orange-300
          text-xs
          font-semibold
          flex
          items-center
          gap-2
          "
        >
          <span className="w-2 h-2 rounded-full bg-orange-400"></span>
          Simulator
        </div>
      </div>
    </div>
  );
}