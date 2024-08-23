import React, { useState, useEffect, useRef } from 'react';

import classNames from 'classnames';

import Tab from './Tab';
import TabList from './TabList';
import TabPanel from './TabPanel';
import { PaletteNames } from '../../theme/palette';
import { isMobileUA } from '../../utils/mobile';

import styles from './styles.module.scss';

export type { TabProps } from './Tab';
export type TabsColors = Extract<PaletteNames, 'blueberry' | 'neutral' | 'white'>;
export type TabsType = 'normal' | 'framed';
export type TabsTouchBehaviour = 'swipe' | 'none';

export interface TabsProps {
  children?: React.ReactNode;
  /** Controlled state for Tabs component */
  activeTab?: number;
  /** Adds custom classes to the element. */
  className?: string;
  /** Sets the color of the tabs. Default: white */
  color?: TabsColors;
  /** Whether the tab list should be sticky */
  sticky?: boolean;
  /** Determines how Tabs respons to touch events. */
  touchBehaviour?: TabsTouchBehaviour;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** Sets the visual type of the tabs */
  type?: TabsType;
}

const swipeDistanceThreshold = 75;

const TabsRoot: React.FC<TabsProps> = ({
  activeTab,
  children,
  className,
  color = 'white',
  sticky = true,
  testId,
  type = 'normal',
  touchBehaviour = 'swipe',
}) => {
  const isControlled = activeTab !== undefined;
  const [uncontrolledValue, setUncontrolledValue] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [panelAnimation, setPanelAnimation] = useState<'left' | 'right' | null>(null);
  const mobile = isMobileUA();
  const tabsRef = useRef<HTMLDivElement>(null);
  const tabPanelRef = useRef<HTMLDivElement>(null);
  const tabListRef = useRef<HTMLDivElement>(null);

  const onValueChange = (newValue: number, oldValue: number): void => {
    if (!isControlled) {
      setUncontrolledValue(newValue);
      if (newValue > oldValue) {
        // make sure that the translateX is reset so the animation does not go outside the screen
        setTranslateX(0);
        onLeftSwipe();
      } else if (newValue < oldValue) {
        // make sure that the translateX is reset so the animation does not go outside the screen
        setTranslateX(0);
        onRightSwipe();
      }
    }
  };

  const onRightSwipe = (): void => {
    mobile && setPanelAnimation('right');
  };

  const onLeftSwipe = (): void => {
    mobile && setPanelAnimation('left');
  };

  const resetAnimation = (): void => {
    setPanelAnimation(null);
  };

  const activeTabIndex = isControlled ? activeTab : uncontrolledValue;

  useEffect(() => {
    const handleTouchStart = (event: TouchEvent): void => {
      setTouchStartX(event.touches[0].clientX);
    };

    const handleTouchMove = (event: TouchEvent): void => {
      setTouchEndX(event.touches[0].clientX);
      const newTranslateX = event.touches[0].clientX - touchStartX;

      if (activeTabIndex === 0 && newTranslateX > 0) {
        setTranslateX(0);
      } else if (activeTabIndex === React.Children.count(children) - 1 && newTranslateX < 0) {
        setTranslateX(0);
      } else {
        setTranslateX(newTranslateX);
      }
    };

    const handleTouchEnd = (): void => {
      const swipeDistance = Math.abs(touchEndX - touchStartX);
      if (swipeDistance >= swipeDistanceThreshold) {
        if (touchEndX > touchStartX) {
          // User swiped right
          onValueChange(Math.max(0, activeTabIndex - 1), activeTabIndex);
        } else {
          // User swiped left
          onValueChange(Math.min(React.Children.count(children) - 1, activeTabIndex + 1), activeTabIndex);
        }
      }
      setTranslateX(0);
    };

    if (touchBehaviour === 'swipe' && tabsRef.current) {
      tabsRef.current.addEventListener('touchstart', handleTouchStart);
      tabsRef.current.addEventListener('touchmove', handleTouchMove);
      tabsRef.current.addEventListener('touchend', handleTouchEnd);
    }
    return () => {
      if (tabsRef.current) {
        tabsRef.current.removeEventListener('touchstart', handleTouchStart);
        tabsRef.current.removeEventListener('touchmove', handleTouchMove);
        tabsRef.current.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [touchBehaviour, touchStartX, touchEndX, activeTabIndex]);

  useEffect(() => {
    const handleAnimationEnd = (): void => {
      resetAnimation();
    };

    if (tabPanelRef.current) {
      tabPanelRef.current.addEventListener('animationend', handleAnimationEnd);
    }

    return () => {
      if (tabPanelRef.current) {
        tabPanelRef.current.removeEventListener('animationend', handleAnimationEnd);
      }
    };
  }, []);

  return (
    <div className={className} data-testid={testId}>
      <div
        ref={tabListRef}
        className={classNames(styles['tab-list-wrapper'], {
          [styles['tab-list-wrapper--sticky']]: sticky,
        })}
      >
        <TabList
          onTabListClick={(index: number) => onValueChange(index, activeTabIndex)}
          selectedTab={activeTabIndex}
          color={color}
          type={type}
        >
          {children}
        </TabList>
        <div
          className={classNames(styles['panel-wrapper'], styles[`panel-wrapper--${color}`], {
            [styles['panel-wrapper--framed']]: type == 'framed',
          })}
        ></div>
      </div>
      <div ref={tabsRef} style={{ marginTop: type == 'framed' ? '-40px' : '' }}>
        <TabPanel
          ref={tabPanelRef}
          color={color}
          type={type}
          isFirst={activeTabIndex == 0}
          translateX={translateX}
          animate={panelAnimation}
        >
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
