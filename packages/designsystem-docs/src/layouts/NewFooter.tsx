import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';

import helsenorgeLogo from '@images/landing/helsenorge-logo.svg';
import {StyledDefaultProps} from '@shared/constants';
import {Grid, Row, Col} from '@shared/CustomizedGrid';
import {palette} from '@styles/styled-constants';

/**
 * HELSENORGE LINK
 */

const StyledFooter = styled('div')`
  margin-top: 1rem;
  height: 7rem;
  & .legal {
    padding: 0.6875rem;
    font-size: 1.125rem;
    text-align: right;
  }
`;

function Footer() {
  return <StyledFooter>Her er footeren gitt</StyledFooter>;
}

export default Footer;
