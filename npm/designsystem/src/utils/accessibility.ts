import { AriaAttributes } from 'react';

interface AriaLabelAttributesConfig {
  label?: string;
  id?: string;
}

export type AriaLabelAttributes = Pick<AriaAttributes, 'aria-label' | 'aria-labelledby'>;

export const getAriaLabelAttributes = (config: AriaLabelAttributesConfig): AriaLabelAttributes | undefined => {
  const { label, id } = config;

  if (id) {
    return {
      'aria-labelledby': id,
    };
  }
  if (label) {
    return {
      'aria-label': label,
    };
  }
};
