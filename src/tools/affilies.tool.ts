import { RowDataPacket } from 'mysql2';
import { References } from '../services/models';

// Covert el helper en un middleware function(req, res)

const updateAffilities = async (affilies: RowDataPacket) => {
    return affilies;
};

export const affilies = async (userId: string, idAffilies: string) => {
    const affilies: string = JSON.stringify([{ idAffilies }]);

    const affiliesLast = <RowDataPacket>await References.searchSponsor(userId);
    if (affiliesLast.length === 0) return updateAffilities(affiliesLast);

    const result = await References.createdReference({ userId, affilies });
    return { result };
};
