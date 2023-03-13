import React from 'react';

import { SvgPathProps } from './Icon';

const CheckOutline: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <path
      d="m9.16 23.421 2.883-2.773 8.262 8.584L35.958 12.97l2.882 2.774-18.536 19.257-11.143-11.58zm26.744-13.279-15.6 16.206-8.206-8.529-5.766 5.547 13.973 14.518 21.362-22.193-5.764-5.549z"
      fillRule="evenodd"
    />
  );

  const normalHover = (
    <path
      d="m11.128 25.394 2.88-2.771 6.291 6.613 17.071-17.68 2.882 2.775-19.944 20.668-9.18-9.605zM37.318 8.73 20.31 26.345l-6.239-6.558-5.766 5.548 11.996 12.552 22.781-23.609-5.764-5.548z"
      fillRule="evenodd"
    />
  );

  return isHovered ? normalHover : normal;
};

export default CheckOutline;
