import React from 'react';
import {IconRawProps} from './Icon';
const ExitFullScreen = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, classNames, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  return !isHovered ? (
    <svg
      width={size}
      height={size}
      viewBox="0 0 38 38"
      ref={ref}
      className={`${classNames} hnds-style-icon`}
      {...props}>
      <path
        fill={color}
        fillRule="evenodd"
        d="M23.6102,15.1387 L28.1292,10.6197 L27.1392,9.6297 L22.6202,14.1487 L22.6202,9.4647 L21.2192,9.4647 L21.2192,16.5387 L28.3272,16.5387 L28.3272,15.1387 L23.6102,15.1387 Z M9.4642,22.6527 L14.1812,22.6527 L9.6632,27.1717 L10.6532,28.1617 L15.1712,23.6437 L15.1712,28.3267 L16.5722,28.3267 L16.5722,21.2527 L9.4642,21.2527 L9.4642,22.6527 Z"
      />
    </svg>
  ) : (
    <svg
      width={size}
      height={size}
      viewBox="0 0 38 38"
      ref={ref}
      className={`${classNames} hnds-style-icon`}
      {...props}>
      <path
        fill={hoverColor}
        fillRule="evenodd"
        d="M26.1289,12.6199 L28.1289,10.6199 L27.1389,9.6299 L26.1389,10.6299 L25.1389,11.6299 L21.6199,15.1489 L21.6199,10.4639 L20.2199,10.4639 L20.2199,17.5399 L27.3269,17.5399 L27.3269,16.1389 L22.6099,16.1389 L26.1289,12.6199 Z M10.4649,21.6529 L15.1819,21.6529 L10.6619,26.1719 L9.6619,27.1719 L10.6519,28.1619 L16.1719,22.6429 L16.1719,27.3269 L17.5719,27.3269 L17.5719,20.2529 L10.4649,20.2529 L10.4649,21.6529 Z"
      />
    </svg>
  );
});
export default ExitFullScreen;
