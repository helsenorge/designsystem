import React, { useState } from 'react';

import classNames from 'classnames';
import { isSameDay, Locale } from 'date-fns';
import { nb } from 'date-fns/locale';
import { DayPicker, DayPickerProps, Matcher, Modifiers, MonthGrid, MonthGridProps, useDayPicker } from 'react-day-picker';
import reactdaypickerstyles from 'react-day-picker/dist/style.module.css';

import Button from '@helsenorge/designsystem-react/components/Button';
import HelpBubble from '@helsenorge/designsystem-react/components/HelpBubble';
import Loader from '@helsenorge/designsystem-react/components/Loader';
import { useLanguage } from '@helsenorge/designsystem-react/utils/language';

import { LanguageLocales } from '@helsenorge/designsystem-react';

import { CustomCaptionLabel, CustomDropdown, CustomNextButton, CustomPreviousButton } from './CleanCustom';
import { getResources } from './resourceHelper';
import { HNDesignsystemDatePicker } from '../../resources/Resources';

import customstyles from './clean.module.scss';

export type DatePickerModifiers = {
  emphasized?: Date[] | Matcher[];
  partiallyBooked?: Date[] | Matcher[];
  fullyBooked?: Date[] | Matcher[];
  disabled?: Date[] | Matcher[];
  [key: string]: Date[] | Matcher[] | undefined;
};

/* @todo: lag dette */
export type HelpBubbleText = {
  id: string;
  dates: Date | Date[] | Matcher | Matcher[];
  text: string;
};

export interface BaseDayPickerProps
  extends Pick<DayPickerProps, 'dir' | 'startMonth' | 'locale' | 'endMonth' | 'captionLayout' | 'footer' | 'navLayout' | 'fixedWeeks'> {
  selectedDate?: Date;
  onDateChange?: (date: Date | undefined) => void;
  isLoading?: boolean;
  modifiers?: DatePickerModifiers;
  showGoToTodayButton?: boolean;
  /** Resources for component */
  resources?: Partial<HNDesignsystemDatePicker>;
  /** Sets the locale of the datepicker */
  locale?: Locale;
  helpBubbleTexts?: HelpBubbleText[];
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
    locale = nb,
    navLayout = 'after',
    helpBubbleTexts,
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
  // Popover state for HelpBubble
  const [popoverDay, setPopoverDay] = useState<Date | undefined>(undefined);
  const [popoverText, setPopoverText] = useState<string>('');

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

  const helpBubbleTextModifiers = {} as DatePickerModifiers;
  helpBubbleTexts?.forEach(helpBubbleText => {
    const dates = Array.isArray(helpBubbleText.dates) ? helpBubbleText.dates : [helpBubbleText.dates];
    helpBubbleTextModifiers[helpBubbleText.id] = dates;
  });

  const modifiersExtended: DatePickerModifiers = {
    ...modifiers,
    ...helpBubbleTextModifiers,
  };

  // Find help text for a given day
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getHelpTextForDay = (day: any, modifiers: Modifiers): string => {
    let foundHelpText = '';
    Object.keys(helpBubbleTextModifiers).forEach(key => {
      const dates = helpBubbleTextModifiers[key];
      if (dates && day?.date) {
        dates.forEach(dateOrMatcher => {
          let isMatch = false;

          // Check if it's a Date object
          if (dateOrMatcher instanceof Date) {
            isMatch = isSameDay(day.date, dateOrMatcher);
          }
          // Check if it's a matcher function
          else if (typeof dateOrMatcher === 'function') {
            isMatch = dateOrMatcher(day.date);
          }
          // Check if it's a Matcher object - use modifiers instead
          else if (typeof dateOrMatcher === 'object' && dateOrMatcher !== null) {
            // For matcher objects, check if this day has the modifier applied by DayPicker
            isMatch = !!modifiers[key];
          }

          if (isMatch) {
            const helpBubbleText = helpBubbleTexts?.find(hbt => hbt.id === key);
            const helpText = helpBubbleText?.text;
            if (helpText) foundHelpText = helpText;
          }
        });
      }
    });
    return foundHelpText;
  };

  // Handle DayButton click for popover
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDayButtonClick = (day: any, modifiers: Modifiers) => {
    if (modifiers.selected) {
      setPopoverDay(undefined);
      setPopoverText('');
    } else {
      const helpText = getHelpTextForDay(day, modifiers);
      if (helpText) {
        setPopoverDay(day.date);
        setPopoverText(helpText);
      } else {
        setPopoverDay(undefined);
        setPopoverText('');
      }
    }
  };

  // Close HelpBubble popover
  const handleCloseBubble = () => {
    setPopoverDay(undefined);
    setPopoverText('');
  };

  return (
    <DayPicker
      {...rdpProps}
      navLayout={navLayout}
      mode={'single'}
      required={true} // ?
      selected={selected}
      month={month}
      onMonthChange={setMonth}
      onSelect={handleSelect}
      classNames={datePickerClassNames}
      locale={locale}
      modifiers={modifiersExtended}
      footer={
        showGoToTodayButton ? (
          <div className={classNames(customstyles['datepicker-footer'], customstyles['datepicker-footer--with-today-button'])}>
            <Button
              variant="borderless"
              onClick={() => {
                setMonth(new Date());
                // @todo: velg dagens ?
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
          const buttonRef = React.useRef<HTMLButtonElement>(null);
          const popoverId = `datepicker-popover-${day?.date?.toISOString()}`;
          const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
            handleDayButtonClick(day, modifiers);
            buttonProps.onClick?.(e);
          };

          // Check if this button should show the popover
          const shouldShowPopover = popoverDay && isSameDay(day.date, popoverDay);

          return (
            <>
              <button
                {...buttonProps}
                className={classNames(rdpClassnames['day_button'], customstyles['custom_day_button'])}
                ref={buttonRef}
                onClick={handleClick}
                aria-describedby={popoverId}
              />
              {shouldShowPopover && (
                <HelpBubble showBubble={true} onClose={handleCloseBubble} controllerRef={buttonRef}>
                  <span>{popoverText}</span>
                </HelpBubble>
              )}
            </>
          );
        },
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

export default BaseDayPicker;
