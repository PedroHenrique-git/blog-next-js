import { POSTS_URL } from '../../config/app-config';
import { PostData } from '../../domain/posts/post';
import fetchJson from '../../utils/featch-json';

export const getAllPosts = async () => {
  try {
    const posts = await fetchJson<PostData[]>(POSTS_URL);
    return posts;
  } catch (e) {
    throw new Error('error');
  }
};
