import { useState, useMemo } from 'react';

import Drawer from '../Drawer/Drawer';

interface NavigateProps {
  goToView: (id: string) => void;
  goBack: () => void;
  goToViewAndClearStack: (id: string) => void;
}
export interface NavigationProps {
  navigate: NavigateProps;
}

export interface ViewConfig<P extends object = object> {
  id: string;
  title: string;
  component: React.FC<NavigationProps & P>;
  props?: P;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface DrawerNavigationPOCProps<V extends ViewConfig<any>> {
  views: V[];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function DrawerNavigationPOC<V extends ViewConfig<any>>({ views }: DrawerNavigationPOCProps<V>): JSX.Element {
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

  const { CurrentView, currentViewProps, currentViewTitle } = useMemo(() => {
    const currentViewId = viewStack[viewStack.length - 1];
    const currentViewObj = views.find(view => view.id === currentViewId);
    return {
      CurrentView: currentViewObj?.component,
      currentViewProps: currentViewObj?.props || {},
      currentViewTitle: currentViewObj?.title || 'Filter', // hva skal være fallback her?
      currentViewId,
    };
  }, [viewStack, views]);

  const navigate = { goBack, goToView, goToViewAndClearStack };

  return (
    <>
      {CurrentView && (
        <Drawer
          isOpen={true}
          title={currentViewTitle}
          onRequestClose={() => console.log('delete me')}
          withBackButton={viewStack.length > 1}
          onRequestBack={goBack}
        >
          <div>
            {viewStack.map((viewId, idx) => (
              <span key={idx}>
                {viewId}
                {idx < viewStack.length - 1 && ' → '}
              </span>
            ))}
          </div>
          <CurrentView {...(currentViewProps ? currentViewProps : {})} navigate={navigate} />
        </Drawer>
      )}
    </>
  );
}

export default DrawerNavigationPOC;
