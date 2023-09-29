import React, { useState, useRef } from 'react';

import classNames from 'classnames';
import { DayPicker, DayPickerSingleProps } from 'react-day-picker';
import reactdaypickerstyles from 'react-day-picker/dist/style.module.css';

import { getArrowStyle, getBubbleStyle, getVerticalPosition } from './utils';
import { useFocusTrap, useIsVisible } from '../../../../designsystem/src';
import { useLayoutEvent, useSize } from '../../../../designsystem/src';
import { PopOverVariant } from '../../../../designsystem/src/components/PopOver';
import { useInterval } from '../../../../designsystem/src/hooks/useInterval';

import styles from './styles.module.scss';

interface DatePickerPopupProps
  extends Pick<
    DayPickerSingleProps,
    'dir' | 'disabled' | 'footer' | 'fromDate' | 'initialFocus' | 'locale' | 'month' | 'selected' | 'onSelect' | 'onMonthChange' | 'toDate'
  > {
  datepickerWrapperRef: React.RefObject<HTMLDivElement>;
  inputRef: React.RefObject<HTMLInputElement>;
  testId?: string;
}

const DatePickerPopup: React.FC<DatePickerPopupProps> = props => {
  const { datepickerWrapperRef, footer, inputRef, testId, ...rest } = props;
  const arrowRef = useRef<HTMLDivElement>(null);
  const [controllerSize, setControllerSize] = useState<DOMRect>();
  const bubbleSize = useSize(datepickerWrapperRef);
  const controllerisVisible = useIsVisible(inputRef, 0);
  useFocusTrap(datepickerWrapperRef, true);

  const renderFooterContent = (): JSX.Element => {
    return <span className={styles['footer-wrapper']}>{footer}</span>;
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
      <div className={datepickerPopupContainerClasses} data-testid={testId} ref={datepickerWrapperRef} style={bubbleStyle}>
        <DayPicker
          captionLayout="dropdown-buttons"
          classNames={datePickerClassNames}
          mode={'single'}
          modifiersClassNames={{ today: styles['day--today'], selected: styles['day_selected'], disabled: styles['day--disabled'] }}
          footer={renderFooterContent()}
          fixedWeeks
          {...rest}
        />
      </div>
      <div ref={arrowRef} className={popupArrowClasses} style={arrowStyle} />
    </>
  );
};

export default DatePickerPopup;
