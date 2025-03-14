import { Router } from "express";
import { getStatus } from "../controllers/eventController";

const router = Router();

router.get("/status", getStatus);

export default router;
