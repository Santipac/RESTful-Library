import { prisma } from '..';

export const createCategory = async (data: any) => {
  try {
    const { bookID, ...restData } = data;

    const categoryBook = !!bookID
      ? {
          create: [
            {
              book: {
                connect: {
                  id: bookID,
                },
              },
            },
          ],
        }
      : {};

    const categories = await prisma.category.create({
      data: {
        ...restData,
        books: categoryBook,
      },
    });

    return { success: true, data: categories };
  } catch (error) {
    console.log({ error });
    return { sucess: false, data: 'Hubo un error' };
  }
};

export const getAllCategories = async () => {
  const categories = await prisma.category.findMany();
  return categories;
};

export const deleteCategory = async (id: any) => {
  try {
    const deleted = await prisma.category.delete({ where: { id } });

    return { success: true, deleted };
  } catch (error) {
    return { sucess: false, error: 'Hubo un error' };
  }
};
