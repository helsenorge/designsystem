import React from 'react';

import classNames from 'classnames';

import { AnchorTarget, AnalyticsId } from '../../constants';
import { useExpand } from '../../hooks/useExpand';
import { useUuid } from '../../hooks/useUuid';
import { palette } from '../../theme/palette';
import { AriaLabelAttributes, getAriaLabelAttributes } from '../../utils/accessibility';
import Badge from '../Badge';
import Button, { ButtonProps, ButtonTags } from '../Button';
import Icon, { IconSize, SvgPathProps } from '../Icon';
import AlertSignFill from '../Icons/AlertSignFill';
import ArrowRight from '../Icons/ArrowRight';
import Calendar from '../Icons/Calendar';
import ChevronDown from '../Icons/ChevronDown';
import ChevronUp from '../Icons/ChevronUp';
import Pencil from '../Icons/Pencil';
import Watch from '../Icons/Watch';
import Title, { TitleTags } from '../Title';

import panelStyles from './styles.module.scss';

export enum PanelOldStatus {
  normal = 'normal',
  new = 'new',
  error = 'error',
  draft = 'draft',
}

export enum PanelOldVariant {
  fill = 'fill',
  white = 'white',
  stroke = 'stroke',
  line = 'line',
}

export enum PanelOldLayout {
  layout1 = 'layout1',
  layout2 = 'layout2',
  layout3a = 'layout3a',
  layout3b = 'layout3b',
  layout3c = 'layout3c',
}

export interface PanelOldProps {
  /** Adds custom classes to the element. */
  className?: string;
  /** Panel section A content */
  contentA?: React.ReactNode | string;
  /** Panel section B content */
  contentB?: React.ReactNode | string;
  /** Content for a container that renders above A and B regardless of layout */
  contentHeader?: React.ReactNode;
  /** Container acts as a button, clicking anywhere triggers a panel button click */
  containerAsButton?: boolean;
  /** Panel children */
  children?: React.ReactNode;
  /** Displays date with icon */
  date?: string;
  /** Expands or collapses the panel */
  expanded?: boolean;
  /** Whether the panel can be focused */
  focusable?: boolean;
  /** Icon displayed in title */
  icon?: React.ReactNode;
  /** Panel button text */
  buttonText?: string;
  /** Panel button close text */
  buttonTextClose?: string;
  /** HTML markup for panel button. Default: a */
  buttonHtmlMarkup?: ButtonTags;
  /** Callback when the panel button is clicked */
  buttonOnClick?: ButtonProps['onClick'];
  /** Panel button is aria-labelledby the text in the button itself + the element set in buttonAriaLabelledById. Default: auto-generated id for title (if title is set). */
  buttonAriaLabelledById?: string;
  /** Panel button aria label */
  buttonAriaLabel?: string;
  /** Layout of the panel */
  layout?: keyof typeof PanelOldLayout;
  /** Removes top border when variant is "line" */
  noTopBorder?: boolean;
  /** Called when the panel is opened/closed */
  onExpand?: (isExpanded: boolean) => void;
  /** Whether to render children when closed (in which case they are hidden with CSS). Default: false */
  renderChildrenWhenClosed?: boolean;
  /** Displays a status on the left side: default normal */
  status?: keyof typeof PanelOldStatus;
  /** Displayed on top of the panel with a status icon */
  statusMessage?: string;
  /** Sets the data-testid attribute for testing purposes */
  testId?: string;
  /** Displays time with icon */
  time?: string;
  /** Title of the panel */
  title?: string;
  /** Changes the underlying element of the title. Default: h2 */
  titleHtmlMarkup?: TitleTags;
  /** Changes the visual representation of the panel */
  variant?: keyof typeof PanelOldVariant;
  /** URL to details, renders as a button with anchor tag */
  url?: string;
  /** target used in the button: default is _self */
  target?: AnchorTarget;
}

export interface LayoutProps
  extends Pick<PanelOldProps, 'contentA' | 'contentB' | 'contentHeader' | 'icon' | 'layout' | 'status' | 'statusMessage'> {
  ctaContainer?: React.ReactNode;
  titleElement: React.ReactNode;
}

const StatusText: React.FC<{ status?: keyof typeof PanelOldStatus; statusMessage?: string }> = ({ status, statusMessage }) => {
  const statusIcon = (): { color: string; svgIcon: React.FC<SvgPathProps> } => {
    if (status === PanelOldStatus.error) {
      return { color: palette.cherry500, svgIcon: AlertSignFill };
    }

    return { color: palette.black, svgIcon: Pencil };
  };

  const statusMessageClass = classNames(panelStyles['status-message'], {
    [panelStyles['status-message--new']]: status === PanelOldStatus.new,
  });

  if ((status === PanelOldStatus.error || status === PanelOldStatus.draft) && statusMessage) {
    return (
      <div className={statusMessageClass} data-testid="display-status">
        {<Icon {...statusIcon()} size={IconSize.XSmall} />} <span>{statusMessage}</span>
      </div>
    );
  }

  return null;
};

const PreContainer: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  if (typeof children === 'undefined') return null;
  return <div className={panelStyles['header-container']}>{children}</div>;
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

const PanelLayout1: React.FC<LayoutProps> = ({
  contentA,
  contentB,
  contentHeader,
  ctaContainer,
  icon,
  status,
  statusMessage,
  titleElement,
}) => {
  const panelLayoutClasses = classNames(panelStyles['panel__layout-1'], {
    [panelStyles['panel__layout-1--with-icon']]: icon,
  });
  const iconClasses = classNames(panelStyles.panel__icon, panelStyles['panel__icon--layout-1'], {
    [panelStyles['panel__icon--no-content']]: !contentA && !contentB,
  });

  return (
    <div className={panelLayoutClasses}>
      <StatusText status={status} statusMessage={statusMessage} />
      <PreContainer>{contentHeader}</PreContainer>
      {icon && <div className={iconClasses}>{icon}</div>}
      <div className={panelStyles['panel__layout-1__content-a']}>
        {titleElement}
        {contentA}
      </div>
      {contentB && <div>{contentB}</div>}
      {ctaContainer}
    </div>
  );
};

const PanelLayout2: React.FC<LayoutProps> = ({
  contentA,
  contentB,
  contentHeader,
  ctaContainer,
  icon,
  status,
  statusMessage,
  titleElement,
}) => {
  const panelLayoutClasses = classNames(panelStyles['panel__layout-2'], {
    [panelStyles['panel__layout-2--with-icon']]: icon,
  });
  const iconClasses = classNames(panelStyles.panel__icon, panelStyles['panel__icon--layout-2'], {
    [panelStyles['panel__icon--no-content']]: !contentA && !contentB,
  });
  const lastColumnClass = panelStyles['panel__layout-2__last-column'];

  return (
    <div className={panelLayoutClasses}>
      <StatusText status={status} statusMessage={statusMessage} />
      <PreContainer>{contentHeader}</PreContainer>
      {icon && <div className={iconClasses}>{icon}</div>}
      <div className={panelStyles['panel__layout-2__content-a']}>
        {titleElement}
        {contentA}
      </div>
      {contentB && <div className={lastColumnClass}>{contentB}</div>}
      {ctaContainer && <div className={lastColumnClass}>{ctaContainer}</div>}
    </div>
  );
};

const PanelLayout3: React.FC<LayoutProps> = ({
  contentA,
  contentB,
  contentHeader,
  ctaContainer,
  icon,
  layout,
  status,
  statusMessage,
  titleElement,
}) => {
  const layoutClasses = classNames(panelStyles['panel__layout-3'], {
    [panelStyles['panel__layout-3--with-icon']]: icon,
    [panelStyles['panel__layout-3--a']]: layout === PanelOldLayout.layout3a,
    [panelStyles['panel__layout-3--b']]: layout === PanelOldLayout.layout3b,
    [panelStyles['panel__layout-3--c']]: layout === PanelOldLayout.layout3c,
  });
  const iconClasses = classNames(panelStyles.panel__icon, panelStyles['panel__icon--layout-3'], {
    [panelStyles['panel__icon--no-content']]: !contentA && !contentB,
  });

  return (
    <div className={layoutClasses}>
      <StatusText status={status} statusMessage={statusMessage} />
      <PreContainer>{contentHeader}</PreContainer>
      {icon && <div className={iconClasses}>{icon}</div>}
      <div>
        {titleElement}
        {contentA}
      </div>
      <div className={panelStyles['panel__layout-3__last-column']}>
        {contentB && <div className={panelStyles['panel__layout-3__last-column__content-b']}>{contentB}</div>}
        {ctaContainer}
      </div>
    </div>
  );
};

const PanelOld = React.forwardRef(function PanelForwardedRef(props: PanelOldProps, ref: React.ForwardedRef<HTMLHeadingElement>) {
  const {
    buttonAriaLabel,
    buttonAriaLabelledById,
    buttonText = 'Se detaljer',
    buttonTextClose = 'Skjul detaljer',
    buttonHtmlMarkup = 'a',
    buttonOnClick,
    children,
    className,
    containerAsButton = false,
    contentA,
    contentB,
    contentHeader,
    date,
    expanded = false,
    focusable = false,
    icon,
    layout = PanelOldLayout.layout2,
    noTopBorder,
    onExpand,
    renderChildrenWhenClosed = false,
    status = PanelOldStatus.normal,
    statusMessage,
    target = '_self',
    testId,
    time,
    title,
    titleHtmlMarkup = 'h2',
    url,
    variant = PanelOldVariant.fill,
  } = props;

  const [isExpanded, setIsExpanded] = useExpand(expanded, onExpand);
  const titleId = useUuid();
  const buttonTextId = useUuid();
  const hasBadge = statusMessage && status === PanelOldStatus.new;
  const noContentB = typeof contentB === 'undefined';
  const layout1 = layout === 'layout1' || noContentB;
  const layout2 = !noContentB && layout === 'layout2';
  const layout3 = !noContentB && (layout === 'layout3a' || layout === 'layout3b' || layout === 'layout3c');
  const panelWrapperClasses = classNames(panelStyles['panel-wrapper'], className);

  const panelClasses = classNames(panelStyles.panel, {
    [panelStyles['panel--fill']]: variant === PanelOldVariant.fill,
    [panelStyles['panel--stroke']]: variant === PanelOldVariant.stroke,
    [panelStyles['panel--white']]: variant === PanelOldVariant.white,
    [panelStyles['panel--line']]: variant === PanelOldVariant.line,
    [panelStyles['panel--no-top-border']]: variant === PanelOldVariant.line && noTopBorder,
    [panelStyles['panel--selected']]: isExpanded,
    [panelStyles['panel--new']]: status === PanelOldStatus.new,
    [panelStyles['panel--draft']]: status === PanelOldStatus.draft,
    [panelStyles['panel--error']]: status === PanelOldStatus.error,
    [panelStyles['panel--status']]: status && status !== PanelOldStatus.normal,
    [panelStyles['panel--with-icon']]: icon,
    [panelStyles['panel--button']]: containerAsButton,
    [panelStyles['panel--clickable']]: children || url || onExpand || buttonOnClick || containerAsButton,
  });

  const renderCTAContainer = () => {
    const hasButton = children || url || buttonOnClick;
    const btnContainerClasses = classNames(panelStyles['panel__btn-container'], {
      [panelStyles['panel__btn-container--no-content-b']]: noContentB,
      [panelStyles['panel__btn-container--no-button']]: !hasButton,
    });

    return (
      (hasButton || date || time) && (
        <div className={btnContainerClasses}>
          {<DateTime date={date} time={time} />}
          {hasButton && <div className={panelStyles['panel__details-btn']}>{renderDetailsButton()}</div>}
        </div>
      )
    );
  };

  const renderDetailsButton = (): React.ReactNode => {
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

  const renderContent = (): React.ReactNode | null => {
    if (!children || (!renderChildrenWhenClosed && !isExpanded)) {
      return null;
    }

    const panelDetailsClasses = classNames(panelStyles['panel-details'], {
      [panelStyles['panel-details--open']]: isExpanded,
      [panelStyles['panel-details--line']]: variant === PanelOldVariant.line,
      [panelStyles['panel-details--white']]: variant === PanelOldVariant.white,
    });

    return (
      <div className={panelDetailsClasses} data-testid="panel-details">
        <div>{children}</div>
      </div>
    );
  };

  const renderTitle = () => {
    const titleContainerClasses = classNames(panelStyles['title-container'], {
      [panelStyles['title-container--no-content-a']]: !contentA,
    });
    const titleClasses = classNames(panelStyles['title-container__title'], {
      [panelStyles['title-container__title--badge']]: hasBadge,
    });

    return (
      title && (
        <div className={titleContainerClasses}>
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
      )
    );
  };

  const layoutProps: LayoutProps = {
    contentA: contentA,
    contentB: contentB,
    contentHeader: contentHeader,
    ctaContainer: renderCTAContainer(),
    icon: icon,
    status: status,
    statusMessage: statusMessage,
    titleElement: renderTitle(),
  };

  return (
    <div
      // eslint-disable-next-line no-constant-condition
      tabIndex={focusable ? -1 : undefined}
      ref={ref}
      data-testid={testId}
      className={panelWrapperClasses}
      data-analyticsid={AnalyticsId.Panel}
    >
      <div className={panelClasses}>
        {layout1 && <PanelLayout1 {...layoutProps} />}
        {layout2 && <PanelLayout2 {...layoutProps} />}
        {layout3 && <PanelLayout3 {...layoutProps} layout={layout} />}
      </div>
      {renderContent()}
    </div>
  );
});

export default PanelOld;
