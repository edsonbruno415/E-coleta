import express, { response, request } from 'express';
import knex from './database/connection';

import PointsController from './controllers/PointsController';
const pointsController = new PointsController();

import ItemsController from './controllers/ItemsController';
const itemsController = new ItemsController();

const router = express.Router();

router.get('/items', itemsController.index);

router.post('/points', pointsController.create);
router.get('/points/:id', pointsController.show);
router.get('/points', pointsController.index);


export default router;