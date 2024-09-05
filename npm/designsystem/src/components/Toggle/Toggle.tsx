import React, { useState, useId } from 'react';

import classNames from 'classnames';

import { AnalyticsId } from '../../constants';

import styles from './styles.module.scss';

export enum TogglePosition {
  left = 'left',
  right = 'right',
}

export interface ToggleProps extends Pick<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  /** Sets the label of the Toggle */
  label: string;
  /** Sets the position of the toggle relative to the label */
  position?: keyof typeof TogglePosition;
  /** Determines if the Toggle is checked */
  checked?: boolean;
  /** Sets the data-testid attribute. */
  testId?: string;
}

const Toggle: React.FC<ToggleProps> = ({ label, onChange, position = TogglePosition.left, checked = false, testId }: ToggleProps) => {
  const [checkedState, setCheckedState] = useState(checked);
  const id = useId();

  React.useEffect(() => {
    setCheckedState(checked);
  }, [checked]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = event.target.checked;
    setCheckedState(newChecked);
    onChange?.(newChecked);
  };

  const toggleContainerClasses = classNames(styles['toggle-container'], styles[`toggle-container__${position}`]);

  return (
    <div className={toggleContainerClasses} data-testid={testId} data-analyticsid={AnalyticsId.Toggle}>
      <label htmlFor={id} className={styles.label}>
        {position === TogglePosition.left && <span>{label}</span>}
        <input type="checkbox" id={id} checked={checkedState} onChange={handleChange} className={styles.input} aria-label={label} />
        <span className={styles.toggle} aria-hidden="true" />
        {position === TogglePosition.right && <span>{label}</span>}
      </label>
    </div>
  );
};

export default Toggle;
