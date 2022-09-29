import React from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';
import Close from '../Close';
import { AnalyticsId } from '../../constants';
import { useUuid } from '../../hooks/useUuid';
import { palette } from '../../theme/palette';
import { getAriaLabelAttributes } from '../../utils/accessibility';
import Icon from '../Icons';
import InfoSignStroke from '../Icons/InfoSignStroke';
import AlertSignStroke from '../Icons/AlertSignStroke';
import AlertSignFill from '../Icons/AlertSignFill';

export type NotificationPanelVariants = 'info' | 'warn' | 'alert' | 'crisis';
export type NotificationPanelSizes = 'small' | 'medium' | 'large';

const variantToIconMap = {
  info: <Icon svgIcon={InfoSignStroke} color={palette.kiwi900} hoverColor={palette.kiwi900} />,
  warn: <Icon svgIcon={AlertSignStroke} color="black" hoverColor="black" />,
  alert: <Icon svgIcon={AlertSignFill} color={palette.cherry500} hoverColor={palette.cherry500} />,
  alertLabel: <Icon svgIcon={AlertSignStroke} color={palette.cherry500} hoverColor={palette.cherry500} />,
  crisis: <Icon svgIcon={AlertSignFill} color={palette.banana200} hoverColor={palette.banana200} />,
};

interface NotificationPanelProps {
  /** Adds custom classes to the element. */
  className?: string;
  /** Adds inner child elements. */
  children?: React.ReactNode;
  /** Changes the visual representation of the notification panel. */
  variant?: NotificationPanelVariants;
  /** Adds a shadow effect around the notification panel. */
  shadow?: boolean;
  /** Sets a fixed size for the content container. */
  size?: NotificationPanelSizes;
  /** Used in combination with dismissiable property to close the notification panel. */
  onClick?: (e?: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  /** Toggles the close button in the top right corner. Will only show if there are children. */
  dismissable?: boolean;
  /** Enables a fluid outer container that spans the entire width of parent. */
  fluid?: boolean;
  /** Sets a label for the notification panel. */
  label?: string;
  /** Close button aria-label */
  ariaLabelCloseBtn?: string;
  /** Custom id for the label */
  labelId?: string;
  /** Sets the data-testid attribute. */
  testId?: string;
}

type WrapFluidProps = Pick<NotificationPanelProps, 'fluid' | 'variant' | 'shadow'> & {
  children: React.ReactElement;
};

const FluidWrapper: React.FC<WrapFluidProps> = ({ fluid, variant, shadow, children }) => {
  if (fluid) {
    const fluidClasses = classNames(styles['fluid-wrapper'], styles[`fluid-wrapper--${variant}`], {
      [styles['fluid-wrapper--shadow']]: shadow,
    });

    return <div className={fluidClasses}>{children}</div>;
  }
  return children;
};

const NotificationPanel = React.forwardRef<HTMLDivElement, NotificationPanelProps>((props, ref) => {
  const {
    children,
    variant = 'info',
    shadow = false,
    dismissable = false,
    onClick,
    label,
    fluid = false,
    size,
    className,
    labelId,
    testId,
  } = props;
  const uuid = useUuid(labelId);

  const renderContent = (): JSX.Element => {
    const contentClasses = classNames(styles['notification-panel__content'], styles[`notification-panel__content--${variant}`]);

    return (
      <div className={contentClasses} id={!label ? uuid : undefined}>
        {label && <h1 className={styles['notification-panel__label']} dangerouslySetInnerHTML={{ __html: label }} id={uuid} />}
        {children}
      </div>
    );
  };

  const labelOnly = !!label && !children;

  const notificationPanelClasses = classNames(
    styles['notification-panel'],
    size && styles[`notification-panel--${size}`],
    styles[`notification-panel--${variant}`],
    {
      [styles['notification-panel--shadow']]: !fluid && shadow,
      [styles['notification-panel--has-children']]: !!children,
      [styles['notification-panel--label-only']]: labelOnly,
      [styles['notification-panel--dismissable']]: !labelOnly && dismissable,
    },
    className
  );

  const ariaLabelAttributes = getAriaLabelAttributes({ label, id: uuid });

  return (
    <FluidWrapper fluid={fluid} variant={variant} shadow={shadow}>
      <section
        ref={ref}
        data-testid={testId}
        data-analyticsid={AnalyticsId.NotificationPanel}
        className={notificationPanelClasses}
        {...ariaLabelAttributes}
      >
        <span className={styles['notification-panel__icon']}>
          {variantToIconMap[variant === 'alert' && label && !children ? 'alertLabel' : variant]}
        </span>
        {!labelOnly && dismissable && (
          <span className={styles['notification-panel__close']}>
            <Close ariaLabel={props.ariaLabelCloseBtn} onClick={onClick} />
          </span>
        )}
        {renderContent()}
      </section>
    </FluidWrapper>
  );
});

export default NotificationPanel;
