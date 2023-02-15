const banana = {
  banana50: '#FDF8DF',
  banana100: '#FCF2BF',
  banana200: '#F9EA9F',
  banana300: '#F5E080',
  banana400: '#EBC840',
  banana500: '#DDAB06',
  banana600: '#C59302',
  banana700: '#AB7C00',
  banana800: '#916500',
  banana900: '#764F00',
};

const blueberry = {
  blueberry50: '#E4F7F9',
  blueberry100: '#CAE7ED',
  blueberry200: '#AFDAE3',
  blueberry300: '#7ABECC',
  blueberry400: '#58AABB',
  blueberry500: '#188097',
  blueberry600: '#126F87',
  blueberry700: '#08667C',
  blueberry800: '#06596C',
  blueberry900: '#084350',
};

const cherry = {
  cherry50: '#FFF2EA',
  cherry100: '#F7E1D2',
  cherry200: '#EEC0A5',
  cherry300: '#E39376',
  cherry400: '#D56147',
  cherry500: '#C83521',
  cherry600: '#B62E1C',
  cherry700: '#A31F0E',
  cherry800: '#912112',
  cherry900: '#7E1C0E',
};

const kiwi = {
  kiwi50: '#E6F8EE',
  kiwi100: '#C2EDD6',
  kiwi200: '#9DE2BF',
  kiwi300: '#79D6AA',
  kiwi400: '#56CA96',
  kiwi500: '#33BE84',
  kiwi600: '#10B172',
  kiwi700: '#0CA161',
  kiwi800: '#099150',
  kiwi900: '#078141',
};

const neutral = {
  neutral50: '#F5F3F3',
  neutral100: '#EAE7E7',
  neutral200: '#D6D4D3',
  neutral300: '#BDBAB9',
  neutral400: '#AAA8A6',
  neutral500: '#989693',
  neutral600: '#7D7C79',
  neutral700: '#62625F',
  neutral800: '#474745',
  neutral900: '#2B2C2B',
};

const plum = {
  plum50: '#EFE4FD',
  plum100: '#D7BDF9',
  plum200: '#BF98F3',
  plum300: '#A875EB',
  plum400: '#9153E2',
  plum500: '#7A33D7',
  plum600: '#6A2ABF',
  plum700: '#5B22A6',
  plum800: '#4C1B8C',
  plum900: '#3C1471',
};

export const palette = {
  ...banana,
  ...blueberry,
  ...cherry,
  ...kiwi,
  ...neutral,
  ...plum,
  black: '#000000',
  white: '#ffffff',
};

export type PaletteNames = 'banana' | 'blueberry' | 'cherry' | 'kiwi' | 'neutral' | 'plum' | 'black' | 'white';

export type PaletteDepths = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export type PaletteCodes =
  | 'banana50'
  | 'banana100'
  | 'banana200'
  | 'banana300'
  | 'banana400'
  | 'banana500'
  | 'banana600'
  | 'banana700'
  | 'banana800'
  | 'banana900'
  | 'blueberry50'
  | 'blueberry100'
  | 'blueberry200'
  | 'blueberry300'
  | 'blueberry400'
  | 'blueberry500'
  | 'blueberry600'
  | 'blueberry700'
  | 'blueberry800'
  | 'blueberry900'
  | 'cherry50'
  | 'cherry100'
  | 'cherry200'
  | 'cherry300'
  | 'cherry400'
  | 'cherry500'
  | 'cherry600'
  | 'cherry700'
  | 'cherry800'
  | 'cherry900'
  | 'kiwi50'
  | 'kiwi100'
  | 'kiwi200'
  | 'kiwi300'
  | 'kiwi400'
  | 'kiwi500'
  | 'kiwi600'
  | 'kiwi700'
  | 'kiwi800'
  | 'kiwi900'
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
  | 'plum50'
  | 'plum100'
  | 'plum200'
  | 'plum300'
  | 'plum400'
  | 'plum500'
  | 'plum600'
  | 'plum700'
  | 'plum800'
  | 'plum900'
  | 'white'
  | 'black';
