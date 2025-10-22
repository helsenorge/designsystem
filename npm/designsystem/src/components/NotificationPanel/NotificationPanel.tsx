import React, { useId } from 'react';

import classNames from 'classnames';

import { AnalyticsId, IconSize } from '../../constants';
import { getAriaLabelAttributes } from '../../utils/accessibility';
import NotificationBadge from '../Badge/NotificationBadge';
import Close from '../Close';
import Expander from '../Expander';

import styles from './styles.module.scss';

export type NotificationPanelVariants = 'info' | 'warn' | 'error' | 'success';
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
  role?: 'region' | 'alert' | 'status';
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
    role,
    testId,
  } = props;
  const labelIdFallback = useId();
  const labelId = props.labelId || labelIdFallback;
  const [expanderOpen, setExpanderOpen] = React.useState(expanderOpenFromStart);

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

    return (
      <div className={contentClasses} id={!label ? labelId : undefined}>
        {label && (
          <CustomTag className={labelClasses} id={labelId}>
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

  const ariaRole = role || (variant === 'error' && 'alert') || undefined;
  const ariaLabelAttributes = ariaRole ? getAriaLabelAttributes({ label, id: labelId }) : undefined;

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
        <NotificationBadge
          variant={variant}
          size={compactVariant ? IconSize.XSmall : IconSize.Small}
          className={styles['notification-panel__icon']}
        />
        {dismissable && (
          <span className={styles['notification-panel__close']}>
            <Close ariaLabel={props.ariaLabelCloseBtn} onClick={onClick} color="black" />
          </span>
        )}
        {renderContent()}
      </div>
    </FluidWrapper>
  );
});

export default NotificationPanel;
