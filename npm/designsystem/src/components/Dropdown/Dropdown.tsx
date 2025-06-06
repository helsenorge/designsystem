import React, { useEffect, useRef, useState } from 'react';

import classNames from 'classnames';

import {
  AnalyticsId,
  IconSize,
  KeyboardEventKey,
  LanguageLocales,
  ZIndex,
  theme,
  useHover,
  useKeyboardEvent,
  useOutsideEvent,
  useToggle,
  useUuid,
} from '../..';
import { HNDesignsystemDropdown } from '../../resources/Resources';
import { isComponent } from '../../utils/component';
import { useLanguage } from '../../utils/language';
import { mergeRefs } from '../../utils/refs';
import Button from '../Button';
import Checkbox, { CheckboxProps } from '../Checkbox';
import Icon from '../Icon';
import PlusSmall from '../Icons/PlusSmall';
import RadioButton, { RadioButtonProps } from '../RadioButton';
import { getResources } from './resourceHelper';

import styles from './styles.module.scss';

export enum DropdownOnColor {
  onwhite = 'onwhite',
  ongrey = 'ongrey',
  onblueberry = 'onblueberry',
  oncherry = 'oncherry',
}

export interface DropdownProps {
  /** Label for dropdown. Visible for screen readers  */
  label: string;
  /** Text on the trigger button that opens the dropdown */
  placeholder: string;
  /** Sets the dropdown content */
  children: React.ReactNode;
  /** @deprecated Close button text */
  closeText?: string;
  /** Minimum width for the dropdown in pixels. Does not affect trigger button */
  dropdownMinWidth?: number;
  /** No close button */
  noCloseButton?: boolean;
  /** Called when dropdown is open/closed */
  onToggle?: (isOpen: boolean) => void;
  /** Whether the dropdown is open or not */
  open?: boolean;
  /** Changes the visuals of the dropdown */
  onColor?: keyof typeof DropdownOnColor;
  /** Makes the background of the trigger transparent */
  transparent?: boolean;
  /** Makes the width of the full component adjust to its parent */
  fluid?: boolean;
  /** Makes the dropdown disabled */
  disabled?: boolean;
  /** Sets the data-testid attribute on the dropdown button */
  testId?: string;
  /** Overrides the default z-index of the DropDownContent */
  zIndex?: number;
  /** Resources for component */
  resources?: Partial<HNDesignsystemDropdown>;
}

const Dropdown: React.FC<DropdownProps> = props => {
  const {
    label,
    placeholder,
    noCloseButton = false,
    onToggle,
    dropdownMinWidth,
    open = false,
    children,
    onColor = DropdownOnColor.onwhite,
    transparent = false,
    fluid = false,
    testId,
    disabled,
    zIndex = ZIndex.PopOver,
    resources,
  } = props;
  const dropdownRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLUListElement>(null);
  const { hoverRef: buttonRef, isHovered } = useHover<HTMLButtonElement>();
  const openedByKeyboard = useRef<boolean>(false);
  const { value: isOpen, toggleValue: toggleIsOpen } = useToggle(!disabled && open, onToggle);
  const inputRefList = useRef(React.Children.map(children, () => React.createRef<HTMLElement>()));
  const [currentIndex, setCurrentIndex] = useState<number>();
  const labelId = useUuid();
  const toggleLabelId = useUuid();
  const optionIdPrefix = useUuid();
  const { language } = useLanguage<LanguageLocales>(LanguageLocales.NORWEGIAN);
  const defaultResources = getResources(language);

  const mergedResources: HNDesignsystemDropdown = {
    ...defaultResources,
    ...resources,
    closeText: props.closeText ?? resources?.closeText ?? defaultResources.closeText,
  };

  const handleOpen = (isKeyboard: boolean): void => {
    openedByKeyboard.current = isKeyboard;
    toggleIsOpen();
  };

  const handleClose = (): void => {
    toggleIsOpen();
    buttonRef.current?.focus();
  };

  useEffect(() => {
    if (isOpen && openedByKeyboard.current) {
      inputRefList.current
        ?.find((inputRef, index) => {
          if (inputRef.current && !inputRef.current.hasAttribute('disabled')) {
            setCurrentIndex(index);
            return true;
          }
        })
        ?.current?.focus();
    }
  }, [isOpen]);

  const handleKeyboardNavigation = (event: KeyboardEvent): void => {
    if (!inputRefList.current) {
      return;
    }

    if (event.key === KeyboardEventKey.Escape) {
      if (isOpen) handleClose();
      return;
    }

    if (!isOpen) {
      handleOpen(true);
      event.preventDefault();
      return;
    }

    const index = inputRefList.current.findIndex(x => x.current === event.target);
    let nextIndex = index;

    if (event.key === KeyboardEventKey.Home) {
      nextIndex = 0;
    } else if (event.key === KeyboardEventKey.End) {
      nextIndex = inputRefList.current.length - 1;
    } else if (event.key === KeyboardEventKey.ArrowDown && index < inputRefList.current.length - 1) {
      nextIndex = index + 1;
    } else if (event.key === KeyboardEventKey.ArrowUp && index > 0) {
      nextIndex = index - 1;
    } else if (event.key === KeyboardEventKey.Enter && index !== -1) {
      nextIndex = index;
    }

    if (nextIndex !== -1 && event.key !== KeyboardEventKey.Space) {
      event.preventDefault();

      inputRefList.current[nextIndex].current?.focus();
      setCurrentIndex(nextIndex);
    }
  };

  useKeyboardEvent(dropdownRef, handleKeyboardNavigation, [
    KeyboardEventKey.ArrowDown,
    KeyboardEventKey.ArrowUp,
    KeyboardEventKey.End,
    KeyboardEventKey.Enter,
    KeyboardEventKey.Escape,
    KeyboardEventKey.Home,
    KeyboardEventKey.Space,
  ]);

  useOutsideEvent(dropdownRef, () => isOpen && handleClose());

  const toggleClasses = classNames(
    styles.dropdown__toggle,
    !disabled && {
      [styles['dropdown__toggle--on-white']]: onColor === DropdownOnColor.onwhite,
      [styles['dropdown__toggle--on-grey']]: onColor === DropdownOnColor.ongrey,
      [styles['dropdown__toggle--on-blueberry']]: onColor === DropdownOnColor.onblueberry,
      [styles['dropdown__toggle--on-cherry']]: onColor === DropdownOnColor.oncherry,
      [styles['dropdown__toggle--transparent']]: transparent,
      [styles['dropdown__toggle--fluid']]: fluid,
      [styles['dropdown__toggle--open']]: isOpen,
    }
  );

  const contentClasses = classNames(styles.dropdown__content, isOpen && styles['dropdown__content--open']);

  const renderChildren = React.Children.map(children, (child, index) => {
    const role = isComponent<RadioButtonProps>(child, RadioButton)
      ? 'menuitemradio'
      : isComponent<CheckboxProps>(child, Checkbox)
        ? 'menuitemcheckbox'
        : 'menuitem';

    return (
      <li className={styles.dropdown__input} role={role} id={`${optionIdPrefix}-${index}`}>
        {React.isValidElement(child) && inputRefList.current && inputRefList.current[index]
          ? React.cloneElement(child as React.ReactElement, { ref: mergeRefs([child.props.ref, inputRefList.current[index]]) })
          : child}
      </li>
    );
  });

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <span id={labelId} className={styles.dropdown__label}>
        {label}
      </span>
      <button
        type="button"
        onClick={(): false | void => handleOpen(false)}
        className={toggleClasses}
        ref={buttonRef}
        data-testid={testId}
        data-analyticsid={AnalyticsId.Dropdown}
        disabled={disabled}
        aria-labelledby={toggleLabelId}
        aria-haspopup="menu"
        aria-expanded={isOpen}
      >
        <span id={toggleLabelId} className={styles.dropdown__toggle__label}>
          {placeholder}
        </span>
        <Icon
          color={disabled ? theme.palette.neutral700 : theme.palette.blueberry600}
          svgIcon={PlusSmall}
          className={styles.dropdown__icon}
          isHovered={!disabled && isHovered}
          size={IconSize.XSmall}
        />
      </button>
      <div className={contentClasses} style={{ width: fluid ? '100%' : `auto`, minWidth: dropdownMinWidth ?? 'auto', zIndex: zIndex }}>
        <ul
          className={styles.dropdown__options}
          role="menu"
          aria-labelledby={labelId}
          tabIndex={-1}
          aria-activedescendant={typeof currentIndex !== 'undefined' ? `${optionIdPrefix}-${currentIndex}` : undefined}
          ref={optionsRef}
        >
          {renderChildren}
        </ul>
        {!noCloseButton && (
          <div className={styles.dropdown__close}>
            <Button onClick={handleClose} aria-expanded={isOpen}>
              {mergedResources.closeText}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
