export default function GraphStatus({ result }) {
  if (!result) return null;

  if (!result.hasDeadlock) return null;

  return (
    <div
      className="
      absolute
      top-4
      right-4
      w-64
      rounded-lg
      border
      border-red-500/40
      bg-[#1b1116]
      p-3
      z-50
      "
    >
      <p className="text-red-400 text-sm font-bold">
        ⚠ {result.processes.length} deadlock cycle
      </p>

      <div
        className="
        mt-3
        rounded-md
        border
        border-red-700/40
        bg-red-900/10
        p-2
        text-xs
        text-red-300
        "
      >
        Cycle :

        {result.cycle.join(" → ")}
      </div>
    </div>
  );
}