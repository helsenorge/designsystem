import classNames from 'classnames';
import React, { CSSProperties } from 'react';

import { PROGRESS_BAR_PADDING_X_PX } from './utils';

import styles from './styles.module.scss';

interface DotProps {
  index: number;
  completed: boolean;
  distanceBetweenDots: number;
}

const Dot: React.FC<DotProps> = ({ index, completed, distanceBetweenDots }) => {
  const classes = classNames(styles.progressbar__dot, completed && styles['progressbar__dot--completed']);
  const style: CSSProperties = { left: `${index * distanceBetweenDots + PROGRESS_BAR_PADDING_X_PX}px` };

  return <span className={classes} style={style} data-testid="dot" />;
};

export default Dot;
