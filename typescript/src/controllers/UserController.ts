import { Request, Response } from 'express';
import EmailService from '../services/EmailServices';

const users = [
  { name: 'bruno', email: 'brunocdeveloper@gmail.com' }
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailservice = new EmailService();
    emailservice.sendMail(
      { name: 'bruno', email: 'bruno@hotmail.com'},
      { subject: 'Bem-vindo ao sistema', body: 'Seja bem vindo' }
    );
    return res.send();
  }
};