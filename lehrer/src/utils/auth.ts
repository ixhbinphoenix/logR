import { randomBytes } from "crypto"
import { Token } from "../lib/Interfaces";

export async function genToken(): Promise<Token> {
    const token: Token = {
        token: randomBytes(128).toString("hex"),
        expires: (await addWeeks(2))
    }
    return token
}

async function addWeeks(weeks: number, date = new Date()): Promise<Date> {
    date.setDate(date.getDate() + weeks * 7)
    return date
}