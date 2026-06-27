import express from "express";
import { detectDeadlock } from "../controllers/deadlockController.js";

const router = express.Router();

router.post("/", detectDeadlock);

export default router;