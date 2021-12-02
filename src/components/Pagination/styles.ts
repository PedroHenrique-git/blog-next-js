import { styled } from '../../styles/theme';

export const PaginationContainer = styled.ul`
  margin: 50px auto;
  list-style: none;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

export const NextLink = styled.li`
  border: 1px solid #000;
  border-radius: 5px;
  padding: 10px;

  &:hover {
    opacity: 0.8;
    transition: opacity 300ms ease-in-out;
  }

  a {
    color: #000;
    font-size: 1.4rem;
    text-decoration: none;
  }
`;

export const PreviousLink = styled.li`
  border: 1px solid #000;
  border-radius: 5px;
  padding: 10px;

  &:hover {
    opacity: 0.8;
    transition: opacity 300ms ease-in-out;
  }

  a {
    color: #000;
    font-size: 1.4rem;
    text-decoration: none;
  }
`;
