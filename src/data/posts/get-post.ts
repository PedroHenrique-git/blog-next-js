import { POSTS_URL } from '../../config/app-config';
import { PostData } from '../../domain/posts/post';
import fetchJson from '../../utils/featch-json';

export const getPost = async (slug: string | string[]) => {
  try {
    const slugString = Array.isArray(slug) ? slug[0] : slug;
    const url = `${POSTS_URL}?slug=${slugString}`;
    const jsonPost = await fetchJson<PostData[]>(url);
    return jsonPost;
  } catch (e) {
    throw new Error('error');
  }
};
