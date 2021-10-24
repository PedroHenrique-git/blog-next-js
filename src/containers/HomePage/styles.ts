import { styled } from '../../styles/theme';

export const MainContainer = styled.section`
  margin: 30px auto auto;
  padding: 1rem 1.5rem;
  max-width: 1440px;
  min-height: 100vh;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 1.5rem;

  @media (max-width: 280px) {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  }
`;
