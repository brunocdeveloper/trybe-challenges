import { Request, Response } from 'express';

const users = [
  { name: 'bruno', email: 'brunocdeveloper@gmail.com' }
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  }
};