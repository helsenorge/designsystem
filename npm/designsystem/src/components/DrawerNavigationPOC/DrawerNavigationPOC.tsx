import { useState, useMemo, useImperativeHandle } from 'react';

// import TestDrawer from './TestDrawer';
import Button, { ButtonProps } from '../Button';
import Drawer from '../Drawer/Drawer';

import styles from './styles.module.scss';

export interface NavigateProps {
  goToView: (id: string) => void;
  goBack: () => void;
  goToViewAndClearStack: (id: string) => void;
}
export interface DrawerNavigationCommonProps {
  navigate: NavigateProps;
}

export interface ViewConfig<P extends object = object> {
  id: string;
  title: string;
  component: (props: DrawerNavigationCommonProps & P) => React.ReactNode;
  props?: P;
  nullstillButtonProps?: ButtonProps;
  showResultButtonProps?: ButtonProps;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface DrawerNavigationPOCProps<V extends ViewConfig<any>> {
  views: V[];
  onCloseButton?: () => void;
  isOpen: boolean;
  navigationRef?: React.Ref<NavigateProps>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function DrawerNavigationPOC<V extends ViewConfig<any>>({ views, navigationRef, ...props }: DrawerNavigationPOCProps<V>): JSX.Element {
  const [viewStack, setViewStack] = useState<string[]>(views[0] ? [views[0].id] : []);

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
      setViewStack([id]);
    }
  };

  const { CurrentView, currentViewProps, currentViewTitle, nullstillButtonProps, showResultButtonProps } = useMemo(() => {
    const currentViewId = viewStack[viewStack.length - 1];
    const currentViewObj = views.find(view => view.id === currentViewId);
    return {
      CurrentView: currentViewObj?.component,
      currentViewProps: currentViewObj?.props || {},
      currentViewTitle: currentViewObj?.title || 'Filter', // hva skal være fallback her?
      nullstillButtonProps: currentViewObj?.nullstillButtonProps,
      showResultButtonProps: currentViewObj?.showResultButtonProps,
      currentViewId,
    };
  }, [viewStack, views]);

  const navigate = { goBack, goToView, goToViewAndClearStack };

  useImperativeHandle(navigationRef, () => navigate);

  const handleClose = (): void => {
    setViewStack(views[0] ? [views[0].id] : []); // initialiser stack på nytt
    props.onCloseButton?.();
  };

  const renderFooterButtons = (
    <div className={styles['drawer-footer']}>
      {nullstillButtonProps ? <Button {...nullstillButtonProps} /> : <div />}
      {showResultButtonProps && <Button {...showResultButtonProps} />}
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
