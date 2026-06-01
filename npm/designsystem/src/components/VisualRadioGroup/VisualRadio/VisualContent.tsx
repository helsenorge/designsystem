import classNames from 'classnames';

import styles from './styles.module.scss';

export interface VisualContentProps {
  /** Content rendered inside the circular area – typically an <img> or illustration component. */
  children: React.ReactNode;
  /** Adds custom classes to the root element. */
  className?: string;
  /** Sets the data-testid attribute. */
  testId?: string;
}

export const VisualContent: React.FC<VisualContentProps> = props => {
  const { children, className, testId } = props;

  return (
    <span className={classNames(styles['visual-radio__visual-content'], className)} data-testid={testId} aria-hidden="true">
      {children}
    </span>
  );
};

export default VisualContent;
