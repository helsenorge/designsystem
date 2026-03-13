import type { DrawerNavigationCommonProps, ViewConfig } from './DrawerNavigationPOC';

import FilterOverviewLinkList from './FilterOverviewLinkList';

export interface DummyFilter<ViewId extends string = string> {
  title: string;
  activeFilters: string[];
  viewId?: ViewId;
  onClick?: () => void;
}

export interface ViewOverviewProps<ViewId extends string = string> {
  filters: DummyFilter<ViewId>[];
}

export type ViewOverviewConfig<ViewId extends string = string> = ViewConfig<ViewId, ViewOverviewProps<ViewId>>;

const ViewOverview = <ViewId extends string = string>({
  filters,
  navigate,
}: DrawerNavigationCommonProps<ViewId> & ViewOverviewProps<ViewId>): React.ReactNode => {
  return (
    <FilterOverviewLinkList>
      {filters.map(filter => (
        <FilterOverviewLinkList.Link
          key={filter.title}
          title={filter.title}
          chips={filter.activeFilters}
          onClick={() => (filter.onClick ? filter.onClick() : filter.viewId && navigate.goToView(filter.viewId))}
        />
      ))}
    </FilterOverviewLinkList>
  );
};

export default ViewOverview;
