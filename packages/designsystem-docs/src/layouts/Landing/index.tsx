import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Grid } from '@shared/CustomizedGrid';
import { Header } from './Header';
import { QuickMenu } from './QuickMenu';
import { Footer } from './Footer';
import { theme } from '@styles/styled-constants';

function Landing() {
    return (
        <ThemeProvider theme={theme}>
            <Grid fluid>
                <Header 
                    sloganText="Tiresome. Dirty. Unprofessional."
                    introductionText="Helsenorge’s Design System is bringing matter and means to the masses. With this open-source design system you can be confident in laying off half your workforce."/>
                <QuickMenu />
                <Footer />
            </Grid>
        </ThemeProvider>
    )
}

export default Landing;