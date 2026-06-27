import NumberInput from "./NumberInput";
export default function AllocationMatrix({
  processes,
  allocation,
  maximum,
  resources,
  setAllocation,
  setMaximum,
  addProcess,
  removeProcess,
}) {
  const updateAllocation = (row, col, value) => {
  const copy = allocation.map((r) => [...r]);
  copy[row][col] = value;
  setAllocation(copy);
};

const updateMaximum = (row, col, value) => {
  const copy = maximum.map((r) => [...r]);
  copy[row][col] = value;
  setMaximum(copy);
};

  return (
    <div className="mt-8">

      <table className="w-full text-sm">

        <thead>

          <tr className="text-gray-400">

            <th className="text-left pb-3">Process</th>

            {resources.map((r) => (
              <th key={"a" + r}>Alloc {r}</th>
            ))}

            {resources.map((r) => (
              <th key={"m" + r}>Max {r}</th>
            ))}

            <th></th>

          </tr>

        </thead>

        <tbody>

          {processes.map((process, row) => (

            <tr key={process}>

              <td className="py-2 font-medium text-white">
                {process}
              </td>

              {resources.map((_, col) => (

                <td key={col} className="p-1">

                  <NumberInput
  value={allocation[row][col]}
  onChange={(value) =>
    updateAllocation(row, col, value)
  }
/>

                </td>

              ))}

              {resources.map((_, col) => (

                <td key={col} className="p-1">

                 <NumberInput
  value={maximum[row][col]}
  color="yellow"
  onChange={(value) =>
    updateMaximum(row, col, value)
  }
/>

                </td>

              ))}

              <td>

                <button
                  onClick={() => removeProcess(row)}
                  className="
                    text-red-500
                    hover:text-red-300
                    px-2
                  "
                >
                  ✕
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

      <button
        onClick={addProcess}
        className="
          mt-5
          px-4
          py-2
          rounded-lg
          bg-cyan-900/30
          border
          border-cyan-700
          hover:bg-cyan-700
          transition
          text-white
        "
      >
        + Process
      </button>

    </div>
  );
}