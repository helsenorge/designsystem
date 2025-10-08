import React from 'react';

import classNames from 'classnames';

import { useRadioGroup } from './RadioGroup';
import { AnalyticsId } from '../../../constants';
import { uuid } from '../../../utils/uuid';
import AsChildSlot, { AsChildSlotHandle } from '../../AsChildSlot';

import styles from './styles.module.scss';

export interface RadioProps extends Pick<React.ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'> {
  /** The <Label/> next to the radio */
  label: React.ReactNode;
  /** Adds custom classes to the label element. */
  labelClassNames?: string;
  /** input id of the radio */
  inputId?: string;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** When true, onclick and keyboard events will be passed to the child Button or AnchorLink. */
  asChild?: boolean;
  /** Only use when asChild is set to true and only pass one child */
  children?: React.ReactNode;
  /** Value for this radio option */
  value?: string;
  /** Name (only semantic) */
  name?: string;
  /** aria-describedby passthrough if needed */
  ['aria-describedby']?: string;
}

export const Radio = React.forwardRef((props: RadioProps, ref: React.Ref<HTMLElement>) => {
  const { label, inputId = uuid(), name, value: valueProp, testId, labelClassNames, asChild = false, children, disabled, ...rest } = props;

  const group = useRadioGroup();
  const optionValue = (typeof valueProp === 'string' && valueProp.length > 0 ? valueProp : undefined) ?? String(inputId);
  const isSelected = group ? group.value === optionValue : false;
  const isDisabled = !!disabled || !!group?.disabled;
  const asChildSlotRef = React.useRef<AsChildSlotHandle | null>(null);

  const radioLabelClasses = classNames(
    styles['radio-label'],
    {
      [styles['radio-label--disabled']]: isDisabled,
    },
    labelClassNames
  );
  const radioDotClasses = classNames(styles.radio, {
    [styles['radio--disabled']]: isDisabled,
    [styles['radio--checked']]: isSelected,
  });

  const childArray = React.Children.toArray(children).filter(React.isValidElement) as React.ReactElement[];
  const childElement = childArray[0] ?? null;

  const selectThis = (e?: React.SyntheticEvent): void => {
    if (isDisabled) return;
    if (group && group.value !== optionValue) {
      group.onValueChange?.(optionValue, e);
    }
  };

  const content = (
    <>
      <span className={radioDotClasses} aria-hidden />
      <span>{label}</span>
    </>
  );

  const Component = (asChild ? AsChildSlot : 'button') as any;

  const componentProps = asChild
    ? {
        ref: asChildSlotRef,
        elementRef: ref as React.Ref<HTMLElement>,
        className: radioLabelClasses,
        disabled: isDisabled,
        onSelect: (e: React.SyntheticEvent): void => selectThis(e),
        ariaCurrent: isSelected ? 'true' : undefined,
        children: childElement,
        content,
      }
    : {
        ...rest,
        type: 'button' as const,
        className: radioLabelClasses,
        disabled: isDisabled,
        onClick: (e: React.MouseEvent<HTMLButtonElement>): void => {
          e.preventDefault();
          selectThis(e);
        },
        onKeyDown: (e: React.KeyboardEvent<HTMLButtonElement>): void => {
          if (e.key === 'Enter') {
            e.preventDefault();
            selectThis(e);
          }
        },
        ref: ref as React.Ref<HTMLButtonElement>,
        'aria-disabled': isDisabled || undefined,
        'aria-current': isSelected ? 'true' : undefined,
        'data-radio-name': group?.name ?? name,
        'data-radio-value': optionValue,
        children: content,
      };

  return (
    <div data-testid={testId} data-analyticsid={AnalyticsId.DropdownRadio} className={styles['radio-wrapper']}>
      <Component {...componentProps} />
    </div>
  );
});

Radio.displayName = 'Dropdown.Radio';

export default Radio;
