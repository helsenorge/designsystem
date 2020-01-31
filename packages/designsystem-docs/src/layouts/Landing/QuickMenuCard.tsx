import React from 'react';
import styled from 'styled-components';
import {StyledDefaultProps} from '@shared/constants';
import {palette} from '@styles/styled-constants';
import cardSmallIcon from '@images/quickcard-small-icon.svg';
import cardMerkevareIcon from '@images/quickcard-merkevare-icon.svg';
import cardPatternsIcon from '@images/quickcard-patterns-icon.svg';
import cardKomponenterIcon from '@images/quickcard-komponenter-icon.svg';

// TODO: top-align ikoner

interface CardProps extends StyledDefaultProps {
  large?: boolean;
  title: string;
  category: string;
}

interface StyleProps extends StyledDefaultProps {
  large?: boolean;
  category: string;
}

function QuickMenuCard(props: CardProps) {
  const {large, title, category} = props;
  return (
    <StyledQuickMenuCard category={category} large={large}>
      <div className="cardIconContainer">
        <img src={getCardIcon(category)} />
      </div>
      <div className="cardTitle">{title}</div>
    </StyledQuickMenuCard>
  );
}

function getCardIcon(category: string) {
  switch (category) {
    case 'merkevare': {
      return cardMerkevareIcon;
      break;
    }
    case 'patterns': {
      return cardPatternsIcon;
      break;
    }
    case 'komponenter': {
      return cardKomponenterIcon;
      break;
    }
    default: {
      return cardSmallIcon;
    }
  }
}

const StyledQuickMenuCard = styled('div')<StyleProps>`
  min-height: 240px;
  max-height: 240dpx;
  background-color: ${palette('bone')};
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0.375rem 0;
  padding: 1rem;
  border: 1px solid #979797;
  text-align: center;
  .cardTitle {
    font-size: ${props => (props.large ? '2.875rem' : '1.3125rem')}; //46px 21px
    font-weight: ${props => (props.large ? '200' : '600')};
    text-transform: ${props => (props.large ? 'capitalize' : 'uppercase')};
  }
`;

export default QuickMenuCard;
