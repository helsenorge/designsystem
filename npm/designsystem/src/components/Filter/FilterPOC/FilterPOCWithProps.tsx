import type { ViewConfig } from '../DrawerNavigationPOC/DrawerNavigationPOC';
import type { DummyFilter } from '../DrawerNavigationPOC/ViewOverview';

import DrawerNavigationPOC, { createView } from '../DrawerNavigationPOC/DrawerNavigationPOC';
import ViewOverview from '../DrawerNavigationPOC/ViewOverview';

interface FilterPOCWithPropsProps<ViewId extends string = string> {
  isOpen: boolean;
  onCloseButton: () => void;
  filters: DummyFilter<ViewId>[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  views: ViewConfig<ViewId, any>[];
  overviewTitle?: string;
  /** Custom home view config. If provided, replaces the default ViewOverview. */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  homeView?: ViewConfig<ViewId, any>;
}

function FilterPOCWithProps<ViewId extends string>({
  isOpen,
  onCloseButton,
  filters,
  views,
  overviewTitle = 'Filter',
  homeView: customHomeView,
}: FilterPOCWithPropsProps<ViewId>): React.ReactNode {
  const defaultHomeView = createView<ViewId, { filters: DummyFilter<ViewId>[] }>({
    id: 'overview' as ViewId,
    title: overviewTitle,
    component: ViewOverview,
    props: { filters },
  });

  return <DrawerNavigationPOC homeView={customHomeView ?? defaultHomeView} views={views} isOpen={isOpen} onCloseButton={onCloseButton} />;
}

export default FilterPOCWithProps;
