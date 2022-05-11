import classNames from 'classnames';
import React from 'react';

import { AnalyticsId } from '../../constants';
import AnchorLink from '../AnchorLink';
import Close from '../Close';

import styles from './styles.module.scss';

interface HelpBubbleVariant {
  automatic: 'automatic';
  triggertop: 'triggertop';
  triggerbottom: 'triggerbottom';
}

interface HelpBubbleProps {
  /** Name to display in the avatar. Will be truncated to the first two characters. */
  children: string;
  /** Adds custom classes to the element. */
  className?: string;
  /** Determines the placement of the helpbubble */
  variant?: HelpBubbleVariant;
  /** Determines the placement of the bubble arrow */
  triggerTop?: boolean;
  /** Visible text on the link */
  linkText?: string;
  /** Url the link leads to */
  linkUrl?: string;
  /** Sets the data-testid attribute. */
  testId?: string;
}

const HelpBubble: React.FC<HelpBubbleProps> = props => {
  const { children, className = '', triggerTop = false, linkText, linkUrl, testId } = props;

  const helpBubbleClasses = classNames(styles.helpbubble, className);
  const triangleClasses = classNames(styles['helpbubble__arrow'], {
    [styles['helpbubble__arrow--under']]: !triggerTop,
    [styles['helpbubble__arrow--over']]: triggerTop,
  });
  return (
    <div className={helpBubbleClasses} data-testid={testId} data-analyticsid={AnalyticsId.Avatar}>
      <div className={styles['helpbubble__child-wrapper']}>
        {children}
        {linkUrl && <AnchorLink href={linkUrl}>{linkText && linkText !== undefined ? linkText : 'Mer hjelp'}</AnchorLink>}
      </div>
      <div className={styles['helpbubble__close-wrapper']}>
        <Close small />
      </div>
      <div className={triangleClasses} />
    </div>
  );
};

export default HelpBubble;
