import React from 'react';
import {HTMLButtonProps, HTMLAnchorProps} from '../../constants';
import {StyledButton, StyledButtonContent, StyledLeftFluidContent, StyledButtonWrapper} from './Button.styled';
import {getColor} from '../../theme/currys/color';
import {IconProps} from './../Icons/';
import Loader from '../Loader';
import {PaletteNames} from '../../theme/palette';
import {useHover} from '../../hooks/useHover';
import {useWindowSize} from '../../hooks/useWindowSize';
import {breakpoints} from '../../theme/grid';

export type ButtonIntents = 'primary' | 'warning' | 'danger';
export type ButtonIntentsColors = 'blueberry' | 'banana' | 'cherry' | 'neutral' | 'white';
export type ButtonTags = 'button' | 'a';
export type ButtonVariants = 'fill' | 'outline' | 'borderless';

interface IntentToColor {
  primary: ButtonIntentsColors;
  warning: ButtonIntentsColors;
  danger: ButtonIntentsColors;
}

export const intentToColor: IntentToColor = {
  primary: 'blueberry',
  warning: 'banana',
  danger: 'cherry',
};

export interface ButtonProps extends HTMLButtonProps, HTMLAnchorProps {
  children: React.ReactNode;
  className?: string;
  fluid?: boolean;
  intent?: ButtonIntents;
  inverted?: boolean;
  htmlMarkup?: ButtonTags;
  large?: boolean;
  loading?: boolean;
  onClick?: (e?: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  variant?: ButtonVariants;
}

// TODO: Consider making this a shared hook

export function useIcons(
  children: React.ReactNode[],
): Array<React.ReactElement<IconProps> | React.ReactNode | {} | undefined | null> {
  let leftIcon: React.ReactElement<IconProps> | undefined | null = null;
  let rightIcon: React.ReactElement<IconProps> | undefined | null = null;

  if ((children[0] as React.ReactElement<IconProps>)?.props?.svgIcon !== undefined) {
    leftIcon = children.shift() as React.ReactElement<IconProps>;
  }
  if ((children[children.length - 1] as React.ReactElement<IconProps>)?.props?.svgIcon !== undefined) {
    rightIcon = children.pop() as React.ReactElement<IconProps>;
  }
  return [leftIcon, rightIcon, children];
}

const getIconColor = (
  fill: boolean,
  disabled: boolean,
  intent: ButtonIntents,
  inverted: boolean,
  hovered: boolean,
): string => {
  if (disabled) return getColor('neutral', 600);
  if ((fill && !inverted) || (!fill && inverted)) return 'white';
  return getColor(intentToColor[intent], hovered ? 700 : 600);
};

const getLargeIconSize = (large: boolean, screenWidth: number | undefined): number => {
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

  const [leftIcon, rightIcon, restChildren] = useIcons(React.Children.toArray(children));
  const {hoverRef, isHovered} = useHover<HTMLButtonElement>();
  const iconColor = getIconColor(variant === 'fill', disabled, intent, inverted, isHovered);
  const size = useWindowSize();

  function renderIcon(
    iconElement: React.ReactElement<IconProps> | {} | undefined | null,
    size: number,
    iconColor: string,
    hover: boolean,
  ): React.ReactElement<IconProps> | React.Component<IconProps> | null {
    const color =
      iconElement &&
      (iconElement as React.ReactElement<IconProps>).props &&
      (iconElement as React.ReactElement<IconProps>).props.color
        ? (iconElement as React.ReactElement<IconProps>).props.color
        : iconColor;
    return iconElement && Object.keys(iconElement).length > 0
      ? React.cloneElement(iconElement as React.ReactElement<IconProps>, {size, color, isHovered: hover})
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
