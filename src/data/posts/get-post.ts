import { POSTS_URL } from '../../config/app-config';
import { PostData } from '../../domain/posts/post';
import fetchJson from '../../utils/featch-json';
import { markDownToHtml } from '../../utils/markdown-to-html';

export const getPost = async (slug: string | string[]) => {
  try {
    const slugString = Array.isArray(slug) ? slug[0] : slug;
    const url = `${POSTS_URL}?slug=${slugString}`;
    const jsonPost = await fetchJson<PostData[]>(url);

    if (!jsonPost.length) return jsonPost;

    const content = await markDownToHtml(jsonPost[0].content);
    const finalContent = { ...jsonPost[0], content };
    return [finalContent];
  } catch (e) {
    throw new Error('error');
  }
};
