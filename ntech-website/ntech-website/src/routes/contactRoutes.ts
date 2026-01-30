import { Router } from 'express';
import { ContactController } from '../controllers/contactController';

const router = Router();

// Contact routes
router.get('/', ContactController.getContact);
router.post('/', ContactController.postContact);

export default router;
