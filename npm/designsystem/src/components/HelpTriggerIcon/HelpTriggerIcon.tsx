import React from 'react';

import classNames from 'classnames';

import HelpSign from './HelpSign';
import { AnalyticsId } from '../../constants';
import { useHover } from '../../hooks/useHover';
import { getAriaLabelAttributes } from '../../utils/accessibility';
import { mergeRefs } from '../../utils/refs';

import styles from './styles.module.scss';

export type HelpTriggerIconSizes = 'inherit' | 'medium' | 'large' | 'xlarge';

export type HelpTriggerIconTags = 'button' | 'span';

export type HelpTriggerWeights = 'normal' | 'strong';

export interface HelpTriggerIconProps
  extends Pick<React.InputHTMLAttributes<HTMLButtonElement>, 'onClick' | 'aria-haspopup' | 'aria-controls' | 'aria-expanded'> {
  /**
   * Sets aria-label of the trigger. ariaLabel or ariaLabelledById MUST be set!
   */
  ariaLabel?: string;
  /**
   * Sets aria-labelledby of the trigger. ariaLabel or ariaLabelledById MUST be set!
   */
  ariaLabelledById?: string;
  /**
   * Size of the Icon. Default: medium.
   */

  size?: HelpTriggerIconSizes;
  /** Sets the data-testid attribute. */
  testId?: string;
  /**
   * Sets the colors of the help trigger icon. Default: normal.
   */
  weight?: HelpTriggerWeights;
}

interface HelpTriggerIconInternalProps extends HelpTriggerIconProps {
  /**
   * Sets the hover styling of the trigger. Intended for use when wrapped by a parent button.
   */
  isHovered?: boolean;
  /**
   * Only use this if the parent wrapper is a Button!
   * Changes the underlying element of the trigger. If set to span, the trigger will be a non-interactive icon. Default: button
   */
  htmlMarkup?: HelpTriggerIconTags;
}

const getIconColor = (hover: boolean, weight: HelpTriggerWeights): string | undefined => {
  if (weight === 'normal') {
    return hover ? 'var(--color-help-graphics-verydark)' : 'var(--color-help-graphics-normal)';
  }
};

const HelpTriggerIcon = React.forwardRef<HTMLButtonElement, HelpTriggerIconProps>((props, ref) => {
  return <HelpTriggerIconInternal {...props} ref={ref} />;
});

export const HelpTriggerIconInternal = React.forwardRef<HTMLButtonElement, HelpTriggerIconInternalProps>(
  (
    { ariaLabel, ariaLabelledById, htmlMarkup = 'button', isHovered = false, size = 'medium', testId, weight = 'normal', ...buttonRest },
    ref
  ) => {
    const ariaLabelAttributes = getAriaLabelAttributes({ label: ariaLabel, id: ariaLabelledById });
    const { hoverRef, isHovered: interalIsHovered } = useHover<HTMLButtonElement>(ref as React.RefObject<HTMLButtonElement>, false);
    const helpIcon = <HelpSign color={getIconColor(interalIsHovered || isHovered, weight)} weight={weight} />;
    const isButton = htmlMarkup === 'button';
    const iconClasses = classNames(
      styles['help-trigger-icon'],
      {
        [styles['help-trigger-icon--strong']]: weight === 'strong',
        [styles['help-trigger-icon--is-button']]: isButton,
      },
      styles[`help-trigger-icon--${size}`]
    );

    if (isButton) {
      return (
        <button
          {...ariaLabelAttributes}
          type="button"
          data-testid={testId}
          data-analyticsid={AnalyticsId.HelpTriggerIcon}
          className={iconClasses}
          ref={mergeRefs([hoverRef, ref])}
          {...buttonRest}
        >
          {helpIcon}
        </button>
      );
    }

    return (
      <span data-testid={testId} data-analyticsid={AnalyticsId.HelpTriggerIcon} className={iconClasses}>
        {helpIcon}
      </span>
    );
  }
);

HelpTriggerIcon.displayName = 'HelpTriggerIcon';
HelpTriggerIconInternal.displayName = 'HelpTriggerIconInternal';

export default HelpTriggerIcon;
