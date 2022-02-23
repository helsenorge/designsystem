import React, { useRef, useState } from 'react';
import classNames from 'classnames';

import panelStyles from './styles.module.scss';
import Title from '../Title';
import Button, { ButtonVariants } from '../Button';
import { AnchorTarget, AnalyticsId } from '../../constants';

import Icon, { IconSize, SvgPathProps } from '../Icons';
import ChevronDown from '../Icons/ChevronDown';
import ChevronUp from '../Icons/ChevronUp';
import ArrowRight from '../Icons/ArrowRight';
import AlertSignFill from '../Icons/AlertSignFill';
import { palette } from '../../theme/palette';
import Pencil from '../Icons/Pencil';
import Calendar from '../Icons/Calendar';
import Watch from '../Icons/Watch';
import { Breakpoint, useBreakpoint } from '../../hooks/useBreakpoint';
import Badge from '../Badge';
import uuid from '../../utils/uuid';

export enum PanelStatus {
  normal = 'normal',
  new = 'new',
  error = 'error',
  draft = 'draft',
}

export enum PanelVariant {
  fill = 'fill',
  white = 'white',
  stroke = 'stroke',
  line = 'line',
}

export enum PanelLayout {
  layout1 = 'layout1',
  layout2 = 'layout2',
  layout3a = 'layout3a',
  layout3b = 'layout3b',
  layout3c = 'layout3c',
}

interface PanelProps {
  children?: React.ReactNode;
  /** Title of the panel */
  title?: string;
  /** Adds custom classes to the element. */
  className?: string;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** Displays a status on the left side: defualt normal */
  status?: keyof typeof PanelStatus;
  /** Displayed on top of the panel with a status icon */
  statusMessage?: string;
  /** Changes the visual representation of the panel. */
  variant?: keyof typeof PanelVariant;
  /** Url to details, renders as a button with anchor tag */
  url?: string;
  /** target used in the button: default is _self */
  target?: AnchorTarget;
  /** Icon displayed in title */
  icon?: React.ReactNode;
  /** Display icon on right */
  iconRight?: boolean;
  /** Panel section A content */
  contentA?: React.ReactNode | string;
  /** Panel section B content*/
  contentB?: React.ReactNode | string;
  /** Panel button text */
  buttonText?: string;
  /** Panel button close text */
  buttonTextClose?: string;
  /** Show close button in bottom of Panel Expand, default: true */
  showCloseButtonInExpand?: boolean;
  /** Layout (see description) */
  layout?: keyof typeof PanelLayout;
  /** Use the panel's container as a button */
  containerAsButton?: boolean;
  /** Displays time with icon */
  time?: string;
  /** Displays date with icon */
  date?: string;
}

const Panel = React.forwardRef(function PanelForwardedRef(props: PanelProps, ref: React.ForwardedRef<HTMLHeadingElement>) {
  const {
    children,
    contentA,
    contentB,
    className,
    testId,
    title,
    url,
    target = '_self',
    icon,
    iconRight = false,
    variant = PanelVariant.fill,
    status = PanelStatus.normal,
    statusMessage,
    buttonText = 'Se detaljer',
    buttonTextClose = 'Skjul detaljer',
    showCloseButtonInExpand = true,
    layout = PanelLayout.layout2,
    containerAsButton = false,
    date,
    time,
  } = props;

  const [showDetails, setShowDetails] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const buttonId = uuid();
  const breakpoint = useBreakpoint();

  const lineVariant = variant === PanelVariant.line;
  const whiteVariant = variant === PanelVariant.white;
  const layout3 = [PanelLayout.layout3a.toString(), PanelLayout.layout3b.toString(), PanelLayout.layout3c.toString()].includes(layout);

  const panelWrapperClass = classNames(panelStyles['panel-wrapper'], className);

  const panelClasses = classNames(panelStyles.panel, {
    [panelStyles['panel--fill']]: variant === PanelVariant.fill,
    [panelStyles['panel--stroke']]: variant === PanelVariant.stroke,
    [panelStyles['panel--white']]: whiteVariant,
    [panelStyles['panel--line']]: lineVariant,
    [panelStyles['panel--selected']]: showDetails,
    [panelStyles['panel--new']]: status === PanelStatus.new,
    [panelStyles['panel--draft']]: status === PanelStatus.draft,
    [panelStyles['panel--error']]: status === PanelStatus.error,
    [panelStyles['panel--status']]: status && status !== PanelStatus.normal,
    [panelStyles['panel--with-icon']]: icon,
    [panelStyles['panel--button']]: containerAsButton,
  });

  const panelContainer = classNames({
    [panelStyles['panel__container']]: layout === PanelLayout.layout2 && contentB,
    [panelStyles['panel__container--layout3ish']]: layout3 && contentB,
    [panelStyles['panel__container--grow']]: icon,
  });

  const panelContentLeftClass = classNames({
    [panelStyles['panel-content-a']]: layout === PanelLayout.layout2,
    [panelStyles['panel-content-a--layout3a']]: layout === PanelLayout.layout3a,
    [panelStyles['panel-content-a--layout3b']]: layout === PanelLayout.layout3b,
    [panelStyles['panel-content-a--layout3c']]: layout === PanelLayout.layout3c,
  });

  const panelContentRightClass = classNames({
    [panelStyles['panel__content-right--layout1']]: contentB && layout === PanelLayout.layout1,
    [panelStyles['panel__content-right--layout2']]: contentB && layout === PanelLayout.layout2,
    [panelStyles['panel__content-right--layout3ish']]: contentB && layout3,
    [panelStyles['panel__content-right--layout3a']]: contentB && layout === PanelLayout.layout3a,
    [panelStyles['panel__content-right--layout3b']]: contentB && layout === PanelLayout.layout3b,
    [panelStyles['panel__content-right--layout3c']]: contentB && layout === PanelLayout.layout3c,
  });

  const panelDetailsClasses = classNames(panelStyles['panel-details'], {
    [panelStyles['panel-details--open']]: showDetails,
    [panelStyles['panel-details--line']]: lineVariant,
    [panelStyles['panel-details--white']]: whiteVariant,
  });

  const panelContentBClass = classNames(panelStyles['panel-content-b'], {
    [panelStyles['panel-content-b--layout1']]: layout === PanelLayout.layout1,
  });

  const panelActionBtnClass = classNames(panelStyles['panel__details-btn'], {
    [panelStyles['panel__details-btn--pull-right']]: contentB,
  });

  const renderDetailsButton = (tabable: boolean = true, id?: string): JSX.Element => {
    const btnProps = {
      id,
      tabIndex: tabable ? undefined : -1,
      variant: 'borderless' as ButtonVariants,
      ref: id ? buttonRef : undefined,
      ellipsis: true,
    };

    if (children) {
      return (
        <Button testId="expand" onClick={(): void => setShowDetails(!showDetails)} {...btnProps}>
          {showDetails ? buttonTextClose : buttonText}
          <Icon svgIcon={showDetails ? ChevronUp : ChevronDown} />
        </Button>
      );
    }

    return (
      <Button testId="url" htmlMarkup="a" href={url} target={target} {...btnProps}>
        {buttonText}
        <Icon svgIcon={ArrowRight} />
      </Button>
    );
  };

  const btnContainerClass = classNames(panelStyles['panel__btn-container'], {
    [panelStyles['panel__btn-container--layout3ish']]: layout3,
    [panelStyles['panel__btn-container--padding-top']]: contentB,
  });

  const renderStatusText = (): JSX.Element | null => {
    const statusIcon = (): { color: string; svgIcon: React.FC<SvgPathProps> } => {
      if (status === PanelStatus.error) {
        return { color: palette.cherry500, svgIcon: AlertSignFill };
      }

      return { color: palette.black, svgIcon: Pencil };
    };

    const statusMessageClass = classNames(panelStyles['status-message'], {
      [panelStyles['status-message--new']]: status === PanelStatus.new,
    });

    if ((status === PanelStatus.error || status === PanelStatus.draft) && statusMessage) {
      return (
        <div className={statusMessageClass} data-testid="display-status">
          {<Icon {...statusIcon()} size={IconSize.XSmall} />} <span>{statusMessage}</span>
        </div>
      );
    }

    return null;
  };

  const onContainerClick = (): void => {
    if (containerAsButton) {
      buttonRef.current?.click();
    }
  };

  const onContainerKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    const key = event.key;
    //if enter or space
    if (containerAsButton && (key === 'Enter' || key === ' ')) {
      event.preventDefault();
      buttonRef.current?.click();
    }
  };

  const renderDateAndTime = (): JSX.Element | null => {
    if (date || time) {
      return (
        <div className={panelStyles['datetime-container']} data-testid="datetime">
          {date && (
            <div className={panelStyles['datetime-container__icon']}>
              <Icon svgIcon={Calendar} size={IconSize.XSmall} />
              <span>{date}</span>
            </div>
          )}
          {time && (
            <div className={panelStyles['datetime-container__icon']}>
              <Icon svgIcon={Watch} size={IconSize.XSmall} />
              <span>{time}</span>
            </div>
          )}
        </div>
      );
    }

    return null;
  };

  return (
    <div ref={ref} data-testid={testId} className={panelWrapperClass} data-analyticsid={AnalyticsId.Panel}>
      <div
        className={panelClasses}
        tabIndex={containerAsButton ? 0 : undefined}
        onClick={onContainerClick}
        onKeyDown={onContainerKeyDown}
        aria-labelledby={containerAsButton ? buttonId : undefined}
        role={containerAsButton ? 'button' : undefined}
      >
        {icon && !iconRight && <div className={panelStyles.panel__icon}>{icon}</div>}
        <div className={panelContainer}>
          <div className={panelContentLeftClass}>
            {renderStatusText()}
            {title && (
              <div className={panelStyles['panel-content-a__title-container']}>
                <Title appearance="title3">{title}</Title>
                {statusMessage && status === PanelStatus.new && (
                  <div>
                    <Badge color="blueberry" testId="badge-status">
                      {statusMessage}
                    </Badge>
                  </div>
                )}
              </div>
            )}
            {contentA}
            {breakpoint !== undefined && breakpoint >= Breakpoint.lg && renderDateAndTime()}
          </div>
          <div className={panelContentRightClass}>
            {contentB && <div className={panelContentBClass}>{contentB}</div>}
            {(children || url || date || time) && (
              <div className={btnContainerClass}>
                {breakpoint !== undefined && breakpoint < Breakpoint.lg && renderDateAndTime()}
                {(children || url) && <div className={panelActionBtnClass}>{renderDetailsButton(!containerAsButton, buttonId)}</div>}
              </div>
            )}
          </div>
        </div>
        {icon && iconRight && <div className={panelStyles['panel__icon--right']}>{icon}</div>}
      </div>
      {children && (
        <div className={panelDetailsClasses} data-testid="panel-details">
          <div>{children}</div>
          {showCloseButtonInExpand && renderDetailsButton()}
        </div>
      )}
    </div>
  );
});

export default Panel;
