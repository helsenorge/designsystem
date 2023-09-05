import React from 'react';

import classNames from 'classnames';

import { AnchorTarget, AnalyticsId } from '../../constants';
import { useExpand } from '../../hooks/useExpand';
import { useUuid } from '../../hooks/useUuid';
import { palette } from '../../theme/palette';
import { AriaLabelAttributes, getAriaLabelAttributes } from '../../utils/accessibility';
import Badge from '../Badge';
import Button, { ButtonProps, ButtonTags } from '../Button';
import Icon, { IconSize, SvgPathProps } from '../Icons';
import AlertSignFill from '../Icons/AlertSignFill';
import ArrowRight from '../Icons/ArrowRight';
import Calendar from '../Icons/Calendar';
import ChevronDown from '../Icons/ChevronDown';
import ChevronUp from '../Icons/ChevronUp';
import Pencil from '../Icons/Pencil';
import Watch from '../Icons/Watch';
import Title, { TitleTags } from '../Title';

import panelStyles from './styles.module.scss';

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
  /** Changes the underlying element of the title. Default: h2 */
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
  /** A version of panel that prioritises content-B visually and audibly */
  prioritiseMetaDataInContentB?: boolean;
  /** Panel button text */
  buttonText?: string;
  /** Panel button close text */
  buttonTextClose?: string;
  /** HTML markup for panel button. Default: a */
  buttonHtmlMarkup?: ButtonTags;
  /** Callback when panel button is clicked  */
  buttonOnClick?: ButtonProps['onClick'];
  /** Panel button is aria-labelledby the text in the button itself + the element set in buttonAriaLabelledById. Default: auto-generated id for title (if title is set). */
  buttonAriaLabelledById?: string;
  /** Panel button aria label */
  buttonAriaLabel?: string;
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
  /** Whether panel is focusable or not */
  focusable?: boolean;
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
    prioritiseMetaDataInContentB,
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
    buttonAriaLabelledById,
    buttonAriaLabel,
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
    focusable = false,
  } = props;

  const [isExpanded, setIsExpanded] = useExpand(expanded, onExpand);
  const titleId = useUuid();
  const buttonTextId = useUuid();
  const hasBadge = statusMessage && status === PanelStatus.new;
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
    [panelStyles['panel__container--layout1']]: layout === PanelLayout.layout1 && contentB,
    [panelStyles['panel__container--layout2']]: layout === PanelLayout.layout2 && contentB,
    [panelStyles['panel__container--layout3']]: layout3 && contentB,
    [panelStyles['panel__container--grow']]: icon,
    [panelStyles['panel__container--prioritiseMetaDataInContentB']]: prioritiseMetaDataInContentB,
  });

  const panelContentLeftClass = classNames({
    [panelStyles['panel-content-a']]: layout === PanelLayout.layout2,
    [panelStyles['panel-content-a--layout3a']]: layout === PanelLayout.layout3a,
    [panelStyles['panel-content-a--layout3b']]: layout === PanelLayout.layout3b,
    [panelStyles['panel-content-a--layout3c']]: layout === PanelLayout.layout3c,
    [panelStyles['panel-content-a--non-prioritiseMetaDataInContentB']]: !prioritiseMetaDataInContentB,
  });

  const panelContentRightClass = classNames({
    [panelStyles['panel__content-right--layout1']]: contentB && layout === PanelLayout.layout1,
    [panelStyles['panel__content-right--layout2']]: contentB && layout === PanelLayout.layout2,
    [panelStyles['panel__content-right--layout3']]: contentB && layout3,
    [panelStyles['panel__content-right--layout3a']]: contentB && layout === PanelLayout.layout3a,
    [panelStyles['panel__content-right--layout3b']]: contentB && layout === PanelLayout.layout3b,
    [panelStyles['panel__content-right--layout3c']]: contentB && layout === PanelLayout.layout3c,
    [panelStyles['panel__content-right--prioritiseMetaDataInContentB']]: prioritiseMetaDataInContentB,
  });

  const panelContentBClass = classNames(panelStyles['panel-content-b'], {
    [panelStyles['panel-content-b--layout1']]: layout === PanelLayout.layout1,
    [panelStyles['panel-content-b--layout2']]: layout === PanelLayout.layout2,
    [panelStyles['panel-content-b--layout3']]: layout3,
    [panelStyles['panel-content-b--prioritiseMetaDataInContentB']]: prioritiseMetaDataInContentB,
  });

  const panelActionBtnClass = classNames(panelStyles['panel__details-btn']);
  const titleClasses = classNames(panelStyles['panel-content-a__title'], { [panelStyles['panel-content-a__title--badge']]: hasBadge });

  const renderDetailsButton = (): JSX.Element => {
    const ariaLabelAttributes = getAriaLabelAttributes({
      label: buttonAriaLabel,
      id: (buttonAriaLabelledById && `${buttonTextId} ${buttonAriaLabelledById}`) || (title && titleId && `${buttonTextId} ${titleId}`),
      prefer: 'label',
    });

    const commonProps: Partial<ButtonProps> & AriaLabelAttributes = {
      onClick: buttonOnClick ? buttonOnClick : (): void => setIsExpanded(!isExpanded),
      className: containerAsButton ? panelStyles['panel__expand'] : undefined,
      variant: 'borderless',
      ellipsis: true,
      ...ariaLabelAttributes,
    };

    if (children) {
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
    [panelStyles['panel__btn-container--no-content-b']]: !contentB,
    [panelStyles['panel__btn-container--padding-top']]: contentA || contentB,
  });

  const renderContent = (): JSX.Element | null => {
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

  const contentBElement = (
    <div className={panelContentRightClass}>
      {contentB && <div className={panelContentBClass}>{contentB}</div>}
      {(children || url || date || time || buttonOnClick) && (
        <div className={btnContainerClass}>
          {<DateTime date={date} time={time} />}
          {(children || url || buttonOnClick) && <div className={panelActionBtnClass}>{renderDetailsButton()}</div>}
        </div>
      )}
    </div>
  );

  return (
    <div
      // eslint-disable-next-line no-constant-condition
      tabIndex={focusable ? -1 : undefined}
      ref={ref}
      data-testid={testId}
      className={panelWrapperClass}
      data-analyticsid={AnalyticsId.Panel}
    >
      <div className={panelClasses}>
        {icon && !iconRight && <div className={panelStyles.panel__icon}>{icon}</div>}
        <div className={panelContainer}>
          {prioritiseMetaDataInContentB && contentBElement}
          <div className={panelContentLeftClass}>
            <StatusText status={status} statusMessage={statusMessage} />
            {title && (
              <div className={panelStyles['panel-content-a__title-container']}>
                <Title appearance="title3" htmlMarkup={titleHtmlMarkup} id={titleId} className={titleClasses}>
                  {title}
                </Title>
                {hasBadge && (
                  <div className={panelStyles.panel__badge}>
                    <Badge color="blueberry" testId="badge-status">
                      {statusMessage}
                    </Badge>
                  </div>
                )}
              </div>
            )}
            {contentA}
          </div>
          {!prioritiseMetaDataInContentB && contentBElement}
        </div>
        {icon && iconRight && <div className={panelStyles['panel__icon--right']}>{icon}</div>}
      </div>
      {renderContent()}
    </div>
  );
});

export default Panel;
