import { prisma } from '../../src/database.js';
import { CreateUserData } from '../../src/services/authService.js';
import { hashData } from '../../src/utils/hashDataUtils.js';

export async function userFactory(user: CreateUserData) {
  await prisma.user.create({
    data:
    {
      ...user,
      password: hashData(user.password)
    }
  });
}