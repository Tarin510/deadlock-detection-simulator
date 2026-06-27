export default function AvailableResources({
  resources,
  available,
  setAvailable,
}) {

  const handleChange = (index, value) => {

    const copy = [...available];

    copy[index] = Math.max(0, Number(value));

    setAvailable(copy);

  };

  return (

    <div className="mt-6">

      <h3 className="uppercase tracking-[0.25em] text-gray-400 text-xs mb-3">
        Available Resources
      </h3>

      <div className="flex gap-6">

        {resources.map((resource, index) => (

          <div
            key={resource}
            className="flex flex-col items-center"
          >

            <span className="text-yellow-400 text-sm font-semibold mb-2">
              {resource}
            </span>

            <input
              type="number"
              min="0"
              value={available[index]}
              onChange={(e) =>
                handleChange(index, e.target.value)
              }
              className="
                w-16
                h-10
                bg-[#111827]
                border
                border-cyan-900/40
                rounded-md
                text-center
                text-white
                outline-none
                focus:border-cyan-500
              "
            />

          </div>

        ))}

      </div>

    </div>

  );

}