import React, { useEffect, useState } from 'react';

import classNames from 'classnames';
import { isSameDay, Locale } from 'date-fns';
import { nb } from 'date-fns/locale';
import { DayPicker, DayPickerProps, Matcher, Modifiers, MonthGrid, MonthGridProps } from 'react-day-picker';
import reactdaypickerstyles from 'react-day-picker/dist/style.module.css';

import Button from '@helsenorge/designsystem-react/components/Button';
import HelpBubble from '@helsenorge/designsystem-react/components/HelpBubble';
import Loader from '@helsenorge/designsystem-react/components/Loader';
import { useLanguage } from '@helsenorge/designsystem-react/utils/language';

import { LanguageLocales, useOutsideEvent, useToggle } from '@helsenorge/designsystem-react';

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
      onDayClick={(_date, modifiers) => {
        // if (modifiers.disabled) {
        //   alert('Denne datoen er ikke tilgjengelig for valg.');
        // }
        // if (modifiers.fullyBooked) {
        //   alert('Denne datoen er fullbooket. Vennligst velg en annen dato.');
        // }
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
        DayButton: props => {
          const { day, modifiers, ...buttonProps } = props;

          const buttonRef = React.useRef<HTMLButtonElement>(null);
          const popoverRef = React.useRef<HTMLDivElement>(null);
          // const { value: isPopoverOpen, toggleValue: togglePopover } = useToggle(false);
          const [isPopoverOpen, setIsPopoverOpen] = useState<boolean>(false);
          const [popoverText, setPopoverText] = useState<string>('');

          useEffect(() => {
            console.trace('isPopoverOpen changed: ', isPopoverOpen);
          }, [isPopoverOpen]);

          const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
            // if (modifiers.disabled) {
            //   alert('Denne datoen er ikke tilgjengelig for valg.');
            //   return;
            // }
            if (modifiers.selected) {
              setIsPopoverOpen(false);
            } else {
              Object.keys(helpBubbleTextModifiers).forEach(key => {
                if (modifiers[key as keyof Modifiers]) {
                  const helpText = helpBubbleTexts?.find(hbt => hbt.id === key)?.text;
                  if (helpText) {
                    console.log(helpText);
                    setPopoverText(helpText);
                    if (!isPopoverOpen) {
                      setIsPopoverOpen(true);
                    }
                  }
                }
              });
            }
            // call the original onClick from RDP
            buttonProps.onClick?.(e);
          };
          // useOutsideEvent([buttonRef, popoverRef], () => {
          //   if (isPopoverOpen) togglePopover();
          // });
          const popoverId = `datepicker-popover-${day?.date?.toISOString()}`;

          React.useEffect(() => {
            if (modifiers.focused) buttonRef.current?.focus();
          }, [modifiers.focused]);

          return (
            <>
              {/* // @todo: fix popover som prop */}
              <HelpBubble controllerRef={buttonRef} ref={popoverRef} showBubble={isPopoverOpen}>
                <span id={popoverId}>{popoverText}</span>
              </HelpBubble>
              <button {...buttonProps} ref={buttonRef} onClick={handleClick} style={{ zIndex: 1 }} aria-describedby={popoverId} />
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
