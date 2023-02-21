import { Router } from 'express';
import {
    getUserDataById,
    getUsers,
    getUsersAffilies,
    updateUser,
} from '../services/controllers/user.ctrl';
import { schemaValidition } from '../services/middleware/schema.validate.midd';
import {
    affiliesSchema,
    userSchema,
    usersSchema,
} from '../services/schemas/user.schema';

const router: Router = Router();

// ###  Obtiene todos los referidos la query es opcional "month=num1-12"

/**
 * Obetener los datos del usuario por el id
 * Validar el id que se envia por params
 * Validar el mes que se envia por query que solo sea del 1-12
 * Ruta para invalidar usuario y/o modelator
 */

router.get('/', schemaValidition(usersSchema), getUsers);

router.get(
    '/affilies/:ref',
    schemaValidition(affiliesSchema),
    getUsersAffilies
);

router.get('/get/:id', schemaValidition(userSchema), getUserDataById);

router.patch('/:userId', updateUser);

export default router;
