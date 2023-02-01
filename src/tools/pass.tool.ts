import bcrypt from 'bcryptjs';

export const encryptPassword = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(10); // aplica un algoritmo de cifrado
    return await bcrypt.hash(password, salt);
};

export const comparePassword = async (
    password: string,
    receivedPassword: string
) => {
    return await bcrypt.compare(password, receivedPassword);
};
