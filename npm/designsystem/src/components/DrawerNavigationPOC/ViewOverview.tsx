import type { DrawerNavigationCommonProps, ViewConfig } from './DrawerNavigationPOC';

import FilterOverviewLinkList from './FilterOverviewLinkList';

export interface DummyFilter {
  title: string;
  activeFilters: string[];
  viewId?: string;
  onClick?: () => void;
}

export interface ViewOverviewProps {
  filters: DummyFilter[];
}

export type ViewOverviewConfig<ViewId extends string = string> = ViewConfig<ViewId, ViewOverviewProps>;

const ViewOverview = <ViewId extends string = string>({
  filters,
  navigate,
}: DrawerNavigationCommonProps<ViewId> & ViewOverviewProps): React.ReactNode => {
  return (
    <FilterOverviewLinkList>
      {filters.map(filter => (
        <FilterOverviewLinkList.Link
          key={filter.title}
          title={filter.title}
          chips={filter.activeFilters}
          onClick={() => (filter.onClick ? filter.onClick() : filter.viewId && navigate.goToView(filter.viewId as ViewId))}
        />
      ))}
    </FilterOverviewLinkList>
  );
};

export default ViewOverview;
