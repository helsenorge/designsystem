import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme as hndsTheme } from '@helsenorge/designsystem-react';

import Header from './Header';
import { Sidebar } from './Sidebar/Sidebar';
import { Main } from './Main';

import { Row, Col } from '@shared/CustomizedGrid';
import Footer from './Footer';
import Section from './Section';

import '@helsenorge/designsystem-react/scss/helsenorge.scss';

const StyledPageContent = styled(Row)`
  padding: 3rem 0;
`;

interface FrontpageProps {
  children?: React.ReactNode;
}

function Page(props: FrontpageProps): JSX.Element {
  return (
    <ThemeProvider theme={hndsTheme}>
      <Header />
      <Section color={hndsTheme.palette.blueberry100}>
        <StyledPageContent>
          <Col lg={3}>
            <Sidebar />
          </Col>
          <Col lg={9}>
            <Main>{props.children}</Main>
          </Col>
        </StyledPageContent>
      </Section>
      <Footer />
    </ThemeProvider>
  );
}

export default Page;
