export default function bankerAlgorithm({
  available,
  allocation,
  maximum,
  processes,
}) {
  const numProcesses = processes.length;
  const numResources = available.length;

  // -------------------------
  // Calculate Need Matrix
  // -------------------------

  const need = Array.from(
    { length: numProcesses },
    () => Array(numResources).fill(0)
  );

  for (let i = 0; i < numProcesses; i++) {
    for (let j = 0; j < numResources; j++) {
      need[i][j] = maximum[i][j] - allocation[i][j];
    }
  }

  // -------------------------
  // Initialize
  // -------------------------

  const work = [...available];

  const finish = new Array(numProcesses).fill(false);

  const safeSequence = [];

  const steps = [];

  // -------------------------
  // Safety Algorithm
  // -------------------------

  let found = true;

  while (safeSequence.length < numProcesses && found) {
    found = false;

    for (let i = 0; i < numProcesses; i++) {
      if (finish[i]) continue;

      let canRun = true;

      for (let j = 0; j < numResources; j++) {
        if (need[i][j] > work[j]) {
          canRun = false;
          break;
        }
      }

      if (canRun) {
        // Save current step BEFORE releasing resources
        steps.push({
          process: processes[i],
          need: [...need[i]],
          work: [...work],
          allocation: [...allocation[i]],
          sequence: [...safeSequence, processes[i]],
        });

        // Release resources
        for (let j = 0; j < numResources; j++) {
          work[j] += allocation[i][j];
        }

        finish[i] = true;

        safeSequence.push(processes[i]);

        found = true;
      }
    }
  }

  // -------------------------
  // Unsafe State
  // -------------------------

  if (safeSequence.length !== numProcesses) {
    return {
      safe: false,

      message: "Unsafe State! No Safe Sequence Exists.",

      safeSequence,

      need,

      steps,
    };
  }

  // -------------------------
  // Safe State
  // -------------------------

  return {
    safe: true,

    message: "System is in Safe State.",

    safeSequence,

    need,

    steps,
  };
}