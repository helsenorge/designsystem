import React, { useState } from 'react';

import classNames from 'classnames';

import Check from '../Icons/Check';

import checkboxStyles from './styles.module.scss';

interface CheckboxProps {
  /** Adds custom classes to the element. */
  className?: string;
  /** Om checkbox er checked */
  checked?: boolean;
  /** Teksten som står ved siden av checkbox */
  label: string;
}

export const Checkbox = React.forwardRef((props: CheckboxProps, ref: React.Ref<HTMLUListElement>) => {
  const { className = '', label = '' } = props;
  const [checked, setChecked] = useState(props.checked);

  const checkboxClasses = classNames(checkboxStyles.checkbox, className);

  return (
    <label className={checkboxStyles['checkbox-wrapper']}>
      <input
        className={checkboxClasses}
        type={'checkbox'}
        checked={checked}
        onClick={() => {
          setChecked(!checked);
        }}
      />
      {label}
    </label>
  );
});

export default Checkbox;
