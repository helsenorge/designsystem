import React from 'react';

import { HTMLButtonProps, HTMLAnchorProps } from '../../constants';
import { getColor } from '../../theme/currys/color';
import { IconProps } from './../Icons/';
import Loader from '../Loader';
import { PaletteNames } from '../../theme/palette';
import { useHover } from '../../hooks/useHover';
import { useWindowSize } from '../../hooks/useWindowSize';
import { breakpoints } from '../../theme/grid';
import classNames from 'classnames';

import buttonStyles from './styles.module.scss';

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
  /** Sets the content of the button. */
  children: React.ReactNode;
  /** Adds custom classes to the element. */
  className?: string;
  /** Makes the button scale to full width of its parent element. */
  fluid?: boolean;
  /** Changes the intent of the button. Mostly changes the color profile. */
  intent?: ButtonIntents;
  /** Changes the color presentation for different backgrounds. */
  inverted?: boolean;
  /** Changes the underlying element of the button. */
  htmlMarkup?: ButtonTags;
  /** Changes the size of the button to large. */
  large?: boolean;
  /** Sets the button into a loading state displaying <Loader /> as content. */
  loading?: boolean;
  onClick?: (e?: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  /** Changes the visual representation of the button. */
  variant?: ButtonVariants;
  /** Disables text wrapping and enables ellipsis. */
  ellipsis?: boolean;
  /** Sets the data-testid attribute. */
  testId?: string;
}

// TODO: Consider making this a shared hook

function useIcons(children: React.ReactNode[]): Array<React.ReactElement<IconProps> | React.ReactNode | {} | undefined | null> {
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

const getIconColor = (fill: boolean, disabled: boolean, intent: ButtonIntents, inverted: boolean, hovered: boolean): string => {
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

const Button = React.forwardRef(function ButtonForwardedRef(props: ButtonProps, ref: React.ForwardedRef<HTMLButtonElement>) {
  const {
    children,
    className = '',
    fluid = false,
    intent = 'primary',
    inverted = false,
    htmlMarkup = 'button',
    onClick,
    large = false,
    loading = false,
    variant = 'fill',
    disabled = false,
    ellipsis = false,
    testId,
    href,
    target,
  } = props;

  const [leftIcon, rightIcon, restChildren] = useIcons(React.Children.toArray(children));
  const { hoverRef, isHovered } = useHover<HTMLButtonElement>(ref as React.RefObject<HTMLButtonElement>);
  const iconColor = getIconColor(variant === 'fill', disabled, intent, inverted, isHovered);
  const size = useWindowSize();
  const fillVariant = variant === 'fill';
  const outlineVariant = variant === 'outline';
  const borderlessVariant = variant === 'borderless';
  const warningIntent = intent === 'warning';
  const dangerIntent = intent === 'danger';
  const hasIcon = !!(leftIcon || rightIcon);
  const hasIconBorder = hasIcon && !loading && !borderlessVariant;
  const hasIconBorderless = hasIcon && !loading && borderlessVariant;

  const buttonClasses = classNames(
    buttonStyles.button,
    {
      [buttonStyles['button--fluid']]: fluid,
      [buttonStyles['button--large']]: large,
      [buttonStyles['button--fill']]: fillVariant,
      [buttonStyles[`button--fill-warning`]]: fillVariant && warningIntent,
      [buttonStyles[`button--fill-danger`]]: fillVariant && dangerIntent,
      [buttonStyles[`button--fill-inverted`]]: fillVariant && inverted,
      [buttonStyles[`button--fill-not-inverted`]]: fillVariant && !inverted,
      [buttonStyles['button--outline']]: outlineVariant,
      [buttonStyles['button--outline-warning']]: outlineVariant && warningIntent,
      [buttonStyles['button--outline-danger']]: outlineVariant && dangerIntent,
      [buttonStyles['button--outline-inverted']]: outlineVariant && inverted,
      [buttonStyles['button--borderless']]: borderlessVariant,
      [buttonStyles['button--borderless-warning']]: borderlessVariant && warningIntent,
      [buttonStyles['button--borderless-danger']]: borderlessVariant && dangerIntent,
      [buttonStyles['button--borderless-inverted']]: borderlessVariant && inverted,
      [buttonStyles['button--with-icon']]: hasIconBorder,
      [buttonStyles['button--large-with-icon']]: hasIconBorder && large,
      [buttonStyles['button--ellipsis-with-icon']]: hasIconBorder && ellipsis,
      [buttonStyles['button--borderless-with-icon']]: hasIconBorderless,
      [buttonStyles['button--large-borderless-with-icon']]: hasIconBorderless && large,
    },
    className
  );

  const contentClasses = classNames(buttonStyles.button__content, {
    [buttonStyles['button__content--fill']]: fillVariant,
    [buttonStyles['button__content--fill-warning']]: fillVariant && warningIntent,
    [buttonStyles['button__content--fill-danger']]: fillVariant && dangerIntent,
    [buttonStyles['button__content--fill-not-inverted']]: fillVariant && !inverted,
    [buttonStyles['button__content--borderless']]: borderlessVariant,
    [buttonStyles['button__content--borderless-warning']]: borderlessVariant && warningIntent,
    [buttonStyles['button__content--borderless-danger']]: borderlessVariant && dangerIntent,
    [buttonStyles['button__content--borderless-inverted']]: borderlessVariant && inverted,
    [buttonStyles['button__content--with-icon']]: hasIconBorder,
    [buttonStyles['button__content--large-with-icon']]: hasIconBorder && large,
    [buttonStyles['button__content--ellipsis-with-icon']]: hasIconBorder && ellipsis,
    [buttonStyles['button__content--fluid-with-icon']]: hasIconBorder && fluid,
    [buttonStyles['button__content--large-fluid-with-icon']]: hasIconBorder && fluid && large,
  });

  const leftFluidContentClasses = classNames(buttonStyles['button__left-fluid-content'], {
    [buttonStyles['button__left-fluid-content--with-icon']]: hasIcon,
    [buttonStyles['button__left-fluid-content--large-with-icon']]: hasIcon && large,
  });

  function renderIcon(
    iconElement: React.ReactElement<IconProps> | {} | undefined | null,
    size: number,
    iconColor: string,
    hover: boolean
  ): React.ReactElement<IconProps> | React.Component<IconProps> | null {
    const color =
      iconElement && (iconElement as React.ReactElement<IconProps>).props && (iconElement as React.ReactElement<IconProps>).props.color
        ? (iconElement as React.ReactElement<IconProps>).props.color
        : iconColor;
    return iconElement && Object.keys(iconElement).length > 0
      ? React.cloneElement(iconElement as React.ReactElement<IconProps>, { size, color, isHovered: hover })
      : null;
  }

  const renderButtonContent = () => {
    return <span className={contentClasses}>{restChildren}</span>;
  };

  const renderbuttonContentWrapper = () => {
    return (
      <span className={buttonStyles['content-wrapper']}>
        {loading ? (
          <div className={buttonStyles['button__left-fluid-content']}>
            <Loader
              testId={'test-id-loader'}
              color={variant === 'fill' && !inverted ? 'white' : (intentToColor[intent] as PaletteNames)}
              size="tiny"
            />
          </div>
        ) : (
          <>
            {fluid ? (
              <div className={leftFluidContentClasses}>
                {renderIcon(leftIcon, getLargeIconSize(large, size.width), iconColor, isHovered)}
                {renderButtonContent()}
              </div>
            ) : (
              <>
                {renderIcon(leftIcon, getLargeIconSize(large, size.width), iconColor, isHovered)}
                {renderButtonContent()}
              </>
            )}
            {renderIcon(rightIcon, 38, iconColor, isHovered)}
          </>
        )}
      </span>
    );
  };

  return (
    <>
      {htmlMarkup === 'button' && (
        <button onClick={onClick} disabled={disabled} data-testid={testId} className={buttonClasses} ref={hoverRef}>
          {renderbuttonContentWrapper()}
        </button>
      )}
      {htmlMarkup === 'a' && (
        <a onClick={onClick} data-testid={testId} className={buttonClasses} href={href} target={target}>
          {renderbuttonContentWrapper()}
        </a>
      )}
    </>
  );
});

export default Button;
