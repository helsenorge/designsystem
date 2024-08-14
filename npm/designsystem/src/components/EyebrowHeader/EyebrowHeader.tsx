import React from 'react';

import { AnalyticsId } from '../../constants';
import Title from '../Title';

import styles from './styles.module.scss';

export interface SubtitleProps {
  children?: React.ReactNode;
}

const Subtitle: React.FC<SubtitleProps> = props => {
  return <p className={styles.subtitle}>{props.children}</p>;
};

export interface EyebrowHeaderProps {
  children?: React.ReactNode;
  /** Sets the data-testid attribute. */
  testId?: string;
}

export interface EyebrowHeaderType extends React.FC<EyebrowHeaderProps> {
  Subtitle: typeof Subtitle;
  Title: typeof Title;
}

const EyebrowHeader = ((props: EyebrowHeaderProps): React.JSX.Element => (
  <div data-testid={props.testId} data-analyticsid={AnalyticsId.EyebrowHeader}>
    {props.children}
  </div>
)) as EyebrowHeaderType;

EyebrowHeader.Subtitle = Subtitle;
EyebrowHeader.Title = Title;
EyebrowHeader.displayName = 'EyebrowHeader';

export default EyebrowHeader;
