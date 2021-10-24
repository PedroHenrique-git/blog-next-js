import { styled } from '../../styles/theme';

export const FooterContainer = styled.footer`
  background: ${(props) => props.theme.colors.primaryBackgroundColor};
  padding: 1rem 1.5rem;
  margin-top: 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 640px) {
    gap: 20px;
    flex-direction: column;
    justify-content: center;
  }

  .message,
  .message a {
    font-size: 1rem;
    color: ${(props) => props.theme.colors.primaryFontColor};
  }

  .message a:hover {
    text-decoration: underline;
  }

  .informations {
    display: flex;
    flex-wrap: nowrap;
    gap: 10px;

    @media (max-width: 640px) {
      gap: 20px;
      flex-direction: column;
      justify-content: center;
    }

    &-deploy a,
    &-developed a {
      font-size: 1rem;
      color: ${(props) => props.theme.colors.primaryFontColor};

      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: center;
      gap: 5px;
    }
  }
`;
