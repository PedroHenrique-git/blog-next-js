import type { GetStaticProps } from 'next';
import { FunctionComponent } from 'react';
import HomePage from '../containers/HomePage';
import { getAllPosts } from '../data/posts/get-all-posts';
import { PostData } from '../domain/posts/post';

type HomeProps = {
  posts: PostData[];
};

const Home: FunctionComponent<HomeProps> = ({ posts }) => {
  return <HomePage posts={posts} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts('_sort=id:desc&_start=0&_limit=30');
  return {
    props: { posts },
  };
};

export default Home;
