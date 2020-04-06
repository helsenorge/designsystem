import React from 'react';
import {IconRawProps} from './Icon';

const WarningSignStroke = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const hasHover = false;
  const {size = 48, classNames, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  return !isHovered || !hasHover ? (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      ref={ref}
      className={`${classNames} hnds-style-icon`}
      {...props}>
      <path
        fill={color}
        fillRule="evenodd"
        d="M24.0035,31.578 C23.2335,31.578 22.6095,32.202 22.6095,32.972 C22.6095,33.741 23.2335,34.365 24.0035,34.365 C24.7735,34.365 25.3975,33.741 25.3975,32.972 C25.3975,32.202 24.7735,31.578 24.0035,31.578 L24.0035,31.578 Z M24.1005,11.388 L38.7875,38.123 L9.2265,38.123 L24.1005,11.388 Z M24.1085,8.459 L6.8165,39.541 L41.1835,39.541 L24.1085,8.459 Z M24.0035,29.492 C24.4965,29.492 24.8965,29.092 24.8965,28.599 L24.8965,21.371 C24.8965,20.878 24.4965,20.478 24.0035,20.478 C23.5105,20.478 23.1105,20.878 23.1105,21.371 L23.1105,28.599 C23.1105,29.092 23.5105,29.492 24.0035,29.492 L24.0035,29.492 Z"
      />
    </svg>
  ) : (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      ref={ref}
      className={`${classNames} hnds-style-icon`}
      {...props}></svg>
  );
});

export default WarningSignStroke;
