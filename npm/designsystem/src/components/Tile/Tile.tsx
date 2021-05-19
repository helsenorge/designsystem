import React, { useState } from 'react';
import { StyledTileTitle, StyledTileTitleWrapper, StyledTile, StyledDescription } from './Tile.styled';
import { HTMLAnchorProps } from '../../constants';

import { TitleTags } from './../Title/Title';

interface TileProps extends HTMLAnchorProps {
  /** Adds custom classes to the element. */
  className?: string;
  /**	Sets the icon to be displayed inside the tile. */
  icon: React.ReactElement;
  /**	Sets the title to be displayed inside the tile. */
  title: React.ReactElement;
  /** Toggles the highlighted style of the tile. */
  highlighted?: boolean;
  /** Sets the description to be displayed inside the tile. */
  description?: string;
  /** Sets a fixed max and min width for the tile. */
  fixed?: boolean;
  /** Called when the tile is clicked on. */
  onClick?: (e?: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

interface TileTitleProps {
  children: React.ReactNode;
  className?: string;
  htmlMarkup?: TitleTags;
}

export interface TileCompound extends React.ForwardRefExoticComponent<TileProps & React.RefAttributes<HTMLAnchorElement>> {
  Title: React.ForwardRefExoticComponent<TileTitleProps & React.RefAttributes<HTMLHeadingElement>>;
}

const Title = React.forwardRef(function TitleForwardedRef(props: TileTitleProps, ref: React.ForwardedRef<HTMLHeadingElement>) {
  const { children, className, htmlMarkup = 'span' } = props;
  return (
    <StyledTileTitle className={className} as={htmlMarkup} ref={ref}>
      {children}
    </StyledTileTitle>
  );
});

export const Tile = React.forwardRef(function TileForwardedRef(props: TileProps, ref: React.ForwardedRef<HTMLAnchorElement>) {
  const { icon, title, className = '', description, fixed = false, highlighted = false, ...restProps } = props;
  const [isHovered, setIsHovered] = useState(false);
  return (
    <StyledTile
      ref={ref}
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      highlighted={highlighted}
      fixed={fixed}
      compact={!description}
      {...restProps}
    >
      <StyledTileTitleWrapper compact={!description}>
        {React.cloneElement(icon, { size: 64, isHovered, color: highlighted ? 'white' : 'black' })}
        {title}
      </StyledTileTitleWrapper>
      {description ? <StyledDescription>{description}</StyledDescription> : null}
    </StyledTile>
  );
}) as TileCompound;

Tile.Title = Title;

export default Tile;
