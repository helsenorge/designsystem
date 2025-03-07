import React from 'react';

import classNames from 'classnames';

import HelpSign from './HelpSign';
import { AnalyticsId, IconSize } from '../../constants';
import { useHover } from '../../hooks/useHover';
import { getColor } from '../../theme/currys';
import { getAriaLabelAttributes } from '../../utils/accessibility';
import { mergeRefs } from '../../utils/refs';
import Icon from '../Icon';

import styles from './styles.module.scss';

export type HelpTriggerTags = 'button' | 'span';

export type HelpTriggerSize = 'medium' | 'large';

export type HelpTriggerOnColor = 'onlight' | 'ondark';

export interface HelpTriggerProps
  extends Pick<React.InputHTMLAttributes<HTMLButtonElement>, 'onClick' | 'aria-haspopup' | 'aria-controls'> {
  /**
   * Sets aria-label of the trigger. ariaLabel or ariaLabelledById MUST be set!
   */
  ariaLabel?: string;
  /**
   * Sets aria-labelledby of the trigger. ariaLabel or ariaLabelledById MUST be set!
   */
  ariaLabelledById?: string;
  /**
   * Changes the design based on the background the help trigger is placed on. Default: onlight.
   */
  onColor?: HelpTriggerOnColor;
  /**
   * Size of the trigger. Default: medium.
   */
  size?: HelpTriggerSize;
  /**
   * Indicates that the help trigger is in use.
   */
  selected?: boolean;
  /**
   * Indicates that the help trigger is hovered. Used in combination with htmlMarkup=span to force visual hover state.
   */
  isHovered?: boolean;
  /**
   * Changes the underlying element of the trigger. If set to span, the trigger will be a non-interactive icon. Default: button
   */
  htmlMarkup?: HelpTriggerTags;
  /**
   * Classname will be applied to the button element.
   */
  className?: string;
  /**
   * Optional test id.
   */
  testId?: string;
}

const iconSizeMap: Record<HelpTriggerSize, IconSize> = {
  medium: IconSize.XSmall,
  large: IconSize.Small,
};

const getIconColor = (onColor: HelpTriggerOnColor, isActive: boolean): string | undefined => {
  if (onColor === 'ondark') {
    return 'white';
  }

  const depth = isActive ? 800 : 600;
  return getColor('plum', depth);
};

const HelpTrigger = React.forwardRef<HTMLButtonElement, HelpTriggerProps>(
  (
    {
      ariaLabel,
      ariaLabelledById,
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
      styles['help-trigger'],
      onColor === 'onlight' && styles[`help-trigger--help`], // variants look the same when onColor=ondark
      onColor === 'ondark' && styles[`help-trigger--${onColor}`],
      styles[`help-trigger--${size}`],
      isHovered && styles[`help-trigger--hovered`],
      selected && styles[`help-trigger--selected`],
      className
    );

    const iconColor = getIconColor(onColor, isHovered || buttonIsHovered || selected);

    const icon = <Icon svgIcon={HelpSign} size={iconSizeMap[size]} color={iconColor} isHovered={isHovered || buttonIsHovered} />;

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

HelpTrigger.displayName = 'HelpTrigger';

export default HelpTrigger;
