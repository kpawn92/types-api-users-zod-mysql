import { RowDataPacket } from 'mysql2';
import { References } from '../services/models';
import { Affilies } from '../types';

// Covert el helper en un middleware function(req, res)
// Analizar la posibilidad de guardar en memoria para que sea agil la ejecucion y sea eficiente la concurrencia
// Investigar redis.
/**
 * Inicio
 * Realizar la consulta una sola vez
 * Crear la tabla en redis y al terminar el proceso ejecutar un setTimeOut() para guardar los cambios en mysql
 */

const updateAffilities = async (
    userId: string,
    affiliesLast: RowDataPacket,
    idAffilies: string
) => {
    const last = JSON.parse(affiliesLast[0].affilies);
    const newAffilies: string = JSON.stringify([...last, { idAffilies }]);
    const updateAff: Affilies = {
        userId,
        affilies: newAffilies,
    };
    const result = await References.updateReference(updateAff);
    return result;
};

export const affilies = async (userId: string, idAffilies: string) => {
    const affilies: string = JSON.stringify([{ idAffilies }]);

    const affiliesLast = <RowDataPacket>await References.searchSponsor(userId);
    if (affiliesLast.length > 0)
        return updateAffilities(userId, affiliesLast, idAffilies);

    const result = await References.createdReference({ userId, affilies });
    console.log('render create reference');
    return { result };
};
