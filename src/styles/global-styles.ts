import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: sans-serif;
    font-weight: 500;
    margin: 0;
    outline: none;
    padding: 0;
  }

  a, button {
    text-decoration: none;
    cursor: pointer;
  }

  a:hover, button:hover {
    opacity: 0.8;
    transition: opacity 300ms ease-in-out;
  }
`;
