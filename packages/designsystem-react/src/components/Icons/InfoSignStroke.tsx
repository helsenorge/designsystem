import React from 'react';
import {SvgPathProps} from './Icon';

const InfoSignStroke: React.FC<SvgPathProps> = ({isExtraSmall, isHovered}: SvgPathProps): JSX.Element => {
  const normal = (
    <path
      fillRule="evenodd"
      d="M25.6715,30.501 C25.5325,30.441 25.4255,30.351 25.3505,30.229 C25.2765,30.108 25.2395,29.96 25.2395,29.786 L25.2395,21.869 L25.1275,21.757 L21.4765,21.951 L21.4765,22.495 C21.6255,22.51 21.7905,22.545 21.9725,22.599 C22.1525,22.654 22.2885,22.711 22.3785,22.771 C22.4975,22.85 22.5965,22.956 22.6765,23.087 C22.7555,23.22 22.7955,23.372 22.7955,23.546 L22.7955,29.883 C22.7955,30.066 22.7635,30.214 22.6985,30.326 C22.6335,30.437 22.5225,30.523 22.3635,30.583 C22.2735,30.618 22.1665,30.643 22.0425,30.657 C21.9185,30.672 21.7915,30.685 21.6625,30.695 L21.6625,31.239 L26.3715,31.239 L26.3715,30.695 C26.2425,30.68 26.1185,30.655 25.9995,30.62 C25.8795,30.585 25.7705,30.546 25.6715,30.501 M24.0005,37.604 C16.4995,37.604 10.3965,31.501 10.3965,24 C10.3965,16.499 16.4995,10.397 24.0005,10.397 C31.5015,10.397 37.6025,16.499 37.6025,24 C37.6025,31.501 31.5015,37.604 24.0005,37.604 M24.0005,8.695 C15.5615,8.695 8.6955,15.562 8.6955,24 C8.6955,32.438 15.5615,39.305 24.0005,39.305 C32.4385,39.305 39.3045,32.438 39.3045,24 C39.3045,15.562 32.4385,8.695 24.0005,8.695 M23.7255,19.327 C24.5865,19.327 25.2845,18.629 25.2845,17.768 C25.2845,16.908 24.5865,16.21 23.7255,16.21 C22.8645,16.21 22.1665,16.908 22.1665,17.768 C22.1665,18.629 22.8645,19.327 23.7255,19.327"
    />
  );

  const normalHover = (
    <path
      fillRule="evenodd"
      d="M25.6715,30.501 C25.5325,30.441 25.4255,30.351 25.3505,30.229 C25.2765,30.108 25.2395,29.96 25.2395,29.786 L25.2395,21.869 L25.1275,21.757 L21.4765,21.951 L21.4765,22.495 C21.6255,22.51 21.7905,22.545 21.9725,22.599 C22.1525,22.654 22.2885,22.711 22.3785,22.771 C22.4975,22.85 22.5965,22.956 22.6765,23.087 C22.7555,23.22 22.7955,23.372 22.7955,23.546 L22.7955,29.883 C22.7955,30.066 22.7635,30.214 22.6985,30.326 C22.6335,30.437 22.5225,30.523 22.3635,30.583 C22.2735,30.618 22.1665,30.643 22.0425,30.657 C21.9185,30.672 21.7915,30.685 21.6625,30.695 L21.6625,31.239 L26.3715,31.239 L26.3715,30.695 C26.2425,30.68 26.1185,30.655 25.9995,30.62 C25.8795,30.585 25.7705,30.546 25.6715,30.501 M24.0005,37.604 C16.4995,37.604 10.3965,31.501 10.3965,24 C10.3965,16.499 16.4995,10.397 24.0005,10.397 C31.5015,10.397 37.6025,16.499 37.6025,24 C37.6025,31.501 31.5015,37.604 24.0005,37.604 M24.0005,8.695 C15.5615,8.695 8.6955,15.562 8.6955,24 C8.6955,32.438 15.5615,39.305 24.0005,39.305 C32.4385,39.305 39.3045,32.438 39.3045,24 C39.3045,15.562 32.4385,8.695 24.0005,8.695 M23.7255,17.327 C24.5865,17.327 25.2845,16.629 25.2845,15.768 C25.2845,14.908 24.5865,14.21 23.7255,14.21 C22.8645,14.21 22.1665,14.908 22.1665,15.768 C22.1665,16.629 22.8645,17.327 23.7255,17.327"
    />
  );

  const simplified = (
    <path
      fillRule="evenodd"
      d="M25.6679811,30.4873137 C25.5292737,30.42744 25.4224989,30.3376295 25.3476568,30.2158863 C25.2738126,30.0951411 25.2368905,29.9474526 25.2368905,29.7738189 L25.2368905,21.8734863 L25.1251263,21.7617221 L21.4818126,21.9553137 L21.4818126,22.4981684 C21.6304989,22.5131368 21.7951516,22.5480632 21.9767684,22.6019495 C22.1563895,22.6568337 22.2921032,22.7137137 22.3819137,22.7735874 C22.5006632,22.8524211 22.5994547,22.9581979 22.6792863,23.0889221 C22.75812,23.2216421 22.7980358,23.3733221 22.7980358,23.5469558 L22.7980358,29.8706147 C22.7980358,30.0532295 22.7661032,30.2009179 22.70124,30.3126821 C22.6363768,30.4234484 22.5256105,30.5092674 22.3669453,30.5691411 C22.2771347,30.6040674 22.17036,30.6290147 22.0466211,30.6429853 C21.9228821,30.6579537 21.7961495,30.6709263 21.6674211,30.6809053 L21.6674211,31.22376 L26.3665074,31.22376 L26.3665074,30.6809053 C26.2377789,30.6659368 26.11404,30.6409895 25.9952905,30.6060632 C25.8755432,30.5711368 25.7667726,30.5322189 25.6679811,30.4873137 M24.0004989,37.57536 C16.5152905,37.57536 10.4251389,31.4852084 10.4251389,24 C10.4251389,16.5147916 16.5152905,10.4256379 24.0004989,10.4256379 C31.4857074,10.4256379 37.5738632,16.5147916 37.5738632,24 C37.5738632,31.4852084 31.4857074,37.57536 24.0004989,37.57536 M24.0004989,8.72722105 C15.5792653,8.72722105 8.72772,15.5797642 8.72772,24 C8.72772,32.4202358 15.5792653,39.2727789 24.0004989,39.2727789 C32.4207347,39.2727789 39.27228,32.4202358 39.27228,24 C39.27228,15.5797642 32.4207347,8.72722105 24.0004989,8.72722105 M23.7260779,19.3368379 C24.5852653,19.3368379 25.2817958,18.6403074 25.2817958,17.78112 C25.2817958,16.9229305 24.5852653,16.2264 23.7260779,16.2264 C22.8668905,16.2264 22.17036,16.9229305 22.17036,17.78112 C22.17036,18.6403074 22.8668905,19.3368379 23.7260779,19.3368379"
    />
  );

  const simplifiedHover = (
    <path
      fillRule="evenodd"
      d="M25.6679811,30.4873137 C25.5292737,30.42744 25.4224989,30.3376295 25.3476568,30.2158863 C25.2738126,30.0951411 25.2368905,29.9474526 25.2368905,29.7738189 L25.2368905,21.8734863 L25.1251263,21.7617221 L21.4818126,21.9553137 L21.4818126,22.4981684 C21.6304989,22.5131368 21.7951516,22.5480632 21.9767684,22.6019495 C22.1563895,22.6568337 22.2921032,22.7137137 22.3819137,22.7735874 C22.5006632,22.8524211 22.5994547,22.9581979 22.6792863,23.0889221 C22.75812,23.2216421 22.7980358,23.3733221 22.7980358,23.5469558 L22.7980358,29.8706147 C22.7980358,30.0532295 22.7661032,30.2009179 22.70124,30.3126821 C22.6363768,30.4234484 22.5256105,30.5092674 22.3669453,30.5691411 C22.2771347,30.6040674 22.17036,30.6290147 22.0466211,30.6429853 C21.9228821,30.6579537 21.7961495,30.6709263 21.6674211,30.6809053 L21.6674211,31.22376 L26.3665074,31.22376 L26.3665074,30.6809053 C26.2377789,30.6659368 26.11404,30.6409895 25.9952905,30.6060632 C25.8755432,30.5711368 25.7667726,30.5322189 25.6679811,30.4873137 M24.0004989,37.57536 C16.5152905,37.57536 10.4251389,31.4852084 10.4251389,24 C10.4251389,16.5147916 16.5152905,10.4256379 24.0004989,10.4256379 C31.4857074,10.4256379 37.5738632,16.5147916 37.5738632,24 C37.5738632,31.4852084 31.4857074,37.57536 24.0004989,37.57536 M24.0004989,8.72722105 C15.5792653,8.72722105 8.72772,15.5797642 8.72772,24 C8.72772,32.4202358 15.5792653,39.2727789 24.0004989,39.2727789 C32.4207347,39.2727789 39.27228,32.4202358 39.27228,24 C39.27228,15.5797642 32.4207347,8.72722105 24.0004989,8.72722105 M23.7260779,16.8105221 C24.5852653,16.8105221 25.2817958,16.1139916 25.2817958,15.2548042 C25.2817958,14.3966147 24.5852653,13.7000842 23.7260779,13.7000842 C22.8668905,13.7000842 22.17036,14.3966147 22.17036,15.2548042 C22.17036,16.1139916 22.8668905,16.8105221 23.7260779,16.8105221"
    />
  );

  return isExtraSmall ? (isHovered ? simplifiedHover : simplified) : isHovered ? normalHover : normal;
};

export default InfoSignStroke;
