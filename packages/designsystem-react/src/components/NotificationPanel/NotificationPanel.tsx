import React from 'react';
import {PaletteNames, palette} from '../../theme/palette';
import Icon from '../Icons';
import {IconTypes} from '../Icons/Icon';
import {useHover} from '../..';
import {
  StyledNotificationPanelFluidWrapper,
  StyledNotificationPanel,
  StyledNotificationPanelIconColumn,
  StyledNotificationPanelContent,
  StyledNotificationPanelActionColumn,
  StyledLabel,
  StyledCloseButton,
} from './NotificationPanel.styled';
import InfoSignStroke from '../Icons/InfoSignStroke';
import AlertSignStroke from '../Icons/AlertSignStroke';
import AlertSignFill from '../Icons/AlertSignFill';

export type NotificationPanelVariants = 'info' | 'warn' | 'alert';

interface NotificationPanelProps {
  children?: React.ReactNode;
  variant?: NotificationPanelVariants;
  shadow?: boolean;
  onClick?: (e?: any) => void;
  dismissable?: boolean;
  fluid?: boolean;
  label?: string;
}

export const variantToColorMap = {
  info: {color: 'kiwi', depth: 50},
  warn: {color: 'banana', depth: 50},
  alert: {color: 'cherry', depth: 100},
};

export const variantToIconMap = {
  info: <InfoSignStroke color={palette.kiwi900} hoverColor={palette.kiwi900} />,
  warn: <AlertSignStroke color="black" hoverColor="black" />,
  alert: <AlertSignFill color={palette.cherry500} hoverColor={palette.cherry500} />,
};

const NotificationPanel = React.forwardRef((props: NotificationPanelProps, ref: any) => {
  const {children, variant = 'info', shadow = false, dismissable = false, onClick, label, fluid = false} = props;
  const {hoverRef, isHovered} = useHover<HTMLButtonElement>(dismissable);
  function wrapFluid(panel: React.ReactNode): any {
    if (fluid) {
      return (
        <StyledNotificationPanelFluidWrapper shadow={shadow} variant={variant}>
          {panel}
        </StyledNotificationPanelFluidWrapper>
      );
    }
    return panel;
  }
  return wrapFluid(
    <StyledNotificationPanel shadow={!fluid && shadow} variant={variant}>
      <StyledNotificationPanelIconColumn>{variantToIconMap[variant]}</StyledNotificationPanelIconColumn>
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
    </StyledNotificationPanel>,
  );
});

export default NotificationPanel;
