import React, { useState } from 'react';

import classNames from 'classnames';
import { isSameDay } from 'date-fns';
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
// import HelpBubble from '@helsenorge/designsystem-react/components/HelpBubble';
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

// //begrensning her: hvis man velger en dato så lukkes popup så da vil ikke helpbubble vises for ikke-disabled datoer
// export type HelpBubbleText = {
//   id: string;
//   dates: Date | Date[] | Matcher | Matcher[];
//   text: string;
// };

export interface BaseDayPickerProps extends Pick<
  DayPickerProps,
  'startMonth' | 'endMonth' | 'captionLayout' | 'footer' | 'fixedWeeks' | 'animate'
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
  // /** Texts with dates or matcher functions for showing helpbubbles on given dates */
  // helpBubbleTexts?: HelpBubbleText[];
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
    // helpBubbleTexts,
    labelsForCalendar,
    ...rdpProps
  } = props;

  const { language } = useLanguage<LanguageLocales>(LanguageLocales.NORWEGIAN);
  const defaultResources = getResources(language);

  const mergedResources: HNDesignsystemUnsafe_DatePicker = {
    ...defaultResources,
    ...resources,
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
  const [selected, setSelected] = useState<Date | undefined>(selectedDate);
  const [month, setMonth] = useState<Date>(selectedDate || new Date());

  // Update internal state when prop changes
  React.useEffect(() => {
    setSelected(selectedDate);
  }, [selectedDate]);

  // Handle selection changes
  const handleSelect = (date: Date | undefined): void => {
    if (date && selected && isSameDay(date, selected)) {
      setSelected(undefined);
      onDateChange?.(undefined);
      return;
    }
    setSelected(date);
    onDateChange?.(date);
  };

  // const helpBubbleTextModifiers = {} as DatePickerModifiers;
  // helpBubbleTexts?.forEach(helpBubbleText => {
  //   const dates = Array.isArray(helpBubbleText.dates) ? helpBubbleText.dates : [helpBubbleText.dates];
  //   helpBubbleTextModifiers[helpBubbleText.id] = dates;
  // });

  const modifiersExtended: DatePickerModifiers = {
    ...modifiers,
    // ...helpBubbleTextModifiers,
  };

  // Find help text for a given day
  // const getHelpTextForDay = (day: CalendarDay): string => {
  //   let foundHelpText = '';
  //   Object.keys(helpBubbleTextModifiers).forEach(key => {
  //     const dates = helpBubbleTextModifiers[key];
  //     if (dates && day?.date) {
  //       dates.forEach(dateOrMatcher => {
  //         let isMatch = false;

  //         if (dateOrMatcher == null) {
  //           return;
  //         }

  //         // Check if it's a Date object
  //         if (dateOrMatcher instanceof Date) {
  //           isMatch = isSameDay(day.date, dateOrMatcher);
  //         }

  //         // Check if it's a matcher function
  //         else if (typeof dateOrMatcher === 'function') {
  //           isMatch = dateOrMatcher(day.date);
  //         } else if (typeof dateOrMatcher === 'object' && dateOrMatcher !== null) {
  //           isMatch = matchesDayObjectMatcher(day.date, dateOrMatcher);
  //         }
  //         if (isMatch) {
  //           const helpBubbleText = helpBubbleTexts?.find(hbt => hbt.id === key);
  //           const helpText = helpBubbleText?.text;
  //           if (helpText) {
  //             foundHelpText = helpText;
  //           }
  //         }
  //       });
  //     }
  //   });
  //   return foundHelpText;
  // };

  // Handle DayButton click for popover and selection
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDayButtonClick = (day: any, modifiers: Modifiers) => {
    if (modifiers.selected) {
      setSelected(undefined);
      onDateChange?.(undefined);
    } else if (!modifiers.disabled) {
      setSelected(day.date);
      onDateChange?.(day.date);
    }
  };

  return (
    <DayPicker
      {...rdpProps}
      navLayout={'around'}
      mode={'single'}
      selected={selected}
      month={month}
      onMonthChange={setMonth}
      onSelect={handleSelect}
      classNames={datePickerClassNames}
      locale={customLocale}
      modifiers={modifiersExtended}
      labels={labelsForCalendar}
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
          const helpBubbleId = 'helpbubble-' + day.date.getUTCDate();
          const handleClick = (): void => {
            handleDayButtonClick(day, modifiers);
            // if (popoverText) {
            //   setOpenPopover(!openPopover);
            // }
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
                // aria-haspopup={popoverText ? 'dialog' : false}
                aria-controls={helpBubbleId} // @todo: mulig noe må gjøres her for skjermlesere
              />
              {/* <HelpBubble
                helpBubbleId={helpBubbleId}
                showBubble={openPopover}
                onClose={() => setOpenPopover(false)}
                controllerRef={buttonRef}
              >
                <span>{popoverText}</span>
              </HelpBubble> */}
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
