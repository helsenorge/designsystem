import React from 'react';
import {SvgPathProps} from './Icon';

const PngFile: React.FC<SvgPathProps> = ({isExtraSmall, isHovered}: SvgPathProps): JSX.Element => {
  const normal = (
    <path
      fillRule="evenodd"
      d="M25.5334,22.6113 L27.6954,20.3933 L31.0114,24.5103 L27.1354,24.5103 L25.5334,22.6113 Z M16.9894,24.5103 L21.4074,19.2723 L25.8264,24.5103 L16.9894,24.5103 Z M27.7654,18.8873 L24.8854,21.8433 L21.4074,17.7203 L14.8374,25.5103 L33.1004,25.5103 L27.7654,18.8873 Z M12.0004,39.1003 L35.9994,39.1003 L35.9994,8.9003 L12.0004,8.9003 L12.0004,39.1003 Z M10.6994,40.4003 L37.3004,40.4003 L37.3004,7.6003 L10.6994,7.6003 L10.6994,40.4003 Z M27.7574,29.4653 C27.9564,29.2223 28.2234,29.1003 28.5614,29.1003 C28.8894,29.1003 29.1324,29.1763 29.2884,29.3293 C29.4454,29.4813 29.5504,29.6973 29.6024,29.9773 L30.3874,29.9773 C30.3194,29.5003 30.1384,29.1283 29.8464,28.8613 C29.5544,28.5943 29.1214,28.4603 28.5484,28.4603 C27.9834,28.4603 27.5284,28.6403 27.1814,28.9993 C26.8364,29.3583 26.6634,29.8323 26.6634,30.4213 L26.6634,31.4193 C26.6634,32.0083 26.8454,32.4823 27.2124,32.8403 C27.5774,33.2003 28.0544,33.3793 28.6434,33.3793 C29.1054,33.3793 29.4784,33.3093 29.7624,33.1673 C30.0484,33.0263 30.2564,32.8663 30.3874,32.6863 L30.3874,30.8933 L28.6374,30.8933 L28.6374,31.4913 L29.5894,31.4913 L29.5894,32.4503 C29.5144,32.5313 29.4014,32.6003 29.2514,32.6573 C29.0994,32.7143 28.8974,32.7423 28.6434,32.7423 C28.2844,32.7423 27.9974,32.6203 27.7814,32.3763 C27.5654,32.1323 27.4584,31.8133 27.4584,31.4193 L27.4584,30.4143 C27.4584,30.0253 27.5574,29.7083 27.7574,29.4653 L27.7574,29.4653 Z M25.4114,15.5023 C25.9114,15.5023 26.3174,15.9083 26.3174,16.4083 C26.3174,16.9083 25.9114,17.3143 25.4114,17.3143 C24.9114,17.3143 24.5054,16.9083 24.5054,16.4083 C24.5054,15.9083 24.9114,15.5023 25.4114,15.5023 L25.4114,15.5023 Z M25.4114,18.3143 C26.4624,18.3143 27.3174,17.4593 27.3174,16.4083 C27.3174,15.3573 26.4624,14.5023 25.4114,14.5023 C24.3604,14.5023 23.5054,15.3573 23.5054,16.4083 C23.5054,17.4593 24.3604,18.3143 25.4114,18.3143 L25.4114,18.3143 Z M24.9624,32.0273 L24.9524,32.0293 L22.8214,28.5293 L22.0234,28.5293 L22.0234,33.3103 L22.8214,33.3103 L22.8214,29.8103 L22.8314,29.8063 L24.9624,33.3103 L25.7574,33.3103 L25.7574,28.5293 L24.9624,28.5293 L24.9624,32.0273 Z M20.2194,30.6243 C20.0734,30.7793 19.8484,30.8573 19.5474,30.8573 L18.4764,30.8573 L18.4764,29.1693 L19.5474,29.1693 C19.8484,29.1693 20.0734,29.2493 20.2194,29.4093 C20.3644,29.5693 20.4364,29.7733 20.4364,30.0203 C20.4364,30.2673 20.3644,30.4693 20.2194,30.6243 L20.2194,30.6243 Z M19.5474,28.5293 L17.6794,28.5293 L17.6794,33.3103 L18.4764,33.3103 L18.4764,31.4983 L19.5474,31.4983 C20.0854,31.4983 20.5014,31.3643 20.7954,31.0993 C21.0884,30.8333 21.2344,30.4713 21.2344,30.0133 C21.2344,29.5603 21.0884,29.1993 20.7954,28.9313 C20.5014,28.6633 20.0854,28.5293 19.5474,28.5293 L19.5474,28.5293 Z"
    />
  );

  const normalHover = (
    <path
      fillRule="evenodd"
      d="M25.4116,13.502 C25.9116,13.502 26.3176,13.909 26.3176,14.408 C26.3176,14.908 25.9116,15.314 25.4116,15.314 C24.9116,15.314 24.5056,14.908 24.5056,14.408 C24.5056,13.909 24.9116,13.502 25.4116,13.502 L25.4116,13.502 Z M25.4116,16.315 C26.4626,16.315 27.3176,15.46 27.3176,14.408 C27.3176,13.357 26.4626,12.502 25.4116,12.502 C24.3606,12.502 23.5056,13.357 23.5056,14.408 C23.5056,15.46 24.3606,16.315 25.4116,16.315 L25.4116,16.315 Z M25.5336,22.611 L27.6956,20.393 L31.0116,24.51 L27.1356,24.51 L25.5336,22.611 Z M16.9896,24.51 L21.4076,19.272 L25.8266,24.51 L16.9896,24.51 Z M27.7656,18.887 L24.8856,21.843 L21.4076,17.721 L14.8376,25.51 L33.1006,25.51 L27.7656,18.887 Z M12.0006,39.1 L35.9996,39.1 L35.9996,8.9 L12.0006,8.9 L12.0006,39.1 Z M10.6996,40.4 L37.3006,40.4 L37.3006,7.6 L10.6996,7.6 L10.6996,40.4 Z M20.2196,30.625 C20.0736,30.78 19.8496,30.857 19.5476,30.857 L18.4766,30.857 L18.4766,29.169 L19.5476,29.169 C19.8496,29.169 20.0736,29.25 20.2196,29.41 C20.3646,29.569 20.4366,29.773 20.4366,30.02 C20.4366,30.268 20.3646,30.469 20.2196,30.625 L20.2196,30.625 Z M19.5476,28.529 L17.6796,28.529 L17.6796,33.311 L18.4766,33.311 L18.4766,31.498 L19.5476,31.498 C20.0856,31.498 20.5016,31.365 20.7956,31.099 C21.0886,30.833 21.2346,30.471 21.2346,30.014 C21.2346,29.561 21.0886,29.2 20.7956,28.932 C20.5016,28.664 20.0856,28.529 19.5476,28.529 L19.5476,28.529 Z M24.9626,32.027 L24.9526,32.03 L22.8216,28.529 L22.0236,28.529 L22.0236,33.311 L22.8216,33.311 L22.8216,29.81 L22.8316,29.807 L24.9626,33.311 L25.7576,33.311 L25.7576,28.529 L24.9626,28.529 L24.9626,32.027 Z M27.7576,29.465 C27.9566,29.222 28.2246,29.101 28.5616,29.101 C28.8906,29.101 29.1326,29.177 29.2886,29.329 C29.4456,29.481 29.5506,29.697 29.6026,29.978 L30.3876,29.978 C30.3196,29.501 30.1396,29.128 29.8476,28.861 C29.5556,28.594 29.1216,28.46 28.5486,28.46 C27.9836,28.46 27.5286,28.64 27.1826,28.999 C26.8366,29.358 26.6636,29.832 26.6636,30.421 L26.6636,31.419 C26.6636,32.008 26.8466,32.482 27.2126,32.841 C27.5776,33.2 28.0556,33.379 28.6436,33.379 C29.1056,33.379 29.4786,33.309 29.7636,33.168 C30.0486,33.026 30.2566,32.866 30.3876,32.687 L30.3876,30.894 L28.6376,30.894 L28.6376,31.491 L29.5896,31.491 L29.5896,32.45 C29.5156,32.531 29.4016,32.6 29.2516,32.657 C29.0996,32.714 28.8976,32.743 28.6436,32.743 C28.2846,32.743 27.9976,32.621 27.7816,32.377 C27.5656,32.132 27.4586,31.813 27.4586,31.419 L27.4586,30.415 C27.4586,30.025 27.5576,29.709 27.7576,29.465 L27.7576,29.465 Z"
    />
  );

  return isHovered ? normalHover : normal;
};

export default PngFile;
