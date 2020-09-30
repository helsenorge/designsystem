import React from 'react';
import {SvgPathProps} from './Icon';

const MobilePhone: React.FC<SvgPathProps> = ({isExtraSmall, isHovered}: SvgPathProps): JSX.Element => {
  const normal = (
    <path
      fillRule="evenodd"
      d="M27.1945,7.6807 L22.8615,7.6807 C22.5875,7.6807 22.3645,7.9027 22.3645,8.1767 C22.3645,8.4517 22.5875,8.6727 22.8615,8.6727 L27.1945,8.6727 C27.4685,8.6727 27.6905,8.4517 27.6905,8.1767 C27.6905,7.9027 27.4685,7.6807 27.1945,7.6807 L27.1945,7.6807 Z M33.4755,39.3607 C33.4755,40.7687 32.3295,41.9137 30.9205,41.9137 L17.0795,41.9137 C15.6715,41.9137 14.5255,40.7687 14.5255,39.3607 L14.5255,8.6397 C14.5255,7.2307 15.6715,6.0847 17.0795,6.0847 L30.9205,6.0847 C32.3295,6.0847 33.4755,7.2307 33.4755,8.6397 L33.4755,39.3607 Z M30.9205,4.7847 L17.0795,4.7847 C14.9545,4.7847 13.2255,6.5137 13.2255,8.6397 L13.2255,39.3607 C13.2255,41.4857 14.9545,43.2147 17.0795,43.2147 L30.9205,43.2147 C33.0465,43.2147 34.7755,41.4857 34.7755,39.3607 L34.7755,8.6397 C34.7755,6.5137 33.0465,4.7847 30.9205,4.7847 L30.9205,4.7847 Z M21.6555,8.1777 C21.6555,7.9427 21.4655,7.7517 21.2305,7.7517 C20.9955,7.7517 20.8055,7.9427 20.8055,8.1777 C20.8055,8.4117 20.9955,8.6027 21.2305,8.6027 C21.4655,8.6027 21.6555,8.4117 21.6555,8.1777 L21.6555,8.1777 Z M24.0005,39.7737 C23.1615,39.7737 22.4795,39.0907 22.4795,38.2517 C22.4795,37.4127 23.1615,36.7317 24.0005,36.7317 C24.8385,36.7317 25.5205,37.4127 25.5205,38.2517 C25.5205,39.0907 24.8385,39.7737 24.0005,39.7737 L24.0005,39.7737 Z M24.0005,35.7317 C22.6105,35.7317 21.4795,36.8627 21.4795,38.2517 C21.4795,39.6427 22.6105,40.7737 24.0005,40.7737 C25.3895,40.7737 26.5205,39.6427 26.5205,38.2517 C26.5205,36.8627 25.3895,35.7317 24.0005,35.7317 L24.0005,35.7317 Z"
    />
  );

  const normalHover = (
    <path
      fillRule="evenodd"
      d="M15.3876,7.3307 C15.6726,5.2247 17.6216,3.7407 19.7246,4.0287 L19.7246,4.0287 L33.4406,5.8887 C35.5466,6.1747 37.0276,8.1207 36.7416,10.2267 L36.7416,10.2267 L32.6126,40.6687 C32.4746,41.6897 31.9476,42.5947 31.1276,43.2187 C30.4506,43.7347 29.6396,44.0057 28.8026,44.0057 C28.6276,44.0057 28.4516,43.9937 28.2756,43.9707 L28.2756,43.9707 L14.5596,42.1107 C13.5396,41.9717 12.6346,41.4447 12.0106,40.6257 C11.3876,39.8067 11.1206,38.7927 11.2586,37.7737 L11.2586,37.7737 Z M19.2056,5.2937 C17.9476,5.2937 16.8496,6.2257 16.6756,7.5047 L16.6756,7.5047 L12.5466,37.9477 C12.4546,38.6237 12.6316,39.2947 13.0446,39.8377 C13.4576,40.3807 14.0576,40.7307 14.7336,40.8217 L14.7336,40.8217 L28.4506,42.6817 C29.1296,42.7827 29.7976,42.5977 30.3406,42.1837 C30.8836,41.7707 31.2326,41.1707 31.3246,40.4947 L31.3246,40.4947 L35.4536,10.0527 C35.6426,8.6567 34.6616,7.3667 33.2656,7.1777 L33.2656,7.1777 L19.5496,5.3177 C19.4336,5.3017 19.3196,5.2937 19.2056,5.2937 Z M35.8091,38.3486 L38.3441,40.6666 L37.4671,41.6256 L34.9321,39.3076 L35.8091,38.3486 Z M19.5863,37.7841 C19.7733,36.4071 21.0463,35.4371 22.4233,35.6251 C23.8003,35.8111 24.7693,37.0851 24.5823,38.4621 C24.4923,39.1291 24.1473,39.7221 23.6113,40.1291 C23.1683,40.4661 22.6383,40.6431 22.0913,40.6431 C21.9763,40.6431 21.8613,40.6361 21.7453,40.6201 C21.0783,40.5301 20.4863,40.1851 20.0783,39.6491 C19.6703,39.1141 19.4953,38.4511 19.5863,37.7841 Z M22.0843,36.6011 C21.3353,36.6011 20.6803,37.1561 20.5773,37.9191 C20.5233,38.3211 20.6283,38.7211 20.8743,39.0441 C21.1203,39.3671 21.4773,39.5751 21.8803,39.6301 C22.2813,39.6791 22.6823,39.5791 23.0063,39.3331 C23.3293,39.0871 23.5373,38.7301 23.5913,38.3271 C23.7043,37.4961 23.1193,36.7281 22.2883,36.6151 C22.2193,36.6061 22.1513,36.6011 22.0843,36.6011 Z M39.725,34.708 L39.725,36.009 L36.638,36.009 L36.638,34.708 L39.725,34.708 Z M10.515,11.603 L10.515,12.904 L7.429,12.904 L7.429,11.603 L10.515,11.603 Z M9.6857,5.9867 L12.2217,8.3047 L11.3447,9.2637 L8.8087,6.9457 L9.6857,5.9867 Z M24.9745811,7.6692513 L25.0644,7.6768 L29.3584,8.2588 C29.6294,8.2948 29.8204,8.5448 29.7834,8.8168 C29.7504,9.0658 29.5374,9.2458 29.2924,9.2458 C29.2704,9.2458 29.2484,9.2448 29.2254,9.2408 L29.2254,9.2408 L24.9314,8.6588 C24.6604,8.6228 24.4694,8.3728 24.5064,8.1018 C24.5434,7.8298 24.7914,7.6268 25.0644,7.6768 Z M23.362962,7.52374746 L23.4397,7.5271 C23.6727,7.5581 23.8357,7.7731 23.8047,8.0061 C23.7727,8.2381 23.5577,8.4011 23.3257,8.3701 C23.0927,8.3381 22.9297,8.1241 22.9617,7.8911 C22.9927,7.6581 23.2067,7.4961 23.4397,7.5271 Z"
    />
  );

  const simplified = (
    <path
      fillRule="evenodd"
      d="M23.8736842,39.6411789 C23.0387368,39.6411789 22.3591579,38.9616 22.3591579,38.1266526 C22.3591579,37.2917053 23.0387368,36.6121263 23.8736842,36.6121263 C24.7086316,36.6121263 25.3882105,37.2917053 25.3882105,38.1266526 C25.3882105,38.9616 24.7086316,39.6411789 23.8736842,39.6411789 L23.8736842,39.6411789 Z M23.8736842,35.6003368 C22.4804211,35.6003368 21.3473684,36.7333895 21.3473684,38.1266526 C21.3473684,39.5186526 22.4804211,40.6529684 23.8736842,40.6529684 C25.2669474,40.6529684 26.4,39.5186526 26.4,38.1266526 C26.4,36.7333895 25.2669474,35.6003368 23.8736842,35.6003368 L23.8736842,35.6003368 Z M33.2412632,39.2344421 C33.2412632,40.5834947 32.1435789,41.6811789 30.7945263,41.6811789 L16.9528421,41.6811789 C15.6037895,41.6811789 14.5061053,40.5834947 14.5061053,39.2344421 L14.5061053,8.51191579 C14.5061053,7.16412632 15.6037895,6.06644211 16.9528421,6.06644211 L30.7945263,6.06644211 C32.1435789,6.06644211 33.2412632,7.16412632 33.2412632,8.51191579 L33.2412632,39.2344421 Z M30.7945263,4.55191579 L16.9528421,4.55191579 C14.7688421,4.55191579 12.9915789,6.32791579 12.9915789,8.51191579 L12.9915789,39.2344421 C12.9915789,41.4184421 14.7688421,43.1957053 16.9528421,43.1957053 L30.7945263,43.1957053 C32.9785263,43.1957053 34.7557895,41.4184421 34.7557895,39.2344421 L34.7557895,8.51191579 C34.7557895,6.32791579 32.9785263,4.55191579 30.7945263,4.55191579 L30.7945263,4.55191579 Z M27.0682105,7.55570526 L22.7355789,7.55570526 C22.4614737,7.55570526 22.2391579,7.77675789 22.2391579,8.05086316 C22.2391579,8.32496842 22.4614737,8.54728421 22.7355789,8.54728421 L27.0682105,8.54728421 C27.3423158,8.54728421 27.5646316,8.32496842 27.5646316,8.05086316 C27.5646316,7.77675789 27.3423158,7.55570526 27.0682105,7.55570526 L27.0682105,7.55570526 Z M21.5292632,8.05086316 C21.5292632,7.81591579 21.3397895,7.62517895 21.1048421,7.62517895 C20.8698947,7.62517895 20.6791579,7.81591579 20.6791579,8.05086316 C20.6791579,8.28581053 20.8698947,8.47654737 21.1048421,8.47654737 C21.3397895,8.47654737 21.5292632,8.28581053 21.5292632,8.05086316 L21.5292632,8.05086316 Z"
    />
  );

  const simplifiedHover = (
    <path
      fillRule="evenodd"
      d="M15.3853895,7.26176842 C15.6936,5.10050526 17.6969684,3.57966316 19.8658105,3.89545263 L19.8658105,3.89545263 L33.5698105,5.84197895 C35.7323368,6.14892632 37.2418105,8.15987368 36.9348632,10.3224 L36.9348632,10.3224 L32.6148632,40.7379789 C32.4658105,41.7864 31.9176,42.7135579 31.0712842,43.3476632 C30.3778105,43.8706105 29.5517053,44.1434526 28.7003368,44.1434526 C28.5121263,44.1434526 28.3239158,44.1308211 28.1344421,44.1030316 L28.1344421,44.1030316 L14.4304421,42.1565053 C13.3820211,42.0074526 12.4561263,41.4592421 11.8194947,40.6129263 C11.1841263,39.7678737 10.9163368,38.7245053 11.0653895,37.6760842 L11.0653895,37.6760842 Z M19.6523368,5.39608421 C18.3247579,5.21545263 17.0767579,6.14008421 16.8860211,7.47397895 L16.8860211,7.47397895 L12.5660211,37.8895579 C12.4738105,38.5375579 12.6392842,39.1817684 13.0321263,39.7034526 C13.4249684,40.2264 13.9971789,40.5636632 14.6439158,40.6571368 L14.6439158,40.6571368 L28.3479158,42.6036632 C28.9921263,42.6933474 29.6388632,42.5291368 30.1605474,42.1362947 C30.6834947,41.7447158 31.0220211,41.1725053 31.1129684,40.5257684 L31.1129684,40.5257684 L35.4342316,10.1101895 C35.6237053,8.77376842 34.6914947,7.53208421 33.3563368,7.34261053 L33.3563368,7.34261053 Z M35.8825263,38.2693895 L38.4164211,40.5872842 L37.3945263,41.7051789 L34.8593684,39.3872842 L35.8825263,38.2693895 Z M19.4943158,37.7555368 C19.6901053,36.3774316 20.9709474,35.4149053 22.3503158,35.6094316 C23.0185263,35.7041684 23.6096842,36.0528 24.0151579,36.5934316 C24.4206316,37.1328 24.5911579,37.7972211 24.4964211,38.4641684 C24.3183158,39.7235368 23.2332632,40.6368 21.9966316,40.6368 C21.8791579,40.6368 21.7591579,40.6279579 21.6404211,40.6128 C20.9722105,40.5168 20.3810526,40.1681684 19.9755789,39.6275368 C19.5713684,39.0881684 19.3995789,38.4237474 19.4943158,37.7555368 Z M21.9953684,36.5946947 C21.2526316,36.5946947 20.6021053,37.1416421 20.4947368,37.8982737 C20.4378947,38.2974316 20.5402105,38.6978526 20.784,39.0212211 C21.0265263,39.3445895 21.3814737,39.5542737 21.7818947,39.6111158 C22.1823158,39.6730105 22.5827368,39.5656421 22.9061053,39.3218526 C23.2294737,39.0793263 23.4391579,38.7231158 23.496,38.3239579 L23.496,38.3239579 C23.5528421,37.9235368 23.4505263,37.5231158 23.2067368,37.1997474 C22.9642105,36.8763789 22.6092632,36.6666947 22.2088421,36.6111158 C22.1368421,36.5997474 22.0661053,36.5946947 21.9953684,36.5946947 Z M39.7250526,34.6016842 L39.7250526,36.1162105 L36.6378947,36.1162105 L36.6378947,34.6016842 L39.7250526,34.6016842 Z M10.5145263,11.4972632 L10.5145263,13.0117895 L7.42863158,13.0117895 L7.42863158,11.4972632 L10.5145263,11.4972632 Z M9.75890526,5.90741053 L12.2940632,8.22530526 L11.2709053,9.3432 L8.73701053,7.02530526 L9.75890526,5.90741053 Z M25.0808582,7.67817648 L25.1680421,7.68429474 L29.4577263,8.29313684 C29.7293053,8.33103158 29.9175158,8.5824 29.8783579,8.85397895 C29.8442526,9.10155789 29.6320421,9.27966316 29.3882526,9.27966316 C29.3655158,9.27966316 29.3415158,9.2784 29.3187789,9.27461053 L29.3187789,9.27461053 L25.0278316,8.66576842 C24.7562526,8.62787368 24.5680421,8.37524211 24.6072,8.10492632 C24.6450947,7.83461053 24.9053053,7.64008421 25.1680421,7.68429474 Z M23.4671106,7.52038467 L23.5437474,7.52463158 C23.7761684,7.55621053 23.9378526,7.77094737 23.9050105,8.00463158 C23.8709053,8.23705263 23.6561684,8.39747368 23.4237474,8.36589474 C23.1913263,8.33305263 23.0296421,8.11705263 23.0624842,7.88463158 C23.0953263,7.65347368 23.3113263,7.49052632 23.5437474,7.52463158 Z"
    />
  );

  return isExtraSmall ? (isHovered ? simplifiedHover : simplified) : isHovered ? normalHover : normal;
};

export default MobilePhone;
