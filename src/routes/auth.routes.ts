import { Router } from 'express';
import { signin, signup, profile } from '../services/controllers/auth.ctrl';

const router: Router = Router();

router.post('/signup', signup);
router.post('/signup/:ref', signup);
router.post('/signin', signin);
router.get('/profile', profile);

export default router;
