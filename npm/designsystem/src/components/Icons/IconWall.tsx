import React from 'react';

import Icon, { SvgIcon } from './Icon';

interface IconWallProps {
  svgIcons: SvgIcon[];
}

export const IconWall: React.FC<IconWallProps> = ({ svgIcons, ...rest }: IconWallProps): JSX.Element => (
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', columnGap: '2rem', rowGap: '2rem' }}>
    {svgIcons &&
      svgIcons.map((svgIcon, index) => {
        return (
          <div style={{ display: 'flex', flexDirection: 'column' }} key={index}>
            <Icon {...rest} svgIcon={svgIcon as SvgIcon} />
            {svgIcon.name}
          </div>
        );
      })}
  </div>
);

export default IconWall;
