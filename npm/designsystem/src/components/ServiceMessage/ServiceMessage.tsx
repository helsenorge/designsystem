import React, { useRef } from 'react';

import classNames from 'classnames';

import { useHover } from '../../hooks/useHover';
import { getColor } from '../../theme/currys';
import { AnchorLinkTargets } from '../AnchorLink';
import Icon, { IconSize } from '../Icons';
import Forward from '../Icons/Forward';
import X from '../Icons/X';
import NotificationPanel, { NotificationPanelVariants } from '../NotificationPanel';

import styles from './styles.module.scss';
export interface ServiceMessageProps {
  /** Sets a label for the notification panel. */
  label: string;
  /** function that runs on dismiss */
  onDismiss?: () => void;
  /** Adds class to inner element. Allowing to pass in container width to the content only */
  innerElementClass?: string;
  /** Makes expander be open from start. */
  expanderOpenFromStart?: boolean;
  /** String displayed in service-message when expended*/
  info?: string;
  /** String displayed in service-message when expended, with a smaller font*/
  extraInfo?: string;
  /** Name that describes a url-link for the user*/
  urlTitle?: string;
  /** Url for further information*/
  url?: string;
  /** Sets target for the anchorlink to the url*/
  target?: AnchorLinkTargets;
  /** Text on close-expander button in service messages. */
  closeBtnText?: string;
  /** Changes the visual representation. */
  variant?: NotificationPanelVariants;
  /** Sets the data-testid attribute. */
  testId?: string;
}

const ServiceMessage: React.FC<ServiceMessageProps> = (props: ServiceMessageProps) => {
  const {
    label,
    onDismiss,
    info,
    extraInfo,
    urlTitle,
    url,
    target = '_self',
    closeBtnText,
    expanderOpenFromStart = false,
    innerElementClass = 'container',
    variant = 'alert',
    testId,
  } = props;

  const anchorlinkClasses = classNames(
    styles['service-message__bottom-row__button'],
    styles['service-message__bottom-row__read-more-btn'],
    styles['service-message__bottom-row__read-more-btn--spacing']
  );
  const hasExpander = !!info || !!extraInfo;
  const closeButtonClasses = classNames(styles['service-message__bottom-row__button'], styles['service-message__bottom-row__close-button']);

  const ButtonRow = (): JSX.Element => {
    const readMoreRef = useRef<HTMLAnchorElement>(null);
    const { isHovered: readMoreHoverRefIsHovered } = useHover(readMoreRef);
    const xRef = useRef<HTMLButtonElement>(null);
    const { isHovered: xRefIsHovered } = useHover(xRef);
    return (
      <div className={styles['service-message__bottom-row']}>
        <a className={anchorlinkClasses} href={url} ref={readMoreRef} target={target}>
          {urlTitle}
          <Icon size={IconSize.XSmall} svgIcon={Forward} color={getColor('blueberry', 700)} isHovered={readMoreHoverRefIsHovered} />
        </a>

        <button ref={xRef} className={closeButtonClasses} aria-label={closeBtnText} onClick={onDismiss}>
          {closeBtnText}
          <Icon size={IconSize.XSmall} svgIcon={X} color={getColor('blueberry', 700)} isHovered={xRefIsHovered} />
        </button>
      </div>
    );
  };

  return (
    <NotificationPanel
      label={label}
      expanderOpenFromStart={expanderOpenFromStart}
      isServiceMessage
      contentClassName={innerElementClass}
      serviceMessageExpander={hasExpander}
      variant={variant}
      testId={testId}
    >
      {hasExpander && (
        <div>
          {info && <div className={styles['service-message__content']}>{info}</div>}
          {extraInfo && <div className={styles['service-message__content--smaller']}>{extraInfo}</div>}

          <ButtonRow />
        </div>
      )}
    </NotificationPanel>
  );
};

export default ServiceMessage;
