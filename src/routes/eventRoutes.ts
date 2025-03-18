import { Router } from "express";
import { getStatus, sayHello } from "../controllers/eventController";

const router = Router();

router.get("/status", getStatus);
router.get("/Hello", sayHello);

export default router;
