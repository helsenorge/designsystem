import React from 'react';
import {SvgPathProps} from './Icon';

const JointPain: React.FC<SvgPathProps> = ({isExtraSmall, isHovered}: SvgPathProps): JSX.Element => {
  const normal = (
    <path
      fillRule="evenodd"
      d="M26.2838,26.6572869 C25.6018,26.6572869 24.6048,27.0473 24.1168,27.2583 C23.6288,27.0473 22.6338,26.6572869 21.9608,26.6572869 C21.8938,26.6572869 20.1938,26.6413 19.0878,27.7293 C18.4738,28.3323 18.1628,29.1343 18.1628,30.1143 C18.1628,31.7733 19.0088,32.7283 19.7538,33.5703 C20.4598,34.3663 21.0678,35.0543 21.0678,36.3233 L21.0678,42.7593 L22.3688,42.7593 L22.3688,36.3233 C22.3688,34.5613 21.4968,33.5763 20.7268,32.7083 C20.0488,31.9423 19.4638,31.2813 19.4638,30.1143 C19.4638,29.4903 19.6368,29.0153 19.9938,28.6613 C20.7148,27.9483 21.9718,27.9633 21.9498,27.9573 C22.3948,27.9573 23.3458,28.3253 23.8408,28.5583 L24.1168,28.6883 L24.3938,28.5583 C24.9238,28.3083 25.8598,27.9573 26.2928,27.9573 C26.2888,27.9473 27.5248,27.9533 28.2388,28.6603 C28.5968,29.0143 28.7688,29.4903 28.7688,30.1143 C28.7688,31.2813 28.1838,31.9423 27.5058,32.7083 C26.7368,33.5763 25.8648,34.5613 25.8648,36.3233 L25.8648,42.7593 L27.1658,42.7593 L27.1658,36.3233 C27.1658,35.0543 27.7738,34.3663 28.4788,33.5703 C29.2238,32.7273 30.0698,31.7733 30.0698,30.1143 C30.0698,29.1343 29.7588,28.3323 29.1448,27.7293 C28.0398,26.6423 26.3438,26.6583 26.2838,26.6572869 L26.2838,26.6572869 Z M31.2378,26.8743 L34.8868,28.3673 L35.3788,27.1643 L31.7298,25.6713 L31.2378,26.8743 Z M21.4458,21.6013131 L21.4658,21.6013131 C22.1468,21.6013131 23.1448,21.2113 23.6338,21.0013 C24.1218,21.2113 25.1158,21.6013131 25.7898,21.6013131 C25.8518,21.6013131 27.5548,21.6173 28.6618,20.5303 C29.2748,19.9273 29.5868,19.1243 29.5868,18.1453 C29.5868,16.4853 28.7408,15.5313 27.9958,14.6893 C27.2908,13.8923 26.6818,13.2043 26.6818,11.9363 L26.6818,5.4993 L25.3818,5.4993 L25.3818,11.9363 C25.3818,13.6983 26.2538,14.6823 27.0228,15.5513 C27.7008,16.3173 28.2858,16.9783 28.2858,18.1453 C28.2858,18.7683 28.1128,19.2443 27.7558,19.5983 C27.0358,20.3113 25.8188,20.3023 25.8008,20.3023 C25.3538,20.3023 24.4038,19.9333 23.9108,19.7003 L23.6338,19.5703 L23.3558,19.7003 C22.8268,19.9503 21.8898,20.3023 21.4568,20.3023 C21.4548,20.2933 20.2238,20.3053 19.5108,19.5983 C19.1528,19.2443 18.9798,18.7683 18.9798,18.1453 C18.9798,16.9783 19.5648,16.3173 20.2438,15.5513 C21.0128,14.6823 21.8858,13.6983 21.8858,11.9363 L21.8858,5.4993 L20.5848,5.4993 L20.5848,11.9363 C20.5848,13.2043 19.9758,13.8923 19.2698,14.6893 C18.5248,15.5313 17.6798,16.4853 17.6798,18.1453 C17.6798,19.1243 17.9908,19.9273 18.6038,20.5303 C19.6588,21.5673 21.2438,21.6013131 21.4458,21.6013131 L21.4458,21.6013131 Z M32.4868,24.7793 L36.7748,24.7793 L36.7748,23.4793 L32.4868,23.4793 L32.4868,24.7793 Z M12.3718,21.0943 L16.0198,22.5883 L16.5128,21.3853 L12.8638,19.8913 L12.3718,21.0943 Z M35.3788,21.0943 L34.8868,19.8913 L31.2378,21.3853 L31.7298,22.5883 L35.3788,21.0943 Z M12.3718,27.1643 L12.8638,28.3673 L16.5128,26.8743 L16.0198,25.6713 L12.3718,27.1643 Z M10.9748,24.7793 L15.2628,24.7793 L15.2628,23.4793 L10.9748,23.4793 L10.9748,24.7793 Z"
    />
  );

  const normalHover = (
    <g fillRule="evenodd" transform="translate(11 6)">
      <path d="M15.4094,19.7825 C14.7274,19.7825 13.7304,20.1725 13.2424,20.3835 C12.7544,20.1725 11.7594,19.7825 11.0854,19.7825 C11.0244,19.7775 9.3194,19.7665 8.2134,20.8545 C7.5994,21.4575 7.2884,22.2595 7.2884,23.2395 C7.2884,24.8985 8.1344,25.8535 8.8794,26.6955 C9.5854,27.4915 10.1934,28.1795 10.1934,29.4485 L10.1934,35.8845 L11.4944,35.8845 L11.4944,29.4485 C11.4944,27.6865 10.6224,26.7015 9.8524,25.8335 C9.1744,25.0675 8.5894,24.4065 8.5894,23.2395 C8.5894,22.6155 8.7624,22.1395 9.1194,21.7855 C9.8394,21.0735 11.0694,21.0835 11.0744,21.0825 C11.5204,21.0825 12.4714,21.4505 12.9664,21.6835 L13.2424,21.8135 L13.5194,21.6835 C14.0494,21.4335 14.9844,21.0825 15.4184,21.0825 C15.4154,21.0785 16.6504,21.0785 17.3644,21.7855 C17.7224,22.1395 17.8944,22.6155 17.8944,23.2395 C17.8944,24.4065 17.3094,25.0675 16.6314,25.8335 C15.8614,26.7015 14.9894,27.6865 14.9894,29.4485 L14.9894,35.8845 L16.2904,35.8845 L16.2904,29.4485 C16.2904,28.1795 16.8984,27.4915 17.6044,26.6955 C18.3494,25.8535 19.1954,24.8985 19.1954,23.2395 C19.1954,22.2595 18.8844,21.4575 18.2704,20.8545 C17.1654,19.7665 15.4874,19.7885 15.4094,19.7825" />
      <polygon points=".1 18.905 4.388 18.905 4.388 17.605 .1 17.605" />
      <polygon points="1.496 15.22 5.144 16.713 5.637 15.511 1.988 14.017" />
      <polygon points="1.496 21.29 1.988 22.493 5.637 20.999 5.144 19.796" />
      <path d="M10.5715,16.7268 L10.5915,16.7268 C11.2725,16.7268 12.2695,16.3368 12.7585,16.1258 C13.2465,16.3368 14.2415,16.7268 14.9155,16.7268 C14.9825,16.7218 16.6805,16.7428 17.7875,15.6548 C18.4005,15.0518 18.7125,14.2498 18.7125,13.2698 C18.7125,11.6108 17.8665,10.6558 17.1215,9.8138 C16.4155,9.0178 15.8065,8.3298 15.8065,7.0608 L15.8065,0.6248 L14.5065,0.6248 L14.5065,7.0608 C14.5065,8.8228 15.3785,9.8078 16.1475,10.6758 C16.8265,11.4418 17.4115,12.1028 17.4115,13.2698 C17.4115,13.8938 17.2385,14.3698 16.8815,14.7238 C16.1615,15.4358 14.9185,15.4328 14.9255,15.4268 C14.4795,15.4268 13.5295,15.0588 13.0345,14.8258 L12.7585,14.6958 L12.4805,14.8258 C11.9515,15.0758 11.0155,15.4268 10.5825,15.4268 C10.5815,15.4128 9.3495,15.4308 8.6355,14.7238 C8.2785,14.3698 8.1055,13.8938 8.1055,13.2698 C8.1055,12.1028 8.6905,11.4418 9.3695,10.6758 C10.1385,9.8078 11.0105,8.8228 11.0105,7.0608 L11.0105,0.6248 L9.7105,0.6248 L9.7105,7.0608 C9.7105,8.3298 9.1015,9.0178 8.3955,9.8138 C7.6505,10.6558 6.8045,11.6108 6.8045,13.2698 C6.8045,14.2498 7.1165,15.0518 7.7295,15.6548 C8.7845,16.6918 10.3695,16.7268 10.5715,16.7268" />
      <polygon points="21.613 18.905 25.901 18.905 25.901 17.605 21.613 17.605" />
      <polygon points="20.363 20.999 24.012 22.493 24.505 21.29 20.855 19.796" />
      <polygon points="24.504 15.22 24.012 14.017 20.363 15.511 20.856 16.713" />
    </g>
  );

  return isHovered ? normalHover : normal;
};

export default JointPain;
