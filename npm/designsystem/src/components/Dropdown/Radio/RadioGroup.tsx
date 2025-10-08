import React from 'react';

type RadioGroupContextType = {
  name?: string;
  disabled?: boolean;
  required?: boolean;
  value?: string;
  onValueChange?: (newValue: string, e?: React.SyntheticEvent) => void;
};

const RadioGroupContext = React.createContext<RadioGroupContextType | null>(null);

export interface RadioGroupProps {
  name?: string;
  disabled?: boolean;
  required?: boolean;
  value?: string;
  defaultValue?: string;
  onValueChange?: (newValue: string, e?: React.SyntheticEvent) => void;
  children: React.ReactNode;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({ name, disabled, required, value, defaultValue, onValueChange, children }) => {
  const isControlled = typeof value === 'string';
  const [uncontrolled, setUncontrolled] = React.useState<string | undefined>(defaultValue);
  const selected = isControlled ? value : uncontrolled;

  // TODO: Trenger jeg egentlig usememo her?
  const context = React.useMemo<RadioGroupContextType>(
    () => ({
      name,
      disabled,
      required,
      value: selected,
      onValueChange: (v, e): void => {
        if (!isControlled) setUncontrolled(v);
        onValueChange?.(v, e);
      },
    }),
    [name, disabled, required, selected, isControlled, onValueChange]
  );

  return <RadioGroupContext.Provider value={context}>{children}</RadioGroupContext.Provider>;
};

export const useRadioGroup = (): RadioGroupContextType | null => React.useContext(RadioGroupContext);
