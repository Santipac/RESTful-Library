import { prisma } from '..';

export const createEditorial = async ({ email, phone, name }: any) => {
  try {
    const created = await prisma.editorial.create({
      data: {
        email,
        phone,
        name,
      },
    });
    return { success: true, data: created };
  } catch (error) {
    console.log(error);
    return { success: false, data: 'No se pudo crear la editorial' };
  }
};

export const getAllEditorials = async () => {
  return await prisma.editorial.findMany();
};
