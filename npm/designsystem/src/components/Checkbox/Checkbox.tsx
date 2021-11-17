import React, { useEffect, useState } from 'react';

import classNames from 'classnames';

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
  const { className = '', checked = false, label = '' } = props;

  const checkboxClasses = classNames(checkboxStyles.checkbox, className);

  return (
    <div className={checkboxStyles['checkbox-wrapper']}>
      <input className={checkboxClasses} type={'checkbox'} checked={checked} />
      <label>{label}</label>
    </div>
  );
});

export default Checkbox;
