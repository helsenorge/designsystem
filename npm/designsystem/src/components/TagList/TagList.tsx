import React from 'react';

import styles from './styles.module.scss';

import { AnalyticsId } from '../../constants';

interface TagListPropsProps {
  /** Sets the data-testid attribute on the expander button. */
  testId?: string;
}

const TagList: React.FC<TagListPropsProps> = ({ children, testId }) => {
  return (
    <div className={styles['tag-list']} data-testid={testId} data-analyticsid={AnalyticsId.TagList}>
      {children}
    </div>
  );
};

export default TagList;
