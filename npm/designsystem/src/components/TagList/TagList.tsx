import React from 'react';

import { AnalyticsId } from '../../constants';

import styles from './styles.module.scss';

export interface TagListPropsProps {
  /** Sets the data-testid attribute on the expander button. */
  testId?: string;
}

const TagList: React.FC<TagListPropsProps> = ({ children, testId }) => {
  return (
    <ul className={styles['tag-list']} data-testid={testId} data-analyticsid={AnalyticsId.TagList}>
      {React.Children.map(children, child => (
        <li className={styles['tag-list__item']}>{child}</li>
      ))}
    </ul>
  );
};

export default TagList;
