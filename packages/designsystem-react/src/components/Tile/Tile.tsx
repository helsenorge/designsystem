import React from 'react';
import {StyledTitle, StyledTile, StyledDescription} from './Tile.styled';

interface TileProps {
  icon: React.ReactElement;
  title: string;
  description: string;
  fixedWidth?: boolean;
}

const Tile = React.forwardRef((props: TileProps, ref: any) => {
  const {icon, title, description, fixedWidth = false} = props;
  return (
    <StyledTile ref={ref} fixedWidth={fixedWidth}>
      {icon}
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>{description}</StyledDescription>
    </StyledTile>
  );
});

export default Tile;
