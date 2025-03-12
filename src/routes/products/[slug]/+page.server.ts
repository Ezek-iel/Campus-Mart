import { getProductInformation } from "$lib/server"
import type { PageServerLoad } from "./$types"
import { redirect, error} from "@sveltejs/kit"


export const load: PageServerLoad = async function ({ params }) {
    const { slug } = params

    if (slug === 'create') {
        redirect(302, '/products/create')
    }

    const product = await getProductInformation(parseInt(slug))

    if (product.length == 0){
        return error(404, "Product not found")
    }

    return {'product' : product[0]}
}