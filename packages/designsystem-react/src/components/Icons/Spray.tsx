import React from 'react';
import {IconRawProps} from './Icon';

const Spray = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, className, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <path
      fillRule="evenodd"
      d="M31.5842,6.6804 L31.5842,7.9684 L34.0842,7.9684 L34.0842,13.1194 L31.5842,13.1194 L31.5842,13.4654 L34.4892,19.2324 L30.5342,19.2324 L28.0342,14.2704 L25.2952,14.2704 L25.2952,15.4704 L26.4512,15.4704 L26.4512,19.7334 L33.2522,26.6144 C33.7882,27.1574 34.0842,27.8774 34.0842,28.6424 L34.0842,28.6424 L34.0842,39.2144 C34.0842,40.8054 32.7902,42.0994 31.2002,42.0994 L31.2002,42.0994 L19.2772,42.0994 C17.6872,42.0994 16.3932,40.8054 16.3932,39.2144 L16.3932,39.2144 L16.3932,15.4704 L17.5492,15.4704 L17.5492,14.2704 L13.9162,14.2704 L13.9162,11.8834 C13.9162,9.0144 16.2502,6.6804 19.1192,6.6804 L19.1192,6.6804 L31.5842,6.6804 Z M29.0972,24.2604 L17.6932,24.2604 L17.6932,39.2144 C17.6932,40.0884 18.4042,40.7984 19.2772,40.7984 L19.2772,40.7984 L31.2002,40.7984 C32.0742,40.7984 32.7842,40.0884 32.7842,39.2144 L32.7842,39.2144 L32.7842,28.6424 C32.7842,28.2224 32.6222,27.8264 32.3272,27.5284 L32.3272,27.5284 L29.0972,24.2604 Z M30.355,29.698 L30.355,38.716 L20.123,38.716 L20.123,29.698 L30.355,29.698 Z M29.055,31 L21.423,31 L21.423,37.416 L29.055,37.416 L29.055,31 Z M25.5302,20.6504 L17.6932,20.6504 L17.6932,22.9594 L27.8122,22.9594 L25.5302,20.6504 Z M25.1502,16.7714 L17.6932,16.7714 L17.6932,19.3494 L25.1502,19.3494 L25.1502,16.7714 Z M30.5342,14.2704 L29.4892,14.2704 L31.3342,17.9314 L32.3792,17.9314 L30.5342,14.2704 Z M23.9952,14.2704 L18.8492,14.2704 L18.8492,15.4704 L23.9952,15.4704 L23.9952,14.2704 Z M30.2842,7.9814 L19.1192,7.9814 C16.9672,7.9814 15.2162,9.7314 15.2162,11.8834 L15.2162,11.8834 L15.2162,12.9694 L30.2842,12.9694 L30.2842,7.9814 Z M32.7842,9.2684 L31.5842,9.2684 L31.5842,11.8184 L32.7842,11.8184 L32.7842,9.2684 Z"
    />
  );

  const normalHover = (
    <path
      fillRule="evenodd"
      d="M31.733,6.68 L31.733,7.968 L34.233,7.968 L34.233,13.12 L31.787,13.12 L31.733,13.651 L31.733,14.27 L31.671,14.27 L31.171,19.232 L27.365,19.232 L27.864,14.27 L25.444,14.27 L25.444,15.47 L26.6,15.47 L26.6,19.733 L33.401,26.615 C33.938,27.158 34.233,27.877 34.233,28.642 L34.233,28.642 L34.233,39.214 C34.233,40.805 32.94,42.099 31.35,42.099 L31.35,42.099 L19.426,42.099 C17.836,42.099 16.542,40.805 16.542,39.214 L16.542,39.214 L16.542,15.47 L17.699,15.47 L17.699,14.27 L14.065,14.27 L14.065,11.883 C14.065,9.014 16.399,6.68 19.268,6.68 L19.268,6.68 L31.733,6.68 Z M29.247,24.26 L17.843,24.26 L17.843,39.214 C17.843,40.088 18.553,40.798 19.426,40.798 L19.426,40.798 L31.35,40.798 C32.223,40.798 32.934,40.088 32.934,39.214 L32.934,39.214 L32.934,28.642 C32.934,28.222 32.771,27.827 32.476,27.529 L32.476,27.529 L29.247,24.26 Z M30.504,29.698 L30.504,38.716 L20.272,38.716 L20.272,29.698 L30.504,29.698 Z M29.204,31 L21.572,31 L21.572,37.416 L29.204,37.416 L29.204,31 Z M25.679,20.65 L17.843,20.65 L17.843,22.959 L27.961,22.959 L25.679,20.65 Z M25.3,16.771 L17.843,16.771 L17.843,19.349 L25.3,19.349 L25.3,16.771 Z M30.365,14.27 L29.171,14.27 L28.802,17.931 L29.996,17.931 L30.365,14.27 Z M24.144,14.27 L18.998,14.27 L18.998,15.47 L24.144,15.47 L24.144,14.27 Z M37.4528,12.6619 L39.4718,14.0459 L38.7368,15.1179 L36.7178,13.7339 L37.4528,12.6619 Z M30.433,7.981 L19.268,7.981 C17.116,7.981 15.366,9.731 15.366,11.883 L15.366,11.883 L15.366,12.969 L30.433,12.969 L30.433,7.981 Z M32.934,9.269 L31.734,9.269 L31.734,11.819 L32.934,11.819 L32.934,9.269 Z M40.472,9.894 L40.472,11.195 L38.195,11.195 L38.195,9.894 L40.472,9.894 Z M38.7367,5.9705 L39.4717,7.0425 L37.4527,8.4265 L36.7177,7.3545 L38.7367,5.9705 Z"
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

export default Spray;
