import React, { forwardRef } from 'react';

import classNames from 'classnames';

import { TabsColors } from '../Tabs';

import styles from './styles.module.scss';

interface TabPanelProps {
  children?: React.ReactNode;
  color?: TabsColors;
  isFirst?: boolean;
  style?: React.CSSProperties;
}

const TabPanel = forwardRef<HTMLDivElement, TabPanelProps>((props, ref) => {
  const { children, color = 'white', isFirst = false, style } = props;

  const tabPanelClasses = classNames(styles['tab-panel'], styles[`tab-panel--${color}`], {
    [styles['tab-panel--first']]: isFirst,
  });

  return (
    <div ref={ref} className={tabPanelClasses} style={style}>
      <div>{children}</div>
    </div>
  );
});

TabPanel.displayName = 'TabPanel';
export default TabPanel;
