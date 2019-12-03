import React from 'react';
import styled, {css} from 'styled-components';
import {theme} from '../../theme';

type DiveBoardVariant = 'strangulation' | 'surgical';

interface DiveBoardProps {
  children: React.ReactNode;
  variant?: DiveBoardVariant;
}

const DiveBoard = React.forwardRef<HTMLAnchorElement, DiveBoardProps>((props, ref) => {
  const {children, variant, ...rest} = props;
  return (
    <StyledDiveBoard variant={variant} theme={theme} ref={ref} {...rest}>
      {children}
    </StyledDiveBoard>
  );
});

const DiveBoardTitle = styled('h3')`
  margin: 0;
`;

const DiveBoardPreamable = styled('p')`
  margin: 1.5rem 0 0 0;
`;

const StyledDiveBoard = styled('a')<DiveBoardProps>`
  padding: 2rem;
  cursor: pointer;
  width: 42.5rem;
  display: block;
  background-color: ${props => props.theme.palette.ash};
  border: 1px solid ${props => props.theme.palette.scalpel};
  transition: all ${props => props.theme.animation.duration};
  &:hover,
  :focus {
    background-color: ${props => props.theme.palette.scalpel};
  }
  ${props =>
    props.variant === 'surgical' &&
    css`
      background-color: ${props => props.theme.palette.surgical100};
      border: 1px solid ${props => props.theme.palette.surgical200};
      &:hover,
      :focus {
        background-color: ${props => props.theme.palette.surgical200};
      }
    `}
  ${props =>
    props.variant === 'strangulation' &&
    css`
      background-color: ${props => props.theme.palette.strangulation100};
      border: 1px solid ${props => props.theme.palette.strangulation200};
      &:hover,
      :focus {
        background-color: ${props => props.theme.palette.strangulation200};
      }
    `}
`;

// TODO: Need to find a way to make this work. Right now the forwardRef thingie doesn't return the correct type
// DiveBoard.Title = DiveBoardTitle;

export {DiveBoard, DiveBoardTitle, DiveBoardPreamable};
