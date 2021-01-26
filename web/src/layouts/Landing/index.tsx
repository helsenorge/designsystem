import React from 'react';
import {ThemeProvider} from 'styled-components';
import {theme as hndsTheme} from '@helsenorge/designsystem-react';

import QuickMenu from './QuickMenu';

import Header from '@layouts/Header';
import Footer from '@layouts/Footer';

interface LandingProps {
  children?: React.ReactNode;
}

function Landing(props: LandingProps) {
  const {children} = props;
  return (
    <ThemeProvider theme={hndsTheme}>
      <Header />
      {children || <QuickMenu />}
      <Footer />
    </ThemeProvider>
  );
}

export default Landing;
