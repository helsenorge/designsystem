import * as React from './node_modules/react';
import * as classNames from './node_modules/classnames';

export interface Props {
  /** Vises i mindre størrelse. */
  small?: boolean;
  /** Vises med en spørsmålstegn. */
  question?: boolean;
  ariaLabel?: string;
}
export const Whortleberry: React.SFC<Props> = ({small, question, ariaLabel, children}) => {
  let classes = classNames('atom_red-whortleberry', {
    'atom_red-whortleberry--small': small,
    'no-info no-info--question-mark': question,
  });

  return (
    <div className={classes} aria-label={ariaLabel}>
      {children}
    </div>
  );
};

export default Whortleberry;
