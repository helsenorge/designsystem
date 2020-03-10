import styled, {css} from 'styled-components';
import {getColor} from '../../theme/currys';
import {ExpanderListColors} from './ExpanderList';

interface StyledExpanderListProps {
  topBorder?: boolean;
  bottomBorder?: boolean;
}

const topBorder = (props: StyledExpanderListProps) =>
  props.topBorder &&
  css`
    & > :first-child {
      border-top: 1px solid ${getColor('neutral', 200)};
    }
  `;

const bottomBorder = (props: StyledExpanderListProps) =>
  !props.bottomBorder &&
  css`
    & > :last-child {
      border-bottom: 0;
    }
  `;

const largeStyle = (props: StyledExpanderListLinkProps) =>
  props.large &&
  css`
    font-size: 1.5rem;
    line-height: 2rem;
  `;

const StyledExpanderList = styled('ul')`
  list-style: none;
  padding: 0;
  width: inherit;
  margin: 0;
  & > :nth-child(n) {
    border-bottom: 1px solid ${getColor('neutral', 200)};
  }
  ${topBorder}
  ${bottomBorder}
`;

const StyledExpanderContent = styled('div')`
  padding: 1.5rem 0.5rem;
`;

// TODO: Need to overhaul all icons to be Styled insteadof .icon.
const StyledExpanderListLinkContent = styled('span')`
  display: flex;
  align-items: center;
  .icon {
    margin-right: 1.5rem;
  }
`;

interface StyledExpanderListLinkProps {
  color: ExpanderListColors;
  large: boolean;
  isExpanded: boolean;
  hasIcon: boolean;
}

const StyledExpanderListLink = styled('button')<StyledExpanderListLinkProps>`
  padding: ${props => (props.hasIcon ? '0.5rem' : '1rem')} 0.5rem;
  display: flex;
  cursor: pointer;
  font-size: 1.25rem;
  line-height: 1.875rem;
  text-decoration: none;
  justify-content: space-between;
  align-items: center;
  color: ${getColor('black')};
  background-color: ${props => (props.isExpanded ? getColor(props.color, 100) : 'transparent')};
  border: 0;
  width: 100%;
  outline: none;
  ${largeStyle};
  &:hover {
    background-color: ${props => getColor(props.color, 100)};
  }
`;

export {StyledExpanderList, StyledExpanderListLink, StyledExpanderListLinkContent, StyledExpanderContent};
