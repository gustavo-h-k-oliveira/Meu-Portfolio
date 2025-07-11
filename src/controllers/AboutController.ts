import { Request, Response } from 'express';

export const getAboutInfo = (_req: Request, res: Response) => {
    res.json({
        name: "Gustavo Oliveira",
        bio: "Desevolvedor Full Stack com experiência em Node.js, TypeScript e React.",
        skills: ["JavaScript", "TypeScript", "Node.js", "React"]
    });
};