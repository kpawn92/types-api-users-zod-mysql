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
 *      parameters:
 *          keyToken:
 *              name: auth-token
 *              in: header
 *              description: Token de acceso
 *          Reference:
 *              in: path
 *              name: ref
 *              required: true
 *              schema:
 *                  type: string
 *              description: Nombre de usuario del sponsor
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
 *          BodyModeratorPost:
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
 *                  role:
 *                      type: string
 *                      description: Privilegio
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
 *                  role: moderator
 *          BodyLogin:
 *              type: object
 *              properties:
 *                  email:
 *                      type: string
 *                      description: Correo para acceder
 *                  password:
 *                      type: string
 *                      description: Contraseña para acceder
 *              required:
 *                  - email
 *                  - password
 *              example:
 *                  email: admin@admin.com
 *                  password: admin123456
 */

/**
 * @swagger
 *  /auth/register:
 *      post:
 *          tags:
 *          - Auth
 *          summary: El admin crea el registro del moderador
 *          parameters:
 *          - $ref: '#/components/parameters/keyToken'
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/BodyModeratorPost'
 *          required: true
 *          responses:
 *              200:
 *                  description: Usuario autorizado
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *              202:
 *                  description: Peticion aceptada
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
 *              404:
 *                  description: Usuario no encontrado
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
router.post(
    '/register',
    verifyToken,
    isRoot,
    schemaValidition(signUpSchema),
    verifyEmail,
    accountMod
);

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
 *          required: true
 *          responses:
 *              200:
 *                  description: Usuario autenticado
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

/**
 * @swagger
 *  /auth/signup/{ref}:
 *      post:
 *          tags:
 *          - Auth
 *          summary: Autenticacion por referencia
 *          parameters:
 *          - $ref: '#/components/parameters/Reference'
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/BodySubscriberPost'
 *          required: true
 *          responses:
 *              200:
 *                  description: Usuario autenticado
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
 *              404:
 *                  description: Usuario no encontrado
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
router.post(
    '/signup/:ref',
    schemaValidition(signUpSchema),
    verifyParams,
    verifyEmail,
    signup
);

/**
 * @swagger
 *  /auth/signin:
 *      post:
 *          tags:
 *          - Auth
 *          summary: Autorizacion
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/BodyLogin'
 *          responses:
 *              200:
 *                  description: Usuario autorizado
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
 *              404:
 *                  description: Usuario no encontrado
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

router.post('/signin', schemaValidition(signInSchema), signin);

/**
 * @swagger
 *  /auth/profile:
 *      get:
 *          tags:
 *          - Auth
 *          summary: Perfil del usuario
 *          parameters:
 *          - $ref: '#/components/parameters/keyToken'
 *          responses:
 *              200:
 *                  description: Usuario autorizado
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
 *              404:
 *                  description: Usuario no encontrado
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
router.get('/profile', verifyToken, profile);

export default router;
