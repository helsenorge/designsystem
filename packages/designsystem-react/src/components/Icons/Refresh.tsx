import React from 'react';
import {IconRawProps} from './Icon';

const Refresh = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, className, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;

  const normal = (
    <path d="M24.1368,10.082 C28.6204902,10.082 32.7507684,12.1879701 35.3970736,15.6875337 L35.6141397,15.9823746 L34.5574603,16.7396254 C32.1648751,13.400975 28.3213888,11.382 24.1368,11.382 C17.0609907,11.382 11.3248,17.1187794 11.3248,24.195 C11.3248,31.2712206 17.0609907,37.008 24.1368,37.008 C30.1452351,37.008 35.2983917,32.8404899 36.6228316,27.0822512 L36.6889876,26.7777311 L37.9626124,27.0382689 C36.6293945,33.555633 30.8711897,38.308 24.1368,38.308 C16.3429907,38.308 10.0248,31.9891609 10.0248,24.195 C10.0248,16.4008391 16.3429907,10.082 24.1368,10.082 Z M35.0671238,10.3123342 L36.3656762,10.3736658 L36.0294246,17.493 L29.1944,17.493 L29.1944,16.193 L34.789,16.192 L35.0671238,10.3123342 Z" />
  );

  const normalHover = (
    <path d="M34.1159194,14.2155806 C37.0740256,17.1736868 38.5186542,21.2117161 38.2091621,25.2691023 L41.6820688,22.1073153 L42.5569312,23.0688847 L37.2853633,27.8651024 L32.4519329,23.0327717 L33.3710671,22.1134283 L36.8716215,25.6117065 C37.2965291,21.7799172 35.9899714,17.9281102 33.1967243,15.1348631 C28.1925551,10.1316456 20.0810449,10.1316456 15.0769194,15.1348194 C10.0727675,20.1389713 10.0727675,28.2513804 15.0769194,33.2545806 C19.3210417,37.4987029 25.9027668,38.198496 30.9096753,35.0742492 L31.1861918,34.896744 L31.9024082,35.981656 C26.3507246,39.6466595 18.9191589,38.9352977 14.1577243,34.1738631 C8.64583252,28.6630196 8.64583252,19.7274287 14.1577243,14.2155369 C19.6695551,8.70475437 28.6040449,8.70475437 34.1159194,14.2155806 Z" />
  );

  const simplified = (
    <path
      fillRule="evenodd"
      d="M36.7705263,26.8863158 C35.5692632,32.7625263 30.3334737,37.0294737 24.3233684,37.0294737 C17.3191579,37.0294737 11.6197895,31.3313684 11.6197895,24.3258947 C11.6197895,17.3204211 17.3191579,11.6197895 24.3233684,11.6197895 C28.1014737,11.6197895 31.6724211,13.3326316 34.0762105,16.2164211 L29.3823158,16.2164211 L29.3823158,17.7309474 L36.3208421,17.7309474 L36.6618947,10.5094737 L35.1473684,10.4387368 L34.9376842,14.8762105 C32.2547368,11.8698947 28.3932632,10.1052632 24.3233684,10.1052632 C16.4829474,10.1052632 10.1052632,16.4842105 10.1052632,24.3258947 C10.1052632,32.1663158 16.4829474,38.544 24.3233684,38.544 C31.0509474,38.544 36.9094737,33.7692632 38.256,27.1894737 L36.7705263,26.8863158 Z"
    />
  );

  const simplifiedHover = (
    <path
      fillRule="evenodd"
      d="M41.7909474,22.1523158 L38.5054737,25.1422105 C38.7328421,21.1190526 37.2498947,17.1413684 34.3736842,14.2651579 C28.8296842,8.71863158 19.8082105,8.71863158 14.2642105,14.2651579 C8.71894737,19.8091579 8.71894737,28.8306316 14.2642105,34.3758947 C17.004,37.1156842 20.6621053,38.5304211 24.3429474,38.5304211 C27.0498947,38.5304211 29.7682105,37.7649474 32.1429474,36.1973684 L31.3092632,34.9316842 C26.3021053,38.2361053 19.5846316,37.5502105 15.3353684,33.3034737 C10.3825263,28.3493684 10.3825263,20.2891579 15.3353684,15.3363158 C20.2894737,10.3847368 28.3484211,10.3847368 33.3025263,15.3363158 C35.9741053,18.0066316 37.2877895,21.7430526 36.9492632,25.482 L33.6309474,22.1624211 L32.5572632,23.2323158 L37.4633684,28.1396842 L42.8128421,23.2727368 L41.7909474,22.1523158 Z"
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
      {isExtraSmall ? (isHovered ? simplifiedHover : simplified) : isHovered ? normalHover : normal}
    </svg>
  );
});

export default Refresh;