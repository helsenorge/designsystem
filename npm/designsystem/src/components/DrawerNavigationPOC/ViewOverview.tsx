import { DrawerNavigationCommonProps, ViewConfig } from './DrawerNavigationPOC';
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

export type ViewOverviewConfig = ViewConfig<ViewOverviewProps>;

const ViewOverview: React.FC<DrawerNavigationCommonProps & ViewOverviewProps> = ({ filters, navigate }) => {
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
