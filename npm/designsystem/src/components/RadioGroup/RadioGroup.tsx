import React, { ReactNode, useEffect, useState } from 'react';

import classNames from 'classnames';

import RadioGroupButton, { RadioGroupButtonProps } from './RadioGroupButton';
import { AnalyticsId } from '../../constants';
import { isComponent } from '../../utils/component';

export interface RadioGroupProps {
  /** Id of RadioGroup */
  id: string;
  /** Adds custom classes to the element. */
  className?: string;
  /** Items in the RadioGroup */
  children: React.ReactNode;
  /** Name of RadioGroup */
  name: string;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** Checked item */
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

const RadioGroup = React.forwardRef((props: RadioGroupProps, ref: React.Ref<HTMLInputElement>) => {
  const { id, className, children, testId, onChange } = props;

  const [checkedRadioButton, setCheckedRadioButton] = useState<HTMLInputElement>();

  const onChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedRadioButton(event.target);
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div className={classNames(className)} data-testid={testId} data-analyticsid={AnalyticsId.RadioGroup} ref={ref}>
      {React.Children.map(children, (child, index) => {
        if (isComponent<RadioGroupButtonProps>(child, RadioGroupButton)) {
          const inputId = `${id}-${index}`;
          return React.cloneElement(child, {
            inputId: inputId,
            name: id,
            checked:
              checkedRadioButton === undefined
                ? child.props.checked ?? false
                : checkedRadioButton !== undefined && checkedRadioButton?.id === inputId
                ? true
                : false,
            onChange: onChangeRadio,
          });
        }
      })}
    </div>
  );
});

RadioGroup.displayName = 'RadioGroup';

export default RadioGroup;
