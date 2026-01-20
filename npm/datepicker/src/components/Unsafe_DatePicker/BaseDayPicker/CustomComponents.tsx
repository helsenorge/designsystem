import React, { ButtonHTMLAttributes, useRef } from 'react';

import classNames from 'classnames';
import { CaptionLabel, CaptionLabelProps, DropdownProps, useDayPicker } from 'react-day-picker';

import Icon from '@helsenorge/designsystem-react/components/Icon';
import ChevronDown from '@helsenorge/designsystem-react/components/Icons/ChevronDown';
import ChevronLeft from '@helsenorge/designsystem-react/components/Icons/ChevronLeft';
import ChevronRight from '@helsenorge/designsystem-react/components/Icons/ChevronRight';
import { useIsMobileBreakpoint } from '@helsenorge/designsystem-react/hooks/useIsMobileBreakpoint';

import { IconSize, usePseudoClasses } from '@helsenorge/designsystem-react';

import customstyles from './BaseDayPicker.module.scss';

export const CustomPreviousButton = (props: ButtonHTMLAttributes<HTMLButtonElement>): React.JSX.Element => {
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const { isHovered } = usePseudoClasses(buttonRef);
  const isMobile = useIsMobileBreakpoint();
  return (
    <button {...props} ref={buttonRef} className={classNames(props.className, customstyles['custom_nav_button'])}>
      <div className={customstyles['custom_nav_button__circle']}>
        <Icon
          svgIcon={ChevronLeft}
          isHovered={!props.disabled && !props['aria-disabled'] && isHovered}
          className={classNames(customstyles['custom_chevron'])}
          size={isMobile ? IconSize.XXSmall : IconSize.XSmall}
        />
      </div>
    </button>
  );
};

export const CustomNextButton = (props: ButtonHTMLAttributes<HTMLButtonElement>): React.JSX.Element => {
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const { isHovered } = usePseudoClasses(buttonRef);
  const isMobile = useIsMobileBreakpoint();
  return (
    <button {...props} ref={buttonRef} className={classNames(props.className, customstyles['custom_nav_button'])}>
      <div className={customstyles['custom_nav_button__circle']}>
        <Icon
          svgIcon={ChevronRight}
          isHovered={!props.disabled && !props['aria-disabled'] && isHovered}
          className={classNames(customstyles['custom_chevron'])}
          size={isMobile ? IconSize.XXSmall : IconSize.XSmall}
        />
      </div>
    </button>
  );
};

export const CustomDropdown = (props: DropdownProps): React.JSX.Element => {
  // classNames prop gir error når den sendes videre til select, men er deprecated så brukes ikke
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { options, classNames: rdpClassnameProp, ...dropdownProps } = props;
  const { components, classNames: rdpClassnames } = useDayPicker();
  const ref = useRef<HTMLSpanElement>(null);
  const { isHovered } = usePseudoClasses<HTMLSpanElement>(ref);

  const selectedOption = options?.find(({ value }) => value === dropdownProps.value);
  return (
    <span
      data-disabled={dropdownProps.disabled}
      className={classNames(rdpClassnames['dropdown_root'], customstyles['dropdown_root_custom'])}
      ref={ref}
    >
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
