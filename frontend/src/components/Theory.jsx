import React from "react";

export default function Theory() {
  return (
    <div className="p-6">

      <div className="sidebar bg-[#0b1017] border border-gray-800 rounded-xl p-8">

        {/* ======================================= */}
        {/* HEADER */}
        {/* ======================================= */}

        <div className="mb-8">

          <h2
            className="
            text-3xl
            font-bold
            text-cyan-300
            tracking-wide
            drop-shadow-[0_0_12px_rgba(34,211,238,.6)]
            "
          >
            📖 Operating System Theory
          </h2>

          <div className="mt-3 h-[2px] w-56 bg-gradient-to-r from-cyan-400 to-transparent"/>

          <p className="text-gray-400 mt-5 leading-8">
            This module explains the theoretical concepts used in this
            Deadlock Detection and Deadlock Avoidance Simulator.
            It covers Resource Allocation Graphs, DFS Cycle Detection,
            Coffman Conditions, Banker's Algorithm and their practical
            applications in Operating Systems.
          </p>

        </div>

        {/* ======================================= */}
        {/* RESOURCE ALLOCATION GRAPH */}
        {/* ======================================= */}

        <section className="mb-10">

          <div className="flex items-center gap-4 ">

            <div className="
            w-14
            h-14
            rounded-xl
            bg-cyan-500/20
            border
            border-cyan-500/40
            flex
            items-center
            justify-center
            text-2xl
            
            ">
              🔗
            </div>

            <div>

              <h2 className="text-2xl font-bold text-cyan-300">
                Resource Allocation Graph (RAG)
              </h2>

              <p className="text-gray-400 mt-1">
                Graphical representation of processes and resources.
              </p>

            </div>

          </div>

          <div className="mt-6 bg-[#101722] rounded-xl border border-gray-700 p-6 hover:shadow-[0_0_22px_rgba(34,211,238,.35)]
hover:border-cyan-400
hover:-translate-y-1
transition-all
duration-300">

            <p className="text-gray-300 leading-8">

              A Resource Allocation Graph (RAG) is a directed graph used by
              Operating Systems to represent the relationship between
              processes and resources.

              Every process requests resources and every resource may be
              allocated to one or more processes depending on the system.

              The graph provides an easy way to visualize waiting
              relationships and detect possible deadlocks.

            </p>

          </div>

          {/* Key Components */}

          <div className="grid md:grid-cols-2 gap-5 mt-6">

            <div className="rounded-xl bg-cyan-500/10 border border-cyan-500/30 p-5 hover:shadow-[0_0_22px_rgba(34,211,238,.35)]
hover:border-cyan-400
hover:-translate-y-1
transition-all
duration-300">

              <h3 className="text-lg font-semibold text-cyan-300 mb-4">
                Graph Components
              </h3>

              <ul className="space-y-3 text-gray-300">

                <li>🔵 Circle represents a Process.</li>

                <li>🟨 Square represents a Resource.</li>

                <li>➡ Process → Resource = Request Edge.</li>

                <li>⬅ Resource → Process = Allocation Edge.</li>

                <li>🔄 Cycle may indicate Deadlock.</li>

              </ul>

            </div>

            <div className="rounded-xl bg-blue-500/10 border border-blue-500/30 p-5 hover:shadow-[0_0_22px_rgba(34,211,238,.35)]
hover:border-cyan-400
hover:-translate-y-1
transition-all
duration-300">

              <h3 className="text-lg font-semibold text-blue-300 mb-4">
                Why RAG?
              </h3>

              <ul className="space-y-3 text-gray-300">

                <li>✔ Visualizes resource ownership.</li>

                <li>✔ Shows waiting relationships.</li>

                <li>✔ Helps detect circular wait.</li>

                <li>✔ Used for deadlock analysis.</li>

                <li>✔ Easy to understand and debug.</li>

              </ul>

            </div>

          </div>

          {/* Example */}

          <div className="mt-7 rounded-xl border border-gray-700 bg-[#101722] p-6 hover:shadow-[0_0_22px_rgba(34,211,238,.35)]
hover:border-cyan-400
hover:-translate-y-1
transition-all
duration-300">

            <h3 className="text-lg font-semibold text-yellow-300 mb-5">
              Example Resource Allocation Graph
            </h3>

            <pre className="text-gray-300 text-base leading-8 overflow-auto">

{`
        (P1) ---------> [R1]
          ^               |
          |               |
          |               v
        [R2] <--------- (P2)

Process → Resource = Request

Resource → Process = Allocation

Cycle:
P1 → R1 → P2 → R2 → P1
`}

            </pre>

          </div>

          {/* Information Table */}

          <div className="mt-8 overflow-x-auto hover:shadow-[0_0_22px_rgba(34,211,238,.35)]
hover:border-cyan-400
hover:-translate-y-1
transition-all
duration-300">

            <table className="w-full border-collapse">

              <thead>

                <tr className="bg-cyan-500/10">

                  <th className="border border-gray-700 p-3 text-cyan-300">
                    Symbol
                  </th>

                  <th className="border border-gray-700 p-3 text-cyan-300">
                    Meaning
                  </th>

                  <th className="border border-gray-700 p-3 text-cyan-300">
                    Description
                  </th>

                </tr>

              </thead>

              <tbody>

                <tr>

                  <td className="border border-gray-700 p-3 text-center">
                    ○
                  </td>

                  <td className="border border-gray-700 p-3">
                    Process
                  </td>

                  <td className="border border-gray-700 p-3 text-gray-300">
                    Represents a running process.
                  </td>

                </tr>

                <tr>

                  <td className="border border-gray-700 p-3 text-center">
                    □
                  </td>

                  <td className="border border-gray-700 p-3">
                    Resource
                  </td>

                  <td className="border border-gray-700 p-3 text-gray-300">
                    Represents a system resource.
                  </td>

                </tr>

                <tr>

                  <td className="border border-gray-700 p-3 text-center">
                    →
                  </td>

                  <td className="border border-gray-700 p-3">
                    Request Edge
                  </td>

                  <td className="border border-gray-700 p-3 text-gray-300">
                    Process is waiting for a resource.
                  </td>

                </tr>

                <tr>

                  <td className="border border-gray-700 p-3 text-center">
                    ←
                  </td>

                  <td className="border border-gray-700 p-3">
                    Allocation Edge
                  </td>

                  <td className="border border-gray-700 p-3 text-gray-300">
                    Resource is allocated to a process.
                  </td>

                </tr>

              </tbody>

            </table>

          </div>

        </section>

                {/* ======================================= */}
        {/* DFS CYCLE DETECTION */}
        {/* ======================================= */}

        <section className="mb-10">

          <div className="flex items-center gap-4">

            <div
              className="
              w-14
              h-14
              rounded-xl
              bg-blue-500/20
              border
              border-blue-500/40
              flex
              items-center
              justify-center
              text-2xl
              "
            >
              🌳
            </div>

            <div>

              <h2 className="text-2xl font-bold text-blue-300">
                Depth First Search (DFS)
              </h2>

              <p className="text-gray-400 mt-1">
                Algorithm used in this project to detect cycles.
              </p>

            </div>

          </div>

          <div className="mt-6 bg-[#101722] rounded-xl border border-gray-700 p-6 hover:shadow-[0_0_22px_rgba(59,130,246,.35)]
hover:border-blue-400
hover:-translate-y-1
transition-all
duration-300">

            <p className="text-gray-300 leading-8">

              Depth First Search (DFS) explores one path completely before
              moving to another path. During traversal, a recursion stack is
              maintained. If DFS reaches a node that already exists in the
              recursion stack, a cycle is detected. Since deadlock in a
              Resource Allocation Graph is represented by a cycle, DFS is an
              efficient technique for detecting deadlocks.

            </p>

          </div>

          <div className="grid lg:grid-cols-2 gap-5 mt-6">

            <div className="rounded-xl bg-blue-500/10 border border-blue-500/30 p-5 hover:shadow-[0_0_22px_rgba(59,130,246,.35)]
hover:border-blue-400
hover:-translate-y-1
transition-all
duration-300">

              <h3 className="text-lg font-semibold text-blue-300 mb-4">
                DFS Steps
              </h3>

              <ol className="space-y-3 text-gray-300 list-decimal ml-5">

                <li>Start from any node.</li>

                <li>Mark the node as visited.</li>

                <li>Push it into recursion stack.</li>

                <li>Visit all neighbouring nodes.</li>

                <li>If a node already exists in recursion stack → Cycle.</li>

                <li>Remove node after traversal finishes.</li>

              </ol>

            </div>

            <div className="rounded-xl bg-indigo-500/10 border border-indigo-500/30 p-5 hover:shadow-[0_0_22px_rgba(59,130,246,.35)]
hover:border-blue-400
hover:-translate-y-1
transition-all
duration-300">

              <h3 className="text-lg font-semibold text-indigo-300 mb-4">
                Time Complexity
              </h3>

              <div className="space-y-4">

                <div className="flex justify-between">

                  <span className="text-gray-400">
                    Vertices
                  </span>

                  <span className="text-white font-semibold">
                    V
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-gray-400">
                    Edges
                  </span>

                  <span className="text-white font-semibold">
                    E
                  </span>

                </div>

                <div className="h-px bg-gray-700"/>

                <div className="flex justify-between">

                  <span className="text-blue-300 font-semibold">
                    Overall
                  </span>

                  <span className="text-blue-300 font-bold">
                    O(V + E)
                  </span>

                </div>

              </div>

            </div>

          </div>

         <div className="mt-7 rounded-xl bg-[#101722] border border-gray-700 p-6 hover:shadow-[0_0_22px_rgba(59,130,246,.35)]
hover:border-blue-400
hover:-translate-y-1
transition-all
duration-300">

  <h3 className="text-lg font-semibold text-cyan-300 mb-5">
    DFS Traversal Example
  </h3>

  <div className="overflow-x-auto">

    <div className="flex items-center gap-3 whitespace-nowrap text-lg">

      <div className="px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-300">
        Start
      </div>

      <span className="text-gray-500">→</span>

      <div className="px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
        P1
      </div>

      <span className="text-gray-500">→</span>

      <div className="px-4 py-2 rounded-lg bg-yellow-500/10 border border-yellow-500/30 text-yellow-300">
        R1
      </div>

      <span className="text-gray-500">→</span>

      <div className="px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
        P2
      </div>

      <span className="text-gray-500">→</span>

      <div className="px-4 py-2 rounded-lg bg-yellow-500/10 border border-yellow-500/30 text-yellow-300">
        R2
      </div>

      <span className="text-gray-500">→</span>

      <div className="px-4 py-2 rounded-lg bg-red-500/10 border border-red-500/30 text-red-300 animate-pulse">
        P1 (Visited)
      </div>

      <span className="text-red-400 font-bold text-xl">
        ➜ Cycle Detected
      </span>

    </div>

  </div>

</div>

        </section>

        {/* ======================================= */}
        {/* COFFMAN CONDITIONS */}
        {/* ======================================= */}

        <section className="mb-10">

          <div className="flex items-center gap-4">

            <div
              className="
              w-14
              h-14
              rounded-xl
              bg-yellow-500/20
              border
              border-yellow-500/40
              flex
              items-center
              justify-center
              text-2xl
              "
            >
              ⚠️
            </div>

            <div>

              <h2 className="text-2xl font-bold text-yellow-300">
                Coffman Conditions
              </h2>

              <p className="text-gray-400 mt-1">
                Four necessary conditions for deadlock.
              </p>

            </div>

          </div>

          <div className="mt-6 bg-[#101722] rounded-xl border border-gray-700 p-6 hover:shadow-[0_0_22px_rgba(250,204,21,.35)]
hover:border-yellow-400
hover:-translate-y-1
transition-all
duration-300">

            <p className="text-gray-300 leading-8">

              According to Coffman, a deadlock can occur only when all four
              conditions are satisfied simultaneously. If even one condition
              is removed, deadlock cannot occur.

            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-5 mt-6">

            <div className="rounded-xl bg-yellow-500/10 border border-yellow-500/30 p-5 hover:shadow-[0_0_22px_rgba(250,204,21,.35)]
hover:border-yellow-400
hover:-translate-y-1
transition-all
duration-300">

              <h3 className="font-bold text-yellow-300 mb-3">
                ① Mutual Exclusion
              </h3>

              <p className="text-gray-300 leading-7">

                Only one process can use a resource at a time.

              </p>

            </div>

            <div className="rounded-xl bg-orange-500/10 border border-orange-500/30 p-5 hover:shadow-[0_0_22px_rgba(250,204,21,.35)]
hover:border-yellow-400
hover:-translate-y-1
transition-all
duration-300">

              <h3 className="font-bold text-orange-300 mb-3">
                ② Hold and Wait
              </h3>

              <p className="text-gray-300 leading-7">

                A process holds allocated resources while requesting others.

              </p>

            </div>

            <div className="rounded-xl bg-red-500/10 border border-red-500/30 p-5 hover:shadow-[0_0_22px_rgba(250,204,21,.35)]
hover:border-yellow-400
hover:-translate-y-1
transition-all
duration-300">

              <h3 className="font-bold text-red-300 mb-3">
                ③ No Preemption
              </h3>

              <p className="text-gray-300 leading-7">

                Resources cannot be forcibly taken away from a process.

              </p>

            </div>

            <div className="rounded-xl bg-pink-500/10 border border-pink-500/30 p-5 hover:shadow-[0_0_22px_rgba(250,204,21,.35)]
hover:border-yellow-400
hover:-translate-y-1
transition-all
duration-300">

              <h3 className="font-bold text-pink-300 mb-3">
                ④ Circular Wait
              </h3>

              <p className="text-gray-300 leading-7">

                Processes wait for one another in a circular chain.

              </p>

            </div>

          </div>

          <div
            className="
            mt-8
            rounded-xl
            border
            border-red-500/30
            bg-red-500/10
            p-6
            hover:shadow-[0_0_22px_rgba(250,204,21,.35)]
hover:border-yellow-400
hover:-translate-y-1
transition-all
duration-300
            "
          >

            <h3 className="text-red-300 text-lg font-bold">
              Important Note
            </h3>

            <p className="text-red-200 mt-3 leading-8">

              Deadlock occurs only when all four Coffman Conditions are
              satisfied simultaneously. Breaking any one of these conditions
              prevents deadlock.

            </p>

          </div>

        </section>
                {/* ======================================= */}
        {/* BANKER'S ALGORITHM */}
        {/* ======================================= */}

        <section className="mb-10">

          <div className="flex items-center gap-4">

            <div
              className="
              w-14
              h-14
              rounded-xl
              bg-green-500/20
              border
              border-green-500/40
              flex
              items-center
              justify-center
              text-2xl
              "
            >
              🏦
            </div>

            <div>

              <h2 className="text-2xl font-bold text-green-300">
                Banker's Algorithm
              </h2>

              <p className="text-gray-400 mt-1">
                Deadlock Avoidance Algorithm
              </p>

            </div>

          </div>

          <div className="mt-6 bg-[#101722] rounded-xl border border-gray-700 p-6 hover:shadow-[0_0_22px_rgba(34,197,94,.35)]
hover:border-green-400
hover:-translate-y-1
transition-all
duration-300">

            <p className="text-gray-300 leading-8">

              Banker's Algorithm is a deadlock avoidance algorithm proposed
              by Edsger W. Dijkstra. Before granting a resource request,
              the operating system checks whether the allocation keeps the
              system in a safe state. If the state is unsafe, the request
              is postponed until it becomes safe.

            </p>

          </div>

          <div className="grid lg:grid-cols-2 gap-5 mt-6">

            <div className="rounded-xl bg-green-500/10 border border-green-500/30 p-5 hover:shadow-[0_0_22px_rgba(34,197,94,.35)]
hover:border-green-400
hover:-translate-y-1
transition-all
duration-300">

              <h3 className="text-lg font-semibold text-green-300 mb-4">
                Important Matrices
              </h3>

              <ul className="space-y-3 text-gray-300">

                <li>✔ Available Resources</li>

                <li>✔ Allocation Matrix</li>

                <li>✔ Maximum Matrix</li>

                <li>✔ Need Matrix</li>

                <li>✔ Safe Sequence</li>

              </ul>

            </div>

            <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/30 p-5 hover:shadow-[0_0_22px_rgba(34,197,94,.35)]
hover:border-green-400
hover:-translate-y-1
transition-all
duration-300">

              <h3 className="text-lg font-semibold text-emerald-300 mb-4">
                Need Formula
              </h3>

              <div className="rounded-lg bg-[#0b1017] p-5 border border-emerald-600 text-center">

                <p className="text-2xl font-bold text-white">

                  Need = Maximum − Allocation

                </p>

              </div>

              <p className="mt-4 text-gray-400">

                Every value in the Need matrix is calculated using this
                formula before checking the safe sequence.

              </p>

            </div>

          </div>

          <div className="mt-7 overflow-x-auto hover:shadow-[0_0_22px_rgba(34,197,94,.35)]
hover:border-green-400
hover:-translate-y-1
transition-all
duration-300">

            <table className="w-full">

              <thead>

                <tr className="bg-green-500/10">

                  <th className="border border-gray-700 p-3 text-green-300">
                    Step
                  </th>

                  <th className="border border-gray-700 p-3 text-green-300">
                    Description
                  </th>

                </tr>

              </thead>

              <tbody>

                <tr>

                  <td className="border border-gray-700 p-3 font-semibold">
                    1
                  </td>

                  <td className="border border-gray-700 p-3 text-gray-300">
                    Calculate Need Matrix.
                  </td>

                </tr>

                <tr>

                  <td className="border border-gray-700 p-3 font-semibold">
                    2
                  </td>

                  <td className="border border-gray-700 p-3 text-gray-300">
                    Compare Need with Available.
                  </td>

                </tr>

                <tr>

                  <td className="border border-gray-700 p-3 font-semibold">
                    3
                  </td>

                  <td className="border border-gray-700 p-3 text-gray-300">
                    Execute process if Need ≤ Available.
                  </td>

                </tr>

                <tr>

                  <td className="border border-gray-700 p-3 font-semibold">
                    4
                  </td>

                  <td className="border border-gray-700 p-3 text-gray-300">
                    Release allocated resources.
                  </td>

                </tr>

                <tr>

                  <td className="border border-gray-700 p-3 font-semibold">
                    5
                  </td>

                  <td className="border border-gray-700 p-3 text-gray-300">
                    Repeat until all processes finish.
                  </td>

                </tr>

              </tbody>

            </table>

          </div>

        </section>

        {/* ======================================= */}
        {/* APPLICATIONS */}
        {/* ======================================= */}

        <section className="mb-10">

          <h2 className="text-2xl font-bold text-purple-300 mb-6">
            🚀 Real World Applications
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 ">

            {[
              "💻 Operating Systems",
              "🗄 Database Management",
              "☁ Cloud Computing",
              "🌐 Distributed Systems",
              "🏦 Banking Systems",
              "📡 Network Resource Management",
              "🏭 Industrial Automation",
              "⚡ Real-Time Systems",
            ].map((item) => (

              <div
                key={item}
                className="
                bg-[#101722]
                border
                border-purple-500/20
                rounded-xl
                p-5
                hover:border-purple-400
                hover:shadow-[0_0_18px_rgba(168,85,247,.25)]
                transition-all
                duration-300
                "
              >

                <div className="text-center text-gray-200 font-medium">

                  {item}

                </div>

              </div>

            ))}

          </div>

        </section>

        {/* ======================================= */}
        {/* SUMMARY */}
        {/* ======================================= */}

        <section>

          <div
            className="
            rounded-xl
            border
            border-cyan-500/30
            bg-cyan-500/10
            p-7
            hover:shadow-[0_0_22px_rgba(34,211,238,.35)]
hover:border-cyan-400
hover:-translate-y-1
transition-all
duration-300
            "
          >

            <h2 className="text-2xl font-bold text-cyan-300 mb-5">

              💡 Key Takeaways

            </h2>

            <ul className="space-y-4 text-gray-300 leading-8">

              <li>✅ Resource Allocation Graph visualizes resource allocation and requests.</li>

              <li>✅ DFS efficiently detects cycles in O(V + E).</li>

              <li>✅ Deadlock occurs only if all Coffman Conditions hold.</li>

              <li>✅ Banker's Algorithm prevents deadlock by maintaining a safe state.</li>

              <li>✅ These algorithms are widely used in modern Operating Systems, databases and cloud computing.</li>

            </ul>

          </div>

        </section>

      </div>

    </div>

  );

}