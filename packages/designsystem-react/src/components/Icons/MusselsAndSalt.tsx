import React from 'react';
import {IconRawProps} from './Icon';

const MusselsAndSalt = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, className, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <path
      fillRule="evenodd"
      d="M33.147,31.367 L34.447,31.367 L34.447,20.719 L33.147,20.719 L33.147,31.367 Z M29.652,20.68 L30.95,20.759 L30.305,31.406 L29.008,31.328 L29.652,20.68 Z M37.942,20.68 L38.586,31.328 L37.289,31.406 L36.645,20.759 L37.942,20.68 Z M35.907,11.954 C35.907,11.566 36.222,11.251 36.61,11.251 C36.999,11.251 37.313,11.566 37.313,11.954 C37.313,12.343 36.999,12.658 36.61,12.658 C36.222,12.658 35.907,12.343 35.907,11.954 L35.907,11.954 Z M30.281,11.954 C30.281,11.566 30.596,11.251 30.984,11.251 C31.373,11.251 31.687,11.566 31.687,11.954 C31.687,12.343 31.373,12.658 30.984,12.658 C30.596,12.658 30.281,12.343 30.281,11.954 L30.281,11.954 Z M33.094,11.954 C33.094,11.566 33.409,11.251 33.797,11.251 C34.186,11.251 34.5,11.566 34.5,11.954 C34.5,12.343 34.186,12.658 33.797,12.658 C33.409,12.658 33.094,12.343 33.094,11.954 L33.094,11.954 Z M30.286,38.544 C30.962,37.726 31.281,36.626 31.036,35.512 C30.929,35.028 30.711,34.579 30.422,34.183 L30.433,34.176 C29.292,32.481 28.152,30.991 27.038,29.681 L28.621,16.405 L38.973,16.405 L41.614,38.544 L30.286,38.544 Z M27.496,38.547 L25.35,38.547 C24.858,38.542 24.117,37.231 24.117,35.254 C24.117,33.893 24.591,32.572 25.196,32.246 C25.291,32.195 25.578,32.051 26.133,32.399 C27.044,33.031 27.983,33.721 28.952,34.495 C29.364,34.82 29.653,35.281 29.766,35.791 C30.035,37.013 29.259,38.225 28.037,38.494 C27.871,38.531 27.687,38.531 27.496,38.547 L27.496,38.547 Z M12.336,38.548 C9.01,38.548 6.305,35.842 6.305,32.516 C6.305,29.19 9.01,26.484 12.336,26.484 C12.967,26.484 13.595,26.584 14.261,26.798 C14.599,26.874 14.985,26.971 15.412,27.092 C13.387,28.222 11.827,30.764 11.827,33.417 C11.827,35.513 12.692,37.373 14.022,38.548 L12.336,38.548 Z M11.258,22.739 C12.686,21.994 14.319,21.85 15.856,22.332 C16.457,22.521 17.026,22.805 17.598,23.209 C19.88,24.532 23.084,26.92 26.51,31.082 C21.144,27.434 16.844,26.048 14.604,25.546 C13.867,25.306 13.104,25.184 12.336,25.184 C10.828,25.184 9.426,25.643 8.259,26.427 C8.273,26.378 8.279,26.327 8.294,26.279 C8.777,24.741 9.83,23.485 11.258,22.739 L11.258,22.739 Z M18.712,34.282 C18.712,31.999 20.078,29.692 21.458,29.557 C22.381,30.039 23.357,30.594 24.383,31.24 C23.309,31.988 22.817,33.751 22.817,35.254 C22.817,36.572 23.094,37.725 23.552,38.547 L21.399,38.547 C19.942,38.544 18.712,36.593 18.712,34.282 L18.712,34.282 Z M13.126,33.417 C13.126,30.615 15.288,27.869 17.522,27.786 C18.251,28.058 19.05,28.39 19.908,28.789 C18.408,29.827 17.412,32.149 17.412,34.282 C17.412,36.013 17.953,37.534 18.815,38.547 L17.319,38.547 C15.007,38.546 13.126,36.245 13.126,33.417 L13.126,33.417 Z M33.797,9.452 C37.053,9.452 39.74,11.934 40.067,15.105 L39.55,15.105 L28.044,15.105 L27.528,15.105 C27.854,11.934 30.542,9.452 33.797,9.452 L33.797,9.452 Z M40.283,16.405 L40.75,16.405 C41.109,16.405 41.4,16.114 41.4,15.755 C41.4,11.563 37.989,8.153 33.797,8.153 C29.605,8.153 26.194,11.563 26.194,15.755 C26.194,16.114 26.485,16.405 26.844,16.405 L27.312,16.405 L25.883,28.382 C22.96,25.209 20.278,23.262 18.301,22.117 C17.668,21.667 16.977,21.322 16.246,21.092 C14.378,20.504 12.393,20.679 10.656,21.587 C8.92,22.492 7.641,24.021 7.054,25.889 C6.858,26.51 6.761,27.151 6.735,27.795 C5.657,29.072 5.004,30.719 5.004,32.516 C5.004,36.558 8.293,39.847 12.336,39.847 L17.316,39.847 C17.318,39.847 17.319,39.847 17.321,39.847 L17.321,39.847 L21.395,39.847 C21.397,39.847 21.4,39.847 21.403,39.847 L21.403,39.847 L25.348,39.846 C25.35,39.846 25.351,39.847 25.353,39.847 L25.353,39.846 L27.55,39.846 C27.568,39.846 27.585,39.845 27.602,39.844 L42.346,39.844 C42.531,39.844 42.708,39.764 42.832,39.626 C42.955,39.487 43.013,39.302 42.991,39.117 L40.283,16.405 Z"
    />
  );

  const normalHover = (
    <path
      fillRule="evenodd"
      d="M38.6421,7.5549 L37.5561,6.8409 L38.5561,5.3179 L39.6421,6.0319 L38.6421,7.5549 Z M28.9521,7.5549 L27.9521,6.0319 L29.0381,5.3179 L30.0381,6.8409 L28.9521,7.5549 Z M33.1471,5.9459 L34.4471,5.9459 L34.4471,4.1239 L33.1471,4.1239 L33.1471,5.9459 Z M33.1471,31.3679 L34.4471,31.3679 L34.4471,20.7199 L33.1471,20.7199 L33.1471,31.3679 Z M29.6521,20.6799 L30.9501,20.7589 L30.3051,31.4069 L29.0081,31.3279 L29.6521,20.6799 Z M37.9421,20.6799 L38.5861,31.3279 L37.2881,31.4069 L36.6441,20.7589 L37.9421,20.6799 Z M35.9071,11.9539 C35.9071,11.5659 36.2221,11.2509 36.6101,11.2509 C36.9981,11.2509 37.3131,11.5659 37.3131,11.9539 C37.3131,12.3429 36.9981,12.6579 36.6101,12.6579 C36.2221,12.6579 35.9071,12.3429 35.9071,11.9539 L35.9071,11.9539 Z M30.2811,11.9539 C30.2811,11.5659 30.5961,11.2509 30.9841,11.2509 C31.3721,11.2509 31.6871,11.5659 31.6871,11.9539 C31.6871,12.3429 31.3721,12.6579 30.9841,12.6579 C30.5961,12.6579 30.2811,12.3429 30.2811,11.9539 L30.2811,11.9539 Z M33.0941,11.9539 C33.0941,11.5659 33.4091,11.2509 33.7971,11.2509 C34.1851,11.2509 34.5001,11.5659 34.5001,11.9539 C34.5001,12.3429 34.1851,12.6579 33.7971,12.6579 C33.4091,12.6579 33.0941,12.3429 33.0941,11.9539 L33.0941,11.9539 Z M30.2861,38.5439 C30.9611,37.7259 31.2811,36.6259 31.0361,35.5119 C30.9681,35.2079 30.8501,34.9209 30.7081,34.6469 L30.7211,34.6409 C29.6481,32.4589 28.4561,30.4289 27.1691,28.5749 L28.6211,16.4049 L38.9731,16.4049 L41.6131,38.5439 L30.2861,38.5439 Z M27.4961,38.5469 L25.3501,38.5469 C24.8581,38.5419 24.1171,37.2309 24.1171,35.2539 C24.1171,33.8929 24.5911,32.5719 25.1951,32.2459 C25.2901,32.1949 25.5771,32.0499 26.1321,32.3989 C27.0431,33.0309 27.9821,33.7219 28.9521,34.4949 C29.3641,34.8199 29.6531,35.2809 29.7661,35.7909 C30.0351,37.0129 29.2591,38.2249 28.0371,38.4939 C27.8711,38.5309 27.6871,38.5309 27.4961,38.5469 L27.4961,38.5469 Z M12.3361,38.5479 C9.0101,38.5479 6.3041,35.8419 6.3041,32.5159 C6.3041,29.1899 9.0101,26.4839 12.3361,26.4839 C12.9671,26.4839 13.5951,26.5839 14.2601,26.7979 C14.5991,26.8739 14.9851,26.9709 15.4121,27.0919 C13.3861,28.2219 11.8261,30.7639 11.8261,33.4169 C11.8261,35.5129 12.6921,37.3729 14.0221,38.5479 L12.3361,38.5479 Z M18.7121,34.2829 C18.7121,31.9989 20.0781,29.6929 21.4581,29.5569 C22.3811,30.0389 23.3561,30.5949 24.3831,31.2399 C23.3091,31.9879 22.8171,33.7509 22.8171,35.2539 C22.8171,36.5719 23.0941,37.7249 23.5521,38.5469 L21.3991,38.5469 C19.9421,38.5439 18.7121,36.5929 18.7121,34.2829 L18.7121,34.2829 Z M13.1261,33.4169 C13.1261,30.6149 15.2881,27.8689 17.5221,27.7859 C18.2501,28.0579 19.0501,28.3909 19.9071,28.7889 C18.4081,29.8279 17.4121,32.1489 17.4121,34.2829 C17.4121,36.0129 17.9531,37.5339 18.8151,38.5469 L17.3181,38.5469 C15.0071,38.5459 13.1261,36.2449 13.1261,33.4169 L13.1261,33.4169 Z M9.2441,25.5639 C9.3291,24.9689 9.5021,24.3889 9.7611,23.8399 C10.4481,22.3819 11.6611,21.2799 13.1771,20.7349 C14.6931,20.1889 16.3301,20.2679 17.7881,20.9539 C18.3581,21.2229 18.8841,21.5809 19.3951,22.0579 C22.5201,24.4919 25.3811,27.8949 27.8011,31.9909 C27.4921,31.7669 27.1861,31.5479 26.8831,31.3379 L26.8861,31.3339 C26.8671,31.3219 26.8501,31.3139 26.8311,31.3019 C21.3161,27.4889 16.8891,26.0569 14.6041,25.5459 C13.8671,25.3059 13.1031,25.1839 12.3361,25.1839 C11.2181,25.1839 10.1621,25.4429 9.2131,25.8929 C9.2231,25.7739 9.2331,25.6589 9.2441,25.5639 L9.2441,25.5639 Z M33.7971,9.4519 C37.0531,9.4519 39.7401,11.9339 40.0671,15.1049 L39.5501,15.1049 L28.0431,15.1049 L27.5281,15.1049 C27.8541,11.9339 30.5411,9.4519 33.7971,9.4519 L33.7971,9.4519 Z M40.2831,16.4049 L40.7501,16.4049 C41.1091,16.4049 41.4001,16.1139 41.4001,15.7549 C41.4001,11.5629 37.9891,8.1529 33.7971,8.1529 C29.6051,8.1529 26.1941,11.5629 26.1941,15.7549 C26.1941,16.1139 26.4851,16.4049 26.8441,16.4049 L27.3111,16.4049 L26.0441,27.0339 C24.2471,24.6849 22.2951,22.6709 20.2401,21.0719 C19.6741,20.5399 19.0361,20.1049 18.3421,19.7789 C16.5711,18.9429 14.5801,18.8479 12.7371,19.5109 C10.8941,20.1739 9.4201,21.5139 8.5851,23.2859 C8.2711,23.9519 8.0591,24.6569 7.9541,25.3989 C7.9371,25.5539 7.8721,26.1699 7.8781,26.7089 C6.1351,28.0499 5.0041,30.1509 5.0041,32.5159 C5.0041,36.5579 8.2931,39.8469 12.3361,39.8469 L17.3161,39.8469 C17.3181,39.8469 17.3191,39.8469 17.3211,39.8469 L17.3211,39.8469 L21.3941,39.8469 C21.3971,39.8469 21.4001,39.8469 21.4031,39.8469 L21.4031,39.8469 L25.3481,39.8469 C25.3491,39.8469 25.3501,39.8469 25.3521,39.8469 L25.3521,39.8469 L27.5501,39.8469 C27.5681,39.8469 27.5851,39.8459 27.6021,39.8439 L42.3451,39.8439 C42.5311,39.8439 42.7081,39.7639 42.8311,39.6259 C42.9541,39.4869 43.0131,39.3019 42.9911,39.1169 L40.2831,16.4049 Z"
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

export default MusselsAndSalt;
