import { Router } from 'express';
import { signin, signup, profile } from '../services/controllers/auth.ctrl';
import {
    validateBodyAuth,
    validateLogin,
} from '../services/middleware/auth.midd';
import { accountMod } from '../services/middleware/moderator.midd';
import { isRoot, tokenValidation } from '../services/middleware/verifyJwt.midd';

const router: Router = Router();

router.post('/signup', validateBodyAuth, signup);

router.post('/register', tokenValidation, isRoot, validateBodyAuth, accountMod);

router.post('/signup/:ref', signup);

router.post('/signin', validateLogin, signin);

router.get('/profile', profile);

export default router;
