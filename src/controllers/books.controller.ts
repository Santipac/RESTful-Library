import { Request, Response } from 'express';
import {
  createBook,
  deleteBook,
  getAllBooks,
  getOneBook,
  updateBook,
} from '../services/books.services';

export const createBooks = async (req: Request, res: Response) => {
  const {
    title,
    synopsis,
    type,
    sellPrice,
    loanPrice,
    author,
    categories,
    editorials,
  } = req.body;
  const created = await createBook({
    title,
    synopsis,
    type,
    sellPrice,
    loanPrice,
    author,
    categories,
    editorials,
  });
  return res.status(created.success ? 200 : 400).json({
    success: created.success,
    data: created.data,
  });
};

export const getBooks = async (req: Request, res: Response) => {
  const books = await getAllBooks();
  return res.status(books.success ? 200 : 400).json({
    success: books.success,
    data: books.data,
  });
};
export const getBookById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const book = await getOneBook(Number(id));
  return res.status(book.success ? 200 : 400).json({
    success: book.success,
    data: book.data,
  });
};

export const updateBooks = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updated = await updateBook(Number(id), req.body);
  return res.status(updated.success ? 200 : 400).json({
    success: updated.success,
    data: updated.data,
  });
};
export const deleteBooks = async (req: Request, res: Response) => {
  const { id } = req.params;
  const deleted = await deleteBook(Number(id));
  return res.status(deleted.success ? 200 : 400).json({
    success: deleted.success,
    data: deleted.data,
  });
};
