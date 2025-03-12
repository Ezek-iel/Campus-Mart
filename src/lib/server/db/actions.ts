import { db } from "./"
import { Seller, Product, User } from "./schema"
import {eq } from "drizzle-orm"

export async function getSellerInformation(id: number) {
    return { "seller": await db.select().from(Seller).where(eq(Seller.id, id)) };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function getProductsInformation(searchQuery: string = "") {
    // return { "products": await db.select().from(Product).where(like(Product.name, `%${searchQuery}%`)) }
    return await db.select().from(Product)
}

export async function getProductInformation(id: number){
    return db.select().from(Product).where(eq(Product.id, id))
}

export async function addProduct(){
    //! HACK This function has a lot to be implemented later on especially images
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function registerSeller(name: string, description: string){
    //! HACK This function has a lot to be implemented especially when the telegram api is being created
}

export async function registerUserInformation(emailAddress: string, matriculationNumber: string, chat_id: string){
    const userInfomation = await db.select().from(User).where(eq(User.chat_id, chat_id));
    
    if (!userInfomation) {
            await db.insert(User).values({chat_id, email: emailAddress, matric_no: matriculationNumber})
    }
}