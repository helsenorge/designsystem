import * as React from 'react';
import * as classNames from 'classnames';

export enum colors {
  Green,
  Grey,
  Blue,
}

interface Props {
  color: colors;
}

export const EmphasisBox: React.SFC<Props> = ({children, color}) => {
  const classes = classNames({
    mol_emphasisbox: true,
    'mol_emphasisbox--green': color === colors.Green,
    'mol_emphasisbox--grey': color === colors.Grey,
    'mol_emphasisbox--emphasize': color === colors.Blue,
  });
  return <div className={classes}>{children}</div>;
};

export default EmphasisBox;
