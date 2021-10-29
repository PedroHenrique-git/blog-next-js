import { POSTS_URL } from '../../config/app-config';
import { PostData } from '../../domain/posts/post';
import fetchJson from '../../utils/featch-json';

export const getAllPosts = async (query = '') => {
  try {
    const url = `${POSTS_URL}?${query}`;
    const posts = await fetchJson<PostData[]>(url);
    return posts;
  } catch (e) {
    throw new Error('error');
  }
};
