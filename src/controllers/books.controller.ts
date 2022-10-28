import { Request, Response } from 'express';
import { createBook } from '../services/books.services';

export const createBooks = async (req: Request, res: Response) => {
  const { title, synopsis, type, sellPrice, loanPrice, author } = req.body;
  const created = await createBook({
    title,
    synopsis,
    type,
    sellPrice,
    loanPrice,
    author,
  });
  return res.status(created.success ? 200 : 400).json({
    success: created.success,
    data: created.data,
  });
};
