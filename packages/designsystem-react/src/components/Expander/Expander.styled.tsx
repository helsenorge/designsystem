import styled, {css, keyframes} from 'styled-components';
import {getColor} from '../../theme/currys';
import {ExpanderVariants} from './Expander';
import {boolean} from '@storybook/addon-knobs';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
`;

const StyledExpanderContent = styled('div')`
  transition: 400ms;
  overflow: hidden;
  padding: 1.5rem 0.5rem;
`;

const StyledExpanderHeader = styled('div')<{hasIcon?: boolean}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0.375rem 0.5rem 0.75rem;
  cursor: pointer;
  &:hover,
  :focus {
    background-color: ${getColor('neutral', 100)};
  }
`;

const StyledExpanderHeaderContent = styled('div')`
  display: flex;
  align-items: center;
`;

const StyledExpanderTitle = styled('h1')`
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 2rem;
  margin: 0;
  margin-left: 0.5rem;
`;

interface StyledExpanderProps {
  topBorder: boolean;
  bottomBorder: boolean;
}

const StyledExpander = styled('div')<StyledExpanderProps>`
  /* width: inherit;
  &:nth-child(n):not(:last-child) {
    border-bottom: 1px solid ${getColor('neutral', 200)};
  }
  ${props =>
    props.topBorder &&
    css`
      &:first-child {
        border-top: 1px solid ${getColor('neutral', 200)};
      }
    `}
  ${props =>
    props.bottomBorder &&
    css`
      &:last-child {
        border-bottom: 1px solid ${getColor('neutral', 200)};
      }
    `} */
`;

export {StyledExpander, StyledExpanderContent, StyledExpanderHeader, StyledExpanderTitle, StyledExpanderHeaderContent};
