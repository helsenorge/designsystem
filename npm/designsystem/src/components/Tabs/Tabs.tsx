import React, { useState, useRef } from 'react';

import classNames from 'classnames';

import type { HNDesignsystemTabs } from '../../resources/Resources';
import type { PaletteNames } from '../../theme/palette';

import { getResources } from './resourceHelper';
import Tab from './Tab';
import TabList from './TabList';
import TabPanel from './TabPanel';
import { LanguageLocales } from '../../constants';
import { useLanguage } from '../../hooks/useLanguage';
import designsystemlayout from '../../scss/layout.module.scss';

import styles from './styles.module.scss';

export type { TabProps } from './Tab';
export type TabsColors = Extract<PaletteNames, 'blueberry' | 'neutral' | 'white'>;
export type TabsOnColor = 'onblueberry' | 'onneutral' | 'onwhite';

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
  /** Sets the data-testid attribute. */
  testId?: string;
  /** @deprecated Sets aria label on the "scroll to the right" button in TabList */
  ariaLabelRightButton?: string;
  /** @deprecated Sets aria label on the "scroll to the left" button in TabList */
  ariaLabelLeftButton?: string;
  /** Resources for component */
  resources?: Partial<HNDesignsystemTabs>;
  /** Overrides the default z-index of the tabs header */
  zIndex?: number;
}

export const TabsRoot: React.FC<TabsProps> = ({
  activeTab,
  children,
  className,
  color = 'white',
  containerBreakout = true,
  onColor = 'onwhite',
  sticky = true,
  testId,
  ariaLabelRightButton,
  ariaLabelLeftButton,
  resources,
  zIndex,
}) => {
  const isControlled = activeTab !== undefined;
  const [uncontrolledValue, setUncontrolledValue] = useState(0);
  const tabsRef = useRef<HTMLDivElement>(null);
  const tabPanelRef = useRef<HTMLDivElement>(null);
  const tabListRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage<LanguageLocales>(LanguageLocales.NORWEGIAN);
  const defaultResources = getResources(language);

  const mergedResources: HNDesignsystemTabs = {
    ...defaultResources,
    ...resources,
    ariaLabelRightButton: ariaLabelRightButton || resources?.ariaLabelRightButton || defaultResources.ariaLabelRightButton,
    ariaLabelLeftButton: ariaLabelLeftButton || resources?.ariaLabelLeftButton || defaultResources.ariaLabelLeftButton,
  };

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
        style={{
          zIndex: zIndex,
        }}
      >
        <TabList
          onTabListClick={(index: number) => onValueChange(index)}
          selectedTab={activeTabIndex}
          color={color}
          onColor={onColorUsed}
          ariaLabelLeftButton={mergedResources.ariaLabelLeftButton}
          ariaLabelRightButton={mergedResources.ariaLabelRightButton}
        >
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
TabsRoot.displayName = 'Tabs';
Tabs.displayName = 'Tabs';
Tabs.Tab = Tab;
Tabs.Tab.displayName = 'Tabs.Tab';

export default Tabs;
