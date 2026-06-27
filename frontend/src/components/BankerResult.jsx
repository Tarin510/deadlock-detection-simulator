export default function BankerResult({ result }) {
  if (!result) return null;

  const isSafe = result.safe;

  return (
    <div
      className={`
        mt-6
        rounded-xl
        border
        p-5
        transition-all
        duration-300

        ${
          isSafe
            ? "bg-green-950/20 border-green-700"
            : "bg-red-950/20 border-red-700"
        }
      `}
    >
      {/* Status */}

      <div className="flex items-center gap-3">

        <span
          className={`
            px-4
            py-1
            rounded-lg
            font-semibold

            ${
              isSafe
                ? "bg-green-900/40 text-green-400"
                : "bg-red-900/40 text-red-400"
            }
          `}
        >
          {isSafe ? "✓ SAFE STATE" : "✖ UNSAFE STATE"}
        </span>

        <span className="text-gray-300">
          {result.message}
        </span>

      </div>

      {/* Safe Sequence */}

      {isSafe ? (
        <>
          <h3 className="mt-5 text-cyan-400 font-semibold">
            Safe Sequence
          </h3>

          <div className="flex gap-2 flex-wrap mt-3">
            {result.safeSequence.map((process) => (
              <div
                key={process}
                className="
                  px-3
                  py-2
                  rounded-lg
                  bg-green-900/30
                  border
                  border-green-700
                  text-green-300
                "
              >
                {process}
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <div
            className="
              mt-5
              rounded-lg
              border
              border-red-700
              bg-red-950/30
              p-4
            "
          >
            <h3 className="text-red-400 font-semibold">
              Deadlock Warning
            </h3>

            <p className="text-gray-300 mt-2">
              No safe sequence exists.
            </p>

            <p className="text-gray-400 mt-1">
              If all current resource requests are granted,
              one or more processes may never complete.
            </p>
          </div>

          {result.safeSequence.length > 0 && (
            <>
              <h3 className="mt-5 text-yellow-400 font-semibold">
                Processes Completed Before Deadlock
              </h3>

              <div className="flex gap-2 flex-wrap mt-3">
                {result.safeSequence.map((process) => (
                  <div
                    key={process}
                    className="
                      px-3
                      py-2
                      rounded-lg
                      bg-yellow-900/30
                      border
                      border-yellow-700
                      text-yellow-300
                    "
                  >
                    {process}
                  </div>
                ))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}