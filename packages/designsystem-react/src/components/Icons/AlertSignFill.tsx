import React from 'react';
import {IconRawProps} from './Icon';

const AlertSignFill = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const hasHover = false;
  const {size = 48, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  return !isHovered || !hasHover ? (
    <svg width={size} height={size} viewBox="0 0 48 48" ref={ref} className="icon" {...props}>
      <path
        fill={color}
        fillRule="evenodd"
        d="M24.8975,21.447 L24.8975,28.675 C24.8975,29.168 24.4975,29.568 24.0045,29.568 C23.5115,29.568 23.1125,29.168 23.1125,28.675 L23.1125,21.447 C23.1125,20.954 23.5115,20.554 24.0045,20.554 C24.4975,20.554 24.8975,20.954 24.8975,21.447 L24.8975,21.447 Z M25.3985,33.048 C25.3985,33.817 24.7745,34.441 24.0045,34.441 C23.2355,34.441 22.6115,33.817 22.6115,33.048 C22.6115,32.278 23.2355,31.654 24.0045,31.654 C24.7745,31.654 25.3985,32.278 25.3985,33.048 L25.3985,33.048 Z M6.5765,39.758 L41.4235,39.758 L24.1115,8.242 L6.5765,39.758 Z"
      />
    </svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 48 48" ref={ref} className="icon" {...props}></svg>
  );
});

export default AlertSignFill;
