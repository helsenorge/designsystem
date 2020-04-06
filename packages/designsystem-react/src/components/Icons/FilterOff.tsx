import React from 'react';
import {IconRawProps} from './Icon';
const FilterOff = React.forwardRef((svgProps: IconRawProps, ref: any) => {
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
        d="M27.7409,13.3718 C27.7409,13.5888 27.6519,13.8008 27.4969,13.9538 L20.1439,21.1858 L20.1439,27.7288 L17.6469,30.0428 L17.6469,21.1858 L16.2699,19.8318 L24.3999,11.5578 L27.7409,11.5578 L27.7409,13.3718 Z M15.5629,19.1368 L10.2949,13.9538 C10.1399,13.8018 10.0519,13.5888 10.0519,13.3718 L10.0519,11.5578 L23.0099,11.5578 L15.5629,19.1368 Z M25.7759,10.1578 L28.6649,7.2168 L27.9579,6.5218 L24.3859,10.1578 L8.6509,10.1578 L8.6509,13.3718 C8.6509,13.9618 8.8919,14.5378 9.3119,14.9518 L14.5819,20.1348 L10.5799,24.2078 L11.2869,24.9038 L15.2889,20.8308 L16.2469,21.7728 L16.2469,33.2488 L21.5449,28.3408 L21.5449,21.7728 L28.4779,14.9518 C28.8989,14.5388 29.1409,13.9628 29.1409,13.3718 L29.1409,10.1578 L25.7759,10.1578 Z"
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
        d="M27.7402,13.3718 C27.7402,13.5888 27.6512,13.8018 27.4972,13.9538 L20.1442,21.1858 L20.1442,27.7288 L17.6472,30.0428 L17.6472,21.1858 L16.2762,19.8378 L24.4112,11.5578 L27.7402,11.5578 L27.7402,13.3718 Z M15.5692,19.1418 L10.2942,13.9528 C10.1392,13.8008 10.0512,13.5888 10.0512,13.3718 L10.0512,11.5578 L23.0212,11.5578 L15.5692,19.1418 Z M25.7872,10.1578 L27.2762,8.6418 L26.5692,7.9468 L24.3972,10.1578 L8.6502,10.1578 L8.6502,13.3718 C8.6502,13.9628 8.8922,14.5388 9.3122,14.9518 L14.5882,20.1408 L9.1922,25.6328 L9.8992,26.3288 L15.2952,20.8368 L16.2472,21.7728 L16.2472,33.2488 L21.5452,28.3408 L21.5452,21.7728 L28.4792,14.9508 C28.8992,14.5378 29.1402,13.9618 29.1402,13.3718 L29.1402,10.1578 L25.7872,10.1578 Z"
      />
    </svg>
  );
});
export default FilterOff;
