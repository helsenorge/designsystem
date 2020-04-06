import React from 'react';
import {IconRawProps} from './Icon';

const Referral = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const hasHover = true;
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
        d="M36.2618,15.8757 L34.4238,15.8757 L39.1048,20.5567 L21.8628,20.5567 L21.8628,21.8567 L39.1048,21.8567 L34.4238,26.5387 L36.2618,26.5387 L41.5928,21.2077 L36.2618,15.8757 Z M15.8638,30.8267 L30.0348,30.8267 L30.0348,29.5267 L15.8638,29.5267 L15.8638,30.8267 Z M34.5478,39.2257 L10.6258,39.2257 L10.6258,8.5247 L34.5478,8.5247 L34.5478,12.1727 L35.8478,12.1727 L35.8478,7.2247 L9.3248,7.2247 L9.3248,40.5257 L35.8478,40.5257 L35.8478,30.2407 L34.5478,30.2407 L34.5478,39.2257 Z M15.8638,26.3417 L30.0348,26.3417 L30.0348,25.0417 L15.8638,25.0417 L15.8638,26.3417 Z"
      />
    </svg>
  ) : (
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
        d="M35.6104,7.2248 L35.6104,12.1728 L34.3104,12.1728 L34.3104,8.5248 L10.3884,8.5248 L10.3884,39.2258 L34.3104,39.2258 L34.3104,30.2408 L35.6104,30.2408 L35.6104,40.5258 L9.0874,40.5258 L9.0874,7.2248 L35.6104,7.2248 Z M29.797,29.526 L29.797,30.826 L15.626,30.826 L15.626,29.526 L29.797,29.526 Z M38.275,15.8758 L43.606,21.2068 L38.275,26.5378 L36.436,26.5378 L41.117,21.8568 L23.875,21.8568 L23.875,20.5568 L41.117,20.5568 L36.436,15.8758 L38.275,15.8758 Z M29.797,25.042 L29.797,26.342 L15.626,26.342 L15.626,25.042 L29.797,25.042 Z"
      />
    </svg>
  );
});

export default Referral;
