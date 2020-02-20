import {PaletteNames, PaletteDepths} from '../palette';
import {theme} from '..';

const isComplementary = (name: PaletteNames) => name === 'black' || name === 'white';

export const getColor = (name: PaletteNames, depth?: PaletteDepths) =>
  theme.palette[`${name}${isComplementary(name) ? '' : depth}`];

export const getHoverColor = (color: PaletteNames | 'white' | 'black') => `${getColor(color, 700)}1A`;
