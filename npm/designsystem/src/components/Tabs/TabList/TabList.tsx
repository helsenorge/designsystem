import React, { useRef } from 'react';

import classNames from 'classnames';

import { useIsVisible } from '../../../hooks/useIsVisible';
import { useRovingFocus } from '../../../hooks/useRovingFocus';
import { palette } from '../../../theme/palette';
import { isComponent } from '../../../utils/component';
import uuid from '../../../utils/uuid';
import Icon, { IconSize } from '../../Icon';
import { IconName } from '../../Icons/IconNames';
import LazyIcon from '../../LazyIcon';
import Tab from '../Tab';
import { TabsColors, TabsType } from '../Tabs';

import styles from './styles.module.scss';
interface TabListProps {
  children: React.ReactNode;
  onTabListClick: (index: number) => void;
  selectedTab: number;
  color?: TabsColors;
  type?: TabsType;
}

const TabList: React.FC<TabListProps> = props => {
  const { selectedTab, onTabListClick, children, color = 'white', type = 'normal' } = props;

  const listRef = useRef<HTMLUListElement>(null);

  const tabRefs = useRef(React.Children.map(children, () => React.createRef<HTMLButtonElement>()));
  useRovingFocus(onTabListClick, tabRefs, listRef, true);

  const tablistClasses = classNames(styles['tab-list'], styles[`tab-list--${type}`]);

  const id = uuid();
  const isVisible = useIsVisible(listRef);

  return (
    <ul className={tablistClasses} ref={listRef} role="tablist" aria-orientation="horizontal">
      {React.Children.map(children, (child, index) => {
        if (isComponent(child, Tab)) {
          const isSelected = index === selectedTab;
          const { title, onTabClick, icon, testId } = child.props;
          const handleClick = (): void => {
            onTabClick && onTabClick(index);
            onTabListClick(index);
            scrollToTab(index);
          };
          const tabButtonClasses = classNames(styles['tab-list__tab'], styles[`tab-list__tab--${color}`], {
            [styles['tab-list__tab--selected']]: isSelected,
            [styles['tab-list__tab--first']]: index == 0,
          });

          const currentRef = tabRefs.current && tabRefs.current[index];

          const scrollToTab = (index: number): void => {
            const currentRef = tabRefs.current && tabRefs.current[index];
            currentRef?.current?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
          };

          if (isSelected && isVisible) scrollToTab(index);

          return (
            <li role="presentation" key={`${title}-${id}`}>
              <button
                role="tab"
                aria-selected={isSelected}
                onClick={handleClick}
                className={tabButtonClasses}
                key={`${title}-${id}`}
                data-testid={testId}
                ref={currentRef as React.RefObject<HTMLButtonElement>}
              >
                <span className={styles['tab-list__tab__title-and-icon']}>
                  {icon &&
                    (typeof icon === 'string' ? (
                      <LazyIcon
                        iconName={icon as IconName}
                        size={IconSize.XSmall}
                        color={isSelected ? palette[`black`] : palette['blueberry500']}
                      />
                    ) : (
                      <Icon svgIcon={icon} size={IconSize.XSmall} color={isSelected ? palette[`black`] : palette['blueberry500']} />
                    ))}
                  {title}
                </span>
              </button>
            </li>
          );
        }
        return null;
      })}
    </ul>
  );
};

export default TabList;
