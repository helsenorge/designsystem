import Icon, { BaseIconProps, IconProps } from '../components/Icon';
import LazyIcon, { LazyIconProps } from '../components/LazyIcon';
import { isComponent } from '../utils/component';

export type BaseIconElement = React.ReactElement<BaseIconProps>;

export const useIcons = (children: React.ReactNode[]): [BaseIconElement | null, BaseIconElement | null, React.ReactNode[] | null] => {
  let leftIcon: BaseIconElement | null = null;
  let rightIcon: BaseIconElement | null = null;

  const firstChild = children[0];
  if (isComponent<IconProps>(firstChild, Icon) || isComponent<LazyIconProps>(firstChild, LazyIcon)) {
    leftIcon = firstChild;
    children.shift();
  }

  const lastChild = children[children.length - 1];
  if (isComponent<IconProps>(lastChild, Icon) || isComponent<LazyIconProps>(lastChild, LazyIcon)) {
    rightIcon = lastChild;
    children.pop();
  }
  const restChildren = children.filter(child => child);

  return [leftIcon, rightIcon, restChildren.length > 0 ? restChildren : null];
};
