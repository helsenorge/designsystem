import * as React from 'react';
import PrivateRadioGroup from './private-radio-group';
import ValidationError from '../validation-error';
import * as classNames from 'classnames';

export interface RadioGroupProps {
  onChange: (value?: string) => void;
  options: Array<Options>;
  isRequired?: boolean;
  requiredLabel?: string;
  optionalLabel?: string;
  children?: JSX.Element;

  /**
   * Must be unique for the application. If it is not unique, interaction with one radio group will change all
   * radio groups sharing the id.
   */
  id: string;

  /**
   * Transform that can be applied an element of the options array to replace a label containing a path
   * with the actual string to be shown
   */
  labelStringFetcher?: (content: string) => string;
  selected?: string;
  legend?: string | JSX.Element;
  validator?: (value: string | undefined) => boolean;
  onValidated?: (valid: boolean) => void;
  getErrorMessage?: (value: string) => string;
  showRequiredLabel?: boolean;
  showOptionalLabel?: boolean;
  noFieldset?: boolean;
  ariaLabelledBy?: string;
}

export interface Options {
  type: string;
  label: string;
  disabled?: boolean;
  content?: JSX.Element;
  hjelpetrigger?: JSX.Element;
}

export interface RadioGroupState {
  lastFocusedValue?: string;
  valid: boolean;
  validated?: boolean;
}

export class RadioGroup extends React.Component<RadioGroupProps, RadioGroupState> {
  static hnFormComponent = true;

  constructor(props: RadioGroupProps, context: Object) {
    super(props, context);
    this.changeSelectedValue = this.changeSelectedValue.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.notifyValidated = this.notifyValidated.bind(this);

    this.state = {
      // Get from soknadsstore
      lastFocusedValue: props.selected,
      valid: true,
      validated: false,
    };
  }

  componentWillReceiveProps(nextProps: RadioGroupProps): void {
    this.setState({
      lastFocusedValue: nextProps.selected,
    });
  }

  componentDidUpdate(_prevProps: RadioGroupProps, prevState: RadioGroupState) {
    if (prevState.valid !== this.state.valid) {
      this.notifyValidated();
    }
  }

  onChange(e: React.FormEvent<{}>): void {
    const element = document.getElementById((e.target as HTMLLabelElement).htmlFor);

    if (element) {
      e.target = element;
      if ((e.target as HTMLInputElement).disabled) {
        return;
      }

      this.changeSelectedValue((e.target as HTMLInputElement).value);
    }
  }

  onClick(e: React.MouseEvent<{}>): void {
    this.changeSelectedValue((e.target as HTMLInputElement).value);
  }

  changeSelectedValue(value: string): void {
    if (value === this.state.lastFocusedValue) {
      return;
    }

    this.props.onChange(value);
    this.setState({lastFocusedValue: value});
    this.validate(value);
  }

  validate(value: string | undefined): Promise<void> {
    return new Promise<void>((resolve: () => void) => {
      const validatedCB: () => void = () => {
        resolve();
      };
      if (this.props.isRequired) {
        if (this.props.validator) {
          this.setState({valid: this.props.validator(value)}, validatedCB);
          return;
        }
        const empty: boolean = value === null || value === undefined || value === '';
        this.setState({valid: !empty}, validatedCB);
      } else {
        this.setState({valid: true}, validatedCB);
      }
    });
  }

  notifyValidated(): void {
    if (this.props.onValidated) {
      this.props.onValidated(this.state.valid);
    }
  }

  validateField(): Promise<void> {
    this.setState({validated: true});
    return this.validate(this.state.lastFocusedValue);
  }

  isValid(): boolean {
    return this.state.valid;
  }

  renderErrorMessage(): JSX.Element | null {
    if (!this.props.getErrorMessage) {
      return null;
    }
    const errorMessage: string = this.state.lastFocusedValue
      ? this.props.getErrorMessage(this.state.lastFocusedValue)
      : this.props.getErrorMessage('');
    return <ValidationError isValid={this.state.valid} error={errorMessage} />;
  }

  renderLegend(): JSX.Element | null {
    if (!this.props.legend) {
      return null;
    }
    return (
      <legend>
        {this.props.legend}
        {this.props.isRequired && this.props.requiredLabel && this.props.showRequiredLabel ? (
          <em> {this.props.requiredLabel}</em>
        ) : (
          ''
        )}
        {!this.props.isRequired && this.props.optionalLabel && this.props.showOptionalLabel ? (
          <em> {this.props.optionalLabel}</em>
        ) : (
          ''
        )}
      </legend>
    );
  }

  isRadioValid(value: string): boolean {
    if (this.props.isRequired && this.state.lastFocusedValue === null) {
      return false;
    }
    if (value === this.state.lastFocusedValue && !this.state.valid) {
      return false;
    }
    return true;
  }

  render(): JSX.Element {
    let i = 0;

    const inputFields: Array<JSX.Element> = this.props.options.map(e => {
      const id: string = this.props.id + '-hn-' + i++;
      let label: string = e.label;

      if (this.props.labelStringFetcher) {
        label = this.props.labelStringFetcher(label);
      }

      const ariaInvalid: Object = {};
      if (this.state.validated) {
        ariaInvalid['aria-invalid'] = !this.isRadioValid(e.type);
      }

      return (
        <div key={id}>
          <input
            id={id}
            onChange={this.onChange}
            onClick={this.onClick}
            type="radio"
            checked={e.type === this.props.selected}
            value={e.type}
            aria-checked={this.state.lastFocusedValue === e.type}
            disabled={e.disabled ? e.disabled : false}
            required={this.props.isRequired}
            // aria-required={this.props.isRequired}
            {...ariaInvalid}
          />
          <label htmlFor={id} onClick={this.onChange} role="button">
            {label}
            {e.content}
          </label>
          {e.hjelpetrigger}
        </div>
      );
    });

    const classes: string = classNames('atom_fieldset', {
      state_validationerror: !this.state.valid,
    });

    let wrapperClasses = 'mol_validation';
    if (!this.state.valid) {
      wrapperClasses += ' mol_validation--active';
    }

    let content: JSX.Element = (
      <div>
        <PrivateRadioGroup name={this.props.id} value={this.props.selected}>
          {inputFields}
        </PrivateRadioGroup>
        {this.props.children}
      </div>
    );

    return (
      <div className={wrapperClasses} id={`${this.props.id}-wrapper`}>
        {this.renderErrorMessage()}
        {!this.props.noFieldset ? (
          <fieldset className={classes}>
            {this.renderLegend()}
            {content}
          </fieldset>
        ) : (
          <div aria-labelledby={this.props.ariaLabelledBy} role="radiogroup">
            {content}
          </div>
        )}
      </div>
    );
  }
}
