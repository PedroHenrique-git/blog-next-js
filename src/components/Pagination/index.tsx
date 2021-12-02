import Link from 'next/link';
import { PaginationData } from '../../domain/posts/pagination';
import { NextLink, PaginationContainer, PreviousLink } from './styles';

export type PaginationProps = PaginationData;

export default function Pagination({
  nextPage,
  numberOfPosts,
  postsPerPage,
  previousPage,
  category,
}: PaginationProps) {
  const categoryName = category || '';
  const nextLink = `/post/page/${nextPage}/${categoryName}`;
  const previousLink = `/post/page/${previousPage}/${categoryName}`;
  const hasNextPage = nextPage * postsPerPage < postsPerPage + numberOfPosts;
  const hasPreviousPage = previousPage >= 1;

  return (
    <PaginationContainer>
      {hasPreviousPage && (
        <PreviousLink>
          <Link as={previousLink} href="/post/page/[...param]">
            <a>previous page</a>
          </Link>
        </PreviousLink>
      )}
      {hasNextPage && (
        <NextLink>
          <Link as={nextLink} href="/post/page/[...param]">
            <a>next page</a>
          </Link>
        </NextLink>
      )}
    </PaginationContainer>
  );
}
