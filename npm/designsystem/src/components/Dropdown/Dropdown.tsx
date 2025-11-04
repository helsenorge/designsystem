import React, { useEffect, useRef, useId, ComponentType } from 'react';

import { autoUpdate, offset, shift, size, useFloating, flip } from '@floating-ui/react';
import classNames from 'classnames';
import { clamp } from 'motion/react';

import {
  AnalyticsId,
  IconSize,
  KeyboardEventKey,
  LanguageLocales,
  ZIndex,
  usePseudoClasses,
  useKeyboardEvent,
  useOutsideEvent,
  useToggle,
} from '../..';
import { getResources } from './resourceHelper';
import { SingleSelectItem, SingleSelectItemProps } from './SingleSelect/SingleSelectItem';
import { useIsMobileBreakpoint } from '../../hooks/useIsMobileBreakpoint';
import { HNDesignsystemDropdown } from '../../resources/Resources';
import { isComponent } from '../../utils/component';
import { useLanguage } from '../../utils/language';
import { mergeRefs } from '../../utils/refs';
import Button from '../Button';
import Checkbox, { CheckboxProps } from '../Checkbox';
import Icon, { SvgIcon } from '../Icon';
import ChevronDown from '../Icons/ChevronDown';
import ChevronUp from '../Icons/ChevronUp';
import { IconName } from '../Icons/IconNames';
import PlusSmall from '../Icons/PlusSmall';
import Label, { LabelProps } from '../Label';
import LazyIcon from '../LazyIcon';
import { SingleSelect } from './SingleSelect/SingleSelect';

import styles from './styles.module.scss';

type DropdownVariants = 'fill' | 'transparent' | 'borderless';

export interface DropdownProps {
  /** Text on the trigger button that opens the dropdown */
  triggerText: string;
  /** Sets the dropdown content */
  children: React.ReactNode;
  /** Minimum width for the dropdown in pixels. Does not affect trigger button. */
  dropdownMinWidth?: number;
  /** Minimum width for the trigger in pixels. Does not apply for borderless variant */
  triggerMinWidth?: number;
  /** Disables rendring of the close button in the list */
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
    triggerText,
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
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const { isHovered } = usePseudoClasses<HTMLButtonElement>(buttonRef);
  const openedByKeyboard = useRef<boolean>(false);
  const { value: isOpen, toggleValue: toggleIsOpen } = useToggle(!disabled && open, onToggle);
  const isMobile = useIsMobileBreakpoint();
  const triggerActualMinWidth = variant !== 'borderless' && typeof triggerMinWidth != 'undefined' ? `${triggerMinWidth}px` : 'auto';
  const triggerMinWidthLimit = isMobile ? 96 : 112;
  const dropdownFloatingPadding = 15;
  const maxWidth = isMobile ? 384 : 400;
  const toggleTextId = useId();
  const optionIdPrefix = useId();
  const contentId = useId();
  const leftIconProps = {
    className: styles['dropdown__left-icon'],
    size: IconSize.XSmall,
    isHovered: !disabled && isHovered,
  };

  const isSingleSelect = React.Children.toArray(children).every(
    child => React.isValidElement(child) && isComponent<SingleSelectItemProps>(child, SingleSelectItem)
  );
  const isMultiSelect = React.Children.toArray(children).every(
    child => React.isValidElement(child) && isComponent<CheckboxProps>(child, Checkbox)
  );

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
  const listItemClasses = classNames(styles['dropdown__list-item'], { [styles['dropdown__list-item--single-select']]: isSingleSelect });

  const { refs, floatingStyles } = useFloating({
    strategy: 'fixed',
    placement: 'bottom-start',
    middleware: [
      offset(8),
      // Hvis det ikke er plass på høyre side flipper vi dropdownlisten fra bottom-start til bottom-end
      flip({ mainAxis: false, fallbackPlacements: ['bottom-end'], padding: dropdownFloatingPadding }),
      // Shift fungerer som en fallback for flip og unngår at availableWidth ikke oppdaterer seg ved skjermbreddeendring
      shift({ padding: dropdownFloatingPadding }),
      // Hvis det ikke er plass på noen av sidene krymper vi bredden på listen med size
      size({
        padding: dropdownFloatingPadding,
        apply({ availableWidth, availableHeight, elements, rects }) {
          const triggerW = rects.reference.width;
          const minProp = typeof dropdownMinWidth !== 'undefined' ? clamp(0, maxWidth, dropdownMinWidth) : 0;
          const targetW = Math.max(triggerW, minProp);

          Object.assign(elements.floating.style, {
            maxWidth: `${Math.min(targetW, availableWidth)}px`,
            maxHeight: `${availableHeight}px`,
            overflowY: 'auto',
            overflowX: 'hidden',
          });
        },
      }),
    ],
    whileElementsMounted: isOpen ? autoUpdate : undefined,
  });

  const handleOpen = (isKeyboard: boolean): void => {
    openedByKeyboard.current = isKeyboard;
    toggleIsOpen();
  };

  const handleClose = (): void => {
    if (!isOpen) return;

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
    return (
      <li className={listItemClasses} id={`${optionIdPrefix}-${index}`}>
        {React.isValidElement(child) && childrenRefList.current && childrenRefList.current[index]
          ? ((): React.ReactElement => {
              const baseProps: { ref: React.Ref<HTMLElement> } = {
                ref: mergeRefs([child.props.ref, childrenRefList.current[index]]),
              };

              if (isMultiSelect) {
                const label = (child.props as CheckboxProps).label as React.ReactNode;
                if (React.isValidElement(label) && isComponent<LabelProps>(label, Label)) {
                  return React.cloneElement(child as React.ReactElement<CheckboxProps>, {
                    ...baseProps,
                    label: React.cloneElement(label, {
                      labelClassName: classNames((label.props as LabelProps)?.labelClassName, styles['dropdown__multiselect-item']),
                    }),
                  });
                }
              }

              return React.cloneElement(child as React.ReactElement<Record<string, unknown>>, baseProps);
            })()
          : child}
      </li>
    );
  });

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <button
        type="button"
        onClick={(): false | void => handleOpen(false)}
        className={toggleClasses}
        ref={mergeRefs([buttonRef, refs.setReference])}
        data-testid={testId}
        data-analyticsid={AnalyticsId.Dropdown}
        disabled={disabled}
        aria-labelledby={toggleTextId}
        aria-haspopup={true}
        aria-controls={contentId}
        aria-expanded={isOpen}
        style={{
          width: triggerActualMinWidth,
          maxWidth: '100%',
          minWidth: `${triggerMinWidthLimit}px`,
        }}
      >
        {svgIcon && (
          <>
            {typeof svgIcon === 'string' ? (
              <LazyIcon {...leftIconProps} iconName={svgIcon} />
            ) : (
              <Icon {...leftIconProps} svgIcon={svgIcon} />
            )}
          </>
        )}
        <span id={toggleTextId} className={styles.dropdown__toggle__text}>
          {triggerText}
        </span>
        <Icon
          svgIcon={!isSingleSelect ? PlusSmall : isOpen ? ChevronUp : ChevronDown}
          className={styles['dropdown__right-icon']}
          isHovered={!disabled && isHovered}
          size={IconSize.XSmall}
        />
      </button>
      <div
        key={dropdownMinWidth ?? 'auto'}
        id={contentId}
        className={contentClasses}
        ref={refs.setFloating}
        style={{
          ...floatingStyles,
          zIndex: zIndex,
        }}
      >
        <ul className={styles.dropdown__options} role="group" aria-labelledby={toggleTextId} tabIndex={-1} ref={optionsRef}>
          {isSingleSelect && <SingleSelect onValueChange={() => handleClose()}>{renderChildren}</SingleSelect>}
          {isMultiSelect && renderChildren}
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
  SingleSelectItem: ComponentType<SingleSelectItemProps>;
}
const Dropdown = DropdownBase as DropdownCompound;
Dropdown.SingleSelectItem = SingleSelectItem;
DropdownBase.displayName = 'Dropdown';

export default Dropdown;
