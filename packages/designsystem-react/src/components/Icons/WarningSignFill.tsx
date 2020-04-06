import React from 'react';
import {IconRawProps} from './Icon';

const WarningSignFill = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const hasHover = false;
  const {size = 48, classNames, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  return !isHovered || !hasHover ? (
    <svg width={size} height={size} viewBox="0 0 48 48" ref={ref} className={`${classNames} icon`} {...props}>
      <path
        fill={color}
        fillRule="evenodd"
        d="M24.8956105,21.4523747 L24.8956105,28.6651579 C24.8956105,29.15712 24.4964526,29.5562779 24.0044905,29.5562779 C23.5125284,29.5562779 23.1143684,29.15712 23.1143684,28.6651579 L23.1143684,21.4523747 C23.1143684,20.9604126 23.5125284,20.5612547 24.0044905,20.5612547 C24.4964526,20.5612547 24.8956105,20.9604126 24.8956105,21.4523747 L24.8956105,21.4523747 Z M25.3955558,33.0289516 C25.3955558,33.7963326 24.7728695,34.4190189 24.0044905,34.4190189 C23.2371095,34.4190189 22.6144232,33.7963326 22.6144232,33.0289516 C22.6144232,32.2605726 23.2371095,31.6378863 24.0044905,31.6378863 C24.7728695,31.6378863 25.3955558,32.2605726 25.3955558,33.0289516 L25.3955558,33.0289516 Z M6.61318105,39.7248253 L41.3868189,39.7248253 L24.1112653,8.27517474 L6.61318105,39.7248253 Z"
      />
    </svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 48 48" ref={ref} className={`${classNames} icon`} {...props}></svg>
  );
});

export default WarningSignFill;
