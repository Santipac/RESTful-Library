import { Request, Response } from 'express';
import {
  createCategory,
  getAllCategories,
} from '../services/categories.services';

export const createCategories = async (req: Request, res: Response) => {
  const { description, name } = req.body;
  const created = await createCategory({ description, name });
  return res.status(created.success ? 200 : 400).json({
    success: created.success,
    data: created.data,
  });
};

export const getCategories = async (req: Request, res: Response) => {
  const categories = await getAllCategories();
  return res.status(200).json({
    success: true,
    categories,
  });
};
