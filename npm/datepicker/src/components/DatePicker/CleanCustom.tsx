import React, { ButtonHTMLAttributes, useRef } from 'react';

import classNames from 'classnames';
import { CaptionLabel, CaptionLabelProps, DropdownProps, useDayPicker, type DayButtonProps } from 'react-day-picker';
import reactdaypickerstyles from 'react-day-picker/dist/style.module.css';

import Icon from '@helsenorge/designsystem-react/components/Icon';
import ChevronDown from '@helsenorge/designsystem-react/components/Icons/ChevronDown';
import ChevronLeft from '@helsenorge/designsystem-react/components/Icons/ChevronLeft';
import ChevronRight from '@helsenorge/designsystem-react/components/Icons/ChevronRight';
import PopOver from '@helsenorge/designsystem-react/components/PopOver';

import { IconSize, useOutsideEvent, usePseudoClasses, useToggle } from '@helsenorge/designsystem-react';

import customstyles from './clean.module.scss';

export const CustomSelect = (props: DropdownProps): React.JSX.Element => {
  const { options, className, ...selectProps } = props;
  const { components } = useDayPicker();

  return (
    <span data-disabled={selectProps.disabled} className={classNames(reactdaypickerstyles['dropdown_root'])}>
      <components.Select className={classNames(className, customstyles['custom_dropdown_select'])} {...selectProps}>
        {options?.map(({ value, label, disabled }) => (
          <components.Option key={value} value={value} disabled={disabled}>
            {label}
          </components.Option>
        ))}
      </components.Select>
    </span>
  );
};

// // Create a context to share the selected date state between the custom DayButton and the main component.
// // https://daypicker.dev/guides/custom-components#intercepting-click-events
// export const SelectedDateContext = React.createContext<{
//   selected?: Date;
//   setSelected?: (date: Date | undefined) => void;
// }>({});

export const CustomDayButton = (props: DayButtonProps): React.JSX.Element => {
  // const { day, modifiers, className, components, ...buttonProps } = props;
  const { day, modifiers, ...buttonProps } = props;

  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const popoverRef = React.useRef<HTMLDivElement>(null);
  const { value: isPopoverOpen, toggleValue: togglePopover } = useToggle(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    if (modifiers.disabled) {
      alert('Denne datoen er ikke tilgjengelig for valg.');
      return;
    }
    if (modifiers.fullyBooked) {
      togglePopover();
    }
    // call the original onClick from RDP
    buttonProps.onClick?.(e);
  };
  useOutsideEvent([buttonRef, popoverRef], () => {
    if (isPopoverOpen) togglePopover();
  });
  const popoverId = `datepicker-popover-${day?.date?.toISOString()}`;

  return (
    <>
      {modifiers.fullyBooked && (
        <PopOver controllerRef={buttonRef} ref={popoverRef} id={``} show={isPopoverOpen}>
          {'Det er fullt'}
        </PopOver>
      )}
      <button {...buttonProps} ref={buttonRef} onClick={handleClick} style={{ zIndex: 1 }} aria-describedby={popoverId} />
    </>
  );
};

export const CustomPreviousButton = (props: ButtonHTMLAttributes<HTMLButtonElement>): React.JSX.Element => {
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const { isHovered } = usePseudoClasses(buttonRef);
  return (
    <button {...props} ref={buttonRef} className={classNames(props.className, customstyles['custom_nav_button'])}>
      <Icon
        svgIcon={ChevronLeft}
        isHovered={!props.disabled && isHovered}
        className={classNames(customstyles['custom_chevron'])}
        size={IconSize.XSmall}
      />
    </button>
  );
};

export const CustomNextButton = (props: ButtonHTMLAttributes<HTMLButtonElement>): React.JSX.Element => {
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const { isHovered } = usePseudoClasses(buttonRef);
  return (
    <button {...props} ref={buttonRef} className={classNames(props.className, customstyles['custom_nav_button'])}>
      <Icon
        svgIcon={ChevronRight}
        isHovered={!props.disabled && !props['aria-disabled'] && isHovered}
        className={classNames(customstyles['custom_chevron'])}
        size={IconSize.XSmall}
      />
    </button>
  );
};

export const CustomDropdown = (props: DropdownProps): React.JSX.Element => {
  const { options, ...dropdownProps } = props;
  const { components, classNames: rdpClassnames } = useDayPicker();
  const ref = useRef<HTMLSpanElement>(null);
  const { isHovered } = usePseudoClasses<HTMLSpanElement>(ref);

  const selectedOption = options?.find(({ value }) => value === dropdownProps.value);
  return (
    <span data-disabled={dropdownProps.disabled} className={classNames(rdpClassnames['dropdown_root'])} ref={ref}>
      <components.Select {...dropdownProps} className={classNames(rdpClassnames['dropdown'])}>
        {options?.map(({ value, label, disabled }) => (
          <components.Option key={value} value={value} disabled={disabled}>
            {label}
          </components.Option>
        ))}
      </components.Select>
      <span className={classNames(rdpClassnames['caption_label'], customstyles['dropdown_container'])} aria-hidden>
        <span className={customstyles['dropdown_label']}>{selectedOption?.label}</span>
        <Icon svgIcon={ChevronDown} isHovered={isHovered} size={IconSize.XSmall} className={customstyles['dropdown_chevron']} />
      </span>
    </span>
  );
};

export const CustomCaptionLabel = (props: CaptionLabelProps): React.JSX.Element => {
  const { classNames: rdpClassnames } = useDayPicker();

  return <CaptionLabel {...props} className={classNames(rdpClassnames['caption_label'], customstyles['custom_caption-label'])} />;
};
