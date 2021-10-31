import { DiscussionEmbed } from 'disqus-react';
import { Container } from './styles';

export type CommentsProps = {
  slug: string;
  title: string;
};

export default function Comments({ slug, title }: CommentsProps) {
  return (
    <Container>
      <DiscussionEmbed
        shortname={String(process.env.NEXT_PUBLIC_URL_DISQUS_SHORT_NAME)}
        config={{
          url: `/post/${slug}`,
          identifier: slug,
          title: title,
          language: 'pt_BR',
        }}
      />
    </Container>
  );
}
