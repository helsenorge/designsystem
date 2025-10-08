import React, { useEffect, useRef, useId, ComponentType } from 'react';

import classNames from 'classnames';
import { clamp } from 'motion/react';

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
} from '../..';
import { Radio, RadioProps } from './Radio';
import { getResources } from './resourceHelper';
import { useIsMobileBreakpoint } from '../../hooks/useIsMobileBreakpoint';
import { HNDesignsystemDropdown } from '../../resources/Resources';
import { isComponent } from '../../utils/component';
import { useLanguage } from '../../utils/language';
import { mergeRefs } from '../../utils/refs';
import Button from '../Button';
import Icon, { SvgIcon } from '../Icon';
import ChevronDown from '../Icons/ChevronDown';
import ChevronUp from '../Icons/ChevronUp';
import { IconName } from '../Icons/IconNames';
import PlusSmall from '../Icons/PlusSmall';
import LazyIcon from '../LazyIcon';
import { RadioGroup } from './Radio/RadioGroup';

import styles from './styles.module.scss';

type DropdownVariants = 'fill' | 'transparent' | 'borderless';

// TODO: Sjekk hva som skjer hvis vertikalen sender inn noe annet enn Radio/checkboxes
// TODO: Radio blir kanskje ikke et godt navn lenger
export interface DropdownProps {
  // TODO: et annet navn enn label? Er teknisk sett bare en span
  /** Label for dropdown. Visible for screen readers  */
  label: string;
  /** Text on the trigger button that opens the dropdown */
  placeholder: string;
  /** Sets the dropdown content */
  children: React.ReactNode;
  /** Minimum width for the dropdown in pixels. Does not affect trigger button. */
  dropdownMinWidth?: number;
  /** Minimum width for the trigger in pixels. Does not apply for borderless variant */
  triggerMinWidth?: number;
  /** No close button */
  noCloseButton?: boolean;
  /** Called when dropdown is open/closed */
  onToggle?: (isOpen: boolean) => void;
  /** Whether the dropdown is open or not */
  open?: boolean;
  /** Makes the dropdown disabled */
  disabled?: boolean;
  /** Sets the data-testid attribute on the dropdown button */
  testId?: string;
  /** Overrides the default z-index of the DropDownContent */
  zIndex?: number;
  /** Resources for component */
  resources?: Partial<HNDesignsystemDropdown>;
  /** Adds an icon to the trigger */
  svgIcon?: SvgIcon | IconName;
  /** Sets the visual variant of the Dropdown */
  variant?: DropdownVariants;
}

export const DropdownBase: React.FC<DropdownProps> = props => {
  const {
    label,
    placeholder,
    noCloseButton = false,
    onToggle,
    dropdownMinWidth,
    triggerMinWidth,
    open = false,
    children,
    testId,
    disabled,
    zIndex = ZIndex.PopOver,
    resources,
    svgIcon,
    variant = 'fill',
  } = props;

  const dropdownRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLUListElement>(null);
  const childrenRefList = useRef(React.Children.map(children, () => React.createRef<HTMLElement>()));
  const { hoverRef: buttonRef, isHovered } = useHover<HTMLButtonElement>();
  const openedByKeyboard = useRef<boolean>(false);
  const { value: isOpen, toggleValue: toggleIsOpen } = useToggle(!disabled && open, onToggle);
  const isMobile = useIsMobileBreakpoint();
  const triggerActualMinWidth = typeof triggerMinWidth != 'undefined' ? triggerMinWidth : isMobile ? 225 : 240;
  const triggerMinWidthLimit = isMobile ? 96 : 112;
  const maxWidth = isMobile ? 384 : 400;
  const labelId = useId();
  const toggleLabelId = useId();
  const optionIdPrefix = useId();
  const contentId = useId();
  const iconProps = {
    className: styles['dropdown__left-icon'],
    color: 'var(--core-color-blueberry-600)',
    size: IconSize.XSmall,
    isHovered: isHovered,
  };

  // TODO: Hm dobbelt opp
  const isSingleSelect = React.Children.toArray(children).every(
    child => React.isValidElement(child) && isComponent<RadioProps>(child, Radio)
  );
  const [selectedValue, setSelectedValue] = React.useState<string | undefined>(undefined);

  const { language } = useLanguage<LanguageLocales>(LanguageLocales.NORWEGIAN);
  const defaultResources = getResources(language);
  const mergedResources: HNDesignsystemDropdown = {
    ...defaultResources,
    ...resources,
  };

  const toggleClasses = classNames(styles.dropdown__toggle, {
    [styles['dropdown__toggle--open']]: isOpen && !disabled,
    [styles['dropdown__toggle--with-icon']]: typeof svgIcon !== 'undefined',
    [styles['dropdown__toggle--transparent']]: variant === 'transparent',
    [styles['dropdown__toggle--borderless']]: variant === 'borderless',
  });
  const contentClasses = classNames(styles.dropdown__content, isOpen && styles['dropdown__content--open']);

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
      const firstEnabled = childrenRefList.current?.find(r => r.current && !r.current.hasAttribute('disabled'));
      firstEnabled?.current?.focus();
      openedByKeyboard.current = false;
    }
  }, [isOpen]);

  const focusByIndex = (nextIndex: number): void => {
    childrenRefList.current?.[nextIndex]?.current?.focus();
  };

  const isListNavKey = (key: string): boolean =>
    key === KeyboardEventKey.ArrowDown || key === KeyboardEventKey.ArrowUp || key === KeyboardEventKey.Home || key === KeyboardEventKey.End;

  const handleKeyboardNavigation = (event: KeyboardEvent): void => {
    if (!childrenRefList.current) return;

    const key = event.key as KeyboardEventKey;

    if (key === KeyboardEventKey.Escape) {
      if (isOpen) {
        event.preventDefault();
        handleClose();
      }
      return;
    }

    if (!isOpen) {
      if (isListNavKey(key)) {
        event.preventDefault();
        handleOpen(true);
      }
      return;
    }

    if (!isListNavKey(key)) {
      return;
    }

    const index = childrenRefList.current.findIndex(x => x.current === (event.target as HTMLElement));
    let nextIndex = index;

    if (key === KeyboardEventKey.Home) {
      nextIndex = 0;
    } else if (key === KeyboardEventKey.End) {
      nextIndex = childrenRefList.current.length - 1;
    } else if (key === KeyboardEventKey.ArrowDown && index < childrenRefList.current.length - 1) {
      nextIndex = index + 1;
    } else if (key === KeyboardEventKey.ArrowUp && index > 0) {
      nextIndex = index - 1;
    }

    if (nextIndex !== -1) {
      event.preventDefault();
      focusByIndex(nextIndex);
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

  const renderChildren = React.Children.map(children, (child, index) => {
    // TODO: Sjekk checkbox og så vi er strenge
    const isRadio = React.isValidElement(child) && isComponent<RadioProps>(child, Radio);

    // TODO: Burde kanskje være required av Radio
    const autoValue = `${optionIdPrefix}-value-${index}`;
    const needsAutoValue = isRadio && (child as any).props && ((child as any).props.value == null || (child as any).props.value === '');

    // TODO: : child skal vi vel ikke gjøre lenger? Tillate alle children
    return (
      <li className={styles['dropdown__list-item']} id={`${optionIdPrefix}-${index}`}>
        {React.isValidElement(child) && childrenRefList.current && childrenRefList.current[index]
          ? React.cloneElement(child as React.ReactElement<any>, {
              ref: mergeRefs([child.props.ref, childrenRefList.current[index]]),
              ...(needsAutoValue ? { value: autoValue } : null),
            })
          : child}
      </li>
    );
  });

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      {/* TODO: Trenger vi denne? */}
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
        aria-haspopup={true}
        aria-controls={contentId}
        aria-expanded={isOpen}
        style={{
          // TODO: triggerMinWidthLimit skal kanskje gjelde for listen og?
          minWidth: variant !== 'borderless' ? clamp(triggerMinWidthLimit, maxWidth, triggerActualMinWidth) : triggerMinWidthLimit,
        }}
      >
        {svgIcon && (
          <>{typeof svgIcon === 'string' ? <LazyIcon {...iconProps} iconName={svgIcon} /> : <Icon {...iconProps} svgIcon={svgIcon} />}</>
        )}
        <span id={toggleLabelId} className={styles.dropdown__toggle__label}>
          {placeholder}
        </span>
        <Icon
          // TODO: Sette farge i css?
          color={disabled ? theme.palette.neutral700 : theme.palette.blueberry600}
          svgIcon={!isSingleSelect ? PlusSmall : isOpen ? ChevronUp : ChevronDown}
          className={styles['dropdown__right-icon']}
          isHovered={!disabled && isHovered}
          size={IconSize.XSmall}
        />
      </button>
      <div
        id={contentId}
        className={contentClasses}
        style={{ minWidth: dropdownMinWidth ? clamp(0, maxWidth, dropdownMinWidth) : 'auto', zIndex: zIndex }}
      >
        {/* TODO: Sjekk role for checkbox/falske radio/navigation scenarioene */}
        <ul className={styles.dropdown__options} role="group" aria-labelledby={labelId} tabIndex={-1} ref={optionsRef}>
          {isSingleSelect ? (
            <RadioGroup name={label} value={selectedValue} onValueChange={v => setSelectedValue(v)}>
              {renderChildren}
            </RadioGroup>
          ) : (
            renderChildren
          )}
        </ul>
        {!isSingleSelect && !noCloseButton && (
          <div className={styles.dropdown__close}>
            <Button onClick={handleClose}>{mergedResources.closeText}</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export interface DropdownCompound extends React.FC<DropdownProps> {
  Radio: ComponentType<RadioProps>;
}
const Dropdown = DropdownBase as DropdownCompound;
Dropdown.Radio = Radio;
DropdownBase.displayName = 'Dropdown';

export default Dropdown;
