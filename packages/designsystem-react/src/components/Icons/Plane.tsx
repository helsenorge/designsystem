import React from 'react';
import {IconRawProps} from './Icon';

const Plane = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, className, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <path
      fillRule="evenodd"
      d="M36.3324,29.4738 L18.3874,29.4738 L3.9454,23.1608 L3.9454,12.6448 L4.2994,12.6448 C5.2534,12.6448 6.0844,13.2568 6.3674,14.1678 L8.0354,19.5478 L36.3324,19.5478 C39.0694,19.5478 41.2954,21.7748 41.2954,24.5108 C41.2954,27.2468 39.0694,29.4738 36.3324,29.4738 M35.9594,34.0228 C35.9594,34.7578 35.3624,35.3558 34.6274,35.3558 C33.8924,35.3558 33.2944,34.7578 33.2944,34.0228 C33.2944,33.2878 33.8924,32.6908 34.6274,32.6908 C35.3624,32.6908 35.9594,33.2878 35.9594,34.0228 M28.0144,14.6178 C30.2634,14.6178 32.1424,16.1648 32.6844,18.2468 L23.3454,18.2468 C23.8874,16.1648 25.7654,14.6178 28.0144,14.6178 M10.5134,35.3558 C9.7784,35.3558 9.1804,34.7578 9.1804,34.0228 C9.1804,33.2878 9.7784,32.6908 10.5134,32.6908 C11.2484,32.6908 11.8464,33.2878 11.8464,34.0228 C11.8464,34.7578 11.2484,35.3558 10.5134,35.3558 M44.7044,24.5108 C44.7044,23.7828 44.1134,23.1908 43.3854,23.1908 L43.1044,23.1908 L43.4594,15.4948 C43.4794,15.0638 43.1354,14.7028 42.7034,14.7028 C42.2704,14.7028 41.9264,15.0638 41.9464,15.4948 L42.2714,22.5368 C41.4414,20.0478 39.0954,18.2468 36.3324,18.2468 L34.0354,18.2468 C33.4704,15.4388 30.9864,13.3168 28.0144,13.3168 C25.0424,13.3168 22.5584,15.4388 21.9944,18.2468 L8.9934,18.2468 L7.6094,13.7838 C7.1574,12.3248 5.8274,11.3438 4.2994,11.3438 L2.6454,11.3438 L2.6454,24.0098 L12.8214,28.4598 L11.2114,31.4948 C10.9874,31.4338 10.7564,31.3898 10.5134,31.3898 C9.0614,31.3898 7.8804,32.5718 7.8804,34.0228 C7.8804,35.4748 9.0614,36.6568 10.5134,36.6568 C11.9644,36.6568 13.1454,35.4748 13.1454,34.0228 C13.1454,33.2828 12.8364,32.6158 12.3434,32.1358 L14.0164,28.9818 L18.1154,30.7748 L33.7974,30.7748 L33.7974,31.5368 C32.7534,31.8868 31.9944,32.8628 31.9944,34.0228 C31.9944,35.4748 33.1754,36.6568 34.6274,36.6568 C36.0794,36.6568 37.2604,35.4748 37.2604,34.0228 C37.2604,32.7328 36.3244,31.6608 35.0974,31.4378 L35.0974,30.7748 L36.3324,30.7748 C39.0954,30.7748 41.4414,28.9738 42.2714,26.4858 L41.9464,33.5268 C41.9264,33.9578 42.2704,34.3198 42.7034,34.3198 C43.1354,34.3198 43.4794,33.9578 43.4594,33.5268 L43.1044,25.8298 L43.3854,25.8298 C44.1134,25.8298 44.7044,25.2398 44.7044,24.5108"
    />
  );

  const normalHover = (
    <path
      fillRule="evenodd"
      d="M38.1326,29.4738 L20.1876,29.4738 L5.7456,23.1608 L5.7456,12.6448 L6.0996,12.6448 C7.0536,12.6448 7.8846,13.2568 8.1676,14.1678 L9.8356,19.5478 L38.1326,19.5478 C40.8696,19.5478 43.0956,21.7748 43.0956,24.5108 C43.0956,27.2468 40.8696,29.4738 38.1326,29.4738 M37.7596,34.0228 C37.7596,34.7578 37.1626,35.3558 36.4276,35.3558 C35.6926,35.3558 35.0946,34.7578 35.0946,34.0228 C35.0946,33.2878 35.6926,32.6908 36.4276,32.6908 C37.1626,32.6908 37.7596,33.2878 37.7596,34.0228 M29.8146,14.6178 C32.0636,14.6178 33.9426,16.1648 34.4846,18.2468 L25.1456,18.2468 C25.6876,16.1648 27.5656,14.6178 29.8146,14.6178 M12.3136,35.3558 C11.5786,35.3558 10.9806,34.7578 10.9806,34.0228 C10.9806,33.2878 11.5786,32.6908 12.3136,32.6908 C13.0486,32.6908 13.6466,33.2878 13.6466,34.0228 C13.6466,34.7578 13.0486,35.3558 12.3136,35.3558 M46.5046,24.5108 C46.5046,23.7828 45.9136,23.1908 45.1856,23.1908 L44.9046,23.1908 L45.2596,15.4948 C45.2796,15.0638 44.9356,14.7028 44.5036,14.7028 C44.0706,14.7028 43.7266,15.0638 43.7466,15.4948 L44.0716,22.5368 C43.2416,20.0478 40.8956,18.2468 38.1326,18.2468 L35.8356,18.2468 C35.2706,15.4388 32.7866,13.3168 29.8146,13.3168 C26.8426,13.3168 24.3586,15.4388 23.7946,18.2468 L10.7936,18.2468 L9.4096,13.7838 C8.9576,12.3248 7.6276,11.3438 6.0996,11.3438 L4.4456,11.3438 L4.4456,24.0098 L14.6216,28.4598 L13.0116,31.4948 C12.7876,31.4338 12.5566,31.3898 12.3136,31.3898 C10.8616,31.3898 9.6806,32.5718 9.6806,34.0228 C9.6806,35.4748 10.8616,36.6568 12.3136,36.6568 C13.7646,36.6568 14.9456,35.4748 14.9456,34.0228 C14.9456,33.2828 14.6366,32.6158 14.1436,32.1358 L15.8166,28.9818 L19.9156,30.7748 L35.5976,30.7748 L35.5976,31.5368 C34.5536,31.8868 33.7946,32.8628 33.7946,34.0228 C33.7946,35.4748 34.9756,36.6568 36.4276,36.6568 C37.8796,36.6568 39.0606,35.4748 39.0606,34.0228 C39.0606,32.7328 38.1246,31.6608 36.8976,31.4378 L36.8976,30.7748 L38.1326,30.7748 C40.8956,30.7748 43.2416,28.9738 44.0716,26.4858 L43.7466,33.5268 C43.7266,33.9578 44.0706,34.3198 44.5036,34.3198 C44.9356,34.3198 45.2796,33.9578 45.2596,33.5268 L44.9046,25.8298 L45.1856,25.8298 C45.9136,25.8298 46.5046,25.2398 46.5046,24.5108"
    />
  );

  return (
    <svg
      width={size}
      height={size}
      fill={isHovered ? hoverColor : color}
      viewBox="0 0 48 48"
      ref={ref}
      className={`hnds-style-icon ${className}`}
      {...props}>
      {isHovered ? normalHover : normal}
    </svg>
  );
});

export default Plane;
