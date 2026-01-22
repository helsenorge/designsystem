import React from 'react';

import classNames from 'classnames';

import type { PanelProps } from '../Panel/Panel';

import { AnalyticsId } from '../../constants';
import { PanelVariant } from '../Panel/constants';
import Panel from '../Panel/Panel';

import styles from './styles.module.scss';

export interface PanelListProps {
  /** Panels to render inside the PanelList */
  children?: React.ReactNode;
  /** Changes the visual representation of the panel. Default: fill */
  variant?: PanelVariant;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** Highlights text in title and content. Used for search results */
  highlightText?: string;
  /** Ref passed to the container element */
  ref?: React.Ref<HTMLDivElement | null>;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
const isPanelComponent = (element: {} | null | undefined): element is React.ReactElement<PanelProps> =>
  React.isValidElement<PanelProps>(element) && (element as React.ReactElement).type === Panel;

const PanelList: React.FC<PanelListProps> = (props: PanelListProps) => {
  const { testId, children, variant = PanelVariant.fill, highlightText, ref } = props;

  const renderPanel = (panel: React.ReactElement<PanelProps>): React.ReactElement<PanelProps> =>
    React.cloneElement(panel, {
      variant: variant,
      className: classNames(panel.props.className, styles[`panel-list__panel--${variant}`]),
      highlightText: panel.props.highlightText || highlightText,
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
};

export default PanelList;
