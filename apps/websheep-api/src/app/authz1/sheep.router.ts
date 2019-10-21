import { Router } from 'express';
import { getFarmerSheepList } from '../shared/sheep/get-farmer-sheep-list';
import { addSheep } from '../shared/sheep/add-sheep';

export const sheepRouter = Router();

sheepRouter.get('/farmers/:farmerId/sheep', getFarmerSheepList);

sheepRouter.post('/sheep', addSheep);