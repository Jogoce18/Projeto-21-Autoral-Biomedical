import { Guidance } from '@prisma/client';
import briefingRepository from '../repositories/guidanceRepository.js';
import { notFoundError } from '../utils/errorUtils.js';

export type GuidanceData = Omit<Guidance, 'id' | 'projectId'>

async function create(projectId: number, guidance: GuidanceData) {
  return await briefingRepository.create(projectId, guidance);
}

async function findMany(projectId: number) {
  const guidances = await briefingRepository.findMany(projectId);

  if(!guidances) {
    throw notFoundError('Não existem  orientações para esse mantenimento');
  }

  return guidances;
}

export default {
  create,
  findMany,
};