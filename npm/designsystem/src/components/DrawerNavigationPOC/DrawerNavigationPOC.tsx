import { FC, useState } from 'react';

export interface NavigationProps {
  goToView: (id: string) => void;
  goBack: () => void;
  goToViewAndClearStack: (id: string) => void;
}

export interface ViewConfig<P = object> {
  id: string;
  component: React.FC<NavigationProps & P>;
  props?: P;
}

interface DrawerNavigationPOCProps {
  views: ViewConfig<any>[];
}

const DrawerNavigationPOC: FC<DrawerNavigationPOCProps> = ({ views }) => {
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

  const currentViewId = viewStack[viewStack.length - 1];
  const currentViewObj = views.find(view => view.id === currentViewId);
  const CurrentView = currentViewObj?.component;
  const currentViewProps = currentViewObj?.props || {};

  return (
    <div>
      <h1>{'Drawer Navigation POC'}</h1>
      <div>{viewStack.map(viewId => `${viewId} ->`)}</div>
      {CurrentView && (
        <CurrentView {...currentViewProps} goToView={goToView} goBack={goBack} goToViewAndClearStack={goToViewAndClearStack} />
      )}
    </div>
  );
};

export default DrawerNavigationPOC;
