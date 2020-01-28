import {useLayoutEffect, useState} from 'react';
import {Colors} from '../theme';

interface OnToggleOptions {
  isToggled: boolean;
  color?: Colors;
}

interface UseIconColorOptions {
  variant: string;
  defaultColor: Colors;
  variantColor: Colors;
  onHover?: OnToggleOptions;
  onDisable?: OnToggleOptions;
}

// TODO: Clearly this hook needs to be re-evaluated if it gets even messier
// Might want to bake in some icon color logic into the icons themselves
export const useIconColor = (options: UseIconColorOptions) => {
  const [iconColor, setIconColor] = useState(options.defaultColor);
  useLayoutEffect(() => {
    if (options.onDisable?.isToggled) {
      setIconColor('scab');
    } else if (options.variant !== 'primary' && options.onHover?.isToggled) {
      setIconColor(options.onHover?.color);
    } else if (options.variant !== 'primary' && !options.onHover?.isToggled) {
      setIconColor(options.variantColor);
    } else {
      setIconColor(options.defaultColor);
    }
  }, [options]);
  return iconColor;
};
