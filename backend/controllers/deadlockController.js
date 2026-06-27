import findDeadlock from "../utils/detectDeadlock.js";

export const detectDeadlock = (req, res) => {
  console.log("======================");
  console.log("NEW REQUEST");

  console.log(JSON.stringify(req.body, null, 2));

  const result = findDeadlock(req.body);

  console.log(result);

  res.json(result);
};