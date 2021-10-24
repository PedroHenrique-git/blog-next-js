import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import PostCard from '../../components/PostCard/PostCard';
import { PostData } from '../../domain/posts/post';
import { MainContainer } from './styles';

export type HomePageProps = {
  posts: PostData[];
};

export default function HomePage({ posts }: HomePageProps) {
  return (
    <>
      <Header />
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
