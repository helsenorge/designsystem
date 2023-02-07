import React from 'react';
import { getIcon, SvgPathProps } from './Icon';

const Filter: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <path
      transform="translate(11.000400, 13.000300)"
      d="M1.5929,1.4962 L1.5929,4.0222 C1.5929,4.3592 1.7309,4.6872 1.9709,4.9242 L11.1879,13.9912 L11.1879,25.6172 L14.8109,22.2602 L14.8109,13.9912 L24.0289,4.9242 C24.2689,4.6872 24.4059,4.3592 24.4059,4.0222 L24.4059,1.4962 L1.5929,1.4962 Z M9.8879,28.5942 L9.8879,14.5362 L1.0589,5.8502 C0.5719,5.3712 0.2929,4.7042 0.2929,4.0222 L0.2929,0.1962 L25.7059,0.1962 L25.7059,4.0222 C25.7059,4.7042 25.4269,5.3712 24.9409,5.8502 L16.1109,14.5362 L16.1109,22.8272 L9.8879,28.5942 Z"
      fillRule={'evenodd'}
    />
  );

  const normalHover = (
    <path d="M10.5922,14.4962 L10.5922,17.0222 C10.5922,17.3592 10.7302,17.6872 10.9702,17.9242 L22.1872,26.9912 L22.1872,38.6172 L25.8112,35.2602 L25.8112,26.9912 L37.0282,17.9242 C37.2682,17.6872 37.4062,17.3592 37.4062,17.0222 C37.4062,16.7901111 37.4062,16.6160444 37.4062,16.5 C37.4062,16.0547111 37.4062,15.3867778 37.4062,14.4962 L10.5922,14.4962 Z M20.8872,41.5942 L20.8872,27.5362 L10.0582,18.8502 C9.5712,18.3712 9.2922,17.7042 9.2922,17.0222 L9.2922,13.1962 L38.7062,13.1962 L38.7062,17.0222 C38.7062,17.7042 38.4262,18.3712 37.9402,18.8502 L27.1112,27.5362 L27.1112,35.8272 L20.8872,41.5942 Z" />
  );

  const xSmall = (
    <path
      fillRule={'evenodd'}
      d="M35.0411368,16.8906947 C35.0411368,17.1648 34.9287158,17.4325895 34.7329263,17.6258526 L25.4449263,26.7610105 L25.4449263,35.0258526 L22.2908211,37.9488 L22.2908211,26.7610105 C16.4247602,20.9928059 13.3796488,17.9975179 13.1554871,17.7751465 C12.8192444,17.4415894 12.7,17.238678 12.7,16.8906947 C12.7,16.6587059 12.7,15.895141 12.7,14.6 L30.8209263,14.5993263 L35.0411368,14.5993263 L35.0411368,16.8906947 Z M32.5590316,12.8309053 L30.8032421,12.8309053 L10.9274526,12.8309053 L10.9274526,16.8906947 C10.9274526,17.6359579 11.2318737,18.3635368 11.7624,18.8864842 L18.4192421,25.4334316 L19.3122947,26.3125895 L20.5224,27.5024842 L20.5224,41.9984842 L27.2146105,35.7989053 L27.2146105,27.5024842 L35.9720842,18.8864842 C36.5038737,18.3648 36.8095579,17.6372211 36.8095579,16.8906947 L36.8095579,12.8309053 L32.5590316,12.8309053 Z"
    />
  );

  const xSmallHover = (
    <path
      fillRule={'evenodd'}
      d="M37.1726316,16.8906947 C37.1726316,17.1648 37.0602105,17.4325895 36.8644211,17.6258526 L25.5764211,26.7610105 L25.5764211,35.0258526 L22.4223158,37.9488 L22.4223158,26.7610105 C15.2229216,20.9928059 11.5111436,17.9975179 11.2869818,17.7751465 C10.9507391,17.4415894 10.8314947,17.238678 10.8314947,16.8906947 C10.8314947,16.6587059 10.8314947,15.895141 10.8314947,14.6 L37.1726316,14.5993263 L37.1726316,16.8906947 Z M9.05894737,12.8309053 L9.05894737,16.8906947 C9.05894737,17.6359579 9.36336842,18.3635368 9.89389474,18.8864842 L20.6538947,27.5024842 L20.6538947,41.9984842 L27.3461053,35.7989053 L27.3461053,27.5024842 L38.1035789,18.8864842 C38.6353684,18.3648 38.9410526,17.6372211 38.9410526,16.8906947 L38.9410526,12.8309053 L9.05894737,12.8309053 Z"
    />
  );

  return getIcon({ size, isHovered, normal, normalHover, xSmall, xSmallHover });
};

export default Filter;
