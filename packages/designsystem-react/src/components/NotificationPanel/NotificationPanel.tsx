import React from 'react';
import {palette} from '../../theme/palette';
import Icon from '../Icons';
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

export type NotificationPanelVariants = 'info' | 'warn' | 'alert' | 'crisis';
export type NotificationPanelSizes = 'small' | 'medium' | 'large';

interface NotificationPanelProps {
  children?: React.ReactNode;
  variant?: NotificationPanelVariants;
  shadow?: boolean;
  size?: NotificationPanelSizes;
  onClick?: (e?: any) => void;
  dismissable?: boolean;
  fluid?: boolean;
  label?: string;
}

export const variantToColorMap = {
  info: {color: 'kiwi', depth: 50},
  warn: {color: 'banana', depth: 50},
  alert: {color: 'cherry', depth: 100},
  crisis: {color: 'black', depth: 0},
};

export const variantToIconMap = {
  info: <InfoSignStroke color={palette.kiwi900} hoverColor={palette.kiwi900} />,
  warn: <AlertSignStroke color="black" hoverColor="black" />,
  alert: <AlertSignFill color={palette.cherry500} hoverColor={palette.cherry500} />,
  alertLabel: <AlertSignStroke color={palette.cherry500} hoverColor={palette.cherry500} />,
  crisis: <AlertSignFill color={palette.banana200} hoverColor={palette.banana200} />,
};

const NotificationPanel = React.forwardRef((props: NotificationPanelProps, ref: any) => {
  const {
    children,
    variant = 'info',
    shadow = false,
    dismissable = false,
    onClick,
    label,
    fluid = false,
    size = 'large',
  } = props;
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
    <StyledNotificationPanel size={size} label={!!label && !children} shadow={!fluid && shadow} variant={variant}>
      <StyledNotificationPanelIconColumn>
        {variantToIconMap[variant === 'alert' && label ? 'alertLabel' : variant]}
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
    </StyledNotificationPanel>,
  );
});

export default NotificationPanel;
