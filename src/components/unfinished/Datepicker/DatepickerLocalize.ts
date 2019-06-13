/* tslint:disable:no-any */
var moment: any = require('moment');
var configure: any = require('react-widgets/lib/configure');
/* tslint:enable:no-any */
require('moment/locale/nb');

export class DatePickerCulture {
  static nb = 'nb';
  static en = 'en-gb';
}

export interface DatePickerLocalizerInterface {
  localize: (culture: string) => void;
  getValidDateFormats: () => string | string[];
  getDisplayDateFormat: () => string;
  getNativeDateFormat: () => string;
}

export class DatePickerLocalizer implements DatePickerLocalizerInterface {
  static instance: DatePickerLocalizer = DatePickerLocalizer.instance || new DatePickerLocalizer();
  /* tslint:disable */

  private localizer: any = {
    formats: {
      day: 'DD',
      month: 'MMM',
      default: 'lll',
      date: 'L',
      time: 'LT',
      header: 'MMMM YYYY',
      footer: 'LL',
      weekday: (day: Date, culture: string, _localizer: any): string => {
        moment.locale(culture);
        return moment(day).format('dd');
      },
      dayOfMonth: 'DD',
      year: 'YYYY',
      decade: (date: Date, culture: string, localizer: any): string => {
        return `${localizer.format(date, 'YYYY', culture)} - ${localizer.format(
          this.endOfDecade(date),
          'YYYY',
          culture,
        )}`;
      },
      century: (date: Date, culture: string, localizer: any): string => {
        return `${localizer.format(date, 'YYYY', culture)} - ${localizer.format(
          this.endOfCentury(date),
          'YYYY',
          culture,
        )}`;
      },
    },
    firstOfWeek(culture: string): number {
      return moment.localeData(culture).firstDayOfWeek();
    },
    parse(value: string, _format: string | Object, culture?: string): Date | null {
      if (!value) {
        return null;
      }
      moment.locale(culture);
      const m: any = moment(value, this.localizer.getValidDateFormats(), true);
      if (m.isValid()) {
        return m.toDate();
      }
      return null;
    },
    format(value: Date, format: string, culture?: string): string {
      moment.locale(culture);
      const mDate: any = moment(value);
      const formattedDate: string = mDate.format(format);
      return formattedDate;
    },
  };

  public static localizer: any = DatePickerLocalizer.instance.localizer;
  /* tslint:enable */

  private culture: string;

  public localize(culture: string): void {
    this.culture = culture;
    moment.locale(culture);
    /* tslint:disable */
    configure.setDateLocalizer(DatePickerLocalizer.instance.localizer);
    /* tslint:enable */
  }

  public getValidDateFormats(): string | string[] {
    if (this.culture === DatePickerCulture.en) {
      return ['DD/MM/YYYY', 'DD/MM/YY', 'DDMMYYYY', 'DDMMYY'];
    } else if (this.culture === DatePickerCulture.nb) {
      return ['DD.MM.YYYY', 'DD.MM.YY', 'DDMMYYYY', 'DDMMYY'];
    } else {
      return DatePickerLocalizer.instance.localizer.formats.date;
    }
  }

  public getDisplayDateFormat(): string {
    if (this.culture === DatePickerCulture.en) {
      return 'DD/MM/YYYY';
    } else if (this.culture === DatePickerCulture.nb) {
      return 'DD.MM.YYYY';
    } else {
      return DatePickerLocalizer.instance.localizer.formats.date;
    }
  }

  public getNativeDateFormat(): string {
    return 'YYYY-MM-DD';
  }

  /* tslint:disable:no-any */
  private endOfDecade: any = (date: Date) =>
    moment(date)
      .add(10, 'year')
      .add(-1, 'millisecond')
      .toDate();
  private endOfCentury: any = (date: Date) =>
    moment(date)
      .add(100, 'year')
      .add(-1, 'millisecond')
      .toDate();
  /* tslint:enable:no-any */
}
