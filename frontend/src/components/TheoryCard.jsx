import { useState } from "react";

export default function TheoryCard({
  number,
  title,
  icon,
  color,
  children,
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="
      bg-[#0b1017]
      border
      border-gray-800
      rounded-xl
      overflow-hidden
      transition-all
      duration-300
      hover:border-cyan-500
      hover:shadow-[0_0_15px_rgba(34,211,238,.15)]
      "
    >
      {/* Header */}

      <button
        onClick={() => setOpen(!open)}
        className="
        w-full
        flex
        items-center
        justify-between
        p-5
        text-left
        "
      >
        <div className="flex items-center gap-4">

          <div
            className={`
            w-12
            h-12
            rounded-xl
            flex
            items-center
            justify-center
            text-2xl
            ${color}
            `}
          >
            {icon}
          </div>

          <div>

            <p className="text-xs tracking-[0.25em] uppercase text-gray-500">
              Section {number}
            </p>

            <h2 className="text-lg font-bold text-white">
              {title}
            </h2>

          </div>

        </div>

        <span className="text-cyan-400 text-xl">
          {open ? "−" : "+"}
        </span>
      </button>

      {open && (
        <div className="px-6 pb-6 animate-fadeIn">
          {children}
        </div>
      )}
    </div>
  );
}