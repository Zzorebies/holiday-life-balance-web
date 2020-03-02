import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import WebFontLoader from 'webfontloader';

import App from './App';
import GlobalStyle from './GlobalStyle';
import theme from './theme';
import * as serviceWorker from './serviceWorker';

WebFontLoader.load({
  google: {
    families: ['Open Sans']
  }
});

ReactDOM.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
