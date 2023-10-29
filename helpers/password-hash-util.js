import { hash, compare } from "bcryptjs";

export async function hashPassword(pass) {
    const hashedPassword = await hash(pass, 12)
    return hashedPassword
}

export async function verifyPassword(pass, hashedpass) {
    const isValid = await compare(pass, hashedpass)
    return isValid
}
