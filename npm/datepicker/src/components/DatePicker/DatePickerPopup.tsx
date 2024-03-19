import React, { useState, useRef } from 'react';

import classNames from 'classnames';
import { DayPicker, DayPickerSingleProps } from 'react-day-picker';
import reactdaypickerstyles from 'react-day-picker/dist/style.module.css';

import { PopOverVariant } from '@helsenorge/designsystem-react/components/PopOver';
import { useFocusTrap } from '@helsenorge/designsystem-react/hooks/useFocusTrap';
import { useInterval } from '@helsenorge/designsystem-react/hooks/useInterval';
import { useIsVisible } from '@helsenorge/designsystem-react/hooks/useIsVisible';
import { useLayoutEvent } from '@helsenorge/designsystem-react/hooks/useLayoutEvent';
import { useSize } from '@helsenorge/designsystem-react/hooks/useSize';

import { getArrowStyle, getBubbleStyle, getVerticalPosition } from './position-utils';

import styles from './styles.module.scss';

interface DatePickerPopupProps
  extends Pick<
    DayPickerSingleProps,
    'dir' | 'disabled' | 'footer' | 'fromDate' | 'initialFocus' | 'locale' | 'month' | 'selected' | 'onSelect' | 'onMonthChange' | 'toDate'
  > {
  datepickerWrapperRef: React.RefObject<HTMLDivElement>;
  inputRef: React.RefObject<HTMLInputElement>;
  testId?: string;
  zIndex?: number;
}

const DatePickerPopup: React.FC<DatePickerPopupProps> = props => {
  const { datepickerWrapperRef, footer, inputRef, testId, zIndex, ...rest } = props;
  const arrowRef = useRef<HTMLDivElement>(null);
  const [controllerSize, setControllerSize] = useState<DOMRect>();
  const bubbleSize = useSize(datepickerWrapperRef);
  const controllerisVisible = useIsVisible(inputRef, 0);
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
  const verticalPosition = controllerSize && bubbleSize && getVerticalPosition(controllerSize, bubbleSize);
  const popupArrowClasses = classNames(styles['datepicker-popup-arrow'], {
    [styles['datepicker-popup-arrow--visible']]: controllerisVisible,
    [styles['datepicker-popup-arrow--over']]: verticalPosition === PopOverVariant.positionbelow,
    [styles['datepicker-popup-arrow--under']]: verticalPosition === PopOverVariant.positionabove,
  });

  const bubbleStyle = controllerSize && bubbleSize && getBubbleStyle(controllerSize, bubbleSize);
  const arrowStyle = bubbleStyle && controllerSize && verticalPosition && getArrowStyle(bubbleStyle, controllerSize, verticalPosition);

  const datePickerClassNames = {
    ...reactdaypickerstyles,
    ...styles,
  };

  return (
    <>
      <div className={datepickerPopupContainerClasses} data-testid={testId} ref={datepickerWrapperRef} style={{ ...bubbleStyle, zIndex }}>
        <DayPicker
          captionLayout="dropdown-buttons"
          classNames={datePickerClassNames}
          mode={'single'}
          modifiersClassNames={{ today: styles['day--today'], selected: styles['day_selected'], disabled: styles['day--disabled'] }}
          footer={<span className={styles['footer-wrapper']}>{footer}</span>}
          fixedWeeks
          {...rest}
        />
      </div>
      <div ref={arrowRef} className={popupArrowClasses} style={{ ...arrowStyle, zIndex }} />
    </>
  );
};

export default DatePickerPopup;
