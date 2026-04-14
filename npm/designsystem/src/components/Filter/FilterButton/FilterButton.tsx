import { useRef } from 'react';

import classNames from 'classnames';

import { IconSize, LanguageLocales } from '../../../constants';
import { useLanguage } from '../../../hooks/useLanguage';
import { usePseudoClasses } from '../../../hooks/usePseudoClasses';
import Icon from '../../Icon';
import Filter from '../../Icons/Filter';
import { getResources } from '../resourcesMock';

import styles from './styles.module.scss';

export interface FilterButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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

  const buttonRef = useRef<HTMLButtonElement>(null);
  const { isHovered } = usePseudoClasses(buttonRef);

  return (
    <button {...props} className={styles['filter-button']} ref={buttonRef}>
      <span
        className={classNames(styles['filter-button__inner'], {
          [styles['filter-button__inner--hovered']]: isHovered,
        })}
      >
        <Icon svgIcon={Filter} isHovered={isHovered} size={IconSize.XSmall} />
        <span className={styles['filter-button__text']}>{mergedResources.filterbutton_text}</span>
      </span>
    </button>
  );
};

export default FilterButton;
