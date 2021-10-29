import { POSTS_URL } from '../../config/app-config';
import fetchJson from '../../utils/featch-json';

export const countAllPosts = async (query = '') => {
  try {
    const url = `${POSTS_URL}/count?${query}`;
    const numberOfPosts = await fetchJson<string>(url);
    return numberOfPosts;
  } catch (e) {
    throw new Error('error');
  }
};
