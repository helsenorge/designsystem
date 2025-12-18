import React from 'react';

import classNames from 'classnames';

import { AnalyticsId, LanguageLocales } from '../../constants';
import { HNDesignsystemHelpBubble } from '../../resources/Resources';
import { useLanguage } from '../../utils/language';
import AnchorLink, { AnchorLinkTargets } from '../AnchorLink';
import Close from '../Close';
import PopOver, { PopOverProps, PopOverVariant } from '../PopOver';
import { getResources } from './resourceHelper';

import styles from './styles.module.scss';

export const HelpBubbleVariant = PopOverVariant;

export interface HelpBubbleProps extends Pick<PopOverProps, 'children' | 'variant' | 'controllerRef' | 'role'> {
  /** Sets aria-label of the bubble. */
  ariaLabel?: string;
  /** Sets aria-labelledby of the bubble. */
  ariaLabelledById?: string;
  /** Id of the HelpBubble */
  helpBubbleId?: string;
  /** Content shown inside HelpBubble. */
  children: React.ReactNode;
  /** Ref for the element the HelpBubble is placed upon */
  controllerRef: React.RefObject<HTMLElement | SVGSVGElement>;
  /** Adds custom classes to the element. */
  className?: string;
  /** Determines the placement of the helpbubble. Default: automatic positioning. */
  variant?: keyof typeof HelpBubbleVariant;
  /** Show the bubble. Default: false. */
  showBubble?: boolean;
  /** Hide the close button in the bubble. */
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
  /** Resources for the component */
  resources?: Partial<HNDesignsystemHelpBubble>;
  /** Sets the data-testid attribute. */
  testId?: string;
}

const HelpBubble = React.forwardRef<HTMLDivElement | SVGSVGElement, HelpBubbleProps>((props, ref) => {
  const {
    ariaLabelledById,
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
    resources,
    testId,
  } = props;

  const { language } = useLanguage<LanguageLocales>(LanguageLocales.NORWEGIAN);

  if (!showBubble) {
    return null;
  }

  const defaultResources = getResources(language);
  const mergedResources: HNDesignsystemHelpBubble = {
    ...defaultResources,
    ...resources,
    ariaLabel: props.ariaLabel ?? resources?.ariaLabel ?? defaultResources.ariaLabel,
  };

  const helpBubbleClasses = classNames(styles.helpbubble, className);
  const contentClasses = classNames(styles.helpbubble__content);

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
    if (noCloseButton) {
      return;
    }
    return <Close small color="plum" onClick={onClose} ariaLabel={closeAriaLabel} className={styles.helpbubble__close} />;
  };

  return (
    <PopOver
      ariaLabel={mergedResources.ariaLabel}
      ariaLabelledById={ariaLabelledById}
      id={helpBubbleId}
      variant={variant}
      controllerRef={controllerRef}
      role="group"
      ref={ref}
      show={showBubble}
      testId={testId}
    >
      <div className={helpBubbleClasses} data-analyticsid={AnalyticsId.HelpBubble}>
        <div className={contentClasses}>
          {children}
          {renderLink()}
        </div>
        {renderCloseButton()}
      </div>
    </PopOver>
  );
});

HelpBubble.displayName = 'HelpBubble';

export default HelpBubble;
