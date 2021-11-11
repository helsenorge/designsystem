import React, { useEffect, useState } from 'react';

import classNames from 'classnames';

interface CheckboxProps {
  /** Adds custom classes to the element. */
  className?: string;
}

export const Checkbox = React.forwardRef((props: CheckboxProps, ref: React.Ref<HTMLUListElement>) => {
  const { className = '' } = props;

  return <></>;
});

export default Checkbox;
