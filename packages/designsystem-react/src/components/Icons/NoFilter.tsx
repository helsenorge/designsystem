import React from 'react';
import {SvgPathProps} from './Icon';

const NoFilter: React.FC<SvgPathProps> = ({isExtraSmall, isHovered}: SvgPathProps): JSX.Element => {
  const normal = (
    <g fillRule="evenodd" transform="translate(11 8)">
      <path d="M1.5929,6.4962 L1.5929,9.0222 C1.5929,9.3592 1.7309,9.6872 1.9709,9.9242 L11.1879,18.9912 L11.1879,30.6172 L14.8109,27.2602 L14.8109,18.9912 L24.0289,9.9242 C24.2689,9.6872 24.4059,9.3592 24.4059,9.0222 L24.4059,6.4962 L1.5929,6.4962 Z M9.8879,33.5942 L9.8879,19.5362 L1.0589,10.8502 C0.5719,10.3712 0.2929,9.7042 0.2929,9.0222 L0.2929,5.1962 L25.7059,5.1962 L25.7059,9.0222 C25.7059,9.7042 25.4269,10.3712 24.9409,10.8502 L16.1109,19.5362 L16.1109,27.8272 L9.8879,33.5942 Z" />
      <polygon points="3.296 23.497 2.588 22.802 24.539 .461 25.247 1.156" />
    </g>
  );

  const normalHover = (
    <g fillRule="evenodd" transform="translate(11 10)">
      <path d="M1.5922,4.4962 L1.5922,7.0222 C1.5922,7.3592 1.7302,7.6872 1.9702,7.9242 L11.1872,16.9912 L11.1872,28.6172 L14.8112,25.2602 L14.8112,16.9912 L24.0282,7.9242 C24.2682,7.6872 24.4062,7.3592 24.4062,7.0222 L24.4062,4.4962 L1.5922,4.4962 Z M9.8872,31.5942 L9.8872,17.5362 L1.0582,8.8502 C0.5712,8.3712 0.2922,7.7042 0.2922,7.0222 L0.2922,3.1962 L25.7062,3.1962 L25.7062,7.0222 C25.7062,7.7042 25.4262,8.3712 24.9402,8.8502 L16.1112,17.5362 L16.1112,25.8272 L9.8872,31.5942 Z" />
      <polygon points="1.542 23.297 .834 22.602 22.785 .261 23.493 .957" />
    </g>
  );

  const simplified = (
    <path
      fillRule="evenodd"
      d="M35.0411368,16.8906947 C35.0411368,17.1648 34.9287158,17.4325895 34.7329263,17.6258526 L25.4449263,26.7610105 L25.4449263,35.0258526 L22.2908211,37.9488 L22.2908211,26.7610105 L20.5514526,25.0506947 L30.8209263,14.5993263 L35.0411368,14.5993263 L35.0411368,16.8906947 Z M19.6584,24.1728 L13.0040842,17.6258526 C12.8082947,17.4338526 12.6971368,17.1648 12.6971368,16.8906947 L12.6971368,14.5993263 L29.0651368,14.5993263 L19.6584,24.1728 Z M32.5590316,12.8309053 L36.2082947,9.11595789 L35.3152421,8.23806316 L30.8032421,12.8309053 L10.9274526,12.8309053 L10.9274526,16.8906947 C10.9274526,17.6359579 11.2318737,18.3635368 11.7624,18.8864842 L18.4192421,25.4334316 L13.3640842,30.5782737 L14.2571368,31.4574316 L19.3122947,26.3125895 L20.5224,27.5024842 L20.5224,41.9984842 L27.2146105,35.7989053 L27.2146105,27.5024842 L35.9720842,18.8864842 C36.5038737,18.3648 36.8095579,17.6372211 36.8095579,16.8906947 L36.8095579,12.8309053 L32.5590316,12.8309053 Z"
    />
  );

  const simplifiedHover = (
    <path
      fillRule="evenodd"
      d="M35.0402526,16.8906947 C35.0402526,17.1648 34.9278316,17.4338526 34.7333053,17.6258526 L25.4453053,26.7610105 L25.4453053,35.0258526 L22.2912,37.9488 L22.2912,26.7610105 L20.5594105,25.0582737 L30.8352,14.5993263 L35.0402526,14.5993263 L35.0402526,16.8906947 Z M19.6663579,24.1791158 L13.0032,17.6245895 C12.8074105,17.4325895 12.6962526,17.1648 12.6962526,16.8906947 L12.6962526,14.5993263 L29.0794105,14.5993263 L19.6663579,24.1791158 Z M32.5733053,12.8309053 L34.4541474,10.9159579 L33.5610947,10.0380632 L30.8175158,12.8309053 L10.9265684,12.8309053 L10.9265684,16.8906947 C10.9265684,17.6372211 11.2322526,18.3648 11.7627789,18.8864842 L18.4272,25.4410105 L11.6112,32.3782737 L12.5042526,33.2574316 L19.3202526,26.3201684 L20.5227789,27.5024842 L20.5227789,41.9984842 L27.2149895,35.7989053 L27.2149895,27.5024842 L35.9737263,18.8852211 C36.5042526,18.3635368 36.8086737,17.6359579 36.8086737,16.8906947 L36.8086737,12.8309053 L32.5733053,12.8309053 Z"
    />
  );

  return isExtraSmall ? (isHovered ? simplifiedHover : simplified) : isHovered ? normalHover : normal;
};

export default NoFilter;
