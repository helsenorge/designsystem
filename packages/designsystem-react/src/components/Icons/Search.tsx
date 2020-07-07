import React from 'react';
import {IconRawProps} from './Icon';

const Search = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, className, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <path d="M21.2765868,7.7379884 C28.5478513,7.7379884 34.4423759,13.6325129 34.4423759,20.9037774 C34.4423759,23.1263835 33.8916266,25.2203552 32.919156,27.0566648 L39.1874127,33.324774 C40.721762,34.8591233 40.721762,37.3467951 39.1874127,38.8811444 C37.7010118,40.3675454 35.31994,40.4139954 33.7776222,39.0204945 L33.6310422,38.8811444 L27.3421242,32.5921859 C25.5268747,33.5361062 23.4640289,34.0695664 21.2765868,34.0695664 C14.0053223,34.0695664 8.11079782,28.1750419 8.11079782,20.9037774 C8.11079782,13.6325129 14.0053223,7.7379884 21.2765868,7.7379884 Z M32.001345,28.5421521 C31.1324216,29.7599881 30.0612395,30.8235682 28.8368474,31.6838438 L34.8331237,37.6790629 C35.7035818,38.549521 37.1148731,38.549521 37.9853312,37.6790629 C38.8179432,36.8464509 38.8541437,35.5190121 38.0939327,34.6433717 L37.9853312,34.5268555 Z M21.2765868,9.4379884 C14.9442064,9.4379884 9.81079782,14.571397 9.81079782,20.9037774 C9.81079782,27.2361578 14.9442064,32.3695664 21.2765868,32.3695664 C23.5353726,32.3695664 25.6416039,31.7164029 27.4167114,30.5886451 L27.5796961,30.4256353 L27.6137407,30.4606195 C28.8625723,29.6308578 29.9394269,28.5628472 30.7794312,27.321461 L30.7319036,27.2734279 L30.959554,27.0468923 C32.0884785,25.2711601 32.7423759,23.1638317 32.7423759,20.9037774 C32.7423759,14.571397 27.6089673,9.4379884 21.2765868,9.4379884 Z" />
  );

  const normalHover = (
    <path d="M21.5271202,6.93166538 C29.4593105,6.93166538 35.8896212,13.3619761 35.8896212,21.2941663 C35.8896212,23.8498214 35.2221228,26.2495739 34.051956,28.3285939 L39.4379461,33.7151629 C40.9722954,35.2495122 40.9722954,37.737184 39.4379461,39.2715334 C37.9515452,40.7579343 35.5704734,40.8043843 34.0281556,39.4108834 L33.8815756,39.2715334 L28.4764644,33.8665109 C26.417163,35.0072186 24.047985,35.6566673 21.5271202,35.6566673 C13.59493,35.6566673 7.16461929,29.2263566 7.16461929,21.2941663 C7.16461929,13.3619761 13.59493,6.93166538 21.5271202,6.93166538 Z M33.1086382,29.7898989 C32.2240862,30.9937037 31.1563608,32.0545555 29.9465486,32.9313682 L35.0836571,38.0694518 C35.9541152,38.9399099 37.3654065,38.9399099 38.2358646,38.0694518 C39.0684766,37.2368398 39.1046771,35.9094011 38.3444661,35.0337606 L38.2358646,34.9172444 Z M21.5271202,8.63166538 C14.5338141,8.63166538 8.86461929,14.3008602 8.86461929,21.2941663 C8.86461929,28.2874725 14.5338141,33.9566673 21.5271202,33.9566673 C28.5204264,33.9566673 34.1896212,28.2874725 34.1896212,21.2941663 C34.1896212,14.3008602 28.5204264,8.63166538 21.5271202,8.63166538 Z" />
  );

  const simplified = (
    <path
      fillRule="evenodd"
      d="M34.4760902,34.2063158 C33.9897744,34.6926316 33.1425564,34.6926316 32.6562406,34.2063158 L28.2541353,29.8033083 C28.923609,29.2619549 29.5172932,28.6348872 30.0342857,27.9455639 L34.4760902,32.3864662 C34.718797,32.6291729 34.8523308,32.9530827 34.8523308,33.2968421 C34.8523308,33.6406015 34.718797,33.963609 34.4760902,34.2063158 M21.7416541,30.0685714 C17.1500752,30.0685714 13.4147368,26.3323308 13.4147368,21.7416541 C13.4147368,17.1500752 17.1500752,13.4147368 21.7416541,13.4147368 C26.3332331,13.4147368 30.0685714,17.1500752 30.0685714,21.7416541 C30.0685714,26.3323308 26.3332331,30.0685714 21.7416541,30.0685714 M35.9233083,30.9401504 L31.122406,26.1392481 C31.7521805,24.8021053 32.113985,23.315188 32.113985,21.7416541 C32.113985,16.0213534 27.4610526,11.3684211 21.7416541,11.3684211 C16.0213534,11.3684211 11.3684211,16.0213534 11.3684211,21.7416541 C11.3684211,27.4610526 16.0213534,32.113985 21.7416541,32.113985 C23.4586466,32.113985 25.0754887,31.6881203 26.5028571,30.9464662 L31.2099248,35.6535338 C31.838797,36.282406 32.6760902,36.6297744 33.5666165,36.6297744 C34.4571429,36.6297744 35.2935338,36.282406 35.9233083,35.6535338 C37.2216541,34.3542857 37.2216541,32.2393985 35.9233083,30.9401504"
    />
  );

  const simplifiedHover = (
    <path
      fillRule="evenodd"
      d="M34.6996168,34.4296042 C34.2144379,34.9147832 33.3622105,34.9168926 32.8770316,34.4296042 L29.4892168,31.03968 C30.1515916,30.4891074 30.7443537,29.8604842 31.2738316,29.1812337 L34.6996168,32.6049095 C34.9443158,32.8474989 35.0772126,33.1723579 35.0772126,33.5162021 C35.0772126,33.8621558 34.9443158,34.1849053 34.6996168,34.4296042 M21.9394105,31.4362611 C16.7015874,31.4362611 12.4404505,27.1751242 12.4404505,21.9373011 C12.4404505,16.6994779 16.7015874,12.4383411 21.9394105,12.4383411 C27.1772337,12.4383411 31.4383705,16.6994779 31.4383705,21.9373011 C31.4383705,27.1751242 27.1772337,31.4362611 21.9394105,31.4362611 M36.1488253,31.1557011 L32.4150568,27.4198232 C33.2778316,25.7786526 33.7714484,23.9159874 33.7714484,21.9373011 C33.7714484,15.4126989 28.4619032,10.1052632 21.9394105,10.1052632 C15.4148084,10.1052632 10.1052632,15.4126989 10.1052632,21.9373011 C10.1052632,28.4619032 15.4148084,33.7714484 21.9394105,33.7714484 C24.0594316,33.7714484 26.0465558,33.2018905 27.7699958,32.2209853 L31.4257137,35.8788126 C32.0585558,36.5095453 32.8960168,36.8576084 33.7883242,36.8576084 C34.6806316,36.8576084 35.5202021,36.5095453 36.1488253,35.8788126 C36.7795579,35.24808 37.1276211,34.4106189 37.1276211,33.5162021 C37.1276211,32.6260042 36.7795579,31.7864337 36.1488253,31.1557011"
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

export default Search;
