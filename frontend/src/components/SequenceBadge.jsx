export default function SequenceBadge({

sequence,

current,

}){

return(

<div className="flex gap-2 flex-wrap mt-5">

{

sequence.map((process,index)=>(

<div

key={process}

className={`

px-3

py-1

rounded

transition-all

duration-500

${

index===current

?

"bg-cyan-600 text-white scale-110 shadow-lg shadow-cyan-500/40"

:

"bg-green-900/30 text-green-300"

}

`}

>

{process}

</div>

))

}

</div>

);

}