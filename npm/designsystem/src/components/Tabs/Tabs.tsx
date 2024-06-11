import React, { useState } from 'react';

import Tab from './Tab';
import TabList from './TabList';
import TabPanel from './TabPanel';
import { PaletteNames } from '../../theme/palette';
export type { TabProps } from './Tab';

import styles from './styles.module.scss';

export type TabsColors = Extract<PaletteNames, 'blueberry' | 'neutral' | 'white'>;

export type TabsType = 'normal' | 'framed';

export interface TabsProps {
  /** Sets the data-testid attribute. */
  testId?: string;
  /** Sets the color of the tabs. Default: white */
  color?: TabsColors;
  /** Sets the visual type of the tabs */
  type?: TabsType;
  /** Controlled state for Tabs component */
  activeTab?: number;
}

const TabsRoot: React.FC<TabsProps> = ({ children, testId, color = 'white', type = 'normal', activeTab }) => {
  const isControlled = activeTab !== undefined;
  const [uncontrolledValue, setUncontrolledValue] = useState(0);

  const onValueChange = (newValue: number): void => {
    if (!isControlled) {
      setUncontrolledValue(newValue);
    }
  };

  const activeTabIndex = isControlled ? activeTab : uncontrolledValue;

  return (
    <div className={styles.tabs} data-testid={testId}>
      <TabList onTabListClick={(index: number) => onValueChange(index)} selectedTab={activeTabIndex} color={color} type={type}>
        {children}
      </TabList>
      <TabPanel color={color} type={type} isFirst={activeTabIndex == 0}>
        {React.Children.toArray(children)[activeTabIndex]}
      </TabPanel>
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
