import type React from 'react';
import { Children, isValidElement, useState } from 'react';

import { type NavigateProps, DrawerNavigationContext } from './useDrawerNavigation';
import Drawer from '../../Drawer';

export interface DrawerViewProps<ViewId extends string = string> {
  id: ViewId;
  title: string;
  /** Mark this view as the home/default view */
  home?: boolean;
  children: React.ReactNode;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function DrawerView<ViewId extends string>(_props: DrawerViewProps<ViewId>): React.ReactNode {
  // DrawerView is never rendered directly — DrawerNavigation reads its props
  return null;
}

export interface DrawerNavigationProps {
  children: React.ReactNode;
  isOpen: boolean;
  onCloseButton?: () => void;
}

interface ParsedView {
  id: string;
  title: string;
  home?: boolean;
  children: React.ReactNode;
}

function parseChildren(children: React.ReactNode): { views: ParsedView[]; other: React.ReactNode[] } {
  const views: ParsedView[] = [];
  const other: React.ReactNode[] = [];
  Children.forEach(children, child => {
    if (isValidElement<DrawerViewProps>(child) && child.type === DrawerView) {
      views.push({
        id: child.props.id,
        title: child.props.title,
        home: child.props.home,
        children: child.props.children,
      });
    } else {
      other.push(child);
    }
  });
  return { views, other };
}

function DrawerNavigation({ children, isOpen, onCloseButton }: DrawerNavigationProps): React.ReactNode {
  // åpnet for andre children for å støtte Modal med tilgang til navigate-funksjoner for finn fastlege-flyt
  const { views, other } = parseChildren(children);

  const homeView = views.find(v => v.home) ?? views[0];
  const [viewStack, setViewStack] = useState<string[]>([homeView?.id]);

  const goToView = (id: string): void => {
    if (views.some(v => v.id === id)) {
      setViewStack(stack => [...stack, id]);
    }
  };

  const goBack = (): void => {
    setViewStack(stack => (stack.length > 1 ? stack.slice(0, -1) : stack));
  };

  const goToViewAndClearStack = (id: string): void => {
    if (views.some(v => v.id === id)) {
      setViewStack(id === homeView?.id ? [homeView.id] : [homeView?.id, id]);
    }
  };

  const currentViewId = viewStack[viewStack.length - 1];
  const currentView = views.find(v => v.id === currentViewId);

  const navigate: NavigateProps = { goBack, goToView, goToViewAndClearStack };

  const [prevIsOpen, setPrevIsOpen] = useState(isOpen);
  if (prevIsOpen !== isOpen) {
    setPrevIsOpen(isOpen);
    if (!isOpen) {
      setViewStack([homeView?.id]);
    }
  }

  return (
    <DrawerNavigationContext.Provider value={navigate}>
      <Drawer
        isOpen={isOpen}
        title={currentView?.title ?? 'Filter'}
        withBackButton={viewStack.length > 1}
        onRequestBack={goBack}
        onRequestClose={onCloseButton}
      >
        {currentView?.children}
      </Drawer>
      {other}
    </DrawerNavigationContext.Provider>
  );
}

DrawerNavigation.View = DrawerView;

export default DrawerNavigation;
