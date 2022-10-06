import app from '../../src/app.js';
import supertest from 'supertest';
import { userBodyFactory } from '../factories/userBodyFactory.js';
import { userFactory } from '../factories/userFactory.js';
import { prisma } from '../../src/database.js';

async function truncateUsers() {
  await prisma.$executeRaw`TRUNCATE TABLE users CASCADE`;
}

async function disconnect() {
  await prisma.$disconnect();
}

describe('🌱 ~ POST /signup', () => {
  beforeEach(truncateUsers);
  afterAll(disconnect);

  it('✨ 201 ~ Sucess create a new account - CREATED', async () => {
    const user = userBodyFactory();

    const createdUser = await supertest(app).post('/sign-up').send(user);
    const selectCreatedUser = await prisma.user.findFirst({
      where: {
        email: user.email
      }
    });

    expect(createdUser.status).toEqual(201);
    expect(selectCreatedUser.email).toEqual(user.email);
  });

  it('✨ 422 ~ Fail create a new account - UNPROCESSABLE', async () => {
    const user = userBodyFactory();
    const userWithoutName = {
      ...user,
      name: ''
    };

    const response = await supertest(app).post('/sign-up').send(userWithoutName);

    expect(response.status).toEqual(422);
  });

  it('✨ 422 ~ Fail create a new account - UNPROCESSABLE', async () => {
    const user = userBodyFactory();
    const userWithoutEmail = {
      ...user,
      email: ''
    };

    const response = await supertest(app).post('/sign-up').send(userWithoutEmail);

    expect(response.status).toEqual(422);
  });

  it('✨ 422 ~ Fail create a new account - UNPROCESSABLE', async () => {
    const user = userBodyFactory();
    const userWithoutPassword = {
      ...user,
      password: ''
    };

    const response = await supertest(app).post('/sign-up').send(userWithoutPassword);

    expect(response.status).toEqual(422);
  });
});

describe('🌱 ~ POST /signin', () => {
  beforeEach(truncateUsers);
  afterAll(disconnect);

  it('✨ 200 ~ Sucess login - OK', async () => {
    const user = userBodyFactory();
    await userFactory(user);

    const loginResponse = await supertest(app).post('/sign-in').send({ email: user.email, password: user.password });

    expect(loginResponse.status).toEqual(200);
  });

  it('✨ 422 ~ Fail create a new account - UNPROCESSABLE', async () => {
    const user = userBodyFactory();
    await userFactory(user);

    const loginResponse = await supertest(app).post('/sign-in').send({ email: '', password: user.password });

    expect(loginResponse.status).toEqual(422);
  });

  it('✨ 422 ~ Fail create a new account - UNPROCESSABLE', async () => {
    const user = userBodyFactory();
    await userFactory(user);

    const loginResponse = await supertest(app).post('/sign-in').send({ email: user.email, password: '' });

    expect(loginResponse.status).toEqual(422);
  });

});