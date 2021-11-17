import React, { useEffect, useState } from 'react';

import classNames from 'classnames';

interface CheckboxProps {
  /** Adds custom classes to the element. */
  className?: string;
  /** Om checkbox er checked */
  checked?: boolean;
  /** Teksten som står ved siden av checkbox */
  text: string;
}

export const Checkbox = React.forwardRef((props: CheckboxProps, ref: React.Ref<HTMLUListElement>) => {
  const { className = '', checked = false, text = '' } = props;

  return (
    <div>
      <input type={'checkbox'} checked={checked}></input>
      <p>{text}</p>
    </div>
  );
});

export default Checkbox;
