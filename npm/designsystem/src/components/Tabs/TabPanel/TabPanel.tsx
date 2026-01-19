import React from 'react';

import classNames from 'classnames';

import { TabsColors } from '../Tabs';

import styles from './styles.module.scss';

interface TabPanelProps {
  children?: React.ReactNode;
  color?: TabsColors;
  isFirst?: boolean;
  style?: React.CSSProperties;
  /** Ref passed to the component */
  ref?: React.Ref<HTMLDivElement | null>;
}

const TabPanel: React.FC<TabPanelProps> = props => {
  const { children, color = 'white', isFirst = false, style, ref } = props;

  const tabPanelClasses = classNames(styles['tab-panel'], styles[`tab-panel--${color}`], {
    [styles['tab-panel--first']]: isFirst,
  });

  return (
    <div ref={ref} className={tabPanelClasses} style={style}>
      <div>{children}</div>
    </div>
  );
};

TabPanel.displayName = 'TabPanel';
export default TabPanel;
