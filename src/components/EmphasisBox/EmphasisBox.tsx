import React from 'react';
import cn from 'classnames';
import styles from './EmphasisBox.scss';

const EmphasisBoxColors = {
  Green: 'green',
  Grey: 'grey',
  Blue: 'blue',
};

interface EmphasisBoxProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  color?: EmphasisBoxColors;
}

function EmphasisBox({children, color, ...restProps}: EmphasisBoxProps): JSX.Element {
  const classes = cn(
    styles['emphasis-box'],
    {[styles['emphasis-box--green']]: color === EmphasisBoxColors.Green},
    {[styles['emphasis-box--grey']]: color === EmphasisBoxColors.Grey},
    {[styles['emphasis-box--blue']]: color === EmphasisBoxColors.Blue},
  );

  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
}

type EmphasisBoxColors = (typeof EmphasisBoxColors)[keyof typeof EmphasisBoxColors];

export {EmphasisBox, EmphasisBoxColors};
