import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import config from './config/config';
import { PrismaClient } from '@prisma/client';
import userRoutes from './routes/users.routes';
import authorRoutes from './routes/authors.routes';
import bookRoutes from './routes/books.routes';
import editorialsRoutes from './routes/editorials.routes';
import categoriesRoutes from './routes/categories.routes';

export const prisma = new PrismaClient();

const server = express();

server.use(cors());
server.use(express.json());

server.use('/users', userRoutes);
server.use('/authors', authorRoutes);
server.use('/books', bookRoutes);
server.use('/editorials', editorialsRoutes);
server.use('/categories', categoriesRoutes);

server.listen(config.PORT, () => {
  console.log('🚀Server listening on port 3001');
});
