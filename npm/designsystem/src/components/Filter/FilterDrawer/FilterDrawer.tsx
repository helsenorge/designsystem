import { Children, isValidElement } from 'react';

import type { UseFilterDrawerReturn } from '../useFilterDrawer';

import Button from '../../Button';
import DrawerNavigation, { type DrawerViewProps } from '../DrawerNavigation/DrawerNavigation';

import styles from './styles.module.scss';

export interface FilterDrawerProps<ViewId extends string = string> {
  /** The drawer state from useFilterDrawer */
  drawer: UseFilterDrawerReturn<ViewId>;
  /** Additional callback when the drawer closes (drawer.close() is always called automatically) */
  onClose?: () => void;
  /** Fully custom footer — overrides the default footer built from onReset/resultText */
  footer?: React.ReactNode;
  /** If provided, shows a "Nullstill filter" button in the default footer */
  onReset?: () => void;
  /** Text for the reset button. Default: 'Nullstill filter' */
  resetText?: string;
  /** If provided, shows a result button (e.g. "Vis 5 treff") that closes the drawer */
  showResultButtonText?: string;
  /** DrawerNavigation.View children defining the overview and filter views */
  children: React.ReactNode;
}

/**
 * Never rendered directly — FilterDrawer reads its props and creates a DrawerNavigation.View
 * with id="overview" and home=true.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function FilterDrawerOverview(_props: Omit<DrawerViewProps, 'id' | 'home'>): React.ReactNode {
  return null;
}

function FilterDrawer<ViewId extends string>({
  drawer,
  onClose,
  footer,
  onReset,
  resetText = 'Nullstill filter',
  showResultButtonText,
  children,
}: FilterDrawerProps<ViewId>): React.ReactNode {
  const handleClose = (): void => {
    drawer.close();
    onClose?.();
  };

  const processedChildren = Children.map(children, child => {
    if (isValidElement<Omit<DrawerViewProps, 'id' | 'home'>>(child) && child.type === FilterDrawerOverview) {
      return <DrawerNavigation.View id="overview" home {...child.props} />;
    }
    return child;
  });

  const defaultFooter =
    onReset || showResultButtonText ? (
      <div className={styles['filter-drawer-footer']}>
        {onReset && (
          <Button onClick={onReset} variant="borderless">
            {resetText}
          </Button>
        )}
        {showResultButtonText && <Button onClick={handleClose}>{showResultButtonText}</Button>}
      </div>
    ) : undefined;

  return (
    <DrawerNavigation isOpen={drawer.isOpen} initialView={drawer.initialView} onCloseButton={handleClose} footer={footer ?? defaultFooter}>
      {processedChildren}
    </DrawerNavigation>
  );
}

FilterDrawer.Overview = FilterDrawerOverview;
FilterDrawer.View = DrawerNavigation.View;

export default FilterDrawer;
