import React from 'react';
import {IconRawProps} from './Icon';

const Laboratory = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, className, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <path
      fillRule="evenodd"
      d="M17.2804,10.0192 C17.6564,10.0192 17.9624,9.7142 17.9624,9.3372 C17.9624,8.9602 17.6564,8.6552 17.2804,8.6552 C16.9044,8.6552 16.5984,8.9602 16.5984,9.3372 C16.5984,9.7142 16.9044,10.0192 17.2804,10.0192 L17.2804,10.0192 Z M19.4014,7.9282 C19.7784,7.9282 20.0834,7.6232 20.0834,7.2472 C20.0834,6.8702 19.7784,6.5642 19.4014,6.5642 C19.0254,6.5642 18.7194,6.8702 18.7194,7.2472 C18.7194,7.6232 19.0254,7.9282 19.4014,7.9282 L19.4014,7.9282 Z M25.6744,7.9282 C26.0504,7.9282 26.3554,7.6232 26.3554,7.2472 C26.3554,6.8702 26.0504,6.5642 25.6744,6.5642 C25.2974,6.5642 24.9914,6.8702 24.9914,7.2472 C24.9914,7.6232 25.2974,7.9282 25.6744,7.9282 L25.6744,7.9282 Z M29.1334,10.0192 C29.5094,10.0192 29.8154,9.7142 29.8154,9.3372 C29.8154,8.9602 29.5094,8.6552 29.1334,8.6552 C28.7574,8.6552 28.4514,8.9602 28.4514,9.3372 C28.4514,9.7142 28.7574,10.0192 29.1334,10.0192 L29.1334,10.0192 Z M23.5524,10.0192 C23.9294,10.0192 24.2354,9.7142 24.2354,9.3372 C24.2354,8.9602 23.9294,8.6552 23.5524,8.6552 C23.1764,8.6552 22.8714,8.9602 22.8714,9.3372 C22.8714,9.7142 23.1764,10.0192 23.5524,10.0192 L23.5524,10.0192 Z M37.7404,38.8412 L10.0094,38.8412 L10.0094,37.1792 C10.0094,36.3572 10.6784,35.6882 11.5004,35.6882 L36.2504,35.6882 C37.0724,35.6882 37.7404,36.3572 37.7404,37.1792 L37.7404,38.8412 Z M12.2804,34.3892 L35.4684,34.3892 L35.4684,32.8912 L12.2804,32.8912 L12.2804,34.3892 Z M12.2804,20.4062 L17.1654,20.4062 L17.1654,27.8182 C17.1654,29.2152 18.3014,30.3512 19.6974,30.3512 C21.0934,30.3512 22.2304,29.2152 22.2304,27.8182 L22.2304,20.4062 L25.5294,20.4062 L25.5294,27.8182 C25.5294,29.2152 26.6644,30.3512 28.0614,30.3512 C29.4574,30.3512 30.5934,29.2152 30.5934,27.8182 L30.5934,20.4062 L35.4684,20.4062 L35.4684,31.8912 L12.2804,31.8912 L12.2804,20.4062 Z M18.4654,20.4062 L20.9294,20.4062 L20.9294,27.8182 C20.9294,28.4982 20.3774,29.0512 19.6974,29.0512 C19.0184,29.0512 18.4654,28.4982 18.4654,27.8182 L18.4654,20.4062 Z M18.4654,19.1072 L20.9294,19.1072 L20.9294,15.4682 L18.4654,15.4682 L18.4654,19.1072 Z M18.4654,14.4182 L20.9294,14.4182 L20.9294,12.7972 L18.4654,12.7972 L18.4654,14.4182 Z M26.8284,20.4062 L29.2934,20.4062 L29.2934,27.8182 C29.2934,28.4982 28.7404,29.0512 28.0614,29.0512 C27.3814,29.0512 26.8284,28.4982 26.8284,27.8182 L26.8284,20.4062 Z M26.8284,19.1072 L29.2924,19.1072 L29.2924,15.4682 L26.8284,15.4682 L26.8284,19.1072 Z M26.8284,14.4182 L29.2924,14.4182 L29.2924,12.7972 L26.8284,12.7972 L26.8284,14.4182 Z M36.7694,34.4412 L36.7694,17.7402 L35.4684,17.7402 L35.4684,19.1062 L30.5934,19.1062 L30.5934,11.4972 L25.5294,11.4972 L25.5294,19.1062 L22.2304,19.1062 L22.2304,11.4972 L17.1654,11.4972 L17.1654,19.1062 L12.2804,19.1062 L12.2804,17.7402 L10.9814,17.7402 L10.9814,34.4412 C9.6904,34.6862 8.7094,35.8182 8.7094,37.1792 L8.7094,40.1412 L39.0404,40.1412 L39.0404,37.1792 C39.0404,35.8182 38.0594,34.6862 36.7694,34.4412 L36.7694,34.4412 Z"
    />
  );

  const normalHover = (
    <path
      fillRule="evenodd"
      d="M17.2807,9.2692 C17.6567,9.2692 17.9627,8.9642 17.9627,8.5872 C17.9627,8.2102 17.6567,7.9052 17.2807,7.9052 C16.9037,7.9052 16.5987,8.2102 16.5987,8.5872 C16.5987,8.9642 16.9037,9.2692 17.2807,9.2692 L17.2807,9.2692 Z M19.4017,5.6782 C19.7777,5.6782 20.0837,5.3732 20.0837,4.9962 C20.0837,4.6202 19.7777,4.3142 19.4017,4.3142 C19.0247,4.3142 18.7197,4.6202 18.7197,4.9962 C18.7197,5.3732 19.0247,5.6782 19.4017,5.6782 L19.4017,5.6782 Z M37.7397,38.8412 L10.0097,38.8412 L10.0097,37.1792 C10.0097,36.3572 10.6777,35.6882 11.4997,35.6882 L36.2497,35.6882 C37.0717,35.6882 37.7397,36.3572 37.7397,37.1792 L37.7397,38.8412 Z M12.2807,34.3892 L35.4687,34.3892 L35.4687,32.8912 L12.2807,32.8912 L12.2807,34.3892 Z M12.2807,20.4062 L17.1657,20.4062 L17.1657,27.8182 C17.1657,29.2152 18.3017,30.3512 19.6977,30.3512 C21.0937,30.3512 22.2297,29.2152 22.2297,27.8182 L22.2297,20.4062 L25.5287,20.4062 L25.5287,27.8182 C25.5287,29.2152 26.6647,30.3512 28.0607,30.3512 C29.4577,30.3512 30.5937,29.2152 30.5937,27.8182 L30.5937,20.4062 L35.4687,20.4062 L35.4687,31.8912 L12.2807,31.8912 L12.2807,20.4062 Z M18.4657,20.4062 L20.9297,20.4062 L20.9297,27.8182 C20.9297,28.4982 20.3777,29.0512 19.6977,29.0512 C19.0187,29.0512 18.4657,28.4982 18.4657,27.8182 L18.4657,20.4062 Z M18.4657,19.1072 L20.9297,19.1072 L20.9297,15.4682 L18.4657,15.4682 L18.4657,19.1072 Z M18.4657,14.4182 L20.9297,14.4182 L20.9297,12.7972 L18.4657,12.7972 L18.4657,14.4182 Z M26.8287,20.4062 L29.2927,20.4062 L29.2927,27.8182 C29.2927,28.4982 28.7397,29.0512 28.0607,29.0512 C27.3817,29.0512 26.8287,28.4982 26.8287,27.8182 L26.8287,20.4062 Z M26.8287,19.1072 L29.2927,19.1072 L29.2927,15.4682 L26.8287,15.4682 L26.8287,19.1072 Z M26.8287,14.4182 L29.2927,14.4182 L29.2927,12.7972 L26.8287,12.7972 L26.8287,14.4182 Z M36.7687,34.4412 L36.7687,17.7402 L35.4687,17.7402 L35.4687,19.1062 L30.5937,19.1062 L30.5937,11.4972 L25.5287,11.4972 L25.5287,19.1062 L22.2297,19.1062 L22.2297,11.4972 L17.1657,11.4972 L17.1657,19.1062 L12.2807,19.1062 L12.2807,17.7402 L10.9807,17.7402 L10.9807,34.4412 C9.6907,34.6862 8.7097,35.8182 8.7097,37.1792 L8.7097,40.1412 L39.0407,40.1412 L39.0407,37.1792 C39.0407,35.8182 38.0597,34.6862 36.7687,34.4412 L36.7687,34.4412 Z M23.5527,9.2692 C23.9297,9.2692 24.2347,8.9642 24.2347,8.5872 C24.2347,8.2102 23.9297,7.9052 23.5527,7.9052 C23.1767,7.9052 22.8707,8.2102 22.8707,8.5872 C22.8707,8.9642 23.1767,9.2692 23.5527,9.2692 L23.5527,9.2692 Z M25.6737,4.9282 C26.0507,4.9282 26.3557,4.6232 26.3557,4.2462 C26.3557,3.8702 26.0507,3.5642 25.6737,3.5642 C25.2977,3.5642 24.9917,3.8702 24.9917,4.2462 C24.9917,4.6232 25.2977,4.9282 25.6737,4.9282 L25.6737,4.9282 Z M29.1337,8.5192 C29.5097,8.5192 29.8157,8.2142 29.8157,7.8372 C29.8157,7.4602 29.5097,7.1552 29.1337,7.1552 C28.7567,7.1552 28.4517,7.4602 28.4517,7.8372 C28.4517,8.2142 28.7567,8.5192 29.1337,8.5192 L29.1337,8.5192 Z"
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

export default Laboratory;
