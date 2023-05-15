import React from 'react';

import { SvgPathProps } from './Icon';

const LaptopBlog: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <path d="M31.509 23.697c0 .696-.567 1.263-1.265 1.263h-2.712v1.554l-2.416-1.554h-7.36a1.265 1.265 0 01-1.265-1.263V17.92c0-.697.567-1.264 1.265-1.264h12.488c.698 0 1.265.567 1.265 1.264v5.778zm-1.265-8.042H17.756a2.267 2.267 0 00-2.264 2.264v5.778a2.266 2.266 0 002.264 2.263h7.067l3.71 2.386V25.96h1.711a2.266 2.266 0 002.264-2.263V17.92a2.267 2.267 0 00-2.264-2.264zm11.931 17.88a2.022 2.022 0 01-2.02 2.02H7.844a2.023 2.023 0 01-2.021-2.02v-1.093h36.351v1.092zM8.166 13.82c0-.98.798-1.777 1.778-1.777h28.116c.979 0 1.776.797 1.776 1.777v17.322H8.164V13.82zm32.97 17.322V13.82a3.08 3.08 0 00-3.076-3.077H9.943a3.08 3.08 0 00-3.079 3.077v17.322h-2.34v2.392a3.325 3.325 0 003.322 3.321h32.308a3.325 3.325 0 003.322-3.32v-2.393h-2.34zm-22.223-8.849h6.396v-1h-6.396v1zm0-2.327h9.396v-1h-9.396v1z" />
  );

  const normalHover = (
    <path d="M31.509 23.697c0 .696-.567 1.263-1.265 1.263h-2.712v1.554l-2.416-1.554h-7.36a1.265 1.265 0 01-1.265-1.263V17.92c0-.697.567-1.264 1.265-1.264h12.488c.698 0 1.265.567 1.265 1.264v5.778zm-1.265-8.042H17.756a2.267 2.267 0 00-2.264 2.264v5.778a2.266 2.266 0 002.264 2.263h7.067l3.71 2.386V25.96h1.711a2.266 2.266 0 002.264-2.263V17.92a2.267 2.267 0 00-2.264-2.264zm11.931 17.88a2.022 2.022 0 01-2.02 2.02H7.844a2.023 2.023 0 01-2.021-2.02v-1.093h36.351v1.092zM8.166 13.82c0-.98.798-1.777 1.778-1.777h28.116c.979 0 1.776.797 1.776 1.777v17.322H8.164V13.82zm32.97 17.322V13.82a3.08 3.08 0 00-3.076-3.077H9.943a3.08 3.08 0 00-3.079 3.077v17.322h-2.34v2.392a3.325 3.325 0 003.322 3.321h32.308a3.325 3.325 0 003.322-3.32v-2.393h-2.34zm-22.223-8.849h6.396v-1h-6.396v1zm0-2.327h9.396v-1h-9.396v1z" />
  );

  return isHovered ? normalHover : normal;
};

export default LaptopBlog;
