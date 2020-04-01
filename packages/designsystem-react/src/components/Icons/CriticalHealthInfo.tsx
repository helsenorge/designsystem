import React from 'react';
import {IconRawProps} from './Icon';

const CriticalHealthInfo = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const hasHover = true;
  const {size = 48, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  return !isHovered || !hasHover ? (
    <svg width={size} height={size} viewBox="0 0 48 48" ref={ref} className="icon" {...props}>
      <path
        fill={color}
        fillRule="evenodd"
        d="M23.5078,26.9058 C23.8298,26.9058 24.0908,26.6448 24.0908,26.3228 C24.0908,26.0018 23.8298,25.7398 23.5078,25.7398 C23.1858,25.7398 22.9248,26.0018 22.9248,26.3228 C22.9248,26.6448 23.1858,26.9058 23.5078,26.9058 L23.5078,26.9058 Z M39.4008,34.4348 C39.4008,35.2618 38.7278,35.9348 37.8998,35.9348 L15.1158,35.9348 C15.4308,35.5168 15.6168,34.9968 15.6168,34.4348 L15.6168,34.2958 L39.4008,34.2958 L39.4008,34.4348 Z M38.3968,39.7378 L8.6188,39.7378 L8.6188,9.2128 L18.2748,9.2128 L16.1018,10.6688 L16.1018,11.1598 L10.6158,11.1598 L10.6158,34.4348 C10.6158,35.8138 11.7378,36.9348 13.1168,36.9348 L37.8998,36.9348 C38.0708,36.9348 38.2368,36.9178 38.3968,36.8848 L38.3968,39.7378 Z M19.2988,9.7298 L19.2988,6.3678 L27.7168,6.3678 L27.7168,9.7298 L29.9138,11.2018 L29.9138,12.4758 L17.1018,12.4758 L17.1018,11.2018 L19.2988,9.7298 Z M30.9138,13.4758 L30.9138,12.1598 L35.3998,12.1598 L35.3998,33.2958 L14.6168,33.2958 L14.6168,34.4348 C14.6168,35.2618 13.9448,35.9348 13.1168,35.9348 C12.2888,35.9348 11.6158,35.2618 11.6158,34.4348 L11.6158,12.1598 L16.1018,12.1598 L16.1018,13.4758 L30.9138,13.4758 Z M28.7168,9.0828 L38.3968,9.0828 L38.3968,33.2958 L36.3998,33.2958 L36.3998,11.1598 L30.9138,11.1598 L30.9138,10.6688 L28.7168,9.1968 L28.7168,9.0828 Z M39.6968,33.2958 L39.6968,7.7828 L28.7168,7.7828 L28.7168,5.3678 L18.2988,5.3678 L18.2988,7.9128 L7.3188,7.9128 L7.3188,41.0368 L39.6968,41.0368 L39.6968,36.1658 C40.1308,35.7168 40.4008,35.1078 40.4008,34.4348 L40.4008,33.2958 L39.6968,33.2958 Z M29.3478,28.2748 L17.6728,28.2748 L23.5478,17.7148 L29.3478,28.2748 Z M31.0388,29.2748 L23.5528,15.6488 L15.9718,29.2748 L31.0388,29.2748 Z M23.5078,9.4638 C23.8528,9.4638 24.1328,9.1838 24.1328,8.8388 C24.1328,8.4928 23.8528,8.2138 23.5078,8.2138 C23.1628,8.2138 22.8828,8.4928 22.8828,8.8388 C22.8828,9.1838 23.1628,9.4638 23.5078,9.4638 L23.5078,9.4638 Z M23.5078,24.8678 C23.7138,24.8678 23.8818,24.6998 23.8818,24.4938 L23.8818,21.4698 C23.8818,21.2638 23.7138,21.0968 23.5078,21.0968 C23.3018,21.0968 23.1338,21.2638 23.1338,21.4698 L23.1338,24.4938 C23.1338,24.6998 23.3018,24.8678 23.5078,24.8678 L23.5078,24.8678 Z"
      />
    </svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 48 48" ref={ref} className="icon" {...props}>
      <path
        fill={color}
        fillRule="evenodd"
        d="M23.4481,9.4634 C23.7931,9.4634 24.0731,9.1834 24.0731,8.8384 C24.0731,8.4924 23.7931,8.2134 23.4481,8.2134 C23.1031,8.2134 22.8231,8.4924 22.8231,8.8384 C22.8231,9.1834 23.1031,9.4634 23.4481,9.4634 L23.4481,9.4634 Z M23.4881,17.7144 L29.2881,28.2744 L17.6131,28.2744 L23.4881,17.7144 Z M23.4931,15.6484 L15.9121,29.2744 L30.9791,29.2744 L23.4931,15.6484 Z M37.8351,34.4354 L15.0521,34.4354 C15.3711,34.0144 15.5681,33.4964 15.5681,32.9294 C15.5681,32.3624 15.3711,31.8444 15.0521,31.4234 L37.8351,31.4234 C38.6651,31.4234 39.3411,32.0994 39.3411,32.9294 C39.3411,33.7594 38.6651,34.4354 37.8351,34.4354 L37.8351,34.4354 Z M38.3371,39.7374 L8.5591,39.7374 L8.5591,9.2134 L18.2151,9.2134 L16.0421,10.6694 L16.0421,11.1604 L10.5561,11.1604 L10.5561,32.9344 C10.5561,34.3134 11.6781,35.4354 13.0571,35.4354 L13.0571,35.4344 C13.0591,35.4344 13.0601,35.4354 13.0621,35.4354 L37.8351,35.4354 C38.0071,35.4354 38.1751,35.4174 38.3371,35.3844 L38.3371,39.7374 Z M19.2391,9.7304 L19.2391,6.3674 L27.6571,6.3674 L27.6571,9.7304 L29.8541,11.2024 L29.8541,12.4764 L17.0421,12.4764 L17.0421,11.2024 L19.2391,9.7304 Z M14.5681,32.9294 C14.5681,33.7594 13.8921,34.4354 13.0621,34.4354 C12.2321,34.4354 11.5561,33.7594 11.5561,32.9294 L11.5561,12.1604 L16.0421,12.1604 L16.0421,13.4764 L30.8541,13.4764 L30.8541,12.1604 L35.3401,12.1604 L35.3401,30.4234 L13.0621,30.4234 L13.0621,31.4234 C13.8921,31.4234 14.5681,32.0994 14.5681,32.9294 L14.5681,32.9294 Z M28.6571,9.0834 L38.3371,9.0834 L38.3371,30.4744 C38.1751,30.4414 38.0071,30.4234 37.8351,30.4234 L36.3401,30.4234 L36.3401,11.1604 L30.8541,11.1604 L30.8541,10.6694 L28.6571,9.1964 L28.6571,9.0834 Z M39.6371,31.1954 L39.6371,7.7834 L28.6571,7.7834 L28.6571,5.3674 L18.2391,5.3674 L18.2391,7.9134 L7.2591,7.9134 L7.2591,41.0374 L39.6371,41.0374 L39.6371,34.6624 C40.0711,34.2124 40.3411,33.6034 40.3411,32.9294 C40.3411,32.2564 40.0711,31.6474 39.6371,31.1954 L39.6371,31.1954 Z M23.4481,24.8674 C23.6541,24.8674 23.8221,24.7004 23.8221,24.4944 L23.8221,21.4704 C23.8221,21.2644 23.6541,21.0964 23.4481,21.0964 C23.2421,21.0964 23.0741,21.2644 23.0741,21.4704 L23.0741,24.4944 C23.0741,24.7004 23.2421,24.8674 23.4481,24.8674 L23.4481,24.8674 Z M23.4481,25.7404 C23.1261,25.7404 22.8651,26.0014 22.8651,26.3234 C22.8651,26.6454 23.1261,26.9054 23.4481,26.9054 C23.7701,26.9054 24.0311,26.6454 24.0311,26.3234 C24.0311,26.0014 23.7701,25.7404 23.4481,25.7404 L23.4481,25.7404 Z"
      />
    </svg>
  );
});

export default CriticalHealthInfo;