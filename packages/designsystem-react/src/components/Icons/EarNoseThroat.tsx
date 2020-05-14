import React from 'react';
import {IconRawProps} from './Icon';

const EarNoseThroat = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, className, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <g fillRule="evenodd" transform="translate(8 7)">
      <path d="M18.6035 13.4028C18.0405 13.4028 17.5835 13.8598 17.5835 14.4228 17.5835 14.9858 18.0405 15.4428 18.6035 15.4428 19.1665 15.4428 19.6245 14.9858 19.6245 14.4228 19.6245 13.8598 19.1665 13.4028 18.6035 13.4028M8.6025 20.0376C8.4255 20.0936 8.2375 20.0726 8.0755 19.9856 7.9125 19.8986 7.7925 19.7536 7.7395 19.5766L6.6135 15.8776C6.3755 15.0976 6.8185 14.2696 7.5975 14.0326 8.0665 13.8906 8.5785 13.9896 8.9605 14.3006L9.5895 13.5226C8.9495 13.0036 8.0965 12.8396 7.3065 13.0756 5.9995 13.4746 5.2585 14.8606 5.6565 16.1686L6.7825 19.8676C6.9145 20.3006 7.2065 20.6556 7.6045 20.8686 7.8535 21.0016 8.1245 21.0686 8.3995 21.0686 8.5645 21.0686 8.7305 21.0436 8.8935 20.9946 9.4335 20.8306 9.8535 20.4106 10.0195 19.8716L9.0625 19.5786C8.9955 19.7996 8.8235 19.9706 8.6025 20.0376" />
      <path d="M26.499,19.6343 C26.342,19.8803 26.085,20.0213 25.793,20.0213 L23.936,20.0213 L23.936,22.0613 C23.936,24.9843 21.56,27.3613 18.637,27.3613 L17.986,27.3613 L17.986,32.5453 L14.755,32.5453 L14.755,28.4303 C14.755,27.3383 15.13,26.2693 15.812,25.4173 L16.22,24.9103 L13.448,22.6923 L13.042,23.1983 C11.857,24.6763 11.204,26.5343 11.204,28.4303 L11.204,32.5453 L5.846,32.5453 L5.846,27.1483 C5.846,24.5473 4.928,22.7343 3.957,20.8133 C2.879,18.6803 1.765,16.4743 1.765,12.8423 C1.765,7.3833 5.986,1.4903 12.808,1.4903 C18.203,1.4903 23.936,5.5463 23.936,13.0633 L23.936,13.2063 L26.553,18.8303 C26.676,19.0953 26.656,19.3883 26.499,19.6343 M27.731,18.2813 L25.236,12.9173 C25.163,4.6503 18.798,0.1903 12.808,0.1903 C6.001,0.1903 0.464,5.8653 0.464,12.8423 C0.464,16.7843 1.703,19.2363 2.797,21.3993 C3.735,23.2553 4.545,24.8583 4.545,27.1483 L4.545,33.8463 L12.505,33.8463 L12.505,28.4303 C12.505,27.0463 12.916,25.6873 13.674,24.5373 L14.419,25.1343 C13.794,26.1133 13.454,27.2623 13.454,28.4303 L13.454,33.8463 L19.287,33.8463 L19.287,28.6293 C22.622,28.3023 25.237,25.4813 25.237,22.0613 L25.237,21.3213 L25.793,21.3213 C26.526,21.3213 27.2,20.9513 27.595,20.3323 C27.99,19.7143 28.041,18.9473 27.731,18.2813" />
      <path d="M8.9111,16.8892 C8.9241,16.8892 8.9611,16.8892 9.0311,16.9412 L9.6291,16.1402 C8.8181,15.5342 7.6991,16.1792 7.6991,17.1022 C7.6991,17.6452 8.0571,18.1102 8.5901,18.2582 L8.8591,17.2952 C8.7851,17.2752 8.6991,17.2112 8.6991,17.1022 C8.6991,16.9852 8.7941,16.8892 8.9111,16.8892" />
    </g>
  );

  const normalHover = (
    <g fillRule="evenodd" transform="translate(8 7)">
      <path d="M18.6035 13.4028C18.0405 13.4028 17.5835 13.8598 17.5835 14.4228 17.5835 14.9858 18.0405 15.4428 18.6035 15.4428 19.1665 15.4428 19.6245 14.9858 19.6245 14.4228 19.6245 13.8598 19.1665 13.4028 18.6035 13.4028M8.6025 20.0376C8.4255 20.0936 8.2375 20.0726 8.0755 19.9856 7.9125 19.8986 7.7925 19.7536 7.7395 19.5766L6.6135 15.8776C6.3755 15.0976 6.8185 14.2696 7.5975 14.0326 8.0665 13.8906 8.5785 13.9896 8.9605 14.3006L9.5895 13.5226C8.9495 13.0036 8.0965 12.8396 7.3065 13.0756 5.9995 13.4746 5.2585 14.8606 5.6565 16.1686L6.7825 19.8676C6.9145 20.3006 7.2065 20.6556 7.6045 20.8686 7.8535 21.0016 8.1245 21.0686 8.3995 21.0686 8.5645 21.0686 8.7305 21.0436 8.8935 20.9946 9.4335 20.8306 9.8535 20.4106 10.0195 19.8716L9.0625 19.5786C8.9955 19.7996 8.8235 19.9706 8.6025 20.0376" />
      <path d="M26.499,19.6343 C26.342,19.8803 26.085,20.0213 25.793,20.0213 L23.936,20.0213 L23.936,22.0613 C23.936,24.9843 21.56,27.3613 18.637,27.3613 L17.986,27.3613 L17.986,32.5453 L14.755,32.5453 L14.755,28.4303 C14.755,27.3383 15.13,26.2693 15.812,25.4173 L16.22,24.9103 L13.448,22.6923 L13.042,23.1983 C11.857,24.6763 11.204,26.5343 11.204,28.4303 L11.204,32.5453 L5.846,32.5453 L5.846,27.1483 C5.846,24.5473 4.928,22.7343 3.957,20.8133 C2.879,18.6803 1.765,16.4743 1.765,12.8423 C1.765,7.3833 5.986,1.4903 12.808,1.4903 C18.203,1.4903 23.936,5.5463 23.936,13.0633 L23.936,13.2063 L26.553,18.8303 C26.676,19.0953 26.656,19.3883 26.499,19.6343 M27.731,18.2813 L25.236,12.9173 C25.163,4.6503 18.798,0.1903 12.808,0.1903 C6.001,0.1903 0.464,5.8653 0.464,12.8423 C0.464,16.7843 1.703,19.2363 2.797,21.3993 C3.735,23.2553 4.545,24.8583 4.545,27.1483 L4.545,33.8463 L12.505,33.8463 L12.505,28.4303 C12.505,27.0463 12.916,25.6873 13.674,24.5373 L14.419,25.1343 C13.794,26.1133 13.454,27.2623 13.454,28.4303 L13.454,33.8463 L19.287,33.8463 L19.287,28.6293 C22.622,28.3023 25.237,25.4813 25.237,22.0613 L25.237,21.3213 L25.793,21.3213 C26.526,21.3213 27.2,20.9513 27.595,20.3323 C27.99,19.7143 28.041,18.9473 27.731,18.2813" />
      <path d="M8.9111,16.8892 C8.9241,16.8892 8.9611,16.8892 9.0311,16.9412 L9.6291,16.1402 C8.8181,15.5342 7.6991,16.1792 7.6991,17.1022 C7.6991,17.6452 8.0571,18.1102 8.5901,18.2582 L8.8591,17.2952 C8.7851,17.2752 8.6991,17.2112 8.6991,17.1022 C8.6991,16.9852 8.7941,16.8892 8.9111,16.8892" />
    </g>
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

export default EarNoseThroat;
