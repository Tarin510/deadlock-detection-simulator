export default function NumberInput({ value, onChange, color = "cyan" }) {
  const increase = () => onChange(value + 1);

  const decrease = () => {
    if (value > 0) onChange(value - 1);
  };

  const border =
    color === "yellow"
      ? "border-yellow-700/40 focus:border-yellow-400"
      : "border-cyan-900/40 focus:border-cyan-400";

  const text =
    color === "yellow"
      ? "text-yellow-300"
      : "text-cyan-300";

  return (
    <div
      className={`
        flex items-center
        bg-[#111827]
        border ${border}
        rounded-md
        w-16
        h-9
        overflow-hidden
      `}
    >
      <input
        type="text"
        value={value}
        onChange={(e) =>
          onChange(Math.max(0, Number(e.target.value) || 0))
        }
        className={`
          w-10
          h-full
          bg-transparent
          text-center
          outline-none
          ${text}
        `}
      />

      <div className="flex flex-col w-6 h-full border-l border-gray-700">

        <button
          onClick={increase}
          className="flex-1 text-[10px] hover:bg-cyan-900/40"
        >
          ▲
        </button>

        <button
          onClick={decrease}
          className="flex-1 text-[10px] hover:bg-cyan-900/40"
        >
          ▼
        </button>

      </div>
    </div>
  );
}