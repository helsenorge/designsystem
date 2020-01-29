import React, {useState} from 'react';
import {HTMLAnchorProps, HTMLButtonProps} from '../../../constants';
import Button, {ButtonVariants, useIcons} from '../Button/Button';

export type CommonButtonVariants = 'primary' | 'secondary' | 'tertiary';
// TODO: Consider replacing this with ButtonTag from Button component
export type CommonButtonTag = 'button' | 'a';

interface CommonButtonProps extends HTMLButtonProps, HTMLAnchorProps {
  children: React.ReactNode;
  variant?: CommonButtonVariants;
  loading?: boolean;
  htmlTag?: CommonButtonTag;
  onClick?: () => void;
}

// TODO: Consider moving this to Button component
const variantMap = {
  primary: 'fill',
  secondary: 'outline',
  tertiary: 'borderless',
};

// TODO: Move most of the logic out in a generic Button-component that the others inherit.
const CommonButton = React.forwardRef((props: CommonButtonProps, ref: any) => {
  const {children, variant = 'primary', htmlTag, disabled, loading, ...rest} = props;
  const [leftIcon, rightIcon, restChildren] = useIcons(React.Children.toArray(children));
  return (
    <Button
      disabled={disabled}
      variant={variantMap[variant] as ButtonVariants}
      size="small"
      color="surgical"
      htmlTag={htmlTag}
      loading={loading}
      ref={ref}
      {...rest}>
      {children}
    </Button>
  );
});

export default CommonButton;
