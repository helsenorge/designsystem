import React from 'react';
import {IconRawProps} from './Icon';

const Breasts = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, className, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <path
      fillRule="evenodd"
      d="M5.0046,15.4712 C5.0046,16.9652 5.7976,18.3492 7.0506,19.1272 C7.9476,18.1492 9.0306,17.3282 10.2846,16.7522 L10.2846,16.7522 L10.2846,18.2022 C7.4546,19.7522 5.6756,22.7122 5.6756,25.9922 C5.6756,30.8922 9.6656,34.8822 14.5656,34.8822 C18.7256,34.8822 22.2846,32.0522 23.2256,28.0022 L23.2256,28.0022 L23.3456,27.5022 L24.6546,27.5022 L24.7756,28.0022 C25.7156,32.0522 29.2756,34.8822 33.4356,34.8822 C38.3356,34.8822 42.3256,30.8922 42.3256,25.9922 C42.3256,22.7122 40.5446,19.7522 37.7156,18.2022 L37.7156,18.2022 L37.7156,16.7522 C38.9706,17.3252 40.0546,18.1462 40.9516,19.1252 C42.2046,18.3462 42.9956,16.9632 42.9956,15.4712 L42.9956,15.4712 L44.2966,15.4712 C44.2966,17.3622 43.3256,19.1242 41.7716,20.1512 C42.9446,21.8252 43.6246,23.8442 43.6246,25.9922 C43.6246,31.6122 39.0556,36.1822 33.4356,36.1822 C29.2156,36.1822 25.5346,33.6422 24.0056,29.8522 C22.4656,33.6422 18.7846,36.1822 14.5656,36.1822 C8.9446,36.1822 4.3746,31.6122 4.3746,25.9922 C4.3746,23.8432 5.0566,21.8262 6.2326,20.1522 C4.6756,19.1252 3.7036,17.3632 3.7036,15.4712 L3.7036,15.4712 Z M12.3201,23.9028 C14.0641,23.9028 15.4831,25.3218 15.4831,27.0668 C15.4831,28.8108 14.0641,30.2298 12.3201,30.2298 C10.5751,30.2298 9.1561,28.8108 9.1561,27.0668 C9.1561,25.3218 10.5751,23.9028 12.3201,23.9028 Z M35.6804,23.9028 C37.4244,23.9028 38.8434,25.3218 38.8434,27.0668 C38.8434,28.8108 37.4244,30.2298 35.6804,30.2298 C33.9364,30.2298 32.5174,28.8108 32.5174,27.0668 C32.5174,25.3218 33.9364,23.9028 35.6804,23.9028 Z M12.3201,24.9028 C11.1271,24.9028 10.1561,25.8738 10.1561,27.0668 C10.1561,28.2588 11.1271,29.2298 12.3201,29.2298 C13.5121,29.2298 14.4831,28.2588 14.4831,27.0668 C14.4831,25.8738 13.5121,24.9028 12.3201,24.9028 Z M35.6804,24.9028 C34.4884,24.9028 33.5174,25.8738 33.5174,27.0668 C33.5174,28.2588 34.4884,29.2298 35.6804,29.2298 C36.8724,29.2298 37.8434,28.2588 37.8434,27.0668 C37.8434,25.8738 36.8724,24.9028 35.6804,24.9028 Z M12.3201,26.1658 C12.8171,26.1658 13.2201,26.5688 13.2201,27.0668 C13.2201,27.5638 12.8171,27.9668 12.3201,27.9668 C11.8221,27.9668 11.4201,27.5638 11.4201,27.0668 C11.4201,26.5688 11.8221,26.1658 12.3201,26.1658 Z M35.6804,26.1658 C36.1774,26.1658 36.5804,26.5688 36.5804,27.0668 C36.5804,27.5638 36.1774,27.9668 35.6804,27.9668 C35.1834,27.9668 34.7804,27.5638 34.7804,27.0668 C34.7804,26.5688 35.1834,26.1658 35.6804,26.1658 Z"
    />
  );

  const normalHover = (
    <path
      fillRule="evenodd"
      d="M5.0044,15.4712 C5.0044,17.0512 5.8924,18.5072 7.2754,19.2532 C8.0574,18.1752 9.0664,17.3252 10.2934,16.7522 L10.2934,16.7522 L10.2934,18.2222 C7.3234,19.9422 6.6734,23.3322 6.6734,25.9922 C6.6734,30.8922 10.6634,34.8822 15.5634,34.8822 C19.4234,34.8822 22.2134,32.3722 23.2234,28.0022 L23.2234,28.0022 L23.3434,27.5022 L24.6634,27.5022 L24.7734,28.0022 C25.7824,32.3722 28.5834,34.8822 32.4334,34.8822 C37.3334,34.8822 41.3234,30.8922 41.3234,25.9922 C41.3234,23.3422 40.6734,19.9522 37.7134,18.2222 L37.7134,18.2222 L37.7134,16.7522 C38.9394,17.3282 39.9444,18.1772 40.7264,19.2532 C42.1084,18.5072 42.9954,17.0512 42.9954,15.4712 L42.9954,15.4712 L44.2964,15.4712 C44.2964,17.5032 43.1674,19.3772 41.4044,20.3582 C42.2004,21.9042 42.6234,23.8012 42.6234,25.9922 C42.6234,31.6122 38.0534,36.1822 32.4334,36.1822 C28.5134,36.1822 25.4524,33.8822 24.0034,29.9522 C22.5534,33.8822 19.4934,36.1822 15.5634,36.1822 C9.9424,36.1822 5.3734,31.6122 5.3734,25.9922 C5.3734,23.8022 5.7974,21.9052 6.5954,20.3582 C4.8324,19.3762 3.7034,17.5032 3.7034,15.4712 L3.7034,15.4712 Z M13.3198,23.9028 C15.0638,23.9028 16.4828,25.3218 16.4828,27.0668 C16.4828,28.8108 15.0638,30.2298 13.3198,30.2298 C11.5758,30.2298 10.1568,28.8108 10.1568,27.0668 C10.1568,25.3218 11.5758,23.9028 13.3198,23.9028 Z M34.6802,23.9028 C36.4242,23.9028 37.8432,25.3218 37.8432,27.0668 C37.8432,28.8108 36.4242,30.2298 34.6802,30.2298 C32.9362,30.2298 31.5172,28.8108 31.5172,27.0668 C31.5172,25.3218 32.9362,23.9028 34.6802,23.9028 Z M13.3198,24.9028 C12.1278,24.9028 11.1568,25.8738 11.1568,27.0668 C11.1568,28.2588 12.1278,29.2298 13.3198,29.2298 C14.5118,29.2298 15.4828,28.2588 15.4828,27.0668 C15.4828,25.8738 14.5118,24.9028 13.3198,24.9028 Z M34.6802,24.9028 C33.4882,24.9028 32.5172,25.8738 32.5172,27.0668 C32.5172,28.2588 33.4882,29.2298 34.6802,29.2298 C35.8722,29.2298 36.8432,28.2588 36.8432,27.0668 C36.8432,25.8738 35.8722,24.9028 34.6802,24.9028 Z M13.3198,26.1658 C13.8168,26.1658 14.2198,26.5688 14.2198,27.0668 C14.2198,27.5638 13.8168,27.9668 13.3198,27.9668 C12.8218,27.9668 12.4198,27.5638 12.4198,27.0668 C12.4198,26.5688 12.8218,26.1658 13.3198,26.1658 Z M34.6802,26.1658 C35.1772,26.1658 35.5812,26.5688 35.5812,27.0668 C35.5812,27.5638 35.1772,27.9668 34.6802,27.9668 C34.1832,27.9668 33.7802,27.5638 33.7802,27.0668 C33.7802,26.5688 34.1832,26.1658 34.6802,26.1658 Z"
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
      {isHovered ? normalHover : normal}
    </svg>
  );
});

export default Breasts;
