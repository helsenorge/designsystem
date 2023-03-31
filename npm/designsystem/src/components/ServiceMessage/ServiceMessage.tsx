import React, { useState, useRef } from 'react';

import classNames from 'classnames';

import { useBreakpoint } from '../../hooks/useBreakpoint';
import { useHover } from '../../hooks/useHover';
import { useUuid } from '../../hooks/useUuid';
import { getColor } from '../../theme/currys';
import { breakpoints } from '../../theme/grid';
import { palette } from '../../theme/palette';
import { getAriaLabelAttributes } from '../../utils/accessibility';
import { AnchorLinkTargets } from '../AnchorLink';
import Icon, { IconSize } from '../Icons';
import CheckFill from '../Icons/CheckFill';
import ChevronDown from '../Icons/ChevronDown';
import ChevronUp from '../Icons/ChevronUp';
import ErrorSignFill from '../Icons/ErrorSignFill';
import Forward from '../Icons/Forward';
import InfoSignFill from '../Icons/InfoSignFill';
import TriangleX from '../Icons/TriangleX';
import X from '../Icons/X';
import { NotificationPanelVariants } from '../NotificationPanel';

import styles from './styles.module.scss';

export interface ServiceMessageProps {
  /** Sets a label for the notification panel. */
  label: string;
  /** String displayed in service-message when expended*/
  info?: string;
  /** String displayed in service-message when expended, with a smaller font*/
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
  /** First of its type. Used to remove border-top */
  first?: boolean;
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
  first = false,
  expanderOpenFromStart = false,
  variant = 'alert',
  testId,
}: ServiceMessageProps) => {
  const hasExpander = !!info || !!extraInfo;

  const CustomTag = hasExpander ? 'button' : 'span';
  const breakpoint = useBreakpoint();
  const desktop = breakpoint < breakpoints.lg;
  const iconSize = desktop ? IconSize.XSmall : IconSize.Small;
  const uuid = useUuid();
  const ariaRole = variant === 'alert' ? 'alert' : 'region';
  const ariaLabelAttributes = getAriaLabelAttributes({ label, id: uuid });

  const [isExpanded, setIsExpanded] = useState<boolean>(expanderOpenFromStart);

  const variantToIconMap = {
    info: <Icon svgIcon={InfoSignFill} color={palette.blueberry700} hoverColor={palette.blueberry700} size={iconSize} />,
    warn: <Icon svgIcon={ErrorSignFill} color={palette.banana700} hoverColor={palette.banana700} size={iconSize} />,
    alert: <Icon svgIcon={TriangleX} color={palette.cherry700} hoverColor={palette.cherry700} size={iconSize} />,
    success: <Icon svgIcon={CheckFill} color={palette.kiwi900} hoverColor={palette.kiwi900} size={iconSize} />,
  };
  const topTowClasses = classNames(styles['service-message__top-row--container'], styles['service-message__wrapper--inner']);
  const topTowCloseButtonClasses = classNames(
    styles['service-message__bottom-row__button'],
    styles['service-message__bottom-row__close-button--top']
  );
  const TopRow = (): JSX.Element => {
    const hoverRefObject = useHover<HTMLButtonElement>();
    const { isHovered, hoverRef } = hoverRefObject;
    const xRef = useRef<HTMLButtonElement>(null);
    const { isHovered: xRefIsHovered } = useHover(xRef);
    return (
      <span className={topTowClasses} ref={hoverRef}>
        <span className={styles['service-message__icon--signal']}>{variantToIconMap[variant]}</span>
        <h1 className={styles['service-message__label']} id={uuid}>
          {label}
        </h1>
        {hasExpander && (
          <span className={styles['service-message__icon--expander']}>
            <Icon size={iconSize} svgIcon={isExpanded ? ChevronUp : ChevronDown} isHovered={isHovered} />
          </span>
        )}
        {!hasExpander && dismissable && (
          <button ref={xRef} className={topTowCloseButtonClasses} aria-label={closeBtnText} onClick={onDismiss}>
            <Icon size={iconSize} svgIcon={X} color={getColor('blueberry', 700)} isHovered={xRefIsHovered} />
          </button>
        )}
      </span>
    );
  };
  const tagClicked = (): void => {
    hasExpander && setIsExpanded(!isExpanded);
  };

  const anchorlinkClasses = classNames(styles['service-message__bottom-row__button']);
  const urlField = !!url && !!urlTitle;
  const closeButtonClasses = classNames(styles['service-message__bottom-row__button']);
  const bottomRowClasses = classNames(styles['service-message__bottom-row'], {
    [styles['service-message__bottom-row--only-close-button']]: !urlField,
  });
  const ButtonRow = (): JSX.Element => {
    const readMoreRef = useRef<HTMLAnchorElement>(null);
    const { isHovered: readMoreHoverRefIsHovered } = useHover(readMoreRef);
    const xRef = useRef<HTMLButtonElement>(null);
    const { isHovered: xRefIsHovered } = useHover(xRef);
    return (
      <div className={bottomRowClasses}>
        {urlField && (
          <a className={anchorlinkClasses} href={url} ref={readMoreRef} target={target}>
            {urlTitle}
            <Icon size={IconSize.XSmall} svgIcon={Forward} color={getColor('blueberry', 700)} isHovered={readMoreHoverRefIsHovered} />
          </a>
        )}

        {dismissable && (
          <button ref={xRef} className={closeButtonClasses} aria-label={closeBtnText} onClick={onDismiss}>
            {closeBtnText}
            <Icon size={IconSize.XSmall} svgIcon={X} color={getColor('blueberry', 700)} isHovered={xRefIsHovered} />
          </button>
        )}
      </div>
    );
  };
  const Content = (): JSX.Element => {
    return (
      <span className={styles['service-message__content']}>
        {!!info && <span className={styles['service-message__content__info']}>{info}</span>}
        {!!extraInfo && <span className={styles['service-message__content__info--smaller']}>{extraInfo}</span>}
        <ButtonRow />
      </span>
    );
  };
  const backgroundClass = classNames({
    [styles[`service-message__wrapper--${variant}`]]: variant,
    [styles[`service-message__wrapper--${variant}--expanded`]]: isExpanded && variant,
  });
  const contentWrapperClasses = classNames(styles['service-message__wrapper--inner'], styles['service-message__content__wrapper']);
  const wrapperClasses = classNames(styles['service-message__wrapper'], styles['service-message__wrapper__btn'], {
    [styles['service-message__wrapper__btn--width']]: hasExpander,
    [styles[`service-message__wrapper__border--${variant}`]]: variant,
    [styles['service-message__wrapper__btn--expanded']]: isExpanded,
    [styles['service-message__wrapper__btn--first']]: first,
    [styles['service-message__wrapper__btn--not-first']]: !first,
  });
  return (
    <div className={backgroundClass} role={ariaRole} {...ariaLabelAttributes}>
      <CustomTag className={wrapperClasses} onClick={tagClicked} aria-expanded={hasExpander && isExpanded} data-testid={testId}>
        <TopRow />
      </CustomTag>
      {hasExpander && isExpanded && (
        <div className={styles['service-message__content--spacing']}>
          <div className={contentWrapperClasses}>
            <Content />
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceMessage;
