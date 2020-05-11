import styled, {css} from 'styled-components';
import {getColor} from '../../theme/currys';

interface StyledTileProps {
  fixed: boolean;
  highlighted: boolean;
  compact: boolean;
}

const StyledTitle = styled('h1')`
  overflow-wrap: break-word;
  word-wrap: break-word;
  font-size: 1.25rem;
  text-align: left;
  line-height: 1.75rem;
  font-weight: 600;
  margin: 0;
  margin-top: 1.125rem;
`;

const StyledDescription = styled('p')`
  font-size: 1.125rem;
`;

const highlightStyle = css`
  background-color: ${getColor('blueberry', 500)};
  color: white;
  &:hover,
  &:active,
  &:focus {
    background-color: ${getColor('blueberry', 700)};
  }
  &:focus {
    box-shadow: 0 0 0 6px ${getColor('blueberry', 700)};
    ${StyledTitle} {
      text-decoration: underline;
    }
  }
`;

const StyledTile = styled('a')<StyledTileProps>`
  width: 'inherit';
  ${props =>
    props.fixed &&
    css`
      min-width: 15rem;
      max-width: 20rem;
    `}
  text-decoration: none;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1.5rem;
  background-color: ${getColor('white')};
  outline: none;
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
  &:hover, 
  &:active,
  &:focus {
    background-color: ${getColor('neutral', 100)};
  }
  &:focus {
    box-shadow: 0 0 0 6px ${getColor('neutral', 600)};
  }
  ${props => props.highlighted && highlightStyle}
`;

export {StyledTile, StyledTitle, StyledDescription};
