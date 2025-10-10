import React from 'react';

type SingleSelectContextType = {
  name?: string;
  disabled?: boolean;
  required?: boolean;
  value?: string;
  onValueChange?: (newValue: string, e?: React.SyntheticEvent) => void;
};

const SingleSelectContext = React.createContext<SingleSelectContextType | null>(null);

export interface SingleSelectProps {
  name?: string;
  disabled?: boolean;
  required?: boolean;
  value?: string;
  defaultValue?: string;
  onValueChange?: (newValue: string, e?: React.SyntheticEvent) => void;
  children: React.ReactNode;
}

export const SingleSelect: React.FC<SingleSelectProps> = ({ name, disabled, required, value, defaultValue, onValueChange, children }) => {
  const isControlled = typeof value === 'string';
  const [uncontrolled, setUncontrolled] = React.useState<string | undefined>(defaultValue);
  const selected = isControlled ? value : uncontrolled;

  const context = React.useMemo<SingleSelectContextType>(
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

  return <SingleSelectContext.Provider value={context}>{children}</SingleSelectContext.Provider>;
};

export const useSingleSelect = (): SingleSelectContextType | null => React.useContext(SingleSelectContext);
