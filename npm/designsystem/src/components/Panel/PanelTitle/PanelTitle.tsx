import React from 'react';

import classNames from 'classnames';

import Title from '../../Title';

import styles from './styles.module.scss';

export interface PanelTitleProps {
  /** Sets the data-testid attribute. */
  testId?: string;
  /** Icon displayed in title */
  icon?: React.ReactNode;
  /** Displayed on top of the title */
  statusDot?: React.ReactNode;
  /** Badge displayed in title */
  badge?: React.ReactNode;
  title?: string;
}

const PanelTitle: React.FC<PanelTitleProps> = (props: PanelTitleProps) => {
  const { testId, icon, statusDot, badge, title } = props;
  return (
    <div className={classNames(styles['paneltitle'], { [styles['paneltitle--has-icon']]: icon })} data-testid={testId}>
      {statusDot && <div className={styles['paneltitle__statusdot']}>{statusDot}</div>}
      {icon && <div className={styles['paneltitle__icon']}>{icon}</div>}
      {title && (
        <div className={styles['paneltitle__title']}>
          <Title appearance="title3" htmlMarkup="h3">
            {title}
          </Title>
          {badge && <div className={styles['paneltitle__badge']}>{badge}</div>}
        </div>
      )}
    </div>
  );
};

export default PanelTitle;
