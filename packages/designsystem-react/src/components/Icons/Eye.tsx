import React from 'react';
import {IconRawProps} from './Icon';

const Eye = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <g fillRule="evenodd" transform="translate(6 11)">
      <path d="M17.4781,20.7139 C7.3851,20.7139 3.0761,12.6719 2.3291,11.0959 C3.0761,9.5189 7.3851,1.4779 17.4781,1.4779 C27.5641,1.4779 31.8741,9.5079 32.6261,11.0919 C31.8791,12.6279 27.4641,20.7139 17.4781,20.7139 L17.4781,20.7139 Z M33.9401,10.8429 C33.8951,10.7369 29.3081,0.1779 17.4781,0.1779 C5.6481,0.1779 1.0611,10.7369 1.0161,10.8429 L0.9101,11.0959 L1.0161,11.3479 C1.0611,11.4549 5.6481,22.0139 17.4781,22.0139 C29.3081,22.0139 33.8951,11.4549 33.9401,11.3479 L34.0471,11.0959 L33.9401,10.8429 Z" />
      <path d="M17.4781,19.1074 C13.0611,19.1074 9.4671,15.5134 9.4671,11.0954 C9.4671,6.6784 13.0611,3.0844 17.4781,3.0844 C21.8951,3.0844 25.4901,6.6784 25.4901,11.0954 C25.4901,15.5134 21.8951,19.1074 17.4781,19.1074 M17.4781,1.7844 C12.3441,1.7844 8.1671,5.9614 8.1671,11.0954 C8.1671,16.2304 12.3441,20.4074 17.4781,20.4074 C22.6121,20.4074 26.7901,16.2304 26.7901,11.0954 C26.7901,5.9614 22.6121,1.7844 17.4781,1.7844" />
      <path d="M17.4781,8.1465 C15.8501,8.1465 14.5291,9.4665 14.5291,11.0955 C14.5291,12.7245 15.8501,14.0445 17.4781,14.0445 C19.1071,14.0445 20.4271,12.7245 20.4271,11.0955 C20.4271,9.4665 19.1071,8.1465 17.4781,8.1465" />
    </g>
  );

  const normalHover = (
    <g fillRule="evenodd" transform="translate(6 11)">
      <path d="M17.4783,20.7139 C7.3853,20.7139 3.0763,12.6719 2.3293,11.0959 C3.0763,9.5189 7.3853,1.4779 17.4783,1.4779 C27.5643,1.4779 31.8743,9.5079 32.6263,11.0919 C31.8793,12.6279 27.4643,20.7139 17.4783,20.7139 L17.4783,20.7139 Z M33.9403,10.8429 C33.8953,10.7369 29.3083,0.1779 17.4783,0.1779 C5.6483,0.1779 1.0613,10.7369 1.0163,10.8429 L0.9103,11.0959 L1.0163,11.3479 C1.0613,11.4549 5.6483,22.0139 17.4783,22.0139 C29.3083,22.0139 33.8953,11.4549 33.9403,11.3479 L34.0473,11.0959 L33.9403,10.8429 Z" />
      <path d="M17.4783,19.1074 C13.0613,19.1074 9.4673,15.5134 9.4673,11.0954 C9.4673,6.6784 13.0613,3.0844 17.4783,3.0844 C21.8953,3.0844 25.4903,6.6784 25.4903,11.0954 C25.4903,15.5134 21.8953,19.1074 17.4783,19.1074 M17.4783,1.7844 C12.3443,1.7844 8.1673,5.9614 8.1673,11.0954 C8.1673,16.2304 12.3443,20.4074 17.4783,20.4074 C22.6123,20.4074 26.7903,16.2304 26.7903,11.0954 C26.7903,5.9614 22.6123,1.7844 17.4783,1.7844" />
      <path d="M19.97,8.1465 C18.341,8.1465 17.021,9.4665 17.021,11.0955 C17.021,12.7245 18.341,14.0445 19.97,14.0445 C21.598,14.0445 22.919,12.7245 22.919,11.0955 C22.919,9.4665 21.598,8.1465 19.97,8.1465" />
    </g>
  );

  const simplified = (
    <path
      fillRule="evenodd"
      d="M23.8683789,20.8778526 C22.2161684,20.8778526 20.8772211,22.2168 20.8772211,23.8677474 C20.8772211,25.5199579 22.2161684,26.8589053 23.8683789,26.8589053 C25.5193263,26.8589053 26.8595368,25.5199579 26.8595368,23.8677474 C26.8595368,22.2168 25.5193263,20.8778526 23.8683789,20.8778526 M28.8780632,31.9734316 C31.5925895,30.2896421 33.4090105,27.2909053 33.4090105,23.8690105 C33.4090105,20.4256421 31.5698526,17.4117474 28.8288,15.7330105 C34.5382737,17.5608 37.4056421,22.1965895 38.2709053,23.8626947 C37.4069053,25.4997474 34.5205895,30.1203789 28.8780632,31.9734316 M15.8422737,23.8690105 C15.8422737,19.4429053 19.4422737,15.8429053 23.8683789,15.8429053 C28.2932211,15.8429053 31.8944842,19.4429053 31.8944842,23.8690105 C31.8944842,28.2938526 28.2932211,31.8938526 23.8683789,31.8938526 C19.4422737,31.8938526 15.8422737,28.2938526 15.8422737,23.8690105 M9.46206316,23.8690105 C10.3273263,22.2029053 13.1946947,17.5608 18.9092211,15.7330105 C16.1669053,17.4104842 14.3277474,20.4256421 14.3277474,23.8690105 C14.3277474,27.3123789 16.1669053,30.3262737 18.9104842,32.0037474 C13.1921684,30.1759579 10.3248,25.5313263 9.46206316,23.8690105 M23.8683789,13.4555368 C12.1702737,13.4555368 7.78206316,23.8690105 7.78206316,23.8690105 C7.78206316,23.8690105 12.1702737,34.2812211 23.8683789,34.2812211 C35.5664842,34.2812211 39.9546947,23.8690105 39.9546947,23.8690105 C39.9546947,23.8690105 35.5664842,13.4555368 23.8683789,13.4555368"
    />
  );

  const simplifiedHover = (
    <path
      fillRule="evenodd"
      d="M26.3949474,20.8778526 C24.7427368,20.8778526 23.4037895,22.2168 23.4037895,23.8677474 C23.4037895,25.5199579 24.7427368,26.8589053 26.3949474,26.8589053 C28.0471579,26.8589053 29.3861053,25.5199579 29.3861053,23.8677474 C29.3861053,22.2168 28.0471579,20.8778526 26.3949474,20.8778526 M28.8770526,31.9734316 C31.5915789,30.2896421 33.4092632,27.2921684 33.4092632,23.8690105 C33.4092632,20.4256421 31.5701053,17.4104842 28.8277895,15.7330105 C34.5385263,17.5595368 37.4058947,22.1965895 38.2711579,23.8626947 C37.4071579,25.4997474 34.5195789,30.1216421 28.8770526,31.9734316 M23.8686316,31.8938526 C19.4437895,31.8938526 15.8425263,28.2938526 15.8425263,23.8690105 C15.8425263,19.4429053 19.4437895,15.8429053 23.8686316,15.8429053 C28.2934737,15.8429053 31.8947368,19.4429053 31.8947368,23.8690105 C31.8947368,28.2938526 28.2934737,31.8938526 23.8686316,31.8938526 M9.46231579,23.8690105 C10.3275789,22.2029053 13.1949474,17.5620632 18.9082105,15.7330105 C16.1671579,17.4117474 14.328,20.4256421 14.328,23.8690105 C14.328,27.3123789 16.1671579,30.3262737 18.9082105,32.0037474 C13.1924211,30.1746947 10.3250526,25.5300632 9.46231579,23.8690105 M23.8686316,13.4555368 C12.1705263,13.4555368 7.78231579,23.8690105 7.78231579,23.8690105 C7.78231579,23.8690105 12.1705263,34.2812211 23.8686316,34.2812211 C35.5667368,34.2812211 39.9549474,23.8690105 39.9549474,23.8690105 C39.9549474,23.8690105 35.5667368,13.4555368 23.8686316,13.4555368"
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
      {isExtraSmall ? (isHovered ? simplifiedHover : simplified) : isHovered ? normalHover : normal}
    </svg>
  );
});

export default Eye;
