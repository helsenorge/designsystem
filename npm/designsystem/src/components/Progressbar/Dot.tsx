import classNames from 'classnames';
import React from 'react';

import { PROGRESS_BAR_PADDING_X_PX } from './utils';

import styles from './styles.module.scss';

interface DotProps {
  index?: number;
  completed: boolean;
  distanceBetweenDots?: number;
  position?: 'left' | 'right';
}

const Dot: React.FC<DotProps> = ({ index, completed, distanceBetweenDots, position }) => {
  const classes = classNames(
    styles.progressbar__dot,
    completed && styles['progressbar__dot--completed'],
    position && styles[`progressbar__dot--${position}`]
  );
  const positionWithStyle = !position && typeof index !== 'undefined' && typeof distanceBetweenDots !== 'undefined';
  const style: React.HTMLAttributes<HTMLSpanElement>['style'] = positionWithStyle
    ? { left: `${index * distanceBetweenDots + PROGRESS_BAR_PADDING_X_PX}px` }
    : undefined;

  return <span className={classes} style={style} data-testid="dot" />;
};

export default Dot;
