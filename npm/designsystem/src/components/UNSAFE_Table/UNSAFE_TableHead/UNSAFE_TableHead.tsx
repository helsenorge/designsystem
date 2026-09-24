import type { TableSizes, TableColors } from '../constants';

import { mapChildrenWithSizeAndColor } from '../utils';

export interface Props extends Omit<React.ComponentPropsWithoutRef<'thead'>, 'style'> {
  /** Header category for styling. Default: normal */
  color?: TableColors;
  /** Adds custom classes to the element. */
  className?: string;
  /** Sets the content of the thead. Add table rows  */
  children: React.ReactNode;
  /** For display with less space. Discouraged to use together with interactive elements. */
  size?: TableSizes;
}

export const UNSAFE_TableHead: React.FC<Props> = ({ children, color, size, ...rest }) => {
  return <thead {...rest}>{mapChildrenWithSizeAndColor(children, size, color)}</thead>;
};

export default UNSAFE_TableHead;
