import type { ChangeEvent } from 'react';

import styles from './styles.module.scss';

interface MiniSliderProps {
  value: number;
  minValue: number;
  maxValue: number;
  onChange: (newValue: number) => void;
  ariaLabel: string;
}

const MiniSlider = (props: MiniSliderProps): React.JSX.Element => {
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    const newValue = parseFloat(event.target.value);
    props.onChange(newValue);
  };

  const ariaValueText = `${Math.round(props.value * 100)}%`;

  return (
    <div className={styles.slider} aria-live="polite">
      <div key={props.value} className={styles.slider__announcements}>
        {ariaValueText}
      </div>
      <input
        onChange={handleOnChange}
        type="range"
        min={props.minValue}
        max={props.maxValue}
        value={props.value}
        aria-valuenow={props.value}
        aria-valuemin={props.minValue}
        aria-valuemax={props.maxValue}
        aria-valuetext={ariaValueText}
        aria-label={props.ariaLabel}
        step={0.1}
      />
    </div>
  );
};

export default MiniSlider;
