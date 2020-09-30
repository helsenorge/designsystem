import React from 'react';
import {SvgPathProps} from './Icon';

const Wallet: React.FC<SvgPathProps> = ({isExtraSmall, isHovered}: SvgPathProps): JSX.Element => {
  const normal = (
    <path
      fillRule="evenodd"
      d="M40.4127,29.3682 L35.1727,29.3682 C34.0897,29.3682 33.2097,28.4882 33.2097,27.4052 C33.2097,26.3232 34.0897,25.4422 35.1727,25.4422 L40.4127,25.4422 L40.4127,29.3682 Z M39.0787,37.3192 C39.0787,37.8032 38.6837,38.1982 38.1997,38.1982 L24.6677,38.1982 L24.6677,34.1982 C24.6677,32.4382 20.9757,31.9692 18.7947,31.9692 C16.6137,31.9692 12.9217,32.4382 12.9217,34.1982 L12.9217,38.1982 L9.8357,38.1982 C9.3507,38.1982 8.9567,37.8032 8.9567,37.3192 L8.9567,15.5012 C9.3197,15.7032 9.7317,15.8292 10.1757,15.8292 L38.1997,15.8292 C38.6837,15.8292 39.0787,16.2232 39.0787,16.7082 L39.0787,24.1422 L35.1727,24.1422 C33.3727,24.1422 31.9097,25.6062 31.9097,27.4052 C31.9097,29.2042 33.3727,30.6682 35.1727,30.6682 L39.0787,30.6682 L39.0787,37.3192 Z M14.2507,34.1982 C14.5377,33.8852 16.0527,33.2692 18.7947,33.2692 C21.5367,33.2692 23.0517,33.8852 23.3387,34.1982 C23.0527,34.5102 21.5377,35.1262 18.7947,35.1262 C16.0517,35.1262 14.5377,34.5102 14.2507,34.1982 L14.2507,34.1982 Z M18.7947,36.4262 C20.1527,36.4262 22.0967,36.2432 23.3707,35.6812 L23.3727,36.9582 C22.9197,37.3212 21.3437,37.8652 18.7947,37.8652 C16.2537,37.8652 14.6807,37.3252 14.2217,36.9632 L14.2217,35.6822 C15.4957,36.2432 17.4367,36.4262 18.7947,36.4262 L18.7947,36.4262 Z M18.7947,40.4162 C15.8867,40.4162 14.3597,39.7242 14.2217,39.4882 L14.2217,38.1002 C15.3377,38.6192 17.1037,38.8652 18.7947,38.8652 C20.4887,38.8652 22.2597,38.6182 23.3747,38.0972 L23.3777,39.4352 C23.2297,39.7242 21.7027,40.4162 18.7947,40.4162 L18.7947,40.4162 Z M29.7877,6.7742 L33.3207,12.8102 L19.4767,12.8102 L29.7877,6.7742 Z M40.3777,24.1422 L40.3777,16.7082 C40.3777,15.5072 39.4007,14.5302 38.1997,14.5302 L10.1757,14.5302 C9.5037,14.5302 8.9567,13.9832 8.9567,13.3102 C8.9567,12.6382 9.5037,12.0912 10.1757,12.0912 L18.1317,12.0912 L17.0077,12.7492 L17.0437,12.8102 L11.0357,12.8102 L11.0357,13.8102 L17.6287,13.8102 L17.6647,13.8712 L17.7687,13.8102 L36.8107,13.8102 L36.8107,12.8102 L34.8277,12.8102 L30.2527,4.9952 L20.3517,10.7912 L10.1757,10.7912 C8.7867,10.7912 7.6567,11.9212 7.6567,13.3102 L7.6567,37.3192 C7.6567,38.5202 8.6347,39.4972 9.8357,39.4972 L12.9227,39.4972 C12.9367,41.2482 16.6177,41.7162 18.7947,41.7162 C20.9717,41.7162 24.6527,41.2482 24.6667,39.4972 L38.1997,39.4972 C39.4007,39.4972 40.3777,38.5202 40.3777,37.3192 L40.3777,30.6682 L41.7127,30.6682 L41.7127,24.1422 L40.3777,24.1422 Z"
    />
  );

  const normalHover = (
    <path
      fillRule="evenodd"
      d="M40.4125,29.3682 L35.1725,29.3682 C34.0905,29.3682 33.2095,28.4882 33.2095,27.4052 C33.2095,26.3232 34.0905,25.4422 35.1725,25.4422 L40.4125,25.4422 L40.4125,29.3682 Z M39.0785,37.3192 C39.0785,37.8032 38.6835,38.1982 38.1995,38.1982 L24.6675,38.1982 L24.6675,34.1982 C24.6675,32.4382 20.9755,31.9692 18.7945,31.9692 C16.6135,31.9692 12.9215,32.4382 12.9215,34.1982 L12.9215,38.1982 L9.8355,38.1982 C9.3505,38.1982 8.9565,37.8032 8.9565,37.3192 L8.9565,15.5012 C9.3195,15.7032 9.7315,15.8292 10.1755,15.8292 L38.1995,15.8292 C38.6835,15.8292 39.0785,16.2232 39.0785,16.7082 L39.0785,24.1422 L35.1725,24.1422 C33.3735,24.1422 31.9095,25.6062 31.9095,27.4052 C31.9095,29.2042 33.3735,30.6682 35.1725,30.6682 L39.0785,30.6682 L39.0785,37.3192 Z M14.2505,34.1982 C14.5375,33.8852 16.0525,33.2692 18.7945,33.2692 C21.5375,33.2692 23.0525,33.8852 23.3385,34.1982 C23.0525,34.5102 21.5375,35.1262 18.7945,35.1262 C16.0525,35.1262 14.5375,34.5102 14.2505,34.1982 L14.2505,34.1982 Z M18.7945,36.4262 C20.1535,36.4262 22.0965,36.2432 23.3705,35.6812 L23.3725,36.9582 C22.9195,37.3212 21.3435,37.8652 18.7945,37.8652 C16.2545,37.8652 14.6805,37.3252 14.2225,36.9632 L14.2225,35.6822 C15.4955,36.2432 17.4365,36.4262 18.7945,36.4262 L18.7945,36.4262 Z M18.7945,40.4162 C15.8875,40.4162 14.3595,39.7242 14.2225,39.4882 L14.2225,38.1002 C15.3375,38.6192 17.1045,38.8652 18.7945,38.8652 C20.4885,38.8652 22.2595,38.6182 23.3745,38.0972 L23.3775,39.4352 C23.2295,39.7242 21.7025,40.4162 18.7945,40.4162 L18.7945,40.4162 Z M29.7875,4.5242 L34.6385,12.8102 L15.6335,12.8102 L29.7875,4.5242 Z M40.3785,24.1422 L40.3785,16.7082 C40.3785,15.5072 39.4005,14.5302 38.1995,14.5302 L10.1755,14.5302 C9.5035,14.5302 8.9565,13.9832 8.9565,13.3102 C8.9565,12.6382 9.5035,12.0912 10.1755,12.0912 L14.2875,12.0912 L13.1635,12.7492 L13.1995,12.8102 L11.0355,12.8102 L11.0355,13.8102 L13.7855,13.8102 L13.8205,13.8712 L13.9255,13.8102 L35.2245,13.8102 L35.2435,13.8442 L35.3015,13.8102 L36.8105,13.8102 L36.8105,12.8102 L36.1445,12.8102 L30.2525,2.7452 L16.5085,10.7912 L10.1755,10.7912 C8.7875,10.7912 7.6565,11.9212 7.6565,13.3102 L7.6565,37.3192 C7.6565,38.5202 8.6345,39.4972 9.8355,39.4972 L12.9235,39.4972 C12.9365,41.2482 16.6175,41.7162 18.7945,41.7162 C20.9725,41.7162 24.6525,41.2482 24.6665,39.4972 L38.1995,39.4972 C39.4005,39.4972 40.3785,38.5202 40.3785,37.3192 L40.3785,30.6682 L41.7125,30.6682 L41.7125,24.1422 L40.3785,24.1422 Z"
    />
  );

  const simplified = (
    <path
      fillRule="evenodd"
      d="M40.2991579,29.2548632 L35.0406316,29.2548632 C33.948,29.2548632 33.06,28.3656 33.06,27.2729684 C33.06,26.1816 33.948,25.2923368 35.0406316,25.2923368 L40.2991579,25.2923368 L40.2991579,29.2548632 Z M38.9652632,37.1874947 C38.9652632,37.6813895 38.5623158,38.0843368 38.0671579,38.0843368 L24.5172632,38.0843368 L24.5172632,34.0662316 C24.5172632,32.3218105 20.8376842,31.8557053 18.6637895,31.8557053 C16.4886316,31.8557053 12.8090526,32.3218105 12.8090526,34.0662316 L12.8090526,38.0843368 L9.70421053,38.0843368 C9.20905263,38.0843368 8.80736842,37.6813895 8.80736842,37.1874947 L8.80736842,15.3386526 C9.17368421,15.5496 9.59178947,15.6784421 10.044,15.6784421 L38.0671579,15.6784421 C38.5623158,15.6784421 38.9652632,16.0813895 38.9652632,16.5765474 L38.9652632,24.0291789 L35.0406316,24.0291789 C33.252,24.0291789 31.7968421,25.4843368 31.7968421,27.2729684 C31.7968421,29.0628632 33.252,30.5180211 35.0406316,30.5180211 L38.9652632,30.5180211 L38.9652632,37.1874947 Z M14.0722105,34.1167579 L14.0722105,34.1016 C14.2338947,33.8060211 15.7522105,33.1188632 18.6637895,33.1188632 C21.4578947,33.1188632 22.9724211,33.7529684 23.2326316,34.0662316 C22.9724211,34.3782316 21.4578947,35.0123368 18.6637895,35.0123368 C15.7522105,35.0123368 14.2338947,34.3264421 14.0722105,34.1167579 L14.0722105,34.1167579 Z M18.6637895,36.2754947 C20.0292632,36.2754947 21.9871579,36.0923368 23.2566316,35.5226526 L23.2578947,36.8072842 C22.8271579,37.1685474 21.2330526,37.7281263 18.6637895,37.7281263 C16.0995789,37.7281263 14.5067368,37.1710737 14.0722105,36.8123368 L14.0722105,35.5239158 C15.3404211,36.0923368 17.2983158,36.2754947 18.6637895,36.2754947 L18.6637895,36.2754947 Z M18.6637895,40.3037053 C15.7269474,40.3037053 14.2048421,39.6039158 14.0722105,39.3576 L14.0722105,37.9643368 C15.1875789,38.4885474 16.9623158,38.7386526 18.6637895,38.7386526 C20.3665263,38.7386526 22.1450526,38.4885474 23.2604211,37.9618105 L23.2616842,39.3121263 C23.1214737,39.6039158 21.5981053,40.3037053 18.6637895,40.3037053 L18.6637895,40.3037053 Z M10.044,11.9407579 L19.7538947,11.9407579 L15.5273684,14.4152842 L10.044,14.4152842 C9.36189474,14.4152842 8.80736842,13.8607579 8.80736842,13.1786526 C8.80736842,12.4965474 9.36189474,11.9407579 10.044,11.9407579 L10.044,11.9407579 Z M29.6633684,7.60433684 L33.6498947,14.4152842 L18.0271579,14.4152842 L29.6633684,7.60433684 Z M40.2284211,24.0291789 L40.2284211,16.5765474 C40.2284211,15.3853895 39.2583158,14.4152842 38.0671579,14.4152842 L35.1138947,14.4152842 L30.1143158,5.87633684 L21.8583158,10.7091789 L21.8583158,10.6776 L10.044,10.6776 C8.66589474,10.6776 7.54421053,11.8005474 7.54421053,13.1786526 L7.54421053,37.1874947 C7.54421053,38.3786526 8.51305263,39.3474947 9.70421053,39.3474947 L12.8090526,39.3474947 L12.8090526,39.3576 C12.8090526,41.1007579 16.4886316,41.5668632 18.6637895,41.5668632 C20.8376842,41.5668632 24.5172632,41.1007579 24.5172632,39.3576 L24.5172632,39.3474947 L38.0671579,39.3474947 C39.2583158,39.3474947 40.2284211,38.3786526 40.2284211,37.1874947 L40.2284211,30.5180211 L41.5623158,30.5180211 L41.5623158,24.0291789 L40.2284211,24.0291789 Z"
    />
  );

  const simplifiedHover = (
    <path
      fillRule="evenodd"
      d="M40.2994105,29.2548632 L35.0408842,29.2548632 C33.9482526,29.2548632 33.0602526,28.3656 33.0602526,27.2729684 C33.0602526,26.1816 33.9482526,25.2923368 35.0408842,25.2923368 L40.2994105,25.2923368 L40.2994105,29.2548632 Z M38.9642526,37.1874947 C38.9642526,37.6813895 38.5625684,38.0843368 38.0674105,38.0843368 L24.5175158,38.0843368 L24.5175158,34.0662316 C24.5175158,32.3218105 20.8379368,31.8557053 18.6627789,31.8557053 C16.4888842,31.8557053 12.8093053,32.3218105 12.8093053,34.0662316 L12.8093053,38.0843368 L9.70446316,38.0843368 C9.20930526,38.0843368 8.80635789,37.6813895 8.80635789,37.1874947 L8.80635789,15.3386526 C9.17267368,15.5496 9.59204211,15.6784421 10.0442526,15.6784421 L38.0674105,15.6784421 C38.5625684,15.6784421 38.9642526,16.0813895 38.9642526,16.5765474 L38.9642526,24.0291789 L35.0408842,24.0291789 C33.2509895,24.0291789 31.7970947,25.4843368 31.7970947,27.2729684 C31.7970947,29.0628632 33.2509895,30.5180211 35.0408842,30.5180211 L38.9642526,30.5180211 L38.9642526,37.1874947 Z M14.0724632,34.1167579 L14.0724632,34.1016 C14.2341474,33.8060211 15.7524632,33.1188632 18.6627789,33.1188632 C21.4568842,33.1188632 22.9726737,33.7529684 23.2328842,34.0662316 C22.9726737,34.3782316 21.4568842,35.0123368 18.6627789,35.0123368 C15.7524632,35.0123368 14.2341474,34.3264421 14.0724632,34.1167579 L14.0724632,34.1167579 Z M18.6627789,36.2754947 C20.0295158,36.2754947 21.9874105,36.0923368 23.2568842,35.5226526 L23.2581474,36.8072842 C22.8274105,37.1685474 21.2333053,37.7281263 18.6627789,37.7281263 C16.0985684,37.7281263 14.5069895,37.1710737 14.0724632,36.8123368 L14.0724632,35.5239158 C15.3406737,36.0923368 17.2985684,36.2754947 18.6627789,36.2754947 L18.6627789,36.2754947 Z M18.6627789,40.3037053 C15.7272,40.3037053 14.2050947,39.6039158 14.0724632,39.3576 L14.0724632,37.9643368 C15.1878316,38.4885474 16.9625684,38.7386526 18.6627789,38.7386526 C20.3655158,38.7386526 22.1440421,38.4885474 23.2606737,37.9618105 L23.2619368,39.3121263 C23.1217263,39.6039158 21.5983579,40.3037053 18.6627789,40.3037053 L18.6627789,40.3037053 Z M10.0442526,11.9407579 L15.9103579,11.9407579 L11.6989895,14.4077053 L11.7040421,14.4152842 L10.0442526,14.4152842 C9.36214737,14.4152842 8.80635789,13.8607579 8.80635789,13.1786526 C8.80635789,12.4965474 9.36214737,11.9407579 10.0442526,11.9407579 L10.0442526,11.9407579 Z M29.6623579,5.35465263 L34.9676211,14.4152842 L14.1836211,14.4152842 L29.6623579,5.35465263 Z M40.2274105,24.0291789 L40.2274105,16.5765474 C40.2274105,15.3853895 39.2585684,14.4152842 38.0674105,14.4152842 L36.4303579,14.4152842 L30.1145684,3.62538947 L18.0678316,10.6776 L10.0442526,10.6776 C8.66614737,10.6776 7.5432,11.8005474 7.5432,13.1786526 L7.5432,37.1874947 C7.5432,38.3786526 8.51204211,39.3474947 9.70446316,39.3474947 L12.8093053,39.3474947 L12.8093053,39.3576 C12.8093053,41.1007579 16.4888842,41.5668632 18.6627789,41.5668632 C20.8379368,41.5668632 24.5175158,41.1007579 24.5175158,39.3576 L24.5175158,39.3474947 L38.0674105,39.3474947 C39.2585684,39.3474947 40.2274105,38.3786526 40.2274105,37.1874947 L40.2274105,30.5180211 L41.5625684,30.5180211 L41.5625684,24.0291789 L40.2274105,24.0291789 Z"
    />
  );

  return isExtraSmall ? (isHovered ? simplifiedHover : simplified) : isHovered ? normalHover : normal;
};

export default Wallet;
