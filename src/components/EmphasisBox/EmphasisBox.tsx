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

const EmphasisBox = React.forwardRef<HTMLDivElement, EmphasisBoxProps>(
  ({children, color, ...restProps}, ref): JSX.Element => {
    const classes = cn(
      styles['emphasis-box'],
      {[styles['emphasis-box--green']]: color === EmphasisBoxColors.Green},
      {[styles['emphasis-box--grey']]: color === EmphasisBoxColors.Grey},
      {[styles['emphasis-box--blue']]: color === EmphasisBoxColors.Blue},
    );

    return (
      <div ref={ref} className={classes} {...restProps}>
        {children}
      </div>
    );
  },
);

type EmphasisBoxColors = (typeof EmphasisBoxColors)[keyof typeof EmphasisBoxColors];

export {EmphasisBox, EmphasisBoxColors};
