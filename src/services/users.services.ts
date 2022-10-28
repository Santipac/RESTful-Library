import { prisma } from '..';
import { UserRoles } from '../entities/User/user.enum';

export const createUser = async ({ email, profile }: any) => {
  try {
    const { firstname, lastname, dni, phone, address } = profile;
    const { street, number, zipCode, city, floor, apartment } = address;
    const createdUser = await prisma.user.create({
      data: {
        balance: 0,
        role: UserRoles.CLIENT,
        email,
        profile: {
          create: {
            firstname,
            lastname,
            dni,
            phone,
            address: {
              create: {
                street,
                number,
                zipCode,
                city,
                floor,
                apartment,
              },
            },
          },
        },
      },
      select: {
        email: true,
        role: true,
        profile: {
          select: {
            firstname: true,
            lastname: true,
            dni: true,
            phone: true,
            address: {
              select: {
                street: true,
                number: true,
                zipCode: true,
                city: true,
                floor: true,
                apartment: true,
              },
            },
          },
        },
      },
    });
    console.log(createdUser);
    return { success: true, data: createdUser };
  } catch (error) {
    console.log(error);
    return { success: false, data: 'No se pudo crear el usuario.' };
  }
};

export const getUserById = async (uid: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: uid,
      },
    });
    return { success: true, data: user };
  } catch (error) {
    return { success: false, data: 'No se pudo encontrar el usuario.' };
  }
};

export const getAllUsers = async () => {
  try {
    const users = await prisma.user.findMany({
      include: {
        profile: {
          select: {
            firstname: true,
            lastname: true,
            dni: true,
            phone: true,
            address: {
              select: {
                street: true,
                number: true,
                zipCode: true,
                city: true,
                floor: true,
                apartment: true,
              },
            },
          },
        },
      },
    });
    return { success: true, data: users };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      data: 'No se pudieron encontraron los usuarios.',
    };
  }
};

export const updateUserById = async (id: string, data: any) => {
  try {
    const updatedUser = await prisma.user.update({
      where: {
        id,
      },
      data,
    });
    console.log(updatedUser);
    return { success: true, data: updatedUser };
  } catch (error) {
    console.log(error);
    return { success: false, data: 'No se pudo actualizar el Usuario.' };
  }
};

export const deleteUserById = async (uid: string) => {
  try {
    const deletedUser = await prisma.user.delete({
      where: {
        id: uid,
      },
    });
    return { success: true, data: deletedUser };
  } catch (error) {
    console.log(error);
    return { success: false, data: 'No se pudo eliminar el Usuario' };
  }
};
