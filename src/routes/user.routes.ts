import { Router } from 'express';
import { usersAffilies } from '../services/controllers/user.ctrl';
import { schemaValidition } from '../services/middleware/schema.validate.midd';
import { affiliesSchema } from '../services/schemas/user.schema';

const router: Router = Router();

/**
 * Cada usuario podra actualizar sus datos
 * El modelador obtiene sus afiliados
 * El admin obtiene todos los usuarios sean Moderator o Subscriber
 * El admin obtiene los affilies de cada moderator por mes
 */
router.get('/:ref', schemaValidition(affiliesSchema), usersAffilies);
export default router;
