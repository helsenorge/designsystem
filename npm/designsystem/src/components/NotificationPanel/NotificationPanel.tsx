import React from 'react';

import classNames from 'classnames';

import { DetailButton } from './DetailButton/DetailButton';
import { AnalyticsId, IconSize } from '../../constants';
import { useUuid } from '../../hooks/useUuid';
import { getColor } from '../../theme/currys';
import { palette } from '../../theme/palette';
import { getAriaLabelAttributes } from '../../utils/accessibility';
import Close from '../Close';
import Icon from '../Icons';
import CheckFill from '../Icons/CheckFill';
import ErrorSignFill from '../Icons/ErrorSignFill';
import InfoSignFill from '../Icons/InfoSignFill';
import TriangleX from '../Icons/TriangleX';

import styles from './styles.module.scss';

export type NotificationPanelVariants = 'info' | 'warn' | 'alert' | 'success';
export type NotificationCompactVariants = 'basic' | 'outline';
export type NotificationPanelSizes = 'small' | 'medium' | 'large';

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
  /** Close button aria-label */
  ariaLabelCloseBtn?: string;
  /** Custom id for the label */
  labelId?: string;
  /** Custom role for the panel. Default is no role. If variant is alert or crisis, the aria role will be set to "alert" unless the role-prop is also set. */
  role?: 'region' | 'alert';
  /** Sets the data-testid attribute. */
  testId?: string;
}

type WrapFluidProps = Pick<NotificationPanelProps, 'fluid' | 'variant'> & {
  children: React.ReactElement;
};

const FluidWrapper: React.FC<WrapFluidProps> = ({ fluid, variant, children }) => {
  if (fluid) {
    const fluidClasses = classNames(styles['fluid-wrapper'], { [styles[`fluid-wrapper--${variant}`]]: variant });

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
    const contentClasses = classNames(styles['notification-panel__content']);
    const labelClasses = classNames(styles['notification-panel__label'], {
      [styles['notification-panel__label--no-content']]: !children && !expanderChildren,
      [styles['notification-panel__label__compact']]: !!compactVariant,
      [styles['notification-panel__label__compact--basic']]: compactVariant === 'basic',
    });
    const childrenClasses = classNames(styles['notification-panel__children'], {
      [styles['notification-panel__label-and-content--spacing']]: label,
      [styles['notification-panel__children--expander-no-label']]: expanderChildren && !label,
    });

    return (
      <div className={contentClasses} id={!label ? uuid : undefined}>
        {label && (
          <h1 className={labelClasses} id={uuid}>
            {label}
          </h1>
        )}
        {children && !compactVariant && <div className={childrenClasses}>{children}</div>}
        {expanderChildren && expanderButtonText && expanderButtonClosedText && !compactVariant && (
          <DetailButton
            expanderOpenFromStart={expanderOpenFromStart}
            content={expanderChildren}
            buttonText={expanderButtonText}
            buttonClosedText={expanderButtonClosedText}
          />
        )}
      </div>
    );
  };

  const notificationPanelClasses = classNames(
    styles['notification-panel'],
    styles[`notification-panel--${variant}`],
    {
      [styles[`notification-panel--${size}`]]: !!size,
      [styles['notification-panel__compact']]: !!compactVariant,
      [styles['notification-panel__compact--basic']]: compactVariant === 'basic',
      [styles['notification-panel__compact--outline']]: compactVariant === 'outline',
      [styles['notification-panel--has-children']]: !!children,
      [styles['notification-panel--with-content']]: expanderChildren || (label && children),
      [styles['notification-panel--dismissable']]: dismissable,
    },
    className
  );

  const ariaRole = role || (variant === 'alert' && 'alert') || undefined;
  const ariaLabelAttributes = ariaRole ? getAriaLabelAttributes({ label, id: uuid }) : undefined;

  return (
    <FluidWrapper fluid={fluid} variant={variant}>
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
