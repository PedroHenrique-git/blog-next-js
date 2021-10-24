import { styled } from '../../styles/theme';

export const PostWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.2rem;

  &:hover {
    opacity: 0.8;
    transition: opacity 300ms ease-in-out;
  }

  h3 {
    color: ${(props) => props.theme.colors.primaryBackgroundColor};
    font-size: 1.2rem;
    font-weight: bold;
    text-decoration: none;
    text-align: center;
    width: 100%;
  }
`;
