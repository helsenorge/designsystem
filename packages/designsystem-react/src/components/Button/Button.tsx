import React, {useState} from 'react';
import {HTMLButtonProps, HTMLAnchorProps} from '../../constants';
import {StyledButton, StyledButtonContent, StyledLeftFluidContent, StyledButtonWrapper} from './Button.styled';
import Loader from '../Loader';
import {PaletteNames} from '../../theme/palette';
import {useHover} from '../../hooks/useHover';
import {useWindowSize} from '../../hooks/useWindowSize';
import {breakpoints} from '../../theme/grid';

export type ButtonIntents = 'primary' | 'warning' | 'danger';
export type ButtonTags = 'button' | 'a';
export type ButtonVariants = 'fill' | 'outline' | 'borderless';

interface ButtonProps extends HTMLButtonProps, HTMLAnchorProps {
  children: React.ReactNode;
  className?: string;
  fluid?: boolean;
  intent?: ButtonIntents;
  inverted?: boolean;
  htmlMarkup?: ButtonTags;
  large?: boolean;
  loading?: boolean;
  onClick?: (e?: any) => void;
  variant?: ButtonVariants;
}

// TODO: Consider making this a shared hook
export function useIcons(children: React.ReactNode[]) {
  let leftIcon = null;
  let rightIcon = null;
  if ((children[0] as any)?.type?.displayName === 'Icon') leftIcon = children.shift();
  if ((children[children.length - 1] as any)?.type?.displayName === 'Icon') rightIcon = children.pop();
  return [leftIcon, rightIcon, children];
}

// TODO: Need to make more globally
export const intentToColor = {
  primary: 'blueberry',
  warning: 'banana',
  danger: 'cherry',
};

const getIconColor = (fill: boolean, disabled: boolean, intent: ButtonIntents, inverted: boolean) => {
  if (disabled) return 'neutral';
  if ((fill && !inverted) || (!fill && inverted)) return 'white';
  return intentToColor[intent];
};

const getLargeIconSize = (large: boolean, screenWidth: number | undefined) => {
  const mobile = screenWidth && screenWidth < breakpoints.md;
  if (mobile && large) return 48;
  if (large) return 64;
  return 38;
};

//TODO: Solve double ref situation like in this
const Button = React.forwardRef((props: ButtonProps, ref: any) => {
  const {
    children,
    className = '',
    fluid = false,
    intent = 'primary',
    inverted = false,
    htmlMarkup = 'button',
    large = false,
    loading = false,
    variant = 'fill',
    disabled = false,
    ...restProps
  } = props;

  const iconColor = getIconColor(variant === 'fill', disabled, intent, inverted);
  const [leftIcon, rightIcon, restChildren] = useIcons(React.Children.toArray(children));
  const {hoverRef, isHovered} = useHover<any>();
  const size = useWindowSize();

  function renderIcon(iconElement: any, size: number, color: string, hover: boolean) {
    return iconElement
      ? React.cloneElement(iconElement as React.ReactElement, {size, color: color, isHovered: hover})
      : null;
  }

  return (
    <StyledButton
      className={className}
      variant={variant}
      intent={intent}
      inverted={inverted}
      as={htmlMarkup}
      large={large}
      hasIcon={!!(leftIcon || rightIcon)}
      fluid={fluid}
      loader={loading}
      ref={hoverRef}
      disabled={disabled}
      {...restProps}>
      <StyledButtonWrapper>
        {loading ? (
          <StyledLeftFluidContent hasIcon={false}>
            <Loader color={variant === 'fill' ? 'white' : (intentToColor[intent] as PaletteNames)} size="tiny" />
          </StyledLeftFluidContent>
        ) : (
          <>
            {fluid ? (
              <StyledLeftFluidContent hasIcon={!!(leftIcon || rightIcon)}>
                {renderIcon(leftIcon, getLargeIconSize(large, size.width), iconColor, isHovered)}
                <StyledButtonContent>{restChildren}</StyledButtonContent>
              </StyledLeftFluidContent>
            ) : (
              <>
                {renderIcon(leftIcon, getLargeIconSize(large, size.width), iconColor, isHovered)}
                <StyledButtonContent>{restChildren}</StyledButtonContent>
              </>
            )}
            {renderIcon(rightIcon, 38, iconColor, isHovered)}
          </>
        )}
      </StyledButtonWrapper>
    </StyledButton>
  );
});

export default Button;
