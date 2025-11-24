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

import Button from '@helsenorge/designsystem-react/components/Button';
import Icon from '@helsenorge/designsystem-react/components/Icon';
import Calendar from '@helsenorge/designsystem-react/components/Icons/Calendar';
import X from '@helsenorge/designsystem-react/components/Icons/X';
import Input from '@helsenorge/designsystem-react/components/Input';
import Label from '@helsenorge/designsystem-react/components/Label';

import { IconSize, useToggle, ZIndex } from '@helsenorge/designsystem-react';

import BaseDayPicker, { BaseDayPickerProps } from './BaseDayPicker';

import customstyles from './clean.module.scss';
export interface DatePickerWithInputProps extends BaseDayPickerProps {
  withClearButton?: boolean;
}

const DatePickerWithInput = (props: DatePickerWithInputProps): React.ReactNode => {
  const { withClearButton, ...baseProps } = props;
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

  return (
    <>
      <div ref={controllerRef}>
        <Input
          label={<Label labelTexts={[{ text: 'Velg dato' }]} />}
          value={inputValue?.toLocaleDateString() || ''}
          width={14}
          rightOfInput={
            <>
              {withClearButton && (
                <button onClick={handleClear} className={customstyles['clear-button']} aria-label="Clear input">
                  <Icon svgIcon={X} size={IconSize.XXSmall} />
                </button>
              )}
              <Button onClick={toggleValue} ariaLabel="Open datepicker" variant="outline">
                <Icon svgIcon={Calendar} />
              </Button>
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
