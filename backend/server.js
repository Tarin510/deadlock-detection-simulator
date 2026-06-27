import express from "express";
import cors from "cors";

import deadlockRoutes from "./routes/deadlockRoutes.js";
import bankerRoutes from "./routes/bankerRoutes.js";


const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/deadlock", deadlockRoutes);
app.use("/api/banker", bankerRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get("/test", (req, res) => {
  res.json({
    message: "Backend Working",
  });
});