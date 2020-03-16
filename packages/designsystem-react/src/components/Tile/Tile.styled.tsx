import styled, {css} from 'styled-components';
import {getColor} from '../../theme/currys';

interface StyledTileProps {
  fixed: boolean;
  compact: boolean;
}

const StyledTitle = styled('h1')`
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 600;
  margin: 0;
  margin-top: 1.125rem;
`;

const StyledDescription = styled('p')`
  font-size: 1.125rem;
`;

const StyledTile = styled('a')<StyledTileProps>`
  width: 'inherit';
  ${props =>
    props.fixed &&
    css`
      min-width: 15rem;
      max-width: 20rem;
    `}
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1.5rem;
  background-color: ${getColor('white')};
  ${StyledTitle} {
    margin-top: 1.5rem;
    margin-bottom: 1rem;
  }
  ${StyledDescription} {
    margin: 0 0 3rem 0;
  }
  cursor: pointer;
  ${props =>
    props.compact &&
    css`
      flex-direction: row;
      align-items: center;
      padding-right: 1rem;
      > svg {
        flex-shrink: 0;
      }
      ${StyledTitle} {
        margin: 0 0 0 1.5rem;
      }
    `}
  &:hover {
    background-color: ${getColor('neutral', 100)};
  }
`;

export {StyledTile, StyledTitle, StyledDescription};
