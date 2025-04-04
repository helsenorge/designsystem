import React from 'react';

import classNames from 'classnames';

import HelpSign from './HelpSign';
import { AnalyticsId, IconSize } from '../../constants';
import { useHover } from '../../hooks/useHover';
import { getColor } from '../../theme/currys';
import { getAriaLabelAttributes } from '../../utils/accessibility';
import { mergeRefs } from '../../utils/refs';
import Icon, { SvgIcon } from '../Icon';

import styles from './styles.module.scss';

export type TriggerTags = 'button' | 'span';

export type TriggerVariant = 'help'; // @todo Support variant='info' in later version

export type TriggerSize = 'medium' | 'large';

export type TriggerOnColor = 'onlight' | 'ondark';

export interface TriggerProps extends Pick<React.InputHTMLAttributes<HTMLButtonElement>, 'onClick' | 'aria-haspopup' | 'aria-controls'> {
  /**
   * Sets aria-label of the trigger. ariaLabel or ariaLabelledById MUST be set!
   */
  ariaLabel?: string;
  /**
   * Sets aria-labelledby of the trigger. ariaLabel or ariaLabelledById MUST be set!
   */
  ariaLabelledById?: string;
  /**
   * Controls the icon and color. Default: help.
   */
  /** @deprecated This will be removed in next major version */
  variant?: TriggerVariant;
  /**
   * Changes the design based on the background the trigger is placed on. Default: onlight.
   */
  onColor?: TriggerOnColor;
  /**
   * Size of the trigger. Default: medium.
   */
  size?: TriggerSize;
  /**
   * Indicates that the trigger is in use.
   */
  selected?: boolean;
  /**
   * Indicates that the trigger is hovered. Used in combination with htmlMarkup=span to force visual hover state.
   */
  isHovered?: boolean;
  /**
   * Changes the underlying element of the trigger. If set to span, the trigger will be a non-interactive icon. Default: button
   */
  htmlMarkup?: TriggerTags;
  /**
   * Classname will be applied to the button element.
   */
  className?: string;
  /**
   * Optional test id.
   */
  testId?: string;
}

const iconMap: Record<TriggerVariant, SvgIcon> = {
  help: HelpSign,
  //info: InfoSignStroke, // @todo Support variant='info' in later version
};

const iconSizeMap: Record<TriggerSize, IconSize> = {
  medium: IconSize.XSmall,
  large: IconSize.Small,
};

const getIconColor = (onColor: TriggerOnColor, variant: TriggerVariant, isActive: boolean): string | undefined => {
  if (onColor === 'ondark') {
    return 'white';
  }

  const depth = isActive ? 800 : 600;

  if (variant === 'help') {
    return getColor('plum', depth);
  }

  if (variant === 'info') {
    return getColor('blueberry', depth);
  }
};

const Trigger = React.forwardRef<HTMLButtonElement, TriggerProps>(
  (
    {
      ariaLabel,
      ariaLabelledById,
      variant = 'help',
      onColor = 'onlight',
      size = 'medium',
      selected = false,
      isHovered,
      htmlMarkup = 'button',
      className,
      testId,
      ...rest
    },
    ref
  ) => {
    const { isHovered: buttonIsHovered, hoverRef } = useHover<HTMLButtonElement>();

    const triggerClasses = classNames(
      styles.trigger,
      onColor === 'onlight' && styles[`trigger--${variant}`], // variants look the same when onColor=ondark
      onColor === 'ondark' && styles[`trigger--${onColor}`],
      styles[`trigger--${size}`],
      isHovered && styles[`trigger--hovered`],
      selected && styles[`trigger--selected`],
      className
    );

    const iconColor = getIconColor(onColor, variant, isHovered || buttonIsHovered || selected);

    const icon = <Icon svgIcon={iconMap[variant]} size={iconSizeMap[size]} color={iconColor} isHovered={isHovered || buttonIsHovered} />;

    if (htmlMarkup === 'span') {
      return (
        <span data-testid={testId} data-analyticsid={AnalyticsId.Trigger} className={triggerClasses}>
          {icon}
        </span>
      );
    }

    const ariaLabelAttributes = getAriaLabelAttributes({ label: ariaLabel, id: ariaLabelledById });

    return (
      <button
        aria-label={ariaLabel}
        type="button"
        data-testid={testId}
        data-analyticsid={AnalyticsId.Trigger}
        className={triggerClasses}
        ref={mergeRefs([ref, hoverRef])}
        aria-expanded={selected}
        {...ariaLabelAttributes}
        {...rest}
      >
        {icon}
      </button>
    );
  }
);

Trigger.displayName = 'Trigger';

export default Trigger;
