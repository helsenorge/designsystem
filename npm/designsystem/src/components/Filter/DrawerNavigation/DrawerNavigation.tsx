import type React from 'react';
import { Children, isValidElement, useCallback, useMemo, useState } from 'react';

import { type NavigateProps, DrawerNavigationContext } from './useDrawerNavigation';
import Drawer from '../../Drawer';

export interface DrawerViewProps<ViewId extends string = string> {
  /** Id for the view. Important for navigation */
  id: ViewId;
  /** Title used for Drawer in current view */
  title: string;
  /** Mark this view as the home/default view */
  home?: boolean;
  /** Content inside the drawer for this view */
  children: React.ReactNode;
  /** Default onClose callback for drawer. Will override onCloseButton on parent */
  onCloseButton?: () => void;
  /** Content sent to footer section of Drawer. Will override footer on parent */
  footer?: React.ReactNode;
  /** Classname set on the content inside Drawer */
  drawerContentClassname?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function DrawerView<ViewId extends string>(_props: DrawerViewProps<ViewId>): React.ReactNode {
  // DrawerView is never rendered directly — DrawerNavigation reads its props
  return null;
}

export interface DrawerNavigationProps {
  /** Views and other children components inside the Drawer navigation. Views are put in stack */
  children: React.ReactNode;
  /** Is drawer open or closed */
  isOpen: boolean;
  /** Navigate to this view when the drawer opens. Defaults to home view. */
  initialView?: string;
  /** Default onClose callback for drawer. View onCloseButton callback will override this. */
  onCloseButton?: () => void;
  /** Content sent to footer section of Drawer. View footer will override this */
  footer?: React.ReactNode;
}

function parseChildren(children: React.ReactNode): { views: DrawerViewProps[]; other: React.ReactNode[] } {
  const views: DrawerViewProps[] = [];
  const other: React.ReactNode[] = [];
  Children.forEach(children, child => {
    if (isValidElement<DrawerViewProps>(child) && child.type === DrawerView) {
      views.push({
        id: child.props.id,
        title: child.props.title,
        home: child.props.home,
        children: child.props.children,
        onCloseButton: child.props.onCloseButton,
        footer: child.props.footer,
        drawerContentClassname: child.props.drawerContentClassname,
      });
    } else {
      /** Added possibility of other children to support Modals that need navigation context */
      other.push(child);
    }
  });
  return { views, other };
}

function DrawerNavigation({ children, isOpen, initialView, onCloseButton, footer }: DrawerNavigationProps): React.ReactNode {
  const { views, other } = useMemo(() => parseChildren(children), [children]);

  const homeView = views.find(v => v.home) ?? views[0];
  const [viewStack, setViewStack] = useState<string[]>([homeView?.id]);

  const goToView = useCallback(
    (id: string): void => {
      if (views.some(v => v.id === id)) {
        setViewStack(stack => [...stack, id]);
      }
    },
    [views]
  );

  const goBack = useCallback((): void => {
    setViewStack(stack => (stack.length > 1 ? stack.slice(0, -1) : stack));
  }, []);

  const goToViewAndClearStack = useCallback(
    (id: string): void => {
      if (views.some(v => v.id === id)) {
        setViewStack(id === homeView?.id ? [homeView.id] : [homeView?.id, id]);
      }
    },
    [views, homeView]
  );

  const currentViewId = viewStack[viewStack.length - 1];
  const currentView = views.find(v => v.id === currentViewId);

  const navigate = useMemo<NavigateProps>(() => ({ goBack, goToView, goToViewAndClearStack }), [goBack, goToView, goToViewAndClearStack]);

  const [prevIsOpen, setPrevIsOpen] = useState(isOpen);
  if (prevIsOpen !== isOpen) {
    setPrevIsOpen(isOpen);
    if (!isOpen) {
      setViewStack([homeView?.id]);
    } else if (initialView && views.some(v => v.id === initialView)) {
      setViewStack(initialView === homeView?.id ? [homeView.id] : [homeView?.id, initialView]);
    }
  }

  return (
    <DrawerNavigationContext.Provider value={navigate}>
      <Drawer
        isOpen={isOpen}
        title={currentView?.title ?? 'Filter'}
        withBackButton={viewStack.length > 1}
        onRequestBack={goBack}
        onRequestClose={currentView?.onCloseButton ?? onCloseButton}
        footerContent={currentView?.footer ?? footer}
        contentClassName={currentView?.drawerContentClassname}
      >
        {currentView?.children}
      </Drawer>
      {other}
    </DrawerNavigationContext.Provider>
  );
}

DrawerNavigation.View = DrawerView;

export default DrawerNavigation;
