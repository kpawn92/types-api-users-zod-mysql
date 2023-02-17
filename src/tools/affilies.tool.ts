import { RowDataPacket } from 'mysql2';
import { References } from '../services/models';
import { Affilies } from '../types';

const updateAffilities = async (
    userId: string,
    affiliesLast: RowDataPacket,
    idAffilies: string
) => {
    const last = JSON.parse(affiliesLast[0].affilies);
    const newAffilies: string = JSON.stringify([
        ...last,
        { idAffilies, createdAt: new Date() },
    ]);
    const updateAff: Affilies = {
        userId,
        affilies: newAffilies,
    };
    const result = await References.updateReference(updateAff);
    console.log('render update reference');
    return result;
};

export const affilies = async (userId: string, idAffilies: string) => {
    const affilies: string = JSON.stringify([
        { idAffilies, createdAt: new Date() },
    ]);

    const affiliesLast = <RowDataPacket>await References.searchSponsor(userId);
    if (affiliesLast.length > 0)
        return updateAffilities(userId, affiliesLast, idAffilies);

    const result = await References.createdReference({ userId, affilies });
    console.log('render create reference');
    return { result };
};
