import * as React from 'react';
import {UnmountClosed} from 'react-collapse';

export interface ValidationErrorProps {
  error: string | (() => string);
  className?: string;
  textClassName?: string;
  isValid: boolean;
}

export default class extends React.Component<ValidationErrorProps, {}> {
  constructor(props: ValidationErrorProps) {
    super(props);
  }

  render(): JSX.Element {
    let classes = '';
    if (this.props.className) {
      classes = this.props.className;
    }

    const textClassName = this.props.textClassName ? this.props.textClassName : 'mol_validation__errortext';

    let error = '';
    if (this.props.error) {
      error = typeof this.props.error === 'string' ? this.props.error : this.props.error();
    }
    return (
      <UnmountClosed isOpened={!this.props.isValid} className={classes}>
        <div className={textClassName}>{error}</div>
      </UnmountClosed>
    );
  }
}
