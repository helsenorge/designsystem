import React from 'react';
import {IconRawProps} from './Icon';

const PlusSmall = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const hasHover = true;
  const {size = 48, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  return !isHovered || !hasHover ? (
    <svg width={size} height={size} viewBox="0 0 48 48" ref={ref} className="icon" {...props}>
      <path
        fill={color}
        fillRule="evenodd"
        d="M24.9999999,14.225125 L24.999124,22.999125 L33.774875,23 L33.774875,25 L24.999124,24.999125 L24.9999999,33.774876 L22.9999999,33.774876 L22.999124,24.999125 L14.225124,25 L14.225124,23 L22.999124,22.999125 L22.9999999,14.225125 L24.9999999,14.225125 Z"
      />
    </svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 48 48" ref={ref} className="icon" {...props}>
      <path
        fill={color}
        fillRule="evenodd"
        d="M24.9999999,12.225125 L24.999124,22.999125 L35.774875,23 L35.774875,25 L24.999124,24.999125 L24.9999999,35.774876 L22.9999999,35.774876 L22.999124,24.999125 L12.225124,25 L12.225124,23 L22.999124,22.999125 L22.9999999,12.225125 L24.9999999,12.225125 Z"
      />
    </svg>
  );
});

export default PlusSmall;
