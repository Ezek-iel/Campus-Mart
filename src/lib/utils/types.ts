export type Seller = {
    name: string;
    id: number;
    description: string;
    chat_id: string;
    telegram_url: string;
    matric_no: string;
    email: string;
}


export type Product  = {
    id: number;
    name: string;
    price: number;
    description: string | null;
    images: unknown;
}