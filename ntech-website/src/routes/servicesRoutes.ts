import { Router } from 'express';
import { ServicesController } from '../controllers/servicesController';

const router = Router();

// Diensten route
router.get('/', ServicesController.getServices);

export default router;
