import NumberInput from "./NumberInput";

export default function BankerTable({
  resources,
  processes,
  allocation,
  maximum,
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

  const need = allocation.map((row, i) =>
    row.map((_, j) =>
      Math.max(0, maximum[i][j] - allocation[i][j])
    )
  );

  return (
    <div className="mt-8 overflow-x-auto">

      <table className="w-full border-collapse">

        {/* ---------------- Header ---------------- */}

        <thead>

          <tr className="bg-[#111827]">

            <th
              rowSpan="2"
              className="border border-gray-700 px-4 py-3 text-white"
            >
              Process
            </th>

            <th
              colSpan={resources.length}
              className="border border-cyan-700 text-cyan-400"
            >
              Allocation
            </th>

            <th
              colSpan={resources.length}
              className="border border-yellow-700 text-yellow-400"
            >
              Maximum
            </th>

            <th
              colSpan={resources.length}
              className="border border-green-700 text-green-400"
            >
              Need
            </th>

            <th
              rowSpan="2"
              className="border border-gray-700"
            >
              Action
            </th>

          </tr>

          <tr>

            {resources.map((r) => (
              <th
                key={"a"+r}
                className="border border-gray-700 text-cyan-300 py-2"
              >
                {r}
              </th>
            ))}

            {resources.map((r) => (
              <th
                key={"m"+r}
                className="border border-gray-700 text-yellow-300"
              >
                {r}
              </th>
            ))}

            {resources.map((r) => (
              <th
                key={"n"+r}
                className="border border-gray-700 text-green-300"
              >
                {r}
              </th>
            ))}

          </tr>

        </thead>

        {/* ---------------- Body ---------------- */}

        <tbody>

          {processes.map((process,row)=>(

            <tr key={process}>

              <td className="border border-gray-700 text-white text-center">
                {process}
              </td>

              {/* Allocation */}

              {resources.map((_,col)=>(

                <td
                  key={col}
                  className="border border-gray-700 p-2"
                >

                  <NumberInput
                    value={allocation[row][col]}
                    onChange={(v)=>
                      updateAllocation(row,col,v)
                    }
                  />

                </td>

              ))}

              {/* Maximum */}

              {resources.map((_,col)=>(

                <td
                  key={col}
                  className="border border-gray-700 p-2"
                >

                  <NumberInput
                    color="yellow"
                    value={maximum[row][col]}
                    onChange={(v)=>
                      updateMaximum(row,col,v)
                    }
                  />

                </td>

              ))}

              {/* Need */}

              {resources.map((_,col)=>(

                <td
                  key={col}
                  className="
                    border
                    border-gray-700
                    text-green-400
                    text-center
                    font-semibold
                  "
                >
                  {need[row][col]}
                </td>

              ))}

              <td className="border border-gray-700 text-center">

                <button
                  onClick={()=>removeProcess(row)}
                  className="
                    text-red-500
                    hover:text-red-300
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
          px-5
          py-2
          rounded-lg
          bg-cyan-900/30
          border
          border-cyan-700
          hover:bg-cyan-700
          transition
        "
      >
        + Add Process
      </button>

    </div>
  );
}