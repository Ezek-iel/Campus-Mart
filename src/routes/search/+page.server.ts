//? import type {PageLoad} from "./$types

import { getSellersInformation } from "$lib"

export const load =  function () {
    return  getSellersInformation();
}