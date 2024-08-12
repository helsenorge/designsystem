import React, { forwardRef } from 'react';

import classNames from 'classnames';

import { TabsColors, TabsType } from '../Tabs';

import styles from './styles.module.scss';

interface TabPanelProps {
  children?: React.ReactNode;
  color?: TabsColors;
  type?: TabsType;
  isFirst?: boolean;
  translateX?: number;
  style?: React.CSSProperties;
  animate: 'left' | 'right' | null;
}

const TabPanel = forwardRef<HTMLDivElement, TabPanelProps>((props, ref) => {
  const { children, animate, color = 'white', type = 'normal', isFirst = false, translateX, style } = props;
  const tabPanelClasses = classNames(styles['tab-panel'], styles[`tab-panel--${color}`], styles[`tab-panel--${type}`], {
    [styles['tab-panel--first']]: isFirst,
  });
  const contentClasses = classNames({
    [styles['tab-panel--animate-left']]: animate === 'left',
    [styles['tab-panel--animate-right']]: animate === 'right',
  });
  const transformStyle: React.CSSProperties = translateX != 0 ? { transform: `translateX(${translateX}px)` } : {};

  return (
    <div ref={ref} className={tabPanelClasses} style={style}>
      <div className={contentClasses} style={transformStyle}>
        {children}
      </div>
    </div>
  );
});

TabPanel.displayName = 'TabPanel';
export default TabPanel;
