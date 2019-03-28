import cn from 'classnames';
import React from 'react';
import {IconSizes} from '../../constants';
import styles from './Icon.module.scss';

interface IconProps extends React.HTMLProps<HTMLOrSVGImageElement> {
  children: string;
  size?: IconSizes;
}

function Icon(props: IconProps) {
  const Svg = require(`!svg-react-loader!../../icons/${props.children}.svg`);
  const classes = cn(
    styles.icon,
    {[styles['icon--tiny']]: props.size === IconSizes.Tiny},
    {[styles['icon--small']]: props.size === IconSizes.Small},
    {[styles['icon--medium']]: props.size === IconSizes.Medium},
    {[styles['icon--large']]: props.size === IconSizes.Large},
    {[styles['icon--big']]: props.size === IconSizes.Big},
    {[styles['icon--huge']]: props.size === IconSizes.Huge},
  );
  return <Svg className={classes} />;
}

Icon.defaultProps = {
  size: IconSizes.Medium,
};

export {Icon};
