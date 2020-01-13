import React from 'react';
import {ThemeProvider} from 'styled-components';

import {Grid} from '@shared/CustomizedGrid';
import {Header} from './Header';
import {QuickMenu} from './QuickMenu';
import {Footer} from './Footer';
import {theme} from '@styles/styled-constants';

function Landing() {
  return (
    <ThemeProvider theme={theme}>
      <Grid fluid>
        <Header
          sloganText="Helsenorge designsystem"
          introductionText="Én sannhet om brukerflate, design og interaksjon på Helsenorge. For raskere utvikling, færre designbugs, bedre samhandling og en samlet, konsistent brukeropplevelse."
        />
        <QuickMenu />
        <Footer />
      </Grid>
    </ThemeProvider>
  );
}

export default Landing;
