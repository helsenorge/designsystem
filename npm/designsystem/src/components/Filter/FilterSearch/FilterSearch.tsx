import { useRef } from 'react';

import { IconSize, LanguageLocales } from '../../../constants';
import { useLanguage } from '../../../hooks/useLanguage';
import { usePseudoClasses } from '../../../hooks/usePseudoClasses';
import Icon from '../../Icon';
import Search from '../../Icons/Search';
import X from '../../Icons/X';
import { getResources } from '../resourcesMock';

import styles from './styles.module.scss';

export interface FilterSearchProps {
  /** The value given by the user in the input field */
  value: string | undefined;
  /** Props for the input field */
  inputProps?: Pick<
    React.InputHTMLAttributes<HTMLInputElement>,
    'onBlur' | 'onClick' | 'onChange' | 'name' | 'aria-describedby' | 'onBlur' | 'autoComplete'
  >;
  /** Props for the search button */
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  /** Props for the clear button */
  clearButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  /** Texts if overriding SOT */
  resources?: Partial<unknown>;
}

const FilterSearch: React.FC<FilterSearchProps> = props => {
  const { value, resources, inputProps, buttonProps, clearButtonProps } = props;

  const buttonRef = useRef<HTMLButtonElement>(null);
  const { isHovered: isButtonHovered } = usePseudoClasses(buttonRef);
  const clearButtonRef = useRef<HTMLButtonElement>(null);
  const { isHovered: isClearButtonHovered } = usePseudoClasses(clearButtonRef);

  const { language } = useLanguage<LanguageLocales>(LanguageLocales.NORWEGIAN);
  const defaultResources = getResources(language);

  const mergedResources = {
    ...defaultResources,
    ...resources,
  };

  const inputHasValue = !!value;

  return (
    <div className={styles['filter-search__wrapper']}>
      <input
        {...inputProps}
        value={value}
        className={styles['filter-search__input']}
        placeholder={mergedResources.filtersearch_placeholder}
      />
      {inputHasValue && (
        <button
          type="button"
          aria-label={mergedResources.filtersearch_button_arialabel}
          {...clearButtonProps}
          ref={clearButtonRef}
          className={styles['filter-search__clear-button']}
        >
          <Icon svgIcon={X} size={IconSize.XXSmall} isHovered={isClearButtonHovered} />
        </button>
      )}
      <button
        type={'button'}
        aria-label={mergedResources.filtersearch_button_arialabel}
        {...buttonProps}
        ref={buttonRef}
        className={styles['filter-search__search-button']}
      >
        <Icon svgIcon={Search} size={IconSize.XSmall} isHovered={isButtonHovered} />
      </button>
    </div>
  );
};

export default FilterSearch;
