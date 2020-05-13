import React from 'react';
import {IconRawProps} from './Icon';

const Cough = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <path
      fillRule="evenodd"
      d="M20.8075,7.3639 C26.7985,7.3639 33.1635,11.8229 33.2365,20.0909 L33.2365,20.0909 L35.7315,25.4549 C36.0415,26.1209 35.9905,26.8879 35.5955,27.5059 C35.2005,28.1249 34.5265,28.4939 33.7925,28.4939 L33.7925,28.4939 L33.2375,28.4939 L33.2375,29.8009 L30.2295,30.2159 L32.5115,32.2949 L32.2205,32.7559 C31.1195,34.4979 29.3075,35.6059 27.2875,35.8029 L27.2875,35.8029 L27.2875,41.0189 L12.5455,41.0189 L12.5455,34.3209 C12.5455,32.0309 11.7355,30.4279 10.7975,28.5719 C9.7045,26.4089 8.4645,23.9569 8.4645,20.0149 C8.4645,13.0389 14.0015,7.3639 20.8075,7.3639 Z M20.8075,8.6629 C13.9865,8.6629 9.7645,14.5559 9.7645,20.0149 C9.7645,23.6469 10.8795,25.8529 11.9575,27.9859 C12.9285,29.9069 13.8455,31.7209 13.8455,34.3209 L13.8455,34.3209 L13.8455,39.7189 L25.9875,39.7189 L25.9875,34.5349 L26.6375,34.5349 C28.2855,34.5349 29.8085,33.7839 30.8105,32.5029 L30.8105,32.5029 L28.5095,30.4069 L28.7005,29.1149 L31.9375,28.6679 L31.9375,27.1939 L33.7925,27.1939 C34.0845,27.1939 34.3425,27.0529 34.4995,26.8069 C34.6565,26.5609 34.6755,26.2679 34.5525,26.0029 L34.5525,26.0029 L31.9375,20.3789 L31.9375,20.2359 C31.9375,12.7189 26.2035,8.6629 20.8075,8.6629 Z M35.1931,32.3366 L37.1531,33.8756 L36.3501,34.8986 L34.3901,33.3586 L35.1931,32.3366 Z M38.422,29.722 L38.422,31.022 L36.11,31.022 L36.11,29.722 L38.422,29.722 Z M27.977,20.981 L27.977,22.081 L25.584,22.081 L25.584,20.981 L27.977,20.981 Z"
    />
  );

  const normalHover = (
    <path
      fillRule="evenodd"
      d="M20.808,7.3639 C26.798,7.3639 33.163,11.8229 33.237,20.0909 L33.237,20.0909 L35.731,25.4549 C36.041,26.1209 35.99,26.8879 35.595,27.5059 C35.201,28.1249 34.527,28.4939 33.793,28.4939 L33.793,28.4939 L33.237,28.4939 L33.237,29.8009 L30.23,30.2159 L32.512,32.2949 L32.22,32.7559 C31.119,34.4979 29.308,35.6059 27.288,35.8029 L27.288,35.8029 L27.288,41.0189 L12.545,41.0189 L12.545,34.3209 C12.545,32.0309 11.735,30.4279 10.797,28.5719 C9.704,26.4089 8.464,23.9569 8.464,20.0149 C8.464,13.0389 14.001,7.3639 20.808,7.3639 Z M20.808,8.6629 C13.986,8.6629 9.765,14.5559 9.765,20.0149 C9.765,23.6469 10.879,25.8529 11.957,27.9859 C12.929,29.9069 13.846,31.7209 13.846,34.3209 L13.846,34.3209 L13.846,39.7189 L25.987,39.7189 L25.987,34.5349 L26.638,34.5349 C28.285,34.5349 29.809,33.7839 30.81,32.5029 L30.81,32.5029 L28.509,30.4069 L28.7,29.1149 L31.937,28.6679 L31.937,27.1939 L33.793,27.1939 C34.085,27.1939 34.342,27.0529 34.499,26.8069 C34.656,26.5609 34.676,26.2679 34.553,26.0029 L34.553,26.0029 L31.937,20.3789 L31.937,20.2359 C31.937,12.7189 26.203,8.6629 20.808,8.6629 Z M35.7952,32.8098 L37.7562,34.3498 L36.9532,35.3718 L34.9922,33.8318 L35.7952,32.8098 Z M39.064,29.722 L39.064,31.022 L36.752,31.022 L36.752,29.722 L39.064,29.722 Z M27.976,20.981 L27.976,22.081 L25.583,22.081 L25.583,20.981 L27.976,20.981 Z"
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
      {isHovered ? normalHover : normal}
    </svg>
  );
});

export default Cough;
