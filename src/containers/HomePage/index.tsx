import Head from 'next/head';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import PostCard from '../../components/PostCard/PostCard';
import { SITE_NAME } from '../../config/app-config';
import { PostData } from '../../domain/posts/post';
import { Category, MainContainer } from './styles';

export type HomePageProps = {
  posts: PostData[];
  category?: string;
};

export default function HomePage({ posts, category }: HomePageProps) {
  return (
    <>
      <Head>
        <title>{SITE_NAME}</title>
        <meta name="description" content="blog made with next and strapi" />
      </Head>
      <Header />
      {category && <Category>Categoria: {category.toLowerCase()}</Category>}
      <MainContainer>
        {posts.map((post) => (
          <PostCard
            slug={post.slug}
            key={post.id}
            image={post.cover.formats.medium.url}
            title={post.title}
          />
        ))}
      </MainContainer>
      <Footer />
    </>
  );
}
