import { useRef, useState } from 'react';

import {
  autoUpdate,
  flip,
  FloatingFocusManager,
  hide,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
} from '@floating-ui/react';

import Icon from '@helsenorge/designsystem-react/components/Icon';
import Calendar from '@helsenorge/designsystem-react/components/Icons/Calendar';
import X from '@helsenorge/designsystem-react/components/Icons/X';
import Input from '@helsenorge/designsystem-react/components/Input';

import { IconSize, useToggle, ZIndex } from '@helsenorge/designsystem-react';

import BaseDayPicker, { BaseDayPickerProps } from './BaseDayPicker';

import customstyles from './clean.module.scss';
export interface DatePickerWithInputProps extends BaseDayPickerProps {
  /** sets input disabled */
  disabled?: boolean;
  /** @todo: denne bør være required når man bruker input men ikke for standalone */
  label?: React.ReactNode;
  /** @todo: gjør ferdig denne funksjonaliteten */
  /** Shows a clear button if input field has content */
  withClearButton?: boolean;
}

const DatePickerWithInput = (props: DatePickerWithInputProps): React.ReactNode => {
  const { disabled, label, withClearButton, ...baseProps } = props;
  const [inputValue, setInputValue] = useState<Date | undefined>(baseProps.selectedDate);
  const controllerRef = useRef<HTMLDivElement>(null);
  const { value, toggleValue } = useToggle(false);
  const { refs, floatingStyles, context, middlewareData } = useFloating({
    placement: 'bottom-start',
    // todo: sjekk om vi skal tillate at den kan legge seg over inputfeltet
    middleware: [offset(8), flip({ mainAxis: true, crossAxis: false }), shift({ mainAxis: true, padding: 8 }), hide()],
    whileElementsMounted: autoUpdate,
    elements: {
      reference: controllerRef.current,
    },
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);

  const { getFloatingProps } = useInteractions([click, dismiss]);
  const isVisible = value && !middlewareData.hide?.referenceHidden;

  const handleClear = (): void => {
    setInputValue(undefined);
  };

  /** @todo */
  const hasValue = !!inputValue;

  return (
    <>
      <div ref={controllerRef}>
        <Input
          disabled={disabled}
          label={label}
          value={inputValue?.toLocaleDateString() || ''}
          width={14}
          rightOfInput={
            <>
              {withClearButton && hasValue && (
                <button onClick={handleClear} disabled={disabled} className={customstyles['clear-button']} aria-label="Clear input">
                  <Icon svgIcon={X} size={IconSize.XXSmall} />
                </button>
              )}
              <button onClick={toggleValue} disabled={disabled} aria-label="Open datepicker" className={customstyles['calendar-button']}>
                <Icon svgIcon={Calendar} size={IconSize.XSmall} />
              </button>
            </>
          }
        />
      </div>
      {value && (
        <FloatingFocusManager context={context} modal={false}>
          <div
            ref={refs.setFloating}
            style={{ ...floatingStyles, visibility: isVisible ? 'visible' : 'hidden', zIndex: ZIndex.PopOver }}
            {...getFloatingProps()}
          >
            <BaseDayPicker {...baseProps} selectedDate={inputValue} onDateChange={setInputValue} />
          </div>
        </FloatingFocusManager>
      )}
    </>
  );
};

export default DatePickerWithInput;
