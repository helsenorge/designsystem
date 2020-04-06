import React from 'react';
import {IconRawProps} from './Icon';

const LawBook = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const hasHover = false;
  const {size = 48, classNames, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  return !isHovered || !hasHover ? (
    <svg width={size} height={size} viewBox="0 0 48 48" ref={ref} className={`${classNames} icon`} {...props}>
      <path
        fill={color}
        fillRule="evenodd"
        d="M35.9461,34.9484 L16.6331,34.9484 L16.6331,8.7314 L35.1811,8.7314 C35.6031,8.7314 35.9461,9.0744 35.9461,9.4964 L35.9461,34.9484 Z M35.9461,37.4264 L12.4711,37.4264 C12.6861,36.7464 13.3151,36.2494 14.0641,36.2494 L35.9461,36.2494 L35.9461,37.4264 Z M35.9461,38.8374 C35.9461,39.2594 35.6031,39.6014 35.1811,39.6014 L14.0641,39.6014 C13.3151,39.6014 12.6861,39.1044 12.4721,38.4264 L35.9461,38.4264 L35.9461,38.8374 Z M12.3871,10.4064 C12.3871,9.4824 13.1381,8.7314 14.0621,8.7314 L15.3331,8.7314 L15.3331,34.9484 L14.0641,34.9484 C13.4421,34.9484 12.8651,35.1414 12.3871,35.4694 L12.3871,10.4064 Z M35.1811,7.4304 L14.0621,7.4304 C12.4221,7.4304 11.0871,8.7654 11.0871,10.4064 L11.0871,37.5934 L11.1211,37.5934 C11.1081,37.7034 11.0871,37.8114 11.0871,37.9264 C11.0871,39.5664 12.4231,40.9024 14.0641,40.9024 L35.1811,40.9024 C36.3201,40.9024 37.2461,39.9754 37.2461,38.8374 L37.2461,9.4964 C37.2461,8.3574 36.3201,7.4304 35.1811,7.4304 L35.1811,7.4304 Z M28.3801,22.9264 C28.2271,23.1904 27.9811,23.3804 27.6861,23.4584 C27.3921,23.5364 27.0841,23.4984 26.8201,23.3444 L24.8211,22.1904 C24.5771,22.0374 24.3971,21.8064 24.3221,21.5264 C24.2431,21.2314 24.2841,20.9244 24.4361,20.6604 C24.7501,20.1144 25.4501,19.9264 25.9961,20.2424 L27.0711,20.8634 L27.0761,20.8554 L27.9621,21.3674 C28.2261,21.5194 28.4151,21.7654 28.4941,22.0594 C28.5721,22.3544 28.5321,22.6624 28.3801,22.9264 L28.3801,22.9264 Z M29.3331,23.4764 C29.6321,22.9584 29.7111,22.3534 29.5561,21.7754 C29.4021,21.1974 29.0301,20.7144 28.5121,20.4144 L24.9951,18.3844 C24.4501,18.0694 24.2621,17.3694 24.5761,16.8244 C24.8911,16.2774 25.5901,16.0914 26.0981,16.3824 L27.5721,17.4024 L28.1981,16.4984 L26.6861,15.4534 C25.6161,14.8364 24.2421,15.2054 23.6241,16.2744 C23.0261,17.3114 23.3601,18.6274 24.3541,19.2714 C24.0041,19.4614 23.6971,19.7404 23.4841,20.1094 C23.1841,20.6294 23.1051,21.2324 23.2601,21.8104 C23.4051,22.3554 23.7481,22.8084 24.2191,23.1114 L24.2181,23.1124 L24.2351,23.1224 C24.2591,23.1364 24.2791,23.1574 24.3041,23.1724 L27.8211,25.2034 C28.0861,25.3554 28.2751,25.6014 28.3531,25.8964 C28.4321,26.1904 28.3921,26.4984 28.2391,26.7614 C27.9251,27.3064 27.2271,27.4964 26.7031,27.1944 L24.2531,25.6114 L23.6561,26.5354 L26.1301,28.1334 C26.4821,28.3364 26.8671,28.4324 27.2471,28.4324 C28.0231,28.4324 28.7781,28.0304 29.1931,27.3124 C29.4911,26.7944 29.5711,26.1894 29.4161,25.6114 C29.2711,25.0704 28.9311,24.6194 28.4651,24.3164 C28.8221,24.1214 29.1241,23.8384 29.3331,23.4764 L29.3331,23.4764 Z"
      />
    </svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 48 48" ref={ref} className={`${classNames} icon`} {...props}></svg>
  );
});

export default LawBook;
