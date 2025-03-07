import { db } from "../db"
import { Seller } from "../db/schema"

export async function getSellersInformation() {
    return { "sellers": await db.select().from(Seller) };
}