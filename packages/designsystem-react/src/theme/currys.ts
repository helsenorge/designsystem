import {PaletteNames, PaletteDepths} from './palette';
import {theme} from './';

const isNotPalette = (name: string) => name === 'white' || name === 'black';

export const getColor = (name: PaletteNames | 'white' | 'black', depth: PaletteDepths) =>
  isNotPalette(name) ? name : theme.palette[`${name}${depth}`];
