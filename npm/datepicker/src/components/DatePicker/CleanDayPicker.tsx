import React, { useState } from 'react';

import classNames from 'classnames';
import { isSameDay, Locale } from 'date-fns';
import { nb } from 'date-fns/locale';
import { DayPicker, DayPickerProps, Matcher, MonthGrid, MonthGridProps } from 'react-day-picker';
import reactdaypickerstyles from 'react-day-picker/dist/style.module.css';

import Button from '@helsenorge/designsystem-react/components/Button';
import Loader from '@helsenorge/designsystem-react/components/Loader';
import { useLanguage } from '@helsenorge/designsystem-react/utils/language';

import { LanguageLocales } from '@helsenorge/designsystem-react';

import { CustomCaptionLabel, CustomDayButton, CustomDropdown, CustomNextButton, CustomPreviousButton } from './CleanCustom';
import { getResources } from './resourceHelper';
import { HNDesignsystemDatePicker } from '../../resources/Resources';

import customstyles from './clean.module.scss';

export type DatePickerModifiers = {
  emphasized?: Date[] | Matcher[];
  partiallyBooked?: Date[] | Matcher[];
  fullyBooked?: Date[] | Matcher[];
  disabled?: Date[] | Matcher[];
};

interface CleanDayPickerProps
  extends Pick<DayPickerProps, 'dir' | 'startMonth' | 'locale' | 'endMonth' | 'captionLayout' | 'footer' | 'navLayout'> {
  selectedDate?: Date;
  onDateChange?: (date: Date | undefined) => void;
  isLoading?: boolean;
  modifiers?: DatePickerModifiers;
  showGoToTodayButton?: boolean;
  /** Resources for component */
  resources?: Partial<HNDesignsystemDatePicker>;
  /** Sets the locale of the datepicker */
  locale?: Locale;
}

const CleanDayPicker = (props: CleanDayPickerProps): React.ReactNode => {
  const {
    selectedDate,
    onDateChange,
    isLoading,
    modifiers,
    showGoToTodayButton = false,
    footer,
    resources,
    locale = nb,
    ...rdpProps
  } = props;

  const { language } = useLanguage<LanguageLocales>(LanguageLocales.NORWEGIAN);
  const defaultResources = getResources(language);

  const mergedResources: HNDesignsystemDatePicker = {
    ...defaultResources,
    ...resources,
  };

  const datePickerClassNames = {
    ...reactdaypickerstyles,
    ...customstyles,
    // https://daypicker.dev/docs/styling#custom-class-names
    root: classNames(reactdaypickerstyles.root, customstyles['root_override']),
    day: classNames(reactdaypickerstyles.day, customstyles['date--default']),
    months: classNames(reactdaypickerstyles.months, customstyles['custom_months-container']),
    month_caption: classNames(reactdaypickerstyles['month_caption'], customstyles['custom_month_caption']),
  };

  // Internal state - synced with external selectedDate
  const [selected, setSelected] = useState<Date | undefined>(selectedDate);
  const [month, setMonth] = useState<Date>(new Date());

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

  return (
    <DayPicker
      {...rdpProps}
      mode={'single'}
      fixedWeeks
      required={true} // ?
      selected={selected}
      month={month}
      onMonthChange={setMonth}
      onSelect={handleSelect}
      classNames={datePickerClassNames}
      locale={locale}
      footer={
        showGoToTodayButton ? (
          <div className={customstyles['datepicker-footer']}>
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
          footer
        )
      }
      modifiers={modifiers}
      onDayClick={(_date, modifiers) => {
        if (modifiers.disabled) {
          alert('Denne datoen er ikke tilgjengelig for valg.');
        }
        if (modifiers.fullyBooked) {
          alert('Denne datoen er fullbooket. Vennligst velg en annen dato.');
        }
      }}
      modifiersClassNames={{
        emphasized: customstyles['date--emphasized'],
        disabled: customstyles['date--disabled'],
        today: customstyles['date--today'],
        selected: customstyles['date--selected'],
        partiallyBooked: customstyles['date--partial'],
        fullyBooked: customstyles['date--fully'],
      }}
      components={{
        DayButton: CustomDayButton,
        NextMonthButton: CustomNextButton,
        PreviousMonthButton: CustomPreviousButton,
        MonthGrid: isLoading
          ? (props: MonthGridProps): JSX.Element => (
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

export default CleanDayPicker;
