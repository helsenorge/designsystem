import type { DummyFilter } from '../DrawerNavigation/utils';

import { useDrawerNavigation } from '../DrawerNavigation/useDrawerNavigation';
import FilterLinkList from '../FilterLinkList/FilterLinkList';

interface FilterOverviewViewProps<ViewId extends string = string> {
  filters: DummyFilter<ViewId>[];
}

const FilterOverviewView = <ViewId extends string = string>(props: FilterOverviewViewProps<ViewId>): React.ReactNode => {
  const { filters } = props;
  const { goToView } = useDrawerNavigation<ViewId>();
  return (
    <FilterLinkList>
      {filters.map(filter => (
        <FilterLinkList.Link title={filter.title} chips={filter.activeFilters} onClick={() => goToView(filter.id)} />
      ))}
    </FilterLinkList>
  );
};

export default FilterOverviewView;
