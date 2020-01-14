import React from 'react';
import {ThemeProvider} from 'styled-components';

import {Grid} from '@shared/CustomizedGrid';
import Header from './NewHeader';
import {QuickMenu} from './QuickMenu';
import {Footer} from './Footer';
import {theme} from '@styles/styled-constants';

function Landing() {
  return (
    <ThemeProvider theme={theme}>
      <Grid fluid>
        <Header />
        <QuickMenu />
        <Footer />
      </Grid>
    </ThemeProvider>
  );
}

export default Landing;
