export default function findDeadlock({
  processes,
  resources,
  allocations,
  requests,
}) {
  // ===============================
  // Build Resource Allocation Graph
  // ===============================

  const graph = {};

  [...processes, ...resources].forEach((node) => {
    graph[node] = [];
  });

  // Resource → Process (Allocation)
  allocations.forEach(({ process, resource }) => {
    if (graph[resource]) {
      graph[resource].push(process);
    }
  });

  // Process → Resource (Request)
  requests.forEach(({ process, resource }) => {
    if (graph[process]) {
      graph[process].push(resource);
    }
  });

  console.log("GRAPH:", graph);

  // ===============================
  // DFS Cycle Detection
  // ===============================

  const visited = new Set();
  const recursionStack = new Set();

  const cycles = [];
  const cycleKeys = new Set();

  function dfs(node, path) {
    visited.add(node);
    recursionStack.add(node);
    path.push(node);

    for (const neighbour of graph[node]) {
      if (!visited.has(neighbour)) {
        dfs(neighbour, path);
      }

      else if (recursionStack.has(neighbour)) {

        // Extract cycle
        const startIndex = path.indexOf(neighbour);

        if (startIndex !== -1) {

          const cycle = [
            ...path.slice(startIndex),
            neighbour,
          ];

          // Remove duplicate last node for comparison
          const uniqueCycle = cycle.slice(0, -1);

          // Canonical representation
          const key = [...uniqueCycle]
            .sort()
            .join("|");

          if (!cycleKeys.has(key)) {
            cycleKeys.add(key);
            cycles.push(uniqueCycle);
          }
        }
      }
    }

    recursionStack.delete(node);
    path.pop();
  }

  // ===============================
  // Start DFS
  // ===============================

  for (const node of Object.keys(graph)) {
    if (!visited.has(node)) {
      dfs(node, []);
    }
  }

  // ===============================
  // Deadlocked Processes
  // ===============================

  const deadlockedProcesses = [
    ...new Set(
      cycles
        .flat()
        .filter((node) => processes.includes(node))
    ),
  ];

  return {
    hasDeadlock: cycles.length > 0,
    processes: deadlockedProcesses,
    cycles,
  };
}