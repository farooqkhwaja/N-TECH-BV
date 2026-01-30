import { Router } from 'express';
import { ProductsController } from '../controllers/productsController';

const router = Router();

// Producten route
router.get('/', ProductsController.getProducts);

export default router;
