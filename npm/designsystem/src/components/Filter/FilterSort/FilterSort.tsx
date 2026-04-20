import type { HNDesignsystemFilter } from '../../../resources/Resources';

import { LanguageLocales } from '../../../constants';
import { useLanguage } from '../../../hooks/useLanguage';
import Label from '../../Label';
import Select, { type SelectProps } from '../../Select';
import { getResources } from '../resourceHelper';

import styles from './styles.module.scss';

export interface FilterSortProps extends SelectProps {
  /** Texts if overriding SOT */
  resources?: Partial<HNDesignsystemFilter>;
}

const FilterSort: React.FC<FilterSortProps> = props => {
  const { children, resources } = props;

  const { language } = useLanguage<LanguageLocales>(LanguageLocales.NORWEGIAN);
  const defaultResources = getResources(language);

  const mergedResources = {
    ...defaultResources,
    ...resources,
  };

  return (
    <Select
      {...props}
      label={<Label labelTexts={[{ text: `${mergedResources.sortLabel}:`, type: 'subdued' }]} />}
      labelClassName={styles['select__label']}
      className={styles['select']}
      wrapperClassName={styles['select__wrapper']}
    >
      {children}
    </Select>
  );
};

export default FilterSort;
