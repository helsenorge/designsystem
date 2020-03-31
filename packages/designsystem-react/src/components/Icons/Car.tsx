import React from 'react';
import {IconRawProps} from './Icon';

const Car = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const hasHover = true;
  const {size = 48, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  return !isHovered || !hasHover ? (
    <svg width={size} height={size} viewBox="0 0 48 48" ref={ref} className="icon" {...props}>
      <path
        fill={color}
        fill-rule="evenodd"
        d="M20.9741,29.3742 L20.9811,30.6752 L27.0281,30.6442 L27.0211,29.3432 L20.9741,29.3742 Z M16.6451,30.7862 C16.4491,30.9852 16.1861,31.0962 15.9071,31.0972 C15.6471,31.0772 15.3641,30.9912 15.1651,30.7942 C14.9661,30.5982 14.8561,30.3362 14.8540857,30.0572 C14.8511,29.4782 15.3191,29.0072 15.8961,29.0042 L15.9021,29.0042 C16.1791,29.0042 16.4401,29.1112 16.6381,29.3072 C16.8361,29.5032 16.9471,29.7662 16.9481,30.0452 C16.9501,30.3242 16.8421,30.5882 16.6451,30.7862 L16.6451,30.7862 Z M15.9021,27.7032 L15.8891,27.7032 C14.5951,27.7102 13.5481,28.7692 13.5550651,30.0622 C13.5571,30.6892 13.8051,31.2772 14.2501,31.7192 C14.6931,32.1562 15.2791,32.3972 15.9011,32.3972 L15.9131,32.3972 C16.5401,32.3942 17.1281,32.1462 17.5701,31.7012 C18.0111,31.2562 18.2511,30.6652 18.2481278,30.0392 C18.2451,29.4122 17.9981,28.8232 17.5521,28.3832 C17.1101,27.9442 16.5241,27.7032 15.9021,27.7032 L15.9021,27.7032 Z M32.8451,30.7022 C32.6461,30.9022 32.3811,31.0182 32.1001,31.0132 C31.5251,31.0132 31.0561,30.5472 31.0530856,29.9732 C31.0501,29.3952 31.5171,28.9232 32.0951,28.9202 C32.3791,28.9232 32.6381,29.0262 32.8371,29.2232 C33.0361,29.4192 33.1461,29.6822 33.1471,29.9612 C33.1491,30.2402 33.0411,30.5042 32.8451,30.7022 L32.8451,30.7022 Z M32.0881,27.6192 C30.7941,27.6262 29.7461,28.6852 29.7530651,29.9782 C29.7601,31.2692 30.8111,32.3132 32.1001,32.3132 L32.1131,32.3132 C32.7391,32.3102 33.3281,32.0622 33.7681,31.6172 C34.2091,31.1722 34.4511,30.5812 34.4471,29.9552 C34.4441,29.3272 34.1971,28.7392 33.7511,28.2992 C33.3061,27.8582 32.7261,27.6562 32.0881,27.6192 L32.0881,27.6192 Z M10.7631,35.3452 L10.7061,24.4562 L37.2371,24.3182 L37.2931,35.2072 L10.7631,35.3452 Z M33.1461,39.6232 C32.8841,39.8712 32.5311,40.0092 32.1521,40.0112 L32.1441,40.0112 C31.3841,40.0112 30.7631,39.4532 30.7601,38.7642 L30.7481,36.5412 L33.5211,36.5262 L33.5321216,38.7492 C33.5341,39.0762 33.3971,39.3872 33.1461,39.6232 L33.1461,39.6232 Z M16.9481,39.7072 C16.6851,39.9552 16.3321,40.0932 15.9531,40.0952 L15.9451,40.0952 C15.1841,40.0952 14.5641,39.5372 14.5601,38.8482 L14.5491,36.6252 L17.3221,36.6102 L17.3331216,38.8332 C17.3351,39.1602 17.1981,39.4712 16.9481,39.7072 L16.9481,39.7072 Z M14.7751,13.8552 C14.8951,13.2702 15.4161,12.8422 16.0141,12.8392 L31.8091,12.7572 L31.8161,12.7572 C32.4111,12.7572 32.9331,13.1782 33.0591,13.7602 L35.0571,23.0302 L12.8721,23.1452 L14.7751,13.8552 Z M38.6001,36.5002 L38.5301,23.0122 L36.3861,23.0222 L34.3291,13.4862 C34.0751,12.3032 33.0151,11.4522 31.8021,11.456186 L16.0071,11.5382 C14.7981,11.5452 13.7441,12.4092 13.5011,13.5942 L11.5441,23.1512 L9.4001,23.1632 L9.4701,36.6512 L13.2491,36.6322 L13.2611,38.8532 C13.2681,40.2582 14.4711,41.3952 15.9451,41.3952 L15.9601,41.3952 C16.6691,41.3922 17.3371,41.1282 17.8401,40.6522 C18.3551,40.1662 18.6371,39.5182 18.6331,38.8272 L18.6221,36.6032 L29.4481,36.5482 L29.4591,38.7702 C29.4671,40.1742 30.6701,41.3122 32.1441,41.3122 L32.1591,41.3122 C32.8691,41.3082 33.5371,41.0442 34.0391,40.5682 C34.5541,40.0822 34.8361,39.4342 34.8321,38.7432 L34.8211,36.5202 L38.6001,36.5002 Z"
      />
    </svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 48 48" ref={ref} className="icon" {...props}>
      <path
        fill={color}
        fill-rule="evenodd"
        d="M32.1056,29.213 C31.8146,29.222 31.5626,29.107 31.3636,28.91 C31.1656,28.714 31.0546,28.451 31.0536,28.172 C31.0516,27.893 31.1596,27.629 31.3556,27.431 C31.5546,27.231 31.8166,27.073 32.1006,27.12 C32.6756,27.12 33.1446,27.586 33.1476143,28.16 C33.1506,28.738 32.6826,29.21 32.1056,29.213 L32.1056,29.213 Z M32.1006,25.819 L32.0876,25.819 C31.4616,25.823 30.8736,26.07 30.4326,26.516 C29.9916,26.961 29.7506,27.552 29.7535723,28.178 C29.7566,28.806 30.0036,29.394 30.4496,29.834 C30.8916,30.273 31.4776,30.514 32.0996,30.514 L32.1126,30.514 C33.4066,30.507 34.4546,29.448 34.4476349,28.154 C34.4406,26.864 33.3886,25.819 32.1006,25.819 L32.1006,25.819 Z M10.7636,33.544 L10.7066,22.656 L37.2366,22.519 L37.2926,33.407 L10.7636,33.544 Z M33.1466,39.623 C32.8836,39.871 32.5306,40.009 32.1526,40.011 C31.7636,40.008 31.4196,39.879 31.1546,39.634 C30.9016,39.4 30.7616,39.091 30.7596,38.765 L30.7466,34.741 L33.5186,34.727 L33.5326055,38.749 C33.5336,39.076 33.3976,39.387 33.1466,39.623 L33.1466,39.623 Z M15.9536,40.095 L15.9456,40.095 C15.1846,40.095 14.5636,39.537 14.5606,38.849 L14.5476,34.824 L17.3196,34.81 L17.3336109,38.833 C17.3366,39.526 16.7176,40.091 15.9536,40.095 L15.9536,40.095 Z M14.7746,12.056 C14.8946,11.47 15.4166,11.042 16.0146,11.039 L31.8096,10.957 L31.8156,10.957 C32.4116,10.957 32.9336,11.378 33.0586,11.96 L35.0576,21.23 L12.8726,21.345 L14.7746,12.056 Z M38.5996,34.7 L38.5296,21.212 L36.3856,21.224 L34.3296,11.687 C34.0746,10.503 33.0196,9.601 31.8026,9.656 L16.0076,9.738 C14.7976,9.745 13.7446,10.609 13.5016,11.794 L11.5436,21.353 L9.3996,21.363 L9.4696,34.851 L13.2476,34.831 L13.2606,38.854 C13.2676,40.258 14.4706,41.396 15.9456,41.396 L15.9596,41.396 C17.4416,41.388 18.6406,40.235 18.6336,38.828 L18.6206,34.804 L29.4466,34.747 L29.4596,38.77 C29.4626,39.461 29.7516,40.107 30.2716,40.588 C30.7756,41.055 31.4396,41.312 32.1446,41.312 L32.1596,41.312 C32.8686,41.308 33.5366,41.044 34.0396,40.568 C34.5546,40.082 34.8356,39.434 34.8326,38.744 L34.8186,34.72 L38.5996,34.7 Z M15.9066,29.297 L15.9016,29.297 C15.6236,29.297 15.3626,29.19 15.1656,28.994 C14.9656,28.798 14.8556,28.535 14.8545856,28.256 C14.8516,27.679 15.3186,27.207 15.8966,27.204 L15.9016,27.204 C16.4766,27.204 16.9456,27.67 16.9486143,28.244 C16.9516,28.822 16.4836,29.294 15.9066,29.297 L15.9066,29.297 Z M15.9016,25.903 L15.8896,25.903 C14.5956,25.91 13.5476,26.969 13.5545651,28.262 C13.5576,28.89 13.8046,29.478 14.2506,29.918 C14.6926,30.357 15.2786,30.598 15.9006,30.598 L15.9136,30.598 C17.2076,30.591 18.2546,29.532 18.2486257,28.238 C18.2416,26.948 17.1896,25.903 15.9016,25.903 L15.9016,25.903 Z M20.9736,27.573 L20.9806,28.874 L27.0276,28.843 L27.0206,27.542 L20.9736,27.573 Z"
      />
    </svg>
  );
});

export default Car;
