import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/globalStyles';
import theme from '../styles/theme';
import Router from './Router';

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Router />
      </>
    </ThemeProvider>
  );
};
