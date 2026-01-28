import React, { type AriaAttributes, useEffect, useRef } from 'react';

import classNames from 'classnames';

import Icon, { IconSize } from './../Icon';
import { type HTMLButtonProps, type HTMLAnchorProps, AnalyticsId } from '../../constants';
import { type BaseIconElement, useIcons } from '../../hooks/useIcons';
import { useIsMobileBreakpoint } from '../../hooks/useIsMobileBreakpoint';
import { usePseudoClasses } from '../../hooks/usePseudoClasses';
import { getColor } from '../../theme/currys/color';
import { isTest, isProd } from '../../utils/environment';
import ArrowRight from '../Icons/ArrowRight';

import buttonStyles from './styles.module.scss';

export type ButtonConcept = 'normal' | 'destructive';
export type ButtonVariant = 'fill' | 'outline' | 'borderless';
export type ButtonSize = 'medium' | 'large';
export type ButtonOnColor = 'onlight' | 'ondark';
export type ButtonTags = 'button' | 'a';
export type ButtonArrows = 'icon' | 'accessibility-character';
export type ButtonTextPosition = 'left' | 'centered';

export interface ButtonProps extends Omit<HTMLButtonProps, 'onClick' | 'type'>, Omit<HTMLAnchorProps, 'onClick'>, AriaAttributes {
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
  onColor?: ButtonOnColor;
  /** Function that is called when the Button loses focus */
  onBlur?: () => void;
  /** Function that is called when clicked */
  onClick?: (
    e?: React.MouseEvent<HTMLElement, MouseEvent> | React.FormEvent<unknown> | React.KeyboardEvent<HTMLUListElement> | null
  ) => void;
  /** Changes the button colors for different backgrounds. (Large not available in borderless variant) */
  size?: ButtonSize;
  /** Changes the visual representation of the button. */
  variant?: ButtonVariant;
  /** Specifies the focus order relative to the other buttons or controls on the page  */
  tabIndex?: number;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** Adds custom classes to the text */
  textClassName?: string;
  /** Sets the position of the text in the button - only applies when button is fluid */
  textPosition?: ButtonTextPosition;
  /** Button type. Default: button */
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  /** Ref that is passed to the component */
  ref?: React.RefObject<HTMLButtonElement | HTMLAnchorElement | null>;
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

const Button: React.FC<ButtonProps> = props => {
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
    onColor = 'onlight',
    onBlur,
    onClick,
    size = 'medium',
    variant = 'fill',
    href,
    tabIndex,
    testId,
    target,
    type = 'button',
    textClassName,
    textPosition = 'left',
    ref,
    ...restProps
  } = props;
  const [leftIcon, rightIcon, restChildren] = useIcons(React.Children.toArray(children));
  const { refObject, isHovered } = usePseudoClasses<HTMLElement | null>(ref);
  const buttonContentRef = useRef<HTMLDivElement>(null);
  const onlyIcon = !!(leftIcon || rightIcon) && !restChildren;
  const bothIcons = leftIcon && (rightIcon || arrow) && !onlyIcon;
  const onDark = onColor === 'ondark';
  const isMobile = useIsMobileBreakpoint();
  const destructive = concept === 'destructive' && !disabled;
  const outlineVariant = variant === 'outline';
  const borderlessVariant = variant === 'borderless';
  const iconColor = getIconColor(variant === 'fill', borderlessVariant, disabled, concept, onDark, isMobile);
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
  const buttonTextClasses = classNames(
    buttonStyles['button__text'],
    {
      [buttonStyles['button__text--ellipsis']]: ellipsis,
      [buttonStyles['button__text--centered']]: fluid && textPosition === 'centered',
    },
    textClassName
  );
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
          color: iconElement?.props.color && !disabled ? iconElement.props.color : iconColor,
          isHovered: iconElement.props.isHovered === undefined ? !disabled && isHovered : iconElement.props.isHovered,
          className: iconClassName,
        })
      : null;
  };

  const renderButtonContent = (): React.ReactNode => {
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

  const renderbuttonContentWrapper = (): React.ReactNode => (
    <span className={buttonClasses}>
      {renderIcon(leftIcon, getLargeIconSize(large, isMobile), !onlyIcon ? buttonStyles['button__left-icon'] : undefined)}
      {renderButtonContent()}
      {hasArrow
        ? renderIcon(
            <Icon svgIcon={ArrowRight} />,
            getLargeIconSize(large, isMobile),
            classNames(buttonStyles['button__arrow'], { [buttonStyles['button__arrow--both-icons']]: bothIcons })
          )
        : renderIcon(rightIcon, getLargeIconSize(large, isMobile), buttonStyles['button__right-icon'])}
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
          ref={refObject as React.Ref<HTMLButtonElement>}
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
          ref={refObject as React.Ref<HTMLAnchorElement>}
          tabIndex={tabIndex}
          {...restProps}
        >
          {renderbuttonContentWrapper()}
        </a>
      )}
    </>
  );
};

export default Button;
