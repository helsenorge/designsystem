import styled, {css} from 'styled-components';
import {getColor} from '../../theme/currys';
import {screen} from '../../theme/grid';

interface StyledTileProps {
  fixed: boolean;
  highlighted: boolean;
}

interface StyledTileTitleWrapperProps {
  compact: boolean;
}

const StyledTileTitle = styled('h1')`
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
  font-size: 1.5rem;
  text-align: left;
  align-self: center;
  line-height: 1.75rem;
  font-weight: 600;
  margin: 0;
  margin-left: 0.5rem;
  @media ${screen.sm} {
    font-size: 1.25rem;
    margin-top: 1rem;
    align-self: start;
  }
`;

const StyledDescription = styled('p')`
  font-size: 1.125rem;
  line-height: 1.75rem;
  margin: 0 0 0 0.5rem;
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
    ${StyledTileTitle} {
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

  padding: 1.5rem 2rem 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${getColor('white')};
  color: black;
  text-decoration: none;
  cursor: pointer;
  outline: none;
  .hnds-style-icon {
    flex-shrink: 0;
    align-self: center;
    @media ${screen.sm} {
      align-self: start;
    }
  }
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

const StyledTileTitleWrapper = styled('div')<StyledTileTitleWrapperProps>`
  display: flex;
  flex-direction: row;
  padding-bottom: 0.5rem;

  ${props =>
    props.compact &&
    css`
      align-items: center;
      padding-right: 1rem;
      > .hnds-style-icon {
        flex-shrink: 0;
        align-self: center;
      }
      ${StyledTileTitle} {
        align-self: center;
        margin: 0 0 0 1.5rem;
      }
    `}
  ${props =>
    !props.compact &&
    css`
      @media ${screen.sm} {
        flex-direction: column;
      }
    `}
`;

export {StyledTile, StyledTileTitleWrapper, StyledTileTitle, StyledDescription};
