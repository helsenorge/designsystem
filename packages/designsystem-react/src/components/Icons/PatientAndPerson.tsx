import React from 'react';
import {IconRawProps} from './Icon';

const PatientAndPerson = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, className, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <path
      fillRule="evenodd"
      d="M24.6998,12.6081 L29.2718,12.6081 C30.7618,12.6081 32.0628,11.7871 32.7468,10.5731 C33.4178,11.7851 34.7098,12.6081 36.1908,12.6081 L36.8808,12.6081 L36.8808,14.5571 C36.8808,17.8091 34.2348,20.4541 30.9838,20.4541 L30.5968,20.4541 C27.3458,20.4541 24.6998,17.8091 24.6998,14.5571 L24.6998,12.6081 Z M24.6998,11.3451 C24.6998,8.0941 27.3458,5.4481 30.5968,5.4481 L30.9838,5.4481 C34.2348,5.4481 36.8808,8.0941 36.8808,11.3451 L36.8808,11.6081 L36.1908,11.6081 C34.5738,11.6081 33.2578,10.2921 33.2578,8.6751 L33.2578,8.4151 L32.2578,8.4151 L32.2578,8.6231 C32.2578,10.2691 30.9178,11.6081 29.2718,11.6081 L24.6998,11.6081 L24.6998,11.3451 Z M30.5968,21.7541 L30.9838,21.7541 C34.9518,21.7541 38.1798,18.5251 38.1798,14.5571 L38.1798,11.3451 C38.1798,7.3771 34.9518,4.1491 30.9838,4.1491 L30.5968,4.1491 C26.6288,4.1491 23.3998,7.3771 23.3998,11.3451 L23.3998,14.5571 C23.3998,18.5251 26.6288,21.7541 30.5968,21.7541 L30.5968,21.7541 Z M13.3638,15.6401 C13.6408,15.6401 13.8668,15.4161 13.8668,15.1381 C13.8668,14.8601 13.6408,14.6361 13.3638,14.6361 C13.0858,14.6361 12.8618,14.8601 12.8618,15.1381 C12.8618,15.4161 13.0858,15.6401 13.3638,15.6401 L13.3638,15.6401 Z M8.1938,12.8161 L10.4208,12.8161 C11.9478,12.8161 13.2788,11.9621 13.9628,10.7081 C14.6598,11.9641 15.9998,12.8161 17.5358,12.8161 L20.7558,12.8161 L20.7558,14.8341 C20.7558,18.1881 18.0278,20.9171 14.6738,20.9171 L14.2758,20.9171 C10.9218,20.9171 8.1938,18.1881 8.1938,14.8341 L8.1938,12.8161 Z M8.1938,11.5311 C8.1938,8.1771 10.9218,5.4481 14.2758,5.4481 L14.6738,5.4481 C18.0278,5.4481 20.7558,8.1771 20.7558,11.5311 L20.7558,11.8161 L17.5358,11.8161 C15.8348,11.8161 14.4518,10.4321 14.4518,8.7311 L14.4518,8.5181 L13.4518,8.5181 L13.4518,8.7851 C13.4518,10.4561 12.0918,11.8161 10.4208,11.8161 L8.1938,11.8161 L8.1938,11.5311 Z M14.2758,22.2161 L14.6738,22.2161 C18.7438,22.2161 22.0558,18.9051 22.0558,14.8341 L22.0558,11.5311 C22.0558,7.4601 18.7438,4.1491 14.6738,4.1491 L14.2758,4.1491 C10.2048,4.1491 6.8938,7.4601 6.8938,11.5311 L6.8938,14.8341 C6.8938,18.9051 10.2048,22.2161 14.2758,22.2161 L14.2758,22.2161 Z M18.6568,15.6401 C18.9338,15.6401 19.1588,15.4161 19.1588,15.1381 C19.1588,14.8601 18.9338,14.6361 18.6568,14.6361 C18.3798,14.6361 18.1548,14.8601 18.1548,15.1381 C18.1548,15.4161 18.3798,15.6401 18.6568,15.6401 L18.6568,15.6401 Z M28.1818,15.3411 C28.4518,15.3411 28.6708,15.1231 28.6708,14.8531 C28.6708,14.5831 28.4518,14.3641 28.1818,14.3641 C27.9118,14.3641 27.6938,14.5831 27.6938,14.8531 C27.6938,15.1231 27.9118,15.3411 28.1818,15.3411 L28.1818,15.3411 Z M43.9118,36.7701 L41.6248,36.7751 L41.6248,36.7691 L37.2608,36.7691 L33.0188,32.3531 L33.0188,32.3531 L33.0188,32.3531 L25.0478,24.0541 C25.2688,23.9581 25.4978,23.8781 25.7268,23.7971 L43.8888,33.1741 C43.8978,33.3491 43.9118,33.5231 43.9118,33.7001 L43.9118,36.7701 Z M32.2438,33.6521 L33.0188,33.6521 L33.0188,33.6521 L36.0128,36.7691 L32.2438,36.7691 C31.3848,36.7691 30.6858,36.0701 30.6858,35.2111 C30.6858,34.3521 31.3848,33.6521 32.2438,33.6521 L32.2438,33.6521 Z M39.3398,41.1661 L26.4108,41.1661 L26.4108,32.7051 C26.4108,29.7911 25.1328,27.0851 23.0568,25.2051 C23.4248,24.9371 23.8038,24.6871 24.1998,24.4701 L31.8128,32.3961 C30.4418,32.6061 29.3858,33.7821 29.3858,35.2111 C29.3858,36.7871 30.6678,38.0691 32.2438,38.0691 L39.3398,38.0691 L39.3398,41.1661 Z M25.1108,41.1661 L22.0368,41.1661 L22.0368,34.2181 L21.1368,34.2181 L21.1368,41.1661 L7.8128,41.1661 L7.8128,34.2181 L6.9128,34.2181 L6.9128,41.1661 L3.8388,41.1661 L3.8388,32.7051 C3.8388,28.8921 6.3388,25.4791 9.9498,24.3161 C12.7448,25.7091 16.2038,25.7091 18.9998,24.3161 C22.6108,25.4791 25.1108,28.8921 25.1108,32.7051 L25.1108,41.1661 Z M30.5968,24.8431 L30.9838,24.8431 C32.7088,24.8431 34.3968,24.3721 35.8818,23.4771 C40.0278,24.4871 43.1368,27.9601 43.7828,32.1061 L29.5908,24.7791 C29.9248,24.8151 30.2598,24.8431 30.5968,24.8431 L30.5968,24.8431 Z M35.9048,22.1491 L35.6418,22.0911 L35.4148,22.2371 C34.0838,23.0911 32.5518,23.5431 30.9838,23.5431 L30.5968,23.5431 C29.1498,23.5431 27.7178,23.1521 26.4548,22.4131 L26.2138,22.2721 L25.9458,22.3501 C24.5088,22.7671 23.1938,23.4551 22.0128,24.3711 C21.1418,23.7701 20.1698,23.2981 19.1178,22.9931 L18.8648,22.9201 L18.6318,23.0441 C16.0888,24.3981 12.8608,24.3981 10.3178,23.0441 L10.0848,22.9201 L9.8308,22.9931 C5.5368,24.2381 2.5378,28.2321 2.5378,32.7051 L2.5378,42.4661 L40.6398,42.4661 L40.6398,38.0761 L45.2118,38.0681 L45.2118,33.7001 C45.2118,28.1781 41.2978,23.3201 35.9048,22.1491 L35.9048,22.1491 Z M33.3288,15.3411 C33.5988,15.3411 33.8178,15.1231 33.8178,14.8531 C33.8178,14.5831 33.5988,14.3641 33.3288,14.3641 C33.0598,14.3641 32.8408,14.5831 32.8408,14.8531 C32.8408,15.1231 33.0598,15.3411 33.3288,15.3411 L33.3288,15.3411 Z"
    />
  );

  const normalHover = (
    <path
      fillRule="evenodd"
      d="M13.3638,16.6403 C13.6408,16.6403 13.8658,16.4153 13.8658,16.1383 C13.8658,15.8603 13.6408,15.6363 13.3638,15.6363 C13.0858,15.6363 12.8618,15.8603 12.8618,16.1383 C12.8618,16.4153 13.0858,16.6403 13.3638,16.6403 L13.3638,16.6403 Z M18.6568,16.6403 C18.9338,16.6403 19.1588,16.4153 19.1588,16.1383 C19.1588,15.8603 18.9338,15.6363 18.6568,15.6363 C18.3798,15.6363 18.1548,15.8603 18.1548,16.1383 C18.1548,16.4153 18.3798,16.6403 18.6568,16.6403 L18.6568,16.6403 Z M8.1938,13.8153 L10.4218,13.8153 C11.9478,13.8153 13.2788,12.9623 13.9628,11.7073 C14.6598,12.9643 16.0008,13.8153 17.5358,13.8153 L20.7568,13.8153 L20.7568,14.8343 C20.7568,18.1883 18.0278,20.9163 14.6738,20.9163 L14.2758,20.9163 C10.9218,20.9163 8.1938,18.1883 8.1938,14.8343 L8.1938,13.8153 Z M8.1938,11.5313 C8.1938,8.1773 10.9218,5.4483 14.2758,5.4483 L14.6738,5.4483 C18.0278,5.4483 20.7568,8.1773 20.7568,11.5313 L20.7568,12.8153 L17.5358,12.8153 C15.8358,12.8153 14.4518,11.4323 14.4518,9.7313 L14.4518,9.5173 L13.4518,9.5173 L13.4518,9.7853 C13.4518,11.4563 12.0928,12.8153 10.4218,12.8153 L8.1938,12.8153 L8.1938,11.5313 Z M14.2758,22.2163 L14.6738,22.2163 C18.7448,22.2163 22.0558,18.9053 22.0558,14.8343 L22.0558,11.5313 C22.0558,7.4603 18.7448,4.1483 14.6738,4.1483 L14.2758,4.1483 C10.2048,4.1483 6.8928,7.4603 6.8928,11.5313 L6.8928,14.8343 C6.8928,18.9053 10.2048,22.2163 14.2758,22.2163 L14.2758,22.2163 Z M24.6998,13.6083 L29.2718,13.6083 C30.7618,13.6083 32.0628,12.7863 32.7468,11.5733 C33.4178,12.7853 34.7098,13.6083 36.1908,13.6083 L36.8808,13.6083 L36.8808,14.5573 C36.8808,17.8083 34.2348,20.4543 30.9838,20.4543 L30.5968,20.4543 C27.3448,20.4543 24.6998,17.8083 24.6998,14.5573 L24.6998,13.6083 Z M24.6998,11.3453 C24.6998,8.0943 27.3448,5.4483 30.5968,5.4483 L30.9838,5.4483 C34.2348,5.4483 36.8808,8.0943 36.8808,11.3453 L36.8808,12.6083 L36.1908,12.6083 C34.5728,12.6083 33.2578,11.2923 33.2578,9.6753 L33.2578,9.4153 L32.2578,9.4153 L32.2578,9.6223 C32.2578,11.2683 30.9188,12.6083 29.2718,12.6083 L24.6998,12.6083 L24.6998,11.3453 Z M30.5968,21.7543 L30.9838,21.7543 C34.9518,21.7543 38.1798,18.5253 38.1798,14.5573 L38.1798,11.3453 C38.1798,7.3773 34.9518,4.1483 30.9838,4.1483 L30.5968,4.1483 C26.6288,4.1483 23.3998,7.3773 23.3998,11.3453 L23.3998,14.5573 C23.3998,18.5253 26.6288,21.7543 30.5968,21.7543 L30.5968,21.7543 Z M28.1818,16.3413 C28.4518,16.3413 28.6708,16.1223 28.6708,15.8523 C28.6708,15.5833 28.4518,15.3643 28.1818,15.3643 C27.9118,15.3643 27.6938,15.5833 27.6938,15.8523 C27.6938,16.1223 27.9118,16.3413 28.1818,16.3413 L28.1818,16.3413 Z M43.9118,36.7703 L41.6248,36.7743 L41.6248,36.7693 L37.2608,36.7693 L33.0188,32.3533 L33.0188,32.3523 L33.0188,32.3523 L25.0478,24.0543 C25.2688,23.9583 25.4978,23.8783 25.7268,23.7973 L43.8888,33.1743 C43.8978,33.3493 43.9118,33.5233 43.9118,33.7003 L43.9118,36.7703 Z M32.2438,33.6523 L33.0188,33.6523 L33.0188,33.6523 L36.0128,36.7693 L32.2438,36.7693 C31.3848,36.7693 30.6858,36.0703 30.6858,35.2103 C30.6858,34.3513 31.3848,33.6523 32.2438,33.6523 L32.2438,33.6523 Z M39.3398,41.1663 L26.4108,41.1663 L26.4108,32.7053 C26.4108,29.7903 25.1328,27.0853 23.0568,25.2053 C23.4248,24.9363 23.8038,24.6873 24.1998,24.4703 L31.8128,32.3963 C30.4418,32.6053 29.3848,33.7823 29.3848,35.2103 C29.3848,36.7863 30.6678,38.0693 32.2438,38.0693 L39.3398,38.0693 L39.3398,41.1663 Z M25.1108,41.1663 L22.0368,41.1663 L22.0368,34.2183 L21.1368,34.2183 L21.1368,41.1663 L7.8128,41.1663 L7.8128,34.2183 L6.9128,34.2183 L6.9128,41.1663 L3.8388,41.1663 L3.8388,32.7053 C3.8388,28.8923 6.3388,25.4793 9.9498,24.3163 C12.7458,25.7083 16.2038,25.7093 18.9998,24.3163 C22.6108,25.4793 25.1108,28.8923 25.1108,32.7053 L25.1108,41.1663 Z M30.5968,24.8433 L30.9838,24.8433 C32.7088,24.8433 34.3968,24.3713 35.8818,23.4773 C40.0278,24.4873 43.1368,27.9603 43.7818,32.1063 L29.5908,24.7793 C29.9248,24.8153 30.2598,24.8433 30.5968,24.8433 L30.5968,24.8433 Z M35.9048,22.1483 L35.6418,22.0913 L35.4148,22.2373 C34.0838,23.0913 32.5508,23.5433 30.9838,23.5433 L30.5968,23.5433 C29.1498,23.5433 27.7178,23.1523 26.4548,22.4123 L26.2138,22.2713 L25.9458,22.3493 C24.5088,22.7663 23.1938,23.4553 22.0128,24.3713 C21.1418,23.7693 20.1698,23.2983 19.1178,22.9933 L18.8648,22.9193 L18.6318,23.0433 C16.0888,24.3983 12.8608,24.3983 10.3178,23.0433 L10.0848,22.9193 L9.8318,22.9933 C5.5378,24.2383 2.5388,28.2323 2.5388,32.7053 L2.5388,42.4663 L40.6398,42.4663 L40.6398,38.0763 L45.2118,38.0683 L45.2118,33.7003 C45.2118,28.1783 41.2978,23.3203 35.9048,22.1483 L35.9048,22.1483 Z M33.3298,16.3413 C33.5988,16.3413 33.8178,16.1223 33.8178,15.8523 C33.8178,15.5833 33.5988,15.3643 33.3298,15.3643 C33.0598,15.3643 32.8408,15.5833 32.8408,15.8523 C32.8408,16.1223 33.0598,16.3413 33.3298,16.3413 L33.3298,16.3413 Z"
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
      {isHovered ? normalHover : normal}
    </svg>
  );
});

export default PatientAndPerson;
