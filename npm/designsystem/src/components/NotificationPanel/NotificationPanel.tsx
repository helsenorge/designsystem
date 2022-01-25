import React from 'react';
import cn from 'classnames';

import { palette } from '../../theme/palette';
import Icon from '../Icons';

import InfoSignStroke from '../Icons/InfoSignStroke';
import AlertSignStroke from '../Icons/AlertSignStroke';
import AlertSignFill from '../Icons/AlertSignFill';

import NotificationPanelStyles from './styles.module.scss';
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
  /** Toggles the close button in the top right corner. */
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
          className={cn(
            NotificationPanelStyles['notification-panel__fluidwrapper'],
            NotificationPanelStyles['notification-panel__fluidwrapper--' + variant],
            { [NotificationPanelStyles['notification-panel__fluidwrapper--shadow']]: shadow }
          )}
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

  return wrapFluid(
    <div
      ref={ref}
      data-testid={testId}
      data-analyticsid={AnalyticsId.NotificationPanel}
      className={cn(
        NotificationPanelStyles['notification-panel'],
        NotificationPanelStyles['notification-panel--' + size],
        NotificationPanelStyles['notification-panel--' + variant],
        {
          [NotificationPanelStyles['notification-panel--shadow']]: !fluid && shadow,
          [NotificationPanelStyles['notification-panel--haslabel']]: !!label && !children,
          [NotificationPanelStyles['notification-panel--dismissable']]: dismissable,
        },
        className ? className : ''
      )}
    >
      <span className={NotificationPanelStyles['notification-panel__icon']}>
        {variantToIconMap[variant === 'alert' && label && !children ? 'alertLabel' : variant]}
      </span>
      <section
        aria-label={getStringChildren()}
        className={cn(NotificationPanelStyles['notification-panel__content'], {
          [NotificationPanelStyles['notification-panel__content--crisis']]: variant === 'crisis',
          [NotificationPanelStyles['notification-panel__content--haslabel']]: !!label && !children,
          [NotificationPanelStyles['notification-panel__content--isred']]: variant === 'alert' && !!label && !children,
        })}
      >
        {label ? <h1 className={NotificationPanelStyles['notification-panel__label']} dangerouslySetInnerHTML={{ __html: label }} /> : null}
        {children}
      </section>
      {dismissable ? (
        <span className={NotificationPanelStyles['notification-panel__action-column']}>
          <Close ariaLabel={props.ariaLabelCloseBtn} onClick={onClick} />
        </span>
      ) : null}
    </div>
  );
});

export default NotificationPanel;
