import * as React from 'react';
import * as classNames from 'classnames';
import ValidationError from '../validation-error';
import {Spinner} from '../spinner/';

export interface SafeInputFieldProps {
  id?: string;
  value?: string | number;
  onBlur?: (event: React.FocusEvent<{}>) => void | undefined;
  placeholder?: string;
  type?: string;
  className?: string;
  wrapperClasses?: string;
  onBlurValidator?: (value: string | number) => Promise<boolean>;
  min?: number;
  minLength?: number;
  max?: number;

  /** Maks lengde på tekst i input */
  maxLength?: number;

  /** Tillater å skrive over maxLength.
   * Viser da feilmeldingstekst hvis over flere tegn enn maxLength
   * */
  allowInputOverMaxLength?: boolean;

  errorMessage?: string | ((value: string | number | undefined) => string);
  onChange?: (event: React.FormEvent<{}>, id: string | undefined, formattedValue: string) => void;
  onValidated?: (valid: boolean | undefined) => void;
  onFocus?: (event: React.FocusEvent<{}>, id: string | undefined) => void;
  onKeyDown?: React.EventHandler<React.KeyboardEvent<HTMLInputElement>>;
  tabIndex?: number;
  ariaRequired?: boolean;
  ariaLabel?: string;
  ariaLabelledby?: string;
  showLabel?: boolean;
  label?: string | JSX.Element;
  inputName?: string;
  isRequired?: boolean;
  requiredErrorMessage?: string | ((value: string | number | undefined) => string);
  validationErrorRenderer?: JSX.Element;
  requiredLabel?: string;
  optionalLabel?: string;
  inputProps?: Object;
  showRequiredLabel?: boolean;
  showOptionalLabel?: boolean;
  readOnly?: boolean;
  size?: 'xSmall' | 'small' | 'medium' | 'large' | 'xLarge' | 'fullSize';
  requiredLabelHtml?: string;
  keepDefaultSize?: boolean;
  blurSpinnerAlignment?: 'left' | 'right';

  /**
   * Tillatter bare endringer av feltet hvis denne funksjonen returnerer true
   */
  onChangeValidator?: (value: string | number) => boolean;

  /**
   * Validerer value ved submit, dersom required
   */
  onSubmitValidator?: (value?: string | number) => boolean;

  /**
   * Denne funksjonen returnere strengen dette feltet settes til etter
   * onChange. Tar imot e.target.value.
   */
  onChangeFormatter?: (value: string | number) => string;

  disabled?: boolean;
  pattern?: string;
}

export interface SafeInputFieldState {
  focused?: boolean;
  isValid: boolean;
  value?: string | number;
  validated?: boolean;
  loading: boolean;
  dirtyInput: boolean;
  onBlurValidationPromise?: Promise<boolean>;
}

interface EventTargetWithValue extends EventTarget {
  value: string;
}

/**
 * Dette tekstinputfeltet kan trygt motta nye props fra parent uten at verdien i inputfeltet overskrives
 * hvis feltet redigeres akkurat idet de nye propene sendes inn fra parent. Endringer av feltet blir
 * sendt til parent ved onBlur.
 */
export default class SafeInputField extends React.Component<SafeInputFieldProps, SafeInputFieldState> {
  static hnFormComponent = true;
  static defaultProps: SafeInputFieldProps = {
    id: undefined,
    onBlur: undefined,
    value: undefined,
    showRequiredLabel: true,
    readOnly: false,
    size: 'medium',
    blurSpinnerAlignment: 'left',
  };

  refs: {
    [key: string]: Element;
    inputField: HTMLInputElement;
  };

  constructor(props: SafeInputFieldProps) {
    super(props);
    this.state = {
      focused: false,
      isValid: true,
      value: undefined,
      validated: false,
      loading: false,
      dirtyInput: false,
    };

    this.onChange = this.onChange.bind(this);
    this.notifyChanged = this.notifyChanged.bind(this);
    this.notifyValidated = this.notifyValidated.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.focus = this.focus.bind(this);
    this.isTypeNumber = this.isTypeNumber.bind(this);
    this.validate = this.validate.bind(this);
    this.validateNumber = this.validateNumber.bind(this);
    this.validateField = this.validateField.bind(this);
    this.isValidIfRequired = this.isValidIfRequired.bind(this);
    this.isValid = this.isValid.bind(this);
    this.renderErrorMessage = this.renderErrorMessage.bind(this);
    this.renderLabel = this.renderLabel.bind(this);
    this.getInputClasses = this.getInputClasses.bind(this);
  }

  componentDidMount(): void {
    const {value}: SafeInputFieldProps = this.props;
    this.setState({value}, () => {
      if (value === '' || value === null || value === undefined) {
        return;
      } else {
        // Kjør alle valideringsfunksjoner
        if (!this.validate(value)) {
          this.setState({isValid: false, validated: true});
        } else if (this.props.onChangeValidator && !this.props.onChangeValidator(value)) {
          this.setState({isValid: false, validated: true});
        } else if (this.props.onBlurValidator) {
          this.props.onBlurValidator(value).then(isValid => {
            this.setState({isValid, validated: true});
          });
        }
      }
    });
  }

  componentDidUpdate(_prevProps: SafeInputFieldProps, prevState: SafeInputFieldState) {
    if (prevState.isValid !== this.state.isValid) {
      this.notifyValidated();
    }
  }

  componentWillReceiveProps(nextProps: SafeInputFieldProps): void {
    if (!this.state.focused) {
      this.setState({value: nextProps.value});
    }
  }

  onChange(e: React.FormEvent<{}>) {
    const value: string = (e.target as EventTargetWithValue).value as string;
    let formattedValue: string = value;
    if (this.props.onChangeFormatter) {
      formattedValue = this.props.onChangeFormatter(value);
    }
    if (formattedValue !== this.state.value) {
      // Input har endret seg. Dirtyinput = ikke validert
      this.setState({value: formattedValue, dirtyInput: true});

      if (!this.validate(formattedValue)) {
        this.setState({isValid: false});
      } else if (this.props.onChangeValidator && this.state.validated) {
        this.setState({isValid: this.props.onChangeValidator(value)});
      } else {
        this.setState({isValid: true});
      }

      this.notifyChanged(e, formattedValue);

      if (!formattedValue || (this.props.allowInputOverMaxLength && this.isValueOverMaxLength(formattedValue))) {
        this.setState({
          validated: !formattedValue ? false : true,
        });
      }
    }
  }

  notifyChanged(e: React.FormEvent<{}>, formattedValue: string) {
    if (this.props.onChange) {
      this.props.onChange(e, this.props.id, formattedValue);
    }
  }

  notifyValidated() {
    if (this.props.onValidated) {
      this.props.onValidated(this.state.isValid);
    }
  }

  onMouseDown() {
    if (this.props.type !== 'number') {
      return;
    }
    if (this.state.focused) {
      return;
    }
    // Firefox does not focus number input field on click on arrow buttons
    this.focus();
  }

  onFocus(e: React.FocusEvent<{}>) {
    this.setState({focused: true});
    if (this.props.onFocus) {
      this.props.onFocus(e, this.props.id);
    }
  }

  onBlur(e: React.FocusEvent<{}>) {
    e.persist();
    const value: string = (e.target as EventTargetWithValue).value as string;
    this.setState({focused: false});
    let state: Partial<SafeInputFieldState> | null = null;
    if (this.state.dirtyInput) {
      if (!this.validate(value)) {
        state = {isValid: false, validated: true, dirtyInput: false};
      } else if (typeof value === 'string' && this.props.minLength && value && value.length < this.props.minLength) {
        state = {isValid: false, validated: true, dirtyInput: false};
      } else if (value !== '' && this.props.onChangeValidator && !this.props.onChangeValidator(value)) {
        state = {isValid: false, validated: true, dirtyInput: false};
      } else if (value !== '' && this.props.onBlurValidator) {
        state = {loading: true, onBlurValidationPromise: this.props.onBlurValidator(value)};
      }
    }
    if (state) {
      this.setState(state as SafeInputFieldState, () => {
        if (this.props.onBlurValidator && this.state.onBlurValidationPromise) {
          this.state.onBlurValidationPromise.then(isValid => {
            this.setState({
              isValid,
              validated: true,
              loading: false,
              dirtyInput: false,
              onBlurValidationPromise: undefined,
            });
          });
        }
        if (this.props.onBlur) {
          this.props.onBlur(e);
        }
      });
    } else {
      if (this.props.onBlur) {
        this.props.onBlur(e);
      }
    }
  }

  focus() {
    this.refs.inputField.focus();
  }

  isTypeNumber() {
    return this.props.type === 'number' || this.props.type === 'tel';
  }

  validate(value: string | number | undefined) {
    if (this.isTypeNumber() && !this.validateNumber(value)) {
      return false;
    }
    if (
      typeof value === 'string' &&
      !this.state.isValid &&
      this.props.minLength &&
      value &&
      value.length < this.props.minLength
    ) {
      return false;
    }
    if (this.isValueOverMaxLength(value)) {
      return false;
    }
    if (this.props.pattern && value) {
      const regexp = new RegExp(this.props.pattern);
      if (!regexp.test(value.toString())) {
        return false;
      }
    }
    return true;
  }

  isValueOverMaxLength(value: string | number | undefined) {
    return typeof value === 'string' && this.props.maxLength && value && value.length > this.props.maxLength;
  }

  validateNumber(value: string | number | undefined) {
    const {min, max} = this.props;

    if (!value) {
      return true;
    }
    if (min !== null && min !== undefined && value < min) {
      return false;
    }
    if (max !== null && max !== undefined && value > max) {
      return false;
    }
    return true;
  }

  // Denne funksjonen blir kalt på submit i form.
  validateField() {
    return new Promise<void>((resolve: () => void) => {
      if (this.props.onSubmitValidator) {
        this.setState({
          isValid: this.props.onSubmitValidator(this.state.value),
          validated: true,
        });
        resolve();
      } else if (!this.isValidIfRequired()) {
        this.setState({isValid: false, validated: true});
        resolve();
      } else if (this.state.onBlurValidationPromise) {
        // Onblurvalidering på gang, vi må vente til den er ferdig før vi vet om form er gyldig
        this.state.onBlurValidationPromise.then(() => {
          resolve();
        });
      } else {
        resolve();
      }
    });
  }

  isValidIfRequired() {
    if (this.props.isRequired) {
      return this.state.value !== null && this.state.value !== undefined && this.state.value.toString().trim() !== '';
    }

    return true;
  }

  isValid() {
    return this.state.isValid;
  }

  renderErrorMessage() {
    if (!this.state.validated) {
      return null;
    }
    if (this.props.validationErrorRenderer && !this.state.isValid) {
      return this.props.validationErrorRenderer;
    }

    let error: string | undefined;
    if (!this.state.isValid) {
      if (this.props.isRequired && !this.isValidIfRequired() && this.props.requiredErrorMessage) {
        error =
          typeof this.props.requiredErrorMessage === 'string'
            ? this.props.requiredErrorMessage
            : this.props.requiredErrorMessage(this.state.value);
      } else if (this.props.errorMessage) {
        error =
          typeof this.props.errorMessage === 'string'
            ? this.props.errorMessage
            : this.props.errorMessage(this.state.value);
      } else {
        error = 'Ugyldig verdi';
      }

      if (this.props.allowInputOverMaxLength && this.isValueOverMaxLength(this.state.value)) {
        error = 'Du har skrevet for mange tegn. Gjør teksten kortere.';
      }
    }

    if (!error) {
      return null;
    }
    return <ValidationError isValid={this.state.isValid} error={error} />;
  }

  createMarkup(htmlString: string) {
    return {__html: htmlString};
  }

  renderLabel() {
    return (
      <label htmlFor={this.props.inputName}>
        {this.props.label}
        {this.props.isRequired && this.props.requiredLabel && this.props.showRequiredLabel ? (
          <em> {this.props.requiredLabel}</em>
        ) : (
          ''
        )}
        {this.props.isRequired && this.props.requiredLabelHtml && this.props.showRequiredLabel ? (
          <span dangerouslySetInnerHTML={this.createMarkup(this.props.requiredLabelHtml)} />
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

  getInputClasses() {
    if (this.props.maxLength) {
      const max: number = this.props.maxLength > 40 ? 40 : this.props.maxLength;
      return `atom_input--${max}`;
    } else if (this.props.max && (this.props.type === 'number' || this.props.type === 'tel')) {
      const length: number = this.props.max.toString().length;
      return `atom_input--${length}`;
    } else {
      return '';
    }
  }

  render() {
    const {
      className,
      disabled,
      size,
      blurSpinnerAlignment,
      keepDefaultSize,
      isRequired,
      id,
      showLabel,
      inputName,
      tabIndex,
      min,
      max,
      minLength,
      maxLength,
      allowInputOverMaxLength,
      type,
      placeholder,
      onKeyDown,
      ariaLabel,
      ariaLabelledby,
      ariaRequired,
      inputProps,
      readOnly,
    }: SafeInputFieldProps = this.props;
    const {value, isValid, validated, loading} = this.state;

    const inputValue: string = typeof value === 'string' ? (value as string) : value ? value.toString() : '';

    let inputClasses: string = classNames(
      'hn-safe-input',
      className,
      {
        'safeInputFieldError state_validationerror': validated && !isValid,
        'atom_input--xsmall': size === 'xSmall',
        'atom_input--small': size === 'small',
        'atom_input--medium': size === 'medium',
        'atom_input--large': size === 'large',
        'atom_input--xlarge': size === 'xLarge',
        atom_input: size === 'fullSize',
        'atom_input--loading': loading,
        'atom_input--spinnerright': blurSpinnerAlignment === 'right',
      },
      keepDefaultSize ? '' : this.getInputClasses(),
    );

    const wrapperClasses: string = classNames('safeInputField', 'mol_validation', this.props.wrapperClasses, {
      'mol_validation--active': validated && !isValid,
    });

    let required = false;
    if (isRequired) {
      required = isRequired;
    }

    const ariaInvalid: Object = {};
    if (validated) {
      ariaInvalid['aria-invalid'] = validated && !isValid;
    }

    return (
      <div className={wrapperClasses} id={`${id}-wrapper`}>
        {this.renderErrorMessage()}
        {showLabel && inputName ? this.renderLabel() : ''}
        <input
          tabIndex={tabIndex}
          className={inputClasses}
          min={min}
          max={max}
          maxLength={!allowInputOverMaxLength ? maxLength : undefined}
          minLength={minLength}
          value={inputValue}
          type={type ? type : 'text'}
          placeholder={placeholder}
          onChange={this.onChange}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          onMouseDown={this.onMouseDown}
          onKeyDown={onKeyDown}
          disabled={disabled}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledby}
          aria-required={ariaRequired || required}
          required={required}
          name={inputName}
          id={inputName}
          ref="inputField"
          {...inputProps}
          {...ariaInvalid}
          autoComplete="off"
          readOnly={readOnly}
        />
        {loading ? <Spinner circular inline local className="atom_input__spinner" /> : null}
        {this.props.children}
      </div>
    );
  }
}
