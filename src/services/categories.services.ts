import { prisma } from '..';

export const createCategory = async ({ name, description }: any) => {
  try {
    const created = await prisma.category.create({
      data: {
        name,
        description,
      },
    });
    return { success: true, data: created };
  } catch (error) {
    console.log(error);
    return { success: false, data: 'No se pudo crear la categoria.' };
  }
};

export const getAllCategories = async () => {
  const categories = await prisma.category.findMany();
  return categories;
};
