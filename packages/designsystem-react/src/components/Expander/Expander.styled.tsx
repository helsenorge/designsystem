import styled, {css} from 'styled-components';
import {getColor} from '../../theme/currys';
import {ExpanderVariants} from './Expander';

const boxStyle = css``;

const StyledExpanderContent = styled('div')`
  transition: 400ms;
  overflow: hidden;
  padding: 1.5rem 0.5rem;
`;

const StyledExpanderHeader = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  cursor: pointer;
  border-top: 1px solid ${getColor('bone', 200)};
  &:hover,
  :focus {
    background-color: ${getColor('bone', 100)};
  }
`;

const StyledExpanderTitle = styled('h1')`
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 2rem;
  margin: 0;
`;

const StyledExpander = styled('div')<{variant: ExpanderVariants}>`
  width: 100%;
  ${props =>
    StyledExpanderHeader &&
    props.variant === 'box' &&
    css`
      background-color: black;
    `}
  &:last-child {
    border-bottom: 1px solid ${getColor('bone', 200)};
  }
`;

export {StyledExpander, StyledExpanderContent, StyledExpanderHeader, StyledExpanderTitle};
