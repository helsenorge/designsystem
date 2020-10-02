import React from 'react';
import {SvgPathProps} from './Icon';

const Forward: React.FC<SvgPathProps> = ({isExtraSmall, isHovered}: SvgPathProps): JSX.Element => {
  const normal = (
    <g>
      <path d="M7.333 24.941h32.309v-2H7.333z" />
      <path d="M28.963 36.596l-1.442-1.387 10.742-11.185-10.549-11.242 1.458-1.369L41.021 24.04z" />
    </g>
  );

  const normalHover = (
    <g>
      <path d="M7.213 24.941h36.099v-2H7.213z" />
      <path d="M32.634 36.596l-1.442-1.387 10.741-11.185-10.548-11.242 1.458-1.369L44.691 24.04z" />
    </g>
  );

  const simplified = <path d="M28.999 11l-1.84 1.759 9.102 9.889H7v2.571h29.388l-9.42 9.999L28.787 37 41 24.037z" />;

  const simplifiedHover = (
    <path d="M32.93 11l-1.85 1.759 9.154 9.889H7v2.571h33.361l-9.473 9.999L32.717 37 45 24.037z" />
  );

  return isExtraSmall ? (isHovered ? simplifiedHover : simplified) : isHovered ? normalHover : normal;
};

export default Forward;
