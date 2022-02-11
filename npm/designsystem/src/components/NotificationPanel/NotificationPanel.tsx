import React from 'react';
import cn from 'classnames';

import { palette } from '../../theme/palette';
import Icon from '../Icons';

import InfoSignStroke from '../Icons/InfoSignStroke';
import AlertSignStroke from '../Icons/AlertSignStroke';
import AlertSignFill from '../Icons/AlertSignFill';

import styles from './styles.module.scss';
import Close from '../Close';
import { AnalyticsId } from '../../constants';

export type NotificationPanelVariants = 'info' | 'warn' | 'alert' | 'crisis';
export type NotificationPanelSizes = 'small' | 'medium' | 'large';

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
  /** Sets the data-testid attribute. */
  testId?: string;
}

export const variantToColorMap = {
  info: { color: 'kiwi', depth: 50 },
  warn: { color: 'banana', depth: 50 },
  alert: { color: 'cherry', depth: 100 },
  crisis: { color: 'black', depth: 0 },
};

const variantToIconMap = {
  info: <Icon svgIcon={InfoSignStroke} color={palette.kiwi900} hoverColor={palette.kiwi900} />,
  warn: <Icon svgIcon={AlertSignStroke} color="black" hoverColor="black" />,
  alert: <Icon svgIcon={AlertSignFill} color={palette.cherry500} hoverColor={palette.cherry500} />,
  alertLabel: <Icon svgIcon={AlertSignStroke} color={palette.cherry500} hoverColor={palette.cherry500} />,
  crisis: <Icon svgIcon={AlertSignFill} color={palette.banana200} hoverColor={palette.banana200} />,
};

const NotificationPanel = React.forwardRef(function NotificationPanelForwardedRef(
  props: NotificationPanelProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const { children, variant = 'info', shadow = false, dismissable = false, onClick, label, fluid = false, size, className, testId } = props;

  function wrapFluid(panel: React.ReactElement): React.ReactElement {
    if (fluid) {
      return (
        <div
          className={cn(styles['fluid-wrapper'], styles['fluid-wrapper--' + variant], {
            [styles['fluid-wrapper--shadow']]: shadow,
          })}
        >
          {panel}
        </div>
      );
    }
    return panel;
  }

  const getStringChildren = (): string => {
    if (children) {
      let textChildren = '';

      React.Children.map(children, child => {
        if (typeof child === 'string') {
          textChildren += child;
        }
      });

      return textChildren;
    }

    return '';
  };

  const labelOnly = !!label && !children;

  return wrapFluid(
    <div
      ref={ref}
      data-testid={testId}
      data-analyticsid={AnalyticsId.NotificationPanel}
      className={cn(
        styles['notification-panel'],
        size && styles['notification-panel--' + size],
        styles['notification-panel--' + variant],
        {
          [styles['notification-panel--shadow']]: !fluid && shadow,
          [styles['notification-panel--has-children']]: !labelOnly,
          [styles['notification-panel--label-only']]: labelOnly,
          [styles['notification-panel--dismissable']]: !labelOnly && dismissable,
        },
        className
      )}
    >
      <span className={styles['notification-panel__icon']}>
        {variantToIconMap[variant === 'alert' && label && !children ? 'alertLabel' : variant]}
      </span>
      <section
        aria-label={getStringChildren()}
        className={cn(styles['notification-panel__content'], {
          [styles['notification-panel__content--crisis']]: variant === 'crisis',
          [styles['notification-panel__content--alert']]: variant === 'alert',
        })}
      >
        {label && <h1 className={styles['notification-panel__label']} dangerouslySetInnerHTML={{ __html: label }} />}
        {children}
      </section>
      {!labelOnly && dismissable && (
        <span className={styles['notification-panel__close']}>
          <Close ariaLabel={props.ariaLabelCloseBtn} onClick={onClick} />
        </span>
      )}
    </div>
  );
});

export default NotificationPanel;
