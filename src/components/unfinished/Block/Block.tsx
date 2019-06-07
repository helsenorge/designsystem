import * as React from './node_modules/react';
import * as classNames from './node_modules/classnames';
import './block.scss';

interface Props {
  /** Vises med "ny" markering border */
  isNew?: boolean;
  /** Lar innhold gå helt ut i kanten */
  noPadding?: boolean;
}

export const Block: React.SFC<Props> = ({isNew, noPadding, children}) => {
  const classes = classNames({
    mol_block: true,
    'mol_block--new': isNew,
    'mol_block--no-padding': noPadding,
  });
  return <div className={classes}>{children}</div>;
};

export default Block;
