import { Router } from 'express';
import { HomeController } from '../controllers/homeController';

const router = Router();

// Home route
router.get('/', HomeController.getHome);

export default router;
