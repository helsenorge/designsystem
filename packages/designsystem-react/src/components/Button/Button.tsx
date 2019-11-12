import React, {useState} from 'react';
import {HTMLButtonProps, HTMLAnchorProps, ButtonVariant} from '../../constants';

export type ButtonTag = 'a' | 'button';

function getCorrectIcon(child: any, className: string, index: number) {
  const iconSizeMap = {
    'is-start': 64,
    'is-start is-secondary': 48,
    'is-start is-tertiary': 48,
  };
  const iconSize = iconSizeMap[className];
  return React.cloneElement(child, {size: index === 0 && iconSize ? iconSize : 38});
}

interface ButtonProps extends HTMLButtonProps, HTMLAnchorProps {
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
  asTag?: ButtonTag;
  onClick?: () => void;
}

const Button = React.forwardRef((props: ButtonProps, ref: any) => {
  const {className, asTag = 'button', children, ...rest} = props;
  const [hasIcon, setHasIcon] = useState(false);
  const classes = hasIcon ? `button ${className} has-icon` : `button ${className}`;
  function handleChildren() {
    return React.Children.map(children, (child: any, index: number) => {
      if (child.type && child.type.displayName === 'Icon') {
        if (!hasIcon) {
          setHasIcon(true);
        }
        return getCorrectIcon(child, className!, index);
      }
      return <span>{child}</span>;
    });
  }
  const Element = React.createElement(`${asTag}`, {children: handleChildren(), className: classes, ...rest});
  return Element;
});

export {Button, ButtonProps};
