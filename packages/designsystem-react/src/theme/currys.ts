import {PaletteNames, PaletteDepths} from './palette';
import {theme} from './';

const getHex = (colorTone: string) => (colorTone === 'white' ? '#FFF' : '#000');

const isNotPalette = (name: string) => name === 'white' || name === 'black';

export const getColor = (name: PaletteNames | 'white' | 'black', depth: PaletteDepths) =>
  isNotPalette(name) ? getHex(name) : theme.palette[`${name}${depth}`];

export const getHoverColor = (color: PaletteNames | 'white' | 'black') => `${getColor(color, 700)}1A`;
