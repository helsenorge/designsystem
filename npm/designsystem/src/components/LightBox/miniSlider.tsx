import React, { ChangeEvent } from 'react';

interface MiniSliderProps {
  value: number;
  minValue: number;
  maxValue: number;
  onChange: (newValue: number) => void;
  className?: string;
}

const MiniSlider = (props: MiniSliderProps): JSX.Element => {
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    const newValue = parseFloat(event.target.value);
    props.onChange(newValue);
  };

  return (
    <div className={props.className}>
      <input onChange={handleOnChange} type="range" min={props.minValue} max={props.maxValue} value={props.value} step={0.1} />
    </div>
  );
};

export default MiniSlider;
