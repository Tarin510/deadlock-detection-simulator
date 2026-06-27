import { useState } from "react";
import { Toaster } from "react-hot-toast";
import Theory from "./components/Theory";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Graph from "./components/Graph";
import DetectionResult from "./components/DetectionResult";
import ModeSelector from "./components/ModeSelector";
import Banker from "./components/Banker";

function App() {
  const [mode, setMode] = useState("detection");
  const [processes, setProcesses] = useState([]);
  const [resources, setResources] = useState([]);
  const [allocations, setAllocations] = useState([]);
  const [requests, setRequests] = useState([]);
  const [result, setResult] = useState(null);

  const loadExample = () => {
    setProcesses(["P1", "P2","P3","P4"]);
    setResources(["R1", "R2","R3", "R4"]);

    setAllocations([
      { process: "P1", resource: "R1" },
      { process: "P2", resource: "R2" },
      { process: "P3", resource: "R3" },
      { process: "P4", resource: "R4" },
    ]);

    setRequests([
      { process: "P1", resource: "R2" },
       { process: "P2", resource: "R3" },
      { process: "P3", resource: "R4" },
      { process: "P4", resource: "R1" },
    ]);

    setResult(null);
  };

  const clearGraph = () => {
    setProcesses([]);
    setResources([]);
    setAllocations([]);
    setRequests([]);
    setResult(null);
  };

  return (
    <div>
       <Toaster
    position="top-right"
    reverseOrder={false}
  />
      <Navbar />
      <ModeSelector
    mode={mode}
    setMode={setMode}
/>

      {mode === "detection" ? (
  <div className="flex gap-4 p-6">
    <Sidebar
      processes={processes}
      setProcesses={setProcesses}
      resources={resources}
      setResources={setResources}
      allocations={allocations}
      setAllocations={setAllocations}
      requests={requests}
      setRequests={setRequests}
      setResult={setResult}
      loadExample={loadExample}
      clearGraph={clearGraph}
    />

    <div className="flex-1 space-y-4">
      <Graph
        processes={processes}
        resources={resources}
        allocations={allocations}
        requests={requests}
        result={result}
      />

      <DetectionResult result={result} />
    </div>
  </div>
):mode==="banker"?(
<Banker/>
):(
<Theory/>
)}
    </div>
  );
}

export default App;