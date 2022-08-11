import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme as hndsTheme } from '@helsenorge/designsystem-react';

import Header from './Header';
import { Sidebar } from './Sidebar/Sidebar';
import { Main } from './Main';

import { Row, Col } from '@shared/CustomizedGrid';
import Footer from './Footer';
import Section from './Section';
import Button from '../components/Button/Button';

const StyledPageContent = styled(Row)`
  padding: 3rem 0;
`;

interface FrontpageProps {
  children?: React.ReactNode;
}

function Page(props: FrontpageProps): JSX.Element {
  const [hideSidebar, setHideSidebar] = useState(false);
  return (
    <ThemeProvider theme={hndsTheme}>
      <Header />
      <Section color={hndsTheme.palette.blueberry100} fluid={hideSidebar}>
        <StyledPageContent>
          {!hideSidebar && (
            <Col lg={3}>
              <Sidebar />
              <Button onClick={(): void => setHideSidebar(true)}>{'Skjul meny'}</Button>
            </Col>
          )}
          <Col lg={hideSidebar ? 12 : 9}>
            <Main>{props.children}</Main>
          </Col>
        </StyledPageContent>
      </Section>
      <Footer />
    </ThemeProvider>
  );
}

export default Page;
