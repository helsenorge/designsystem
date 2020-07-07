import React from 'react';
import {IconRawProps} from './Icon';

const Vaccine = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, className, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <path
      fillRule="evenodd"
      d="M14.969,16.381 L16.738,16.381 L16.738,15.481 L14.969,15.481 L14.969,16.381 Z M13.54,23.917 L20.501,23.917 L20.501,11.226 L13.54,11.226 L13.54,23.917 Z M20.501,28.924 C20.501,30.843 18.939,32.405 17.021,32.405 C15.102,32.405 13.54,30.843 13.54,28.924 L13.54,24.816 L20.501,24.816 L20.501,28.924 Z M17.793,34.21 C17.793,34.636 17.446,34.982 17.021,34.982 C16.595,34.982 16.248,34.636 16.248,34.21 L16.248,33.626 C16.501,33.668 16.756,33.704 17.021,33.704 C17.285,33.704 17.54,33.668 17.793,33.626 L17.793,34.21 Z M15.527,9.925 L18.513,9.925 L18.513,5.894 L15.527,5.894 L15.527,9.925 Z M19.814,5.894 L21.771,5.894 L21.771,4.595 L12.271,4.595 L12.271,5.894 L14.228,5.894 L14.228,9.926 L10.992,9.926 L10.992,11.225 L12.24,11.225 L12.24,28.924 C12.24,30.814 13.352,32.437 14.948,33.212 L14.948,34.21 C14.948,35.124 15.547,35.893 16.371,36.168 L16.371,42.506 L17.67,42.506 L17.67,36.168 C18.494,35.893 19.093,35.124 19.093,34.21 L19.093,33.212 C20.689,32.437 21.801,30.814 21.801,28.924 L21.801,11.225 L23.049,11.225 L23.049,9.926 L19.814,9.926 L19.814,5.894 Z M14.969,20.599 L16.738,20.599 L16.738,19.699 L14.969,19.699 L14.969,20.599 Z M36.108,21.285 L26.687,21.285 L26.687,21.203 C26.687,20.195 27.118,19.231 27.871,18.559 C28.449,18.044 28.83,17.374 28.976,16.647 L33.817,16.647 C33.961,17.365 34.341,18.04 34.923,18.559 C35.676,19.231 36.108,20.195 36.108,21.203 L36.108,21.285 Z M26.687,28.333 L36.108,28.333 L36.108,22.185 L26.687,22.185 L26.687,28.333 Z M36.108,30.603 C36.108,31.454 35.417,32.145 34.566,32.145 L28.229,32.145 C27.378,32.145 26.687,31.454 26.687,30.603 L26.687,29.233 L36.108,29.233 L36.108,30.603 Z M28.466,12.843 C28.466,12.788 28.51,12.744 28.564,12.744 L34.231,12.744 C34.285,12.744 34.329,12.788 34.329,12.843 L34.329,15.348 L28.466,15.348 L28.466,12.843 Z M35.789,17.589 C35.486,17.319 35.281,16.994 35.163,16.647 L35.629,16.647 L35.629,12.843 C35.629,12.071 35.002,11.444 34.231,11.444 L28.564,11.444 C27.793,11.444 27.166,12.071 27.166,12.843 L27.166,16.647 L27.632,16.647 C27.514,16.994 27.309,17.319 27.006,17.589 C25.977,18.508 25.387,19.825 25.387,21.203 L25.387,30.603 C25.387,32.171 26.661,33.445 28.229,33.445 L34.566,33.445 C36.133,33.445 37.408,32.171 37.408,30.603 L37.408,21.203 C37.408,19.825 36.818,18.508 35.789,17.589 L35.789,17.589 Z"
    />
  );

  const normalHover = (
    <path
      fillRule="evenodd"
      d="M13.524,26.276 L20.485,26.276 L20.485,11.335 L13.524,11.335 L13.524,26.276 Z M20.485,29.034 C20.485,30.953 18.923,32.514 17.004,32.514 C15.085,32.514 13.524,30.953 13.524,29.034 L13.524,27.177 L20.485,27.177 L20.485,29.034 Z M17.777,34.319 C17.777,34.745 17.43,35.092 17.004,35.092 C16.578,35.092 16.232,34.745 16.232,34.319 L16.232,33.736 C16.485,33.778 16.74,33.814 17.004,33.814 C17.268,33.814 17.524,33.778 17.777,33.736 L17.777,34.319 Z M15.511,10.035 L18.497,10.035 L18.497,8.255 L15.511,8.255 L15.511,10.035 Z M19.797,8.255 L21.754,8.255 L21.754,6.954 L12.254,6.954 L12.254,8.255 L14.211,8.255 L14.211,10.035 L10.975,10.035 L10.975,11.335 L12.223,11.335 L12.223,29.034 C12.223,30.924 13.336,32.547 14.931,33.322 L14.931,34.319 C14.931,35.234 15.531,36.003 16.354,36.277 L16.354,42.615 L17.654,42.615 L17.654,36.277 C18.477,36.003 19.076,35.234 19.076,34.319 L19.076,33.322 C20.673,32.547 21.785,30.924 21.785,29.034 L21.785,11.335 L23.033,11.335 L23.033,10.035 L19.797,10.035 L19.797,8.255 Z M14.953,24.926 L16.722,24.926 L16.722,24.026 L14.953,24.026 L14.953,24.926 Z M14.953,16.491 L16.722,16.491 L16.722,15.591 L14.953,15.591 L14.953,16.491 Z M14.953,20.708 L16.722,20.708 L16.722,19.808 L14.953,19.808 L14.953,20.708 Z M36.092,21.395 L26.67,21.395 L26.67,21.312 C26.67,20.305 27.102,19.341 27.855,18.669 C28.432,18.153 28.813,17.484 28.959,16.757 L33.801,16.757 C33.944,17.474 34.325,18.15 34.907,18.669 C35.66,19.341 36.092,20.305 36.092,21.312 L36.092,21.395 Z M26.671,28.443 L36.092,28.443 L36.092,22.295 L26.671,22.295 L26.671,28.443 Z M36.092,30.713 C36.092,31.563 35.4,32.255 34.55,32.255 L28.212,32.255 C27.362,32.255 26.67,31.563 26.67,30.713 L26.67,29.343 L36.092,29.343 L36.092,30.713 Z M28.45,12.952 C28.45,12.898 28.493,12.853 28.548,12.853 L34.214,12.853 C34.268,12.853 34.312,12.898 34.312,12.952 L34.312,15.457 L28.45,15.457 L28.45,12.952 Z M35.772,17.699 C35.47,17.429 35.264,17.104 35.146,16.757 L35.612,16.757 L35.612,12.952 C35.612,12.181 34.985,11.554 34.214,11.554 L28.548,11.554 C27.777,11.554 27.149,12.181 27.149,12.952 L27.149,16.757 L27.616,16.757 C27.497,17.104 27.292,17.429 26.989,17.699 C25.96,18.617 25.37,19.934 25.37,21.312 L25.37,30.713 C25.37,32.28 26.645,33.555 28.212,33.555 L34.55,33.555 C36.117,33.555 37.391,32.28 37.391,30.713 L37.391,21.312 C37.391,19.934 36.802,18.617 35.772,17.699 L35.772,17.699 Z"
    />
  );

  const simplified = (
    <path
      fillRule="evenodd"
      d="M13.3894737,23.7293053 L20.3873684,23.7293053 L20.3873684,10.9486737 L13.3894737,10.9486737 L13.3894737,23.7293053 Z M20.3873684,28.7933053 C20.3873684,30.7221474 18.8185263,32.2922526 16.8884211,32.2922526 C14.9595789,32.2922526 13.3894737,30.7221474 13.3894737,28.7933053 L13.3894737,24.7398316 L20.3873684,24.7398316 L20.3873684,28.7933053 Z M17.6791579,34.0783579 C17.6791579,34.5141474 17.3254737,34.8690947 16.8884211,34.8690947 C16.4526316,34.8690947 16.0976842,34.5141474 16.0976842,34.0783579 L16.0976842,33.4745684 C16.3566316,33.5187789 16.6181053,33.5554105 16.8884211,33.5554105 C17.16,33.5554105 17.4214737,33.5187789 17.6791579,33.4745684 L17.6791579,34.0783579 Z M15.3776842,9.93814737 L18.4004211,9.93814737 L18.4004211,5.74446316 L15.3776842,5.74446316 L15.3776842,9.93814737 Z M19.6635789,5.74446316 L21.6391579,5.74446316 L21.6391579,4.48130526 L12.1389474,4.48130526 L12.1389474,5.74446316 L14.1145263,5.74446316 L14.1145263,9.93814737 L10.8606316,9.93814737 L10.8606316,10.9499368 L12.1263158,10.9499368 L12.1263158,28.7933053 C12.1263158,30.6804632 13.2391579,32.2998316 14.8345263,33.0703579 L14.8345263,34.0783579 C14.8345263,34.9890947 15.4345263,35.7545684 16.2568421,36.0223579 L16.2568421,42.3735158 L17.52,42.3735158 L17.52,36.0223579 C18.3435789,35.7545684 18.9423158,34.9890947 18.9423158,34.0783579 L18.9423158,33.0703579 C20.5389474,32.2998316 21.6505263,30.6804632 21.6505263,28.7933053 L21.6505263,10.9499368 L22.9174737,10.9499368 L22.9174737,9.93814737 L19.6635789,9.93814737 L19.6635789,5.74446316 Z M35.9949474,21.0981474 L26.5364211,21.0981474 L26.5364211,21.0716211 C26.5364211,20.0573053 26.9709474,19.0884632 27.7275789,18.4139368 C28.3061053,17.8973053 28.6850526,17.2253053 28.8277895,16.4977263 L33.7023158,16.4977263 C33.8425263,17.2164632 34.2214737,17.8935158 34.8037895,18.4139368 C35.5616842,19.0884632 35.9949474,20.0573053 35.9949474,21.0716211 L35.9949474,21.0981474 Z M26.5364211,28.1465684 L35.9949474,28.1465684 L35.9949474,22.1086737 L26.5364211,22.1086737 L26.5364211,28.1465684 Z M35.9949474,30.4720421 C35.9949474,31.3322526 35.2951579,32.0320421 34.4349474,32.0320421 L28.0964211,32.0320421 C27.2362105,32.0320421 26.5364211,31.3322526 26.5364211,30.4720421 L26.5364211,29.1570947 L35.9949474,29.1570947 L35.9949474,30.4720421 Z M28.3162105,12.9078316 C28.3162105,12.7347789 28.4564211,12.5933053 28.6294737,12.5933053 L33.9018947,12.5933053 C34.0749474,12.5933053 34.2151579,12.7347789 34.2151579,12.9078316 L34.2151579,15.2345684 L28.3162105,15.2345684 L28.3162105,12.9078316 Z M35.6450526,17.4716211 C35.3317895,17.1924632 35.1221053,16.8564632 35.0058947,16.4977263 L35.4783158,16.4977263 L35.4783158,12.9078316 C35.4783158,12.0375158 34.7722105,11.3301474 33.9018947,11.3301474 L28.6294737,11.3301474 C27.7604211,11.3301474 27.0530526,12.0375158 27.0530526,12.9078316 L27.0530526,16.4977263 L27.5267368,16.4977263 C27.4092632,16.8564632 27.1983158,17.1924632 26.8863158,17.4716211 C25.8606316,18.3861474 25.2732632,19.6985684 25.2732632,21.0716211 L25.2732632,30.4720421 C25.2732632,32.0295158 26.5402105,33.2952 28.0964211,33.2952 L34.4349474,33.2952 C35.9911579,33.2952 37.2581053,32.0295158 37.2581053,30.4720421 L37.2581053,21.0716211 C37.2581053,19.6985684 36.6707368,18.3861474 35.6450526,17.4716211 L35.6450526,17.4716211 Z"
    />
  );

  const simplifiedHover = (
    <path
      fillRule="evenodd"
      d="M13.3730526,26.0888842 L20.3709474,26.0888842 L20.3709474,11.0585684 L13.3730526,11.0585684 L13.3730526,26.0888842 Z M20.3709474,28.9019368 C20.3709474,30.8307789 18.8021053,32.4008842 16.872,32.4008842 C14.9431579,32.4008842 13.3730526,30.8307789 13.3730526,28.9019368 L13.3730526,27.1006737 L20.3709474,27.1006737 L20.3709474,28.9019368 Z M17.6627368,34.1882526 C17.6627368,34.6240421 17.3090526,34.9789895 16.872,34.9789895 C16.4362105,34.9789895 16.0812632,34.6240421 16.0812632,34.1882526 L16.0812632,33.5844632 C16.3402105,33.6274105 16.6016842,33.6640421 16.872,33.6640421 C17.1435789,33.6640421 17.4050526,33.6274105 17.6627368,33.5844632 L17.6627368,34.1882526 Z M15.3612632,10.0480421 L18.3852632,10.0480421 L18.3852632,8.10404211 L15.3612632,8.10404211 L15.3612632,10.0480421 Z M19.6471579,8.10404211 L21.6227368,8.10404211 L21.6227368,6.84088421 L12.1225263,6.84088421 L12.1225263,8.10404211 L14.0981053,8.10404211 L14.0981053,10.0480421 L10.8429474,10.0480421 L10.8429474,11.0585684 L12.1098947,11.0585684 L12.1098947,28.9019368 C12.1098947,30.7890947 13.2227368,32.4097263 14.8181053,33.1789895 L14.8181053,34.1882526 C14.8181053,35.0989895 15.4193684,35.8644632 16.2404211,36.1322526 L16.2404211,42.4834105 L17.5035789,42.4834105 L17.5035789,36.1322526 C18.3258947,35.8644632 18.9258947,35.0989895 18.9258947,34.1882526 L18.9258947,33.1789895 C20.5225263,32.4097263 21.6341053,30.7890947 21.6341053,28.9019368 L21.6341053,11.0585684 L22.9010526,11.0585684 L22.9010526,10.0480421 L19.6471579,10.0480421 L19.6471579,8.10404211 Z M35.9785263,21.2080421 L26.52,21.2080421 L26.52,21.1815158 C26.52,20.1672 26.9545263,19.1983579 27.7111579,18.5238316 C28.2896842,18.0072 28.6686316,17.3352 28.8113684,16.6076211 L33.6858947,16.6076211 C33.8261053,17.3250947 34.2050526,18.0034105 34.7873684,18.5238316 C35.544,19.1983579 35.9785263,20.1672 35.9785263,21.1815158 L35.9785263,21.2080421 Z M26.52,28.2552 L35.9785263,28.2552 L35.9785263,22.2185684 L26.52,22.2185684 L26.52,28.2552 Z M35.9785263,30.5819368 C35.9785263,31.4421474 35.2787368,32.1419368 34.4185263,32.1419368 L28.08,32.1419368 C27.2197895,32.1419368 26.52,31.4421474 26.52,30.5819368 L26.52,29.2669895 L35.9785263,29.2669895 L35.9785263,30.5819368 Z M28.2997895,13.0177263 C28.2997895,12.8446737 28.44,12.7032 28.6130526,12.7032 L33.8854737,12.7032 C34.0585263,12.7032 34.1987368,12.8446737 34.1987368,13.0177263 L34.1987368,15.3444632 L28.2997895,15.3444632 L28.2997895,13.0177263 Z M35.6286316,17.5815158 C35.3153684,17.3023579 35.1056842,16.9663579 34.9882105,16.6076211 L35.4618947,16.6076211 L35.4618947,13.0177263 C35.4618947,12.1474105 34.7545263,11.4400421 33.8854737,11.4400421 L28.6130526,11.4400421 C27.744,11.4400421 27.0366316,12.1474105 27.0366316,13.0177263 L27.0366316,16.6076211 L27.5103158,16.6076211 C27.3928421,16.9663579 27.1831579,17.3023579 26.8698947,17.5815158 C25.8442105,18.4960421 25.2568421,19.8084632 25.2568421,21.1815158 L25.2568421,30.5819368 C25.2568421,32.1381474 26.5237895,33.4050947 28.08,33.4050947 L34.4185263,33.4050947 C35.9747368,33.4050947 37.2416842,32.1381474 37.2416842,30.5819368 L37.2416842,21.1815158 C37.2416842,19.8084632 36.6543158,18.4960421 35.6286316,17.5815158 L35.6286316,17.5815158 Z"
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

export default Vaccine;
