import classNames from 'classnames';

import { FormOnColor } from '../../constants';

import styles from './styles.module.scss';

interface MaxCharactersProps {
  /** Current input length */
  length: number;
  /** max character limit in textarea  */
  maxCharacters: number;
  /** The text is displayed in the end of the text-counter */
  maxText: string;
  /** Changes the visuals of the textarea */
  onColor?: keyof typeof FormOnColor;
  /** Max width of the component */
  maxWidth?: string;
}

const MaxCharacters: React.FC<MaxCharactersProps> = ({ maxCharacters, maxText, length, onColor, maxWidth }) => {
  const progress = length / maxCharacters;

  const counterTextClass = classNames(styles['max-characters'], {
    [styles[`max-characters--on-dark`]]: onColor === FormOnColor.ondark,
    [styles[`max-characters--invalid`]]: progress > 1,
  });

  const ariaLevel = progress > 0.95 ? 'polite' : 'off';

  return (
    <div aria-live={ariaLevel} aria-atomic={'true'} className={counterTextClass} style={{ maxWidth }}>
      {`${length}/${maxCharacters} ${maxText}`}
    </div>
  );
};

export default MaxCharacters;
