export default function DetectionResult({ result = null }) {
  return (
    <div
      className="
      flex-1
      p-4
      sidebar
      border
      border-gray-800
      rounded-xl
      bg-[#0b1017]
      "
    >
      <h3
        className="
        text-xl
        font-bold
        text-cyan-300
        tracking-wide
        drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]
        "
      >
        📊 Detection Results
      </h3>

      <div
        className="
        mt-2
        h-[2px]
        w-32
        bg-gradient-to-r
        from-cyan-400
        to-transparent
        "
      />

      {!result ? (
        <div
          className="
          text-center
          text-gray-600
          mt-8
          "
        >
          Run detection to see results here
        </div>
      ) : result.error ? (
  <div className="mt-6">
    <div
      className="
      rounded-lg
      border
      border-yellow-500/40
      bg-yellow-500/10
      shadow-[0_0_18px_rgba(250,204,21,0.2)]
      p-4
      "
    >
      <div className="flex items-center gap-3 ">
        <div className="text-yellow-400 text-2xl">
          ⚠
        </div>

        <div>
          <h4 className="font-bold text-yellow-400">
            Invalid Input
          </h4>

          <p className="text-sm text-yellow-300">
            {result.error}
          </p>
        </div>
      </div>
    </div>
  </div>
) : result.hasDeadlock ? (
        <div className="mt-6">
          <div
            className="
            rounded-lg
            border
            border-red-500/40
            bg-red-500/10
            p-4
            shadow-[0_0_18px_rgba(239,68,68,0.1)]
            "
          >
            <div className="flex items-center gap-3">
              <div className="text-red-400 text-2xl">
                ⚠
              </div>

              <div>
                <h4 className="font-bold text-red-400">
                  Deadlock Detected
                </h4>

                <p className="text-sm text-red-300">
                  Circular dependency found in the graph.
                </p>
              </div>
            </div>

            <div className="mt-5">
              <p className="text-xs text-gray-400 uppercase tracking-wider">
                Processes Involved
              </p>

              <div className="flex flex-wrap gap-2 mt-3">
                {(result.processes || []).length > 0 ? (
                  result.processes.map((process) => (
                    <span
                      key={process}
                      className="
                      px-3
                      py-1
                      rounded-md
                      border
                      border-red-500/30
                      bg-red-500/20
                      text-red-300
                      text-sm
                      "
                    >
                      {process}
                    </span>
                  ))
                ) : (
                  <span className="text-sm text-gray-400">
                    Cycle detected
                  </span>
                )}
              </div>

              <div className="mt-4 text-sm text-red-300">
                Total Processes Affected:{" "}
                {(result.processes || []).length}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-6">
          <div
            className="
            rounded-lg
            border
            border-green-500/40
            bg-green-500/10
            shadow-[0_0_18px_rgba(34,197,94,0.1)]
            p-4
            "
          >
            <div className="flex items-center gap-3">
              <div className="text-green-400 text-2xl">
                ✓
              </div>

              <div>
                <h4 className="font-bold text-green-400">
                  No Deadlock Detected
                </h4>

                <p className="text-sm text-green-300">
                  System is currently in a safe state.
                </p>
              </div>
            </div>

            <div
              className="
              mt-4
              rounded-md
              border
              border-green-500/20
              bg-green-500/5
              p-3
              "
            >
              <p className="text-green-300 text-sm">
                All processes can complete successfully.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}