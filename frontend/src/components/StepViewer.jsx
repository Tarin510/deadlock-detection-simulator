import { useState } from "react";

export default function StepViewer({
  steps,
}) {

  const [current,setCurrent]=useState(0);

  if(!steps || steps.length===0)
      return null;

  const step=steps[current];

  return(

<div className="mt-5 rounded-xl border border-gray-700 p-5 bg-[#111827]">

<div className="flex justify-between">

<button
onClick={()=>setCurrent(Math.max(0,current-1))}
className="px-3 py-1 rounded bg-[#182231]"
>

← Prev

</button>

<div className="text-gray-400">

Step {current+1} / {steps.length}

</div>

<button
onClick={()=>setCurrent(Math.min(steps.length-1,current+1))}
className="px-3 py-1 rounded bg-[#182231]"
>

Next →

</button>

</div>

<div className="mt-5">

<p className="text-green-400">

<strong>{step.process}</strong> can execute

</p>

<p className="mt-2">

Need:

<span className="text-cyan-300">

{JSON.stringify(step.need)}

</span>

</p>

<p className="mt-2">

Work:

<span className="text-yellow-300">

{JSON.stringify(step.work)}

</span>

</p>

<p className="mt-2">

Sequence:

<span className="text-green-400">

{step.sequence.join(" → ")}

</span>

</p>

</div>

</div>

);

}