import React from 'react';
import {ThemeProvider} from 'styled-components';

import QuickMenu from './QuickMenu';

import Header from '@layouts/Header';
import Footer from '@layouts/Footer';
import {theme} from '@styles/styled-constants';

interface LandingProps {
  children?: React.ReactNode;
}

function Landing(props: LandingProps) {
  const {children} = props;
  return (
    <ThemeProvider theme={theme}>
      <Header />
      {children || <QuickMenu />}
      <Footer />
    </ThemeProvider>
  );
}

export default Landing;
