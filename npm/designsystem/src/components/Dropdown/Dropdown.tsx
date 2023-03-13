import React, { useRef, useState } from 'react';

import classNames from 'classnames';

import {
  AnalyticsId,
  IconSize,
  KeyboardEventKey,
  theme,
  useHover,
  useKeyboardEvent,
  useOutsideEvent,
  useSize,
  useToggle,
  useUuid,
} from '../..';
import Button from '../Button';
import Icon from '../Icons';
import PlusSmall from '../Icons/PlusSmall';

import styles from './styles.module.scss';

export enum DropdownMode {
  onwhite = 'onwhite',
  ongrey = 'ongrey',
  onblueberry = 'onblueberry',
  oncherry = 'oncherry',
}

export interface DropdownProps {
  /** Label for dropdown. Synlig for skjermlesere.  */
  label: string;
  /** Tekst på knappen som åpner dropdownen */
  placeholder: string;
  /** Sets the dropdown content */
  children: React.ReactNode;
  /** Close button text */
  closeText?: string;
  /** No close button */
  noCloseButton?: boolean;
  /** Called when dropdown is open/closed. */
  onToggle?: (isOpen: boolean) => void;
  /** Om dropdown er åpen */
  open?: boolean;
  /** Changes the visuals of the dropdown */
  mode?: keyof typeof DropdownMode;
  /** Makes the background transparent */
  transparent?: boolean;
  /** Makes the background transparent */
  fluid?: boolean;
  /** Makes the dropdown disabled */
  disabled?: boolean;
  /** Sets the data-testid attribute on the dropdown button. */
  testId?: string;
}

const Dropdown: React.FC<DropdownProps> = props => {
  const {
    label,
    placeholder,
    closeText = 'Lukk',
    noCloseButton = false,
    onToggle,
    open = false,
    children,
    mode = DropdownMode.onwhite,
    transparent = false,
    fluid = false,
    testId,
    disabled,
  } = props;
  const dropdownRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLUListElement>(null);
  const { hoverRef: buttonRef, isHovered } = useHover<HTMLButtonElement>();
  const { value: isOpen, toggleValue: toggleIsOpen } = useToggle(!disabled && open, onToggle);
  const inputRefList = useRef(React.Children.map(children, () => React.createRef<HTMLElement>()));
  const [currentIndex, setCurrentIndex] = useState<number>();
  const { width: buttonWidth } = useSize(buttonRef) || {};
  const labelId = useUuid();
  const toggleLabelId = useUuid();
  const optionIdPrefix = useUuid();

  const handleOpen = () => {
    toggleIsOpen();
    optionsRef.current?.focus();
  };

  const handleClose = () => {
    toggleIsOpen();
    buttonRef.current?.focus();
  };

  const handleKeyboardNavigation = (event: KeyboardEvent) => {
    event.preventDefault();

    if (!inputRefList.current) {
      return;
    }

    if (!isOpen) {
      handleOpen();
      return;
    } else if (event.key === KeyboardEventKey.Escape && isOpen) {
      handleClose();
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
    if (nextIndex !== -1) {
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
  ]);

  useOutsideEvent(dropdownRef, () => isOpen && handleClose());

  const toggleClasses = classNames(
    styles.dropdown__toggle,
    !disabled && {
      [styles['dropdown__toggle--on-white']]: mode === DropdownMode.onwhite,
      [styles['dropdown__toggle--on-grey']]: mode === DropdownMode.ongrey,
      [styles['dropdown__toggle--on-blueberry']]: mode === DropdownMode.onblueberry,
      [styles['dropdown__toggle--on-cherry']]: mode === DropdownMode.oncherry,
      [styles['dropdown__toggle--transparent']]: transparent,
      [styles['dropdown__toggle--fluid']]: fluid,
      [styles['dropdown__toggle--open']]: isOpen,
    }
  );

  const contentClasses = classNames(styles.dropdown__content, isOpen && styles['dropdown__content--open']);

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <span id={labelId} className={styles.dropdown__label}>
        {label}
      </span>
      <button
        type="button"
        onClick={() => !isOpen && handleOpen()}
        className={toggleClasses}
        ref={buttonRef}
        data-testid={testId}
        data-analyticsid={AnalyticsId.Dropdown}
        disabled={disabled}
        aria-labelledby={toggleLabelId}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span id={toggleLabelId} className={styles.dropdown__toggle__label}>
          {placeholder}
        </span>
        <Icon
          color={disabled ? theme.palette.neutral500 : theme.palette.blueberry600}
          svgIcon={PlusSmall}
          className={styles.dropdown__icon}
          isHovered={isHovered}
          size={IconSize.XSmall}
        />
      </button>
      <div className={contentClasses} style={{ width: fluid ? '100%' : `${buttonWidth}px` }}>
        <ul
          className={styles.dropdown__options}
          role="listbox"
          aria-labelledby={labelId}
          tabIndex={-1}
          aria-activedescendant={typeof currentIndex !== 'undefined' ? `${optionIdPrefix}-${currentIndex}` : undefined}
          ref={optionsRef}
        >
          {React.Children.map(children, (child, index) => (
            <li className={styles.dropdown__input} role="option" id={`${optionIdPrefix}-${index}`}>
              {React.cloneElement(child as React.ReactElement, { ref: inputRefList.current?.[index] })}
            </li>
          ))}
        </ul>
        {!noCloseButton && (
          <div className={styles.dropdown__close}>
            <Button onClick={handleClose} fluid aria-expanded={isOpen}>
              {closeText}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
