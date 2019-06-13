import * as React from 'react';

import ValidationError from '../validation-error';

export interface SafeSelectProps {
  id: string;
  placeholder?: HTMLOptionElement;
  className?: string;
  wrapperClasses?: string;
  type?: string;
  errorMessage?: string | ((value: string | number | undefined) => string);
  onChange?: (event: React.FormEvent<{}>, id: string) => void;
  onValidated?: (valid: boolean | undefined) => void;
  onKeyDown?: React.EventHandler<React.KeyboardEvent<HTMLSelectElement>>;
  onFocus?: (event: React.FocusEvent<{}>, id: string) => void;
  tabIndex?: number;
  ariaRequired?: boolean;
  ariaLabel?: string;
  ariaLabelledby?: string;
  showLabel?: boolean;
  label?: string | JSX.Element;
  selectName?: string;
  isRequired?: boolean;
  validationErrorRenderer?: JSX.Element;
  requiredLabel?: string;
  optionalLabel?: string;
  options?: HTMLOptionElement[];
  showRequiredLabel?: boolean;
  showOptionalLabel?: boolean;
  value?: string;
  selected?: string;

  /**
   * Tillatter bare endringer av feltet hvis denne funksjonen returnerer true
   */

  onChangeValidator?: (value: string | undefined) => boolean;
  /**
   * Denne funksjonen returnere strengen dette feltet settes til etter
   * onChange. Tar imot e.target.value.
   */
  onChangeFormatter?: (value: string) => string;
  disabled?: boolean;
}

export interface SafeSelectState {
  isValid: boolean;
  value?: string;
  validated?: boolean;
}

interface EventTargetWithValue extends EventTarget {
  value: string;
}

export default class SafeSelectField extends React.Component<SafeSelectProps, SafeSelectState> {
  static hnFormComponent = true;
  static defaultProps: SafeSelectProps = {
    id: '',
    showRequiredLabel: true,
  };

  refs: {
    [key: string]: Element;
    selectElement: HTMLSelectElement;
  };

  constructor(props: SafeSelectProps) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.notifyChanged = this.notifyChanged.bind(this);
    this.notifyValidated = this.notifyValidated.bind(this);
    this.validateField = this.validateField.bind(this);
    this.state = {
      isValid: true,
      value: undefined,
      validated: false,
    };
  }

  componentWillMount(): void {
    const {selected, value}: SafeSelectProps = this.props;

    //value kom ikke inn som prop på et bruk av nedtrekksliste, men selected gjør. Legger opp til bruk av begge.
    const compatibleValue = value ? value : selected;
    if (compatibleValue === '' || compatibleValue === null || compatibleValue === undefined) {
      return;
    }
    this.setState({value: compatibleValue});
    if (this.props.onChangeValidator) {
      this.setState({isValid: this.props.onChangeValidator(compatibleValue)});
    }
  }

  componentDidMount(): void {
    const {value}: SafeSelectProps = this.props;
    if (value) {
      this.setState({value}, () => {
        if (value === '' || value === null || value === undefined) {
          return;
        } else {
          this.validateField();
        }
      });
    }
  }

  componentWillReceiveProps(nextProps: SafeSelectProps): void {
    if (nextProps.value !== this.props.value) {
      this.setState({value: nextProps.value});
    }
  }

  onChange(e: React.FormEvent<{}>): void {
    const value: string = (e.target as EventTargetWithValue).value as string;
    let formattedValue: string = value;
    if (this.props.onChangeFormatter) {
      formattedValue = this.props.onChangeFormatter(value);
    }

    if (this.state.validated) {
      this.setState({value: formattedValue}, this.validateField);
    } else {
      this.setState({value: formattedValue}, this.validateField);
    }
    this.notifyChanged(e);
  }

  notifyChanged(e: React.FormEvent<{}>): void {
    if (this.props.onChange) {
      this.props.onChange(e, this.props.id);
    }
  }

  notifyValidated(): void {
    if (this.props.onValidated) {
      this.props.onValidated(this.state.isValid);
    }
  }

  onFocus(e: React.FocusEvent<{}>): void {
    if (this.props.onFocus) {
      this.props.onFocus(e, this.props.id);
    }
  }

  focus(): void {
    this.refs.selectElement.focus();
  }

  getOptionWithValue(value: string | undefined): HTMLOptionElement | undefined {
    if (!this.props.options || !value) {
      return undefined;
    }
    const filteredOptions = this.props.options.filter((o: HTMLOptionElement) => o.value === value);
    if (!filteredOptions || filteredOptions.length === 0) {
      return undefined;
    }
    return filteredOptions[0];
  }

  validateField(): Promise<void> {
    return new Promise<void>((resolve: () => void) => {
      const validatedCB: () => void = () => {
        this.notifyValidated();
        resolve();
      };

      const value = this.state.value;
      if (this.props.onChangeValidator && this.props.isRequired) {
        this.setState({validated: true, isValid: this.props.onChangeValidator(value)}, validatedCB);
        return;
      }

      let valid = false;
      if (this.props.isRequired) {
        if (this.getOptionWithValue(value)) {
          valid = true;
        }
      } else {
        valid = true;
      }

      this.setState({validated: true, isValid: valid}, validatedCB);
    });
  }

  isValid(): boolean {
    return this.state.isValid;
  }

  renderErrorMessage(): JSX.Element {
    if (this.props.validationErrorRenderer && !this.state.isValid) {
      return this.props.validationErrorRenderer;
    }
    let error: string;
    if (this.props.errorMessage) {
      error =
        typeof this.props.errorMessage === 'string'
          ? this.props.errorMessage
          : this.props.errorMessage(this.state.value);
    } else {
      error = 'Ugyldig verdi';
    }

    return <ValidationError isValid={this.state.isValid} error={error} />;
  }

  renderLabel(): JSX.Element {
    return (
      <label htmlFor={this.props.selectName}>
        {this.props.label}
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
      </label>
    );
  }

  render(): JSX.Element {
    const {className, disabled, selected}: SafeSelectProps = this.props;
    const firstOption = this.props.options ? this.props.options[0] : undefined;
    const firstValue = firstOption ? firstOption.value : undefined;
    const selectedValue: string | undefined = this.state.value
      ? this.state.value
      : this.props.placeholder
      ? this.props.placeholder.value
      : firstValue;

    let classNames = className ? `atom_select__select ${className}` : 'atom_select__select';
    if (!this.state.isValid) {
      classNames += ' state_validationerror';
    }

    let wrapperClasses = `mol_validation ${this.props.wrapperClasses ? this.props.wrapperClasses : ''}`;
    if (!this.state.isValid) {
      wrapperClasses += ' mol_validation--active';
    }

    let required = false;
    if (this.props.isRequired) {
      required = this.props.isRequired;
    }

    const ariaInvalid: Object = {};
    if (this.state.validated) {
      ariaInvalid['aria-invalid'] = !this.state.isValid;
    }
    const options: JSX.Element[] = [];
    if (this.props.placeholder) {
      options.push(
        <option
          key={'placeholder'}
          value={this.props.placeholder.value}
          disabled
          hidden={navigator.platform.toUpperCase().indexOf('MAC') === -1}
          aria-selected={selectedValue === this.props.placeholder.value}>
          {this.props.placeholder.text}
        </option>,
      );
    }
    if (this.props.options) {
      this.props.options.forEach(function(item: HTMLOptionElement, index: number) {
        options.push(
          <option key={index} value={item.value} aria-selected={selectedValue === item.value}>
            {item.text}
          </option>,
        );
      });
    }

    return (
      <div className={wrapperClasses} id={`${this.props.id}-wrapper`}>
        {this.renderErrorMessage()}
        {this.props.showLabel && this.props.selectName ? this.renderLabel() : ''}
        <span className={'atom_select'}>
          <select
            tabIndex={this.props.tabIndex}
            className={classNames}
            required={required}
            defaultValue={selected ? selected : selectedValue}
            ref="selectElement"
            onChange={this.onChange}
            onFocus={this.onFocus}
            onKeyDown={this.props.onKeyDown}
            name={this.props.selectName}
            id={this.props.selectName}
            aria-label={this.props.ariaLabel}
            aria-labelledby={this.props.ariaLabelledby}
            aria-required={this.props.ariaRequired || required}
            disabled={disabled}
            {...ariaInvalid}>
            {options}
          </select>
        </span>
        {this.props.children}
      </div>
    );
  }
}
