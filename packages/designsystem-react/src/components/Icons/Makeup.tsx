import React from 'react';
import {SvgPathProps} from './Icon';

const Makeup: React.FC<SvgPathProps> = ({isExtraSmall, isHovered}: SvgPathProps): JSX.Element => {
  const normal = (
    <path
      fillRule="evenodd"
      d="M43.7966,8.9221 L42.1026,34.6521 L40.8306,34.6521 L40.8306,37.3371 C40.8306,38.2961 40.0496,39.0771 39.0906,39.0771 L39.0906,39.0771 L32.4206,39.0771 C31.4606,39.0771 30.6806,38.2961 30.6806,37.3371 L30.6806,37.3371 L30.6806,34.6521 L29.4076,34.6521 L27.7136,8.9221 L43.7966,8.9221 Z M22.0001,17.614 C23.3911,17.614 24.5241,18.746 24.5241,20.138 L24.5241,20.138 L24.5241,25.721 L24.1731,25.721 L24.1731,26.776 C26.0891,27.853 27.3061,29.933 27.3061,32.188 C27.3061,34.436 26.0891,36.512 24.1731,37.589 L24.1731,37.589 L24.1731,39.077 L18.2321,39.077 L18.2321,37.7 C16.3421,36.625 15.0991,34.463 15.0991,32.188 C15.0991,29.933 16.3151,27.853 18.2321,26.776 L18.2321,26.776 L18.2321,25.721 L17.8811,25.721 L17.8811,20.138 C17.8811,18.746 19.0131,17.614 20.4051,17.614 L20.4051,17.614 Z M7.1492,16.9468 C7.6952,16.7218 8.3172,16.8448 8.7352,17.2628 L8.7352,17.2628 L9.9842,18.5128 C10.4282,18.9568 10.6722,19.5458 10.6722,20.1738 L10.6722,20.1738 L10.6722,22.7538 L12.0382,22.7538 L12.0382,29.4158 L12.8132,29.4158 L12.8132,37.0068 C12.8132,38.1488 11.8842,39.0768 10.7422,39.0768 L10.7422,39.0768 L6.3172,39.0768 C5.1752,39.0768 4.2462,38.1488 4.2462,37.0068 L4.2462,37.0068 L4.2462,29.4158 L5.0222,29.4158 L5.0222,22.7538 L6.2512,22.7538 L6.2512,18.2918 C6.2512,17.7008 6.6042,17.1738 7.1492,16.9468 Z M39.5306,34.6521 L31.9796,34.6521 L31.9796,37.3371 C31.9796,37.5801 32.1776,37.7771 32.4206,37.7771 L32.4206,37.7771 L39.0906,37.7771 C39.3326,37.7771 39.5306,37.5801 39.5306,37.3371 L39.5306,37.3371 L39.5306,34.6521 Z M20.7031,25.736 L19.5321,25.736 L19.5321,27.583 L19.1601,27.758 C17.5081,28.54 16.3991,30.32 16.3991,32.188 C16.3991,34.086 17.5341,35.949 19.1601,36.718 L19.1601,36.718 L19.5321,36.894 L19.5321,37.777 L22.8731,37.777 L22.8731,36.782 L23.2451,36.606 C24.9221,35.813 26.0061,34.079 26.0061,32.188 C26.0061,30.32 24.8961,28.54 23.2451,27.758 L23.2451,27.758 L22.8731,27.583 L22.8731,25.736 L21.7031,25.736 L21.7031,33.081 L20.7031,33.081 L20.7031,25.736 Z M11.5132,30.7158 L5.5472,30.7158 L5.5472,37.0068 C5.5472,37.4318 5.8922,37.7768 6.3172,37.7768 L6.3172,37.7768 L10.7422,37.7768 C11.1672,37.7768 11.5132,37.4318 11.5132,37.0068 L11.5132,37.0068 L11.5132,30.7158 Z M42.2216,13.0721 L29.2896,13.0721 L30.6246,33.3521 L40.8856,33.3521 L42.2216,13.0721 Z M10.7382,24.0528 L6.3222,24.0528 L6.3222,29.4158 L10.7382,29.4158 L10.7382,24.0528 Z M22.0001,18.914 L20.4051,18.914 C19.7301,18.914 19.1811,19.463 19.1811,20.138 L19.1811,20.138 L19.1811,24.421 L23.2241,24.421 L23.2241,20.138 C23.2241,19.463 22.6751,18.914 22.0001,18.914 L22.0001,18.914 Z M7.69285625,18.135675 L7.6472,18.1488 C7.5832,18.1748 7.5512,18.2228 7.5512,18.2918 L7.5512,18.2918 L7.5512,22.7538 L9.3722,22.7538 L9.3722,20.1738 C9.3722,19.8928 9.2632,19.6298 9.0652,19.4318 L9.0652,19.4318 L7.8152,18.1818 C7.7672,18.1328 7.7092,18.1218 7.6472,18.1488 Z M42.4086,10.2231 L29.1016,10.2231 L29.2046,11.7711 L42.3066,11.7711 L42.4086,10.2231 Z"
    />
  );

  const normalHover = (
    <path
      fillRule="evenodd"
      d="M43.7976,8.9221 L42.1026,34.6521 L40.8306,34.6521 L40.8306,37.3371 C40.8306,38.2961 40.0496,39.0771 39.0906,39.0771 L39.0906,39.0771 L32.4206,39.0771 C31.4606,39.0771 30.6806,38.2961 30.6806,37.3371 L30.6806,37.3371 L30.6806,34.6521 L29.4076,34.6521 L27.7136,8.9221 L43.7976,8.9221 Z M22.0001,14.808 C23.3911,14.808 24.5241,15.94 24.5241,17.332 L24.5241,17.332 L24.5241,22.916 L21.7031,22.916 L21.7031,24.436 L24.1731,24.436 L24.1731,26.776 C26.0891,27.853 27.3061,29.933 27.3061,32.188 C27.3061,34.436 26.0891,36.512 24.1731,37.589 L24.1731,37.589 L24.1731,39.077 L18.2321,39.077 L18.2321,37.7 C16.3421,36.625 15.0991,34.463 15.0991,32.188 C15.0991,29.933 16.3161,27.853 18.2321,26.776 L18.2321,26.776 L18.2321,24.436 L20.7031,24.436 L20.7031,22.916 L17.8811,22.916 L17.8811,17.332 C17.8811,15.94 19.0131,14.808 20.4051,14.808 L20.4051,14.808 Z M7.1492,15.4468 C7.6952,15.2218 8.3172,15.3448 8.7352,15.7628 L8.7352,15.7628 L9.9842,17.0128 C10.4282,17.4558 10.6722,18.0458 10.6722,18.6738 L10.6722,18.6738 L10.6722,22.7538 L12.0382,22.7538 L12.0382,29.4158 L12.8132,29.4158 L12.8132,37.0068 C12.8132,38.1488 11.8842,39.0768 10.7432,39.0768 L10.7432,39.0768 L6.3172,39.0768 C5.1752,39.0768 4.2472,38.1488 4.2472,37.0068 L4.2472,37.0068 L4.2472,29.4158 L5.0222,29.4158 L5.0222,22.7538 L6.2512,22.7538 L6.2512,16.7918 C6.2512,16.2008 6.6042,15.6738 7.1492,15.4468 Z M39.5306,34.6521 L31.9806,34.6521 L31.9806,37.3371 C31.9806,37.5801 32.1776,37.7771 32.4206,37.7771 L32.4206,37.7771 L39.0906,37.7771 C39.3326,37.7771 39.5306,37.5801 39.5306,37.3371 L39.5306,37.3371 L39.5306,34.6521 Z M20.7031,25.736 L19.5321,25.736 L19.5321,27.583 L19.1601,27.758 C17.5081,28.54 16.3991,30.32 16.3991,32.188 C16.3991,34.086 17.5341,35.949 19.1601,36.718 L19.1601,36.718 L19.5321,36.894 L19.5321,37.777 L22.8731,37.777 L22.8731,36.782 L23.2451,36.606 C24.9221,35.813 26.0061,34.079 26.0061,32.188 C26.0061,30.32 24.8961,28.54 23.2451,27.758 L23.2451,27.758 L22.8731,27.583 L22.8731,25.736 L21.7031,25.736 L21.7031,30.274 L20.7031,30.274 L20.7031,25.736 Z M11.5132,30.7158 L5.5472,30.7158 L5.5472,37.0068 C5.5472,37.4318 5.8922,37.7768 6.3172,37.7768 L6.3172,37.7768 L10.7432,37.7768 C11.1672,37.7768 11.5132,37.4318 11.5132,37.0068 L11.5132,37.0068 L11.5132,30.7158 Z M42.2216,13.0721 L29.2896,13.0721 L30.6246,33.3521 L40.8856,33.3521 L42.2216,13.0721 Z M10.7392,24.0528 L6.3222,24.0528 L6.3222,29.4158 L10.7392,29.4158 L10.7392,24.0528 Z M7.69327812,16.635675 L7.6472,16.6488 C7.5832,16.6748 7.5512,16.7228 7.5512,16.7918 L7.5512,16.7918 L7.5512,22.7538 L9.3722,22.7538 L9.3722,18.6738 C9.3722,18.3928 9.2632,18.1298 9.0652,17.9318 L9.0652,17.9318 L7.8152,16.6818 C7.7672,16.6328 7.7102,16.6218 7.6472,16.6488 Z M22.0001,16.108 L20.4051,16.108 C19.7301,16.108 19.1811,16.657 19.1811,17.332 L19.1811,17.332 L19.1811,21.615 L23.2241,21.615 L23.2241,17.332 C23.2241,16.657 22.6751,16.108 22.0001,16.108 L22.0001,16.108 Z M42.4086,10.2231 L29.1016,10.2231 L29.2046,11.7711 L42.3066,11.7711 L42.4086,10.2231 Z"
    />
  );

  return isHovered ? normalHover : normal;
};

export default Makeup;
