export default function NeedMatrix({
  processes,
  allocation,
  maximum,
  resources,
}) {

  const calculateNeed = (row, col) => {
    return Math.max(0, maximum[row][col] - allocation[row][col]);
  };

  return (
    <div className="mt-8">

      <h3 className="text-cyan-400 font-semibold uppercase tracking-wider mb-4">
        Need Matrix
      </h3>

      <table className="w-full text-sm">

        <thead>

          <tr className="text-gray-400">

            <th className="text-left pb-3">
              Process
            </th>

            {resources.map((resource) => (

              <th
                key={resource}
                className="pb-3"
              >
                Need {resource}
              </th>

            ))}

          </tr>

        </thead>

        <tbody>

          {processes.map((process, row) => (

            <tr key={process}>

              <td className="py-2 text-white font-medium">
                {process}
              </td>

              {resources.map((_, col) => (

                <td
                  key={col}
                  className="p-2"
                >

                  <div
                    className="
                      w-16
                      h-9
                      flex
                      items-center
                      justify-center
                      rounded-md
                      bg-green-950/20
                      border
                      border-green-800/40
                      text-green-400
                      font-semibold
                    "
                  >
                    {calculateNeed(row, col)}
                  </div>

                </td>

              ))}

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}