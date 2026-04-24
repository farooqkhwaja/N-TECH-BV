import { Router } from 'express';
import { EntecServicesController } from '../controllers/entecServicesController';

const router = Router();

// Entec Services route
router.get('/', EntecServicesController.getEntecServices);

export default router;
