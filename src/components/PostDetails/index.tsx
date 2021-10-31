import Date from '../Date';
import { Container } from './styles';

export type PostDetailsProps = {
  date: string;
  author: string;
  category: string;
};

export default function PostDetails({
  author,
  category,
  date,
}: PostDetailsProps) {
  return (
    <Container>
      Publicado em
      <Date date={date} />
      por {author} em {category}
    </Container>
  );
}
