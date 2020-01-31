import React from 'react';
import styled from 'styled-components';
import QuickMenuCard from './QuickMenuCard';
import {Link} from 'gatsby';
import {Grid, Row, Col} from '@shared/CustomizedGrid';
import {palette} from '@styles/styled-constants';

function QuickMenu() {
  return (
    <StyledQuickMenu>
      <QuickMenuCardCollection>
        <Grid>
          <Row>
            <Col lg={4} md={4}>
              <QuickMenuCard title="merkevare" category="merkevare" large></QuickMenuCard>
            </Col>
            <Col lg={4} md={4}>
              <QuickMenuCard title="patterns" category="patterns" large></QuickMenuCard>
            </Col>
            <Col lg={4} md={4}>
              <Link to="/komponenter">
                <QuickMenuCard title="komponenter" category="komponenter" large></QuickMenuCard>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col lg={3} md={3}>
              <QuickMenuCard title="designprinsipper" category="designprinsipper"></QuickMenuCard>
            </Col>
            <Col lg={3} md={3}>
              <QuickMenuCard title="å skrive for helsenorge" category="skrive"></QuickMenuCard>
            </Col>
            <Col lg={3} md={3}>
              <QuickMenuCard title="markedsmateriell" category="markedsmateriell"></QuickMenuCard>
            </Col>
            <Col lg={3} md={3}>
              <QuickMenuCard title="roadmap" category="roadmap"></QuickMenuCard>
            </Col>
          </Row>
        </Grid>
      </QuickMenuCardCollection>
    </StyledQuickMenu>
  );
}

const StyledQuickMenu = styled('div')`
  min-height: 768px;
  background: ${palette('surgical400')};
  display: flex;
  align-items: center;
  justify-content: center;
`;
const QuickMenuCardCollection = styled('div')`
  /* min-width: 1080px; */
  /* max-width: 1080px; */
  /* overflow: hidden; */
  height: auto;
  & a {
    text-decoration: none;
  }
`;

export default QuickMenu;
