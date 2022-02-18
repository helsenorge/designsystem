import React from 'react';
import { getIcon, SvgPathProps } from './Icon';

const Pause: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <g>
      <path d="M27.447 31.959h3V16.04h-3zM17.553 31.959h3V16.04h-3z" />
    </g>
  );

  const normalHover = (
    <g>
      <path d="M27.447 34.486h3V13.513h-3zM17.553 34.486h3V13.513h-3z" />
    </g>
  );

  const small = <path d="M26.817 31.827h3.998V15.91h-3.998v15.918zm-9.894 0h3.997V15.91h-3.997v15.918z" />;

  const smallHover = <path d="M26.817 34.355h3.998V13.383h-3.998v20.972zm-9.894 0h3.997V13.383h-3.997v20.972z" />;

  return getIcon(size, isHovered, normal, normalHover, small, smallHover);
};

export default Pause;
