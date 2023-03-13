import React from 'react';

import classNames from 'classnames';

import { AnalyticsId } from '../../constants';
import Panel, { PanelProps, PanelVariant } from '../Panel';

import styles from './styles.module.scss';

interface PanelListProps {
  /** Panels to render inside the PanelList */
  children?: React.ReactNode;
  /** Changes the visual representation of the panel. Default: fill */
  variant?: keyof typeof PanelVariant;
  /** Sets the data-testid attribute. */
  testId?: string;
}

const isPanelComponent = (element: {} | null | undefined): element is React.ReactElement<PanelProps> =>
  React.isValidElement<PanelProps>(element) && (element as React.ReactElement).type === Panel;

const PanelList = React.forwardRef(function BadgeForwardedRef(props: PanelListProps, ref: React.ForwardedRef<HTMLDivElement>) {
  const { testId, children, variant = PanelVariant.fill } = props;

  const renderPanel = (panel: React.ReactElement<PanelProps>, firstChild: boolean) =>
    React.cloneElement(panel, {
      variant: variant,
      noTopBorder: variant === PanelVariant.line && !firstChild,
      className: classNames(panel.props.className, variant !== PanelVariant.line && styles['panel-list__panel']),
    });

  return (
    <div ref={ref} data-testid={testId} className={styles['panel-list']} data-analyticsid={AnalyticsId.PanelList}>
      {React.Children.map(children, (child, index) => (isPanelComponent(child) ? renderPanel(child, index === 0) : child))}
    </div>
  );
});

export default PanelList;
