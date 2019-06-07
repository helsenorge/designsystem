import * as React from 'react';
import * as classNames from 'classnames';

export type ButtonTypes =
  | 'edit'
  | 'add'
  | 'delete'
  | 'close'
  | 'switch'
  | 'select'
  | 'function'
  | 'recycle'
  | 'message'
  | 'check'
  | 'resetfilters'
  | 'upload'
  | 'errordoc'
  | 'reload'
  | 'open'
  | 'save'
  | 'pause'
  | 'fullskjerm'
  | 'reset'
  | 'info'
  | 'send'
  | 'open_event'
  | 'doubleup'
  | 'doubledown'
  | 'lastOpp'
  | 'reply'
  | 'pillbottle'
  | 'calendar'
  | 'consultation'
  | 'contact'
  | 'print_blue'
  | 'bus'
  | 'message-bubbles';

interface Props {
  disabled?: boolean;
  labelInvisible?: boolean;
  type: ButtonTypes;
  onClick: () => void;
  id?: string;
  className?: string;
  ariaLabel?: string;
}

export const InlineButton: React.SFC<Props> = ({
  children,
  type,
  disabled,
  labelInvisible,
  onClick,
  id,
  className,
  ariaLabel,
}: {
  [key: string]: any;
}) => {
  const classes = classNames(
    {'atom_inline-btn': true, disabled: disabled, labelinvisible: labelInvisible},
    type,
    className,
  );
  return (
    <button type="button" id={id} disabled={disabled} className={classes} onClick={onClick} aria-label={ariaLabel}>
      <span>{children}</span>
    </button>
  );
};

export default InlineButton;
