import React, { useRef } from 'react';

import classNames from 'classnames';

import TabItem from './TabItem';
import { useRovingFocus } from '../../../hooks/useRovingFocus';
import { isComponent } from '../../../utils/component';
import Tab, { TabProps } from '../Tab';
import { TabsColors } from '../Tabs';

import styles from './styles.module.scss';
interface TabListProps {
  children: React.ReactNode;
  onTabListClick: (index: number) => void;
  selectedTab: number;
  color?: TabsColors;
}

const TabList: React.FC<TabListProps> = props => {
  const { selectedTab, onTabListClick, children, color = 'white' } = props;

  const listRef = useRef<HTMLUListElement>(null);

  const tabRefs = useRef(React.Children.map(children, () => React.createRef<HTMLButtonElement>()));
  useRovingFocus(onTabListClick, tabRefs, listRef, true);

  const tablistClasses = classNames(styles['tab-list']);

  return (
    <ul className={tablistClasses} ref={listRef} role="tablist" aria-orientation="horizontal">
      {React.Children.map(children, (child, index) => {
        if (isComponent<TabProps>(child, Tab)) {
          return (
            <TabItem
              tabRefs={tabRefs}
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
  );
};

export default TabList;
