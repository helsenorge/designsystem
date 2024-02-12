import React from 'react';

import { getIcon } from '../../utils/icon';
import { SvgPathProps } from '../Icon';

const Eraser: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <g>
      <path d="M28.747 30.364L17.984 19.601l.919-.919 10.763 10.763zM15.743 38.846h17.708v-1.3H15.743zM36.04 38.846h2.944v-1.3H36.04z" />
      <path d="M27.783 10.723l-18.13 18.13a2.724 2.724 0 000 3.847l4.72 4.683a.8.8 0 00.398.163h5.645c.103 0 .321-.09.394-.163l16.835-16.836-9.862-9.824zm-7.367 28.123h-5.645c-.444 0-.996-.227-1.313-.54L8.735 33.62a4.024 4.024 0 01-.002-5.687L26.97 9.699a1.152 1.152 0 011.626-.003L38.67 19.733c.218.216.338.505.338.813 0 .307-.119.596-.336.813L21.73 38.302a2.032 2.032 0 01-1.313.544z" />
    </g>
  );

  const normalHover = (
    <g>
      <path d="M33.147 30.364L22.384 19.601l.919-.919 10.763 10.763zM20.144 38.846h13.188v-1.3H20.144zM35.921 38.846h2.944v-1.3h-2.944z" />
      <path d="M32.183 10.722L14.052 28.853a2.724 2.724 0 000 3.847l4.722 4.682a.794.794 0 00.397.164h5.645c.103 0 .32-.09.394-.163l16.836-16.837-9.863-9.824zm-7.367 28.124H19.17c-.444 0-.996-.228-1.312-.54l-4.724-4.686a4.025 4.025 0 01-.002-5.686L31.369 9.698a1.153 1.153 0 011.626-.002L43.07 19.732c.217.217.338.505.338.813 0 .307-.12.596-.336.813L26.129 38.302a2.038 2.038 0 01-1.313.544z" />
    </g>
  );

  const xSmall = (
    <path d="M35.79 38.95h2.943v-1.77H35.79v1.77zm-15.756-1.77h-5.381a.943.943 0 01-.459-.189l-4.627-4.589a2.466 2.466 0 01-.727-1.757c0-.663.257-1.287.727-1.757l8.626-8.626 9.513 9.512-7.219 7.218a.966.966 0 01-.453.187zm7.5-26.26l9.53 9.496-8.107 8.107-9.513-9.513 8.09-8.09zm10.96 10.566c.286-.287.444-.668.443-1.074a1.506 1.506 0 00-.445-1.07l-9.89-9.851a1.523 1.523 0 00-2.143.003L8.317 27.638a4.222 4.222 0 00-1.246 3.007c0 1.137.442 2.206 1.248 3.01l4.63 4.593c.409.406 1.126.701 1.704.701H33.2v-1.77H22.8l15.694-15.693z" />
  );

  const xSmallHover = (
    <path d="M33.475 28.523l-9.513-9.513 8.09-8.09 9.53 9.496-8.107 8.107zm-8.47 8.47a.955.955 0 01-.451.188H19.17a.95.95 0 01-.457-.189l-4.628-4.59a2.464 2.464 0 01-.728-1.757c0-.663.258-1.287.728-1.757l8.626-8.626 9.513 9.511-7.22 7.22zm18.006-17.65L33.12 9.49a1.523 1.523 0 00-2.143.002L12.835 27.637a4.224 4.224 0 00-1.245 3.008c0 1.137.442 2.205 1.248 3.01l4.63 4.593c.41.405 1.126.701 1.703.701H33.2v-1.768h-5.88l15.693-15.695c.286-.287.444-.668.442-1.074a1.506 1.506 0 00-.444-1.07zm-7.222 19.606h2.943v-1.768H35.79v1.768z" />
  );

  return getIcon({ size, isHovered, normal, normalHover, xSmall, xSmallHover });
};

export default Eraser;
