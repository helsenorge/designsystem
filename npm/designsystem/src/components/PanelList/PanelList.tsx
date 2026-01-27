import React from 'react';

import classNames from 'classnames';

import { AnalyticsId } from '../../constants';
import { PanelVariant } from '../Panel/Panel';

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
}

interface PanelListContextValue {
  variant: PanelVariant;
  highlightText?: string;
  applyPanelClassName: (existingClassName?: string) => string;
}

export const PanelListContext = React.createContext<PanelListContextValue | null>(null);

const PanelList = React.forwardRef(function BadgeForwardedRef(props: PanelListProps, ref: React.ForwardedRef<HTMLDivElement>) {
  const { testId, children, variant = PanelVariant.fill, highlightText } = props;

  const contextValue: PanelListContextValue = React.useMemo(
    () => ({
      variant,
      highlightText,
      applyPanelClassName: (existingClassName?: string) => classNames(existingClassName, styles[`panel-list__panel--${variant}`]),
    }),
    [variant, highlightText]
  );

  return (
    <PanelListContext.Provider value={contextValue}>
      <div
        ref={ref}
        data-testid={testId}
        data-analyticsid={AnalyticsId.PanelList}
        className={classNames({ [styles['panel-list--outline']]: variant === PanelVariant.outline })}
      >
        {children}
      </div>
    </PanelListContext.Provider>
  );
});

export default PanelList;
