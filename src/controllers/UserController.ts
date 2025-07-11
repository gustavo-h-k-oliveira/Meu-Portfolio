import { Request, Response } from 'express';
import { getAllUsers } from '../services/UserService';

export const getUsers = (req: Request, res: Response) => {
  const users = getAllUsers();
  res.json(users);
};
