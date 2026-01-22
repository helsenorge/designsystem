import type { AriaAttributes } from 'react';

interface AriaLabelAttributesConfig {
  label?: string;
  id?: string;
  fallbackId?: string;
  prefer?: 'id' | 'label';
}

export type AriaLabelAttributes = Pick<AriaAttributes, 'aria-label' | 'aria-labelledby'>;

export const getAriaLabelAttributes = (config: AriaLabelAttributesConfig): AriaLabelAttributes | undefined => {
  const { label, id, fallbackId, prefer = 'id' } = config;

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

  if (fallbackId) {
    return {
      'aria-labelledby': fallbackId,
    };
  }
};

export interface ErrorAriaProps {
  error?: boolean;
  'aria-describedby'?: string;
  errorText?: string;
  errorTextId?: string;
}

/**
 * Get IDs to be used with aria-describedby in form components like <Input />
 * @param props Props from form component
 * @param errorTextUuid Unique ID of the form component's error text
 * @returns Element IDs or undefined if there is no aria-description
 */
export const getAriaDescribedBy = (props: ErrorAriaProps, errorTextUuid: string): string | undefined => {
  const ariaDescribedBy: string | undefined = props['aria-describedby'];
  const hasErrorText: boolean = !!(props.errorText || (props.error && props.errorTextId));
  const errorTextId: string | undefined = hasErrorText ? errorTextUuid : undefined;

  if (ariaDescribedBy && !errorTextId) {
    return ariaDescribedBy;
  } else if (!ariaDescribedBy && errorTextId) {
    return errorTextId;
  } else if (ariaDescribedBy && errorTextId) {
    return ariaDescribedBy + ' ' + errorTextId;
  }
};
