import type { HNDesignsystemFilter } from '../../../resources/Resources';
import type { FilterValues, UseFilterReturn } from '../useFilter';

import { LanguageLocales } from '../../../constants';
import { useLanguage } from '../../../hooks/useLanguage';
import { useDrawerNavigation } from '../DrawerNavigation';
import FilterLinkList from '../FilterLinkList/FilterLinkList';
import { getResources } from '../resourceHelper';

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
  /** Resources for the component */
  resources?: Partial<HNDesignsystemFilter>;
}

function FilterOverviewLinkList<T extends FilterValues>({
  filter,
  getLabel,
  links,
  resources,
}: FilterOverviewLinkListProps<T>): React.ReactNode {
  const { goToView } = useDrawerNavigation();
  const { language } = useLanguage<LanguageLocales>(LanguageLocales.NORWEGIAN);
  const defaultResources = getResources(language);
  const mergedResources = {
    ...defaultResources,
    ...resources,
  };

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

        return (
          <FilterLinkList.Link
            key={filterKey}
            title={title}
            chips={chips}
            chipsGroupAriaLabel={mergedResources.activeFiltersListLabel}
            onClick={() => goToView(viewId ?? filterKey)}
          />
        );
      })}
    </FilterLinkList>
  );
}

export default FilterOverviewLinkList;
