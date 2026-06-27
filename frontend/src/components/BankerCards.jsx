export default function BankerCards() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

      {/* Algorithm */}
      <div className="rounded-xl border border-cyan-900/40 bg-[#111827] p-5 shadow-[0_0_18px_rgba(59,130,246,0.2)]">
        <h3 className="text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-3">
          Algorithm
        </h3>

        <p className="text-gray-400 text-sm leading-6">
          Banker's Algorithm predicts whether granting resource requests
          keeps the system in a safe state by checking if a complete
          execution sequence exists.
        </p>
      </div>

      {/* Safe */}
      <div className="rounded-xl border border-green-800/50 bg-green-950/20 p-5 shadow-[0_0_18px_rgba(34,197,94,0.2)]">
        <h3 className="text-green-400 font-semibold text-sm uppercase tracking-wider mb-3">
          Safe State
        </h3>

        <p className="text-gray-400 text-sm leading-6">
          A safe sequence exists. Every process can finish execution and
          release its allocated resources.
        </p>
      </div>

      {/* Unsafe */}
      <div className="rounded-xl border border-red-800/50 bg-red-950/20 p-5 shadow-[0_0_18px_rgba(239,68,68,0.2)]">
        <h3 className="text-red-400 font-semibold text-sm uppercase tracking-wider mb-3">
          Unsafe State
        </h3>

        <p className="text-gray-400 text-sm leading-6">
          No safe sequence exists. Future requests may eventually lead to
          a deadlock.
        </p>
      </div>

    </div>
  );
}