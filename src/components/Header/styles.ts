import { styled } from '../../styles/theme';

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme.colors.primaryBackgroundColor};
  padding: 1rem 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1025px) {
    flex-direction: row-reverse;
  }

  .title {
    color: ${(props) => props.theme.colors.primaryFontColor};
    font-size: 1.7rem;
  }

  .categories a {
    cursor: pointer;
    color: ${(props) => props.theme.colors.primaryFontColor};
    font-size: 1.2rem;
    text-decoration: none;
    padding: 0 0.8rem;
  }
`;
