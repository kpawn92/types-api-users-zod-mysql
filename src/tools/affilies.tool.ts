import { RowDataPacket } from 'mysql2';
import { References } from '../services/models';
import { Affilies } from '../types';

//TODO: agregar fecha timestap createdAt al json de los afiliados
//TODO: hacer los test para las rutas
//TODO: seguir valorando la cache

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
