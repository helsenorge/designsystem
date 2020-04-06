import React from 'react';
import {IconRawProps} from './Icon';

const CalendarEvent = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const hasHover = true;
  const {size = 48, classNames, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  return !isHovered || !hasHover ? (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      ref={ref}
      className={`${classNames} hnds-style-icon`}
      {...props}>
      <path
        fill={color}
        fillRule="evenodd"
        d="M35.7205,39.2468 C33.4655,39.2468 31.4975,38.0178 30.4375,36.1978 L30.4375,35.9818 L30.3135,35.9818 C29.8625,35.1288 29.6045,34.1598 29.6045,33.1298 C29.6045,29.7568 32.3475,27.0128 35.7205,27.0128 C39.0935,27.0128 41.8375,29.7568 41.8375,33.1298 C41.8375,36.5028 39.0935,39.2468 35.7205,39.2468 L35.7205,39.2468 Z M28.8755,35.9818 L8.6795,35.9818 L8.6795,19.4518 L39.0705,19.4518 L39.0705,26.5208 C38.0625,26.0078 36.9265,25.7128 35.7205,25.7128 C31.6305,25.7128 28.3035,29.0398 28.3035,33.1298 C28.3035,34.1398 28.5085,35.1028 28.8755,35.9818 L28.8755,35.9818 Z M8.6795,11.9578 L12.5265,11.9578 L12.5265,13.1198 C12.5265,14.3548 13.5325,15.3598 14.7675,15.3598 C16.0025,15.3598 17.0085,14.3548 17.0085,13.1198 L17.0085,11.9578 L30.6185,11.9578 L30.6185,13.1198 C30.6185,14.3548 31.6245,15.3598 32.8605,15.3598 C34.0965,15.3598 35.1025,14.3548 35.1025,13.1198 L35.1025,11.9578 L39.0705,11.9578 L39.0705,18.1518 L8.6795,18.1518 L8.6795,11.9578 Z M13.8265,9.7098 C13.8265,9.1908 14.2485,8.7678 14.7675,8.7678 C15.2855,8.7678 15.7075,9.1908 15.7075,9.7098 L15.7075,13.1198 C15.7075,13.6378 15.2855,14.0598 14.7675,14.0598 C14.2485,14.0598 13.8265,13.6378 13.8265,13.1198 L13.8265,9.7098 Z M31.9195,9.7098 C31.9195,9.1908 32.3415,8.7678 32.8605,8.7678 C33.3795,8.7678 33.8015,9.1908 33.8015,9.7098 L33.8015,13.1198 C33.8015,13.6378 33.3795,14.0598 32.8605,14.0598 C32.3415,14.0598 31.9195,13.6378 31.9195,13.1198 L31.9195,9.7098 Z M40.3705,27.3598 L40.3705,10.6588 L35.1025,10.6588 L35.1025,9.7098 C35.1025,8.4738 34.0965,7.4688 32.8605,7.4688 C31.6245,7.4688 30.6185,8.4738 30.6185,9.7098 L30.6185,10.6588 L17.0085,10.6588 L17.0085,9.7098 C17.0085,8.4738 16.0025,7.4688 14.7675,7.4688 C13.5325,7.4688 12.5265,8.4738 12.5265,9.7098 L12.5265,10.6588 L7.3785,10.6588 L7.3785,37.2818 L29.5775,37.2818 C30.9125,39.2498 33.1675,40.5468 35.7205,40.5468 C39.8105,40.5468 43.1385,37.2198 43.1385,33.1298 C43.1385,30.7998 42.0565,28.7208 40.3705,27.3598 L40.3705,27.3598 Z M36.2205,29.7998 L35.2205,29.7998 L35.2205,33.6298 L38.2775,33.6298 L38.2775,32.6298 L36.2205,32.6298 L36.2205,29.7998 Z"
      />
    </svg>
  ) : (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      ref={ref}
      className={`${classNames} hnds-style-icon`}
      {...props}>
      <path
        fill={color}
        fillRule="evenodd"
        d="M37.9499,30.2698 L37.0849,29.7698 L34.8539,33.6298 L38.2769,33.6298 L38.2769,32.6298 L36.5869,32.6298 L37.9499,30.2698 Z M35.7209,39.2468 C32.3469,39.2468 29.6039,36.5028 29.6039,33.1298 C29.6039,29.7568 32.3469,27.0128 35.7209,27.0128 C39.0939,27.0128 41.8379,29.7568 41.8379,33.1298 C41.8379,36.5028 39.0939,39.2468 35.7209,39.2468 L35.7209,39.2468 Z M28.8759,35.9818 L8.6789,35.9818 L8.6789,19.4518 L39.0699,19.4518 L39.0699,26.5208 C38.0619,26.0078 36.9269,25.7128 35.7209,25.7128 C31.6309,25.7128 28.3039,29.0398 28.3039,33.1298 C28.3039,34.1398 28.5089,35.1028 28.8759,35.9818 L28.8759,35.9818 Z M8.6789,11.9578 L12.5259,11.9578 L12.5259,13.1198 C12.5259,14.3548 13.5319,15.3598 14.7669,15.3598 C16.0039,15.3598 17.0099,14.3548 17.0099,13.1198 L17.0099,11.9578 L30.6189,11.9578 L30.6189,13.1198 C30.6189,14.3548 31.6249,15.3598 32.8609,15.3598 C34.0959,15.3598 35.1019,14.3548 35.1019,13.1198 L35.1019,11.9578 L39.0699,11.9578 L39.0699,18.1518 L8.6789,18.1518 L8.6789,11.9578 Z M13.8269,9.7098 C13.8269,9.1908 14.2489,8.7688 14.7669,8.7688 C15.2869,8.7688 15.7089,9.1908 15.7089,9.7098 L15.7089,13.1198 C15.7089,13.6378 15.2869,14.0608 14.7669,14.0608 C14.2489,14.0608 13.8269,13.6378 13.8269,13.1198 L13.8269,9.7098 Z M31.9199,9.7098 C31.9199,9.1908 32.3419,8.7688 32.8609,8.7688 C33.3799,8.7688 33.8019,9.1908 33.8019,9.7098 L33.8019,13.1198 C33.8019,13.6378 33.3799,14.0608 32.8609,14.0608 C32.3419,14.0608 31.9199,13.6378 31.9199,13.1198 L31.9199,9.7098 Z M40.3709,27.3598 L40.3709,10.6588 L35.1019,10.6588 L35.1019,9.7098 C35.1019,8.4738 34.0959,7.4688 32.8609,7.4688 C31.6249,7.4688 30.6189,8.4738 30.6189,9.7098 L30.6189,10.6588 L17.0099,10.6588 L17.0099,9.7098 C17.0099,8.4738 16.0039,7.4688 14.7669,7.4688 C13.5319,7.4688 12.5259,8.4738 12.5259,9.7098 L12.5259,10.6588 L7.3789,10.6588 L7.3789,37.2818 L29.5779,37.2818 C30.9129,39.2498 33.1679,40.5468 35.7209,40.5468 C39.8099,40.5468 43.1379,37.2198 43.1379,33.1298 C43.1379,30.7998 42.0559,28.7208 40.3709,27.3598 L40.3709,27.3598 Z"
      />
    </svg>
  );
});

export default CalendarEvent;
