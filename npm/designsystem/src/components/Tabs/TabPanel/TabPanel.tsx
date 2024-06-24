import React from 'react';

import classNames from 'classnames';

import { TabsColors, TabsType } from '../Tabs';

import styles from './styles.module.scss';

interface TabPanelProps {
  children?: React.ReactNode;
  color?: TabsColors;
  type?: TabsType;
  isFirst?: boolean;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, color = 'white', type = 'normal', isFirst = false }) => {
  const tabPanelClasses = classNames(styles['tab-panel'], styles[`tab-panel--${color}`], styles[`tab-panel--${type}`], {
    [styles['tab-panel--first']]: isFirst,
  });
  return <div className={tabPanelClasses}>{children}</div>;
};

export default TabPanel;
