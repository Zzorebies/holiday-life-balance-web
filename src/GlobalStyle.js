import { createGlobalStyle } from 'styled-components';
const { normalize } = require('styled-normalize');

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    font-size: 62.5%
  }

  body {
    font-family: 'Open Sans', Arial, sans-serif;
    font-size: 1.6rem;
  }
`;

export default GlobalStyle;
