import * as React from 'react';
import {FormChild} from '../../molecules/form';
import SafeInputField from '../safe-input-field';
import Constants from '../../../constants/datetime';
import {getHoursFromTimeString, getMinutesFromTimeString} from './DateCore';
import * as moment from 'moment';
import * as classNames from 'classnames';
import ValidationError from '../validation-error';
import {InlineButton} from '../buttons/inline-button';

interface ResetButton {
  onReset?: () => void;
  resetButtonText: string;
}

export interface TimeInputProps {
  id: string;
  value?: string;
  onValidated?: (valid: boolean | undefined) => void;
  onTimeChange?: (newTime: string | undefined) => void;
  onBlur?: (newTime: string) => void;
  renderFieldset?: boolean;
  className?: string;
  legend?: string | JSX.Element;
  isRequired?: boolean;
  readOnly?: boolean;
  msgMissingTime?: string;
  msgInvalidTime?: string;
  maxHour?: number;
  minHour?: number;
  maxMinute?: number;
  minMinute?: number;
  errorMessage?: string | ((value: string | number | undefined) => string);
  resetButton?: ResetButton;
  requiredLabel?: string;
  optionalLabel?: string;
  showRequiredLabel?: boolean;
  showOptionalLabel?: boolean;
}

export interface TimeInputState {
  value?: string | number;
  selected?: string;
  date?: Date;
  validated: boolean;
  valid: boolean;
  timeString?: string;
}

export default class TimeInput extends React.Component<TimeInputProps, TimeInputState> {
  static defaultProps: Partial<TimeInputProps> = {
    renderFieldset: true,
  };

  public refs: {
    hoursInput: FormChild;
    minutesInput: FormChild;
  };

  constructor(props: TimeInputProps) {
    super(props);
    this.state = {
      valid: true,
      validated: false,
      timeString: this.getValue(props),
    };

    this.handleHoursChange = this.handleHoursChange.bind(this);
    this.handleMinutesChange = this.handleMinutesChange.bind(this);
    this.onChildValidated = this.onChildValidated.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  componentWillReceiveProps(nextProps: TimeInputProps): void {
    this.setState({
      timeString: this.getValue(nextProps),
    });
  }

  getValue(props: TimeInputProps): string | undefined {
    const {value}: TimeInputProps = props;
    if (value) {
      return value;
    }
  }

  getTimeStringFromDate(date: Date): string {
    const momentDate = moment(date);
    return `${momentDate.hours()}${Constants.TIME_SEPARATOR}${momentDate.minutes()}`;
  }

  validateField(): Promise<void> {
    this.setState({validated: true});
    return new Promise<void>((resolve: () => void) => {
      this.validate(resolve);
    });
  }

  validate(cb?: () => void): void {
    const promises: Array<Promise<void>> = [];
    promises.push(this.refs.hoursInput.validateField());
    promises.push(this.refs.minutesInput.validateField());
    Promise.all(promises).then(() => {
      const newValue = this.areAllFieldsValid() && this.isTimeValid();
      this.setState({valid: newValue}, cb);
    });
  }

  isValid(): boolean {
    return this.state.valid;
  }

  areAllFieldsValid() {
    return this.refs.hoursInput.isValid() && this.refs.minutesInput.isValid();
  }

  isTimeValid(): boolean {
    // TODO: egen funksjon for å validere required
    /*if (!this.state.timeString || this.state.timeString === '') {
      return false;
    }*/
    const hoursAsString = getHoursFromTimeString(String(this.state.timeString));
    /*if (!hoursAsString || hoursAsString === '') {
      return false;
    }*/
    const minutesAsString = getMinutesFromTimeString(String(this.state.timeString));
    /*if (!minutesAsString || minutesAsString === '') {
      return false;
    }*/

    // Felt er ikke fylt ut enda, kan ikke validere
    if (hoursAsString === '' || minutesAsString === '') {
      return true;
    }

    try {
      const hours = parseInt(hoursAsString, 10);
      const minutes = parseInt(minutesAsString, 10);
      const time = moment(new Date())
        .hours(hours)
        .minutes(minutes);
      const minTime = this.getMinTime();
      const maxTime = this.getMaxTime();
      return time.isBetween(minTime, maxTime) || time.isSame(minTime) || time.isSame(maxTime);
    } catch (e) {
      return false;
    }
  }

  getMaxTime(): Date {
    return moment(new Date())
      .hours(this.getMaxHour())
      .minutes(this.getMaxMinute())
      .toDate();
  }

  getMinTime(): Date {
    return moment(new Date())
      .hours(this.getMinHour())
      .minutes(this.getMinMinute())
      .toDate();
  }

  onChildValidated(): void {
    if (!this.state.validated) {
      return;
    }
    const newValue = this.areAllFieldsValid() && this.isTimeValid();
    this.setState({valid: newValue}, () => {
      this.notifyValidated();
    });
  }

  notifyValidated(): void {
    if (!this.props.onValidated) {
      return;
    }
    this.props.onValidated(this.state.valid);
  }

  getMaxHour(): number {
    return this.props.maxHour ? this.props.maxHour : 23;
  }

  getMaxMinute(): number {
    return this.props.maxMinute ? this.props.maxMinute : 59;
  }

  getMinHour(): number {
    return this.props.minHour ? this.props.minHour : 0;
  }

  getMinMinute(): number {
    return this.props.minMinute ? this.props.minMinute : 0;
  }

  handleHoursChange(event: React.FormEvent<{}>): void {
    let value = this.padNumber((event.target as HTMLInputElement).value);
    if (parseInt(value, 10) > 23) {
      value = '23';
    } else if (parseInt(value, 10) < 0) {
      value = '0';
    }
    const minutes = getMinutesFromTimeString(String(this.state.timeString));
    const newValue = `${value}${Constants.TIME_SEPARATOR}${minutes}`;
    this.setState(
      {
        timeString: newValue,
      },
      () => {
        if (this.props.onTimeChange) {
          this.props.onTimeChange(newValue);
          return;
        }

        if (this.state.validated) {
          this.validate();
          this.notifyValidated();
        }
      },
    );
  }

  handleMinutesChange(event: React.FormEvent<{}>): void {
    let value = this.padNumber((event.target as HTMLInputElement).value);
    if (parseInt(value, 10) > 59) {
      value = '59';
    } else if (parseInt(value, 10) < 0) {
      value = '0';
    }
    const hours = getHoursFromTimeString(String(this.state.timeString));
    const newValue = `${hours}${Constants.TIME_SEPARATOR}${value}`;
    this.setState(
      {
        timeString: newValue,
      },
      () => {
        if (this.props.onTimeChange) {
          this.props.onTimeChange(newValue);
          return;
        }

        if (this.state.validated) {
          this.validate();
          this.notifyValidated();
        }
      },
    );
  }

  onBlur() {
    if (this.state.timeString && this.props.onBlur) {
      this.props.onBlur(this.state.timeString);
    }
  }

  onBlurTimeValidator = (time: number | string) => {
    if (time === '') {
      return true;
    }
    if (time > this.getMaxHour() || time < this.getMinHour()) {
      return false;
    }
    return true;
  };

  onBlurMinutesValidator = (minute: number | string) => {
    if (minute === '') {
      return true;
    }
    if (minute > this.getMaxMinute() || minute < this.getMinMinute()) {
      return false;
    }
    return true;
  };

  padNumber(number: string) {
    if (number.length < 2 && parseInt(number, 10) < 10) {
      return '0' + number;
    }
    return number;
  }

  renderTimeInputfields(): JSX.Element {
    const ariaInvalid: Object = {};
    if (this.state.validated) {
      ariaInvalid['aria-invalid'] = !this.isValid();
    }

    const hours = this.padNumber(getHoursFromTimeString(String(this.state.timeString)));
    const minutes = this.padNumber(getMinutesFromTimeString(String(this.state.timeString)));
    return (
      <div className="mol_timepicker__inputs">
        <SafeInputField
          id={`${this.props.id}_hours`}
          value={hours ? hours : undefined}
          type="number"
          max={this.getMaxHour()}
          min={this.getMinHour()}
          isRequired={this.props.isRequired}
          readOnly={this.props.readOnly}
          onChange={this.handleHoursChange}
          ref="hoursInput"
          validationErrorRenderer={<span />}
          onValidated={this.onChildValidated}
          onChangeValidator={() => true}
          onBlur={this.onBlur}
          ariaLabel="Timer"
          {...ariaInvalid}
        />
        <span className="mol_timepicker__separator">:</span>
        <SafeInputField
          id={`${this.props.id}_minutes`}
          value={minutes ? minutes : undefined}
          type="number"
          max={this.getMaxMinute()}
          min={this.getMinMinute()}
          isRequired={this.props.isRequired}
          readOnly={this.props.readOnly}
          onChange={this.handleMinutesChange}
          ref="minutesInput"
          validationErrorRenderer={<span />}
          onValidated={this.onChildValidated}
          onChangeValidator={() => true}
          onBlur={this.onBlur}
          ariaLabel="Minutter"
          {...ariaInvalid}
        />
        {this.renderResetButton()}
        {this.props.children}
      </div>
    );
  }

  renderErrorMessage(): JSX.Element | undefined {
    const {msgInvalidTime, msgMissingTime} = this.props;
    if (this.isValid()) {
      return undefined;
    }
    let error = '';
    if (this.props.errorMessage) {
      error =
        typeof this.props.errorMessage === 'string'
          ? this.props.errorMessage
          : this.props.errorMessage(this.state.timeString);
    } else if (!this.state.timeString && msgMissingTime) {
      error = msgMissingTime;
    } else if (msgInvalidTime) {
      error = msgInvalidTime;
    }
    return <ValidationError isValid={this.isValid()} error={error} />;
  }

  renderLegend(): JSX.Element | undefined {
    if (!this.props.legend) {
      return undefined;
    }
    return (
      <legend>
        {this.props.legend}{' '}
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

  resetFields = () => {
    this.setState({timeString: undefined}, () => {
      if (this.props.onTimeChange) {
        this.props.onTimeChange(undefined);
      }
      if (this.props.resetButton && this.props.resetButton.onReset) {
        this.props.resetButton.onReset();
      }
    });
  };

  renderResetButton = () => {
    if (this.props.resetButton && this.props.resetButton.resetButtonText) {
      return (
        <div className="mol_timepicker__resetbutton">
          <InlineButton type="reset" onClick={this.resetFields}>
            {this.props.resetButton.resetButtonText}
          </InlineButton>
        </div>
      );
    }
  };

  render(): JSX.Element | null {
    const classes = classNames('mol_timepicker mol_validation', this.props.className);
    const validationClasses = classNames('mol_validation', {'mol_validation--active': !this.isValid()});
    if (!this.props.renderFieldset) {
      return <div className={classes}>{this.renderTimeInputfields()}</div>;
    }
    return (
      <div className={validationClasses} id={`${this.props.id}-wrapper`}>
        {this.renderErrorMessage()}
        <fieldset className={classes}>
          {this.renderLegend()}
          {this.renderTimeInputfields()}
        </fieldset>
      </div>
    );
  }
}
