export default function ModeSelector({ mode, setMode }) {
  return (
    <div className="w-full border-b border-cyan-900/40 px-8 pt-4">
      <div className="flex gap-8">

        <button
          onClick={() => setMode("detection")}
          className={`pb-3 text-sm font-medium transition-all border-b-2 ${
            mode === "detection"
              ? "text-cyan-400 border-cyan-400"
              : "text-gray-400 border-transparent hover:text-cyan-300"
          }`}
        >
          ⛓ Resource Allocation Graph
        </button>

        <button
          onClick={() => setMode("banker")}
          className={`pb-3 text-sm font-medium transition-all border-b-2 ${
            mode === "banker"
              ? "text-cyan-400 border-cyan-400"
              : "text-gray-400 border-transparent hover:text-cyan-300"
          }`}
        >
          💳 Banker's Algorithm
        </button>

        <button
          onClick={() => setMode("theory")}
          className={`pb-3 text-sm font-medium transition-all border-b-2 ${
            mode === "theory"
              ? "text-cyan-400 border-cyan-400"
              : "text-gray-400 border-transparent hover:text-cyan-300"
          }`}
        >
          📖 Theory
        </button>
      </div>
    </div>
  );
}