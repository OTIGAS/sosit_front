import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;

    color: ${({ theme }) => theme.colors.color_11};
    background-color: ${({ theme }) => theme.colors.color_01};

    font-weight: 400;
    font-family: ${({ theme }) => theme.font.family};

    border-radius: 0.5rem;
    border-color: ${({ theme }) => theme.colors.color_11};
  }

  input, textarea, button, select {
    font-weight: 400;
    font-family: ${({ theme }) => theme.font.family};

    border-radius: 0.5rem;
    border-color: ${({ theme }) => theme.colors.color_06};

    color: ${({ theme }) => theme.colors.color_11};
    background-color: ${({ theme }) => theme.colors.background};
  }

  img {
    display: block;
    max-width: 100%;
  }
`;

export default GlobalStyle;
