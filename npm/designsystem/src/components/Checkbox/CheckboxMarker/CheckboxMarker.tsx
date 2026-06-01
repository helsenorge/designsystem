import classNames from 'classnames';

import { FormOnColor, FormSize } from '../../../constants';
import { getColor } from '../../../theme/currys/color';

import styles from './styles.module.scss';

export interface CheckboxMarkerProps {
  /** Whether the checkbox is checked. Controls the checkmark visibility. */
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
export const CheckboxMarker: React.FC<CheckboxMarkerProps> = props => {
  const { checked = false, disabled = false, error = false, onColor = FormOnColor.onwhite, size, className } = props;

  const onWhite = onColor === FormOnColor.onwhite;
  const onGrey = onColor === FormOnColor.ongrey;
  const onBlueberry = onColor === FormOnColor.onblueberry;
  const onInvalid = error || onColor === FormOnColor.oninvalid;
  const onDark = onColor === FormOnColor.ondark;
  const large = size === FormSize.large;

  const markerClasses = classNames(
    styles['checkbox__marker'],
    {
      [styles['checkbox__marker--on-white']]: onWhite,
      [styles['checkbox__marker--on-grey']]: onGrey,
      [styles['checkbox__marker--on-invalid']]: onInvalid,
      [styles['checkbox__marker--disabled']]: disabled,
      [styles['checkbox__marker__regular--checked']]: !large && checked,
      [styles['checkbox__marker__regular--invalid']]: !large && checked && onInvalid,
      [styles['checkbox__marker__regular--on-dark']]: !large && checked && onDark,
      [styles['checkbox__marker__large--checked']]: large && checked,
      [styles['checkbox__marker__large--invalid']]: large && onInvalid,
      [styles['checkbox__marker--on-dark']]: onDark,
      [styles['checkbox__marker--on-blueberry']]: onBlueberry,
      [styles['checkbox__marker--invalid']]: onInvalid,
      [styles['checkbox__marker__large--invalid']]: large && checked && onInvalid,
      [styles['checkbox__marker__large--disabled']]: disabled && large && checked,
      [styles['checkbox__marker__large--checked--invalid']]: large && checked && onInvalid,
      [styles['checkbox__marker__large--checked--disabled']]: disabled && large && checked,
    },
    className
  );

  const getIconColor = (): string => {
    if (disabled) {
      return getColor('neutral', 700);
    }
    if (large && checked && onInvalid) {
      return getColor('white');
    }
    if (onDark || (large && checked)) {
      return getColor('blueberry', 900);
    }
    return getColor('white');
  };
  const iconColor = getIconColor();

  return (
    <span className={markerClasses}>
      {checked && (
        <span className={styles['checkbox__marker-icon']} aria-hidden="true">
          <svg
            strokeWidth="2.75"
            width="18"
            height="16"
            viewBox="0 0 16 12"
            fill="none"
            stroke={iconColor}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 6 L6 11 L15 1" />
          </svg>
        </span>
      )}
    </span>
  );
};

export default CheckboxMarker;
