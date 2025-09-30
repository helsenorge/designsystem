import React from 'react';

import classNames from 'classnames';

import { AnalyticsId, FormOnColor } from '../../../constants';
import { uuid } from '../../../utils/uuid';
import { getLabelText, renderLabelAsParent } from '../../Label';

import styles from './styles.module.scss';

export interface RadioProps
  extends Pick<
    React.InputHTMLAttributes<HTMLInputElement>,
    'aria-describedby' | 'name' | 'value' | 'disabled' | 'checked' | 'defaultChecked' | 'required' | 'onChange'
  > {
  /** The <Label/> next to the radio */
  label: React.ReactNode;
  /** Adds custom classes to the label element. */
  labelClassNames?: string;
  /** input id of the radio */
  inputId?: string;
  /** Sets the data-testid attribute. */
  testId?: string;
}

export const Radio = React.forwardRef((props: RadioProps, ref: React.Ref<HTMLInputElement>) => {
  const {
    defaultChecked,
    onChange,
    disabled,
    label,
    inputId = uuid(),
    name = inputId,
    value = getLabelText(label),
    testId,
    required,
    labelClassNames,
    ...rest
  } = props;

  const radioLabelClasses = classNames(
    styles['radio-button-label'],
    {
      [styles['radio-button-label--disabled']]: disabled,
    },
    labelClassNames
  );
  const radioClasses = classNames(styles['radio-button'], {
    [styles['radio-button--disabled']]: disabled,
  });

  const getLabelContent = (): React.ReactNode => (
    <input
      {...rest}
      id={inputId}
      name={name}
      className={radioClasses}
      type="radio"
      disabled={disabled}
      value={value}
      ref={ref}
      defaultChecked={defaultChecked}
      aria-describedby={props['aria-describedby']}
      required={required}
      onChange={onChange}
    />
  );

  return (
    <div data-testid={testId} data-analyticsid={AnalyticsId.DropdownRadio} className={styles['radio-button-wrapper']}>
      {renderLabelAsParent(label, getLabelContent(), inputId, FormOnColor.onwhite, radioLabelClasses, undefined)}
    </div>
  );
});

Radio.displayName = 'Dropdown.Radio';

export default Radio;
