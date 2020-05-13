import React from 'react';
import {IconRawProps} from './Icon';

const PaintRoller = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <path
      fillRule="evenodd"
      d="M26.0945,30.278 L26.0945,39.695 C26.0945,40.74 25.2445,41.59 24.1995,41.59 C23.1555,41.59 22.3055,40.74 22.3055,39.695 L22.3055,30.278 L26.0945,30.278 Z M37.7825,18.091 C37.7825,19.126 36.9415,19.966 35.9075,19.966 L12.4125,19.966 C11.3785,19.966 10.5375,19.126 10.5375,18.091 L10.5375,11.379 C10.5375,10.344 11.3785,9.504 12.4125,9.504 L12.8105,9.504 C13.6495,9.504 14.3305,10.186 14.3305,11.025 L14.3305,13.701 C14.3305,14.345 14.6055,14.965 15.0825,15.398 C15.5585,15.832 16.1985,16.042 16.8485,15.984 C18.1065,15.864 18.9195,15.059 18.9195,13.933 L18.9195,13.175 C18.9195,12.892 19.0345,12.631 19.2445,12.44 C19.4545,12.25 19.7345,12.153 20.0135,12.187 C20.5145,12.234 20.9075,12.7 20.9075,13.247 L20.9075,17.136 C20.9075,17.782 21.1815,18.401 21.6585,18.836 C22.0815,19.219 22.6355,19.43 23.2045,19.43 C23.2785,19.43 23.3515,19.427 23.4245,19.421 C24.5845,19.309 25.4945,18.275 25.4945,17.066 L25.4945,13.175 C25.4945,12.892 25.6105,12.631 25.8205,12.44 C26.0305,12.25 26.3085,12.153 26.5885,12.187 C27.0895,12.234 27.4825,12.7 27.4825,13.247 L27.4825,15.285 C27.4825,15.93 27.7565,16.549 28.2345,16.983 C28.7115,17.417 29.3565,17.631 29.9995,17.568 C31.1595,17.457 32.0705,16.423 32.0705,15.214 L32.0705,11.052 C32.0705,10.198 32.7655,9.504 33.6195,9.504 L35.9075,9.504 C36.9415,9.504 37.7825,10.344 37.7825,11.379 L37.7825,18.091 Z M31.2335,9.504 C30.9425,9.95 30.7695,10.481 30.7695,11.052 L30.7695,15.214 C30.7695,15.759 30.3765,16.225 29.8755,16.273 C29.5845,16.305 29.3175,16.211 29.1085,16.02 C28.8985,15.83 28.7825,15.568 28.7825,15.285 L28.7825,13.247 C28.7825,12.037 27.8725,11.003 26.7115,10.892 C26.0565,10.833 25.4225,11.045 24.9465,11.478 C24.4685,11.912 24.1945,12.531 24.1945,13.175 L24.1945,17.066 C24.1945,17.612 23.8015,18.078 23.3005,18.126 C23.0085,18.158 22.7405,18.064 22.5325,17.874 C22.3235,17.682 22.2075,17.421 22.2075,17.136 L22.2075,13.247 C22.2075,12.037 21.2975,11.003 20.1365,10.892 C19.4825,10.833 18.8475,11.045 18.3705,11.478 C17.8935,11.912 17.6185,12.531 17.6185,13.175 L17.6185,13.933 C17.6185,14.379 17.3185,14.633 16.7255,14.689 C16.4285,14.721 16.1665,14.627 15.9565,14.436 C15.7465,14.246 15.6315,13.984 15.6315,13.701 L15.6315,11.025 C15.6315,10.465 15.4625,9.944 15.1785,9.504 L31.2335,9.504 Z M9.2375,15.499 L8.4735,15.499 C8.0525,15.499 7.7105,15.156 7.7105,14.735 C7.7105,14.314 8.0525,13.971 8.4735,13.971 L9.2375,13.971 L9.2375,15.499 Z M40.9405,14.085 L39.0835,14.085 L39.0835,11.379 C39.0835,9.628 37.6575,8.203 35.9075,8.203 L12.4125,8.203 C10.6615,8.203 9.2375,9.628 9.2375,11.379 L9.2375,12.671 L8.4735,12.671 C7.3355,12.671 6.4095,13.597 6.4095,14.735 C6.4095,15.873 7.3355,16.799 8.4735,16.799 L9.2375,16.799 L9.2375,18.091 C9.2375,19.842 10.6615,21.267 12.4125,21.267 L35.9075,21.267 C37.6575,21.267 39.0835,19.842 39.0835,18.091 L39.0835,15.385 L40.2895,15.385 L40.2895,22.6 L24.0625,26.127 C23.7635,26.191 23.5495,26.456 23.5495,26.761 L23.5495,28.977 L20.6935,28.977 C20.3335,28.977 20.0425,29.268 20.0425,29.628 C20.0425,29.987 20.3335,30.278 20.6935,30.278 L21.0045,30.278 L21.0045,39.695 C21.0045,41.457 22.4385,42.89 24.1995,42.89 C25.9615,42.89 27.3955,41.457 27.3955,39.695 L27.3955,30.278 L27.7065,30.278 C28.0665,30.278 28.3575,29.987 28.3575,29.628 C28.3575,29.268 28.0665,28.977 27.7065,28.977 L24.8505,28.977 L24.8505,27.285 L41.0775,23.758 C41.3765,23.694 41.5905,23.429 41.5905,23.124 L41.5905,14.735 C41.5905,14.376 41.2995,14.085 40.9405,14.085 L40.9405,14.085 Z"
    />
  );

  const normalHover = (
    <path
      fillRule="evenodd"
      d="M26.0941,28.278 L26.0941,37.695 C26.0941,38.74 25.2441,39.59 24.1991,39.59 C23.1551,39.59 22.3051,38.74 22.3051,37.695 L22.3051,28.278 L26.0941,28.278 Z M37.7821,16.091 C37.7821,17.126 36.9421,17.966 35.9071,17.966 L12.4121,17.966 C11.3781,17.966 10.5371,17.126 10.5371,16.091 L10.5371,9.379 C10.5371,8.344 11.3781,7.504 12.4121,7.504 L12.8101,7.504 C13.6491,7.504 14.3311,8.186 14.3311,9.025 L14.3311,12.701 C14.3311,13.346 14.6061,13.965 15.0831,14.399 C15.5601,14.832 16.2001,15.044 16.8481,14.984 C18.1061,14.865 18.9191,14.059 18.9191,12.933 L18.9191,12.175 C18.9191,11.892 19.0341,11.631 19.2441,11.44 C19.4541,11.25 19.7261,11.153 20.0131,11.187 C20.5141,11.234 20.9071,11.7 20.9071,12.247 L20.9071,15.291 C20.9071,15.935 21.1811,16.554 21.6581,16.988 C22.0811,17.373 22.6351,17.584 23.2051,17.584 C23.2781,17.584 23.3511,17.581 23.4241,17.574 C24.5851,17.464 25.4951,16.429 25.4951,15.22 L25.4951,12.175 C25.4951,11.892 25.6111,11.631 25.8211,11.44 C26.0291,11.251 26.2991,11.15 26.5881,11.187 C27.0891,11.234 27.4821,11.7 27.4821,12.247 L27.4821,14.285 C27.4821,14.929 27.7561,15.549 28.2341,15.982 C28.7111,16.417 29.3571,16.627 30.0001,16.568 C31.1601,16.456 32.0711,15.423 32.0711,14.214 L32.0711,9.053 C32.0711,8.199 32.7651,7.504 33.6191,7.504 L35.9071,7.504 C36.9421,7.504 37.7821,8.344 37.7821,9.379 L37.7821,16.091 Z M31.2341,7.504 C30.9431,7.951 30.7701,8.481 30.7701,9.053 L30.7701,14.214 C30.7701,14.759 30.3771,15.225 29.8761,15.273 C29.5861,15.306 29.3181,15.211 29.1081,15.02 C28.8981,14.83 28.7821,14.568 28.7821,14.285 L28.7821,12.247 C28.7821,11.037 27.8721,10.003 26.7111,9.892 C26.0571,9.832 25.4231,10.045 24.9471,10.477 C24.4691,10.912 24.1951,11.53 24.1951,12.175 L24.1951,15.22 C24.1951,15.766 23.8021,16.232 23.3011,16.279 C23.0091,16.309 22.7421,16.215 22.5321,16.026 C22.3231,15.836 22.2071,15.574 22.2071,15.291 L22.2071,12.247 C22.2071,11.037 21.2971,10.003 20.1361,9.892 C19.4811,9.83 18.8471,10.045 18.3701,10.478 C17.8931,10.912 17.6181,11.531 17.6181,12.175 L17.6181,12.933 C17.6181,13.379 17.3181,13.633 16.7251,13.689 C16.4331,13.72 16.1661,13.627 15.9571,13.436 C15.7471,13.246 15.6321,12.984 15.6321,12.701 L15.6321,9.025 C15.6321,8.465 15.4631,7.944 15.1791,7.504 L31.2341,7.504 Z M9.2371,13.499 L8.4741,13.499 C8.0531,13.499 7.7101,13.156 7.7101,12.735 C7.7101,12.314 8.0531,11.971 8.4741,11.971 L9.2371,11.971 L9.2371,13.499 Z M40.9401,12.085 L39.0831,12.085 L39.0831,9.379 C39.0831,7.628 37.6581,6.203 35.9071,6.203 L12.4121,6.203 C10.6611,6.203 9.2371,7.628 9.2371,9.379 L9.2371,10.671 L8.4741,10.671 C7.3361,10.671 6.4091,11.597 6.4091,12.735 C6.4091,13.873 7.3361,14.799 8.4741,14.799 L9.2371,14.799 L9.2371,16.091 C9.2371,17.842 10.6611,19.267 12.4121,19.267 L35.9071,19.267 C37.6581,19.267 39.0831,17.842 39.0831,16.091 L39.0831,13.385 L40.2891,13.385 L40.2891,20.6 L24.0621,24.127 C23.7631,24.191 23.5491,24.456 23.5491,24.761 L23.5491,26.977 L20.6941,26.977 C20.3341,26.977 20.0431,27.268 20.0431,27.628 C20.0431,27.987 20.3341,28.278 20.6941,28.278 L21.0041,28.278 L21.0041,37.695 C21.0041,39.457 22.4381,40.89 24.1991,40.89 C25.9611,40.89 27.3951,39.457 27.3951,37.695 L27.3951,28.278 L27.7061,28.278 C28.0661,28.278 28.3571,27.987 28.3571,27.628 C28.3571,27.268 28.0661,26.977 27.7061,26.977 L24.8501,26.977 L24.8501,25.285 L41.0771,21.758 C41.3761,21.694 41.5901,21.429 41.5901,21.124 L41.5901,12.735 C41.5901,12.376 41.2991,12.085 40.9401,12.085 L40.9401,12.085 Z"
    />
  );

  return (
    <svg
      width={size}
      height={size}
      fill={isHovered ? hoverColor : color}
      viewBox="0 0 48 48"
      ref={ref}
      className="icon"
      {...props}>
      {isHovered ? normalHover : normal}
    </svg>
  );
});

export default PaintRoller;
