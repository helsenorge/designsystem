import React from 'react';
import {IconRawProps} from './Icon';

const ArmFlexing = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, className, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <path
      fillRule="evenodd"
      d="M27.1785,39.9231 C16.8625,39.9231 14.0705,35.8331 14.0465,35.7961 L13.8555,35.4921 L13.4965,35.4921 C9.9975,35.4921 8.3995,32.4161 8.2145,30.4771 C7.9575,27.7931 8.6315,24.5251 10.0625,21.5071 C10.8425,19.8631 12.2255,17.3081 13.2485,15.4541 C13.7645,14.5191 14.0835,13.5191 14.3915,12.5521 C14.5965,11.9061 14.7915,11.2971 15.0405,10.7011 C16.1445,8.0621 18.5015,8.0651 18.6165,8.0771 L26.4115,8.0771 C27.2625,8.0771 27.9545,8.7701 27.9545,9.6201 L27.9545,13.0601 C27.9545,13.6281 27.5145,14.0811 26.9605,14.1361 L26.9605,11.0081 C26.9605,9.9841 26.1265,9.1501 25.1025,9.1501 L24.2875,9.1501 L24.2875,10.4501 L25.1025,10.4501 C25.4095,10.4501 25.6595,10.7001 25.6595,11.0081 L25.6595,14.8081 C25.6595,15.4131 25.1685,15.9041 24.5645,15.9051 L24.5645,13.1131 C24.5645,12.0891 23.7305,11.2561 22.7065,11.2561 L22.3695,11.2561 L22.3695,12.5571 L22.7065,12.5571 C23.0135,12.5571 23.2635,12.8061 23.2635,13.1131 L23.2635,15.9831 C23.2635,16.5881 22.7715,17.0801 22.1655,17.0801 L21.7325,17.0801 C21.3195,17.0801 20.9845,16.7451 20.9845,16.3331 L20.9845,14.8381 L18.5575,14.8381 C17.9825,14.8381 17.5145,14.3711 17.5145,13.7961 L16.2145,13.7961 C16.2145,14.7871 16.8355,15.6321 17.7065,15.9731 L17.7065,24.4001 C17.2745,24.6771 16.9365,24.9311 16.7325,25.0881 L16.6045,25.1851 L17.3265,26.2671 C17.3685,26.2381 17.4355,26.1881 17.5275,26.1161 C18.1335,25.6491 19.9775,24.2251 22.4135,24.2251 C25.3355,24.2251 27.3575,26.3671 27.5785,26.6111 L28.5425,25.7401 C28.4035,25.5851 28.0435,25.2221 27.5265,24.8131 C28.7705,24.1101 30.1655,23.7221 31.6255,23.7221 C36.1545,23.7221 39.8395,27.3101 39.8395,31.7211 C39.8395,36.6271 33.2925,39.9231 27.1785,39.9231 M31.6255,22.4211 C29.7175,22.4211 27.8945,22.9731 26.3235,24.0071 C25.3005,23.4251 23.9825,22.9241 22.4135,22.9241 C21.0905,22.9241 19.9415,23.2721 19.0065,23.6951 L19.0065,16.1391 L19.6845,16.1391 L19.6845,16.3331 C19.6845,17.4621 20.6025,18.3811 21.7325,18.3811 L22.1655,18.3811 C23.0395,18.3811 23.7975,17.9061 24.2165,17.2071 L24.5615,17.2071 C25.6585,17.2071 26.5865,16.4661 26.8705,15.4581 C28.1865,15.4501 29.2545,14.3771 29.2545,13.0601 L29.2545,9.6201 C29.2545,8.0531 27.9795,6.7771 26.4115,6.7771 L18.6365,6.7771 C18.4995,6.7641 15.2985,6.7151 13.8415,10.1991 C13.5705,10.8481 13.3575,11.5131 13.1535,12.1571 C12.8505,13.1061 12.5655,14.0021 12.1105,14.8251 C11.0785,16.6961 9.6815,19.2771 8.8875,20.9501 C7.3585,24.1731 6.6415,27.6911 6.9205,30.6001 C7.1995,33.5171 9.4745,36.6101 13.1675,36.7851 C14.0275,37.8291 17.5635,41.2241 27.1785,41.2241 C33.8925,41.2241 41.1385,37.5901 41.1385,31.7211 C41.1385,26.5931 36.8715,22.4211 31.6255,22.4211 M25.4595,34.1761 C23.2295,34.1761 21.3125,33.4231 20.2675,32.9111 L20.2825,32.8851 L19.3645,32.4151 L18.7105,33.5361 C18.8305,33.6151 21.6985,35.4771 25.4595,35.4771 C28.6945,35.4771 31.6265,34.3051 31.7495,34.2551 L31.2625,33.0501 C31.2345,33.0611 28.4335,34.1761 25.4595,34.1761"
    />
  );

  const normalHover = (
    <path
      fillRule="evenodd"
      d="M37.8228,36.136 C35.4738,38.476 31.4298,39.924 27.2558,39.924 C27.2308,39.924 27.2058,39.924 27.1808,39.923 C16.3628,39.878 13.7768,35.477 13.7548,35.438 L13.6348,35.101 L13.2448,35.101 C9.3558,34.53 8.2848,31.024 8.5238,28.948 C8.8318,26.271 10.1728,23.214 12.2008,20.561 C13.2998,19.124 15.1888,16.909 16.5798,15.305 C17.2798,14.497 17.7998,13.586 18.3018,12.704 C18.6378,12.115 18.9548,11.56 19.3228,11.03 C20.9528,8.678 23.2538,9.184 23.3668,9.209 L30.9908,10.834 C31.8228,11.012 32.3558,11.833 32.1788,12.665 L31.4618,16.03 C31.4008,16.317 31.2308,16.563 30.9848,16.722 C30.7698,16.863 30.5168,16.906 30.2638,16.876 L30.9168,13.815 C31.1308,12.814 30.4898,11.825 29.4868,11.611 L28.6898,11.441 L28.4188,12.712 L29.2158,12.882 C29.5168,12.947 29.7098,13.243 29.6448,13.543 L28.8528,17.261 C28.7268,17.853 28.1428,18.235 27.5518,18.107 L28.1348,15.375 C28.2378,14.89 28.1458,14.393 27.8758,13.977 C27.6058,13.561 27.1898,13.275 26.7048,13.171 L26.3748,13.101 L26.1038,14.372 L26.4338,14.443 C26.5798,14.474 26.7048,14.56 26.7858,14.684 C26.8668,14.809 26.8938,14.958 26.8628,15.104 L26.2648,17.909 C26.1388,18.501 25.5538,18.882 24.9628,18.755 L24.5368,18.664 C24.3418,18.623 24.1748,18.508 24.0658,18.34 C23.9568,18.173 23.9208,17.973 23.9618,17.778 L24.2748,16.317 L21.8998,15.81 C21.6268,15.752 21.3938,15.591 21.2418,15.358 C21.0908,15.124 21.0388,14.845 21.0968,14.573 L19.8258,14.301 C19.6958,14.913 19.8108,15.54 20.1518,16.065 C20.3318,16.342 20.5658,16.571 20.8338,16.746 L19.6148,22.929 C18.1648,23.583 17.1288,24.565 16.6828,24.992 C16.6238,25.049 16.5798,25.092 16.5518,25.115 L17.3798,26.118 C17.4208,26.083 17.4898,26.02 17.5818,25.931 C18.1848,25.354 20.0198,23.598 22.4138,23.598 C25.2978,23.598 27.3148,26.255 27.5348,26.559 L28.5868,25.793 C28.4538,25.612 28.1398,25.203 27.6658,24.728 C28.8748,24.076 30.2198,23.722 31.6258,23.722 C36.1548,23.722 39.8388,27.31 39.8388,31.721 C39.8388,33.296 39.1418,34.823 37.8228,36.136 M31.6258,22.421 C29.8368,22.421 28.1198,22.902 26.6178,23.814 C25.5608,23.018 24.1308,22.297 22.4138,22.297 C21.9268,22.297 21.4708,22.368 21.0318,22.466 L22.0738,17.177 L22.7308,17.317 L22.6908,17.506 C22.5768,18.041 22.6778,18.589 22.9748,19.048 C23.2728,19.507 23.7318,19.823 24.2658,19.936 L24.6908,20.027 C24.8588,20.063 25.0258,20.079 25.1908,20.079 C25.8668,20.079 26.5008,19.788 26.9478,19.308 L27.2788,19.378 C28.3518,19.61 29.4138,19.076 29.9018,18.149 C30.5238,18.278 31.1588,18.158 31.6928,17.813 C32.2298,17.464 32.5998,16.927 32.7328,16.301 L33.4498,12.937 C33.7768,11.404 32.7958,9.89 31.2618,9.563 L23.6578,7.943 C23.5258,7.909 20.4058,7.186 18.2548,10.289 C17.8538,10.866 17.5088,11.473 17.1738,12.06 C16.6798,12.925 16.2138,13.742 15.5968,14.453 C14.1948,16.073 12.2868,18.309 11.1688,19.772 C9.0018,22.605 7.5668,25.896 7.2328,28.799 C6.9438,31.312 8.2108,35.526 12.7978,36.345 C13.5808,37.445 16.9918,41.181 27.1758,41.224 L27.2548,41.224 C31.7608,41.224 36.1558,39.631 38.7398,37.058 C40.3098,35.494 41.1388,33.65 41.1388,31.721 C41.1388,26.593 36.8708,22.421 31.6258,22.421 M25.4588,34.176 C23.2288,34.176 21.3118,33.423 20.2668,32.911 L20.2808,32.883 L19.3638,32.414 L18.7108,33.536 C18.8308,33.615 21.6978,35.477 25.4588,35.477 C28.6938,35.477 31.6268,34.305 31.7498,34.255 L31.2618,33.05 C31.2348,33.062 28.4438,34.176 25.4588,34.176"
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

export default ArmFlexing;
