import express from "express";

import { runBankerAlgorithm } from "../controllers/bankerController.js";

const router = express.Router();

router.post("/", runBankerAlgorithm);

export default router;