import {API_URL} from "../../config";

export const fetchAllAvailableUsers = async (itemsOnPage: number, page: number) => {
    if(page === 0) {
        page = 1;
    }

    if(itemsOnPage === 0) {
        itemsOnPage = 1;
    }

    const res = await fetch(`${API_URL}/user/all/active/${itemsOnPage}/${page}`, {
        method: 'GET',
        credentials: "include",
        mode: "cors"
    });
    return res.json();
}