import * as React from 'react';
import * as classnames from 'classnames';
import {Spinner} from './../spinner';
import ValidationError from '../validation-error';

/**
 * Dette tekstområdet kan trygt motta nye props fra parent uten at verdien i inputfeltet overskrives
 * hvis feltet redigeres akkurat idet de nye propene sendes inn fra parent. Endringer av feltet blir
 * sendt til parent ved onChange.
 */

type sizes = 'xSmall' | 'small' | 'medium' | 'large' | 'xLarge';

interface HTMLMarkup {
  __html: string;
}

interface Window {
  HTMLElement?: any;
  chrome?: any;
}
export interface SafeTextareaState {
  value?: string;
  focused?: boolean;
  blurred?: boolean;
  valid: boolean;
  validated?: boolean;
  size?: sizes;
}

export interface SafeTextareaProps {
  onBlur?: (event: React.FocusEvent<{}>) => void;
  onChange?: (event: React.FormEvent<{}>) => void;
  onFocus?: (event: React.FocusEvent<{}>) => void;
  value?: string;
  placeholder?: string;

  /** Maks lengde på tekst i input */
  maxlength?: number;

  /** Tillater å skrive over maxLength.
   * Viser da feilmeldingstekst hvis over flere tegn enn maxLength.
   * Viser også counter med rød farge.
   * */
  allowInputOverMaxLength?: boolean;

  minlength?: number;
  rows?: number;
  disabled?: boolean;
  readOnly?: boolean;
  counter?: boolean;
  autoFocus?: boolean;
  id: string;
  atomCounter?: boolean;
  isRequired?: boolean;
  requiredErrorMessage?: string | ((value: string | number | undefined) => string);
  loading?: boolean;
  showLabel?: boolean;
  label?: string;
  requiredLabel?: string;
  optionalLabel?: string;
  validator?: (value: string | undefined) => boolean;
  errorMessage?: string | ((value: string | number | undefined) => string);
  onValidated?: (valid: boolean) => void;
  showRequiredLabel?: boolean;
  showOptionalLabel?: boolean;
  ariaLabel?: string;
  size?: sizes;
  wrapperClasses?: string;
  hideLengthLabel?: boolean;
}

export class SafeTextarea extends React.Component<SafeTextareaProps, SafeTextareaState> {
  static hnFormComponent = true;

  ctrls: {
    textarea?: HTMLTextAreaElement;
  } = {};

  constructor(props: SafeTextareaProps) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.notifyValidated = this.notifyValidated.bind(this);
    this.setSize = this.setSize.bind(this);
    this.state = {
      focused: false,
      value: undefined,
      blurred: false,
      valid: true,
      validated: false,
    };
  }

  componentWillMount(): void {
    this.setSize(this.props);
  }

  componentDidMount(): void {
    const {value} = this.props;
    this.setState({value}, () => {
      if (value === '' || value === null || value === undefined) {
        return;
      } else {
        this.validateField();
      }
    });

    if (this.props.autoFocus) {
      const position: number = this.props.value ? this.props.value.length : 0;
      if (this.ctrls.textarea && typeof this.ctrls.textarea.setSelectionRange === 'function') {
        this.ctrls.textarea.setSelectionRange(position, position);
      }
    }
  }

  componentWillReceiveProps(nextProps: SafeTextareaProps): void {
    if (!this.state.focused) {
      this.setState({value: nextProps.value});
    }
    if (this.props.size !== nextProps.size || this.props.maxlength !== nextProps.maxlength) {
      this.setSize(nextProps);
    }
  }

  componentDidUpdate(_prevProps: SafeTextareaProps, prevState: SafeTextareaState) {
    if (prevState.valid !== this.state.valid) {
      this.notifyValidated();
    }
  }

  setSize(props: SafeTextareaProps): void {
    const {size, maxlength} = props;

    if (size) {
      this.setState({size});
    } else if (maxlength) {
      if (maxlength < 250) {
        this.setState({size: 'small'});
      } else if (maxlength < 500) {
        this.setState({size: 'medium'});
      } else {
        this.setState({size: 'large'});
      }
    } else {
      this.setState({size: 'medium'});
    }
  }

  validator = (value: string | undefined) => {
    const overMaxlength = this.isValueOverMaxLength(value);
    const underMinlength = this.isValueUnderMinLength(value);

    if (overMaxlength || underMinlength) {
      return false;
    } else if (this.props.validator) {
      return this.props.validator(value);
    } else {
      return true;
    }
  };

  isValueOverMaxLength = (value: string | undefined) => {
    return this.props.maxlength && value ? value.replace(/(\r\n|\n|\r)/g, '-').length > this.props.maxlength : false;
  };

  isValueUnderMinLength = (value: string | undefined) => {
    return this.props.minlength && value ? value.length < this.props.minlength : false;
  };

  validate = (value: string | undefined) => {
    return new Promise<void>((resolve: () => void) => {
      const validatedCB: () => void = () => {
        resolve();
      };
      this.setState({valid: this.validator(value) && this.isValidIfRequired(value)}, validatedCB);
    });
  };

  onBlur(event: React.FocusEvent<{}>): void {
    const target = event.target as HTMLTextAreaElement;
    this.setState({focused: false, blurred: true, valid: this.validator(target.value), validated: true});
    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  }

  onChange(event: React.FormEvent<{}>): void {
    const target: HTMLTextAreaElement = event.target as HTMLTextAreaElement;
    this.setState({
      value: target.value,
      valid: this.validator(target.value),
      validated:
        this.props.allowInputOverMaxLength && this.isValueOverMaxLength(target.value) ? true : this.state.validated,
    });
    if (this.props.onChange) {
      this.props.onChange(event);
    }
  }

  notifyValidated(): void {
    if (this.props.onValidated) {
      this.props.onValidated(this.state.valid);
    }
  }

  validateField(): Promise<void> {
    this.setState({validated: true});
    return this.validate(this.state.value);
  }

  isValidIfRequired(value?: string) {
    if (this.props.isRequired) {
      return value !== null && value !== undefined && value.toString().trim() !== '';
    }

    return true;
  }

  isValid(): boolean {
    return this.state.valid;
  }

  onFocus(event: React.FocusEvent<{}>): void {
    this.setState({focused: true});
    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  }

  focus(): void {
    if (!this.ctrls.textarea) {
      return;
    }
    this.ctrls.textarea.focus();
  }

  createMarkupForFancyDescription(html?: string): HTMLMarkup {
    let content = '';

    if (html !== null && html !== undefined) {
      content = html;
    }
    return {__html: content};
  }

  renderLabel(): JSX.Element | null {
    if (!this.props.showLabel || !this.props.id) {
      return null;
    }

    return (
      <label htmlFor={this.props.id}>
        <span dangerouslySetInnerHTML={this.createMarkupForFancyDescription(this.props.label)} />
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
        {this.props.maxlength && !this.props.hideLengthLabel && (
          <div className="sublabel">Maksimum {this.props.maxlength} tegn</div>
        )}
      </label>
    );
  }

  renderErrorMessage(): JSX.Element | null {
    if (!this.state.validated) {
      return null;
    }

    let error: string | undefined;
    if (!this.state.valid) {
      if (this.props.isRequired && !this.isValidIfRequired(this.state.value) && this.props.requiredErrorMessage) {
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

    return <ValidationError isValid={this.state.valid} error={error} />;
  }

  render(): JSX.Element {
    const {
      maxlength,
      atomCounter,
      loading,
      isRequired,
      minlength,
      id,
      rows,
      placeholder,
      autoFocus,
      disabled,
      ariaLabel,
      readOnly,
      allowInputOverMaxLength,
    } = this.props;
    const {value, valid, validated, size} = this.state;

    const counterPrefixText = '/'; // TODO: Replace with resource values
    const counterInfixText = 'av'; // TODO: Replace with resource values
    const counterSuffixText = ' tegn brukt'; // TODO: Replace with resource values

    const isSafari: boolean = Object.prototype.toString.call((window as Window).HTMLElement).indexOf('Constructor') > 0;
    const isChrome: boolean = !!(window as Window).chrome;

    const isWeird: boolean = isSafari || isChrome;

    let counter: JSX.Element = <noscript />;

    if (counter || atomCounter) {
      let length = 0;

      if (value) {
        length = isWeird ? value.replace(/(\r\n|\n|\r)/g, '-').length : value.length;

        if (!allowInputOverMaxLength && maxlength && length > maxlength) {
          length = maxlength;
        }
      }

      let progress = 0;
      if (maxlength) {
        progress = length / maxlength;
      }

      const ariaLevel = progress > 0.75 ? 'polite' : 'off';

      const counterClasses: string = classnames({
        'char-counter': !atomCounter,
        'atom_char-counter': atomCounter,
      });

      counter = (
        <div className={counterClasses} aria-live={ariaLevel} aria-atomic="true">
          <span className={maxlength && length > maxlength ? 'invalid' : ''}>{length}</span>
          <span aria-hidden="true">{counterPrefixText}</span>
          <span className="visuallyhidden">{counterInfixText}</span>
          {maxlength}
          <span className="visuallyhidden">{counterSuffixText}</span>
        </div>
      );
    }

    let spinner: JSX.Element | null = null;
    if (loading) {
      spinner = <Spinner inline mini />;
    }

    let required = false;
    if (isRequired) {
      required = isRequired;
    }

    const textAreaClasses: string = classnames('', {
      state_validationerror: !valid && validated,
      'atom_textarea--small': size === 'small',
      'atom_textarea--medium': size === 'medium',
      'atom_textarea--large': size === 'large',
    });

    let wrapperClasses = classnames(
      'input',
      'mol_validation',
      'atom_textarea',
      {'mol_validation--active': !valid && validated},
      this.props.wrapperClasses,
    );

    const ariaInvalid: Object = {};
    if (validated) {
      ariaInvalid['aria-invalid'] = !valid;
    }

    return (
      <div className={wrapperClasses} id={`${id}-wrapper`}>
        {this.renderErrorMessage()}
        {this.renderLabel()}
        <textarea
          className={textAreaClasses}
          style={{resize: 'none'}}
          value={value || ''}
          maxLength={!allowInputOverMaxLength ? maxlength : undefined}
          minLength={minlength}
          id={id}
          rows={rows}
          placeholder={placeholder}
          onChange={this.onChange}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          autoFocus={autoFocus}
          disabled={disabled}
          ref={(textarea: HTMLTextAreaElement) => (this.ctrls.textarea = textarea)}
          required={required}
          aria-required={required}
          aria-label={ariaLabel}
          readOnly={readOnly}
          {...ariaInvalid}
        />
        <div className="printableTextareaContent">{value}</div>
        {spinner}
        {maxlength ? counter : null}
        {this.props.children}
      </div>
    );
  }
}
