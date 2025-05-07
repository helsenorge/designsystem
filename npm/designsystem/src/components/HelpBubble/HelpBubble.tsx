import React from 'react';

import classNames from 'classnames';

import { AnalyticsId } from '../../constants';
import AnchorLink, { AnchorLinkTargets } from '../AnchorLink';
import Close from '../Close';
import PopOver, { PopOverProps, PopOverVariant } from '../PopOver';

import styles from './styles.module.scss';

export const HelpBubbleVariant = PopOverVariant;

type HelpBubbleRole = 'tooltip';

export interface HelpBubbleProps extends Pick<PopOverProps, 'children' | 'variant' | 'controllerRef' | 'role'> {
  /** Id of the HelpBubble */
  helpBubbleId?: string;
  /** Content shown inside HelpBubble. Note that if role="tooltip", you must not include interactive/focusable elements. */
  children: React.ReactNode;
  /** Ref for the element the HelpBubble is placed upon */
  controllerRef: React.RefObject<HTMLElement | SVGSVGElement>;
  /** Adds custom classes to the element. */
  className?: string;
  /** Determines the placement of the helpbubble. Default: automatic positioning. */
  variant?: keyof typeof HelpBubbleVariant;
  /** Show the bubble. Default: false. */
  showBubble?: boolean;
  /** Hide the close button in the bubble. Close button is never rendered if role="tooltip". */
  noCloseButton?: boolean;
  /** Visible text on the link. Link is never rendered if role="tooltip". */
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
  /** Sets role of the HelpBubble element. If set to "tooltip",  */
  role?: HelpBubbleRole;
  /** Sets the data-testid attribute. */
  testId?: string;
}

const HelpBubble = React.forwardRef<HTMLDivElement | SVGSVGElement, HelpBubbleProps>((props, ref) => {
  const {
    children,
    className = '',
    noCloseButton,
    linkText = 'Mer hjelp',
    linkUrl,
    linkTarget,
    onLinkClick,
    onClose,
    closeAriaLabel,
    // Props passed on to PopOver
    showBubble,
    helpBubbleId,
    variant,
    controllerRef,
    role,
    testId,
  } = props;

  const isTooltip = role === 'tooltip';

  if (!showBubble && !isTooltip) {
    return null;
  }

  const helpBubbleClasses = classNames(styles.helpbubble, className);

  const contentClasses = classNames(styles.helpbubble__content);

  const renderLink = (): JSX.Element | undefined => {
    // Det er ikke tillatt med interaktive/fokuserbare elementer i role="tooltip"
    if (isTooltip) {
      return;
    }
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
    if (noCloseButton || isTooltip) {
      return;
    }
    return (
      <div className={styles.helpbubble__close}>
        <Close small onClick={onClose} ariaLabel={closeAriaLabel} />
      </div>
    );
  };

  return (
    <PopOver
      id={helpBubbleId}
      variant={variant}
      controllerRef={controllerRef}
      role={role}
      ref={ref}
      show={isTooltip && showBubble}
      testId={testId}
    >
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
