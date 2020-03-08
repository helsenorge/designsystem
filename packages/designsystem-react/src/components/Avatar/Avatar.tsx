import React from 'react';
import StyledAvatar from './Avatar.styled';
import Icon from '../Icons';

interface AvatarProps {
  children: string;
  selected?: boolean;
  className?: string;
}

const Avatar = React.forwardRef((props: AvatarProps, ref: any) => {
  const {children, className = '', selected = false} = props;
  const trunctuatedName = children.charAt(0).toLocaleUpperCase() + children.substring(1, 2);
  return (
    <StyledAvatar selected={selected} className={className} ref={ref}>
      {selected ? <Icon size={48} type="check" color="kiwi" /> : trunctuatedName}
    </StyledAvatar>
  );
});

export default Avatar;
