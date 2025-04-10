import React from 'react';

import classNames from 'classnames';

import { AnalyticsId } from '../../constants';
import Panel, { PanelProps, PanelVariant } from '../Panel/Panel';

import styles from './styles.module.scss';

export interface PanelListProps {
  /** Panels to render inside the PanelList */
  children?: React.ReactNode;
  /** Changes the visual representation of the panel. Default: fill */
  variant?: PanelVariant;
  /** Sets the data-testid attribute. */
  testId?: string;
}

const isPanelComponent = (element: {} | null | undefined): element is React.ReactElement<PanelProps> =>
  React.isValidElement<PanelProps>(element) && (element as React.ReactElement).type === Panel;

const PanelList = React.forwardRef(function BadgeForwardedRef(props: PanelListProps, ref: React.ForwardedRef<HTMLDivElement>) {
  const { testId, children, variant = PanelVariant.fill } = props;

  const renderPanel = (panel: React.ReactElement<PanelProps>): React.ReactElement<PanelProps> =>
    React.cloneElement(panel, {
      variant: variant,
      className: classNames(panel.props.className, styles[`panel-list__panel--${variant}`]),
    });

  return (
    <div
      ref={ref}
      data-testid={testId}
      data-analyticsid={AnalyticsId.PanelList}
      className={classNames({ [styles['panel-list--outline']]: variant === PanelVariant.outline })}
    >
      {React.Children.map(children, child => (isPanelComponent(child) ? renderPanel(child) : child))}
    </div>
  );
});

export default PanelList;
