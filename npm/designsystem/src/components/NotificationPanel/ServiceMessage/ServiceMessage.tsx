import React, { useRef } from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

import Icon, { IconSize } from '../../Icons';
import NotificationPanel, { NotificationPanelProps } from '../NotificationPanel';
import { useHover } from '../../../hooks/useHover';
import { getColor } from '../../../theme/currys';
import X from '../../Icons/X';
import Forward from '../../Icons/Forward';

export type NotificationPanelVariants = 'info' | 'warn' | 'alert' | 'success';
export type NotificationCompactVariants = 'basic' | 'outline';
export type NotificationPanelSizes = 'small' | 'medium' | 'large' | 'full';

export interface ServiceMessageProps extends NotificationPanelProps {
  /** Sets a label for the notification panel. */
  serviceMessageLabel: string;
  /** function that runs on dismiss */
  onDismiss: () => void;
  /** Adds class to inner element. Alowing to pass in container width to the content only */
  innerElementClass?: string;
  /** Makes expander be open from start. */
  expanderOpenFromStart?: boolean;
  /** String displayed in service-message when expended*/
  serviceMessageInfo?: string;
  /** String displayed in service-message when expended, with a smaller font*/
  serviceMessageExtraInfo?: string;
  /** Name that describes url-link for the user*/
  serviceMessageReadMoreText?: string;
  /** Url for further information*/
  serviceMessageReadMoreUrl?: string;
  /** Text on close-expander button in service messages. */
  serviceMessageCloseBtnText?: string;
  /** Toggles if the message can be the closed. */
  dismissable?: boolean;
}

const ServiceMessage: React.FC<ServiceMessageProps> = (props: ServiceMessageProps) => {
  const {
    serviceMessageLabel,
    onDismiss,
    serviceMessageInfo,
    serviceMessageExtraInfo,
    serviceMessageReadMoreText,
    serviceMessageReadMoreUrl,
    serviceMessageCloseBtnText,
    expanderOpenFromStart = false,
    innerElementClass = 'container',
    dismissable = true,
  } = props;

  const anchorlinkClasses = classNames(
    styles['service-message__bottom-row__button'],
    styles['service-message__bottom-row__read-more-btn'],
    styles['service-message__bottom-row__read-more-btn--spacing']
  );
  const hasExpander = !!serviceMessageInfo || !!serviceMessageExtraInfo;
  const closeButtonClasses = classNames(styles['service-message__bottom-row__button'], styles['service-message__bottom-row__close-button']);

  const ButtonRow = () => {
    const readMoreRef = useRef<HTMLAnchorElement>(null);
    const { isHovered: readMoreHoverRefIsHovered } = useHover(readMoreRef);
    const xRef = useRef<HTMLButtonElement>(null);
    const { isHovered: xRefIsHovered } = useHover(xRef);
    return (
      <div className={styles['service-message__bottom-row']}>
        <a className={anchorlinkClasses} href={serviceMessageReadMoreUrl} ref={readMoreRef}>
          {serviceMessageReadMoreText}
          <Icon size={IconSize.XSmall} svgIcon={Forward} color={getColor('blueberry', 700)} isHovered={readMoreHoverRefIsHovered} />
        </a>

        <button ref={xRef} className={closeButtonClasses} aria-label={serviceMessageCloseBtnText} onClick={onDismiss}>
          {serviceMessageCloseBtnText}
          <Icon size={IconSize.XSmall} svgIcon={X} color={getColor('blueberry', 700)} isHovered={xRefIsHovered} />
        </button>
      </div>
    );
  };

  return (
    <NotificationPanel
      {...props}
      label={serviceMessageLabel}
      expanderOpenFromStart={expanderOpenFromStart}
      dismissable={dismissable}
      isServiceMessage
      contentClassName={innerElementClass}
      serviceMessageExpander={hasExpander}
    >
      {hasExpander && (
        <div>
          {serviceMessageInfo && <div className={styles['service-message__content']}>{serviceMessageInfo}</div>}
          {serviceMessageExtraInfo && <div className={styles['service-message__content--smaller']}>{serviceMessageExtraInfo}</div>}

          <ButtonRow />
        </div>
      )}
    </NotificationPanel>
  );
};

export default ServiceMessage;
