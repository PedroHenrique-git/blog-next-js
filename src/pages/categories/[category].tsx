import { GetServerSideProps } from 'next';
import { FunctionComponent } from 'react';
import HomePage from '../../containers/HomePage';
import { getAllPosts } from '../../data/posts/get-all-posts';
import { PostData } from '../../domain/posts/post';

type CategoryProps = {
  posts: PostData[];
  category: string;
};

const Category: FunctionComponent<CategoryProps> = ({
  posts,
  category,
}: CategoryProps) => {
  return <HomePage category={category} posts={posts} />;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const posts = await getAllPosts(
    `_sort=id:desc&_start=0&_limit=30&category.name_contains=${ctx.query.category}`,
  );
  return {
    props: { posts, category: ctx.query.category },
  };
};

export default Category;
