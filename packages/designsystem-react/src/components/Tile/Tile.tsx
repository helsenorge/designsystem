import React, {useState} from 'react';
import {StyledTitle, StyledTile, StyledDescription} from './Tile.styled';
import {HTMLAnchorProps} from '../../constants';

export type TitleTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

interface TileProps extends HTMLAnchorProps {
  className?: string;
  icon: React.ReactElement;
  title: React.ReactElement;
  description?: string;
  fixed?: boolean;
}

interface TitleProps {
  children: React.ReactNode;
  className?: string;
  is?: TitleTags;
}

export interface TileCompound
  extends React.ForwardRefExoticComponent<TileProps & React.RefAttributes<HTMLAnchorElement>> {
  Title: any;
}

const Title = React.forwardRef((props: TitleProps, ref: any) => {
  const {children, className, is = 'h1'} = props;
  return (
    <StyledTitle className={className} as={is} ref={ref}>
      {children}
    </StyledTitle>
  );
});

const Tile = React.forwardRef((props: TileProps, ref: any) => {
  const {icon, title, className = '', description, fixed = false, ...restProps} = props;
  const [isHovered, setIsHovered] = useState(false);
  return (
    <StyledTile
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      compact={!description}
      className={className}
      ref={ref}
      fixed={fixed}
      {...restProps}>
      {React.cloneElement(icon, {size: 64, isHovered})}
      {title}
      {description ? <StyledDescription>{description}</StyledDescription> : null}
    </StyledTile>
  );
}) as TileCompound;

Tile.Title = Title;

export default Tile;
