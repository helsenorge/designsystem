import React from 'react';
import {IconRawProps} from './Icon';

const Publication = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const hasHover = true;
  const {size = 48, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  return !isHovered || !hasHover ? (
    <svg width={size} height={size} viewBox="0 0 48 48" ref={ref} className="icon" {...props}>
      <path
        fill={color}
        fillRule="evenodd"
        d="M25.331,29.214 L31.356,29.214 L31.356,28.214 L25.331,28.214 L25.331,29.214 Z M25.331,26.368 L31.356,26.368 L31.356,25.368 L25.331,25.368 L25.331,26.368 Z M25.331,32.059 L31.356,32.059 L31.356,31.059 L25.331,31.059 L25.331,32.059 Z M34.521,33.539 C34.521,34.284 33.916,34.889 33.172,34.889 L14.828,34.889 C14.645,34.889 14.47,34.851 14.311,34.785 L14.3,34.78 C13.817,34.574 13.478,34.096 13.478,33.539 L13.478,8.624 C13.478,7.88 14.084,7.274 14.828,7.274 L33.172,7.274 C33.916,7.274 34.521,7.88 34.521,8.624 L34.521,33.539 Z M30.453,40.458 L18.307,36.189 L30.453,36.189 L30.453,40.458 Z M33.172,5.974 L14.828,5.974 C13.367,5.974 12.177,7.163 12.177,8.624 L12.177,33.539 C12.177,34.652 12.868,35.602 13.841,35.994 L13.84,35.997 L31.754,42.293 L31.754,36.189 L33.172,36.189 C34.633,36.189 35.822,35.001 35.822,33.539 L35.822,8.624 C35.822,7.163 34.633,5.974 33.172,5.974 L33.172,5.974 Z M17.144,22.16 L30.856,22.16 L30.856,17.423 L17.144,17.423 L17.144,22.16 Z M16.144,23.159 L31.856,23.159 L31.856,16.422 L16.144,16.422 L16.144,23.159 Z M16.447,14.15 L31.356,14.15 L31.356,13.15 L16.447,13.15 L16.447,14.15 Z M16.644,26.368 L22.668,26.368 L22.668,25.368 L16.644,25.368 L16.644,26.368 Z M16.644,32.059 L22.668,32.059 L22.668,31.059 L16.644,31.059 L16.644,32.059 Z M16.644,29.214 L22.668,29.214 L22.668,28.214 L16.644,28.214 L16.644,29.214 Z M16.447,11.304 L27.191,11.304 L27.191,10.304 L16.447,10.304 L16.447,11.304 Z"
      />
    </svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 48 48" ref={ref} className="icon" {...props}>
      <path
        fill={color}
        fillRule="evenodd"
        d="M25.331,32.059 L31.356,32.059 L31.356,31.059 L25.331,31.059 L25.331,32.059 Z M25.331,29.214 L31.356,29.214 L31.356,28.214 L25.331,28.214 L25.331,29.214 Z M34.521,33.539 C34.521,34.284 33.915,34.889 33.171,34.889 L14.865,34.889 L14.28,34.767 C13.81,34.555 13.479,34.087 13.479,33.539 L13.479,8.624 C13.479,7.88 14.084,7.274 14.829,7.274 L33.171,7.274 C33.915,7.274 34.521,7.88 34.521,8.624 L34.521,33.539 Z M32.454,38.575 L21.067,36.189 L32.454,36.189 L32.454,38.575 Z M33.171,5.974 L14.829,5.974 C13.368,5.974 12.178,7.163 12.178,8.624 L12.178,33.539 C12.178,34.681 12.908,35.647 13.921,36.019 L13.921,36.02 L13.934,36.023 C14.156,36.103 14.39,36.152 14.633,36.169 L33.754,40.176 L33.754,36.12 C34.935,35.853 35.822,34.8 35.822,33.539 L35.822,8.624 C35.822,7.163 34.632,5.974 33.171,5.974 L33.171,5.974 Z M16.644,26.368 L22.669,26.368 L22.669,25.368 L16.644,25.368 L16.644,26.368 Z M17.144,22.16 L30.856,22.16 L30.856,17.423 L17.144,17.423 L17.144,22.16 Z M16.144,23.159 L31.856,23.159 L31.856,16.422 L16.144,16.422 L16.144,23.159 Z M25.331,26.368 L31.356,26.368 L31.356,25.368 L25.331,25.368 L25.331,26.368 Z M16.644,29.214 L22.669,29.214 L22.669,28.214 L16.644,28.214 L16.644,29.214 Z M16.644,32.059 L22.669,32.059 L22.669,31.059 L16.644,31.059 L16.644,32.059 Z M16.448,11.304 L27.191,11.304 L27.191,10.304 L16.448,10.304 L16.448,11.304 Z M16.448,14.15 L31.356,14.15 L31.356,13.15 L16.448,13.15 L16.448,14.15 Z"
      />
    </svg>
  );
});

export default Publication;
