import { useRef } from 'react';

import classNames from 'classnames';

import type { HNDesignsystemFilter } from '../../../resources/Resources';

import { IconSize, LanguageLocales } from '../../../constants';
import { useIsMobileBreakpoint } from '../../../hooks/useIsMobileBreakpoint';
import { useLanguage } from '../../../hooks/useLanguage';
import { usePseudoClasses } from '../../../hooks/usePseudoClasses';
import { mergeRefs } from '../../../utils/refs';
import Icon from '../../Icon';
import Search from '../../Icons/Search';
import X from '../../Icons/X';
import { getResources } from '../resourceHelper';

import styles from './styles.module.scss';

export interface FilterSearchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className' | 'value' | 'onChange'> {
  /** Adds custom classes to the component */
  className?: string;
  /** The value given by the user in the input field */
  value: string | undefined;
  /** onChange handler for the input field */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  /** Props for the search button */
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  /** Props for the clear button */
  clearButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  /** Texts if overriding SOT */
  resources?: Partial<HNDesignsystemFilter>;
  /** Ref passed to the input element */
  ref?: React.Ref<HTMLInputElement | null>;
}

const FilterSearch: React.FC<FilterSearchProps> = props => {
  const { className, value, onChange, resources, buttonProps, clearButtonProps, ref, ...inputProps } = props;

  const inputRef = useRef<HTMLInputElement>(null);
  const inputWrapperRef = useRef<HTMLLabelElement>(null);
  const { isHovered: isWrapperHovered } = usePseudoClasses(inputWrapperRef);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { isHovered: isButtonHovered } = usePseudoClasses(buttonRef);
  const clearButtonRef = useRef<HTMLButtonElement>(null);
  const { isHovered: isClearButtonHovered } = usePseudoClasses(clearButtonRef);

  const isMobile = useIsMobileBreakpoint();

  const { language } = useLanguage<LanguageLocales>(LanguageLocales.NORWEGIAN);
  const defaultResources = getResources(language);

  const mergedResources = {
    ...defaultResources,
    ...resources,
  };

  const inputHasValue = !!value;

  return (
    <div className={classNames(styles['filter-search__wrapper'], className)}>
      <label className={styles['filter-search__input-wrapper']} ref={inputWrapperRef}>
        <span className={styles['filter-search__input__label']}>{inputProps['aria-label'] ?? mergedResources.searchPlaceholder}</span>
        <input
          {...inputProps}
          ref={mergeRefs([inputRef, ref])}
          value={value}
          onChange={onChange}
          className={classNames(styles['filter-search__input'], {
            [styles['filter-search__input--hovered']]: isWrapperHovered,
          })}
          placeholder={mergedResources.searchPlaceholder}
        />
      </label>
      {inputHasValue && (
        <button
          type="button"
          aria-label={mergedResources.searchClearButtonAriaLabel}
          disabled={inputProps.disabled}
          {...clearButtonProps}
          onClick={e => {
            clearButtonProps?.onClick?.(e);
            inputRef.current?.focus();
          }}
          ref={clearButtonRef}
          className={classNames(styles['filter-search__clear-button'], clearButtonProps?.className)}
        >
          <Icon svgIcon={X} size={IconSize.XXSmall} isHovered={!isMobile && isClearButtonHovered} />
        </button>
      )}
      <button
        type={'button'}
        aria-label={mergedResources.searchButtonAriaLabel}
        disabled={inputProps.disabled}
        {...buttonProps}
        ref={buttonRef}
        className={classNames(styles['filter-search__search-button'], buttonProps?.className)}
      >
        <div className={classNames(styles['filter-search__search-button--inner'])}>
          <Icon svgIcon={Search} size={isMobile ? IconSize.XXSmall : IconSize.XSmall} isHovered={!inputProps.disabled && isButtonHovered} />
        </div>
      </button>
    </div>
  );
};

export default FilterSearch;
