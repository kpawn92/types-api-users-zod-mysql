import { Router } from 'express';
import { signin, signup, profile } from '../services/controllers/auth.ctrl';
import {
    validateBodyAuth,
    validateLogin,
} from '../services/middleware/auth.midd';

const router: Router = Router();

router.post('/signup', validateBodyAuth, signup);
router.post('/signin', validateLogin, signin);
router.post('/signup/:ref', signup);
router.get('/profile', profile);

export default router;
