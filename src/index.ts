import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import userRoutes from './routes/users.routes';
export const prisma = new PrismaClient();

const server = express();

server.use(cors());
server.use(express.json());

server.use('/users', userRoutes);

server.listen(process.env.PORT || 2003, () => {
  console.log('🚀Server listening on port 3001');
});
