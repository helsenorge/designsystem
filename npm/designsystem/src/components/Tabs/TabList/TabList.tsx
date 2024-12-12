import React, { useRef } from 'react';

import classNames from 'classnames';

import TabItem from './TabItem';
import { useIsVisible } from '../../../hooks/useIsVisible';
import { useRovingFocus } from '../../../hooks/useRovingFocus';
import { isComponent } from '../../../utils/component';
import Tab, { TabProps } from '../Tab';
import { TabsColors, TabsOnColor } from '../Tabs';

import styles from './styles.module.scss';
interface TabListProps {
  children: React.ReactNode;
  onTabListClick: (index: number) => void;
  selectedTab: number;
  color: TabsColors;
  onColor: TabsOnColor;
}

const TabList: React.FC<TabListProps> = props => {
  const { selectedTab, onTabListClick, children, color, onColor } = props;

  const listRef = useRef<HTMLUListElement>(null);

  const tabRefs = useRef(React.Children.map(children, () => React.createRef<HTMLButtonElement>()) || []);
  useRovingFocus(onTabListClick, tabRefs, listRef, true);

  const tablistClasses = classNames(styles['tab-list'], styles[`tab-list--${onColor}`]);

  const getBackgroundColor = (onColor: TabsOnColor): string => {
    switch (onColor) {
      case 'onwhite':
        return 'var(--color-base-background-white)';
      case 'onblueberry':
        return 'var(--color-base-background-blueberry)';
      case 'onneutral':
        return 'var(--color-base-background-neutral)';
    }
  };
  const firstTab = tabRefs.current && tabRefs.current[0];
  const lastTab = tabRefs.current && tabRefs.current[tabRefs.current.length - 1];

  const firstTabVisible = useIsVisible(firstTab);
  const lastTabVisible = useIsVisible(lastTab);
  const tabListVisible = useIsVisible(listRef);

  const shouldShowFadeStart = (): boolean => {
    return !firstTabVisible && selectedTab !== 0;
  };

  const shouldShowFadeEnd = (): boolean => {
    return !lastTabVisible && selectedTab !== tabRefs.current.length - 1;
  };

  return (
    <div>
      <div
        className={classNames(styles['tab-list__fade-start'])}
        style={{
          display: shouldShowFadeStart() ? 'block' : 'none',
          backgroundColor: `${getBackgroundColor(onColor)}`,
        }}
      ></div>
      <ul className={tablistClasses} ref={listRef} role="tablist" aria-orientation="horizontal">
        {React.Children.map(children, (child, index) => {
          if (isComponent<TabProps>(child, Tab)) {
            return (
              <TabItem
                tabRefs={tabRefs}
                tabListVisible={tabListVisible}
                key={child.props.title}
                index={index}
                selectedTab={selectedTab}
                onTabListClick={onTabListClick}
                tabProps={child.props}
                color={color}
              />
            );
          }
          return null;
        })}
      </ul>
      <div
        className={classNames(styles['tab-list__fade-end'])}
        style={{
          display: shouldShowFadeEnd() ? 'block' : 'none',
          backgroundColor: `${getBackgroundColor(onColor)}`,
        }}
      ></div>
      <div className={classNames(styles['tab-list__border'])}></div>
    </div>
  );
};

export default TabList;
