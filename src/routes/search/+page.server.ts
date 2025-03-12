import type { PageServerLoad } from "./$types";
import { getProductsInformation } from "$lib/server";

export const load: PageServerLoad = async function () {
    return { 'products': await getProductsInformation() }
}