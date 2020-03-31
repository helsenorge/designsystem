import React from 'react';
import {IconRawProps} from './Icon';
const Reply = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  return !isHovered ? (
    <svg width={size} height={size} viewBox="0 0 38 38" ref={ref} className="icon" {...props}>
      <path
        fill={color}
        fillRule="evenodd"
        d="M21.2527,14.3672 L7.6837,14.3672 L15.3747,6.1702 L14.3537,5.2122 L5.0337,15.1462 L14.5197,25.0222 L15.5287,24.0532 L7.5717,15.7672 L21.2527,15.7672 C26.6787,15.7672 31.0927,20.1812 31.0927,25.6072 L31.0927,29.7242 L32.4927,29.7242 L32.4927,25.6072 C32.4927,19.4092 27.4507,14.3672 21.2527,14.3672"
      />
    </svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 38 38" ref={ref} className="icon" {...props}>
      <path
        fill={hoverColor}
        fillRule="evenodd"
        d="M21.2529,14.3672 L4.8999,14.3672 L12.5909,6.1702 L11.5689,5.2122 L2.2499,15.1452 L11.7339,25.0222 L12.7439,24.0532 L4.7869,15.7672 L21.2529,15.7672 C26.6789,15.7672 31.0929,20.1812 31.0929,25.6072 L31.0929,26.9392 L32.4929,26.9392 L32.4929,25.6072 C32.4929,19.4092 27.4509,14.3672 21.2529,14.3672"
      />
    </svg>
  );
});
export default Reply;
