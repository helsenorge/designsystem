import type React from 'react';

import classNames from 'classnames';

import Highlighter from '../../Highlighter';
import Title from '../../Title';

import styles from './styles.module.scss';

export interface PanelTitleProps {
  /** Badge displayed in title */
  badge?: React.ReactNode;
  /** Icon displayed in title. Only IconSize Small is supported */
  icon?: React.ReactNode;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** Title text */
  title: string | React.ReactNode;
  /** Title HTML markup */
  titleMarkup?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /** Highlights text in title and content. Used for search results */
  highlightText?: string;
}

const PanelTitle: React.FC<PanelTitleProps> = (props: PanelTitleProps) => {
  const { testId, icon, badge, title, titleMarkup = 'h3', highlightText } = props;
  return (
    <div className={classNames(styles['paneltitle'], { [styles['paneltitle--has-icon']]: icon })} data-testid={testId}>
      {icon && <div className={styles['paneltitle__icon']}>{icon}</div>}
      {title && (
        <div className={styles['paneltitle__title']}>
          <Title appearance="title3" htmlMarkup={titleMarkup}>
            <Highlighter searchText={highlightText}>{title}</Highlighter>
          </Title>
          {badge && <div className={styles['paneltitle__badge']}>{badge}</div>}
        </div>
      )}
    </div>
  );
};

export default PanelTitle;
