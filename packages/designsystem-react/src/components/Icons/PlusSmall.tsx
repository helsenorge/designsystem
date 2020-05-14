import React from 'react';
import {IconRawProps} from './Icon';

const PlusSmall = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, className, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <path
      fillRule="evenodd"
      d="M24.9999999,14.225125 L24.999124,22.999125 L33.774875,23 L33.774875,25 L24.999124,24.999125 L24.9999999,33.774876 L22.9999999,33.774876 L22.999124,24.999125 L14.225124,25 L14.225124,23 L22.999124,22.999125 L22.9999999,14.225125 L24.9999999,14.225125 Z"
    />
  );

  const normalHover = (
    <path
      fillRule="evenodd"
      d="M24.9999999,12.225125 L24.999124,22.999125 L35.774875,23 L35.774875,25 L24.999124,24.999125 L24.9999999,35.774876 L22.9999999,35.774876 L22.999124,24.999125 L12.225124,25 L12.225124,23 L22.999124,22.999125 L22.9999999,12.225125 L24.9999999,12.225125 Z"
    />
  );

  const simplified = (
    <path
      fillRule="evenodd"
      d="M24,14.1791048 L23.9999469,22.7361048 L32.5577376,22.7368421 L32.5577376,25.2631579 L23.9999469,25.2631048 L24,33.8208952 L21.4736842,33.8208952 L21.4729469,25.2631048 L12.9159469,25.2631579 L12.9159469,22.7368421 L21.4729469,22.7361048 L21.4736842,14.1791048 L24,14.1791048 Z"
    />
  );

  const simplifiedHover = (
    <path
      fillRule="evenodd"
      d="M24,11.652789 L23.9996311,22.736789 L35.0840534,22.7368421 L35.0840534,25.2631579 L23.9996311,25.262789 L24,36.347211 L21.4736842,36.347211 L21.4736311,25.262789 L10.3896311,25.2631579 L10.3896311,22.7368421 L21.4736311,22.736789 L21.4736842,11.652789 L24,11.652789 Z"
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
      {isExtraSmall ? (isHovered ? simplifiedHover : simplified) : isHovered ? normalHover : normal}
    </svg>
  );
});

export default PlusSmall;
