export default function BankerControls({
  addProcess,
  runAlgorithm,
}) {
  return (
    <div className="flex justify-between mt-6">
      <button
        onClick={runAlgorithm}
        className="px-6 py-2 rounded-lg bg-cyan-600 text-white"
      >
        ▶ Run Banker's Algorithm
      </button>
    </div>
  );
}