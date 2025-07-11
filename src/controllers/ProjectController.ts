import { Request, Response } from "express";
import { getProjects, getProject } from "../services/ProjectService";

export const getAllProjects = (req: Request, res: Response) => {
    res.json(getProjects());
};

export const getProjectById = (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const project = getProject(id);

    if (project) res.json(project);
    else res.status(404).json({ error: "Projeto não encontrado." });
};
