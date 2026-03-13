import { useMemo, useState } from 'react';

import Drawer from '../../Drawer';

export interface NavigateProps<ViewId extends string = string> {
  goToView: (id: ViewId) => void;
  goBack: () => void;
  goToViewAndClearStack: (id: ViewId) => void;
}
export interface DrawerViewProps<ViewId extends string = string> {
  navigate: NavigateProps<ViewId>;
}

export interface ViewConfig<ViewId extends string = string, P extends object = object> {
  id: ViewId;
  title: string;
  component: (props: DrawerViewProps<ViewId> & P) => React.ReactNode | Promise<React.ReactNode>;
  props?: P;
}

export interface DrawerNavigationProps<ViewId extends string = string> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  homeView: ViewConfig<ViewId, any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  views?: ViewConfig<ViewId, any>[];
  onCloseButton?: () => void;
  isOpen: boolean;
}

function DrawerNavigation<ViewId extends string>({
  homeView,
  views: additionalViews = [],
  ...props
}: DrawerNavigationProps<ViewId>): React.ReactNode {
  const allViews = useMemo(() => [homeView, ...additionalViews], [homeView, additionalViews]);
  const [viewStack, setViewStack] = useState<ViewId[]>([homeView.id]);

  const goToView = (id: ViewId): void => {
    if (allViews.some(v => v.id === id)) {
      setViewStack(stack => [...stack, id]);
    }
  };

  const goBack = (): void => {
    setViewStack(stack => (stack.length > 1 ? stack.slice(0, -1) : stack));
  };

  const goToViewAndClearStack = (id: ViewId): void => {
    if (allViews.some(v => v.id === id)) {
      setViewStack(id === homeView.id ? [homeView.id] : [homeView.id, id]);
    }
  };

  const { CurrentView, currentViewProps, currentViewTitle } = useMemo(() => {
    const currentViewId = viewStack[viewStack.length - 1];
    const currentViewObj = allViews.find(view => view.id === currentViewId);
    return {
      CurrentView: currentViewObj?.component,
      currentViewProps: currentViewObj?.props || {},
      currentViewTitle: currentViewObj?.title || 'Filter',
      currentViewId,
    };
  }, [viewStack, allViews]);

  const navigate: NavigateProps<ViewId> = { goBack, goToView, goToViewAndClearStack };

  const [prevIsOpen, setPrevIsOpen] = useState(props.isOpen);
  if (prevIsOpen !== props.isOpen) {
    setPrevIsOpen(props.isOpen);
    if (!props.isOpen) {
      // reset til homeview når drawer lukker seg
      setViewStack([homeView.id]);
    }
  }

  return (
    <Drawer
      isOpen={props.isOpen}
      title={currentViewTitle}
      withBackButton={viewStack.length > 1}
      onRequestBack={goBack}
      onRequestClose={props.onCloseButton}
    >
      {CurrentView && <CurrentView {...(currentViewProps ?? {})} navigate={navigate} />}
    </Drawer>
  );
}

export default DrawerNavigation;
