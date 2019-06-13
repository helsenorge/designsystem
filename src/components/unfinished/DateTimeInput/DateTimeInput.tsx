import * as React from 'react';
import {DatePicker} from '../datepicker';
import Time from '../time-input';
import * as moment from 'moment';
import {buildNewDate, getHoursFromTimeString, getMinutesFromTimeString} from '../time-input/date-core';
import * as classNames from 'classnames';
import ValidationError from '../validation-error';
import DateTimeConstants from '../../../constants/datetime';

export interface DateTimeResources {
  errorRequired?: string;
  errorInvalidDate?: string;
  errorInvalidTime?: string;
  errorAfterMaxDate?: string;
  errorBeforeMinDate?: string;
  errorStartAfterEnd?: string;
}

interface DateTimeProps {
  id: string;
  value?: Date;
  onValidated?: (valid: boolean | undefined) => void;
  maxDateStart?: Date;
  maxDate?: Date;
  minDate?: Date;
  minDateStart?: Date;
  onChange?: (date: Date) => void;
  onBlur?: (date: Date) => void;
  promptLogin?: () => void;
  className?: string;
  legend: string | JSX.Element;
  isRequired?: boolean;
  isDatepickerRequired?: boolean;
  isTimeRequired?: boolean;
  datepickerPlaceholder?: string;
  datepickerDisabled?: boolean;
  timeDisabled?: boolean;
  datepickerLabel?: string;
  timeLabel?: string;
  errorMessage?: string | ((date: Date, timeString: string) => string);
  resources?: DateTimeResources;
  isPasientreiser?: boolean;
  requiredLabel?: string;
  optionalLabel?: string;
  showRequiredLabel?: boolean;
  showOptionalLabel?: boolean;
  timeClassName?: string;
}

interface DateTimeState {
  valid: boolean;
  validated: boolean;
  date?: Date;
  timeString?: string;
}

export default class DateTime extends React.Component<DateTimeProps, DateTimeState> {
  static hnFormComponent = true;

  public refs: {
    dateInput: DatePicker;
    timeInput: Time;
  };

  constructor(props: DateTimeProps) {
    super(props);
    const defaultState: DateTimeState = {
      valid: true,
      validated: true,
      date: undefined,
    };

    defaultState.date = props.value;
    if (defaultState.date) {
      const momentDate = moment(defaultState.date);
      defaultState.timeString = `${momentDate.hours()}${DateTimeConstants.TIME_SEPARATOR}${momentDate.minutes()}`;
    }

    this.state = defaultState;

    this.onTimeChange = this.onTimeChange.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.onChildValidated = this.onChildValidated.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.validate();
    // Pasientreiser gjør ting annerledes og må ha ett tidspunkt
    if (props.isPasientreiser && !defaultState.timeString) {
      defaultState.timeString = '12:00';
    }
  }

  componentWillReceiveProps(nextProps: DateTimeProps) {
    let updatedState = {};
    if (nextProps.value && this.props.value && nextProps.value.getTime() !== this.props.value.getTime()) {
      const momentDate = moment(nextProps.value);
      const timeString = `${momentDate.hours()}${DateTimeConstants.TIME_SEPARATOR}${momentDate.minutes()}`;

      updatedState = {
        date: nextProps.value,
        timeString,
      };
    }
    this.setState(updatedState, () => {
      this.validate();
    });
  }

  validateField(): Promise<void> {
    this.setState({validated: true});
    return new Promise<void>((resolve: () => void) => {
      this.validate(resolve);
    });
  }

  validate(cb?: () => void): void {
    const promises: Array<Promise<void>> = [];
    if (this.refs.dateInput) {
      promises.push(this.refs.dateInput.validateField());
    }
    if (this.refs.timeInput) {
      promises.push(this.refs.timeInput.validateField());
    }
    Promise.all(promises).then(() => {
      const newValue = this.areAllFieldsValid() && this.isTimeValid();
      this.setState({valid: newValue}, cb);
    });
  }

  isValid(): boolean {
    return this.state.valid;
  }

  notifyValidated(): void {
    if (!this.props.onValidated) {
      return;
    }
    this.props.onValidated(this.state.valid);
  }

  areAllFieldsValid() {
    if (this.refs.dateInput && this.refs.timeInput) {
      return this.refs.dateInput.isValid() && this.refs.timeInput.isValid();
    }
    return true;
  }

  isTimeValid(): boolean {
    // Ikke ferdig å fylle ut. Da er det gyldig
    if (
      !this.state.timeString ||
      getHoursFromTimeString(this.state.timeString) === '' ||
      getMinutesFromTimeString(this.state.timeString) === '' ||
      !this.state.date
    ) {
      return true;
    }
    const currentDate = this.buildNewDate();
    if (!currentDate) {
      return false;
    }
    if (this.isAfterMaxDate(currentDate)) {
      return false;
    }
    if (this.startIsAfterMaxDate(currentDate)) {
      return false;
    }
    if (this.isBeforeMinDate(currentDate)) {
      return false;
    }
    if (this.startIsBeforeMinDate(currentDate)) {
      return false;
    }
    return true;
  }

  startIsAfterMaxDate = (date: Date) => {
    const momentDate = moment(date);
    const maxDate = this.getMaxDateStart();
    if (maxDate && momentDate.isAfter(maxDate)) {
      return true;
    }
    return false;
  };
  isAfterMaxDate = (date: Date) => {
    const momentDate = moment(date);
    const maxDate = this.getMaxDate();
    if (maxDate && momentDate.isAfter(maxDate)) {
      return true;
    }
    return false;
  };
  startIsBeforeMinDate = (date: Date) => {
    const momentDate = moment(date);
    const minDate = this.getMinDateStart();
    if (minDate && momentDate.isBefore(minDate)) {
      return true;
    }
    return false;
  };
  isBeforeMinDate = (date: Date) => {
    const momentDate = moment(date);
    const minDate = this.getMinDate();
    if (minDate && momentDate.isBefore(minDate)) {
      return true;
    }
    return false;
  };

  getMaxDate(): Date | undefined {
    return this.props.maxDate;
  }

  getMaxDateStart(): Date | undefined | null {
    return this.props.maxDateStart;
  }

  getMinDate(): Date | undefined {
    return this.props.minDate;
  }
  getMinDateStart(): Date | undefined | null {
    return this.props.minDateStart;
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

  buildNewDate(): Date | undefined {
    const {timeString, date} = this.state;
    if (timeString && date) {
      return buildNewDate(date, timeString);
    }
    return undefined;
  }

  dispatchNewDate() {
    if (!this.isValid() || !this.props.onChange) {
      return;
    } else if (this.state.date && this.state.timeString) {
      const date = this.buildNewDate();
      if (date) {
        this.props.onChange(date);
      }
    }
  }

  onBlur() {
    if (!this.props.onBlur) {
      return;
    } else {
      if (this.props.promptLogin) {
        this.props.promptLogin();
      }
      const date = this.buildNewDate();
      if (date && date !== this.state.date) {
        this.props.onBlur(date);
      }
    }
  }

  onTimeChange(newTime: string): void {
    this.setState(
      {
        timeString: newTime,
      },
      () => {
        if (this.state.validated) {
          this.validate(this.dispatchNewDate);
          this.notifyValidated();
        }
      },
    );
  }

  onDateChange(newDate?: Date): void {
    if (!newDate) {
      // clearing the date
      this.setState({
        date: newDate,
      });
    } else if (!!this.state.date && moment(newDate).isSame(this.state.date, 'day')) {
      // datepicker fires onDateChange also when nothing has changed
      this.setState({valid: true});
    } else {
      this.setState(
        {
          date: moment(newDate).toDate(),
        },
        () => {
          if (this.state.validated) {
            this.validate(this.props.onBlur ? this.onBlur : this.dispatchNewDate);
            this.notifyValidated();
          }
        },
      );
    }
  }

  getErrorMessage(): string {
    let error;
    const newDate = this.buildNewDate();
    if (this.isValid()) {
      error = '';
    } else if (this.props.errorMessage && this.state.date && this.state.timeString) {
      error =
        typeof this.props.errorMessage === 'string'
          ? this.props.errorMessage
          : this.props.errorMessage(this.state.date, this.state.timeString);
    } else if (this.props.resources && this.state.date && !this.refs.dateInput.isValidDateFormat()) {
      error = this.props.resources.errorInvalidDate;
    } else if (this.props.resources && !this.refs.timeInput.isValid()) {
      error = this.props.resources.errorInvalidTime;
    } else if (this.props.resources && newDate && this.isAfterMaxDate(newDate)) {
      error = this.props.resources.errorAfterMaxDate;
    } else if (this.props.resources && newDate && this.startIsAfterMaxDate(newDate)) {
      error = this.props.resources.errorStartAfterEnd;
    } else if (this.props.resources && newDate && this.isBeforeMinDate(newDate)) {
      error = this.props.resources.errorBeforeMinDate;
    } else if (this.props.resources && newDate && this.startIsBeforeMinDate(newDate)) {
      error = this.props.resources.errorStartAfterEnd;
    } else if (this.props.resources && (!this.state.date || !this.state.timeString)) {
      error = this.props.resources.errorRequired;
    } else {
      error = 'Ugyldig tidspunkt';
    }
    if (error === undefined) {
      error = '';
    }
    return error;
  }

  renderLegend = () => {
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
  };

  render(): JSX.Element | null {
    const classes = classNames('mol_datetime mol_validation', this.props.className, {
      'mol_validation--active': !this.isValid(),
    });

    return (
      <fieldset id={`${this.props.id}-wrapper`}>
        <div className={classes}>
          <ValidationError isValid={this.isValid()} error={this.getErrorMessage()} />

          {this.renderLegend()}
          <div className="mol_datetime__inputwrapper">
            <div className="mol_datetime__date">
              <DatePicker
                id={`${this.props.id}-date`}
                label={this.props.datepickerLabel}
                isNullable={true}
                isRequired={this.props.isRequired ? true : this.props.isDatepickerRequired ? true : false}
                placeholder={this.props.datepickerPlaceholder}
                ref="dateInput"
                maxDate={this.getMaxDate()}
                minDate={this.getMinDate()}
                disabled={this.props.datepickerDisabled}
                defaultDate={this.state.date}
                value={this.state.date}
                returnInvalidDate
                onDateChange={this.onDateChange}
                onDateError={this.onDateChange}
                onValidated={this.onChildValidated}
                validationErrorRenderer={<span />}
                showValidation={false}
              />
            </div>
            <div className={`mol_datetime__time ${this.props.timeClassName}`}>
              <Time
                onBlur={this.onBlur}
                id={`${this.props.id}-time`}
                value={this.state.timeString}
                legend={this.props.timeLabel}
                isRequired={this.props.isRequired ? true : this.props.isTimeRequired ? true : false}
                readOnly={this.props.timeDisabled}
                onTimeChange={this.onTimeChange}
                ref="timeInput"
                onValidated={this.onChildValidated}
                className={this.props.className}
                renderFieldset={true}
              />
            </div>
            {this.props.children}
          </div>
        </div>
      </fieldset>
    );
  }
}
