import { Router } from 'express';
import BrandController from '../controllers/brandController.js';

const router = Router();
router.post('/', BrandController.create);
router.get('/', BrandController.getAll);

export default router;