import styled from 'styled-components';
import {typography} from '../../theme/typography';
import {getColor} from '../../theme/currys';

interface StyledTitleProps {
  external: boolean;
}

const StyledTitle = styled('a')<StyledTitleProps>`
  display: inline;
  overflow-wrap: break-word;
  word-wrap: break-word;
  text-align: left;
  padding-bottom: 0.25rem;

  ${typography['anchorlink']};
  color: ${getColor('blueberry', 600)};
  border-bottom: 1px solid ${getColor('neutral', 300)};
  .hnds-style-icon {
    vertical-align: bottom;
    margin-bottom: -0.25rem;
  }
  &:focus {
    outline: none;
    background-color: rgba(8, 102, 124, 0.05); /* Dette er blueberry 700 med 5% opacity*/
    border-color: ${getColor('neutral', 300)};
  }
  &:hover {
    cursor: pointer;
    border-color: ${getColor('blueberry', 700)};
  }
`;

export default StyledTitle;