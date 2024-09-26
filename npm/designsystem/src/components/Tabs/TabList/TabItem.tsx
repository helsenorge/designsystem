import React, { useEffect, useRef } from 'react';

import classNames from 'classnames';

import { useIsVisible } from '../../../hooks/useIsVisible';
import { palette } from '../../../theme/palette';
import Icon, { IconSize } from '../../Icon';
import { IconName } from '../../Icons/IconNames';
import LazyIcon from '../../LazyIcon';
import { TabProps } from '../Tab';
import { TabsColors } from '../Tabs';

import styles from './styles.module.scss';

interface TabItemProps {
  tabProps: TabProps;
  index: number;
  color: TabsColors;
  selectedTab: number;
  tabRefs: React.MutableRefObject<React.RefObject<HTMLButtonElement>[] | null | undefined>;
  onTabListClick: (index: number) => void;
}

const TabItem: React.FC<TabItemProps> = props => {
  const isSelected = props.index === props.selectedTab;
  const { title, onTabClick, icon, testId } = props.tabProps;
  const handleClick = (): void => {
    onTabClick && onTabClick(props.index);
    props.onTabListClick(props.index);
    scrollToTab(props.index);
  };
  const tabButtonClasses = classNames(styles['tab-list__tab'], styles[`tab-list__tab--${props.color}`], {
    [styles['tab-list__tab--selected']]: isSelected,
    [styles['tab-list__tab--not-selected']]: !isSelected,
  });

  const currentRef = props.tabRefs.current && props.tabRefs.current[props.index];

  const scrollToTab = (index: number): void => {
    const currentRef = props.tabRefs.current && props.tabRefs.current[index];
    currentRef?.current?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  };

  const itemRef = useRef<HTMLLIElement>(null);
  const isVisible = useIsVisible(itemRef);

  useEffect(() => {
    if (isSelected && isVisible) {
      scrollToTab(props.index);
    }
  }, [isSelected && isVisible]);

  return (
    <li role="presentation" ref={itemRef}>
      <button
        role="tab"
        aria-selected={isSelected}
        onClick={handleClick}
        className={tabButtonClasses}
        data-testid={testId}
        ref={currentRef as React.RefObject<HTMLButtonElement>}
        style={{ borderBottom: isSelected ? '2px solid white' : '1px solid black' }}
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
};

export default TabItem;
