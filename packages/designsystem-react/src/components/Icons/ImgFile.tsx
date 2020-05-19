import React from 'react';
import {IconRawProps} from './Icon';

const ImgFile = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, className, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <path
      fillRule="evenodd"
      d="M25.4114,17.7524 C25.9114,17.7524 26.3174,18.1584 26.3174,18.6584 C26.3174,19.1584 25.9114,19.5644 25.4114,19.5644 C24.9114,19.5644 24.5054,19.1584 24.5054,18.6584 C24.5054,18.1584 24.9114,17.7524 25.4114,17.7524 L25.4114,17.7524 Z M25.4114,20.5654 C26.4624,20.5654 27.3174,19.7094 27.3174,18.6584 C27.3174,17.6074 26.4624,16.7524 25.4114,16.7524 C24.3604,16.7524 23.5054,17.6074 23.5054,18.6584 C23.5054,19.7094 24.3604,20.5654 25.4114,20.5654 L25.4114,20.5654 Z M25.5334,24.8614 L27.6954,22.6434 L31.0114,26.7604 L27.1354,26.7604 L25.5334,24.8614 Z M16.9894,26.7604 L21.4074,21.5224 L25.8264,26.7604 L16.9894,26.7604 Z M27.7654,21.1374 L24.8854,24.0934 L21.4074,19.9714 L14.8374,27.7604 L33.1004,27.7604 L27.7654,21.1374 Z M12.0004,39.1004 L35.9994,39.1004 L35.9994,8.9004 L12.0004,8.9004 L12.0004,39.1004 Z M10.6994,40.3994 L37.3004,40.3994 L37.3004,7.5994 L10.6994,7.5994 L10.6994,40.3994 Z"
    />
  );

  const normalHover = (
    <path
      fillRule="evenodd"
      d="M25.4111,15.7522 C25.9111,15.7522 26.3171,16.1582 26.3171,16.6582 C26.3171,17.1582 25.9111,17.5642 25.4111,17.5642 C24.9111,17.5642 24.5051,17.1582 24.5051,16.6582 C24.5051,16.1582 24.9111,15.7522 25.4111,15.7522 L25.4111,15.7522 Z M25.4111,18.5652 C26.4621,18.5652 27.3171,17.7092 27.3171,16.6582 C27.3171,15.6072 26.4621,14.7522 25.4111,14.7522 C24.3601,14.7522 23.5051,15.6072 23.5051,16.6582 C23.5051,17.7092 24.3601,18.5652 25.4111,18.5652 L25.4111,18.5652 Z M25.5331,24.8622 L27.6951,22.6432 L31.0111,26.7602 L27.1351,26.7602 L25.5331,24.8622 Z M16.9891,26.7602 L21.4071,21.5222 L25.8261,26.7602 L16.9891,26.7602 Z M27.7651,21.1372 L24.8851,24.0932 L21.4071,19.9712 L14.8371,27.7602 L33.1001,27.7602 L27.7651,21.1372 Z M12.0001,39.1002 L35.9991,39.1002 L35.9991,8.9002 L12.0001,8.9002 L12.0001,39.1002 Z M10.6991,40.4002 L37.3001,40.4002 L37.3001,7.6002 L10.6991,7.6002 L10.6991,40.4002 Z"
    />
  );

  return (
    <svg
      width={size}
      height={size}
      fill={isHovered ? hoverColor : color}
      viewBox="0 0 48 48"
      ref={ref}
      className={`${className} hnds-style-icon`}
      {...props}>
      {isHovered ? normalHover : normal}
    </svg>
  );
});

export default ImgFile;