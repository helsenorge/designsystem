import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as PropTypes from 'prop-types';
import * as classNames from 'classnames';
import ValidationError from '../validation-error';

interface DangerousInnerHtml {
  __html: string;
}

export interface CheckboxProps {
  id: string;
  checked?: boolean;
  onChange: (event?: React.FormEvent<{}>) => void;
  label: string | JSX.Element;
  className?: string;
  disabled?: boolean;
  comment?: string;
  labelSuffixDangerousHtml?: string;
  labelClassName?: string;
  isRequired?: boolean;
  errorMessage?: string;
  onValidated?: (valid: boolean) => void;
  hjelpetrigger?: JSX.Element;
}

export interface CheckboxState {
  valid: boolean;
  validated: boolean;
}

export class CheckBox extends React.Component<CheckboxProps, CheckboxState> {
  static hnFormComponent = true;

  constructor(props: CheckboxProps) {
    super(props);
    this.state = {
      valid: true,
      validated: false,
    };
  }
  /* tslint:disable */
  static propTypes = {
    id: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    comment: PropTypes.string,
    labelSuffixDangerousHtml: PropTypes.string,
    labelClassName: PropTypes.string,
  };
  /* tslint:enable */

  componentDidMount(): void {
    this.setChecked();
  }

  componentDidUpdate(): void {
    this.setChecked();
  }

  setChecked(): void {
    const node = ReactDOM.findDOMNode(this);
    const $checkbox = node instanceof Element ? node.querySelector('input[type="checkbox"]') : null;
    if ($checkbox) {
      this.props.checked ? $checkbox.setAttribute('checked', 'checked') : $checkbox.removeAttribute('checked');
    }
  }

  validateField(): Promise<void> {
    this.setState({validated: true});
    return this.validate(this.props.checked, false);
  }

  validate(value: boolean | undefined, notifyValidated?: boolean): Promise<void> {
    return new Promise<void>((resolve: () => void) => {
      const validatedCB: () => void = () => {
        if (notifyValidated) {
          this.notifyValidated();
        }
        resolve();
      };
      if (this.props.isRequired) {
        this.setState({valid: value === true}, validatedCB);
      } else {
        this.setState({valid: true}, validatedCB);
      }
    });
  }

  isValid() {
    return this.state.valid;
  }

  onChange = (event: React.FormEvent<{}>) => {
    this.validate(!this.props.checked, true);
    this.props.onChange(event);
  };

  createDangerousHtmlLabelSuffix() {
    if (!this.props.labelSuffixDangerousHtml) {
      return null;
    }
    const dangerourHtml: DangerousInnerHtml = {__html: this.props.labelSuffixDangerousHtml};
    return <span dangerouslySetInnerHTML={dangerourHtml} />;
  }

  notifyValidated(): void {
    if (this.props.onValidated) {
      this.props.onValidated(this.state.valid);
    }
  }

  render(): JSX.Element {
    const selected: string = this.props.checked ? 'selected' : '';
    const labelClass: string = this.props.labelClassName ? `${selected} ${this.props.labelClassName}` : selected;
    const comment: JSX.Element | boolean = this.props.comment ? (
      <span className="checkbox-comment">{this.props.comment}</span>
    ) : (
      false
    );
    const wrapperClasses = classNames(
      {mol_validation: true, 'mol_validation--active': !this.state.valid},
      this.props.className,
    );

    return (
      <div className={wrapperClasses} id={`${this.props.id}-wrapper`}>
        <ValidationError isValid={this.state.valid} error={this.props.errorMessage ? this.props.errorMessage : ''} />
        <input
          type="checkbox"
          checked={this.props.checked}
          aria-checked={this.props.checked}
          id={this.props.id}
          onChange={this.onChange}
          disabled={this.props.disabled}
        />
        <label htmlFor={this.props.id} className={labelClass}>
          {this.props.label}
          {this.createDangerousHtmlLabelSuffix()} {comment}
        </label>
        {this.props.hjelpetrigger ? (
          <span className="atom_helptrigger-container">{this.props.hjelpetrigger}</span>
        ) : null}
        {this.props.children}
      </div>
    );
  }
}
