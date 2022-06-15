import React from 'react';

import { HTMLButtonProps, HTMLAnchorProps, AnalyticsId } from '../../constants';
import { getColor } from '../../theme/currys/color';
import { IconProps, IconSize } from './../Icons/';
import Loader from '../Loader';
import { PaletteNames } from '../../theme/palette';
import { useHover } from '../../hooks/useHover';
import { useIcons } from '../../hooks/useIcons';
import { Breakpoint, useBreakpoint } from '../../hooks/useBreakpoint';
import { breakpoints } from '../../theme/grid';
import classNames from 'classnames';

import buttonStyles from './styles.module.scss';

export type ButtonIntents = 'primary' | 'warning' | 'danger';
export type ButtonIntentsColors = 'blueberry' | 'banana' | 'cherry' | 'neutral' | 'white';
export type ButtonTags = 'button' | 'a';
export type ButtonVariants = 'fill' | 'outline' | 'borderless';
export type ButtonHoverVariants = 'auto' | 'never' | 'always';
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
  /** Gives a unique id to the button */
  id?: string;
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
  /** Button type. Default: button */
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  /** Changes the size of the button to large. */
  large?: boolean;
  /** Sets the button into a loading state displaying <Loader /> as content. */
  loading?: boolean;
  /** Function that is called when  clicked */
  onClick?: (e?: React.MouseEvent<HTMLElement, MouseEvent> | React.FormEvent<{}> | React.KeyboardEvent<HTMLUListElement> | null) => void;
  /** Changes the visual representation of the button. */
  variant?: ButtonVariants;
  /** Disables text wrapping and enables ellipsis. */
  ellipsis?: boolean;
  /** Can override auto hover  */
  hoverEffect?: ButtonHoverVariants;
  /** Can override iconSize  */
  iconSize?: IconSize;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** Indicates that its element can be focused, avoid using values greater than 0 */
  tabIndex?: number;
}

const getIconColor = (fill: boolean, disabled: boolean, intent: ButtonIntents, inverted: boolean, hovered: boolean): string => {
  if (disabled) return getColor('neutral', 600);
  if ((fill && !inverted) || (!fill && inverted)) return 'white';
  return getColor(intentToColor[intent], hovered ? 700 : 600);
};

// TODO: Denne er forvirrende
const getLargeIconSize = (large: boolean, breakpoint: Breakpoint): IconSize => {
  const mobile = breakpoint < breakpoints.md;
  if (mobile && large) return IconSize.Small;
  if (large) return IconSize.Medium;
  return IconSize.XSmall;
};

const Button = React.forwardRef(function ButtonForwardedRef(
  props: ButtonProps,
  ref: React.ForwardedRef<HTMLButtonElement | HTMLAnchorElement>
) {
  const {
    id,
    children,
    className = '',
    fluid = false,
    intent = 'primary',
    inverted = false,
    htmlMarkup = 'button',
    type = 'button',
    onClick,
    large = false,
    loading = false,
    variant = 'fill',
    disabled = false,
    ellipsis = false,
    hoverEffect: hoverVariant = 'auto',
    iconSize,
    tabIndex,
    testId,
    href,
    target,
    ...restProps
  } = props;

  const [leftIcon, rightIcon, restChildren] = useIcons(React.Children.toArray(children));
  let { hoverRef, isHovered } =
    htmlMarkup === 'button'
      ? useHover<HTMLButtonElement>(ref as React.RefObject<HTMLButtonElement>)
      : useHover<HTMLAnchorElement>(ref as React.RefObject<HTMLAnchorElement>);
  isHovered = hoverVariant === 'auto' ? isHovered : hoverVariant === 'always'; // TODO: Kanskje gjøre denne bedre?
  const iconColor = getIconColor(variant === 'fill', disabled, intent, inverted, isHovered);
  const breakpoint = useBreakpoint();
  const fillVariant = variant === 'fill';
  const outlineVariant = variant === 'outline';
  const borderlessVariant = variant === 'borderless';
  const warningIntent = intent === 'warning';
  const dangerIntent = intent === 'danger';
  const hasIcon = !!(leftIcon || rightIcon) && !loading;
  const rest = { ...(restProps as React.HtmlHTMLAttributes<HTMLButtonElement>) };

  const buttonClasses = classNames(
    buttonStyles.button,
    {
      [buttonStyles['button--fluid']]: fluid,
      [buttonStyles['button--large']]: large,
      [buttonStyles[`button--warning`]]: warningIntent,
      [buttonStyles[`button--danger`]]: dangerIntent,
      [buttonStyles[`button--inverted`]]: inverted,
      [buttonStyles['button--fill']]: fillVariant,
      [buttonStyles['button--outline']]: outlineVariant,
      [buttonStyles['button--borderless']]: borderlessVariant,
      [buttonStyles['button--with-icon']]: hasIcon,
      [buttonStyles['button--ellipsis']]: ellipsis,
    },
    className
  );

  const contentClasses = classNames(buttonStyles.button__content, {
    [buttonStyles['button__content--warning']]: warningIntent,
    [buttonStyles['button__content--danger']]: dangerIntent,
    [buttonStyles['button__content--fill']]: fillVariant,
    [buttonStyles['button__content--borderless']]: borderlessVariant,
    [buttonStyles['button__content--outline']]: outlineVariant,
    [buttonStyles['button__content--with-icon']]: hasIcon && !borderlessVariant,
    [buttonStyles['button__content--large']]: large,
    [buttonStyles['button__content--ellipsis']]: ellipsis,
    [buttonStyles['button__content--inverted']]: inverted,
    [buttonStyles['button__content--fluid']]: fluid,
  });

  const leftFluidContentClasses = classNames(buttonStyles['button__left-fluid-content'], {
    [buttonStyles['button__left-fluid-content--with-icon']]: hasIcon,
    [buttonStyles['button__left-fluid-content--large']]: large,
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
    return restChildren ? <span className={contentClasses}>{restChildren}</span> : null;
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
                {renderIcon(leftIcon, iconSize || getLargeIconSize(large, breakpoint), iconColor, isHovered)}
                {renderButtonContent()}
              </div>
            ) : (
              <>
                {renderIcon(leftIcon, iconSize || getLargeIconSize(large, breakpoint), iconColor, isHovered)}
                {renderButtonContent()}
              </>
            )}
            {renderIcon(rightIcon, iconSize || IconSize.XSmall, iconColor, isHovered)}
          </>
        )}
      </span>
    );
  };

  return (
    <>
      {htmlMarkup === 'button' && (
        <button
          id={id}
          onClick={onClick}
          disabled={disabled}
          data-testid={testId}
          data-analyticsid={AnalyticsId.Button}
          className={buttonClasses}
          ref={hoverRef as React.ForwardedRef<HTMLButtonElement>}
          tabIndex={tabIndex}
          type={type}
          {...rest}
        >
          {renderbuttonContentWrapper()}
        </button>
      )}
      {htmlMarkup === 'a' && (
        <a
          id={id}
          onClick={onClick}
          data-testid={testId}
          data-analyticsid={AnalyticsId.Button}
          className={buttonClasses}
          href={href}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : props.rel}
          ref={hoverRef as React.ForwardedRef<HTMLAnchorElement>}
          tabIndex={tabIndex}
          {...restProps}
        >
          {renderbuttonContentWrapper()}
        </a>
      )}
    </>
  );
});

export default Button;
