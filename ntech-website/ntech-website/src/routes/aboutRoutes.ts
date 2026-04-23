import { Router } from 'express';
import { AboutController } from '../controllers/aboutController';

const router = Router();

// Over Ons route
router.get('/', AboutController.getAbout);

export default router;
