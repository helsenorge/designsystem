import * as React from 'react';
import * as classNames from 'classnames';
import {CheckBox} from '../checkbox';
import ValidationError from '../validation-error';
export interface Option {
  label: string;
  id: string;
  checked?: boolean;
  labelSuffixDangerousHtml?: string;
  hjelpetrigger?: JSX.Element;
  disabled?: boolean;
}

interface Props {
  id: string;
  checkboxes: Array<Option>;
  handleChange: (id: string) => void;
  legend?: string | JSX.Element;
  onValidated?: (valid: boolean | undefined) => void;
  errorMessage?: string;
  isRequired?: boolean;
  max?: number;
  min?: number;
  className?: string;
}

interface State {
  valid: boolean;
  validated: boolean;
}

export default class CheckBoxGroup extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      valid: true,
      validated: false,
    };
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.checkboxes !== this.props.checkboxes) {
      this.setState({valid: this.validate(this.state.validated)}, this.notifyValidated);
    }
  }

  validateField(): Promise<void> {
    let valid = this.validate(true);

    return new Promise<void>((resolve: () => void) => {
      this.setState({validated: true, valid}, () => {
        this.notifyValidated();
        resolve();
      });
    });
  }

  isValid(): boolean {
    return this.state.valid;
  }

  validate = (validated?: boolean) => {
    if (this.props.isRequired && validated && !this.props.checkboxes.some(el => el.checked === true)) {
      return false;
    } else if (this.props.max && this.props.checkboxes.filter(el => el.checked === true).length > this.props.max) {
      return false;
    } else if (
      this.props.min &&
      validated &&
      this.props.checkboxes.filter(el => el.checked === true).length < this.props.min
    ) {
      return false;
    }
    return true;
  };

  notifyValidated = () => {
    if (this.props.onValidated) {
      this.props.onValidated(this.state.valid);
    }
  };

  render() {
    const checkboxes = this.props.checkboxes.map(el => {
      return (
        <CheckBox
          label={el.label}
          labelSuffixDangerousHtml={el.labelSuffixDangerousHtml}
          key={el.id}
          id={`${this.props.id}-${el.id}`}
          checked={el.checked}
          onChange={() => this.props.handleChange(el.id)}
          hjelpetrigger={el.hjelpetrigger}
          disabled={el.disabled}
        />
      );
    });

    const classes = classNames(
      {mol_validation: true, 'mol_validation--active': !this.state.valid},
      this.props.className,
    );

    return (
      <div className={classes} id={`${this.props.id}-wrapper`}>
        <ValidationError isValid={this.state.valid} error={this.props.errorMessage ? this.props.errorMessage : ''} />
        <fieldset className="atom_fieldset">
          {this.props.legend ? <legend>{this.props.legend}</legend> : null}
          {checkboxes}
        </fieldset>
      </div>
    );
  }
}
