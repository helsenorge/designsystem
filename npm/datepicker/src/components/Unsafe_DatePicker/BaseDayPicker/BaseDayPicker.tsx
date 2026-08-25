import React, { useState } from 'react';

import classNames from 'classnames';
import { format, isSameDay } from 'date-fns';
import { nb } from 'date-fns/locale';
import {
  // CalendarDay,
  DayPicker,
  MonthGrid,
  useDayPicker,
} from 'react-day-picker';
import reactdaypickerstyles from 'react-day-picker/dist/style.module.css';

import type { HNDesignsystemUnsafe_DatePicker } from '../../../resources/Resources';
import type { Locale } from 'date-fns';
import type { DayPickerProps, Labels, Matcher, Modifiers, MonthGridProps } from 'react-day-picker';

import Button from '@helsenorge/designsystem-react/components/Button';
import Loader from '@helsenorge/designsystem-react/components/Loader';

import { LanguageLocales, useLanguage } from '@helsenorge/designsystem-react';

import { CustomCaptionLabel, CustomDropdown, CustomNextButton, CustomPreviousButton } from './CustomComponents';
import { getResources } from '../resourceHelper';

// import { matchesDayObjectMatcher } from './utils';

import customstyles from './BaseDayPicker.module.scss';

export type DatePickerModifiers = {
  emphasized?: Date[] | Matcher[];
  partiallyBooked?: Date[] | Matcher[];
  fullyBooked?: Date[] | Matcher[];
  disabled?: Date[] | Matcher[];
  [key: string]: Date[] | Matcher[] | undefined;
};

export interface BaseDayPickerProps extends Pick<
  DayPickerProps,
  'startMonth' | 'endMonth' | 'captionLayout' | 'footer' | 'fixedWeeks' | 'animate' | 'defaultMonth'
> {
  /** The currenlty selected date in the calendar */
  selectedDate?: Date;
  /** Callback for change in selected date */
  onDateChange?: (date: Date | undefined) => void;
  /** Show loading state */
  isLoading?: boolean;
  /** Modifiers for days. Extended from react-day-picker default modifiers  */
  modifiers?: DatePickerModifiers;
  /** If a button sohuld be shown in the footer that switches view to current month */
  showGoToTodayButton?: boolean;
  /** Locale used in the calendar texts. Default is nb, norwegian bokmål */
  localeForCalendar?: Locale;
  /** Functions used in ReactDayPicker to customize aria labels on different elements */
  /* https://daypicker.dev/api/type-aliases/Labels */
  labelsForCalendar?: Partial<Labels>;
  /** Resources for component */
  resources?: Partial<HNDesignsystemUnsafe_DatePicker>;
}

const BaseDayPicker = (props: BaseDayPickerProps): React.ReactNode => {
  const {
    selectedDate,
    onDateChange,
    isLoading,
    modifiers,
    showGoToTodayButton = false,
    footer,
    resources,
    localeForCalendar = nb,
    labelsForCalendar,
    defaultMonth,
    ...rdpProps
  } = props;

  const { language } = useLanguage<LanguageLocales>(LanguageLocales.NORWEGIAN);
  const defaultResources = getResources(language);

  const mergedResources: HNDesignsystemUnsafe_DatePicker = {
    ...defaultResources,
    ...resources,
  };

  const mergedLabels: Partial<Labels> = {
    labelNext: (): string => mergedResources.nextMonth,
    labelPrevious: (): string => mergedResources.previousMonth,
    labelMonthDropdown: (): string => mergedResources.monthDropdown,
    labelYearDropdown: (): string => mergedResources.yearDropdown,
    ...labelsForCalendar,
  };

  // https://daypicker.dev/guides/translation#tweak-locale-data
  // sets abbreviated month names when using captionLayout='dropdown'
  const customLocale = {
    ...localeForCalendar,
    localize: {
      ...localeForCalendar.localize,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      month: (n: any, options?: { width?: any }): string =>
        localeForCalendar.localize.month(n, { ...options, width: rdpProps.captionLayout === 'dropdown' ? 'abbreviated' : 'wide' }),
    },
  };

  const datePickerClassNames = {
    ...reactdaypickerstyles,
    ...customstyles,
    // https://daypicker.dev/docs/styling#custom-class-names
    root: classNames(reactdaypickerstyles.root, customstyles['root_override']),
    day: classNames(reactdaypickerstyles.day, customstyles['date--default']),
    month_caption: classNames(reactdaypickerstyles['month_caption'], customstyles['custom_month_caption']),
  };

  // Internal state - synced with external selectedDate
  const [month, setMonth] = useState<Date>(selectedDate || defaultMonth || new Date());

  // Handle selection changes
  const handleSelect = (date: Date | undefined): void => {
    if (date && selectedDate && isSameDay(date, selectedDate)) {
      onDateChange?.(undefined);
      return;
    }
    onDateChange?.(date);
  };

  const modifiersExtended: DatePickerModifiers = {
    ...modifiers,
  };

  // Handle DayButton click for popover and selection
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDayButtonClick = (day: any, modifiers: Modifiers) => {
    if (modifiers.selected) {
      onDateChange?.(undefined);
    } else if (!modifiers.disabled) {
      onDateChange?.(day.date);
    }
  };

  return (
    <DayPicker
      {...rdpProps}
      navLayout={'around'}
      mode={'single'}
      selected={selectedDate}
      month={month}
      onMonthChange={setMonth}
      onSelect={handleSelect}
      classNames={datePickerClassNames}
      locale={customLocale}
      modifiers={modifiersExtended}
      labels={mergedLabels}
      footer={
        showGoToTodayButton ? (
          <div className={classNames(customstyles['datepicker-footer'], customstyles['datepicker-footer--with-today-button'])}>
            <Button
              variant="borderless"
              onClick={() => {
                setMonth(new Date());
              }}
            >
              {mergedResources.goToToday}
            </Button>
            {footer}
          </div>
        ) : (
          footer && <div className={classNames(customstyles['datepicker-footer'])}>{footer}</div>
        )
      }
      modifiersClassNames={{
        emphasized: customstyles['date--emphasized'],
        disabled: customstyles['date--disabled'],
        today: customstyles['date--today'],
        selected: customstyles['date--selected'],
        partiallyBooked: customstyles['date--partial'],
        fullyBooked: customstyles['date--fully'],
      }}
      components={{
        DayButton: props => {
          const { day, modifiers, ...buttonProps } = props;
          const { classNames: rdpClassnames } = useDayPicker();
          // const [openPopover, setOpenPopover] = useState(false);
          // const popoverText = getHelpTextForDay(day);
          const buttonRef = React.useRef<HTMLButtonElement>(null);
          const handleClick = (): void => {
            handleDayButtonClick(day, modifiers);
            // if (popoverText) {
            //   setOpenPopover(!openPopover);
            // }
          };

          const ariaLabel = (): string => {
            const dateString = format(day.date, 'PPPP', { locale: localeForCalendar });

            let label = mergedResources.dayButtonBase.replace('{date}', dateString);

            if (modifiers.today && mergedResources.dayButtonToday) {
              label = mergedResources.dayButtonToday.replace('{date}', dateString);
            }

            if (modifiers.selected && mergedResources.dayButtonSelected) {
              label = mergedResources.dayButtonSelected.replace('{date}', dateString);
            }

            return label;
          };

          React.useEffect(() => {
            if (modifiers.focused) {
              buttonRef.current?.focus();
            }
          }, [modifiers.focused]);

          return (
            <>
              <button
                {...buttonProps}
                // disabled={popoverText ? false : buttonProps.disabled}
                disabled={buttonProps.disabled}
                className={classNames(rdpClassnames['day_button'], customstyles['custom_day_button'])}
                ref={buttonRef}
                onClick={handleClick}
                aria-label={ariaLabel()}
                // aria-haspopup={popoverText ? 'dialog' : false}
              />
            </>
          );
        },
        NextMonthButton: props => <CustomNextButton {...props} />,
        PreviousMonthButton: props => <CustomPreviousButton {...props} />,
        MonthGrid: isLoading
          ? (props: MonthGridProps): React.JSX.Element => (
              <div style={{ position: 'relative' }}>
                <MonthGrid {...props} />
                <div className={customstyles['loading-overlay']}>
                  <Loader size="small" color="blueberry" />
                  <p style={{ whiteSpace: 'pre-line' }} aria-live="polite">
                    {mergedResources.loadingText}
                  </p>
                </div>
              </div>
            )
          : MonthGrid,
        Dropdown: CustomDropdown,
        CaptionLabel: CustomCaptionLabel,
      }}
    />
  );
};

export default BaseDayPicker;
