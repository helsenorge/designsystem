import { IconProps } from '../components/Icon';

export const useIcons = (children: React.ReactNode[]): Array<React.ReactElement<IconProps> | React.ReactNode | {} | undefined | null> => {
  let leftIcon: React.ReactElement<IconProps> | undefined | null = null;
  let rightIcon: React.ReactElement<IconProps> | undefined | null = null;

  if ((children[0] as React.ReactElement<IconProps>)?.props?.svgIcon !== undefined) {
    leftIcon = children.shift() as React.ReactElement<IconProps>;
  }
  if ((children[children.length - 1] as React.ReactElement<IconProps>)?.props?.svgIcon !== undefined) {
    rightIcon = children.pop() as React.ReactElement<IconProps>;
  }
  const restChildren = children.filter(child => child);

  return [leftIcon, rightIcon, restChildren.length > 0 ? restChildren : null];
};
