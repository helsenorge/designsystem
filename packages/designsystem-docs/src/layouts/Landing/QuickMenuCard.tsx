import React from 'react';
import styled, {css} from 'styled-components';
import {StyledDefaultProps} from '@shared/constants';
import {palette} from '@styles/styled-constants';
import {Link} from 'gatsby';

export const QuickMenuCardTitle = styled('h1')`
  font-size: 2.5rem;
  font-weight: 300;
  margin: 1rem 0;
`;

export function QuickMenuCardArt({src}: {src: string}) {
  return (
    <StyledQuickMenuCardArt>
      <img src={src} />
    </StyledQuickMenuCardArt>
  );
}

const StyledQuickMenuCardArt = styled('div')`
  display: flex;
  justify-content: center;
  height: 8rem;
  margin: 1rem 1rem 0 1rem;
`;

interface CardProps extends StyledDefaultProps {
  small?: boolean;
  to: string;
}

function QuickMenuCard(props: CardProps) {
  const {children, to, small = false} = props;
  return (
    <StyledQuickMenuCard small={small} to={to}>
      {children}
    </StyledQuickMenuCard>
  );
}

const StyledQuickMenuCard = styled(Link)<{small?: boolean}>`
  background-color: white;
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  height: 100%;
  border: 4px solid transparent;
  transition: border 200ms;
  &:hover {
    border: 4px solid ${palette('surgical500')};
  }
  ${props =>
    props.small &&
    css`
      ${QuickMenuCardTitle} {
        font-size: 1.25rem;
        text-transform: uppercase;
        font-weight: 600;
      }
    `}
`;

export default QuickMenuCard;
