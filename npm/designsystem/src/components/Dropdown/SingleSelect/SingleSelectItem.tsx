import React from 'react';

import classNames from 'classnames';

import { useSingleSelect } from './SingleSelect';
import { AnalyticsId } from '../../../constants';
import { uuid } from '../../../utils/uuid';
import AsChildSlot, { AsChildSlotHandle } from '../../AsChildSlot';

import styles from './styles.module.scss';

export interface SingleSelectItemProps extends Pick<React.ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'> {
  /** The <Label/> next to the singleSelectItem */
  label?: React.ReactNode;
  /** Adds custom classes to the label element. */
  labelClassNames?: string;
  /** input id of the singleSelectItem */
  inputId?: string;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** When true, onclick and keyboard events will be passed to the child Button or AnchorLink. */
  asChild?: boolean;
  /** Only use when asChild is set to true and only pass one child */
  children?: React.ReactNode;
  // TODO: Skal vi fortsatt ha denne?
  /** Value for this singleSelectItem option */
  value?: string;
  /** Name (only semantic) */
  name?: string;
  /** aria-describedby passthrough if needed */
  ['aria-describedby']?: string;
}

export const SingleSelectItem = React.forwardRef((props: SingleSelectItemProps, ref: React.Ref<HTMLElement>) => {
  const { label, inputId = uuid(), name, value: valueProp, testId, labelClassNames, asChild = false, children, disabled, ...rest } = props;

  const group = useSingleSelect();
  const optionValue = (typeof valueProp === 'string' && valueProp.length > 0 ? valueProp : undefined) ?? String(inputId);
  const isSelected = group ? group.value === optionValue : false;
  const isDisabled = !!disabled || !!group?.disabled;
  const asChildSlotRef = React.useRef<AsChildSlotHandle | null>(null);

  const contentClasses = classNames(
    styles['single-select-item__content'],
    {
      [styles['single-select-item__content--disabled']]: isDisabled,
    },
    labelClassNames
  );
  const dotClasses = classNames(styles['single-select-item__dot'], {
    [styles['single-select-item__dot--disabled']]: isDisabled,
    [styles['single-select-item__dot--checked']]: isSelected,
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
      <span className={dotClasses} aria-hidden />
      <span>{label}</span>
    </>
  );

  const Component = (asChild ? AsChildSlot : 'button') as React.ElementType;

  const componentProps = asChild
    ? {
        ref: asChildSlotRef,
        elementRef: ref as React.Ref<HTMLElement>,
        className: contentClasses,
        disabled: isDisabled,
        onSelect: (e: React.SyntheticEvent): void => selectThis(e),
        ariaCurrent: isSelected ? 'true' : undefined,
        children: childElement,
        content,
      }
    : {
        ...rest,
        type: 'button' as const,
        className: contentClasses,
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
        //TODO: Trengs disse?
        'data-radio-name': group?.name ?? name,
        'data-radio-value': optionValue,
        children: content,
      };

  return (
    <div data-testid={testId} data-analyticsid={AnalyticsId.DropdownRadio} className={styles['single-select-item']}>
      <Component {...componentProps} />
    </div>
  );
});

SingleSelectItem.displayName = 'Dropdown.SingleSelectItem';

export default SingleSelectItem;
