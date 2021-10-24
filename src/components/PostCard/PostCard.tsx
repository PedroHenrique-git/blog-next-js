import Image from 'next/image';
import Link from 'next/link';
import { PostWrap } from './styles';

interface PostCard {
  title: string;
  image: string;
  slug: string;
}

export default function PostCard({ image, slug, title }: PostCard) {
  return (
    <Link href={`${slug}`}>
      <a>
        <PostWrap>
          <Image src={image} alt="post image" width="400" height="200" />
          <h3>{title}</h3>
        </PostWrap>
      </a>
    </Link>
  );
}
