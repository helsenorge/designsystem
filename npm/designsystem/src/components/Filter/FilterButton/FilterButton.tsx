import type { ButtonProps } from '../../Button';

import { LanguageLocales } from '../../../constants';
import { useLanguage } from '../../../hooks/useLanguage';
import Button from '../../Button';
import Icon from '../../Icon';
import Filter from '../../Icons/Filter';
import { getResources } from '../resourcesMock';

import styles from './styles.module.scss';

export interface FilterButtonProps extends ButtonProps {
  /** Texts if overriding SOT */
  resources?: Partial<unknown>;
}

const FilterButton: React.FC<FilterButtonProps> = props => {
  const { resources } = props;

  const { language } = useLanguage<LanguageLocales>(LanguageLocales.NORWEGIAN);
  const defaultResources = getResources(language);

  const mergedResources = {
    ...defaultResources,
    ...resources,
  };

  return (
    <Button {...props} variant="fill" className={styles['filter-button__inner']} wrapperClassName={styles['filter-button__wrapper']}>
      <Icon svgIcon={Filter} />
      {mergedResources.filterbutton_text}
    </Button>
  );
};

export default FilterButton;
