import React from 'react';
import styled from 'styled-components';
import {Grid} from '@shared/CustomizedGrid';

interface SectionProps {
  children?: React.ReactNode;
  color?: string;
}

const StyledSection = styled(Grid)<{color: string}>`
  background-color: ${props => props.color};
`;

function Section(props: SectionProps) {
  const {children, color = 'white'} = props;
  return (
    <StyledSection color={color} fluid>
      <Grid padding={1.5}>{children}</Grid>
    </StyledSection>
  );
}

export default Section;
