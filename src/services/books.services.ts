import { prisma } from '..';

export const createBook = async ({
  title,
  synopsis,
  type,
  sellPrice,
  loanPrice,
  author,
}: any) => {
  try {
    const created = await prisma.book.create({
      data: {
        title,
        synopsis,
        type,
        sellPrice,
        loanPrice,
        authorId: author,
      },
    });

    return { success: true, data: created };
  } catch (error) {
    console.log(error);
    return { success: false, data: 'No se pudo crear el libro' };
  }
};
