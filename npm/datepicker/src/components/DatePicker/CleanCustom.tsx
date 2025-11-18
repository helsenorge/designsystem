import React, { ButtonHTMLAttributes } from 'react';

import classNames from 'classnames';
import { Chevron, ChevronProps, DayButton, DropdownProps, type DayButtonProps } from 'react-day-picker';
import reactdaypickerstyles from 'react-day-picker/dist/style.module.css';

import Icon from '@helsenorge/designsystem-react/components/Icon';
import ChevronDown from '@helsenorge/designsystem-react/components/Icons/ChevronDown';
import ChevronLeft from '@helsenorge/designsystem-react/components/Icons/ChevronLeft';
import ChevronRight from '@helsenorge/designsystem-react/components/Icons/ChevronRight';
import ChevronUp from '@helsenorge/designsystem-react/components/Icons/ChevronUp';
import PopOver from '@helsenorge/designsystem-react/components/PopOver';

import { IconSize, useOutsideEvent, usePseudoClasses, useToggle } from '@helsenorge/designsystem-react';

import customstyles from './clean.module.scss';

export const CustomSelect = (props: DropdownProps): React.JSX.Element => {
  const { options, className, components, ...selectProps } = props;

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
      return;
    }
    // call the original onClick from RDP
    buttonProps.onClick?.(e);
  };
  useOutsideEvent([buttonRef, popoverRef], () => {
    if (isPopoverOpen) togglePopover();
  });

  return (
    <>
      {modifiers.fullyBooked && (
        <PopOver controllerRef={buttonRef} ref={popoverRef} show={isPopoverOpen}>
          {'Det er fullt'}
        </PopOver>
      )}
      <button {...buttonProps} ref={buttonRef} onClick={handleClick} style={{ zIndex: 1 }} />
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
