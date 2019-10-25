import React from 'react';
import {Palette} from '../../constants';

interface IconProps {
  color?: Palette;
  size?: number;
}

const Lock = React.forwardRef((props: IconProps, ref: any) => {
  const {size = 128, color = 'black'} = props;
  return (
    <svg className="icon" width={size} height={size} viewBox="0 0 512 512" enable-background="new 0 0 512 512">
      <path
        fill={color}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M389.5,195.8v-62.3C389.5,59.9,329.6,0,256,0c-73.6,0-133.5,59.9-133.5,133.5v62.3
        H72V512h368V195.8H389.5z M160.5,133.5c0-52.7,42.8-95.5,95.5-95.5c52.7,0,95.5,42.8,95.5,95.5v62.3h-191V133.5z M109.9,474h292.1
        V233.7H109.9V474z"
      />
    </svg>
  );
});

Lock.displayName = 'Icon';

export default Lock;
