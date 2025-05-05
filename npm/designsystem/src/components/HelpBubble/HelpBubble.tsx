import React from 'react';

import classNames from 'classnames';

import { AnalyticsId } from '../../constants';
import AnchorLink, { AnchorLinkTargets } from '../AnchorLink';
import Close from '../Close';
import PopOver, { PopOverProps, PopOverVariant } from '../PopOver';

import styles from './styles.module.scss';

export const HelpBubbleVariant = PopOverVariant;

type HelpBubbleRole = 'tooltip';

export interface HelpBubbleProps extends PopOverProps {
  /** Id of the HelpBubble */
  helpBubbleId?: string;
  /** Content shown inside HelpBubble. */
  children: React.ReactNode;
  /** Ref for the element the HelpBubble is placed upon */
  controllerRef: React.RefObject<HTMLElement | SVGSVGElement>;
  /** Adds custom classes to the element. */
  className?: string;
  /** @deprecated Hide the close button in the bubble. Close button is never rendered if role="tooltip". */
  noCloseButton?: boolean;
  /** Visible text on the link. */
  linkText?: string;
  /** Url the link leads to */
  linkUrl?: string;
  /** Sets the target type of the link. _blank adds an arrow icon at the end of the link */
  linkTarget?: AnchorLinkTargets;
  /** Function is called when link is clicked */
  onLinkClick?: () => void;
  /** Function is called when user clicks the button */
  onClose?: () => void;
  /** aria-label to be passed onto Close */
  closeAriaLabel?: string;
  /** @deprecated Sets role of the HelpBubble element. */
  role?: HelpBubbleRole;
  /** Sets the data-testid attribute. */
  testId?: string;
}

const HelpBubble = React.forwardRef<HTMLDivElement | SVGSVGElement, HelpBubbleProps>((props, ref) => {
  const {
    children,
    className = '',
    linkText = 'Mer hjelp',
    placement = 'bottom',
    linkUrl,
    linkTarget,
    onLinkClick,
    onClose,
    closeAriaLabel,
    helpBubbleId,
    controllerRef,
    testId,
  } = props;

  const helpBubbleClasses = classNames(styles.helpbubble, className);

  const contentClasses = classNames(styles.helpbubble__content, styles['helpbubble__content--close']);

  const renderLink = (): JSX.Element | undefined => {
    if (onLinkClick && linkText) {
      return (
        <button className={styles.helpbubble__link} onClick={onLinkClick} type="button">
          {linkText}
        </button>
      );
    } else if (linkUrl && linkText) {
      return (
        <AnchorLink href={linkUrl} target={linkTarget}>
          {linkText}
        </AnchorLink>
      );
    }
  };

  const renderCloseButton = (): JSX.Element | undefined => {
    return (
      <div className={styles.helpbubble__close}>
        <Close small onClick={onClose} ariaLabel={closeAriaLabel} />
      </div>
    );
  };

  return (
    <PopOver id={helpBubbleId} placement={placement} controllerRef={controllerRef} role={'dialog'} ref={ref} testId={testId}>
      <div className={helpBubbleClasses} data-analyticsid={AnalyticsId.HelpBubble}>
        {renderCloseButton()}
        <div className={contentClasses}>
          {children}
          {renderLink()}
        </div>
      </div>
    </PopOver>
  );
});

HelpBubble.displayName = 'HelpBubble';

export default HelpBubble;
