import React, { useState } from 'react';

import classNames from 'classnames';

import { useBreakpoint } from '../../hooks/useBreakpoint';
import { useHover } from '../../hooks/useHover';
import { useUuid } from '../../hooks/useUuid';
import { getColor } from '../../theme/currys';
import { breakpoints } from '../../theme/grid';
import { getAriaLabelAttributes } from '../../utils/accessibility';
import { AnchorLinkTargets } from '../AnchorLink';
import NotificationBadge from '../Badge/NotificationBadge';
import Close from '../Close';
import Icon, { IconSize } from '../Icon';
import ChevronDown from '../Icons/ChevronDown';
import ChevronUp from '../Icons/ChevronUp';
import Forward from '../Icons/Forward';
import X from '../Icons/X';
import { NotificationPanelVariants } from '../NotificationPanel';

import styles from './styles.module.scss';

interface LabelProps {
  label: string;
  variant: NotificationPanelVariants;
  id: string;
  hasExpander: boolean;
  isExpanded: boolean;
  dismissable: boolean;
  onExpand: () => void;
  onDismiss?: () => void;
  closeBtnText?: string;
}

const Label: React.FC<LabelProps> = ({ label, variant, id, hasExpander, isExpanded, dismissable, onExpand, onDismiss, closeBtnText }) => {
  const breakpoint = useBreakpoint();
  const { isHovered, hoverRef } = useHover<HTMLDivElement>();

  const iconSize = breakpoint < breakpoints.lg ? IconSize.XSmall : IconSize.Small;
  const CustomTag = hasExpander ? 'button' : 'span';

  const labelContainerClasses = classNames(
    styles['service-message__label-container'],
    hasExpander && styles[`service-message__label-container--has-expander`]
  );

  return (
    <div className={labelContainerClasses} ref={hoverRef}>
      <div className={styles['service-message__container']}>
        <div className={styles['service-message__row']}>
          <div className={styles['service-message__col']}>
            <div className={styles['service-message__label']}>
              <NotificationBadge variant={variant == 'alert' ? 'error' : variant} size={iconSize} isHovered={isHovered} />
              <h1 className={styles['service-message__title']} id={id}>
                <CustomTag
                  className={styles['service-message__toggle']}
                  onClick={hasExpander ? onExpand : undefined}
                  aria-expanded={hasExpander ? isExpanded : undefined}
                >
                  {label}
                </CustomTag>
              </h1>
              {hasExpander && <Icon size={iconSize} svgIcon={isExpanded ? ChevronUp : ChevronDown} isHovered={isHovered} />}
              {!hasExpander && dismissable && (
                <Close onClick={onDismiss} ariaLabel={closeBtnText} className={styles['service-message__close']} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ContentProps {
  info?: string;
  extraInfo?: string;
  urlTitle?: string;
  url?: string;
  target?: AnchorLinkTargets;
  dismissable: boolean;
  onDismiss?: () => void;
  closeBtnText?: string;
}

const Content: React.FC<ContentProps> = ({ info, extraInfo, urlTitle, url, target, dismissable, closeBtnText, onDismiss }) => {
  const { hoverRef: readMoreRef, isHovered: readMoreHoverRefIsHovered } = useHover<HTMLAnchorElement>();
  const { hoverRef: closeButtonRef, isHovered: closeButtonIsHovered } = useHover<HTMLButtonElement>();

  const hasUrl = url && urlTitle;

  return (
    <div className={styles['service-message__container']}>
      <div className={styles['service-message__row']}>
        <div className={styles['service-message__col']}>
          <div className={styles['service-message__content']}>
            {info && <p className={styles['service-message__info']}>{info}</p>}
            {extraInfo && (
              <p className={classNames(styles['service-message__info'], styles['service-message__info--extra'])}>{extraInfo}</p>
            )}
            <div className={styles['service-message__actions']}>
              {hasUrl && (
                <a className={styles['service-message__action']} href={url} ref={readMoreRef} target={target}>
                  {urlTitle}
                  <Icon size={IconSize.XSmall} svgIcon={Forward} color={getColor('blueberry', 700)} isHovered={readMoreHoverRefIsHovered} />
                </a>
              )}

              {dismissable && (
                <button
                  ref={closeButtonRef}
                  className={classNames(styles['service-message__action'], styles['service-message__action--close'])}
                  aria-label={closeBtnText}
                  onClick={onDismiss}
                >
                  {closeBtnText}
                  <Icon size={IconSize.XSmall} svgIcon={X} color={getColor('blueberry', 700)} isHovered={closeButtonIsHovered} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export interface ServiceMessageProps {
  /** Sets a label for the notification panel. */
  label: string;
  /** String displayed in service-message when expanded */
  info?: string;
  /** String displayed in service-message when expanded, with a smaller font */
  extraInfo?: string;
  /** function that runs on dismiss */
  onDismiss?: () => void;
  /** Allows for dismiss to be an option, also for ServiceMessage with only label as content */
  dismissable?: boolean;
  /** Makes expander be open from start. */
  expanderOpenFromStart?: boolean;
  /** Name that describes a url-link for the user*/
  urlTitle?: string;
  /** Url for further information*/
  url?: string;
  /** Sets target for the anchorlink to the url*/
  target?: AnchorLinkTargets;
  /** Text on close-button in service messages. */
  closeBtnText?: string;
  /** Changes the visual representation. */
  variant?: NotificationPanelVariants;
  /** Sets the data-testid attribute. */
  testId?: string;
}

const ServiceMessage: React.FC<ServiceMessageProps> = ({
  label,
  dismissable = true,
  onDismiss,
  info,
  extraInfo,
  urlTitle,
  url,
  target = '_self',
  closeBtnText = 'fjern melding',
  expanderOpenFromStart = false,
  variant = 'error',
  testId,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(expanderOpenFromStart);

  const labelId = useUuid();
  const hasExpander = !!info || !!extraInfo;

  const ariaRole = variant === 'alert' || variant === 'error' ? 'alert' : 'region';
  const ariaLabelAttributes = getAriaLabelAttributes({ label, id: labelId });

  const handleClick = (): void => {
    hasExpander && setIsExpanded(!isExpanded);
  };

  const classes = classNames(styles['service-message'], styles[`service-message--${variant}`]);

  return (
    <div className={classes} role={ariaRole} {...ariaLabelAttributes} data-testid={testId}>
      <Label
        label={label}
        variant={variant}
        id={labelId}
        hasExpander={hasExpander}
        isExpanded={isExpanded}
        dismissable={dismissable}
        onExpand={handleClick}
        onDismiss={onDismiss}
        closeBtnText={closeBtnText}
      />
      {hasExpander && isExpanded && (
        <Content
          info={info}
          extraInfo={extraInfo}
          urlTitle={urlTitle}
          url={url}
          target={target}
          dismissable={dismissable}
          onDismiss={onDismiss}
          closeBtnText={closeBtnText}
        />
      )}
    </div>
  );
};

export default ServiceMessage;
