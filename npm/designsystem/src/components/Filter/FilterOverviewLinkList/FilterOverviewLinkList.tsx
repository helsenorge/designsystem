import type { FilterValues, UseFilterReturn } from '../FiltreringsPOC/useFilter';

import { useDrawerNavigation } from '../DrawerNavigation';
import FilterLinkList from '../FilterLinkList/FilterLinkList';

export interface FilterOverviewLink {
  /** The filter key to read values from */
  filterKey: string;
  /** Display title for the link */
  title: string;
  /** View ID to navigate to when clicked. Defaults to filterKey */
  viewId?: string;
}

export interface FilterOverviewLinkListProps<T extends FilterValues> {
  /** The filter instance from useFilter */
  filter: UseFilterReturn<T>;
  /** Look up the display label for a filter key + value */
  getLabel: (key: keyof T, value: unknown) => string;
  /** Configuration for which filter keys to show as links */
  links: FilterOverviewLink[];
}

function FilterOverviewLinkList<T extends FilterValues>({ filter, getLabel, links }: FilterOverviewLinkListProps<T>): React.ReactNode {
  const { goToView } = useDrawerNavigation();

  return (
    <FilterLinkList>
      {links.map(({ filterKey, title, viewId }) => {
        const raw = filter.filters[filterKey as keyof T];

        let chips: string[];
        if (Array.isArray(raw)) {
          chips = raw.map(v => getLabel(filterKey as keyof T, v));
        } else if (raw !== undefined && raw !== null) {
          chips = [getLabel(filterKey as keyof T, raw)];
        } else {
          chips = [];
        }

        return <FilterLinkList.Link key={filterKey} title={title} chips={chips} onClick={() => goToView(viewId ?? filterKey)} />;
      })}
    </FilterLinkList>
  );
}

export default FilterOverviewLinkList;
