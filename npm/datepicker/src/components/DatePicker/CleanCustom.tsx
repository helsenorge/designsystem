import React, { ButtonHTMLAttributes, useRef } from 'react';

import classNames from 'classnames';
import { CaptionLabel, CaptionLabelProps, DropdownProps, useDayPicker } from 'react-day-picker';

import Icon from '@helsenorge/designsystem-react/components/Icon';
import ChevronDown from '@helsenorge/designsystem-react/components/Icons/ChevronDown';
import ChevronLeft from '@helsenorge/designsystem-react/components/Icons/ChevronLeft';
import ChevronRight from '@helsenorge/designsystem-react/components/Icons/ChevronRight';

import { IconSize, usePseudoClasses } from '@helsenorge/designsystem-react';

import customstyles from './clean.module.scss';

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
