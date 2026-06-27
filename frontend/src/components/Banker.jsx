import { useState, useEffect } from "react";
import BankerCards from "./BankerCards";
import BankerTable from "./BankerTable";
import AvailableResources from "./AvailableResources";
import BankerControls from "./BankerControls";
import BankerResult from "./BankerResult";
import StepViewer from "./StepViewer";


export default function Banker() {
  // Resources
  const [resources] = useState(["A", "B", "C"]);

  // Available Resources
  const [available, setAvailable] = useState([3, 3, 2]);

  // Processes
  const [processes, setProcesses] = useState([
    "P0",
    "P1",
    "P2",
    "P3",
    "P4",
  ]);

  // Allocation Matrix
  const [allocation, setAllocation] = useState([
    [0, 1, 0],
    [2, 0, 0],
    [3, 0, 2],
    [2, 1, 1],
    [0, 0, 2],
  ]);

  // Maximum Matrix
  const [maximum, setMaximum] = useState([
    [7, 5, 3],
    [3, 2, 2],
    [9, 0, 2],
    [2, 2, 2],
    [4, 3, 3],
  ]);

  // Add Process
  const addProcess = () => {
    const next = processes.length;

    setProcesses([...processes, `P${next}`]);

    setAllocation([
      ...allocation,
      new Array(resources.length).fill(0),
    ]);

    setMaximum([
      ...maximum,
      new Array(resources.length).fill(0),
    ]);
  };

  // Remove Process
  const removeProcess = (index) => {
    setProcesses(processes.filter((_, i) => i !== index));

    setAllocation(allocation.filter((_, i) => i !== index));

    setMaximum(maximum.filter((_, i) => i !== index));
  };

  const [result, setResult] = useState(null);
  const runBanker = async () => {
  try {

    const response = await fetch(
      "http://localhost:5000/api/banker",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          available,
          allocation,
          maximum,
          processes,
        }),
      }
    );

    const data = await response.json();

    setResult(data);

  } catch (error) {
    console.error(error);
  }
};

const [currentStep, setCurrentStep] = useState(0);

const [playing, setPlaying] = useState(false);
useEffect(() => {

    if (!playing) return;

    if (!result?.steps) return;

    if (currentStep >= result.steps.length - 1) {

        setPlaying(false);

        return;

    }

    const timer = setTimeout(() => {

        setCurrentStep((prev) => prev + 1);

    }, 1200);

    return () => clearTimeout(timer);

}, [playing, currentStep, result]);


  return (
    <div className="p-6">
      <div className="bg-[#0b1017] border border-gray-800 rounded-xl p-6">

        <h3 className="
            text-3xl
            font-bold
            text-cyan-300
            tracking-wide
            drop-shadow-[0_0_12px_rgba(34,211,238,.6)]">
          Banker's Algorithm — Safe State Detection
        </h3>
        <div className="mt-3 h-[2px] w-56 bg-gradient-to-r from-cyan-400 to-transparent"/>
        <div className="mt-7"></div>

        <BankerCards />

        <AvailableResources
          resources={resources}
          available={available}
          setAvailable={setAvailable}
        />

        <BankerTable
    resources={resources}
    processes={processes}
    allocation={allocation}
    maximum={maximum}
    setAllocation={setAllocation}
    setMaximum={setMaximum}
    addProcess={addProcess}
    removeProcess={removeProcess}
/>

<BankerControls
    addProcess={addProcess}
    runAlgorithm={runBanker}
/>
<BankerResult
    result={result}
/>

<StepViewer
    steps={result?.steps}
/>
      </div>
    </div>
  );
}