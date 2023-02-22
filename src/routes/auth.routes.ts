import { Router } from 'express';
import { signin, signup, profile } from '../services/controllers/auth.ctrl';
import { schemaValidition } from '../services/middleware/schema.validate.midd';
import { accountMod } from '../services/middleware/moderator.midd';
import { isRoot, verifyToken } from '../services/middleware/verifyJwt.midd';
import { signInSchema, signUpSchema } from '../services/schemas/auth.schema';
import { verifyEmail } from '../services/middleware/verify.email.midd';
import { verifyParams } from '../services/middleware/verify.params.midd';

const router: Router = Router();

/**
 * @swagger
 *  tags:
 *      name: Auth
 *      description: Rutas para manejar informacion relacionada con autenticacion y autorizacion de los usuarios
 */

/**
 * @swagger
 *  components:
 *      schemas:
 *          BodySubscriberPost:
 *              type: object
 *              properties:
 *                  name:
 *                      type: string
 *                      description: Nombre(s) del usuario
 *                  lastname:
 *                      type: string
 *                      description: Apellidos del usuario
 *                  email:
 *                      type: string
 *                      description: correo electronico del usuario, debe ser unico
 *                  password:
 *                      type: string
 *                      description: Contraseña del usuario min_caracteres 6
 *              required:
 *                  - name
 *                  - lastname
 *                  - email
 *                  - password
 *              example:
 *                  name: Francisco
 *                  lastname: T. Schulz
 *                  email: franc@gmail.com
 *                  password: test123456
 */

/**
 * @swagger
 *  /auth/signup:
 *      post:
 *          tags:
 *          - Auth
 *          summary: Autenticacion para acceder
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/BodySubscriberPost'
 *          responses:
 *              200:
 *                  description: Usuario creado
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *              400:
 *                  description: Solicitud incorrecta
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *              500:
 *                  description: Error interno servidor
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 */
router.post('/signup', schemaValidition(signUpSchema), verifyEmail, signup);

// El admin crea los moderators
router.post(
    '/register',
    verifyToken,
    isRoot,
    schemaValidition(signUpSchema),
    verifyEmail,
    accountMod
);

// El usuario se crea la cuenta por referencia
router.post(
    '/signup/:ref',
    schemaValidition(signUpSchema),
    verifyParams,
    verifyEmail,
    signup
);

//TODO: Validar el id && que el state sea activo
router.post('/signin', schemaValidition(signInSchema), signin);

// El usuario obtiene su perfil
router.get('/profile', verifyToken, profile);

export default router;
