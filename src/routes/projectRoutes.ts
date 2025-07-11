import { Router } from "express";
import { getAllProjects, getProjectById } from "../controllers/ProjectController";

const router = Router();

router.get("/", getAllProjects);
router.get("/:id", getProjectById);

export default router;
