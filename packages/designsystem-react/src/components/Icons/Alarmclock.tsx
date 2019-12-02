import React from 'react';
import {IconProps} from './Icon';
const Alarmclock = React.forwardRef((svgProps: IconProps, ref: any) => {
  const {size = 38, color = 'black', isHovered = false, ...props} = svgProps;
  return !isHovered ? (
    <svg width={size} height={size} viewBox="0 0 38 38" ref={ref} {...props}>
      <path
        fill="{color}"
        fillRule="evenodd"
        d="M18.8962,26.912 C14.6852,26.912 11.2602,23.487 11.2602,19.277 C11.2602,18.004 11.5782,16.805 12.1312,15.748 C12.3322,15.364 12.5672,15.003 12.8272,14.662 C12.8512,14.63 12.8742,14.597 12.8992,14.566 C13.1562,14.239 13.4402,13.936 13.7462,13.656 C13.7802,13.625 13.8142,13.593 13.8492,13.563 C14.1632,13.285 14.4992,13.033 14.8562,12.81 C14.8832,12.793 14.9102,12.777 14.9372,12.761 C15.3112,12.533 15.7052,12.334 16.1172,12.173 C16.9802,11.834 17.9152,11.642 18.8962,11.642 C19.8792,11.642 20.8162,11.835 21.6802,12.175 C22.0892,12.336 22.4802,12.533 22.8512,12.759 C22.8802,12.776 22.9082,12.793 22.9372,12.811 C23.2932,13.034 23.6292,13.286 23.9422,13.563 C23.9772,13.593 24.0102,13.624 24.0432,13.655 C24.3492,13.935 24.6342,14.238 24.8912,14.565 C24.9172,14.597 24.9402,14.63 24.9642,14.662 C25.2232,15.002 25.4582,15.362 25.6582,15.745 C26.2132,16.802 26.5312,18.002 26.5312,19.277 C26.5312,23.487 23.1062,26.912 18.8962,26.912 L18.8962,26.912 Z M10.2481971,12.476 C10.2472,11.797 10.5092,11.158 10.9892,10.677 C11.4682,10.196 12.1072,9.931 12.7862,9.93 L12.7912,9.93 C13.6912,9.93 14.4992,10.404 14.9492,11.156 C14.9272,11.166 14.9092,11.181 14.8882,11.191 C14.1862,11.541 13.5362,11.977 12.9522,12.489 C12.8892,12.544 12.8292,12.6 12.7682,12.656 C12.5142,12.891 12.2712,13.139 12.0452,13.401 C12.0222,13.429 11.9962,13.453 11.9732,13.481 C11.7262,13.775 11.5012,14.089 11.2932,14.414 C11.2782,14.437 11.2592,14.457 11.2442,14.481 C10.6252,14.007 10.2492,13.271 10.2481971,12.476 L10.2481971,12.476 Z M24.9982,9.93 L25.0022,9.93 C25.6792,9.93 26.3162,10.193 26.7962,10.671 C27.2772,11.151 27.5422,11.789 27.543202,12.468 C27.5442,13.266 27.1672,14.006 26.5472,14.48 C26.5322,14.456 26.5122,14.435 26.4972,14.411 C26.2882,14.086 26.0632,13.773 25.8162,13.478 C25.7952,13.454 25.7722,13.431 25.7512,13.407 C25.5222,13.14 25.2762,12.89 25.0192,12.652 C24.9602,12.598 24.9022,12.544 24.8422,12.491 C24.2582,11.979 23.6092,11.543 22.9072,11.193 C22.8852,11.182 22.8652,11.167 22.8432,11.156 C23.2922,10.405 24.0982,9.931 24.9982,9.93 L24.9982,9.93 Z M27.9312,19.277 C27.9312,18.016 27.6702,16.815 27.2012,15.724 C28.2762,14.999 28.9462,13.788 28.9442045,12.466 C28.9422,11.412 28.5302,10.423 27.7852,9.68 C27.0412,8.938 26.0522,8.53 25.0022,8.53 L24.9962,8.53 C23.5172,8.532 22.2052,9.357 21.5362,10.637 C20.7002,10.381 19.8142,10.242 18.8962,10.242 C17.9782,10.242 17.0922,10.381 16.2562,10.637 C15.5862,9.354 14.2712,8.53 12.7912,8.53 L12.7842,8.53 C11.7302,8.532 10.7412,8.943 9.9982,9.689 C9.2542,10.434 8.8452,11.425 8.8471927,12.478 C8.8502,13.795 9.5182,15.001 10.5902,15.725 C10.1212,16.816 9.8602,18.016 9.8602,19.277 C9.8602,22.195 11.2562,24.787 13.4102,26.44 L11.8862,28.087 L12.9142,29.037 L14.5942,27.221 C15.8742,27.917 17.3392,28.312 18.8962,28.312 C20.4522,28.312 21.9182,27.917 23.1982,27.221 L24.8772,29.037 L25.9052,28.087 L24.3812,26.44 C26.5342,24.787 27.9312,22.195 27.9312,19.277 L27.9312,19.277 Z M18.1962,19.215 L15.5472,19.215 L15.5472,20.615 L19.5962,20.615 L19.5962,15.552 L18.1962,15.552 L18.1962,19.215 Z"
      />
    </svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 38 38" ref={ref} {...props}>
      <path
        fill="{color}"
        fillRule="evenodd"
        d="M26.5478,14.4809 C26.5308,14.4549 26.5098,14.4319 26.4928,14.4059 C26.2868,14.0859 26.0658,13.7769 25.8218,13.4859 C25.7928,13.4519 25.7608,13.4209 25.7318,13.3869 C25.5118,13.1319 25.2768,12.8919 25.0298,12.6619 C24.9648,12.6019 24.9008,12.5429 24.8338,12.4849 C24.2518,11.9749 23.6058,11.5409 22.9068,11.1929 C22.8848,11.1819 22.8648,11.1669 22.8428,11.1559 C23.2928,10.4039 24.1008,9.9299 25.0008,9.9299 L25.0058,9.9299 C25.6848,9.9309 26.3228,10.1959 26.8028,10.6769 C27.2818,11.1579 27.5448,11.7969 27.5438028,12.4759 C27.5428,13.2719 27.1658,14.0069 26.5478,14.4809 L26.5478,14.4809 Z M18.8958,26.9119 C14.6858,26.9119 11.2608,23.4869 11.2608,19.2769 C11.2608,18.0039 11.5778,16.8049 12.1308,15.7489 C12.3318,15.3639 12.5678,15.0029 12.8278,14.6619 C12.8518,14.6299 12.8748,14.5979 12.8998,14.5659 C13.1568,14.2389 13.4418,13.9349 13.7478,13.6549 C13.7808,13.6249 13.8138,13.5939 13.8488,13.5629 C14.1628,13.2859 14.4998,13.0319 14.8578,12.8089 C14.8838,12.7929 14.9098,12.7769 14.9358,12.7619 C15.3108,12.5339 15.7048,12.3339 16.1188,12.1719 C16.9808,11.8339 17.9148,11.6419 18.8958,11.6419 C19.8768,11.6419 20.8128,11.8349 21.6758,12.1739 C22.0868,12.3349 22.4778,12.5329 22.8508,12.7589 C22.8798,12.7769 22.9098,12.7939 22.9388,12.8119 C23.2928,13.0339 23.6258,13.2849 23.9378,13.5589 C23.9758,13.5929 24.0128,13.6269 24.0498,13.6609 C24.3518,13.9379 24.6328,14.2379 24.8878,14.5609 C24.9158,14.5969 24.9428,14.6349 24.9708,14.6709 C25.2258,15.0079 25.4578,15.3639 25.6568,15.7429 C26.2118,16.7999 26.5298,18.0009 26.5298,19.2769 C26.5298,23.4869 23.1058,26.9119 18.8958,26.9119 L18.8958,26.9119 Z M10.2477941,12.4759 C10.2448,11.0739 11.3838,9.9319 12.7848,9.9299 L12.7898,9.9299 C13.6908,9.9299 14.4988,10.4039 14.9488,11.1559 C14.9288,11.1659 14.9108,11.1799 14.8898,11.1899 C14.1868,11.5399 13.5358,11.9769 12.9508,12.4899 C12.8898,12.5439 12.8298,12.5989 12.7698,12.6549 C12.5148,12.8909 12.2708,13.1389 12.0438,13.4039 C12.0218,13.4299 11.9968,13.4539 11.9748,13.4799 C11.7268,13.7749 11.5018,14.0889 11.2928,14.4139 C11.2778,14.4369 11.2588,14.4579 11.2438,14.4809 C10.6258,14.0079 10.2488,13.2719 10.2477941,12.4759 L10.2477941,12.4759 Z M28.9438073,12.4779 C28.9458,11.4249 28.5368,10.4349 27.7938,9.6889 C27.0508,8.9429 26.0618,8.5319 25.0078,8.5299 L25.0008,8.5299 C23.5198,8.5299 22.2058,9.3539 21.5348,10.6369 C20.6998,10.3809 19.8138,10.2419 18.8958,10.2419 C17.9778,10.2419 17.0918,10.3809 16.2568,10.6369 C15.5858,9.3539 14.2718,8.5299 12.7898,8.5299 L12.7828,8.5299 C10.6098,8.5339 8.8448,10.3049 8.84779618,12.4779 C8.8498,13.7959 9.5188,15.0019 10.5898,15.7249 C10.1218,16.8159 9.8608,18.0159 9.8608,19.2769 C9.8608,22.1949 11.2568,24.7859 13.4098,26.4399 L11.8858,28.0859 L12.9128,29.0379 L14.5938,27.2209 C15.8738,27.9169 17.3398,28.3129 18.8958,28.3129 C20.4518,28.3129 21.9168,27.9169 23.1968,27.2209 L24.8778,29.0379 L25.9048,28.0859 L24.3808,26.4399 C26.5338,24.7859 27.9308,22.1949 27.9308,19.2769 C27.9308,18.0159 27.6698,16.8159 27.2008,15.7249 C28.2728,15.0019 28.9418,13.7949 28.9438073,12.4779 L28.9438073,12.4779 Z M31.0508,6.8599 C30.1168,5.7649 28.8188,5.1559 27.3928,5.1479 L27.3848,6.5479 C28.6818,6.5559 29.5138,7.2159 29.9848,7.7679 C30.6038,8.4959 30.9558,9.4549 30.9498,10.3989 L32.3508,10.4069 C32.3578,9.1319 31.8838,7.8399 31.0508,6.8599 L31.0508,6.8599 Z M10.3998,5.1479 C7.3188,5.1659 5.4268,7.8919 5.4408,10.4069 L6.8408,10.3989 C6.8308,8.5569 8.1918,6.5609 10.4068,6.5479 L10.3998,5.1479 Z M18.1948,19.2149 L15.5468,19.2149 L15.5468,20.6149 L19.5958,20.6149 L19.5958,15.5519 L18.1948,15.5519 L18.1948,19.2149 Z"
      />
    </svg>
  );
});
export default Alarmclock;
