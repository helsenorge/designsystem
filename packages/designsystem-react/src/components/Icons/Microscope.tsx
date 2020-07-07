import React from 'react';
import {IconRawProps} from './Icon';

const Microscope = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, className, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <path
      fillRule="evenodd"
      d="M22.204,39.348 L26.566,39.348 L26.566,31.464 L22.204,31.464 L22.204,39.348 Z M20.903,34.491 C15.288,33.885 10.98,29.161 10.98,23.434 C10.98,17.296 15.974,12.301 22.114,12.301 C22.96,12.301 23.795,12.418 24.611,12.606 L24.585,15.799 C23.79,15.541 22.963,15.406 22.114,15.406 C17.687,15.406 14.085,19.008 14.085,23.434 C14.085,27.45 17.05,30.776 20.903,31.363 L20.903,34.491 Z M25.928,10.687 C25.941,9.132 27.233,7.906 28.774,7.889 L29.288,7.893 C30.844,7.907 32.099,9.183 32.087,10.74 L31.997,21.327 L25.838,21.275 L25.928,10.687 Z M30.36,23.044 C30.358,23.418 30.21,23.768 29.943,24.03 C29.677,24.292 29.32,24.433 28.951,24.4320053 C28.182,24.425 27.56,23.794 27.566,23.024 L27.569,22.591 L30.363,22.614 L30.36,23.044 Z M37.07,31.464 L37.07,30.164 L22.114,30.164 C18.403,30.164 15.384,27.145 15.384,23.434 C15.384,19.724 18.403,16.705 22.114,16.705 C22.967,16.705 23.79,16.871 24.573,17.181 L24.527,22.564 L26.269,22.578 L26.266,23.015 C26.255,24.5 27.455,25.719 28.94,25.731 C28.948,25.732 28.956,25.732 28.963,25.732 C29.676,25.732 30.347,25.457 30.855,24.956 C31.369,24.45 31.655,23.774 31.66,23.054 L31.663,22.624 L33.285,22.638 L33.386,10.751 C33.405,8.478 31.572,6.613 29.299,6.594 L28.785,6.589 C26.503,6.558 24.647,8.404 24.628,10.677 L24.623,11.256 C23.8,11.087 22.96,11.001 22.114,11.001 C15.257,11.001 9.68,16.579 9.68,23.434 C9.68,29.877 14.564,35.182 20.903,35.795 L20.903,39.348 L15.494,39.348 L15.494,40.648 L33.275,40.648 L33.275,39.348 L27.866,39.348 L27.866,31.464 L37.07,31.464 Z M24.384,34.474 C24.759,34.474 25.062,34.171 25.062,33.796 C25.062,33.422 24.759,33.119 24.384,33.119 C24.01,33.119 23.707,33.422 23.707,33.796 C23.707,34.171 24.01,34.474 24.384,34.474 L24.384,34.474 Z"
    />
  );

  const normalHover = (
    <path
      fillRule="evenodd"
      d="M31.2074,25.8285 L32.5924,27.8475 L33.4164,27.2825 L32.0324,25.2635 L31.2074,25.8285 Z M28.4664,28.9325 L29.4664,28.9325 L29.4664,26.6555 L28.4664,26.6555 L28.4664,28.9325 Z M24.5164,27.2825 L25.3414,27.8475 L26.7254,25.8285 L25.9004,25.2635 L24.5164,27.2825 Z M22.2034,39.3485 L26.5654,39.3485 L26.5654,31.4645 L22.2034,31.4645 L22.2034,39.3485 Z M20.9034,34.4915 C15.2884,33.8845 10.9794,29.1615 10.9794,23.4345 C10.9794,17.2955 15.9744,12.3015 22.1134,12.3015 C22.9594,12.3015 23.7944,12.4185 24.6114,12.6065 L24.5844,15.7995 C23.7904,15.5415 22.9634,15.4055 22.1134,15.4055 C17.6864,15.4055 14.0844,19.0075 14.0844,23.4345 C14.0844,27.4495 17.0504,30.7765 20.9034,31.3635 L20.9034,34.4915 Z M25.9284,10.6875 C25.9404,9.1315 27.2134,7.8825 28.7734,7.88947072 L29.2884,7.8935 C30.8444,7.9075 32.0994,9.1835 32.0864,10.7395 L31.9964,21.3275 L25.8384,21.2745 L25.9284,10.6875 Z M30.3594,23.0445 C30.3574,23.4175 30.2094,23.7675 29.9434,24.0305 C29.6774,24.2925 29.3334,24.4495 28.9514,24.4315 C28.1824,24.4245 27.5604,23.7935 27.5654,23.0245 L27.5684,22.5905 L30.3634,22.6145 L30.3594,23.0445 Z M37.0704,31.4645 L37.0704,30.1645 L22.1134,30.1645 C18.4034,30.1645 15.3844,27.1455 15.3844,23.4345 C15.3844,19.7245 18.4034,16.7055 22.1134,16.7055 C22.9664,16.7055 23.7904,16.8715 24.5724,17.1815 L24.5264,22.5635 L26.2694,22.5785 L26.2654,23.0155 C26.2554,24.5005 27.4554,25.7185 28.9394,25.7315 C28.9474,25.7315 28.9554,25.7315 28.9634,25.7315 C29.6764,25.7315 30.3474,25.4565 30.8554,24.9565 C31.3694,24.4505 31.6544,23.7745 31.6604,23.0535 L31.6634,22.6245 L33.2854,22.6385 L33.3864,10.7505 C33.4054,8.4775 31.5724,6.6135 29.2994,6.5935 L28.7854,6.5895 C26.4814,6.5445 24.6464,8.4035 24.6274,10.6765 L24.6234,11.2555 C23.8004,11.0865 22.9594,11.0015 22.1134,11.0015 C15.2574,11.0015 9.6794,16.5785 9.6794,23.4345 C9.6794,29.8775 14.5634,35.1825 20.9034,35.7955 L20.9034,39.3485 L15.4944,39.3485 L15.4944,40.6485 L33.2754,40.6485 L33.2754,39.3485 L27.8654,39.3485 L27.8654,31.4645 L37.0704,31.4645 Z M24.3844,34.4745 C24.7594,34.4745 25.0624,34.1705 25.0624,33.7965 C25.0624,33.4225 24.7594,33.1185 24.3844,33.1185 C24.0104,33.1185 23.7074,33.4225 23.7074,33.7965 C23.7074,34.1705 24.0104,34.4745 24.3844,34.4745 L24.3844,34.4745 Z"
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

export default Microscope;
