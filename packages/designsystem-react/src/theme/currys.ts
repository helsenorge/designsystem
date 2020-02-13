import {PaletteNames, PaletteDepths} from './palette';
import {theme} from './';

const isNotPalette = (name: string) => name === 'white' || name === 'black';

export const getColor = (name: PaletteNames | 'white' | 'black', depth: PaletteDepths) =>
  isNotPalette(name) ? '#FFFFFF' : theme.palette[`${name}${depth}`];

export const getHoverColor = (color: PaletteNames | 'white' | 'black') => `${getColor(color, 700)}1A`;
