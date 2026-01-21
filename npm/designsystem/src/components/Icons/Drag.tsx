import type React from 'react';

import type { SvgPathProps } from '../Icon';

import { getIcon } from '../Icon/utils';

const Drag: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <>
      <path d="M40 27.766H24.503v11.276l4.629-4.73.715.7-5.844 5.972-.358-.364-5.49-5.608.714-.7 4.634 4.733v-11.28H8v-1.5h32v1.5ZM29.847 12.984l-.358.351-.357.35-4.63-4.728v11.28H40v1.5H8v-1.5h15.503V8.954l-4.634 4.73-.357-.35-.358-.35 5.492-5.602.357-.365 5.844 5.966Z" />
    </>
  );

  const normalHover = (
    <>
      <path d="M40 28.764H24.503V40.04l4.629-4.73.715.7-5.844 5.972-.358-.364-5.49-5.608.714-.7 4.634 4.733v-11.28H8v-1.5h32v1.5ZM29.847 11.982l-.358.351-.357.35-4.63-4.728v11.28H40v1.5H8v-1.5h15.503V7.953l-4.634 4.73-.357-.35-.358-.35 5.492-5.602.357-.365 5.844 5.966Z" />
    </>
  );

  return getIcon({ size, isHovered, normal, normalHover });
};

export default Drag;
