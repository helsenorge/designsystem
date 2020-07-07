import React from 'react';
import {IconRawProps} from './Icon';

const Eraser = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, className, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <g fillRule="evenodd" transform="translate(7.119 9)">
      <polygon points="21.628 21.364 10.865 10.601 11.784 9.682 22.547 20.445" />
      <polygon points="8.624 29.846 26.332 29.846 26.332 28.546 8.624 28.546" />
      <polygon points="28.921 29.846 31.865 29.846 31.865 28.546 28.921 28.546" />
      <path d="M20.6641,1.7229 L2.5331,19.8529 C1.4731,20.9139 1.4731,22.6399 2.5331,23.6999 L7.2541,28.3829 C7.3291,28.4559 7.5481,28.5459 7.6521,28.5459 L13.2971,28.5459 C13.4001,28.5459 13.6181,28.4559 13.6911,28.3829 L30.5261,11.5469 L20.6641,1.7229 Z M13.2971,29.8459 L7.6521,29.8459 C7.2081,29.8459 6.6561,29.6189 6.3391,29.3059 L1.6161,24.6209 C0.0461,23.0519 0.0461,20.5019 1.6141,18.9339 L19.8501,0.6989 C20.2971,0.2499 21.0271,0.2489 21.4761,0.6959 L31.5511,10.7329 C31.7691,10.9489 31.8891,11.2379 31.8891,11.5459 C31.8891,11.8529 31.7701,12.1419 31.5531,12.3589 L14.6101,29.3019 C14.2951,29.6179 13.7431,29.8459 13.2971,29.8459 L13.2971,29.8459 Z" />
    </g>
  );

  const normalHover = (
    <g fillRule="evenodd" transform="translate(11 9)">
      <polygon points="22.147 21.364 11.384 10.601 12.303 9.682 23.066 20.445" />
      <polygon points="9.144 29.846 22.332 29.846 22.332 28.546 9.144 28.546" />
      <polygon points="24.921 29.846 27.865 29.846 27.865 28.546 24.921 28.546" />
      <path d="M21.1829,1.7224 L3.0519,19.8534 C1.9919,20.9134 1.9919,22.6394 3.0519,23.7004 L7.7739,28.3824 C7.8479,28.4554 8.0669,28.5464 8.1709,28.5464 L13.8159,28.5464 C13.9189,28.5464 14.1369,28.4564 14.2099,28.3834 L31.0459,11.5464 L21.1829,1.7224 Z M13.8159,29.8464 L8.1709,29.8464 C7.7269,29.8464 7.1749,29.6184 6.8589,29.3054 L2.1349,24.6204 C0.5659,23.0524 0.5659,20.5014 2.1329,18.9344 L20.3689,0.6984 C20.8169,0.2504 21.5469,0.2504 21.9949,0.6964 L32.0699,10.7324 C32.2869,10.9494 32.4079062,11.2374 32.4079062,11.5454 C32.4089,11.8524 32.2889,12.1414 32.0719,12.3584 L15.1289,29.3024 C14.8139,29.6174 14.2619,29.8464 13.8159,29.8464 L13.8159,29.8464 Z" />
    </g>
  );

  const simplified = (
    <path
      fillRule="evenodd"
      d="M35.7890526,38.9490947 L38.7334737,38.9490947 L38.7334737,37.1806737 L35.7890526,37.1806737 L35.7890526,38.9490947 Z M20.0336842,37.1794105 L14.6526316,37.1794105 C14.5376842,37.1794105 14.2762105,37.0733053 14.1941053,36.9912 L9.56715789,32.4021474 C9.09726316,31.9335158 8.83957895,31.3082526 8.83957895,30.6450947 C8.83957895,29.9819368 9.09726316,29.3579368 9.56715789,28.8880421 L18.1932632,20.2619368 L27.7061053,29.7735158 L20.4871579,36.9924632 C20.4075789,37.0707789 20.1448421,37.1794105 20.0336842,37.1794105 L20.0336842,37.1794105 Z M27.5330526,10.9208842 L37.0635789,20.4160421 L28.9566316,28.5229895 L19.4437895,19.0101474 L27.5330526,10.9208842 Z M38.4947368,21.4859368 C38.7802105,21.1992 38.9381053,20.8177263 38.9368496,20.4122526 C38.9355789,20.0067789 38.7776842,19.6265684 38.4922105,19.3423579 L28.6029474,9.49098947 C28.0105263,8.90362105 27.0492632,8.90488421 26.4593684,9.49351579 L8.31663158,27.6375158 C7.51326316,28.4396211 7.07115789,29.5082526 7.07115789,30.6450947 C7.07115789,31.7819368 7.51326316,32.8505684 8.31915789,33.6552 L12.9486316,38.2480421 C13.3578947,38.6535158 14.0753684,38.9490947 14.6526316,38.9490947 L33.1995789,38.9490947 L33.1995789,37.1794105 L22.8012632,37.1794105 L38.4947368,21.4859368 Z"
    />
  );

  const simplifiedHover = (
    <path
      fillRule="evenodd"
      d="M33.4752,28.5228632 L23.9623579,19.0100211 L32.0516211,10.9207579 L41.5821474,20.4159158 L33.4752,28.5228632 Z M25.0057263,36.9923368 C24.9261474,37.0719158 24.6634105,37.1805474 24.5535158,37.1805474 L19.1712,37.1805474 C19.0562526,37.1805474 18.7960421,37.0731789 18.7139368,36.9923368 L14.0857263,32.4020211 C13.6158316,31.9333895 13.3581474,31.3093895 13.3581474,30.6449684 C13.3581474,29.9818105 13.6158316,29.3578105 14.0857263,28.8879158 L22.7118316,20.2618105 L32.2246737,29.7733895 L25.0057263,36.9923368 Z M43.0107789,19.3422316 L33.1215158,9.49086316 C32.5290947,8.90349474 31.5678316,8.90475789 30.9779368,9.49338947 L12.8352,27.6373895 C12.0318316,28.4407579 11.5897263,29.5081263 11.5897263,30.6449684 C11.5897263,31.7818105 12.0318316,32.8504421 12.8377263,33.6550737 L17.4684632,38.2479158 C17.8777263,38.6533895 18.5939368,38.9489684 19.1712,38.9489684 L33.1998316,38.9489684 L33.1998316,37.1805474 L27.3198316,37.1805474 L43.0133053,21.4858105 C43.2987789,21.1990737 43.4566737,20.8176 43.455418,20.4121263 C43.4541474,20.0066526 43.2962526,19.6264421 43.0107789,19.3422316 L43.0107789,19.3422316 Z M35.7893053,38.9489684 L38.7324632,38.9489684 L38.7324632,37.1805474 L35.7893053,37.1805474 L35.7893053,38.9489684 Z"
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
      {isExtraSmall ? (isHovered ? simplifiedHover : simplified) : isHovered ? normalHover : normal}
    </svg>
  );
});

export default Eraser;
