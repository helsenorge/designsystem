import React from 'react';

import classNames from 'classnames';

import { AnalyticsId } from '../../constants';
import PanelOld, { PanelOldProps, PanelOldVariant } from '../PanelOld';

import styles from './styles.module.scss';

export interface PanelListProps {
  /** Panels to render inside the PanelList */
  children?: React.ReactNode;
  /** Changes the visual representation of the panel. Default: fill */
  variant?: keyof typeof PanelOldVariant;
  /** Sets the data-testid attribute. */
  testId?: string;
}

const isPanelComponent = (element: {} | null | undefined): element is React.ReactElement<PanelOldProps> =>
  React.isValidElement<PanelOldProps>(element) && (element as React.ReactElement).type === PanelOld;

const PanelList = React.forwardRef(function BadgeForwardedRef(props: PanelListProps, ref: React.ForwardedRef<HTMLDivElement>) {
  const { testId, children, variant = PanelOldVariant.fill } = props;

  const renderPanel = (panel: React.ReactElement<PanelOldProps>, firstChild: boolean) =>
    React.cloneElement(panel, {
      variant: variant,
      noTopBorder: variant === PanelOldVariant.line && !firstChild,
      className: classNames(panel.props.className, variant !== PanelOldVariant.line && styles['panel-list__panel']),
    });

  return (
    <div ref={ref} data-testid={testId} data-analyticsid={AnalyticsId.PanelList}>
      {React.Children.map(children, (child, index) => (isPanelComponent(child) ? renderPanel(child, index === 0) : child))}
    </div>
  );
});

export default PanelList;
