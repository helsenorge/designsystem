import React from 'react';

export type SingleSelectContextType = {
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
  defaultValue?: string;
  onValueChange?: (newValue: string, e?: React.SyntheticEvent) => void;
  children: React.ReactNode;
}

export const SingleSelect: React.FC<SingleSelectProps> = ({ name, disabled, defaultValue, onValueChange, children }) => {
  const [selected, setSelected] = React.useState<string | undefined>(defaultValue);

  const context = React.useMemo<SingleSelectContextType>(
    () => ({
      name,
      disabled,
      value: selected,
      onValueChange: (v, e): void => {
        setSelected(v);
        onValueChange?.(v, e);
      },
    }),
    [name, disabled, selected, onValueChange]
  );

  return <SingleSelectContext.Provider value={context}>{children}</SingleSelectContext.Provider>;
};
