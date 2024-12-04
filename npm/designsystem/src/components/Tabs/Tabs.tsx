import React, { useState, useRef } from 'react';

import classNames from 'classnames';

import Tab from './Tab';
import TabList from './TabList';
import TabPanel from './TabPanel';
import designsystemlayout from '../../scss/layout.module.scss';
import { PaletteNames } from '../../theme/palette';

import styles from './styles.module.scss';

export type { TabProps } from './Tab';
export type TabsColors = Extract<PaletteNames, 'blueberry' | 'neutral' | 'white'>;
export type TabsOnColor = 'onblueberry' | 'onneutral' | 'onwhite';
export type TabsTouchBehaviour = 'swipe' | 'none';

export interface TabsProps {
  children?: React.ReactNode;
  /** Controlled state for Tabs component */
  activeTab?: number;
  /** Adds custom classes to the element. */
  className?: string;
  /** Sets the color of the tabs. Default: white */
  color?: TabsColors;
  /** Sets wether the component should use the container-breakout class. Default: true */
  containerBreakout?: boolean;
  /** Sets the background color of the tabs. Can only be used when the color is set to white. Default: onwhite */
  onColor?: TabsOnColor;
  /** Whether the tab list should be sticky */
  sticky?: boolean;
  /** Determines how Tabs respons to touch events. */
  touchBehaviour?: TabsTouchBehaviour;
  /** Sets the data-testid attribute. */
  testId?: string;
}

const TabsRoot: React.FC<TabsProps> = ({
  activeTab,
  children,
  className,
  color = 'white',
  containerBreakout = true,
  onColor = 'onwhite',
  sticky = true,
  testId,
}) => {
  const isControlled = activeTab !== undefined;
  const [uncontrolledValue, setUncontrolledValue] = useState(0);
  const tabsRef = useRef<HTMLDivElement>(null);
  const tabPanelRef = useRef<HTMLDivElement>(null);
  const tabListRef = useRef<HTMLDivElement>(null);

  let onColorUsed: TabsOnColor = 'onwhite';
  if (color === 'white') {
    onColorUsed = onColor;
  }

  const onValueChange = (newValue: number): void => {
    if (!isControlled) {
      setUncontrolledValue(newValue);
    }
  };

  const activeTabIndex = isControlled ? activeTab : uncontrolledValue;

  return (
    <div className={classNames(className, containerBreakout && designsystemlayout['container-breakout'])} data-testid={testId}>
      <div
        ref={tabListRef}
        className={classNames(styles['tab-list-wrapper'], {
          [styles['tab-list-wrapper--sticky']]: sticky,
        })}
      >
        <TabList onTabListClick={(index: number) => onValueChange(index)} selectedTab={activeTabIndex} color={color} onColor={onColorUsed}>
          {children}
        </TabList>
        <div className={classNames(styles['panel-wrapper'], styles[`panel-wrapper--${color}`])}></div>
      </div>
      <div ref={tabsRef} style={{ marginTop: '-50px' }}>
        <TabPanel ref={tabPanelRef} color={color} isFirst={activeTabIndex == 0}>
          {React.Children.toArray(children)[activeTabIndex]}
        </TabPanel>
      </div>
    </div>
  );
};

type TabsComponent = typeof TabsRoot & {
  Tab: typeof Tab;
};
const Tabs = TabsRoot as TabsComponent;
Tabs.displayName = 'Tabs';
Tabs.Tab = Tab;
Tabs.Tab.displayName = 'Tabs.Tab';

export default Tabs;
