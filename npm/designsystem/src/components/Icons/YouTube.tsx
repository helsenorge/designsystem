import React from 'react';

import { SvgPathProps } from '../Icon';

const YouTube: React.FC<SvgPathProps> = ({ isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <path d="M34.913 12.097a6.441 6.441 0 016.434 6.433v10.94a6.441 6.441 0 01-6.434 6.433H13.088a6.441 6.441 0 01-6.434-6.433V18.53a6.441 6.441 0 016.434-6.433zm0 1.3H13.088a5.139 5.139 0 00-5.133 5.133v10.94a5.139 5.139 0 005.133 5.133h21.825a5.139 5.139 0 005.133-5.133V18.53a5.139 5.139 0 00-5.133-5.133zm-14.755 5.07l10.616 5.41-10.616 5.41v-10.82zm1.3 2.122v6.577l6.453-3.288-6.452-3.29z" />
  );

  const normalHover = (
    <path d="M34.912 12.097a6.441 6.441 0 016.434 6.433v10.94a6.441 6.441 0 01-6.434 6.433H13.087a6.441 6.441 0 01-6.434-6.433V18.53a6.441 6.441 0 016.434-6.433zm0 1.3H13.087a5.139 5.139 0 00-5.133 5.133v10.94a5.139 5.139 0 005.133 5.133h21.825a5.139 5.139 0 005.133-5.133V18.53a5.139 5.139 0 00-5.133-5.133zm-13.755 5.07l10.616 5.41-10.616 5.41v-10.82zm1.302 2.122v6.577l6.451-3.288-6.451-3.29z" />
  );

  return isHovered ? normalHover : normal;
};

export default YouTube;
