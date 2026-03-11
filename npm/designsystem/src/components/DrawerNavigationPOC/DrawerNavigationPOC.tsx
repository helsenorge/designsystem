import { useState, useMemo, useImperativeHandle } from 'react';

// import TestDrawer from './TestDrawer';
import Button, { ButtonProps } from '../Button';
import Drawer from '../Drawer/Drawer';

import styles from './styles.module.scss';

export interface NavigateProps<ViewId extends string = string> {
  goToView: (id: ViewId) => void;
  goBack: () => void;
  goToViewAndClearStack: (id: ViewId) => void;
}
export interface DrawerNavigationCommonProps<ViewId extends string = string> {
  navigate: NavigateProps<ViewId>;
}

export interface ViewConfig<ViewId extends string = string, P extends object = object> {
  id: ViewId;
  title: string;
  component: (props: DrawerNavigationCommonProps<ViewId> & P) => React.ReactNode;
  props?: P;
  resetButtonProps?: ButtonProps;
  resultButtonProps?: ButtonProps;
}

export function createView<ViewId extends string, P extends object = object>(config: ViewConfig<ViewId, P>): ViewConfig<ViewId, P> {
  return config;
}

export interface DrawerNavigationPOCProps<ViewId extends string = string> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  homeView: ViewConfig<ViewId, any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  views?: ViewConfig<ViewId, any>[];
  onCloseButton?: () => void;
  isOpen: boolean;
  navigationRef?: React.Ref<NavigateProps<ViewId>>;
  defaultResetButtonProps?: ButtonProps;
  defaultResultButtonProps?: ButtonProps;
}

function DrawerNavigationPOC<ViewId extends string>({
  homeView,
  views: additionalViews = [],
  navigationRef,
  defaultResetButtonProps,
  defaultResultButtonProps,
  ...props
}: DrawerNavigationPOCProps<ViewId>): JSX.Element {
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

  const { CurrentView, currentViewProps, currentViewTitle, resetButtonProps, resultButtonProps } = useMemo(() => {
    const currentViewId = viewStack[viewStack.length - 1];
    const currentViewObj = allViews.find(view => view.id === currentViewId);
    return {
      CurrentView: currentViewObj?.component,
      currentViewProps: currentViewObj?.props || {},
      currentViewTitle: currentViewObj?.title || 'Filter',
      resetButtonProps: currentViewObj?.resetButtonProps ?? defaultResetButtonProps,
      resultButtonProps: currentViewObj?.resultButtonProps ?? defaultResultButtonProps,
      currentViewId,
    };
  }, [viewStack, allViews, defaultResetButtonProps, defaultResultButtonProps]);

  const navigate: NavigateProps<ViewId> = { goBack, goToView, goToViewAndClearStack };

  useImperativeHandle(navigationRef, () => navigate);

  const handleClose = (): void => {
    setViewStack([homeView.id]);
    props.onCloseButton?.();
  };

  const renderFooterButtons = (
    <div className={styles['drawer-footer']}>
      {resetButtonProps ? <Button {...resetButtonProps} /> : <div />}
      {resultButtonProps && <Button {...resultButtonProps} />}
    </div>
  );

  return (
    <Drawer
      isOpen={props.isOpen}
      title={currentViewTitle}
      withBackButton={viewStack.length > 1}
      onRequestBack={goBack}
      onRequestClose={handleClose}
      footerContent={renderFooterButtons}
    >
      {CurrentView && <CurrentView {...(currentViewProps ?? {})} navigate={navigate} />}
    </Drawer>
  );
}

export default DrawerNavigationPOC;
