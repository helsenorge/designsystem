import React from 'react';
import {IconRawProps} from './Icon';

const Journal = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <path
      fillRule="evenodd"
      d="M23.5079,9.4632 C23.8529,9.4632 24.1329,9.1832 24.1329,8.8382 C24.1329,8.4932 23.8529,8.2132 23.5079,8.2132 C23.1629,8.2132 22.8829,8.4932 22.8829,8.8382 C22.8829,9.1832 23.1629,9.4632 23.5079,9.4632 L23.5079,9.4632 Z M39.4009,34.4342 C39.4009,35.2622 38.7269,35.9352 37.8999,35.9352 L15.1159,35.9352 C15.4309,35.5172 15.6169,34.9972 15.6169,34.4342 L15.6169,34.2962 L39.4009,34.2962 L39.4009,34.4342 Z M38.3969,39.7372 L8.6189,39.7372 L8.6189,9.2132 L18.0049,9.2132 L15.9519,10.5882 L15.9519,11.1602 L10.6159,11.1602 L10.6159,34.4342 C10.6159,35.8132 11.7379,36.9352 13.1169,36.9352 L37.8999,36.9352 C38.0699,36.9352 38.2359,36.9182 38.3969,36.8852 L38.3969,39.7372 Z M19.4479,9.8102 L19.4479,6.5172 L27.5669,6.5172 L27.5669,9.8102 L29.7639,11.2822 L29.7639,12.3262 L17.2519,12.3262 L17.2519,11.2822 L19.4479,9.8102 Z M31.0639,13.6262 L31.0639,12.1602 L35.3999,12.1602 L35.3999,33.2962 L14.6169,33.2962 L14.6169,34.4342 C14.6169,35.2622 13.9439,35.9352 13.1169,35.9352 C12.2889,35.9352 11.6159,35.2622 11.6159,34.4342 L11.6159,12.1602 L15.9519,12.1602 L15.9519,13.6262 L31.0639,13.6262 Z M28.8669,9.0832 L38.3969,9.0832 L38.3969,33.2962 L36.3999,33.2962 L36.3999,11.1602 L31.0639,11.1602 L31.0639,10.5882 L28.8669,9.1162 L28.8669,9.0832 Z M39.6969,33.2962 L39.6969,7.7832 L28.8669,7.7832 L28.8669,5.2172 L18.1489,5.2172 L18.1489,7.9132 L7.3189,7.9132 L7.3189,41.0372 L39.6969,41.0372 L39.6969,36.1662 C40.1309,35.7162 40.4009,35.1072 40.4009,34.4342 L40.4009,33.2962 L39.6969,33.2962 Z M14.8239,20.3352 L26.9809,20.3352 L26.9809,19.3352 L14.8239,19.3352 L14.8239,20.3352 Z M29.5869,20.3352 L32.1919,20.3352 L32.1919,19.3352 L29.5869,19.3352 L29.5869,20.3352 Z M14.8239,28.1342 L32.1919,28.1342 L32.1919,27.1342 L14.8239,27.1342 L14.8239,28.1342 Z M14.8239,24.2342 L32.1919,24.2342 L32.1919,23.2342 L14.8239,23.2342 L14.8239,24.2342 Z"
    />
  );

  const normalHover = (
    <path
      fillRule="evenodd"
      d="M14.796,24.234 L32.164,24.234 L32.164,23.234 L14.796,23.234 L14.796,24.234 Z M14.796,28.134 L32.164,28.134 L32.164,27.134 L14.796,27.134 L14.796,28.134 Z M37.867,34.435 L15.083,34.435 C15.402,34.014 15.599,33.497 15.599,32.93 C15.599,32.362 15.402,31.845 15.083,31.424 L37.867,31.424 C38.697,31.424 39.372,32.099 39.372,32.93 C39.372,33.76 38.697,34.435 37.867,34.435 L37.867,34.435 Z M38.369,39.737 L8.59,39.737 L8.59,9.213 L17.976,9.213 L15.923,10.589 L15.923,11.16 L10.588,11.16 L10.588,32.934 C10.588,34.313 11.709,35.435 13.088,35.435 L13.088,35.434 C13.09,35.434 13.092,35.435 13.093,35.435 L37.867,35.435 C38.039,35.435 38.206,35.417 38.369,35.385 L38.369,39.737 Z M19.42,9.81 L19.42,6.517 L27.538,6.517 L27.538,9.81 L29.736,11.283 L29.736,12.326 L17.223,12.326 L17.223,11.283 L19.42,9.81 Z M14.599,32.93 C14.599,33.76 13.924,34.435 13.093,34.435 C12.263,34.435 11.588,33.76 11.588,32.93 L11.588,12.16 L15.923,12.16 L15.923,13.626 L31.036,13.626 L31.036,12.16 L35.371,12.16 L35.371,30.424 L13.093,30.424 L13.093,31.424 C13.924,31.424 14.599,32.099 14.599,32.93 L14.599,32.93 Z M28.839,9.083 L38.369,9.083 L38.369,30.474 C38.206,30.442 38.039,30.424 37.867,30.424 L36.371,30.424 L36.371,11.16 L31.036,11.16 L31.036,10.589 L28.839,9.117 L28.839,9.083 Z M39.668,31.196 L39.668,7.783 L28.839,7.783 L28.839,5.218 L18.12,5.218 L18.12,7.913 L7.29,7.913 L7.29,41.037 L39.668,41.037 L39.668,34.663 C40.102,34.212 40.372,33.603 40.372,32.93 C40.372,32.256 40.102,31.647 39.668,31.196 L39.668,31.196 Z M23.479,9.463 C23.825,9.463 24.104,9.183 24.104,8.838 C24.104,8.493 23.825,8.213 23.479,8.213 C23.134,8.213 22.854,8.493 22.854,8.838 C22.854,9.183 23.134,9.463 23.479,9.463 L23.479,9.463 Z M14.796,20.335 L26.953,20.335 L26.953,19.335 L14.796,19.335 L14.796,20.335 Z M29.559,20.335 L32.164,20.335 L32.164,19.335 L29.559,19.335 L29.559,20.335 Z"
    />
  );

  const simplified = (
    <path
      fillRule="evenodd"
      d="M39.264,34.3029474 C39.264,35.1277895 38.5932632,35.7985263 37.7684211,35.7985263 L14.9949474,35.7985263 C15.3069474,35.3804211 15.4913684,34.8625263 15.4913684,34.3029474 L15.4913684,34.1690526 L39.264,34.1690526 L39.264,34.3029474 Z M38.2837895,39.6233684 L8.46821053,39.6233684 L8.46821053,9.06252632 L17.9343158,9.06252632 L15.8387368,10.4671579 L15.8387368,11.0229474 L10.4791579,11.0229474 L10.4791579,34.3029474 C10.4791579,35.6848421 11.6033684,36.8090526 12.9852632,36.8090526 L37.7684211,36.8090526 C37.9452632,36.8090526 38.1170526,36.7888421 38.2837895,36.7534737 L38.2837895,39.6233684 Z M19.2985263,9.66884211 L19.2985263,6.36694737 L27.4534737,6.36694737 L27.4534737,9.66884211 L29.6513684,11.1416842 L29.6513684,12.2128421 L17.1018947,12.2128421 L17.1018947,11.1416842 L19.2985263,9.66884211 Z M30.9145263,13.476 L30.9145263,12.0334737 L35.2623158,12.0334737 L35.2623158,33.1585263 L14.4808421,33.1585263 L14.4808421,34.3029474 C14.4808421,35.1277895 13.8101053,35.7985263 12.9852632,35.7985263 C12.1604211,35.7985263 11.4896842,35.1277895 11.4896842,34.3029474 L11.4896842,12.0334737 L15.8387368,12.0334737 L15.8387368,13.476 L30.9145263,13.476 Z M28.7166316,8.93368421 L38.2837895,8.93368421 L38.2837895,33.1585263 L36.2728421,33.1585263 L36.2728421,11.0229474 L30.9145263,11.0229474 L30.9145263,10.4671579 L28.7166316,8.99431579 L28.7166316,8.93368421 Z M39.5469474,33.1585263 L39.5469474,7.67052632 L28.7166316,7.67052632 L28.7166316,5.10378947 L18.0353684,5.10378947 L18.0353684,7.79936842 L7.20505263,7.79936842 L7.20505263,40.8865263 L39.5469474,40.8865263 L39.5469474,36.0650526 C39.9966316,35.6115789 40.2745263,34.9888421 40.2745263,34.3029474 L40.2745263,33.1585263 L39.5469474,33.1585263 Z M23.376,9.33157895 C23.7208421,9.33157895 24.0012632,9.05115789 24.0012632,8.70631579 C24.0012632,8.36147368 23.7208421,8.08105263 23.376,8.08105263 C23.0311579,8.08105263 22.7507368,8.36147368 22.7507368,8.70631579 C22.7507368,9.05115789 23.0311579,9.33157895 23.376,9.33157895 L23.376,9.33157895 Z M15.9549474,21.5816842 L30.7970526,21.5816842 L30.7970526,20.5711579 L15.9549474,20.5711579 L15.9549474,21.5816842 Z M15.9549474,25.4810526 L30.7970526,25.4810526 L30.7970526,24.4705263 L15.9549474,24.4705263 L15.9549474,25.4810526 Z"
    />
  );

  const simplifiedHover = (
    <path
      fillRule="evenodd"
      d="M23.3475789,9.33157895 C23.6924211,9.33157895 23.9728421,9.05115789 23.9728421,8.70631579 C23.9728421,8.36147368 23.6924211,8.08105263 23.3475789,8.08105263 C23.0027368,8.08105263 22.7223158,8.36147368 22.7223158,8.70631579 C22.7223158,9.05115789 23.0027368,9.33157895 23.3475789,9.33157895 L23.3475789,9.33157895 Z M37.7349474,34.2991579 L14.9627368,34.2991579 C15.2785263,33.8785263 15.4730526,33.3618947 15.4730526,32.7972632 C15.4730526,32.2326316 15.2785263,31.7172632 14.9627368,31.2978947 L37.7349474,31.2978947 C38.5623158,31.2978947 39.2355789,31.9711579 39.2355789,32.7972632 C39.2355789,33.6246316 38.5623158,34.2991579 37.7349474,34.2991579 L37.7349474,34.2991579 Z M38.2553684,39.6233684 L8.43978947,39.6233684 L8.43978947,9.06252632 L17.9058947,9.06252632 L15.8103158,10.4671579 L15.8103158,11.0229474 L10.4507368,11.0229474 L10.4507368,32.8035789 C10.4507368,34.1842105 11.5749474,35.3084211 12.9568421,35.3084211 L12.9568421,35.3084211 C12.9581053,35.3084211 12.9593684,35.3084211 12.9618947,35.3084211 L37.7349474,35.3084211 C37.9130526,35.3084211 38.0873684,35.2882105 38.2553684,35.2528421 L38.2553684,39.6233684 Z M19.2701053,9.66884211 L19.2701053,6.36694737 L27.4263158,6.36694737 L27.4263158,9.66884211 L29.6229474,11.1416842 L29.6229474,12.2128421 L17.0734737,12.2128421 L17.0734737,11.1416842 L19.2701053,9.66884211 Z M14.4625263,32.7972632 C14.4625263,33.6246316 13.7892632,34.2991579 12.9618947,34.2991579 C12.1345263,34.2991579 11.4612632,33.6246316 11.4612632,32.7972632 L11.4612632,12.0334737 L15.8103158,12.0334737 L15.8103158,13.476 L30.8861053,13.476 L30.8861053,12.0334737 L35.2338947,12.0334737 L35.2338947,30.2873684 L12.9618947,30.2873684 L12.9618947,31.2978947 C13.7892632,31.2978947 14.4625263,31.9711579 14.4625263,32.7972632 L14.4625263,32.7972632 Z M28.6894737,8.93368421 L38.2553684,8.93368421 L38.2553684,30.3429474 C38.0873684,30.3075789 37.9130526,30.2873684 37.7349474,30.2873684 L36.2444211,30.2873684 L36.2444211,11.0229474 L30.8861053,11.0229474 L30.8861053,10.4671579 L28.6894737,8.99431579 L28.6894737,8.93368421 Z M39.5185263,31.0338947 L39.5185263,7.67052632 L28.6894737,7.67052632 L28.6894737,5.10378947 L18.0069474,5.10378947 L18.0069474,7.79936842 L7.17663158,7.79936842 L7.17663158,40.8865263 L39.5185263,40.8865263 L39.5185263,34.5618947 C39.9669474,34.1084211 40.2461053,33.4856842 40.2461053,32.7972632 C40.2461053,32.1101053 39.9669474,31.4886316 39.5185263,31.0338947 L39.5185263,31.0338947 Z M15.9265263,25.4810526 L30.7686316,25.4810526 L30.7686316,24.4705263 L15.9265263,24.4705263 L15.9265263,25.4810526 Z M15.9265263,21.5816842 L30.7686316,21.5816842 L30.7686316,20.5711579 L15.9265263,20.5711579 L15.9265263,21.5816842 Z"
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

export default Journal;
