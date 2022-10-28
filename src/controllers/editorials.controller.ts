import { Request, Response } from 'express';
import { prisma } from '..';
import {
  createEditorial,
  getAllEditorials,
} from '../services/editorials.services';

export const createEditorials = async (req: Request, res: Response) => {
  const { email, phone, name } = req.body;
  const created = await createEditorial({ email, phone, name });

  return res.status(created.success ? 200 : 400).json({
    success: created.success,
    data: created.data,
  });
};

export const getEditorials = async (req: Request, res: Response) => {
  const editorials = await getAllEditorials();
  res.status(200).json({ success: true, editorials });
};
