import { AriaAttributes } from 'react';

interface AriaLabelAttributesConfig {
  label?: string;
  id?: string;
  prefer?: 'id' | 'label';
}

export type AriaLabelAttributes = Pick<AriaAttributes, 'aria-label' | 'aria-labelledby'>;

export const getAriaLabelAttributes = (config: AriaLabelAttributesConfig): AriaLabelAttributes | undefined => {
  const { label, id, prefer = 'id' } = config;

  if (id && prefer === 'id') {
    return {
      'aria-labelledby': id,
    };
  }

  if (label) {
    return {
      'aria-label': label,
    };
  }

  if (id) {
    return {
      'aria-labelledby': id,
    };
  }
};
