import { prisma } from '..';

export const createBook = async ({
  title,
  synopsis,
  type,
  sellPrice,
  loanPrice,
  author,
  categories,
  editorials,
}: any) => {
  try {
    const created = await prisma.book.create({
      data: {
        title,
        synopsis,
        type,
        sellPrice,
        loanPrice,
        author: {
          connect: { id: author },
        },
        // categories: {
        //   connect: categories.map((category: any) => ({ id: category })),
        // },
      },
      select: {
        title: true,
        synopsis: true,
        type: true,
        sellPrice: true,
        loanPrice: true,
        author: {
          select: {
            name: true,
            id: true,
          },
        },
      },
    });

    return { success: true, data: created };
  } catch (error) {
    console.log(error);
    return { success: false, data: 'No se pudo crear el libro' };
  }
};

export const getAllBooks = async () => {
  try {
    const books = await prisma.book.findMany({
      select: {
        id: true,
        title: true,
        synopsis: true,
        type: true,
        loanPrice: true,
        sellPrice: true,
        author: true,
        editorials: {
          select: {
            editorial: true,
            stock: true,
          },
        },
        categories: true,
      },
    });
    return { success: true, data: books };
  } catch (error) {
    console.log({ error });
    return { sucess: false, data: 'No se pudieron obtener los libros' };
  }
};

export const getOneBook = async (id: number) => {
  try {
    const book = await prisma.book.findUnique({
      where: { id },
      include: {
        author: true,
        categories: true,
      },
    });
    return { success: true, data: book };
  } catch (error) {
    console.log({ error });
    return { sucess: false, data: 'No se pudo obtener el libro' };
  }
};

export const updateBook = async (id: number, data: any) => {
  try {
    const updated = await prisma.book.update({
      where: { id },
      data,
      select: {
        id: true,
        title: true,
        synopsis: true,
        type: true,
        loanPrice: true,
        sellPrice: true,
        author: true,
        editorials: {
          select: {
            editorial: true,
            stock: true,
          },
        },
        categories: true,
      },
    });
    return { success: true, data: updated };
  } catch (error) {
    console.log({ error });
    return { sucess: false, data: 'No se pudo actualizar el libro' };
  }
};

export const deleteBook = async (id: number) => {
  try {
    const deleted = await prisma.book.delete({
      where: { id },
    });
    return { success: true, data: deleted };
  } catch (error) {
    console.log({ error });
    return { sucess: false, data: 'No se pudo eliminar el libro' };
  }
};
