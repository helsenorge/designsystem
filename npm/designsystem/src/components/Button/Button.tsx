import React, { AriaAttributes, useEffect, useRef } from 'react';

import classNames from 'classnames';

import Icon, { IconSize } from './../Icon';
import { HTMLButtonProps, HTMLAnchorProps, AnalyticsId } from '../../constants';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import { useHover } from '../../hooks/useHover';
import { BaseIconElement, useIcons } from '../../hooks/useIcons';
import { getColor } from '../../theme/currys/color';
import { breakpoints } from '../../theme/grid';
import { isTest, isProd } from '../../utils/environment';
import ArrowRight from '../Icons/ArrowRight';

import buttonStyles from './styles.module.scss';

export type ButtonConcept = 'normal' | 'destructive';
export type ButtonVariant = 'fill' | 'outline' | 'borderless';
export type ButtonSize = 'medium' | 'large';
export type ButtonMode = 'onlight' | 'ondark';
export type ButtonTags = 'button' | 'a';
export type ButtonArrows = 'icon' | 'accessibility-character';

export interface ButtonProps extends HTMLButtonProps, HTMLAnchorProps, AriaAttributes {
  /** Sets the aria-label of the button, use when the button only includes an icon */
  ariaLabel?: string;
  /** Gives a unique id to the button */
  id?: string;
  /** Sets the content of the button. */
  children: React.ReactNode;
  /** Adds custom classes to the wrapper element. */
  wrapperClassName?: string;
  /** Adds custom classes to the element. */
  className?: string;
  /** Enables an arrow icon to the right inside the button (Not available in borderless variant) */
  arrow?: ButtonArrows;
  /** Changes the intent of the button. Mostly changes the color profile. */
  concept?: ButtonConcept;
  /** Disables text wrapping and enables ellipsis. */
  ellipsis?: boolean;
  /** Makes the button scale to full width of its parent element. */
  fluid?: boolean;
  /** Changes the underlying element of the button. */
  htmlMarkup?: ButtonTags;
  /** Changes the button colors for different backgrounds. */
  mode?: ButtonMode;
  /** Function that is called when the Button loses focus */
  onBlur?: () => void;
  /** Function that is called when clicked */
  onClick?: (e?: React.MouseEvent<HTMLElement, MouseEvent> | React.FormEvent<{}> | React.KeyboardEvent<HTMLUListElement> | null) => void;
  /** Changes the button colors for different backgrounds. (Large not available in borderless variant) */
  size?: ButtonSize;
  /** Changes the visual representation of the button. */
  variant?: ButtonVariant;
  /** Specifies the focus order relative to the other buttons or controls on the page  */
  tabIndex?: number;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** Button type. Default: button */
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
}

const getIconColor = (
  fill: boolean,
  borderless: boolean,
  disabled: boolean,
  concept: ButtonConcept,
  ondark: boolean,
  mobile: boolean
): string => {
  if (mobile && disabled) {
    return !ondark || fill ? getColor('neutral', !borderless ? 700 : 500) : getColor('white');
  }
  if (disabled) {
    return !ondark || fill ? getColor('neutral', 500) : `${getColor('white')}b3`;
  }
  if ((fill && !ondark) || (!fill && ondark)) {
    return 'white';
  }

  return concept === 'normal' ? getColor('blueberry', 600) : getColor('cherry', 500);
};
const getLargeIconSize = (large: boolean, mobile: boolean): IconSize => {
  if (mobile && large) return IconSize.Small;
  if (large) return IconSize.Medium;
  return IconSize.XSmall;
};

const checkOnlyIconAria = (onlyIcon: boolean, ariaLabel: string | undefined, devEnv: boolean): void => {
  if (devEnv && onlyIcon && (ariaLabel === undefined || ariaLabel === '')) {
    throw new Error('Fyll inn ariaLabel prop på Button uten tekst for å opprettholde UU krav');
  }
};

const Button = React.forwardRef(function ButtonForwardedRef(
  props: ButtonProps,
  ref: React.ForwardedRef<HTMLButtonElement | HTMLAnchorElement>
) {
  const {
    ariaLabel,
    id,
    children,
    wrapperClassName,
    className,
    arrow,
    concept = 'normal',
    disabled = false,
    ellipsis = false,
    fluid = false,
    htmlMarkup = 'button',
    mode = 'onlight',
    onBlur,
    onClick,
    size = 'medium',
    variant = 'fill',
    href,
    tabIndex,
    testId,
    target,
    type = 'button',
    ...restProps
  } = props;

  const [leftIcon, rightIcon, restChildren] = useIcons(React.Children.toArray(children));
  const { hoverRef, isHovered } =
    htmlMarkup === 'button'
      ? useHover<HTMLButtonElement>(ref as React.RefObject<HTMLButtonElement>)
      : useHover<HTMLAnchorElement>(ref as React.RefObject<HTMLAnchorElement>);
  const buttonContentRef = useRef<HTMLDivElement>(null);
  const onlyIcon = !!(leftIcon || rightIcon) && !restChildren;
  const bothIcons = leftIcon && (rightIcon || arrow) && !onlyIcon;
  const onDark = mode === 'ondark';
  const breakpoint = useBreakpoint();
  const mobile = breakpoint < breakpoints.md;
  const destructive = concept === 'destructive' && !disabled;
  const outlineVariant = variant === 'outline';
  const borderlessVariant = variant === 'borderless';
  const iconColor = getIconColor(variant === 'fill', borderlessVariant, disabled, concept, onDark, mobile);
  const hasArrow = arrow === 'icon' && !borderlessVariant;
  const large = size === 'large' && !destructive && !borderlessVariant;
  const hasUURightArrow = arrow === 'accessibility-character' && !fluid && !leftIcon && !rightIcon && !hasArrow && borderlessVariant;
  const rest = { ...restProps };

  const buttonWrapperClasses = classNames(
    buttonStyles['button-wrapper'],
    { [buttonStyles['button-wrapper--fluid']]: fluid || ellipsis },
    wrapperClassName
  );
  const buttonClasses = classNames(
    buttonStyles.button,
    {
      [buttonStyles['button--destructive']]: destructive,
      [buttonStyles['button--normal']]: !large,
      [buttonStyles['button--large']]: large,
      [buttonStyles['button--outline']]: outlineVariant,
      [buttonStyles['button--borderless']]: borderlessVariant,
      [buttonStyles['button--left-icon']]: leftIcon && !onlyIcon,
      [buttonStyles['button--right-icon']]: rightIcon && !onlyIcon,
      [buttonStyles['button--both-icons']]: bothIcons,
      [buttonStyles['button--only-icon']]: onlyIcon,
      [buttonStyles['button--arrow']]: hasArrow,
      [buttonStyles['button--on-dark']]: onDark,
    },
    className
  );
  const buttonTextClasses = classNames(buttonStyles['button__text'], {
    [buttonStyles['button__text--ellipsis']]: ellipsis,
  });
  const diagonalClasses = classNames(buttonStyles['diagonal'], {
    [buttonStyles['diagonal--on-dark']]: onDark,
  });

  useEffect(() => {
    checkOnlyIconAria(onlyIcon, ariaLabel, !isTest() && !isProd());
  }, []);

  const renderIcon = (iconElement: BaseIconElement | null, iconSize: number, iconClassName?: string): BaseIconElement | null => {
    return iconElement
      ? React.cloneElement(iconElement, {
          size: iconSize,
          color: iconElement?.props.color ? iconElement.props.color : iconColor,
          isHovered,
          className: iconClassName,
        })
      : null;
  };

  const renderButtonContent = (): JSX.Element => {
    return (
      <span className={buttonTextClasses} ref={buttonContentRef}>
        {disabled && borderlessVariant && (
          <span className={diagonalClasses}>
            <span className={buttonStyles['diagonal__line']} />
          </span>
        )}
        <span>{onlyIcon ? ariaLabel : restChildren}</span>
      </span>
    );
  };

  const renderbuttonContentWrapper = (): JSX.Element => (
    <span className={buttonClasses}>
      {renderIcon(leftIcon, getLargeIconSize(large, mobile), !onlyIcon ? buttonStyles['button__left-icon'] : undefined)}
      {renderButtonContent()}
      {hasArrow
        ? renderIcon(
            <Icon svgIcon={ArrowRight} />,
            getLargeIconSize(large, mobile),
            classNames(buttonStyles['button__arrow'], { [buttonStyles['button__arrow--both-icons']]: bothIcons })
          )
        : renderIcon(rightIcon, getLargeIconSize(large, mobile), buttonStyles['button__right-icon'])}
      {hasUURightArrow && (
        <span style={{ color: iconColor }} className={buttonStyles['button__right-unicode-arrow']} aria-hidden>
          {'  →'}
        </span>
      )}
    </span>
  );

  return (
    <>
      {htmlMarkup === 'button' && (
        <button
          id={id}
          onBlur={onBlur}
          onClick={onClick}
          disabled={disabled}
          data-testid={testId}
          data-analyticsid={AnalyticsId.Button}
          className={buttonWrapperClasses}
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
          onBlur={onBlur}
          onClick={onClick}
          data-testid={testId}
          data-analyticsid={AnalyticsId.Button}
          className={buttonWrapperClasses}
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
