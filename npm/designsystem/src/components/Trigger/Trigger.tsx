import React from 'react';

import classNames from 'classnames';

import HelpSign from './HelpSign';
import { AnalyticsId, IconSize } from '../../constants';
import { useHover } from '../../hooks/useHover';
import { getColor } from '../../theme/currys';
import { getAriaLabelAttributes } from '../../utils/accessibility';
import { mergeRefs } from '../../utils/refs';
import Icon, { SvgIcon } from '../Icons';

import styles from './styles.module.scss';

export type TriggerVariant = 'help'; // @todo Support variant='info' in later version

export type TriggerSize = 'medium' | 'large';

export type TriggerMode = 'onlight' | 'ondark';

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
  variant?: TriggerVariant;
  /**
   * Changes the design based on the background the trigger is placed on. Default: onlight.
   */
  mode?: TriggerMode;
  /**
   * Size of the trigger. Default: medium.
   */
  size?: TriggerSize;
  /**
   * Indicates that the trigger is in use.
   */
  selected?: boolean;
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

const getIconColor = (mode: TriggerMode, variant: TriggerVariant, isActive: boolean): string | undefined => {
  if (mode === 'ondark') {
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
    { ariaLabel, ariaLabelledById, variant = 'help', mode = 'onlight', size = 'medium', selected = false, className, testId, ...rest },
    ref
  ) => {
    const { isHovered, hoverRef } = useHover<HTMLButtonElement>();

    const triggerClasses = classNames(
      styles.trigger,
      mode === 'onlight' && styles[`trigger--${variant}`], // variants look the same when mode=ondark
      styles[`trigger--${mode}`],
      styles[`trigger--${size}`],
      className
    );

    const ariaLabelAttributes = getAriaLabelAttributes({ label: ariaLabel, id: ariaLabelledById });

    const iconColor = getIconColor(mode, variant, isHovered || selected);

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
        <Icon svgIcon={iconMap[variant]} size={iconSizeMap[size]} color={iconColor} isHovered={isHovered} />
      </button>
    );
  }
);

Trigger.displayName = 'Trigger';

export default Trigger;
