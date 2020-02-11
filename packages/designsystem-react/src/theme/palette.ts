// Labeled as 'the ugliest color in the world'
// https://en.wikipedia.org/wiki/Pantone_448_C
const placeholder = '#4A412A';

const calm = {
  calm50: '#E4F7F9',
  calm100: placeholder,
  calm200: placeholder,
  calm300: placeholder,
  calm400: placeholder,
  calm500: '#188097',
  calm600: '#17798E',
  calm700: '#08667C',
  calm800: placeholder,
  calm900: placeholder,
};

const neutral = {
  neutral50: '#F9F7F7',
  neutral100: '#F2F1F0',
  neutral200: '#D6D4D3',
  neutral300: placeholder,
  neutral400: placeholder,
  neutral500: placeholder,
  neutral600: '#666463',
  neutral700: placeholder,
  neutral800: placeholder,
  neutral900: '#333130',
};

const pulse = {
  pulse50: '#FFF2EA',
  pulse100: placeholder,
  pulse200: placeholder,
  pulse300: placeholder,
  pulse400: placeholder,
  pulse500: '#C83521',
  pulse600: placeholder,
  pulse700: '#A31F0E',
  pulse800: placeholder,
  pulse900: placeholder,
};

export const palette = {
  ...calm,
  ...neutral,
  ...pulse,
};

export type Palette =
  | 'calm50'
  | 'calm100'
  | 'calm200'
  | 'calm300'
  | 'calm400'
  | 'calm500'
  | 'calm600'
  | 'calm700'
  | 'calm800'
  | 'calm900'
  | 'neutral50'
  | 'neutral100'
  | 'neutral200'
  | 'neutral300'
  | 'neutral400'
  | 'neutral500'
  | 'neutral600'
  | 'neutral700'
  | 'neutral800'
  | 'neutral900'
  | 'pulse50'
  | 'pulse100'
  | 'pulse200'
  | 'pulse300'
  | 'pulse400'
  | 'pulse500'
  | 'pulse600'
  | 'pulse700'
  | 'pulse800'
  | 'pulse900';
