import React from 'react';

import classNames from 'classnames';

import HelpSign, { IconSize } from './HelpSign';
import { AnalyticsId } from '../../constants';
import { useIsMobileBreakpoint } from '../../hooks/useIsMobileBreakpoint';
import { getColor } from '../../theme/currys';
import { getAriaLabelAttributes } from '../../utils/accessibility';

import styles from './styles.module.scss';

export type HelpTriggerTags = 'button' | 'span';

export type HelpTriggerSize = 'medium' | 'large' | 'xlarge';

export type HelpTriggerWeights = 'normal' | 'strong';

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
   * Sets the colors of the help trigger. Default: normal.
   */
  weight?: HelpTriggerWeights;
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

const getIconSize = (size: HelpTriggerSize, isMobile: boolean): IconSize =>
  ({
    medium: IconSize.medium,
    large: isMobile ? IconSize.medium : IconSize.large,
    xlarge: isMobile ? IconSize.large : IconSize.xlarge,
  })[size];

const getIconColor = (weight: HelpTriggerWeights): string | undefined => {
  if (weight === 'strong') {
    return 'white';
  }

  return getColor('plum', 800);
};

const HelpTrigger = React.forwardRef<HTMLButtonElement, HelpTriggerProps>(
  (
    {
      ariaLabel,
      ariaLabelledById,
      size = 'medium',
      selected = false,
      isHovered,
      htmlMarkup = 'button',
      className,
      testId,
      weight = 'normal',
      ...rest
    },
    ref
  ) => {
    const isMobile = useIsMobileBreakpoint();
    const triggerClasses = classNames(
      styles['help-trigger'],
      {
        [styles[`help-trigger--hovered`]]: isHovered,
        [styles['help-trigger--strong']]: weight === 'strong',
        [styles['help-trigger--selected']]: selected,
      },
      styles[`help-trigger--${size}`],
      className
    );

    const iconColor = getIconColor(weight);

    const icon = <HelpSign color={iconColor} size={getIconSize(size, isMobile)} />;

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
        ref={ref}
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
