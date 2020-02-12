// Labeled as 'the ugliest color in the world'
// https://en.wikipedia.org/wiki/Pantone_448_C
const placeholder = '#4A412A';

const bone = {
  bone50: '#F9F7F7',
  bone100: '#F2F1F0',
  bone200: '#D6D4D3',
  bone300: placeholder,
  bone400: placeholder,
  bone500: placeholder,
  bone600: '#666463',
  bone700: placeholder,
  bone800: placeholder,
  bone900: '#333130',
};

const gall = {
  gall50: placeholder,
  gall100: '#FFF0BE',
  gall200: placeholder,
  gall300: placeholder,
  gall400: placeholder,
  gall500: '#DDAB06',
  gall600: placeholder,
  gall700: placeholder,
  gall800: placeholder,
  gall900: placeholder,
};

const pulse = {
  pulse50: '#FFF2EA',
  pulse100: '#FEE0D3',
  pulse200: placeholder,
  pulse300: placeholder,
  pulse400: placeholder,
  pulse500: '#C83521',
  pulse600: placeholder,
  pulse700: '#A31F0E',
  pulse800: placeholder,
  pulse900: placeholder,
};

const surgical = {
  surgical50: placeholder,
  surgical100: '#DFF2EA',
  surgical200: placeholder,
  surgical300: placeholder,
  surgical400: placeholder,
  surgical500: placeholder,
  surgical600: placeholder,
  surgical700: '#115F3D',
  surgical800: placeholder,
  surgical900: placeholder,
};

const vein = {
  vein50: '#E4F7F9',
  vein100: placeholder,
  vein200: placeholder,
  vein300: placeholder,
  vein400: placeholder,
  vein500: '#188097',
  vein600: '#17798E',
  vein700: '#08667C',
  vein800: placeholder,
  vein900: placeholder,
};

export const palette = {
  ...bone,
  ...gall,
  ...pulse,
  ...surgical,
  ...vein,
};

export type PaletteNames = 'bone' | 'gall' | 'pulse' | 'surgical' | 'vein';

export type PaletteDepths = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export type PaletteCodes =
  | 'bone50'
  | 'bone100'
  | 'bone200'
  | 'bone300'
  | 'bone400'
  | 'bone500'
  | 'bone600'
  | 'bone700'
  | 'bone800'
  | 'bone900'
  | 'gall50'
  | 'gall100'
  | 'gall200'
  | 'gall300'
  | 'gall400'
  | 'gall500'
  | 'gall600'
  | 'gall700'
  | 'gall800'
  | 'gall900'
  | 'pulse50'
  | 'pulse100'
  | 'pulse200'
  | 'pulse300'
  | 'pulse400'
  | 'pulse500'
  | 'pulse600'
  | 'pulse700'
  | 'pulse800'
  | 'pulse900'
  | 'surgical50'
  | 'surgical100'
  | 'surgical200'
  | 'surgical300'
  | 'surgical400'
  | 'surgical500'
  | 'surgical600'
  | 'surgical700'
  | 'surgical800'
  | 'surgical900'
  | 'vein50'
  | 'vein100'
  | 'vein200'
  | 'vein300'
  | 'vein400'
  | 'vein500'
  | 'vein600'
  | 'vein700'
  | 'vein800'
  | 'vein900';
