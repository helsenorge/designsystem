import styled, { css } from 'styled-components';
import { getColor } from '../../theme/currys';
import { ExpanderListColors } from './ExpanderList';

interface StyledExpanderListProps {
  topBorder?: boolean;
  bottomBorder?: boolean;
}

interface StyledExpanderContentProps {
  padding: boolean;
}

const topBorder = (props: StyledExpanderListProps) =>
  props.topBorder &&
  css`
    & > :first-child {
      border-top: 1px solid ${getColor('neutral', 500)};
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
    border-bottom: 1px solid ${getColor('neutral', 500)};
  }
  ${topBorder}
  ${bottomBorder}
`;

const StyledExpanderContent = styled('div')<StyledExpanderContentProps>`
  padding: ${props => (props.padding ? '1.5rem 0.5rem' : '0')};
`;

const StyledExpanderListIconContainer = styled('span')`
  width: 3rem;
  .hnds-style-icon {
    vertical-align: middle;
  }
`;

// TODO: Need to overhaul all icons to be Styled insteadof hnds-style-icon.
const StyledExpanderListLinkContent = styled('span')`
  display: flex;
  align-items: center;
  text-align: left;
  border-bottom: 1px solid transparent;
  ${StyledExpanderListIconContainer} {
    margin-right: 0.5rem;
  }
`;

interface StyledExpanderListLinkProps {
  color: ExpanderListColors;
  large: boolean;
  isExpanded: boolean;
}

const StyledExpanderListLink = styled('button')<StyledExpanderListLinkProps>`
  padding: 0.5rem;
  display: flex;
  cursor: pointer;
  font-size: 1.25rem;
  line-height: 1.875rem;
  text-decoration: none;
  justify-content: space-between;
  align-items: center;
  letter-spacing: unset;
  color: ${getColor('black')};
  background-color: ${props =>
    props.isExpanded ? (props.color === 'white' ? getColor('neutral', 50) : getColor(props.color, 100)) : 'transparent'};
  border: 0;
  width: 100%;

  outline: none;
  ${largeStyle};
  &:hover,
  :focus {
    background-color: ${props => (props.color === 'white' ? getColor('neutral', 50) : getColor(props.color, 100))};
  }
  &:focus {
    outline: none;
    ${StyledExpanderListLinkContent} {
      border-color: ${getColor('black')};
    }
  }
`;

export {
  StyledExpanderList,
  StyledExpanderListLink,
  StyledExpanderListLinkContent,
  StyledExpanderContent,
  StyledExpanderListIconContainer,
};
