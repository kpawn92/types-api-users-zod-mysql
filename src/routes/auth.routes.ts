import { Router } from 'express';
import { signin, signup, profile } from '../services/controllers/auth.ctrl';
import { schemaValidition } from '../services/middleware/schema.validate.midd';
import { accountMod } from '../services/middleware/moderator.midd';
import { isRoot, verifyToken } from '../services/middleware/verifyJwt.midd';
import { signInSchema, signUpSchema } from '../services/schemas/auth.schema';
import { verifyEmail } from '../services/middleware/verify.email.midd';
import { verifyParams } from '../services/middleware/verify.params.midd';

const router: Router = Router();

//TODO: ➜ Cuantas vistas tiene la pagina
//TODO: ➜ Cuantos usuarios hay regitrados
//TODO: ➜ Cuantos usuarios estan online simultaneamente
//TODO: ➜ Registro de afiliados

router.post('/signup', schemaValidition(signUpSchema), verifyEmail, signup);

router.post(
    '/register',
    verifyToken,
    isRoot,
    schemaValidition(signUpSchema),
    verifyEmail,
    accountMod
);

router.post(
    '/signup/:ref',
    schemaValidition(signUpSchema),
    verifyParams,
    verifyEmail,
    signup
);

router.post('/signin', schemaValidition(signInSchema), signin);

router.get('/profile', verifyToken, profile);

export default router;
