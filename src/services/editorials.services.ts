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

export const getOneById = async (id: any) => {
  try {
    const editorial = await prisma.editorial.findUnique({ where: { id } });
    return { success: true, data: editorial };
  } catch (error) {
    console.log({ error });
    return { success: false, data: 'Hubo un error' };
  }
};

export const updateEditorial = async (id: any, data: any) => {
  try {
    const editorial = prisma.editorial.findUnique({
      where: { id },
    });
    if (!editorial) {
      throw Error();
    }
    const modified = await prisma.editorial.update({
      where: { id },
      data: { ...data },
    });
    return { success: true, data: modified };
  } catch (error) {
    console.log({ error });
    return { success: false, data: 'Hubo un error' };
  }
};

export const deleteEditorial = async (id: any) => {
  try {
    const deleteUser = await prisma.editorial.delete({ where: { id } });
    return { success: true, data: deleteUser };
  } catch (error) {
    console.log({ error });
    return { success: false, data: 'Hubo un error' };
  }
};
