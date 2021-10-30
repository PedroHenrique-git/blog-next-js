import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Heading from '../../components/Heading';
import PostCover from '../../components/PostCover';
import { PostData } from '../../domain/posts/post';
import { MainContainer } from './styles';

export type PostProps = {
  post: PostData;
};

export default function PostPage({ post }: PostProps) {
  return (
    <>
      <Header />
      <MainContainer>
        <Heading>{post.title}</Heading>
        <PostCover coverUrl={post.cover.formats.large.url} alt={post.title} />
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </MainContainer>
      <Footer />
    </>
  );
}
