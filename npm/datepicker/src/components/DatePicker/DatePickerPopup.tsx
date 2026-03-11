import React, { useState, useRef } from 'react';

import classNames from 'classnames';
import { format } from 'date-fns';
import { nb } from 'date-fns/locale';
import { DayPicker } from 'react-day-picker';
import reactdaypickerstyles from 'react-day-picker/dist/style.module.css';

import type { Locale } from 'date-fns';
import type { DayPickerProps, PropsSingle, Labels } from 'react-day-picker';

import { PopOverVariant } from '@helsenorge/designsystem-react/components/PopOver';
import { useInterval } from '@helsenorge/designsystem-react/hooks/useInterval';
import { useIsVisible } from '@helsenorge/designsystem-react/hooks/useIsVisible';
import { useLayoutEvent } from '@helsenorge/designsystem-react/hooks/useLayoutEvent';
import { useSize } from '@helsenorge/designsystem-react/hooks/useSize';
import { getSpacer } from '@helsenorge/designsystem-react/theme/currys/spacing';

import { getArrowStyle, getBubbleStyle, getVerticalPosition } from './position-utils';

import styles from './styles.module.scss';

export interface DatePickerAriaLabels {
  /** Tekst brukt for vanlige dager i kalenderen.
   *  {date} - placeholder for den faktiske datoen.
   */
  dayButtonBase?: string;

  /** Tekst brukt når en dag er "i dag".
   *  {date} - placeholder for den faktiske datoen.
   */
  dayButtonToday?: string;

  /** Tekst brukt når en dag er valgt.
   *  {date} - placeholder for den faktiske datoen.
   */
  dayButtonSelected?: string;

  /** Tekst brukt for knappen som viser neste måned. */
  nextMonth?: string;

  /** Tekst brukt for knappen som viser forrige måned. */
  previousMonth?: string;

  /** Tekst brukt for nedtrekkslisten over måneder. */
  monthDropdown?: string;

  /** Tekst brukt for nedtrekkslisten over år. */
  yearDropdown?: string;
}

interface DatePickerPopupProps
  extends
    Pick<DayPickerProps, 'dir' | 'disabled' | 'footer' | 'startMonth' | 'initialFocus' | 'locale' | 'month' | 'onMonthChange' | 'endMonth'>,
    Pick<PropsSingle, 'selected' | 'onSelect'> {
  ariaLabels?: DatePickerAriaLabels;
  datepickerWrapperRef: React.RefObject<HTMLDivElement | null>;
  inputRef: React.RefObject<HTMLInputElement | null>;
  testId?: string;
  variant: keyof typeof PopOverVariant;
  zIndex?: number;
}

const DatePickerPopup: React.FC<DatePickerPopupProps> = props => {
  const { ariaLabels, datepickerWrapperRef, endMonth, footer, inputRef, locale, startMonth, testId, variant, zIndex, ...rest } = props;

  const today = new Date();
  const arrowRef = useRef<HTMLDivElement>(null);
  const [controllerSize, setControllerSize] = useState<DOMRect>();
  const bubbleSize = useSize(datepickerWrapperRef);
  const controllerisVisible = useIsVisible(datepickerWrapperRef, 0);

  function getDateFnsLocale(dayPickerLocale?: Partial<Locale>): Locale {
    return (dayPickerLocale as Locale) ?? nb;
  }

  const buildAriaLabels = (custom: DatePickerAriaLabels = {}): Partial<Labels> => {
    return {
      labelDayButton: (date, modifiers): string => {
        const dateString = format(date, 'PPPP', {
          locale: getDateFnsLocale(locale),
        });

        let label = custom.dayButtonBase ? custom.dayButtonBase.replace('{date}', dateString) : dateString;

        if (modifiers.today && custom.dayButtonToday) {
          label = custom.dayButtonToday.replace('{date}', dateString);
        }

        if (modifiers.selected && custom.dayButtonSelected) {
          label = custom.dayButtonSelected.replace('{date}', dateString);
        }

        return label;
      },

      labelNext: (): string => {
        return custom.nextMonth ?? 'Neste måned';
      },
      labelPrevious: (): string => {
        return custom.previousMonth ?? 'Forrige måned';
      },
      labelMonthDropdown: (): string => {
        return custom.monthDropdown ?? 'Velg måned';
      },
      labelYearDropdown: (): string => {
        return custom.yearDropdown ?? 'Velg år';
      },
    };
  };

  const updateControllerSize = (): void => {
    setControllerSize(inputRef.current?.getBoundingClientRect());
  };

  React.useEffect(() => {
    updateControllerSize();
  }, []);

  useInterval(updateControllerSize, 500);
  useLayoutEvent(updateControllerSize, ['scroll', 'resize'], 10);

  const datepickerPopupContainerClasses = classNames(styles['datepicker-popup-container'], {
    [styles['datepicker-popup-container--visible']]: controllerisVisible,
  });
  const verticalPosition = controllerSize && bubbleSize && getVerticalPosition(controllerSize, bubbleSize, variant);
  const popupArrowClasses = classNames(styles['datepicker-popup-arrow'], {
    [styles['datepicker-popup-arrow--visible']]: controllerisVisible,
    [styles['datepicker-popup-arrow--over']]: verticalPosition === PopOverVariant.positionbelow,
    [styles['datepicker-popup-arrow--under']]: verticalPosition === PopOverVariant.positionabove,
  });

  const bubbleStyle = controllerSize && bubbleSize && getBubbleStyle(controllerSize, bubbleSize, variant);
  const arrowStyle = bubbleStyle && controllerSize && verticalPosition && getArrowStyle(bubbleStyle, controllerSize, verticalPosition);

  const datePickerClassNames = {
    ...reactdaypickerstyles,
    ...styles,
  };

  return (
    <>
      <div className={datepickerPopupContainerClasses} data-testid={testId} ref={datepickerWrapperRef} style={{ ...bubbleStyle, zIndex }}>
        <DayPicker
          captionLayout="dropdown"
          classNames={datePickerClassNames}
          mode={'single'}
          style={{ '--rdp-cell-size': getSpacer('l') } as React.CSSProperties}
          modifiersClassNames={{
            today: styles['day--today'],
            selected: styles['day--selected'],
            disabled: styles['day--disabled'],
          }}
          footer={<span className={styles['footer-wrapper']}>{footer}</span>}
          fixedWeeks
          labels={buildAriaLabels(ariaLabels)}
          startMonth={startMonth ?? new Date(today.getFullYear() - 100, today.getMonth(), 1)}
          endMonth={endMonth ?? new Date(today.getFullYear() + 100, today.getMonth(), 1)}
          locale={locale}
          {...rest}
        />
      </div>
      <div ref={arrowRef} className={popupArrowClasses} style={{ ...arrowStyle, zIndex }} />
    </>
  );
};

export default DatePickerPopup;
