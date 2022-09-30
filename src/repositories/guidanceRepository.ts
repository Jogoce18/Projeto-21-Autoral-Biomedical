import { prisma } from '../database.js';
import { GuidanceData } from '../services/guidanceService.js';

async function create(projectId: number, guidance: GuidanceData) {
  return await prisma.guidance.create({
    data: {
      projectId,
      question: guidance.question,
      answer: guidance.answer
    }
  });
}

async function findMany(projectId: number) {
  return await prisma.guidance.findMany({
    where: {
      projectId
    }
  });
}

export default {
  create,
  findMany,
};