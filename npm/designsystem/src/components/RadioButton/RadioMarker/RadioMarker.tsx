import classNames from 'classnames';

import { FormOnColor, FormSize } from '../../../constants';

import styles from './styles.module.scss';

export interface RadioMarkerProps {
  /** Whether the radio is checked. Controls the inner dot visibility. */
  checked?: boolean;
  /** Disables the visual state of the marker. */
  disabled?: boolean;
  /** Activates error styling. */
  error?: boolean;
  /** Background context the marker is rendered on. */
  onColor?: keyof typeof FormOnColor;
  /** Size variant of the marker. */
  size?: keyof typeof FormSize;
  /** Adds custom classes to the marker wrapper. */
  className?: string;
}

/**
 * Does not render an <input>; consumers render this on their end.
 */
export const RadioMarker: React.FC<RadioMarkerProps> = props => {
  const { checked = false, disabled = false, error = false, onColor = FormOnColor.onwhite, size, className } = props;

  const onWhite = onColor === FormOnColor.onwhite;
  const onGrey = onColor === FormOnColor.ongrey;
  const onBlueberry = onColor === FormOnColor.onblueberry;
  const onInvalid = error || onColor === FormOnColor.oninvalid;
  const onDark = onColor === FormOnColor.ondark;
  const large = size === FormSize.large;

  const markerClasses = classNames(
    styles['radio__marker'],
    large ? styles['radio__marker__large'] : styles['radio__marker__regular'],
    {
      [styles['radio__marker--on-white']]: onWhite,
      [styles['radio__marker--on-grey']]: onGrey,
      [styles['radio__marker--on-blueberry']]: onBlueberry,
      [styles['radio__marker--on-dark']]: onDark,
      [styles['radio__marker--on-invalid']]: onInvalid,
      [styles['radio__marker--invalid']]: onInvalid,
      [styles['radio__marker--disabled']]: disabled,
      [styles['radio__marker--checked']]: checked,
    },
    className
  );

  return (
    <span className={markerClasses} aria-hidden="true">
      <span className={styles['radio__marker-dot']} />
    </span>
  );
};

export default RadioMarker;
