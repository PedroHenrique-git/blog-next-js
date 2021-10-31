import { styled } from '../../styles/theme';

export const Container = styled.article`
  img {
    max-width: 100%;
  }

  ol,
  ul,
  p {
    list-style: none;
  }

  p {
    margin: 20px 0;
  }

  pre {
    width: 100%;
    overflow: auto;
    background: gray;
    color: darkgray;
    padding: 1.5rem;
    line-height: 1.5;
    font-size: 1.2rem;
    margin: 20px 0;
  }
`;
