import * as React from 'react';
import * as moment from 'moment';
import * as classNames from 'classnames';
import {DatePickerLocalizer, DatePickerLocalizerInterface, DatePickerCulture} from './datepickerLocalizer';
import keyCode from '../../../utils/key-code';
import {isMobileUA} from '../../../utils/is-mobile-ua';
import ValidationError from '../validation-error';
import Native from './native/native';
/* tslint:disable */
// TODO: Fix onToggle, placeholder @types
var DateTimePicker: any = require('react-widgets/lib/DateTimePicker');
/* tslint:enable */

export interface DatePickerProps {
  id: string;
  datepickerId?: string;
  resources?: DatePickerResources;
  culture?: string;
  localizer?: DatePickerLocalizerInterface;
  maxDate?: Date;
  minDate?: Date;
  defaultDate?: Date;
  value?: Date;
  onDateChange?: (value?: Date, id?: string) => void;
  onDateError?: (value?: Date, error?: string, id?: string) => void;
  onValidated?: (valid: boolean) => void;
  dateValidatorExtension?: (value?: Date, id?: string) => DatePickerDate;
  placeholder?: string;
  label?: string | JSX.Element;
  isNullable?: boolean;
  isRequired?: boolean;
  requiredLabel?: string;
  optionalLabel?: string;
  showRequiredLabel?: boolean;
  showOptionalLabel?: boolean;
  hideLabel?: boolean;
  disabled?: boolean;
  className?: string;
  showValidation?: boolean;
  validationErrorRenderer?: JSX.Element;
  returnInvalidDate?: boolean;
  inputClassName?: string;
}

export interface DatePickerState {
  datePickerDate: DatePickerDate;
  calendarIsOpen?: boolean;
  isNative?: boolean;
  validated?: boolean;
  currentDate?: Date;
}

export interface DatePickerResources {
  calendarButton: string;
  navigateForward: string;
  navigateBackward: string;
  errorInvalidDate: string;
  errorAfterMaxDate: string;
  errorBeforeMinDate: string;
  filterDateErrorAfterCurrentDate?: string;
  dateRequired?: string;
}

// interfaces for referencing stronglytyped refs in datepicker widget
interface RefsDatePickerElement extends Element {
  inner: InnerElement;
}

interface InnerElement extends Element {
  inputRef: InputRefElement;
}
interface InputRefElement extends HTMLInputElement {
  state: ValueInputState;
}

interface ValueInputState {
  textValue?: string;
}

export class DatePickerDate {
  public inputDate?: Date;
  public isValidDate: boolean;
  public error: string;

  constructor(inputDate: Date | undefined, isValidDate: boolean, error: string) {
    this.inputDate = inputDate;
    this.isValidDate = isValidDate;
    this.error = error;
  }
}

export class DatePicker extends React.Component<DatePickerProps, DatePickerState> {
  static hnFormComponent = true;

  public static defaultProps: DatePickerProps = {
    id: 'datepicker',
    resources: undefined,
    culture: DatePickerCulture.nb,
    localizer: DatePickerLocalizer.instance,
    minDate: new Date(1900, 1, 1),
    maxDate: new Date(2099, 11, 31),
    defaultDate: undefined,
    value: undefined,
    dateValidatorExtension: undefined,
    placeholder: '',
    isNullable: false,
    showValidation: true,
  };

  public refs: {
    [key: string]: Element;
    dateTimePicker: RefsDatePickerElement;
  };

  ctrls: {
    nativeDatePicker?: Native;
  } = {};

  constructor(props: DatePickerProps) {
    super(props);
    const {defaultDate, value, maxDate, minDate} = this.props;

    this.state = {
      datePickerDate: new DatePickerDate(defaultDate || value, true, ''),
      calendarIsOpen: false,
      isNative: false,
      validated: false,
      currentDate: this.getCurrentDate(maxDate, minDate, defaultDate),
    };
  }

  componentWillMount(): void {
    if (this.props.localizer && this.props.culture) {
      this.props.localizer.localize(this.props.culture);
    }
    this.setState({
      isNative: isMobileUA(),
    });
  }

  componentDidMount(): void {
    const {id} = this.props;
    if (!id) {
      return;
    }
    // Add listener for enter key
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('keydown', this.keyListener);
    }
  }

  componentWillReceiveProps(nextProps: DatePickerProps): void {
    const {minDate, maxDate, value, resources}: DatePickerProps = this.props;

    if (nextProps.isNullable && !nextProps.value) {
      // Reset date if empty date allowed
      let datePickerDate: DatePickerDate;
      if (this.props.isRequired === true && this.state.validated) {
        const dateValidationErrorInfo = resources && resources.dateRequired ? resources.dateRequired : '';
        datePickerDate = new DatePickerDate(undefined, false, dateValidationErrorInfo);
      } else {
        datePickerDate = new DatePickerDate(undefined, true, '');
      }
      this.setState({
        datePickerDate: datePickerDate,
      });
    }

    const minDateChanged: boolean = !moment(minDate).isSame(nextProps.minDate, 'day');
    const maxDateChanged: boolean = !moment(maxDate).isSame(nextProps.maxDate, 'day');
    const valueChanged: boolean = !moment(value).isSame(nextProps.value, 'day');
    const hasDateSet: boolean = nextProps.value !== null && nextProps.value !== undefined;
    if (hasDateSet && (minDateChanged || maxDateChanged || valueChanged)) {
      this.dateValidator(nextProps.value, undefined, false, false, nextProps);
    }

    this.setState({currentDate: this.getCurrentDate(nextProps.maxDate, nextProps.minDate, nextProps.defaultDate)});
  }

  componentWillUnmount(): void {
    if (!this.props.id) {
      return;
    }
    const element = document.getElementById(this.props.id);
    if (element != null) {
      element.removeEventListener('keydown', this.keyListener);
    }
  }

  getLocalizer(): DatePickerLocalizerInterface {
    if (this.props.localizer) {
      return this.props.localizer;
    }
    return DatePickerLocalizer.instance;
  }

  isValidDateFormat() {
    let momentInputDate: moment.Moment | undefined = this.getMomentDate(this.state.datePickerDate.inputDate, '');
    if (momentInputDate && momentInputDate.isValid() === false) {
      return false;
    }
    return true;
  }

  dateValidator(
    date: Date | undefined,
    value: string | undefined,
    notifyValidated: boolean,
    notifyChanged: boolean,
    props: DatePickerProps,
  ): Promise<void> {
    const {maxDate, minDate, resources}: DatePickerProps = props ? props : this.props;
    let datePickerDate: DatePickerDate;
    let momentInputDate: moment.Moment | undefined = this.getMomentDate(date, value);
    let hasDateInput = true;

    // check if empty date allowed
    if (this.props.isNullable) {
      const validMomentDate = momentInputDate && momentInputDate.isValid();
      if (!validMomentDate && this.isDateInputEmpty()) {
        hasDateInput = false;
      }
    }

    if (hasDateInput) {
      let isValidDate = true;
      let dateValidationErrorInfo = ' ';
      let dateValue: Date | undefined;
      if (momentInputDate && momentInputDate.isValid() === false) {
        dateValidationErrorInfo = resources ? resources.errorInvalidDate : '';
        isValidDate = false;
      } else {
        dateValue = momentInputDate ? momentInputDate.toDate() : undefined;
        if (momentInputDate && momentInputDate.isBefore(moment(minDate), 'day')) {
          dateValidationErrorInfo = resources ? resources.errorBeforeMinDate : '';
          isValidDate = false;
          if (!this.props.returnInvalidDate) {
            dateValue = undefined; // when date is invalid remove the date from datepicker to prevent bug 111660
          }
        }
        if (momentInputDate && momentInputDate.isAfter(moment(maxDate), 'day')) {
          dateValidationErrorInfo = resources ? resources.errorAfterMaxDate : '';
          isValidDate = false;
          if (!this.props.returnInvalidDate) {
            dateValue = undefined; // when date is invalid remove the date from datepicker to prevent bug 111660
          }
        }
      }
      datePickerDate = new DatePickerDate(dateValue, isValidDate, dateValidationErrorInfo);
    } else {
      // reset date if value and date is null or empty
      if (this.props.isRequired === true) {
        const dateValidationErrorInfo = resources && resources.dateRequired ? resources.dateRequired : '';
        datePickerDate = new DatePickerDate(undefined, false, dateValidationErrorInfo);
      } else {
        datePickerDate = new DatePickerDate(undefined, true, '');
      }
    }

    if (datePickerDate.isValidDate && this.props.dateValidatorExtension) {
      datePickerDate = this.props.dateValidatorExtension(datePickerDate.inputDate, this.props.id);
    }
    let promise: Promise<void> = new Promise<void>((resolve: () => void) => {
      this.setState(
        {
          datePickerDate: datePickerDate,
          validated: true,
        },
        () => {
          if (notifyValidated) {
            this.notifyValidated();
          }
          resolve();
        },
      );
    });

    if (datePickerDate.isValidDate) {
      if (this.props.onDateChange && notifyChanged) {
        this.props.onDateChange(datePickerDate.inputDate, this.props.id);
      }
    } else {
      if (this.props.onDateError && notifyChanged) {
        this.props.onDateError(datePickerDate.inputDate, datePickerDate.error, this.props.id);
      }
    }

    return promise;
  }

  notifyValidated(): void {
    if (this.props.onValidated) {
      this.props.onValidated(this.state.datePickerDate.isValidDate);
    }
  }

  validateField(): Promise<void> {
    return this.dateValidator(this.state.datePickerDate.inputDate, '', false, true, this.props);
  }

  isValid(): boolean {
    return this.state.datePickerDate.isValidDate;
  }

  getNateiveMomentDate(date?: Date, dateString?: string): moment.Moment | undefined {
    if (!date && !dateString) {
      return undefined;
    } else if (date) {
      return moment(date);
    } else {
      return moment(dateString, this.getLocalizer().getNativeDateFormat(), true);
    }
  }

  getMomentDate(date?: Date, dateString?: string): moment.Moment | undefined {
    let momentDate: moment.Moment;
    if (this.state.isNative) {
      return this.getNateiveMomentDate(date, dateString);
    } else {
      const validDateFormats: string | string[] = this.getLocalizer().getValidDateFormats();
      let validDateFormatsArray: string[];
      if (typeof validDateFormats === 'string') {
        validDateFormatsArray = [validDateFormats];
      } else {
        validDateFormatsArray = validDateFormats;
      }
      momentDate = moment(dateString, validDateFormatsArray, true);
    }

    if (momentDate && !momentDate.isValid() && date) {
      momentDate = moment(date);
    }
    return momentDate;
  }

  onChange = (date?: Date, value?: string) => {
    this.dateValidator(date, value, true, true, this.props);
  };

  onParse = (value: string): Date => {
    const validDateFormats: string | string[] = this.getLocalizer().getValidDateFormats();
    let validDateFormatsArray: string[];
    if (typeof validDateFormats === 'string') {
      validDateFormatsArray = [validDateFormats];
    } else {
      validDateFormatsArray = validDateFormats;
    }
    const m: moment.Moment = moment(value, validDateFormatsArray, true);
    return m.toDate();
  };

  onToggle = (isOpen: string): void => {
    this.setState({
      calendarIsOpen: isOpen === 'calendar',
    });
  };

  daysInMonth(month: number, year: number): number {
    // Returnerer antall dager i angitt m�ned for angitt �r
    return new Date(year, month, 0).getDate();
  }

  keyListener = (e: KeyboardEvent): void => {
    if (e.keyCode === keyCode.ENTER) {
      if (this.state.calendarIsOpen === false) {
        e.preventDefault();
        e.stopPropagation();
        if (e.target) {
          this.dateValidator(undefined, e.target['value'], true, true, this.props);
        }
      }
    }
  };

  isDateInputEmpty(): boolean {
    if (this.state.isNative && this.ctrls.nativeDatePicker) {
      return this.ctrls.nativeDatePicker.isEmpty();
    }
    try {
      const dp: RefsDatePickerElement = this.refs.dateTimePicker;
      const inner: InnerElement = dp.inner;
      const inputRef: InputRefElement = inner.inputRef;
      const textValue: string | undefined = inputRef.state.textValue;

      if (textValue) {
        return false;
      }
      return true;
    } catch (e) {
      return false;
    }
  }

  renderLabel(): JSX.Element {
    const labelClasses: string = this.props.hideLabel ? `visuallyhidden` : ``;

    let htmlFor = 'rw_1_input';
    if (this.props.datepickerId) {
      htmlFor = `${this.props.datepickerId}_input`;
    }
    return (
      <label className={labelClasses} htmlFor={htmlFor}>
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

  renderErrorMessage(): JSX.Element | null {
    const {showValidation, validationErrorRenderer}: DatePickerProps = this.props;
    const datePickerDate: DatePickerDate = this.state.datePickerDate;
    if (validationErrorRenderer && datePickerDate.isValidDate === false) {
      return validationErrorRenderer;
    }
    if (datePickerDate.error && showValidation) {
      return <ValidationError isValid={datePickerDate.isValidDate} error={datePickerDate.error} />;
    }
    return null;
  }

  onCurrentDateChange = (currentDate: Date) => {
    this.setState({currentDate});
  };

  getCurrentDate = (maxDate?: Date, minDate?: Date, defaultDate?: Date) => {
    if (defaultDate) {
      return defaultDate;
    } else if (maxDate && maxDate < new Date()) {
      return maxDate;
    } else if (minDate && minDate > new Date()) {
      return minDate;
    }
    return undefined;
  };

  render(): React.ReactElement<{}> {
    const {
      maxDate,
      minDate,
      resources,
      id,
      placeholder,
      datepickerId,
      disabled,
      showValidation,
    }: DatePickerProps = this.props;
    const datePickerDate: DatePickerDate = this.state.datePickerDate;
    const calendarButtonText: string = resources && resources.calendarButton ? resources.calendarButton : '';
    const moveBackText: string = resources && resources.navigateBackward ? resources.navigateBackward : '';
    const moveForwardText: string = resources && resources.navigateForward ? resources.navigateForward : '';
    const className = classNames('mol_datetimepicker', 'mol_validation', this.props.className);
    const classNameInputError = showValidation ? 'error mol_validation--active' : '';

    /* tslint:disable:no-any */
    const messages: any = {
      calendarButton: calendarButtonText,
      moveBack: moveBackText,
      moveForward: moveForwardText,
    };
    /* tslint:enable:no-any */

    let labelElement: JSX.Element | undefined;
    if (this.props.label) {
      labelElement = this.renderLabel();
    }

    /* tslint:disable:no-any */
    let datePicker: any;
    /* tslint:enable:no-any */

    {
      this.state.isNative
        ? (datePicker = (
            <Native
              ref={(el: Native) => (this.ctrls.nativeDatePicker = el)}
              onChange={this.onChange}
              max={maxDate}
              min={minDate}
              classNameInputError={classNameInputError}
              datePickerDate={datePickerDate}
              localizer={this.getLocalizer()}
              id={datepickerId}
            />
          ))
        : (datePicker = (
            <DateTimePicker
              id={datepickerId}
              time={false}
              date={true}
              currentDate={this.state.currentDate}
              onCurrentDateChange={this.onCurrentDateChange}
              onChange={this.onChange}
              onToggle={this.onToggle}
              messages={messages}
              max={maxDate}
              min={minDate}
              editFormat={this.getLocalizer().getDisplayDateFormat()}
              format={this.getLocalizer().getDisplayDateFormat()}
              parse={this.onParse}
              value={
                datePickerDate.inputDate === undefined
                  ? this.props.defaultDate
                    ? this.props.defaultDate
                    : null
                  : datePickerDate.inputDate
              }
              placeholder={placeholder}
              ref="dateTimePicker"
              disabled={disabled}
              className={this.props.inputClassName}
            />
          ));
    }
    return (
      <div
        id={`${id}-wrapper`}
        className={className + (datePickerDate.isValidDate === false ? ' ' + classNameInputError : '')}>
        {this.renderErrorMessage()}
        {labelElement}
        {datePicker}
        {this.props.children}
      </div>
    );
  }
}
