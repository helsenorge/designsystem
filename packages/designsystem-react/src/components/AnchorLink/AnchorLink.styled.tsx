import styled from 'styled-components';
import {typography} from '../../theme/typography';
import {getColor} from '../../theme/currys';

interface StyledAnchorLinkProps {
  external: boolean;
}

const StyledAnchorLink = styled('a')<StyledAnchorLinkProps>`
  display: inline;
  overflow-wrap: break-word;
  word-wrap: break-word;
  text-align: left;
  padding-bottom: 0.15rem;
  text-decoration: none;
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
    color: ${getColor('blueberry', 700)};
    border-color: ${getColor('blueberry', 600)};
  }
`;

export default StyledAnchorLink;
