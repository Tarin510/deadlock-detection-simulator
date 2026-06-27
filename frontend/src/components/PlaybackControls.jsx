export default function PlaybackControls({

currentStep,

steps,

setCurrentStep,

playing,

setPlaying,

}){

return(

<div className="flex items-center justify-between mt-6">

<div className="flex gap-3">

<button

onClick={()=>setCurrentStep(Math.max(currentStep-1,0))}

className="px-4 py-2 rounded bg-[#182231]"

>

◀ Prev

</button>

<button

onClick={()=>setPlaying(true)}

className="px-4 py-2 rounded bg-green-700"

>

▶ Play

</button>

<button

onClick={()=>setPlaying(false)}

className="px-4 py-2 rounded bg-yellow-700"

>

Pause

</button>

<button

onClick={()=>

setCurrentStep(

Math.min(currentStep+1,steps.length-1)

)

}

className="px-4 py-2 rounded bg-[#182231]"

>

Next ▶

</button>

</div>

<div className="text-gray-400">

Step {currentStep+1} / {steps.length}

</div>

</div>

);

}