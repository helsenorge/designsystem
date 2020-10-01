import React from 'react';
import {SvgPathProps} from './Icon';

const Microscope: React.FC<SvgPathProps> = ({isExtraSmall, isHovered}: SvgPathProps): JSX.Element => {
  const normal = (
    <path
      fillRule="evenodd"
      d="M22.204 39.348h4.362v-7.884h-4.362v7.884zm-1.301-4.857a11.107 11.107 0 01-9.923-11.057c0-6.138 4.994-11.133 11.134-11.133.846 0 1.681.117 2.497.305l-.026 3.193a7.975 7.975 0 00-2.471-.393c-4.427 0-8.029 3.602-8.029 8.028 0 4.016 2.965 7.342 6.818 7.929v3.128zm5.025-23.804c.013-1.555 1.305-2.781 2.846-2.798l.514.004a2.828 2.828 0 012.799 2.847l-.09 10.587-6.159-.052.09-10.588zm4.432 12.357c-.002.374-.15.724-.417.986a1.405 1.405 0 01-.992.402 1.4 1.4 0 01-1.385-1.408l.003-.433 2.794.023-.003.43zm6.71 8.42v-1.3H22.114a6.738 6.738 0 01-6.73-6.73 6.737 6.737 0 016.73-6.729c.853 0 1.676.166 2.459.476l-.046 5.383 1.742.014-.003.437a2.7 2.7 0 002.674 2.716l.023.001c.713 0 1.384-.275 1.892-.776.514-.506.8-1.182.805-1.902l.003-.43 1.622.014.101-11.887a4.127 4.127 0 00-4.087-4.157l-.514-.005c-2.282-.031-4.138 1.815-4.157 4.088l-.005.579a12.47 12.47 0 00-2.509-.255c-6.857 0-12.434 5.578-12.434 12.433a12.404 12.404 0 0011.223 12.361v3.553h-5.409v1.3h17.781v-1.3h-5.409v-7.884h9.204zm-12.686 3.01a.677.677 0 10.001-1.355.677.677 0 00-.001 1.355z"
    />
  );

  const normalHover = (
    <path
      fillRule="evenodd"
      d="M31.207 25.828l1.385 2.02.824-.566-1.384-2.018-.825.564zm-2.74 3.105h1v-2.277h-1v2.277zm-3.95-1.65l.824.564 1.384-2.019-.825-.564-1.384 2.018zm-2.314 12.066h4.362v-7.884h-4.362v7.884zm-1.3-4.857a11.108 11.108 0 01-9.924-11.057c0-6.14 4.995-11.133 11.134-11.133.846 0 1.681.117 2.498.305l-.027 3.193a7.967 7.967 0 00-2.47-.395c-4.428 0-8.03 3.603-8.03 8.03 0 4.015 2.966 7.341 6.82 7.928v3.129zm5.025-23.804a2.825 2.825 0 012.845-2.799l.515.005a2.826 2.826 0 012.798 2.845l-.09 10.588-6.158-.053.09-10.587zm4.431 12.356c-.002.373-.15.723-.416.986-.266.262-.61.42-.992.401a1.4 1.4 0 01-1.386-1.407l.003-.434 2.795.024-.004.43zm6.711 8.42v-1.3H22.113a6.737 6.737 0 01-6.729-6.73 6.737 6.737 0 016.73-6.729c.852 0 1.676.167 2.458.477l-.046 5.382 1.743.014-.004.438a2.702 2.702 0 002.674 2.716h.024a2.68 2.68 0 001.892-.776 2.683 2.683 0 00.805-1.902l.003-.43 1.622.015.101-11.888A4.127 4.127 0 0029.3 6.594l-.514-.005c-2.304-.045-4.139 1.814-4.158 4.088l-.004.579a12.478 12.478 0 00-2.51-.255c-6.856 0-12.434 5.577-12.434 12.434a12.404 12.404 0 0011.224 12.36v3.553h-5.409v1.3h17.781v-1.3h-5.41v-7.883h9.205zm-12.686 3.01a.678.678 0 100-1.355.678.678 0 000 1.355z"
    />
  );

  return isHovered ? normalHover : normal;
};

export default Microscope;
