import React from 'react';
import {IconRawProps} from './Icon';

const ChevronDown = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const hasHover = true;
  const {size = 48, classNames, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  return !isHovered || !hasHover ? (
    <svg width={size} height={size} viewBox="0 0 48 48" ref={ref} className={`${classNames} icon`} {...props}>
      <polygon
        fill={color}
        fillRule="evenodd"
        points="32.951 30.648 34.37 29.239 23.999 18.788 13.63 29.239 15.049 30.648 24 21.627"
        transform="matrix(1 0 0 -1 0 49.436)"
      />
    </svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 48 48" ref={ref} className={`${classNames} icon`} {...props}>
      <g fill="none" fillRule="evenodd">
        <polygon
          fill={color}
          points="34.951 36.93 36.37 35.521 23.999 23.07 11.63 35.521 13.049 36.93 24 25.91"
          transform="matrix(1 0 0 -1 0 60)"
        />
        <rect width="2" height="22" x="23" y="13" fill={color} />
      </g>
    </svg>
  );
});

export default ChevronDown;
