import { Request, Response } from 'express';

import {
  createUser,
  deleteUserById,
  getAllUsers,
  getUserById,
  updateUserById,
} from '../services/users.services';

export const createUsers = async (req: Request, res: Response) => {
  const { email, profile } = req.body;
  const { firstname, lastname, dni, phone, address } = profile;
  const { street, number, zipCode, city, floor, apartment } = address;
  const user = await createUser({
    email,
    profile: {
      firstname,
      lastname,
      dni,
      phone,
      address: {
        street,
        number,
        zipCode,
        city,
        floor,
        apartment,
      },
    },
  });
  res.status(user.success ? 200 : 400).json({
    ok: user.success,
    createdUser: user.data,
  });
};

export const getOneUser = async (req: Request, res: Response) => {
  const uid = req.params.id;
  const user = await getUserById(uid);
  return res.status(user.success ? 200 : 400).json({
    success: user.success,
    data: user.data,
  });
};

export const getUsers = async (req: Request, res: Response) => {
  const users = await getAllUsers();
  return res.status(users.success ? 200 : 400).json({
    success: users.success,
    data: users.data,
  });
};

export const updateUser = async (req: Request, res: Response) => {
  const updatedUser = await updateUserById(req.params.id, req.body);
  return res.status(updatedUser.success ? 200 : 400).json({
    success: updatedUser.success,
    data: updatedUser.data,
  });
};

export const deleteUser = async (req: Request, res: Response) => {
  const uid = req.params.id;
  const userDeleted = await deleteUserById(uid);
  return res.status(userDeleted.success ? 200 : 400).json({
    success: userDeleted.success,
    data: userDeleted.data,
  });
};
