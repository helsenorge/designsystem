import React from 'react';
import {IconRawProps} from './Icon';

const Lock = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <path d="M24,8.47532895 C28.0560114,8.47532895 31.3440584,11.7633759 31.3440584,15.8193873 L31.3440584,15.8193873 L31.344,19.509 L34.3486842,19.5096114 L34.3486842,36.9534848 L13.6909437,36.9534848 L13.6909437,19.5096114 L16.655,19.509 L16.6559416,15.8193873 C16.6559416,11.8444961 19.8137819,8.60715801 23.757581,8.47925444 L23.757581,8.47925444 Z M32.598,21.259 L30,21.2593289 L30,21.27 L18,21.27 L18,21.2593289 L15.44,21.259 L15.44,35.203 L32.598,35.203 L32.598,21.259 Z M24,10.2253289 C20.9104869,10.2253289 18.4059416,12.7298742 18.4059416,15.8193873 L18.4059416,15.8193873 L18.405,19.5193289 L29.5940584,19.5193289 L29.5940584,15.8193873 C29.5940584,12.7298742 27.0895131,10.2253289 24,10.2253289 Z" />
  );

  const normalHover = (
    <path d="M29.594,19.509 L29.5940584,13.5878906 C29.5940584,10.4983775 27.0895131,7.99383224 24,7.99383224 C20.9840467,7.99383224 18.5255373,10.3805332 18.4101751,13.3682319 L18.4059416,13.5878906 L18.4059416,15.1582031 C18.4059416,15.6414523 18.0141908,16.0332031 17.5309416,16.0332031 C17.0848655,16.0332031 16.7167524,15.6994036 16.6627591,15.2679613 L16.6559416,15.1582031 L16.6559416,13.5878906 C16.6559416,9.53187918 19.9439886,6.24383224 24,6.24383224 C27.9748912,6.24383224 31.2122293,9.40167252 31.3401329,13.3454717 L31.3440584,13.5878906 L31.344,19.509 L34.3486842,19.5096114 L34.3486842,36.9534848 L13.6909437,36.9534848 L13.6909437,19.5096114 L29.594,19.509 Z M15.44,21.259 L15.44,35.203 L32.598,35.203 L32.598,21.259 L15.44,21.259 Z" />
  );

  const simplified = (
    <path
      fillRule="evenodd"
      d="M15.7351579,35.0747368 L32.2648421,35.0747368 L32.2648421,21.4768421 L15.7351579,21.4768421 L15.7351579,35.0747368 Z M18.5962105,15.8052632 C18.5962105,12.8242105 21.0202105,10.4002105 24,10.4002105 C26.9810526,10.4002105 29.4050526,12.8242105 29.4050526,15.8052632 L29.4050526,19.3282105 L18.5962105,19.3282105 L18.5962105,15.8052632 Z M31.5549474,19.3282105 L31.5549474,15.8052632 C31.5549474,11.6406316 28.1658947,8.25031579 24,8.25031579 C19.8353684,8.25031579 16.4475789,11.6406316 16.4475789,15.8052632 L16.4475789,19.3282105 L13.5865263,19.3282105 L13.5865263,37.2233684 L34.4134737,37.2233684 L34.4134737,19.3282105 L31.5549474,19.3282105 Z"
    />
  );

  const simplifiedHover = (
    <path
      fillRule="evenodd"
      d="M15.7351579,35.0747368 L32.2648421,35.0747368 L32.2648421,21.4768421 L15.7351579,21.4768421 L15.7351579,35.0747368 Z M31.5473684,19.3282105 C31.5486316,19.3168421 31.5549474,19.308 31.5549474,19.2966316 L31.5549474,13.5922105 C31.5549474,9.42757895 28.1658947,6.03978947 24,6.03978947 C19.8353684,6.03978947 16.4475789,9.42757895 16.4475789,13.5922105 L16.4475789,14.8717895 C16.4475789,15.4642105 16.9288421,15.9454737 17.5212632,15.9454737 C18.1149474,15.9454737 18.5962105,15.4642105 18.5962105,14.8717895 L18.5962105,13.5922105 C18.5962105,10.6124211 21.0202105,8.18842105 24,8.18842105 C26.9810526,8.18842105 29.4050526,10.6124211 29.4050526,13.5922105 L29.4050526,19.2966316 C29.4050526,19.308 29.4113684,19.3168421 29.4126316,19.3282105 L13.5865263,19.3282105 L13.5865263,37.2233684 L34.4134737,37.2233684 L34.4134737,19.3282105 L31.5473684,19.3282105 Z"
    />
  );

  return (
    <svg
      width={size}
      height={size}
      fill={isHovered ? hoverColor : color}
      viewBox="0 0 48 48"
      ref={ref}
      className="icon"
      {...props}>
      {isExtraSmall ? (isHovered ? simplifiedHover : simplified) : isHovered ? normalHover : normal}
    </svg>
  );
});

export default Lock;
