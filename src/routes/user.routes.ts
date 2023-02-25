import { Router } from 'express';
import {
    getUserDataById,
    getUsers,
    getUsersAffilies,
    updateUser,
} from '../services/controllers/user.ctrl';
import { schemaValidition } from '../services/middleware/schema.validate.midd';
import { verifyRole } from '../services/middleware/verify.role.midd';
import { verifySponsor } from '../services/middleware/verify.sponsor.midd';
import { isRoot, verifyToken } from '../services/middleware/verifyJwt.midd';
import {
    affiliesSchema,
    userSchema,
    usersSchema,
} from '../services/schemas/user.schema';

const router: Router = Router();

/**
 * @swagger
 *  tags:
 *      name: Users
 *      description: Rutas para manejar informacion relacionada con los usuarios
 */

/**
 * @swagger
 *  components:
 *      parameters:
 *          Roles:
 *              in: query
 *              name: role
 *              required: true
 *              schema:
 *                  type: string
 *              description: Privilegio del usuario
 *          idReference:
 *              in: path
 *              name: ref
 *              required: true
 *              schema:
 *                  type: string
 *              description: Id del sponsor
 *          Month:
 *              in: query
 *              name: month
 *              schema:
 *                  type: string
 *              description: Index del mes para obtener los afiliados ingresados
 */

/**
 * @swagger
 *  /user:
 *      get:
 *          tags:
 *          - Users
 *          summary: El admin obtiene los usuarios por privilegios
 *          parameters:
 *          - $ref: '#/components/parameters/Roles'
 *          - $ref: '#/components/parameters/keyToken'
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
router.get(
    '/',
    verifyToken,
    isRoot,
    schemaValidition(usersSchema),
    verifyRole,
    getUsers
);

/**
 * @swagger
 *  /user/affilies/{ref}:
 *      get:
 *          tags:
 *          - Users
 *          summary: El admin obtiene los usuarios por privilegios
 *          parameters:
 *          - $ref: '#/components/parameters/idReference'
 *          - $ref: '#/components/parameters/Month'
 *          - $ref: '#/components/parameters/keyToken'
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
 *              406:
 *                  description: No se encuentra ningun contenido segun lo solicitado
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
router.get(
    '/affilies/:ref',
    verifyToken,
    isRoot,
    schemaValidition(affiliesSchema),
    verifySponsor,
    getUsersAffilies
);

// El admin los datos del usuario con el role con query en la url
router.get('/get/:id', schemaValidition(userSchema), getUserDataById);

// El usuario actualiza la contraseña
router.patch('/:userId', updateUser);

// El admin invalida el usuario
router.delete('/:userId', updateUser);

export default router;
