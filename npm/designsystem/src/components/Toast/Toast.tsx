import classNames from 'classnames';

import { useIsMobileBreakpoint } from '../../hooks/useIsMobileBreakpoint';
import Close from '../Close';
import Icon, { IconSize } from '../Icon';
import CheckFill from '../Icons/CheckFill';

import styles from './styles.module.scss';

export interface ToastProps {
  /** Sets the data-testid attribute. */
  testId?: string;
  /** The title to display in the toast */
  title: string;
  /** The message to display in the toast */
  message?: string;
  /** Callback when toast is closed */
  onClose?: () => void;
}

const Toast: React.FC<ToastProps> = ({ testId, title, message, onClose }) => {
  const isMobile = useIsMobileBreakpoint();

  const handleClose = (): void => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <output className={styles['toast']} data-testid={testId}>
      <Icon
        size={isMobile ? IconSize.XSmall : IconSize.Small}
        svgIcon={CheckFill}
        className={classNames(styles['toast__icon'], styles['toast__icon--check'])}
      />
      <div className={styles['toast__text-container']}>
        <span className={styles['toast__title']}>{title}</span>
        {message && <span className={styles['toast__description']}>{message}</span>}
      </div>
      <Close
        onClick={handleClose}
        color="black"
        className={classNames(styles['toast__icon'], styles['toast__icon--close'])}
        testId={`${testId}-close`}
      />
    </output>
  );
};

export default Toast;
