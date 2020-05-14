import React from 'react';
import {IconRawProps} from './Icon';

const GasCan = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, className, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <path
      fillRule="evenodd"
      d="M23.8784,5.9754 C24.0854,5.9394 24.2984,6.0004 24.4504,6.1454 C25.0204,6.6924 30.0144,11.5784 30.0144,14.7274 C30.0144,16.8784 28.8754,18.7644 27.1724,19.8284 L27.1724,19.8284 L27.2824,19.8284 L27.2824,22.8584 C27.4334,22.8714 27.5824,22.8934 27.7314,22.9164 L27.7314,22.9164 L33.1844,15.2234 L34.2444,15.9754 L29.0884,23.2494 C32.0234,24.2744 34.1374,27.0634 34.1374,30.3414 L34.1374,30.3414 L34.1374,42.6994 L13.8634,42.6994 L13.8634,30.3414 C13.8634,27.0634 15.9774,24.2744 18.9114,23.2494 L18.9114,23.2494 L13.7554,15.9754 L14.8164,15.2234 L20.2694,22.9164 C20.4184,22.8934 20.5664,22.8714 20.7184,22.8584 L20.7184,22.8584 L20.7184,19.8284 L20.8284,19.8284 C19.1254,18.7644 17.9854,16.8784 17.9854,14.7274 C17.9854,13.4394 18.8164,11.7144 20.4544,9.6024 C20.6414,9.3604 20.9714,9.2814 21.2474,9.4144 C21.5234,9.5444 21.6704,9.8504 21.6014,10.1484 C21.2864,11.502025 21.247025,12.0930875 21.2421031,12.8902945 L21.2414,13.2474 C21.2414,13.9434 21.8074,14.5084 22.5044,14.5084 C23.1994,14.5084 23.7654,13.9434 23.7654,13.2474 C23.7654,13.1094 23.6074,12.7854 23.4674,12.4994 C22.9134,11.3624 21.9854,9.4594 23.4094,6.3434 C23.4964,6.1524 23.6714,6.0154 23.8784,5.9754 Z M26.6194,24.1254 L21.3804,24.1254 C17.9524,24.1254 15.1634,26.9144 15.1634,30.3414 L15.1634,30.3414 L15.1634,41.3984 L32.8374,41.3984 L32.8374,30.3414 C32.8374,26.9144 30.0474,24.1254 26.6194,24.1254 L26.6194,24.1254 Z M29.116,30.298 L29.116,39.316 L18.884,39.316 L18.884,30.298 L29.116,30.298 Z M27.816,31.6 L20.184,31.6 L20.184,38.016 L27.816,38.016 L27.816,31.6 Z M25.9824,20.3994 C25.3604,20.6184 24.6954,20.7424 24.0004,20.7424 C23.3054,20.7424 22.6404,20.6184 22.0184,20.3994 L22.0184,20.3994 L22.0184,22.8244 L25.9824,22.8244 Z M24.2414,7.7774 C23.5924,9.7884 24.1874,11.0074 24.6364,11.9284 C24.8664,12.4014 25.0664,12.8094 25.0664,13.2474 C25.0664,14.6604 23.9164,15.8094 22.5044,15.8094 C21.0904,15.8094 19.9414,14.6604 19.9414,13.2474 C19.9414,13.0524 19.9424,12.8734 19.9444,12.6994 C19.4264,13.6674 19.2854,14.3124 19.2854,14.7274 C19.2854,17.3274 21.4004,19.4414 24.0004,19.4414 C26.5994,19.4414 28.7144,17.3274 28.7144,14.7274 C28.7144,12.8234 25.9244,9.5254 24.2414,7.7774 Z"
    />
  );

  const normalHover = (
    <path
      fillRule="evenodd"
      d="M23.8264,1.8634 C24.0704,1.8304 24.3124,1.9354 24.4524,2.1364 C24.6754,2.4604 29.9324,10.1094 29.9324,14.2944 C29.9324,16.7624 28.8814,18.7424 27.1754,19.8284 L27.1754,19.8284 L27.1994,19.8284 L27.1994,22.8584 C27.3514,22.8714 27.4994,22.8934 27.6494,22.9164 L27.6494,22.9164 L33.1014,15.2234 L34.1624,15.9754 L29.0054,23.2494 C31.9404,24.2744 34.0544,27.0634 34.0544,30.3414 L34.0544,30.3414 L34.0544,42.6994 L13.7804,42.6994 L13.7804,30.3414 C13.7804,27.0634 15.8944,24.2744 18.8294,23.2494 L18.8294,23.2494 L13.6724,15.9754 L14.7334,15.2234 L20.1864,22.9164 C20.3354,22.8934 20.4834,22.8714 20.6354,22.8584 L20.6354,22.8584 L20.6354,19.8284 L20.6594,19.8284 C18.9534,18.7424 17.9024,16.7624 17.9024,14.2944 C17.9024,12.2694 19.1004,8.1824 20.3204,6.0424 C20.4774,5.7684 20.8074,5.6474 21.1044,5.7524 C21.4014,5.8584 21.5794,6.1634 21.5264,6.4734 C21.2074667,8.33673333 21.1649422,9.74564444 21.1592723,10.9748397 L21.1584,11.5304 C21.1584,12.5874 21.7364,13.4804 22.4214,13.4804 C23.1054,13.4804 23.6834,12.5874 23.6834,11.5304 C23.6834,11.2524 23.5324,10.8314 23.3574,10.3434 C22.7904,8.7614 21.9344,6.3714 23.3014,2.2994 C23.3794,2.0664 23.5834,1.8974 23.8264,1.8634 Z M26.5374,24.1254 L21.2974,24.1254 C17.8694,24.1254 15.0804,26.9144 15.0804,30.3414 L15.0804,30.3414 L15.0804,41.3984 L32.7544,41.3984 L32.7544,30.3414 C32.7544,26.9144 29.9654,24.1254 26.5374,24.1254 L26.5374,24.1254 Z M29.033,30.298 L29.033,39.316 L18.801,39.316 L18.801,30.298 L29.033,30.298 Z M27.734,31.6 L20.102,31.6 L20.102,38.016 L27.734,38.016 L27.734,31.6 Z M25.8994,20.4324 C25.2884,20.6314 24.6254,20.7424 23.9174,20.7424 C23.2094,20.7424 22.5464,20.6314 21.9354,20.4324 L21.9354,20.4324 L21.9354,22.8244 L25.8994,22.8244 Z M24.1524,4.0474 C23.4964,6.8774 24.1144,8.6014 24.5814,9.9054 C24.7964,10.5064 24.9834,11.0264 24.9834,11.5304 C24.9834,13.3534 23.8574,14.7814 22.4214,14.7814 C20.9844,14.7814 19.8584,13.3534 19.8584,11.5304 C19.8584,11.2684 19.8584,10.9944 19.8614,10.7064 C19.4574,12.1224 19.2034,13.4764 19.2034,14.2944 C19.2034,17.3734 21.0974,19.4414 23.9174,19.4414 C26.7374,19.4414 28.6314,17.3734 28.6314,14.2944 C28.6314,11.4124 25.6114,6.3334 24.1524,4.0474 Z"
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

export default GasCan;
