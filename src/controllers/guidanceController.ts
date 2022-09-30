import { Request, Response } from 'express';
import guidanceService from '../services/guidanceService.js';
 
async function create(req: Request, res: Response) {
  const { projectId } = req.params;
  const guidance = req.body;

  await guidanceService.create(parseInt(projectId), guidance);

  res.sendStatus(201);
}

async function findMany(req: Request, res: Response) {
  const { projectId } = req.params;

  const guidances = await guidanceService.findMany(parseInt(projectId));

  res.send(guidances).status(200);
} 

export default {
  create,
  findMany,
};