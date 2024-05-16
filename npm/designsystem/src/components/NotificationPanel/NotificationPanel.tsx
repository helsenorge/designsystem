import React from 'react';

import classNames from 'classnames';

import { AnalyticsId, IconSize } from '../../constants';
import { useUuid } from '../../hooks/useUuid';
import { getColor } from '../../theme/currys';
import { palette } from '../../theme/palette';
import { getAriaLabelAttributes } from '../../utils/accessibility';
import Close from '../Close';
import Expander from '../Expander';
import Icon from '../Icon';
import CheckFill from '../Icons/CheckFill';
import ErrorSignFill from '../Icons/ErrorSignFill';
import InfoSignFill from '../Icons/InfoSignFill';
import TriangleX from '../Icons/TriangleX';

import styles from './styles.module.scss';

export type NotificationPanelVariants = 'info' | 'warn' | 'alert' | 'success';
export type NotificationCompactVariants = 'basic' | 'outline';
export type NotificationPanelSizes = 'small' | 'medium' | 'large';
export type LabelTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'span';

export interface NotificationPanelProps {
  /** Adds custom classes to the element. */
  className?: string;
  /** Adds inner child elements. */
  children?: React.ReactNode;
  /** Adds inner expander elements. */
  expanderChildren?: React.ReactNode;
  /** Text for expanderButton. */
  expanderButtonText?: string;
  /** Text for expanderButton when closed. */
  expanderButtonClosedText?: string;
  /** Makes expander be open from start. */
  expanderOpenFromStart?: boolean;
  /** Changes the visual representation of the notification panel. */
  variant?: NotificationPanelVariants;
  /** Makes the panel more compact. Available in basic and outline. */
  compactVariant?: NotificationCompactVariants;
  /** Sets a fixed size for the content container. */
  size?: NotificationPanelSizes;
  /** Used in combination with dismissiable property to close the notification panel. */
  onClick?: (e?: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  /** Toggles the close button in the top right corner. */
  dismissable?: boolean;
  /** Enables a fluid outer container that spans the entire width of parent. */
  fluid?: boolean;
  /** Sets a label for the notification panel. */
  label?: string;
  /** Changes the underlying element of the label. */
  labelHtmlMarkup?: LabelTags;
  /** Close button aria-label */
  ariaLabelCloseBtn?: string;
  /** Custom id for the label */
  labelId?: string;
  /** Custom role for the panel. Default is no role. If variant is alert or crisis, the aria role will be set to "alert" unless the role-prop is also set. */
  role?: 'region' | 'alert';
  /** Sets the data-testid attribute. */
  testId?: string;
}

type WrapFluidProps = Pick<NotificationPanelProps, 'fluid'> & {
  children: React.ReactElement;
};

const FluidWrapper: React.FC<WrapFluidProps> = ({ fluid, children }) => {
  if (fluid) {
    const fluidClasses = classNames(styles['fluid-wrapper']);

    return <div className={fluidClasses}>{children}</div>;
  }
  return children;
};

const NotificationPanel = React.forwardRef<HTMLDivElement, NotificationPanelProps>((props, ref) => {
  const {
    children,
    variant = 'info',
    dismissable = false,
    onClick,
    expanderChildren,
    expanderButtonText,
    expanderButtonClosedText,
    expanderOpenFromStart = false,
    compactVariant,
    label,
    labelHtmlMarkup = 'h1',
    fluid = false,
    size,
    className,
    labelId,
    role,
    testId,
  } = props;
  const uuid = useUuid(labelId);
  const variantToIconMap = {
    info: (
      <Icon
        svgIcon={InfoSignFill}
        color={palette.blueberry700}
        hoverColor={palette.blueberry700}
        size={compactVariant ? IconSize.XSmall : IconSize.Small}
      />
    ),
    warn: (
      <Icon
        svgIcon={ErrorSignFill}
        color={palette.banana700}
        hoverColor={palette.banana700}
        size={compactVariant ? IconSize.XSmall : IconSize.Small}
      />
    ),
    alert: (
      <Icon
        svgIcon={TriangleX}
        color={palette.cherry700}
        hoverColor={palette.cherry700}
        size={compactVariant ? IconSize.XSmall : IconSize.Small}
      />
    ),
    success: (
      <Icon
        svgIcon={CheckFill}
        color={palette.kiwi900}
        hoverColor={palette.kiwi900}
        size={compactVariant ? IconSize.XSmall : IconSize.Small}
      />
    ),
  };
  const renderContent = (): JSX.Element => {
    const outlineVariant = compactVariant === 'outline';
    const contentClasses = classNames(styles['notification-panel__content']);
    const labelClasses = classNames(styles['notification-panel__label'], {
      [styles['notification-panel__label--no-content']]: !children && !expanderChildren,
      [styles['notification-panel__label--compact']]: !!compactVariant,
      [styles['notification-panel__label--outline']]: outlineVariant,
    });
    const childrenClasses = classNames(styles['notification-panel__children'], {
      [styles['notification-panel__children--with-label']]: label,
      [styles['notification-panel__children--expander-no-label']]: expanderChildren && !label,
      [styles['notification-panel__children--outline']]: outlineVariant,
    });
    const CustomTag = labelHtmlMarkup;

    const [expanderOpen, setExpanderOpen] = React.useState(expanderOpenFromStart);
    return (
      <div className={contentClasses} id={!label ? uuid : undefined}>
        {label && (
          <CustomTag className={labelClasses} id={uuid}>
            {label}
          </CustomTag>
        )}
        {children && <div className={childrenClasses}>{children}</div>}
        {expanderChildren && expanderButtonText && expanderButtonClosedText && !compactVariant && (
          <Expander
            title={expanderOpen ? expanderButtonText : expanderButtonClosedText}
            onExpand={setExpanderOpen}
            expanded={expanderOpen}
            testId="expand"
          >
            {expanderChildren}
          </Expander>
        )}
      </div>
    );
  };

  const notificationPanelClasses = classNames(
    styles['notification-panel'],
    styles[`notification-panel--${variant}`],
    size && styles[`notification-panel--${size}`],
    {
      [styles['notification-panel--compact']]: !!compactVariant,
      [styles['notification-panel--compact--basic']]: compactVariant === 'basic',
      [styles['notification-panel--compact--outline']]: compactVariant === 'outline',
      [styles['notification-panel--with-content']]: expanderChildren || (label && children),
      [styles['notification-panel--dismissable']]: dismissable,
    },
    className
  );

  const ariaRole = role || (variant === 'alert' && 'alert') || undefined;
  const ariaLabelAttributes = ariaRole ? getAriaLabelAttributes({ label, id: uuid }) : undefined;

  return (
    <FluidWrapper fluid={fluid}>
      <div
        ref={ref}
        role={ariaRole}
        data-testid={testId}
        data-analyticsid={AnalyticsId.NotificationPanel}
        className={notificationPanelClasses}
        {...ariaLabelAttributes}
      >
        <span className={styles['notification-panel__icon']}>{variantToIconMap[variant]}</span>
        {dismissable && (
          <span className={styles['notification-panel__close']}>
            <Close ariaLabel={props.ariaLabelCloseBtn} onClick={onClick} color={getColor('black')} />
          </span>
        )}
        {renderContent()}
      </div>
    </FluidWrapper>
  );
});

export default NotificationPanel;
