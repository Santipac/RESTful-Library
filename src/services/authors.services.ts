import { prisma } from '..';

export const createAuthor = async (data: any) => {
  try {
    const author = await prisma.author.create({ data: { ...data } });
    return { success: true, data: author };
  } catch (error) {
    console.log(error);
    return { success: false, data: 'No se pudo crear el author' };
  }
};

export const getAllAuthors = async () => {
  try {
    const authors = await prisma.author.findMany({
      include: {
        books: true,
      },
    });
    return { success: true, data: authors };
  } catch (error) {
    console.log(error);
    return { success: false, data: 'No se pudo obtener a los autores.' };
  }
};

export const getAuthor = async (id: number) => {
  try {
    const author = await prisma.author.findUnique({
      where: { id },
    });
    return { success: true, data: author };
  } catch (error) {
    console.log(error);
    return { success: false, data: 'No se pudo encontrar al autor.' };
  }
};

export const updateAuthors = async (id: number, data: any) => {
  try {
    const updated = await prisma.author.update({
      where: { id },
      data: { ...data },
    });
    return { success: true, data: updated };
  } catch (error) {
    console.log(error);
    return { success: false, data: 'No se pudieron actualizar los datos.' };
  }
};

export const deleteAuthor = async (id: number) => {
  try {
    const author = await prisma.author.delete({
      where: { id },
    });
    return { success: true, data: author };
  } catch (error) {
    return { success: false, data: 'No se pudo eliminar el autor.' };
  }
};
