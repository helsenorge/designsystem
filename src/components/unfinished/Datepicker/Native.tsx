import * as React from 'react';
import * as moment from 'moment';
import {DatePickerLocalizerInterface} from '../datepickerLocalizer';
import {DatePickerDate} from './index';

interface Props {
  id?: string;
  max?: Date;
  min?: Date;
  datePickerDate: DatePickerDate;
  classNameInputError: string;
  localizer: DatePickerLocalizerInterface;
  onChange: (date?: Date) => void;
}

export default class NativeDatepicker extends React.Component<Props, {}> {
  ctrls: {
    textInput?: HTMLInputElement;
  } = {};

  componentDidUpdate() {
    if (this.ctrls.textInput) {
      this.ctrls.textInput.defaultValue = '';
    }
  }

  onNativeClick = (event: React.MouseEvent<{}>) => {
    if (this.ctrls.textInput) {
      event.stopPropagation();
      this.ctrls.textInput.focus();
      this.ctrls.textInput.click();
    }
  };

  isEmpty = () => {
    const textValue: string | null = this.ctrls.textInput ? this.ctrls.textInput.value : null;
    if (textValue) {
      return false;
    }
    return true;
  };

  onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newDate = e.currentTarget.value;
    if (!newDate) {
      this.props.onChange();
    } else {
      const m: moment.Moment = moment(newDate, this.props.localizer.getNativeDateFormat(), true);
      this.props.onChange(m.toDate());
    }
  };

  render() {
    const {max, min, datePickerDate, classNameInputError, localizer} = this.props;
    return (
      <div className="rw-datetime-picker rw-widget-picker">
        <input
          id={this.props.id}
          ref={(input: HTMLInputElement) => (this.ctrls.textInput = input)}
          type="date"
          value={
            datePickerDate.inputDate ? moment(datePickerDate.inputDate).format(localizer.getNativeDateFormat()) : ''
          }
          max={moment(max).format(localizer.getNativeDateFormat())}
          min={moment(min).format(localizer.getNativeDateFormat())}
          onChange={this.onChange}
          className={'rw-input' + (datePickerDate.isValidDate === false ? ' ' + classNameInputError : '')}
        />
        <span className="rw-select">
          <button
            tabIndex={-1}
            type="button"
            aria-hidden="true"
            className="rw-btn-calendar rw-btn rw-btn-select"
            onClick={this.onNativeClick}>
            <i aria-hidden="true" className="rw-i rw-i-calendar" />
          </button>
        </span>
      </div>
    );
  }
}
