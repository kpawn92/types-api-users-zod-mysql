import { Router } from 'express';
import { signin, signup, profile } from '../services/controllers/auth.ctrl';
import { schemaValidition } from '../services/middleware/schema.validate.midd';
import { accountMod } from '../services/middleware/moderator.midd';
import { isRoot, verifyToken } from '../services/middleware/verifyJwt.midd';
import { signInSchema, signUpSchema } from '../services/schemas/auth.schema';

const router: Router = Router();

router.post('/signup', schemaValidition(signUpSchema), signup);

router.post(
    '/register',
    verifyToken,
    isRoot,
    schemaValidition(signUpSchema),
    accountMod
);

router.post('/signup/:ref', schemaValidition(signUpSchema), signup);

router.post('/signin', schemaValidition(signInSchema), signin);

router.get('/profile', profile);

export default router;
