import { RowDataPacket } from 'mysql2';
import { References } from '../services/models';

export const affilies = async (userId: string, idAffilies: string) => {
    const affilies: string = JSON.stringify([{ idAffilies }]);
    const affiliesLast = <RowDataPacket>await References.searchSponsor(userId);
    if (affiliesLast.length > 0) return; // actualizar;
    const result = await References.createdReference({ userId, affilies });
    return { result };
};
