import { Request, Response } from 'express';
import {
  createAuthor,
  deleteAuthor,
  getAllAuthors,
  getAuthor,
  updateAuthors,
} from '../services/authors.services';

export const createAuthors = async (req: Request, res: Response) => {
  const created = await createAuthor(req.body);

  return res.status(created.success ? 200 : 400).json({
    success: created.success,
    data: created.data,
  });
};

export const getAuthors = async (req: Request, res: Response) => {
  const authors = await getAllAuthors();
  res.status(authors.success ? 200 : 400).json({
    success: authors.success,
    data: authors.data,
  });
};

export const getAuthorById = async (req: Request, res: Response) => {
  const author = await getAuthor(Number(req.params.id));
  return res.status(author.success ? 200 : 400).json({
    success: author.success,
    data: author.data,
  });
};

export const deleteAuthorById = async (req: Request, res: Response) => {
  const deleted = await deleteAuthor(Number(req.params.id));
  return res.status(deleted.success ? 200 : 400).json({
    success: deleted.success,
    data: deleted.data,
  });
};

export const updateAuthorById = async (req: Request, res: Response) => {
  const updated = await updateAuthors(Number(req.params.id), req.body);
  return res.status(updated.success ? 200 : 400).json({
    success: updated.success,
    data: updated.data,
  });
};
