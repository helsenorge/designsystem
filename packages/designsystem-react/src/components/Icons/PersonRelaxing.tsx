import React from 'react';
import {IconRawProps} from './Icon';

const PersonRelaxing = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, className, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <g fillRule="evenodd" transform="translate(7 5)">
      <path d="M5.2869 2.248C6.9699 2.248 8.3379 3.617 8.3379 5.3 8.3379 6.982 6.9699 8.351 5.2869 8.351 3.6039 8.351 2.2349 6.982 2.2349 5.3 2.2349 3.617 3.6039 2.248 5.2869 2.248M5.2869 9.651C7.6859 9.651 9.6389 7.699 9.6389 5.3 9.6389 2.9 7.6859.947 5.2869.947 2.8879.947.9339 2.9.9339 5.3.9339 7.699 2.8879 9.651 5.2869 9.651M30.7078 34.5908C30.5948 35.0198 30.2818 35.3688 29.7498 35.6578 29.2928 35.9058 27.8988 36.6618 26.5328 34.2868L22.0528 26.7688 14.0208 26.7688C12.1948 26.7688 10.5398 25.6208 9.8998 23.9118L6.7948 15.6178C6.4818 14.7868 6.4378 14.1138 6.6628 13.6188 6.8468 13.2158 7.2268 12.9038 7.7908 12.6948 8.1788 12.5498 8.5238 12.4748 8.8378 12.4748 9.7748 12.4748 10.4138 13.1468 10.9668 14.6198L14.0918 22.7528 23.0338 22.7528C23.8618 22.7528 24.7408 23.3308 25.2738 24.2258L30.0478 32.2348C30.6368 33.1798 30.8648 33.9938 30.7078 34.5908M31.1578 31.5578L26.3918 23.5598C25.6278 22.2788 24.3108 21.4518 23.0338 21.4518L14.9838 21.4518 12.1818 14.1578C11.2018 11.5438 9.5738 10.6418 7.3358 11.4758 6.4368 11.8118 5.8118 12.3518 5.4798 13.0798 5.1058 13.9018 5.1398 14.9088 5.5778 16.0738L8.6838 24.3668C9.5108 26.5808 11.6548 28.0698 14.0208 28.0698L21.3138 28.0698 25.4108 34.9448C26.2908 36.4738 27.4318 37.2678 28.6768 37.2678 29.2258 37.2678 29.7948 37.1128 30.3708 36.8008 31.2228 36.3368 31.7588 35.7048 31.9658 34.9218 32.2198 33.9568 31.9448 32.8208 31.1578 31.5578" />
      <path d="M6.6199,25.3682 L2.3589,12.6482 L1.1269,13.0602 L5.3879,25.7802 C6.5679,29.3082 9.8619,31.6802 13.5829,31.6802 L13.6549,31.6802 L13.6549,36.7522 L10.0719,36.7522 L10.0719,38.0532 L18.5389,38.0532 L18.5389,36.7522 L14.9559,36.7522 L14.9559,31.6802 L20.6349,31.6802 L20.6349,30.3792 L13.5829,30.3792 C10.4219,30.3792 7.6239,28.3652 6.6199,25.3682" />
    </g>
  );

  const normalHover = (
    <g fillRule="evenodd" transform="translate(8 5)">
      <path d="M7.5864 2.248C9.2694 2.248 10.6384 3.617 10.6384 5.3 10.6384 6.982 9.2694 8.351 7.5864 8.351 5.9034 8.351 4.5354 6.982 4.5354 5.3 4.5354 3.617 5.9034 2.248 7.5864 2.248M7.5864 9.651C9.9854 9.651 11.9394 7.699 11.9394 5.3 11.9394 2.9 9.9854.947 7.5864.947 5.1874.947 3.2344 2.9 3.2344 5.3 3.2344 7.699 5.1874 9.651 7.5864 9.651M29.7075 34.5908C29.5945 35.0198 29.2805 35.3688 28.7495 35.6578 28.2925 35.9058 26.8985 36.6618 25.5335 34.2868L21.0525 26.7688 13.0205 26.7688C11.2125 26.7688 9.5695 25.6428 8.9185 23.9598L7.1405 15.0018C6.9565 14.1338 7.0155 13.4628 7.3115 13.0078 7.5545 12.6368 7.9765 12.3868 8.5655 12.2638 10.1875 11.9308 10.9845 12.5928 11.4125 14.6338L13.0025 22.7528 22.0345 22.7528C22.8625 22.7528 23.7415 23.3308 24.2745 24.2258L29.0485 32.2348C29.6375 33.1798 29.8645 33.9938 29.7075 34.5908M30.1585 31.5578L25.3925 23.5598C24.6285 22.2788 23.3115 21.4518 22.0345 21.4518L14.0725 21.4518 12.6865 14.3748C12.1135 11.6448 10.6445 10.5068 8.3015 10.9898 7.3605 11.1868 6.6615 11.6258 6.2245 12.2968 5.7305 13.0518 5.6105 14.0528 5.8665 15.2638L7.6535 24.2668 7.6835 24.3668C8.5105 26.5808 10.6555 28.0698 13.0205 28.0698L20.3135 28.0698 24.4115 34.9448C25.2915 36.4748 26.4315 37.2688 27.6765 37.2688 28.2255 37.2688 28.7945 37.1138 29.3705 36.8008 30.2225 36.3368 30.7585 35.7048 30.9655 34.9218 31.2195 33.9568 30.9455 32.8208 30.1585 31.5578" />
      <path d="M5.6196,25.3682 L1.3586,12.6482 L0.1266,13.0602 L4.3876,25.7802 C5.5676,29.3082 8.8616,31.6802 12.5836,31.6802 L12.6556,31.6802 L12.6556,36.7522 L9.0726,36.7522 L9.0726,38.0532 L17.5386,38.0532 L17.5386,36.7522 L13.9566,36.7522 L13.9566,31.6802 L19.6346,31.6802 L19.6346,30.3792 L12.5836,30.3792 C9.4216,30.3792 6.6236,28.3652 5.6196,25.3682" />
    </g>
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

export default PersonRelaxing;
