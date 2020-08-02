import { createGlobalStyle } from 'styled-components';
const { normalize } = require('styled-normalize');

const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
    font-family: 'Open Sans', Arial, sans-serif;
  }
`;

export default GlobalStyle;
