import React, {useState} from 'react';
import {HTMLButtonProps, HTMLAnchorProps} from '../../constants';
import {StyledButton, StyledButtonContent} from './Button.styled';
import Loader from '../Loader';
import {PaletteNames} from '../../theme/palette';

export type ButtonIntents = 'primary' | 'warning' | 'danger';
export type ButtonTags = 'button' | 'a';
export type ButtonVariants = 'fill' | 'outline' | 'borderless';

interface ButtonProps extends HTMLButtonProps, HTMLAnchorProps {
  children: React.ReactNode;
  fluid?: boolean;
  intent?: ButtonIntents;
  inverted?: boolean;
  is?: ButtonTags;
  large?: boolean;
  loading?: boolean;
  onClick?: () => void;
  variant?: ButtonVariants;
}

// TODO: Consider making this a shared hook
export function useIcons(children: React.ReactNode[]) {
  let leftIcon = null;
  let rightIcon = null;
  if ((children[0] as any).type?.displayName === 'Icon') leftIcon = children.shift();
  if ((children[children.length - 1] as any).type?.displayName === 'Icon') rightIcon = children.pop();
  return [leftIcon, rightIcon, children];
}

// TODO: Need to make more globally
export const intentToColor = {
  primary: 'blueberry',
  warning: 'banana',
  danger: 'cherry',
};

const getIconColor = (fill: boolean, disabled: boolean, intent: ButtonIntents) => {
  if (disabled) return 'neutral';
  if (fill) return 'white';
  return intentToColor[intent];
};

const Button = React.forwardRef((props: ButtonProps, ref: any) => {
  const {
    children,
    fluid = false,
    intent = 'primary',
    inverted = false,
    is = 'button',
    large = false,
    loading = false,
    variant = 'fill',
    disabled = false,
    ...restProps
  } = props;
  const [leftIcon, rightIcon, restChildren] = useIcons(React.Children.toArray(children));
  const [isHovered, setIsHovered] = useState(false);
  // TODO: Considering expanding the Icon props to including color logic like this
  const iconColor = getIconColor(variant === 'fill', disabled, intent);
  return (
    <StyledButton
      onMouseEnter={() => setIsHovered(true)}
      onFocus={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onBlur={() => setIsHovered(false)}
      variant={variant}
      intent={intent}
      inverted={inverted}
      as={is}
      large={large}
      hasIcon={!!(leftIcon || rightIcon)}
      fluid={fluid}
      loader={loading}
      ref={ref}
      disabled={disabled}
      {...restProps}>
      <StyledButtonContent>
        {loading ? (
          <Loader color={variant === 'fill' ? 'white' : (intentToColor[intent] as PaletteNames)} size="tiny" />
        ) : (
          <>{children}</>
        )}
      </StyledButtonContent>
      {/* {loading ? (
        <Loader color={variant === 'fill' ? 'white' : (intentToColor[intent] as PaletteNames)} size="tiny" />
      ) : (
        <>
          {fluid ? (
            <StyledLeftFluidContent>
              {leftIcon
                ? React.cloneElement(leftIcon as React.ReactElement, {
                    size: large ? 64 : 38,
                    color: iconColor,
                    isHovered,
                  })
                : null}
              <StyledButtonContent>{restChildren}</StyledButtonContent>
            </StyledLeftFluidContent>
          ) : (
            <>
              {leftIcon
                ? React.cloneElement(leftIcon as React.ReactElement, {
                    size: large ? 64 : 38,
                    color: iconColor,
                    isHovered,
                  })
                : null}
              <StyledButtonContent>{restChildren}</StyledButtonContent>
            </>
          )}
          {rightIcon
            ? React.cloneElement(rightIcon as React.ReactElement, {
                color: iconColor,
                isHovered,
              })
            : null}
        </>
      )} */}
    </StyledButton>
  );
});

export default Button;
