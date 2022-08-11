import {API_URL} from '../../config';

export const fetchAllToTalkUsers = async (
  itemsOnPage: number,
  page: number,
  id: string
) => {
  const res = await fetch(
    `${API_URL}/hr/interested/${id}/${itemsOnPage}/${page}`,
    {
      method: 'GET',
      credentials: 'include',
      mode: 'cors',
    }
  );
  return res.json();
};
