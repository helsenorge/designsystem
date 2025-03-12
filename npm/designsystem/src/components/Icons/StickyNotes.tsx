import React from 'react';

import { SvgPathProps } from '../Icon';

const StickyNote: React.FC<SvgPathProps> = ({ isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.686 35.08H9V9h24.883v2.648h-1.3V10.3H10.3v23.48h2.386v1.3Zm11.784 4.223H14.404v-26.08h24.883v10.682h.013v.858c0 .104-.004.207-.013.309v.975a4.65 4.65 0 0 1-1.326 3.251l-8.418 8.607a4.65 4.65 0 0 1-3.324 1.398H24.47Zm0-1.3h-8.766v-23.48h22.283V25.01a2.35 2.35 0 0 1-2.337 2.102h-7.895v8.54a2.35 2.35 0 0 1-2.35 2.35h-.935Zm4.433-1.303 8.129-8.31c.124-.128.237-.264.339-.407a3.634 3.634 0 0 1-1.721.43h-6.595v7.24c0 .364-.053.716-.152 1.047Zm5.786-17.884H19.003v-1.3h15.686v1.3ZM19.003 29.041H25v-1.3h-5.997v1.3Zm15.686-5.114H19.003v-1.3h15.686v1.3Z"
    />
  );

  const normalHover = (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.688 35.101H9V9h24.902v2.65h-1.3V10.3H10.3v23.501h2.388v1.3Zm1.72 4.227h24.903V13.227H14.409v26.1Zm1.3-1.3V14.527h22.303v23.5H15.709ZM34.71 18.823h-15.7v-1.3h15.7v1.3Zm-15.7 10.232h6.003v-1.3H19.01v1.3Zm15.7-5.117h-15.7v-1.3h15.7v1.3Z"
    />
  );

  return isHovered ? normalHover : normal;
};

export default StickyNote;
