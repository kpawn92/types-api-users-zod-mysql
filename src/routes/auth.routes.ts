import { Router } from 'express';
import { signin, signup, profile } from '../services/controllers/auth.ctrl';
import { validateBodyAuth } from '../services/middleware/auth.midd';

const router: Router = Router();

router.post('/signup', validateBodyAuth, signup);
router.post('/signup/:ref', signup);
router.post('/signin', signin);
router.get('/profile', profile);

export default router;
