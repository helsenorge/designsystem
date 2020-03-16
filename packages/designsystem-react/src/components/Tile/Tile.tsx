import React from 'react';
import {StyledTitle, StyledTile, StyledDescription} from './Tile.styled';
import {HTMLAnchorProps} from '../../constants';

export type TitleTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

interface TileProps extends HTMLAnchorProps {
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
  const {icon, title, description, fixed = false} = props;
  return (
    <StyledTile compact={!description} ref={ref} fixed={fixed}>
      {icon}
      {title}
      {description ? <StyledDescription>{description}</StyledDescription> : null}
    </StyledTile>
  );
}) as TileCompound;

Tile.Title = Title;

export default Tile;
