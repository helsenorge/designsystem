import React from 'react';

import NobodyHome from './NobodyHome';
import { AnalyticsId } from '../../constants';
import Title, { TitleTags } from '../Title';

import styles from './styles.module.scss';

interface EmptyStateProps {
  /** Text content */
  children: React.ReactNode;
  /** Markup props for title. Default: h2 */
  titleHtmlMarkup?: TitleTags;
  /** Sets the data-testid attribute. */
  testId?: string;
}

const EmptyState: React.FC<EmptyStateProps> = props => (
  <div className={styles.emptystate} data-testid={props.testId} data-analyticsid={AnalyticsId.EmptyState}>
    <NobodyHome />
    <Title appearance={'title3'} htmlMarkup={props.titleHtmlMarkup || 'h2'}>
      {props.children}
    </Title>
  </div>
);

export default EmptyState;
