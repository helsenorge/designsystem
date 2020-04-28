import React from 'react';
import styled, {css} from 'styled-components';
import {getColor} from '../../theme/currys';
import {PaletteNames, PaletteDepths} from '../../theme/palette';
import Icon from '../Icons';
import {IconTypes} from '../Icons/Icon';
import {useHover} from '../..';
import {typography} from '../../theme/typography';

interface StyledNotificationPanelProps {
  variant: NotificationPanelVariants;
  shadow: boolean;
}

const StyledNotificationPanel = styled('div')<StyledNotificationPanelProps>`
  display: grid;
  padding: 1rem;
  grid-template-areas: 'icon' 'content' 'action';
  grid-template-columns: 48px auto auto;
  grid-template-rows: 1fr;
  width: 100%;
  background-color: ${props =>
    getColor(
      variantToColorMap[props.variant].color as PaletteNames,
      variantToColorMap[props.variant].depth as PaletteDepths,
    )};
  ${props =>
    props.shadow &&
    css`
      box-shadow: 0 0.3rem 0.6rem -0.1rem rgba(0, 0, 0, 0.16);
    `}
`;

const StyledCloseButton = styled('button')`
  border: 0.125rem solid ${getColor('blueberry', 600)};
  background: transparent;
  padding: 0;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

const StyledNotificationPanelIconColumn = styled('span')`
  grid-area: 'icon';
`;

const StyledNotificationPanelContent = styled('div')`
  grid-area: 'content';
  margin: 0.5rem 0rem 0.5rem 1.5rem;
  & > p {
    margin: 0;
  }
`;

const StyledNotificationPanelActionColumn = styled('span')`
  grid-area: 'action';
`;

const StyledLabel = styled('h1')`
  ${typography.label}
  margin: 0;
`;

type NotificationPanelVariants = 'info' | 'warn' | 'alert';

interface NotificationPanelProps {
  children?: React.ReactNode;
  variant?: NotificationPanelVariants;
  shadow?: boolean;
  onClick?: (e?: any) => void;
  dismissable?: boolean;
  label?: string;
}

const variantToColorMap = {
  info: {color: 'kiwi', depth: 50},
  warn: {color: 'banana', depth: 50},
  alert: {color: 'cherry', depth: 100},
};

const variantToIconMap = {
  info: {type: 'infoSignStroke', color: 'kiwi'},
  warn: {type: 'alertSignStroke', color: 'black'},
  alert: {type: 'alertSignFill', color: 'cherry'},
};

const NotificationPanel = React.forwardRef((props: NotificationPanelProps, ref: any) => {
  const {children, variant = 'info', shadow = false, dismissable = false, onClick, label} = props;
  const {hoverRef, isHovered} = useHover<HTMLButtonElement>(dismissable);
  return (
    <StyledNotificationPanel shadow={shadow} variant={variant}>
      <StyledNotificationPanelIconColumn>
        <Icon
          type={variantToIconMap[variant].type as IconTypes}
          color={variantToIconMap[variant].color as PaletteNames}
        />
      </StyledNotificationPanelIconColumn>
      <StyledNotificationPanelContent>
        {label ? <StyledLabel>{label}</StyledLabel> : null}
        {children}
      </StyledNotificationPanelContent>
      <StyledNotificationPanelActionColumn>
        {dismissable ? (
          <StyledCloseButton onClick={onClick} ref={hoverRef}>
            <Icon type="cross" isHovered={isHovered} size={38} color="blueberry" />
          </StyledCloseButton>
        ) : null}
      </StyledNotificationPanelActionColumn>
    </StyledNotificationPanel>
  );
});

export default NotificationPanel;
