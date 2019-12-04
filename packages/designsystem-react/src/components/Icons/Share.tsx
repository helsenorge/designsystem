import React from 'react';
import {IconProps} from './Icon';
const Share = React.forwardRef((svgProps: IconProps, ref: any) => {
  const {size = 38, color = 'black', isHovered = false, ...props} = svgProps;
  return !isHovered ? (
    <svg width={size} height={size} viewBox="0 0 38 38" ref={ref} className="icon" {...props}>
      <path
        fill={color}
        fillRule="evenodd"
        d="M24.4365,30.7964 C23.2245,30.7964 22.2385,29.8104 22.2385,28.5974 C22.2385,27.3854 23.2245,26.3994 24.4365,26.3994 C25.6495,26.3994 26.6355,27.3854 26.6355,28.5974 C26.6355,29.8104 25.6495,30.7964 24.4365,30.7964 M13.3545,21.4074 C12.1425,21.4074 11.1565,20.4214 11.1565,19.2084 C11.1565,17.9964 12.1425,17.0094 13.3545,17.0094 C14.5675,17.0094 15.5535,17.9964 15.5535,19.2084 C15.5535,20.4214 14.5675,21.4074 13.3545,21.4074 M24.4365,7.6204 C25.6495,7.6204 26.6355,8.6074 26.6355,9.8194 C26.6355,11.0314 25.6495,12.0174 24.4365,12.0174 C23.2245,12.0174 22.2385,11.0314 22.2385,9.8194 C22.2385,8.6074 23.2245,7.6204 24.4365,7.6204 M24.4365,24.9984 C23.5915,24.9984 22.8245,25.3034 22.2095,25.7924 L16.4875,20.9454 C16.7755,20.4274 16.9545,19.8414 16.9545,19.2084 C16.9545,18.5754 16.7755,17.9894 16.4875,17.4714 L22.2095,12.6234 C22.8235,13.1134 23.5915,13.4184 24.4365,13.4184 C26.4205,13.4184 28.0365,11.8034 28.0365,9.8194 C28.0365,7.8354 26.4205,6.2204 24.4365,6.2204 C22.4525,6.2204 20.8375,7.8354 20.8375,9.8194 C20.8375,10.4524 21.0165,11.0384 21.3045,11.5564 L15.5825,16.4034 C14.9675,15.9144 14.1995,15.6094 13.3545,15.6094 C11.3705,15.6094 9.7555,17.2244 9.7555,19.2084 C9.7555,21.1924 11.3705,22.8074 13.3545,22.8074 C14.1995,22.8074 14.9675,22.5024 15.5825,22.0134 L21.3045,26.8604 C21.0165,27.3784 20.8375,27.9644 20.8375,28.5974 C20.8375,30.5824 22.4525,32.1964 24.4365,32.1964 C26.4205,32.1964 28.0365,30.5824 28.0365,28.5974 C28.0365,26.6134 26.4205,24.9984 24.4365,24.9984"
      />
    </svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 38 38" ref={ref} className="icon" {...props}>
      <path
        fill={color}
        fillRule="evenodd"
        d="M25.6868,31.6714 C24.4748,31.6714 23.4888,30.6854 23.4888,29.4724 C23.4888,28.2604 24.4748,27.2744 25.6868,27.2744 C26.8998,27.2744 27.8858,28.2604 27.8858,29.4724 C27.8858,30.6854 26.8998,31.6714 25.6868,31.6714 M13.3548,21.4074 C12.1428,21.4074 11.1568,20.4214 11.1568,19.2084 C11.1568,17.9964 12.1428,17.0094 13.3548,17.0094 C14.5668,17.0094 15.5528,17.9964 15.5528,19.2084 C15.5528,20.4214 14.5668,21.4074 13.3548,21.4074 M26.0618,6.1204 C27.2748,6.1204 28.2608,7.1074 28.2608,8.3194 C28.2608,9.5314 27.2748,10.5174 26.0618,10.5174 C24.8498,10.5174 23.8638,9.5314 23.8638,8.3194 C23.8638,7.1074 24.8498,6.1204 26.0618,6.1204 M25.6868,25.8734 C24.8378,25.8734 24.0678,26.1814 23.4518,26.6744 L16.4908,20.9374 C16.7768,20.4224 16.9538,19.8384 16.9538,19.2084 C16.9538,18.5734 16.7738,17.9854 16.4848,17.4674 L23.8388,11.1274 C24.4528,11.6144 25.2188,11.9184 26.0618,11.9184 C28.0458,11.9184 29.6618,10.3034 29.6618,8.3194 C29.6618,6.3354 28.0458,4.7204 26.0618,4.7204 C24.0778,4.7204 22.4628,6.3354 22.4628,8.3194 C22.4628,8.9544 22.6428,9.5424 22.9328,10.0614 L15.5778,16.4004 C14.9638,15.9124 14.1978,15.6094 13.3548,15.6094 C11.3708,15.6094 9.7558,17.2244 9.7558,19.2084 C9.7558,21.1924 11.3708,22.8074 13.3548,22.8074 C14.2028,22.8074 14.9728,22.5004 15.5888,22.0084 L22.5498,27.7454 C22.2648,28.2604 22.0878,28.8434 22.0878,29.4724 C22.0878,31.4574 23.7028,33.0714 25.6868,33.0714 C27.6708,33.0714 29.2868,31.4574 29.2868,29.4724 C29.2868,27.4884 27.6708,25.8734 25.6868,25.8734"
      />
    </svg>
  );
});
export default Share;
