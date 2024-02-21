import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";

export const GlobalStyled = createGlobalStyle`

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: ${theme.colors.accent};

  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.accent};
    border: 0 none #ffffff;

  }
  ::-webkit-scrollbar-thumb:hover {
    background: #5756a1;
  }
  
  ::-webkit-scrollbar-track {
    background: ${theme.colors.primaryBg};
    border: 0 none #ffffff;
  }
  


  body {
    margin: 0;
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${theme.colors.font};
    
    min-width: 360px;
  }

  a {
    text-decoration: none;
    color: ${theme.colors.font};
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  button {
    background-color: unset;
    border: none;
    cursor: pointer;
    color: ${theme.colors.font}
  }

  section {
    padding: 100px 0;
    
    @media ${theme.media.mobile} {
      padding:80px 0;
    }
  }


  section:nth-of-type(odd) {
    background-color: ${theme.colors.primaryBg};

  }


  section:nth-of-type(even) {
    background-color: ${theme.colors.secondaryBg};
  }


`