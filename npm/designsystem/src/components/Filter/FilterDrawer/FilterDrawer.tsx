import { Children, isValidElement } from 'react';

import type { HNDesignsystemFilter } from '../../../resources/Resources';
import type { UseFilterDrawerReturn } from '../useFilterDrawer';

import { LanguageLocales } from '../../../constants';
import { useLanguage } from '../../../hooks/useLanguage';
import { formatResource } from '../../../utils/resource';
import Button from '../../Button';
import DrawerNavigation, { type DrawerViewProps } from '../DrawerNavigation/DrawerNavigation';
import { getResources } from '../resourceHelper';

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
  /** If provided, shows a result count button (e.g. "Vis 5 treff") that closes the drawer */
  resultCount?: number;
  /** Resources for the component */
  resources?: Partial<HNDesignsystemFilter>;
  /** DrawerNavigation.View children defining the overview and filter views */
  children: React.ReactNode;
}

export interface FilterDrawerViewProps extends DrawerViewProps {
  /** Hide reset button for view */
  noResetButton?: boolean;
  /** View specific close handler */
  onClose?: () => void;
  /** View specific reset handler */
  onReset?: () => void;
}

/**
 * Never rendered directly — FilterDrawer reads its props and creates a DrawerNavigation.View
 * with id="overview" and home=true.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function FilterDrawerOverview(_props: Omit<DrawerViewProps, 'id' | 'home'>): React.ReactNode {
  return null;
}

/**
 * Never rendered directly — FilterDrawer reads its props and creates a FilterDrawerView
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function FilterDrawerView(_props: FilterDrawerViewProps): React.ReactNode {
  // DrawerView is never rendered directly — DrawerNavigation reads its props
  return null;
}

function FilterDrawer<ViewId extends string>({
  drawer,
  onClose,
  footer,
  onReset,
  resultCount,
  resources,
  children,
}: FilterDrawerProps<ViewId>): React.ReactNode {
  const { language } = useLanguage<LanguageLocales>(LanguageLocales.NORWEGIAN);
  const defaultResources = getResources(language);
  const mergedResources = {
    ...defaultResources,
    ...resources,
  };

  const handleClose = (): void => {
    if (onClose) {
      onClose();
    } else {
      drawer.close();
    }
  };

  const showResultButtonText =
    resultCount !== undefined ? formatResource(mergedResources.showButtonText, resultCount) : mergedResources.showButtonText;

  const defaultResetButton = onReset && (
    <Button onClick={onReset} variant="borderless">
      {mergedResources.resetButtonText}
    </Button>
  );
  const defaultShowResultsButton = showResultButtonText && <Button onClick={handleClose}>{showResultButtonText}</Button>;

  const defaultFooter =
    onReset || showResultButtonText ? (
      <div className={styles['filter-drawer__footer']}>
        {defaultResetButton}
        {defaultShowResultsButton}
      </div>
    ) : undefined;

  const fallbackFooter = footer ?? defaultFooter;

  const generateViewFooter = (viewOnReset?: () => void, viewOnClose?: () => void, noResetButton?: boolean): React.ReactNode => {
    if (!viewOnReset && !viewOnClose && !noResetButton) {
      return undefined;
    }

    return (
      <div className={styles['filter-drawer__footer']}>
        {!noResetButton &&
          (viewOnReset ? (
            <Button onClick={viewOnReset} variant="borderless">
              {mergedResources.resetButtonText}
            </Button>
          ) : (
            defaultResetButton
          ))}
        {viewOnClose ? (
          <Button onClick={viewOnClose}>{showResultButtonText ?? mergedResources.showButtonText}</Button>
        ) : (
          defaultShowResultsButton
        )}
      </div>
    );
  };

  const processedChildren = Children.map(children, child => {
    if (isValidElement<Omit<FilterDrawerViewProps, 'id' | 'home'>>(child) && child.type === FilterDrawerOverview) {
      const viewDefaultFooter = generateViewFooter(child.props.onReset, child.props.onClose, child.props.noResetButton);
      const viewFooter = viewDefaultFooter ?? child.props.footer ?? fallbackFooter;
      return (
        <DrawerNavigation.View
          id="overview"
          home
          title={child.props.title}
          children={child.props.children}
          drawerContentClassname={styles['filter-drawer__view']}
          footer={viewFooter}
        />
      );
    }
    if (isValidElement<FilterDrawerViewProps>(child)) {
      const viewDefaultFooter = generateViewFooter(child.props.onReset, child.props.onClose, child.props.noResetButton);
      const viewFooter = viewDefaultFooter ?? child.props.footer ?? fallbackFooter;
      return (
        <DrawerNavigation.View
          id={child.props.id}
          title={child.props.title}
          children={child.props.children}
          drawerContentClassname={styles['filter-drawer__view']}
          footer={viewFooter}
        />
      );
    } else {
      return child;
    }
  });

  return (
    <DrawerNavigation isOpen={drawer.isOpen} initialView={drawer.initialView} onCloseButton={handleClose} footer={footer ?? defaultFooter}>
      {processedChildren}
    </DrawerNavigation>
  );
}

FilterDrawer.Overview = FilterDrawerOverview;
FilterDrawer.View = FilterDrawerView;

export default FilterDrawer;
