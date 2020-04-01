import React from 'react';
import {IconRawProps} from './Icon';

const Envelope = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const hasHover = true;
  const {size = 48, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  return !isHovered || !hasHover ? (
    <svg width={size} height={size} viewBox="0 0 48 48" ref={ref} className="icon" {...props}>
      <path
        fill={color}
        fillRule="evenodd"
        d="M41.0719,34.9901 L29.5719,23.4381 L41.0719,13.1511 L41.0719,34.9901 Z M7.5939,35.8211 L19.0539,24.3091 L23.8259,28.5771 L28.6009,24.3061 L40.0649,35.8211 L7.5939,35.8211 Z M6.9279,13.4611 L18.0839,23.4411 L6.9279,34.6471 L6.9279,13.4611 Z M40.2079,12.1791 L23.8259,26.8331 L7.4449,12.1791 L40.2079,12.1791 Z M5.6279,37.1211 L42.3719,37.1211 L42.3719,10.8791 L5.6279,10.8791 L5.6279,37.1211 Z"
      />
    </svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 48 48" ref={ref} className="icon" {...props}>
      <path
        fill={color}
        fillRule="evenodd"
        d="M16.931,14.403 L31.07,14.403 L31.07,13.403 L16.931,13.403 L16.931,14.403 Z M16.931,18.775 L31.07,18.775 L31.07,17.775 L16.931,17.775 L16.931,18.775 Z M41.072,34.99 L29.571,23.438 L41.072,13.151 L41.072,34.99 Z M7.594,35.821 L19.055,24.309 L23.826,28.577 L28.601,24.306 L40.064,35.821 L7.594,35.821 Z M6.928,13.461 L18.084,23.441 L6.928,34.647 L6.928,13.461 Z M9.682,12.179 L9.682,14.18 L7.445,12.179 L9.682,12.179 Z M10.982,7.763 L37.018,7.763 L37.018,15.033 L23.826,26.833 L10.982,15.343 L10.982,7.763 Z M38.318,12.179 L40.208,12.179 L38.318,13.869 L38.318,12.179 Z M38.318,10.879 L38.318,6.462 L9.682,6.462 L9.682,10.879 L5.628,10.879 L5.628,37.121 L42.372,37.121 L42.372,10.879 L38.318,10.879 Z"
      />
    </svg>
  );
});

export default Envelope;
