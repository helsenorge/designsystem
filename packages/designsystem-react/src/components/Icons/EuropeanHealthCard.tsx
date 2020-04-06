import React from 'react';
import {IconRawProps} from './Icon';

const EuropeanHealthCard = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const hasHover = false;
  const {size = 48, classNames, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  return !isHovered || !hasHover ? (
    <svg width={size} height={size} viewBox="0 0 48 48" ref={ref} className={`${classNames} icon`} {...props}>
      <path
        fill={color}
        fillRule="evenodd"
        d="M24.312,28.655 L23.875,27.769 L23.438,28.655 L22.46,28.797 L23.168,29.487 L23.001,30.46 L23.875,30 L24.749,30.46 L24.583,29.487 L25.29,28.797 L24.312,28.655 Z M23.875,17.29 L23.438,18.176 L22.46,18.318 L23.168,19.007 L23.001,19.981 L23.875,19.521 L24.749,19.981 L24.583,19.007 L25.29,18.318 L24.312,18.176 L23.875,17.29 Z M28.022,27.104 L27.584,26.218 L27.147,27.104 L26.17,27.246 L26.877,27.936 L26.71,28.909 L27.584,28.449 L28.459,28.909 L28.292,27.936 L28.999,27.246 L28.022,27.104 Z M29.552,23.415 L29.115,22.53 L28.677,23.415 L27.7,23.557 L28.407,24.247 L28.24,25.22 L29.115,24.761 L29.989,25.22 L29.822,24.247 L30.529,23.557 L29.552,23.415 Z M41.677,33.887 C41.677,34.968 40.797,35.848 39.716,35.848 L8.034,35.848 C6.953,35.848 6.073,34.968 6.073,33.887 L6.073,13.863 C6.073,12.781 6.953,11.902 8.034,11.902 L39.716,11.902 C40.797,11.902 41.677,12.781 41.677,13.863 L41.677,33.887 Z M39.716,10.602 L8.034,10.602 C6.236,10.602 4.773,12.065 4.773,13.863 L4.773,33.887 C4.773,35.685 6.236,37.148 8.034,37.148 L39.716,37.148 C41.514,37.148 42.977,35.685 42.977,33.887 L42.977,13.863 C42.977,12.065 41.514,10.602 39.716,10.602 L39.716,10.602 Z M26.71,21.532 L27.584,21.072 L28.459,21.532 L28.292,20.558 L28.999,19.869 L28.022,19.727 L27.584,18.841 L27.147,19.727 L26.17,19.869 L26.877,20.558 L26.71,21.532 Z M20.166,18.841 L19.729,19.727 L18.751,19.869 L19.458,20.558 L19.291,21.532 L20.166,21.072 L21.04,21.532 L20.873,20.558 L21.58,19.869 L20.603,19.727 L20.166,18.841 Z M19.343,24.247 L20.05,23.557 L19.073,23.415 L18.636,22.53 L18.198,23.415 L17.221,23.557 L17.928,24.247 L17.761,25.22 L18.636,24.761 L19.51,25.22 L19.343,24.247 Z M20.603,27.104 L20.166,26.218 L19.729,27.104 L18.751,27.246 L19.458,27.936 L19.291,28.909 L20.166,28.449 L21.04,28.909 L20.873,27.936 L21.58,27.246 L20.603,27.104 Z"
      />
    </svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 48 48" ref={ref} className={`${classNames} icon`} {...props}></svg>
  );
});

export default EuropeanHealthCard;
