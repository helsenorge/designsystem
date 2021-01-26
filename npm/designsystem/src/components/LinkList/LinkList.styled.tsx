import styled, {css} from 'styled-components';
import {getColor} from '../../theme/currys';
import {LinkProps, LinkListColors} from './LinkList';

interface StyledLinkListProps {
  topBorder?: boolean;
  bottomBorder?: boolean;
}

const topBorder = (props: StyledLinkListProps) =>
  props.topBorder &&
  css`
    & > :first-child {
      border-top: 1px solid ${getColor('neutral', 500)};
    }
  `;

const bottomBorder = (props: StyledLinkListProps) =>
  !props.bottomBorder &&
  css`
    & > :last-child {
      border-bottom: 0;
    }
  `;

const largeStyle = (props: StyledLinkListLinkProps) =>
  props.large &&
  css`
    font-size: 1.5rem;
    line-height: 2rem;
  `;

const StyledLinkList = styled('ul')`
  list-style: none;
  padding: 0;
  width: inherit;
  margin: 0;
  & > :nth-child(n) {
    border-bottom: 1px solid ${getColor('neutral', 500)};
  }
  ${topBorder}
  ${bottomBorder}
`;

const StyledLinkListIconContainer = styled('span')`
  width: 3rem;
  .hnds-style-icon {
    vertical-align: middle;
  }
`;

// TODO: Need to overhaul all icons to be Styled insteadof hnds-style-icon.
const StyledLinkListLinkContent = styled('span')`
  display: flex;
  align-items: center;
  border-bottom: 1px solid transparent;
  ${StyledLinkListIconContainer} {
    margin-right: 0.5rem;
  }
`;

interface StyledLinkListLinkProps {
  color: LinkListColors;
  large: boolean;
  hasIcon: boolean;
}

const StyledLinkListLink = styled('a')<StyledLinkListLinkProps>`
  padding: 0.5rem;
  min-height: ${props => (props.hasIcon ? 'unset' : '4.5rem')};
  display: flex;
  cursor: pointer;
  font-size: 1.25rem;
  line-height: 1.875rem;
  text-decoration: none;
  justify-content: space-between;
  align-items: center;
  color: ${getColor('black')};
  ${largeStyle};
  &:hover,
  &:focus {
    background-color: ${props => (props.color === 'white' ? getColor('neutral', 50) : getColor(props.color, 100))};
  }
  &:focus {
    outline: none;
    ${StyledLinkListLinkContent} {
      border-color: ${getColor('black')};
    }
  }
`;

export {StyledLinkList, StyledLinkListLink, StyledLinkListLinkContent, StyledLinkListIconContainer};
