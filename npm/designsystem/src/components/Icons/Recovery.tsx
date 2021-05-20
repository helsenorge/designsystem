import React from 'react';
import { SvgPathProps } from './Icon';

const Recovery: React.FC<SvgPathProps> = ({ isExtraSmall, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <path
      d="M33.196 27.683h2.544v1.3h-2.544v2.544h-1.3v-2.544h-2.544v-1.3h2.544v-2.544h1.3v2.544zm-.65 5.668a5.024 5.024 0 0 1-5.018-5.018 5.024 5.024 0 0 1 5.018-5.02 5.024 5.024 0 0 1 5.018 5.02 5.024 5.024 0 0 1-5.018 5.018zM11.508 23.207a6.819 6.819 0 0 1-1.91-4.895A6.812 6.812 0 0 1 11.71 13.5a6.872 6.872 0 0 1 9.707.2L24 16.393l2.584-2.693c2.62-2.732 6.975-2.822 9.707-.2 2.732 2.62 2.822 6.975.202 9.705l-.113.117a6.284 6.284 0 0 0-3.834-1.307 6.325 6.325 0 0 0-6.318 6.318c0 1.518.54 2.914 1.435 4.005L24 36.127l-12.492-12.92zm25.921.9c3.118-3.25 3.011-8.428-.238-11.546-3.248-3.116-8.428-3.01-11.546.239L24 14.515 22.354 12.8c-3.118-3.25-8.297-3.355-11.546-.24a8.117 8.117 0 0 0-2.51 5.725 8.112 8.112 0 0 0 2.274 5.824L24 37.997l4.59-4.746a6.285 6.285 0 0 0 3.956 1.4 6.325 6.325 0 0 0 6.318-6.318 6.282 6.282 0 0 0-1.538-4.12l.103-.106z"
      fill="#000"
      fill-rule="evenodd"
    />
  );

  const normalHover = (
    <path
      d="M33.196 27.683h2.972v1.3h-2.972v2.97h-1.3v-2.97h-2.972v-1.3h2.972V24.71h1.3v2.972zm-.65 6.507a5.864 5.864 0 0 1-5.857-5.857 5.864 5.864 0 0 1 5.857-5.858 5.864 5.864 0 0 1 5.857 5.858 5.864 5.864 0 0 1-5.857 5.857zM11.508 23.207a6.819 6.819 0 0 1-1.91-4.895A6.812 6.812 0 0 1 11.71 13.5a6.872 6.872 0 0 1 9.707.2L24 16.393l2.584-2.693c2.62-2.731 6.975-2.822 9.707-.2a6.82 6.82 0 0 1 2.111 4.812 6.819 6.819 0 0 1-1.464 4.382 7.112 7.112 0 0 0-4.392-1.518 7.164 7.164 0 0 0-7.157 7.157c0 1.755.638 3.363 1.69 4.609L24 36.127l-12.492-12.92zm26.377.376a8.1 8.1 0 0 0 1.816-5.298 8.113 8.113 0 0 0-2.51-5.724c-3.249-3.117-8.428-3.01-11.546.239L24 14.515 22.354 12.8c-3.116-3.247-8.296-3.355-11.546-.24a8.117 8.117 0 0 0-2.51 5.725 8.112 8.112 0 0 0 2.274 5.824L24 37.997l4.002-4.14a7.122 7.122 0 0 0 4.544 1.633c3.946 0 7.157-3.211 7.157-7.157a7.122 7.122 0 0 0-1.818-4.75z"
      fill="#000"
      fill-rule="evenodd"
    />
  );

  return isHovered ? normalHover : normal;
};

export default Recovery;
