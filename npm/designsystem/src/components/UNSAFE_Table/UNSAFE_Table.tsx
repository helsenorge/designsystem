import { useId } from 'react';

import type { Props as TableProps } from '../Table';

import Table from '../Table';
import TableCaption from './TableCaption';

export interface UNSAFE_TableProps extends Omit<TableProps, 'scrollAriaLabel' | 'scrollAriaLabelledById'> {
  /** Description of the table for screen readers. Rendered as a visually hidden caption and used to label the scroll container. */
  caption: string;
  /** Id for the caption element. Auto-generated when not set. */
  captionId?: string;
}

export const UNSAFE_Table: React.FC<UNSAFE_TableProps> = ({ caption, captionId, children, ...rest }) => {
  const generatedCaptionId = useId();
  const captionElementId = captionId ?? generatedCaptionId;

  return (
    <Table {...rest} scrollAriaLabelledById={captionElementId}>
      <TableCaption id={captionElementId}>{caption}</TableCaption>
      {children}
    </Table>
  );
};

export default UNSAFE_Table;
