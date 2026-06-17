import type React from 'react';

import classNames from 'classnames';

import type { HNDesignsystemFilter } from '../../../resources/Resources';

import { LanguageLocales } from '../../../constants';
import { useLanguage } from '../../../hooks/useLanguage';
import { getResources } from '../resourceHelper';

import styles from './styles.module.scss';

export interface FilterButtonAndChipsWrapperProps {
  /** FilterButton content area */
  filterButtonComponent: React.ReactNode;
  /** Content area for rendering filter chips */
  filterChips: React.ReactNode[];
  /** test id that is placed on the wrapper */
  testId?: string;
  /** Resources for the component */
  resources?: Partial<HNDesignsystemFilter>;
}

const FilterButtonAndChipsWrapper: React.FC<FilterButtonAndChipsWrapperProps> = ({
  filterButtonComponent,
  filterChips,
  testId,
  resources,
}) => {
  const { language } = useLanguage<LanguageLocales>(LanguageLocales.NORWEGIAN);
  const defaultResources = getResources(language);

  const mergedResources = {
    ...defaultResources,
    ...resources,
  };
  return (
    <div className={classNames(styles['filter-chip-bar'])} data-testid={testId}>
      {filterButtonComponent}
      <ul aria-label={mergedResources.activeFiltersListLabel} className={styles['filter-chip-bar__list']}>
        {filterChips.map((activefilter, index) => (
          <li key={index}>{activefilter}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilterButtonAndChipsWrapper;
