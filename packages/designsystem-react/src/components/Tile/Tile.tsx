import React from 'react';
import {StyledTitle, StyledTile, StyledDescription} from './Tile.styled';

export type TitleTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

interface TileProps {
  icon: React.ReactElement;
  title: React.ReactElement;
  description: string;
  fixed?: boolean;
}

interface TitleProps {
  children: React.ReactNode;
  className?: string;
  is?: TitleTags;
}

export interface TileCompound extends React.ForwardRefExoticComponent<TileProps & React.RefAttributes<HTMLDivElement>> {
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
  const {icon, title, description, fixed = false} = props;
  return (
    <StyledTile ref={ref} fixed={fixed}>
      {icon}
      {title}
      <StyledDescription>{description}</StyledDescription>
    </StyledTile>
  );
}) as TileCompound;

Tile.Title = Title;

export default Tile;
