import { Router } from 'express';
import {
    getUserDataById,
    getUsers,
    getUsersAffilies,
    invalidUser,
} from '../services/controllers/user.ctrl';
import { schemaValidition } from '../services/middleware/schema.validate.midd';
import { verifyRole } from '../services/middleware/verify.role.midd';
import { verifySponsor } from '../services/middleware/verify.sponsor.midd';
import {
    verifyUserAccount,
    verifyUserID,
} from '../services/middleware/verify.user.midd';
import { isRoot, verifyToken } from '../services/middleware/verifyJwt.midd';
import {
    affiliesSchema,
    invalidUserSchema,
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
 *          idUser:
 *              in: path
 *              name: id
 *              required: true
 *              schema:
 *                  type: string
 *              description: ID del Subscriber | UserID del Moderator
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
 *          summary: El admin obtiene los usuarios por privilegio
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
 *          summary: El admin obtiene los afiliados por referencia
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

/**
 * @swagger
 *  /user/get/{id}:
 *      get:
 *          tags:
 *          - Users
 *          summary: El admin obtiene los datos del Subscriber || Moderator
 *          parameters:
 *          - $ref: '#/components/parameters/idUser'
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
    '/get/:id',
    verifyToken,
    isRoot,
    schemaValidition(userSchema),
    verifyUserID,
    getUserDataById
);

/**
 * @swagger
 *  /user/{id}:
 *      delete:
 *          tags:
 *          - Users
 *          summary: El admin invalida el usuario
 *          parameters:
 *          - $ref: '#/components/parameters/keyToken'
 *          - $ref: '#/components/parameters/idUser'
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
router.delete(
    '/:id',
    verifyToken,
    isRoot,
    schemaValidition(invalidUserSchema),
    verifyUserAccount,
    invalidUser
);

export default router;
