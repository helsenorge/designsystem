import React from 'react';
import StyledAvatar from './Avatar.styled';
import Icon from '../Icons';
import Check from '../Icons/Check';

interface AvatarProps {
  children: string;
  selected?: boolean;
  className?: string;
}

const Avatar = React.forwardRef(function AvatarForwardedRef(props: AvatarProps, ref: React.ForwardedRef<HTMLElement>) {
  const { children, className = '', selected = false } = props;
  const truncatedName = children.charAt(0).toLocaleUpperCase() + children.substring(1, 2);
  return (
    <StyledAvatar selected={selected} className={className} ref={ref}>
      {selected ? <Icon svgIcon={Check} size={48} color="kiwi" /> : truncatedName}
    </StyledAvatar>
  );
});

export default Avatar;
