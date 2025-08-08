import React, { useRef } from 'react';

import classNames from 'classnames';

import TabItem from './TabItem';
import { useIsVisible } from '../../../hooks/useIsVisible';
import { useRovingFocus } from '../../../hooks/useRovingFocus';
import { isComponent } from '../../../utils/component';
import Tab, { TabProps } from '../Tab';
import { TabsColors, TabsOnColor } from '../Tabs';
import TabChevron from './TabChevron';

import styles from './styles.module.scss';
interface TabListProps {
  children: React.ReactNode;
  onTabListClick: (index: number) => void;
  selectedTab: number;
  color: TabsColors;
  onColor: TabsOnColor;
  ariaLabelRightButton?: string;
  ariaLabelLeftButton?: string;
}

const TabList: React.FC<TabListProps> = props => {
  const { selectedTab, onTabListClick, children, color, onColor, ariaLabelLeftButton, ariaLabelRightButton } = props;

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
    return !firstTabVisible;
  };

  const shouldShowFadeEnd = (): boolean => {
    return !lastTabVisible;
  };

  const scrollInList = (direction: string): void => {
    if (listRef.current) {
      const listWidth = listRef.current.clientWidth;
      const listScrollLeft = listRef.current.scrollLeft;
      const maxScrollLeft = listRef.current.scrollWidth - listWidth;

      if (direction === 'right' && !lastTabVisible) {
        const scrollAmount = Math.min(listWidth / 2, maxScrollLeft - listScrollLeft);
        listRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      } else if (direction === 'left' && !firstTabVisible) {
        const scrollAmount = -Math.min(listWidth / 2, listScrollLeft);
        listRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className={styles['tab-list-wrapper']}>
      {shouldShowFadeStart() && (
        <div className={classNames(styles['tab-list__start-wrapper'])}>
          <TabChevron
            onClick={() => scrollInList('left')}
            direction="left"
            backgroundColor={`${getBackgroundColor(onColor)}`}
            ariaLabel={ariaLabelLeftButton}
          />
          <div
            className={classNames(styles['tab-list__fade-start'])}
            style={{
              backgroundColor: `${getBackgroundColor(onColor)}`,
            }}
          ></div>
        </div>
      )}
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
      {shouldShowFadeEnd() && (
        <div className={classNames(styles['tab-list__end-wrapper'])}>
          <div
            className={classNames(styles['tab-list__fade-end'])}
            style={{
              backgroundColor: `${getBackgroundColor(onColor)}`,
            }}
          ></div>
          <TabChevron
            onClick={() => scrollInList('right')}
            direction="right"
            backgroundColor={`${getBackgroundColor(onColor)}`}
            ariaLabel={ariaLabelRightButton}
          />
        </div>
      )}
      <div className={classNames(styles['tab-list__border'])}></div>
    </div>
  );
};

export default TabList;
