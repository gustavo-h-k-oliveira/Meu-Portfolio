import { Request, Response } from "express";

export const sendContactMessage = (req: Request, res: Response) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: "Todos os campos são obrigatórios." });
    }

    res.json({ status: "Mensagem recebida. Obrigado!"});
};
