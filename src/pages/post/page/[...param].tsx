import type { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';
import HomePage from '../../../containers/HomePage';
import { countAllPosts } from '../../../data/posts/count-all-posts';
import { getAllPosts } from '../../../data/posts/get-all-posts';
import { PaginationData } from '../../../domain/posts/pagination';
import { PostData } from '../../../domain/posts/post';

type PageProps = {
  posts: PostData[];
  category?: string;
  pagination: PaginationData;
};

const Page: FunctionComponent<PageProps> = ({
  posts,
  category,
  pagination,
}) => {
  const router = useRouter();

  if (router.isFallback) return <div>Página carregando...</div>;
  if (posts.length === 0) return <div>Página não encontrada...</div>;

  return <HomePage posts={posts} category={category} pagination={pagination} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const page = Number(ctx.params!.param![0]);
  const category = ctx.params!.param![1] || '';
  const postsPerPage = 3;
  const startFrom = (page - 1) * postsPerPage;

  const nextPage = page + 1;
  const previousPage = page - 1;

  const categoryQuery = category ? `&category.name_contains=${category}` : '';

  const posts = await getAllPosts(
    `_sort=id:desc&_start=${startFrom}&_limit=${postsPerPage}${categoryQuery}`,
  );

  const numberOfPosts = Number(await countAllPosts(categoryQuery));

  const pagination: PaginationData = {
    nextPage,
    numberOfPosts,
    postsPerPage,
    previousPage,
    category,
  };

  return {
    props: { posts, pagination, category },
    revalidate: 600,
  };
};

export default Page;
