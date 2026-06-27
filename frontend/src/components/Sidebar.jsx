import { useState } from "react";
import toast from "react-hot-toast";

export default function Sidebar({
  processes,
  setProcesses,
  resources,
  setResources,
  allocations,
  setAllocations,
  requests,
  setRequests,
  setResult,
  loadExample,
  clearGraph,
}) {
  const [processInput, setProcessInput] = useState("");
  const [resourceInput, setResourceInput] = useState("");

  const [selectedResource, setSelectedResource] = useState("");
  const [selectedProcess, setSelectedProcess] = useState("");

  const [requestProcess, setRequestProcess] = useState("");
  const [requestResource, setRequestResource] = useState("");

  // -----------------------------------------
  // PROCESS
  // -----------------------------------------

  const addProcess = () => {
    const value = processInput.trim();

    if (!value) {
      toast.error("Enter a process name.");
      return;
    }

    if (processes.includes(value)) {
      toast.error("Process already exists.");
      return;
    }

    setProcesses((prev) => [...prev, value]);

    setResult(null);

    toast.success(`${value} added.`);

    setProcessInput("");
  };

  const deleteProcess = (process) => {
    setProcesses((prev) =>
      prev.filter((p) => p !== process)
    );

    setAllocations((prev) =>
      prev.filter(
        (allocation) => allocation.process !== process
      )
    );

    setRequests((prev) =>
      prev.filter(
        (request) => request.process !== process
      )
    );

    setResult(null);

    toast.success(`${process} removed.`);
  };

  // -----------------------------------------
  // RESOURCE
  // -----------------------------------------

  const addResource = () => {
    const value = resourceInput.trim();

    if (!value) {
      toast.error("Enter a resource name.");
      return;
    }

    if (resources.includes(value)) {
      toast.error("Resource already exists.");
      return;
    }

    setResources((prev) => [...prev, value]);

    setResult(null);

    toast.success(`${value} added.`);

    setResourceInput("");
  };

  const deleteResource = (resource) => {
    setResources((prev) =>
      prev.filter((r) => r !== resource)
    );

    setAllocations((prev) =>
      prev.filter(
        (allocation) => allocation.resource !== resource
      )
    );

    setRequests((prev) =>
      prev.filter(
        (request) => request.resource !== resource
      )
    );

    setResult(null);

    toast.success(`${resource} removed.`);
  };

  // -----------------------------------------
  // ALLOCATION
  // -----------------------------------------

  const addAllocation = () => {
    if (!selectedProcess || !selectedResource) {
      toast.error("Select process and resource.");
      return;
    }

    const exists = allocations.some(
      (allocation) =>
        allocation.process === selectedProcess &&
        allocation.resource === selectedResource
    );

    if (exists) {
      toast.error("Allocation already exists.");
      return;
    }

    setAllocations((prev) => [
      ...prev,
      {
        process: selectedProcess,
        resource: selectedResource,
      },
    ]);

    setResult(null);

    toast.success("Allocation added.");
  };

  const deleteAllocation = (process, resource) => {
    setAllocations((prev) =>
      prev.filter(
        (allocation) =>
          !(
            allocation.process === process &&
            allocation.resource === resource
          )
      )
    );

    setResult(null);

    toast.success("Allocation removed.");
  };

  // -----------------------------------------
  // REQUEST
  // -----------------------------------------

  const addRequest = () => {
    if (!requestProcess || !requestResource) {
      toast.error("Select process and resource.");
      return;
    }

    const exists = requests.some(
      (request) =>
        request.process === requestProcess &&
        request.resource === requestResource
    );

    if (exists) {
      toast.error("Request already exists.");
      return;
    }

    setRequests((prev) => [
      ...prev,
      {
        process: requestProcess,
        resource: requestResource,
      },
    ]);

    setResult(null);

    toast.success("Request added.");
  };

  const deleteRequest = (process, resource) => {
    setRequests((prev) =>
      prev.filter(
        (request) =>
          !(
            request.process === process &&
            request.resource === resource
          )
      )
    );

    setResult(null);

    toast.success("Request removed.");
  };

  // -----------------------------------------
  // RUN DETECTION
  // -----------------------------------------

  const runDetection = async () => {
    if (
      processes.length === 0 &&
      resources.length === 0 &&
      allocations.length === 0 &&
      requests.length === 0
    ) {
      setResult({
        error: "No input provided.",
        hasDeadlock: false,
        processes: [],
        cycles: [],
      });

      toast.error("No graph found.");

      return;
    }

    const payload = {
      processes,
      resources,
      allocations,
      requests,
    };

    console.log("Sending:", payload);

    try {
      const response = await fetch(
        "http://localhost:5000/api/deadlock",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      console.log("Received:", data);

      setResult(data);

      if (data.hasDeadlock) {
        toast.error(
          `Deadlock detected (${data.processes.length} process(es)).`
        );
      } else {
        toast.success("System is in Safe State.");
      }
    } catch (error) {
      console.error(error);

      setResult({
        hasDeadlock: false,
        processes: [],
        error: "Unable to connect to server.",
      });

      toast.error("Cannot connect to server.");
    }
  };
  return (
  <div
    className="
      sidebar
      w-[400px]
      min-h-[calc(100vh-100px)]
      bg-[#0b1017]
      border
      border-gray-800
      rounded-xl
      p-4
      space-y-5
      shrink-0
    "
  >
    <h3
      className="
        text-xl
        font-bold
        text-cyan-300
        tracking-wide
        drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]
      "
    >
      ⚙️ System Configuration
    </h3>

    <div
      className="
        mt-2
        h-[2px]
        w-32
        bg-gradient-to-r
        from-cyan-400
        to-transparent
      "
    />

    {/* =========================
        PROCESSES
    ========================== */}

    <div>
      <label className="text-xs text-gray-500 font-bold">
        PROCESSES
      </label>

      <div className="flex gap-2 mt-2">
        <input
          value={processInput}
          onChange={(e) => setProcessInput(e.target.value)}
          placeholder="e.g. P1"
          className="
            input
            placeholder:text-gray-600
            focus:border-cyan-500
            focus:outline-none
          "
        />

        <button
          className="add"
          onClick={addProcess}
        >
          + Add
        </button>
      </div>

      <div className="flex flex-wrap gap-2 mt-3">
        {processes.length === 0 ? (
          <p className="text-xs text-gray-600">
            None added yet
          </p>
        ) : (
          processes.map((process) => (
            <div
              key={process}
              className="
                flex
                items-center
                gap-2
                px-3
                py-1
                rounded-full
                bg-cyan-900/30
                border
                border-cyan-700
                text-xs
                text-cyan-300
              "
            >
              {process}

              <button
                onClick={() => deleteProcess(process)}
                className="
                  text-red-400
                  hover:text-red-300
                  transition
                "
              >
                ✕
              </button>
            </div>
          ))
        )}
      </div>
    </div>

    {/* =========================
        RESOURCES
    ========================== */}

    <div>
      <label className="text-xs text-gray-500 font-bold">
        RESOURCES
      </label>

      <div className="flex gap-2 mt-2">
        <input
          value={resourceInput}
          onChange={(e) => setResourceInput(e.target.value)}
          placeholder="e.g. R1"
          className="
            input
            placeholder:text-gray-600
            focus:border-cyan-500
            focus:outline-none
          "
        />

        <button
          className="add"
          onClick={addResource}
        >
          + Add
        </button>
      </div>

      <div className="flex flex-wrap gap-2 mt-3">
        {resources.length === 0 ? (
          <p className="text-xs text-gray-600">
            None added yet
          </p>
        ) : (
          resources.map((resource) => (
            <div
              key={resource}
              className="
                flex
                items-center
                gap-2
                px-3
                py-1
                rounded-full
                bg-green-900/30
                border
                border-green-700
                text-xs
                text-green-300
              "
            >
              {resource}

              <button
                onClick={() => deleteResource(resource)}
                className="
                  text-red-400
                  hover:text-red-300
                  transition
                "
              >
                ✕
              </button>
            </div>
          ))
        )}
      </div>
    </div>

    {/* =========================
        ALLOCATION
    ========================== */}
        <div>
      <label className="text-xs text-gray-500 font-bold">
        ALLOCATIONS - RESOURCE CURRENTLY HELD BY PROCESS
      </label>

      <div className="flex gap-2 mt-3">
        <select
          value={selectedResource}
          onChange={(e) => setSelectedResource(e.target.value)}
          className="input"
        >
          <option value="">Resource</option>

          {resources.map((resource) => (
            <option key={resource} value={resource}>
              {resource}
            </option>
          ))}
        </select>

        <select
          value={selectedProcess}
          onChange={(e) => setSelectedProcess(e.target.value)}
          className="input"
        >
          <option value="">Process</option>

          {processes.map((process) => (
            <option key={process} value={process}>
              {process}
            </option>
          ))}
        </select>

        <button
          className="add"
          onClick={addAllocation}
        >
          +
        </button>
      </div>

      {/* Allocation List */}

      <div className="flex flex-wrap gap-2 mt-3">
        {allocations.map((allocation) => (
          <div
            key={`${allocation.resource}-${allocation.process}`}
            className="
              flex
              items-center
              gap-2
              px-3
              py-1
              rounded-full
              bg-yellow-900/20
              border
              border-yellow-700
              text-xs
              text-yellow-300
            "
          >
            {allocation.resource} → {allocation.process}

            <button
              onClick={() =>
                deleteAllocation(
                  allocation.process,
                  allocation.resource
                )
              }
              className="text-red-400 hover:text-red-300"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>

    {/* REQUESTS */}

    <div>

      <div className="mb-8"></div>

      <label className="text-xs text-gray-500 font-bold">
        REQUESTS - PROCESS WAITING FOR RESOURCE
      </label>

      <div className="flex gap-2 mt-3">
        <select
          value={requestProcess}
          onChange={(e) =>
            setRequestProcess(e.target.value)
          }
          className="input"
        >
          <option value="">Process</option>

          {processes.map((process) => (
            <option
              key={process}
              value={process}
            >
              {process}
            </option>
          ))}
        </select>

        <select
          value={requestResource}
          onChange={(e) =>
            setRequestResource(e.target.value)
          }
          className="input"
        >
          <option value="">Resource</option>

          {resources.map((resource) => (
            <option
              key={resource}
              value={resource}
            >
              {resource}
            </option>
          ))}
        </select>

        <button
          className="add"
          onClick={addRequest}
        >
          +
        </button>
      </div>

      {/* Request List */}

      <div className="flex flex-wrap gap-2 mt-3">
        {requests.map((request) => (
          <div
            key={`${request.process}-${request.resource}`}
            className="
              flex
              items-center
              gap-2
              px-3
              py-1
              rounded-full
              bg-blue-900/20
              border
              border-blue-700
              text-xs
              text-blue-300
            "
          >
            {request.process} → {request.resource}

            <button
              onClick={() =>
                deleteRequest(
                  request.process,
                  request.resource
                )
              }
              className="text-red-400 hover:text-red-300"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

    </div>

    <div className="flex flex-col gap-2 mt-4">

      <button
        className="detect-btn font-semibold"
        onClick={runDetection}
      >
        ⚡ Run Deadlock Detection
      </button>

      <button
        onClick={() => {
          loadExample();
          setResult(null);
          toast.success("Example loaded.");
        }}
        className="
          w-full
          flex items-center justify-center gap-2
          py-2
          rounded-lg
          text-gray-200
          bg-gray-800/40
          border border-gray-700
          hover:bg-gray-700/40
          transition
          text-sm
        "
      >
        📂 Load Example (Deadlock)
      </button>

      <button
        onClick={() => {
          clearGraph();
          setResult(null);
          toast.success("Graph cleared.");
        }}
        className="
          w-full
          flex items-center justify-center gap-2
          py-2
          rounded-lg
          text-red-300
          bg-red-900/20
          border border-red-800
          hover:bg-red-800/30
          hover:shadow-[0_0_12px_rgba(239,68,68,0.2)]
          transition
          text-sm
        "
      >
        🗑 Clear Graph
      </button>

    </div>

  </div>
);
}