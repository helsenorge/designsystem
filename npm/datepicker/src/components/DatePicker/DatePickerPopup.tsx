import React, { useState, useRef } from 'react';

import classNames from 'classnames';
import { DayPicker, DayPickerProps, PropsSingle, Labels } from 'react-day-picker';
import reactdaypickerstyles from 'react-day-picker/dist/style.module.css';

import { PopOverVariant } from '@helsenorge/designsystem-react/components/PopOver';
import { useFocusTrap } from '@helsenorge/designsystem-react/hooks/useFocusTrap';
import { useInterval } from '@helsenorge/designsystem-react/hooks/useInterval';
import { useIsVisible } from '@helsenorge/designsystem-react/hooks/useIsVisible';
import { useLayoutEvent } from '@helsenorge/designsystem-react/hooks/useLayoutEvent';
import { useSize } from '@helsenorge/designsystem-react/hooks/useSize';
import { getSpacer } from '@helsenorge/designsystem-react/theme/currys/spacing';

import { getArrowStyle, getBubbleStyle, getVerticalPosition } from './position-utils';

import styles from './styles.module.scss';

interface DatePickerPopupProps
  extends Pick<
      DayPickerProps,
      'dir' | 'disabled' | 'footer' | 'startMonth' | 'initialFocus' | 'locale' | 'month' | 'onMonthChange' | 'endMonth'
    >,
    Pick<PropsSingle, 'selected' | 'onSelect'> {
  datepickerWrapperRef: React.RefObject<HTMLDivElement>;
  inputRef: React.RefObject<HTMLInputElement>;
  ariaLabels?: Partial<Labels>;
  testId?: string;
  variant: keyof typeof PopOverVariant;
  zIndex?: number;
}

const DatePickerPopup: React.FC<DatePickerPopupProps> = props => {
  const { datepickerWrapperRef, endMonth, footer, inputRef, ariaLabels, startMonth, testId, variant, zIndex, ...rest } = props;
  const today = new Date();
  const arrowRef = useRef<HTMLDivElement>(null);
  const [controllerSize, setControllerSize] = useState<DOMRect>();
  const bubbleSize = useSize(datepickerWrapperRef);
  const controllerisVisible = useIsVisible(datepickerWrapperRef, 0);
  useFocusTrap(datepickerWrapperRef, true);

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
          labels={ariaLabels}
          startMonth={startMonth ?? new Date(today.getFullYear() - 100, today.getMonth(), 1)}
          endMonth={endMonth ?? new Date(today.getFullYear() + 100, today.getMonth(), 1)}
          {...rest}
        />
      </div>
      <div ref={arrowRef} className={popupArrowClasses} style={{ ...arrowStyle, zIndex }} />
    </>
  );
};

export default DatePickerPopup;
