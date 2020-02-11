import React from 'react';
import {IconRawProps} from './Icon';
const Paperplane = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 38, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  return !isHovered ? (
    <svg width={size} height={size} viewBox="0 0 38 38" ref={ref} className="icon" {...props}>
      <path
        fill={color}
        fillRule="evenodd"
        d="M32.7913,9.9776 L32.9843,9.9496 L32.8463,10.1346 L32.7913,9.9776 Z M21.0443,25.9076 L10.7743,18.3876 L32.2783,10.8926 L21.0443,25.9076 Z M10.1853,27.4136 L10.1853,19.2516 L16.2863,23.7196 L10.1853,27.4136 Z M4.7783,13.9966 L30.9893,10.2356 L9.7503,17.6376 L4.7783,13.9966 Z M2.0933,13.3266 L9.1403,18.4866 L9.1403,29.2676 L17.1993,24.3886 L21.2623,27.3626 L35.3313,8.5576 L2.0933,13.3266 Z"
      />
    </svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 38 38" ref={ref} className="icon" {...props}>
      <path
        fill={hoverColor}
        fillRule="evenodd"
        d="M35.7913,6.9776 L35.9843,6.9496 L35.8463,7.1346 L35.7913,6.9776 Z M24.0443,22.9076 L13.7743,15.3876 L35.2783,7.8926 L24.0443,22.9076 Z M13.1853,24.4136 L13.1853,16.2516 L19.2863,20.7196 L13.1853,24.4136 Z M7.7783,10.9966 L33.9893,7.2356 L12.7503,14.6376 L7.7783,10.9966 Z M5.0933,10.3266 L12.1403,15.4866 L12.1403,26.2676 L20.1993,21.3886 L24.2623,24.3626 L38.3313,5.5576 L5.0933,10.3266 Z"
      />
    </svg>
  );
});
export default Paperplane;
