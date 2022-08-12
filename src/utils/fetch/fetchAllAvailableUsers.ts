import {API_URL} from '../../config';

export const fetchAllAvailableUsers = async (
    itemsOnPage: number,
    page: number,
    id: string,
) => {
    const res = await fetch(
        `${API_URL}/hr/all/active/${id}/${itemsOnPage}/${page}`,
        {
            method: 'GET',
            credentials: 'include',
            mode: 'cors',
        }
    )

    return res.json();

};
