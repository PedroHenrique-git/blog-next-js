import type { GetStaticProps } from 'next';
import { FunctionComponent } from 'react';
import { PostData } from '../domain/posts/post';

const getData = async (): Promise<PostData[]> => {
  try {
    const request = await fetch(process.env.NEXT_PUBLIC_URL);
    const data: PostData[] = await request.json();

    return data;
  } catch (e) {
    throw new Error('error');
  }
};

type HomeProps = {
  posts: PostData[];
};

const Home: FunctionComponent<HomeProps> = ({ posts }) => {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getData();

  return {
    props: { posts },
  };
};

export default Home;
