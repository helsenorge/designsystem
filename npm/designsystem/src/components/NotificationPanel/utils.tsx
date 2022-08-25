import React, { AriaAttributes } from 'react';
import { palette } from '../../theme/palette';
import Icon from '../Icons';

import InfoSignStroke from '../Icons/InfoSignStroke';
import AlertSignStroke from '../Icons/AlertSignStroke';
import AlertSignFill from '../Icons/AlertSignFill';

export const variantToIconMap = {
  info: <Icon svgIcon={InfoSignStroke} color={palette.kiwi900} hoverColor={palette.kiwi900} />,
  warn: <Icon svgIcon={AlertSignStroke} color="black" hoverColor="black" />,
  alert: <Icon svgIcon={AlertSignFill} color={palette.cherry500} hoverColor={palette.cherry500} />,
  alertLabel: <Icon svgIcon={AlertSignStroke} color={palette.cherry500} hoverColor={palette.cherry500} />,
  crisis: <Icon svgIcon={AlertSignFill} color={palette.banana200} hoverColor={palette.banana200} />,
};

interface AriaLabelAttributesConfig {
  label?: string;
  id?: string;
}

type AriaLabelAttributes = Pick<AriaAttributes, 'aria-label' | 'aria-labelledby'>;

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
