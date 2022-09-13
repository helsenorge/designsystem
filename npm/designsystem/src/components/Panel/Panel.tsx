import React, { AriaAttributes, useEffect, useState } from 'react';
import classNames from 'classnames';

import panelStyles from './styles.module.scss';
import Title, { TitleTags } from '../Title';
import Button, { ButtonProps, ButtonTags, ButtonVariants } from '../Button';
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
import { useUuid } from '../../hooks/useUuid';
import { usePrevious } from '../../hooks/usePrevious';
import Badge from '../Badge';

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

export interface PanelProps {
  children?: React.ReactNode;
  /** Title of the panel */
  title?: string;
  /** Changes the underlying element of the title. Default: h2*/
  titleHtmlMarkup?: TitleTags;
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
  /** HTML markup for panel button. Default: a */
  buttonHtmlMarkup?: ButtonTags;
  /** Callback when panel button is clicked  */
  buttonOnClick?: ButtonProps['onClick'];
  /** Show close button in bottom of Panel Expand */
  /** @deprecated Has no effect anymore due to accessbility reasons. No close button is shown in expanded content. Will be removed in 2.0.0 */
  showCloseButtonInExpand?: boolean;
  /** Layout (see description) */
  layout?: keyof typeof PanelLayout;
  /** Clicking anywhere on the container will trigger a click on the panel's button */
  containerAsButton?: boolean;
  /** Displays time with icon */
  time?: string;
  /** Displays date with icon */
  date?: string;
  /** Removes top border when variant is "line" */
  noTopBorder?: boolean;
  /** Opens or closes the panel */
  expanded?: boolean;
  /** Called when panel is open/closed. */
  onExpand?: (isExpanded: boolean) => void;
  /** Whether to render children when closed (in which case they are hidden with CSS). Default: false */
  renderChildrenWhenClosed?: boolean;
}

const StatusText: React.FC<{ status?: keyof typeof PanelStatus; statusMessage?: string }> = ({ status, statusMessage }) => {
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

const DateTime: React.FC<{ date?: string; time?: string }> = ({ date, time }) => {
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

const Panel = React.forwardRef(function PanelForwardedRef(props: PanelProps, ref: React.ForwardedRef<HTMLHeadingElement>) {
  const {
    children,
    contentA,
    contentB,
    className,
    testId,
    title,
    titleHtmlMarkup = 'h2',
    url,
    target = '_self',
    icon,
    iconRight = false,
    variant = PanelVariant.fill,
    status = PanelStatus.normal,
    statusMessage,
    buttonText = 'Se detaljer',
    buttonTextClose = 'Skjul detaljer',
    layout = PanelLayout.layout2,
    containerAsButton = false,
    date,
    time,
    noTopBorder,
    buttonOnClick,
    buttonHtmlMarkup = 'a',
    expanded = false,
    onExpand,
    renderChildrenWhenClosed = false,
  } = props;

  const [isExpanded, setIsExpanded] = useState<boolean>(expanded);
  const previousIsExpanded = usePrevious(isExpanded);
  const titleId = useUuid();
  const buttonTextId = useUuid();
  const breakpoint = useBreakpoint();

  useEffect(() => {
    if (expanded !== isExpanded) {
      setIsExpanded(expanded);
    }
  }, [expanded]);

  useEffect(() => {
    if (onExpand && isExpanded !== !!previousIsExpanded) {
      onExpand(isExpanded);
    }
  }, [isExpanded, onExpand]);

  const layout3 = [PanelLayout.layout3a.toString(), PanelLayout.layout3b.toString(), PanelLayout.layout3c.toString()].includes(layout);

  const panelWrapperClass = classNames(panelStyles['panel-wrapper'], className);

  const panelClasses = classNames(panelStyles.panel, {
    [panelStyles['panel--fill']]: variant === PanelVariant.fill,
    [panelStyles['panel--stroke']]: variant === PanelVariant.stroke,
    [panelStyles['panel--white']]: variant === PanelVariant.white,
    [panelStyles['panel--line']]: variant === PanelVariant.line,
    [panelStyles['panel--no-top-border']]: variant === PanelVariant.line && noTopBorder,
    [panelStyles['panel--selected']]: isExpanded,
    [panelStyles['panel--new']]: status === PanelStatus.new,
    [panelStyles['panel--draft']]: status === PanelStatus.draft,
    [panelStyles['panel--error']]: status === PanelStatus.error,
    [panelStyles['panel--status']]: status && status !== PanelStatus.normal,
    [panelStyles['panel--with-icon']]: icon,
    [panelStyles['panel--button']]: containerAsButton,
    [panelStyles['panel--clickable']]: children || url || onExpand || buttonOnClick || containerAsButton,
  });

  const panelContainer = classNames({
    [panelStyles['panel__container']]: layout === PanelLayout.layout2 && contentB,
    [panelStyles['panel__container--layout3']]: layout3 && contentB,
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
    [panelStyles['panel__content-right--layout3']]: contentB && layout3,
    [panelStyles['panel__content-right--layout3a']]: contentB && layout === PanelLayout.layout3a,
    [panelStyles['panel__content-right--layout3b']]: contentB && layout === PanelLayout.layout3b,
    [panelStyles['panel__content-right--layout3c']]: contentB && layout === PanelLayout.layout3c,
  });

  const panelContentBClass = classNames(panelStyles['panel-content-b'], {
    [panelStyles['panel-content-b--layout1']]: layout === PanelLayout.layout1,
    [panelStyles['panel-content-b--layout3']]: layout3,
  });

  const panelActionBtnClass = classNames(panelStyles['panel__details-btn']);

  const renderDetailsButton = (): JSX.Element => {
    const commonProps: Partial<ButtonProps> & Pick<AriaAttributes, 'aria-labelledby'> = {
      onClick: buttonOnClick ? buttonOnClick : () => setIsExpanded(!isExpanded),
      className: containerAsButton && panelStyles['panel__expand'],
      variant: 'borderless',
      ellipsis: true,
      ['aria-labelledby']: title && titleId ? `${buttonTextId} ${titleId}` : undefined,
    };

    if (!!children) {
      return (
        <Button testId="expand" aria-expanded={isExpanded} {...commonProps}>
          <span id={buttonTextId}>{isExpanded ? buttonTextClose : buttonText}</span>
          <Icon svgIcon={isExpanded ? ChevronUp : ChevronDown} />
        </Button>
      );
    }

    return (
      <Button testId="url" htmlMarkup={buttonHtmlMarkup} href={url} target={target} {...commonProps}>
        <span id={buttonTextId}>{buttonText}</span>
        <Icon svgIcon={ArrowRight} />
      </Button>
    );
  };

  const btnContainerClass = classNames(panelStyles['panel__btn-container'], {
    [panelStyles['panel__btn-container--layout3']]: layout3,
    [panelStyles['panel__btn-container--padding-top']]: contentB,
  });

  const renderContent = () => {
    if (!children) {
      return null;
    }
    if (!renderChildrenWhenClosed && !isExpanded) {
      return null;
    }

    const panelDetailsClasses = classNames(panelStyles['panel-details'], {
      [panelStyles['panel-details--open']]: isExpanded,
      [panelStyles['panel-details--line']]: variant === PanelVariant.line,
      [panelStyles['panel-details--white']]: variant === PanelVariant.white,
      [panelStyles['panel-details--with-icon']]: icon,
    });

    return (
      <div className={panelDetailsClasses} data-testid="panel-details">
        <div>{children}</div>
      </div>
    );
  };

  return (
    <div ref={ref} data-testid={testId} className={panelWrapperClass} data-analyticsid={AnalyticsId.Panel}>
      <div className={panelClasses}>
        {icon && !iconRight && <div className={panelStyles.panel__icon}>{icon}</div>}
        <div className={panelContainer}>
          <div className={panelContentLeftClass}>
            <StatusText status={status} statusMessage={statusMessage} />
            {title && (
              <div className={panelStyles['panel-content-a__title-container']}>
                <Title appearance="title3" htmlMarkup={titleHtmlMarkup} id={titleId}>
                  {title}
                </Title>
                {statusMessage && status === PanelStatus.new && (
                  <Badge color="blueberry" testId="badge-status" className={panelStyles.panel__badge}>
                    {statusMessage}
                  </Badge>
                )}
              </div>
            )}
            {contentA}
            {breakpoint >= Breakpoint.lg && <DateTime date={date} time={time} />}
          </div>
          <div className={panelContentRightClass}>
            {contentB && <div className={panelContentBClass}>{contentB}</div>}
            {(children || url || date || time || buttonOnClick) && (
              <div className={btnContainerClass}>
                {breakpoint < Breakpoint.lg && <DateTime date={date} time={time} />}
                {(children || url || buttonOnClick) && <div className={panelActionBtnClass}>{renderDetailsButton()}</div>}
              </div>
            )}
          </div>
        </div>
        {icon && iconRight && <div className={panelStyles['panel__icon--right']}>{icon}</div>}
      </div>
      {renderContent()}
    </div>
  );
});

export default Panel;
