import cn from 'classnames';

import type { TagVariant } from './constants';

import { AnalyticsId } from '../../constants';

import styles from './styles.module.scss';

export interface TagProps {
  /** Sets the text of the tag */
  children: string;
  /* Changes the appearance of the tag. Default: normal */
  variant?: keyof typeof TagVariant;
  /** Sets the data-testid attribute on the expander button. */
  testId?: string;
}

const Tag: React.FC<TagProps> = props => {
  const { children, variant = 'normal', testId } = props;

  const tagClasses = cn(styles.tag, styles[`tag--${variant}`]);

  return (
    <span className={tagClasses} data-testid={testId} data-analyticsid={AnalyticsId.Tag}>
      {children}
    </span>
  );
};

export default Tag;
