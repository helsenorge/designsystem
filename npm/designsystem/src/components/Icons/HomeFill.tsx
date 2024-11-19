import React from 'react';

import { getIcon, SvgPathProps } from '../Icon';

const HomeFill: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M36.076 5.62h-6.284v5.64l-5.254-5.564L5.16 26.102l.943.895 3.368-3.547v19.548h30.076v-19.52l3.365 3.558.944-.893-7.78-8.228V5.619Zm-8.56 24.153v11.925h-6.538V29.773h6.538Zm-3.288-7.763a2.753 2.753 0 1 0 0-5.506 2.753 2.753 0 0 0 0 5.506Z"
    />
  );

  const normalHover = (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M36.076 5.62h-6.284v5.64l-5.254-5.564L5.16 26.102l.943.895 3.368-3.547v19.548h11.506V29.773h2.62V46.08l4.76-3.08h11.19V23.48l3.365 3.558.944-.894-7.78-8.228V5.619Zm-8.56 24.153v12.222l-2.619 1.694V29.773h2.62Zm-3.288-7.767a2.75 2.75 0 1 0 0-5.499 2.75 2.75 0 0 0 0 5.5Z"
    />
  );

  const xSmall = (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m24.03 5.139 5.082 5.382V5.14h6.626v12.398l7.735 8.18-1.193 1.128-3.07-3.246v19.26H8.793V23.57L5.72 26.807l-1.19-1.13 19.5-20.538Zm2.806 36.08V29.636H20.64v11.583h6.197Zm.617-22.03Zm-1.255-.24a2.479 2.479 0 1 1-4.957 0 2.479 2.479 0 0 1 4.957 0Z"
    />
  );

  const xSmallHover = (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m24.03 5.68 5.082 5.382V5.681h6.626v12.398l7.735 8.18-1.193 1.128-3.07-3.246V43.4H27.9l-4.983 3.225V30.177H20.64v13.225H8.792v-19.29L5.72 27.347l-1.19-1.13 19.5-20.538Zm2.806 36.454V30.177H24.56v13.43l2.277-1.473Zm-.638-22.645a2.479 2.479 0 1 1-4.958 0 2.479 2.479 0 0 1 4.958 0Z"
    />
  );

  return getIcon({ size, isHovered, normal, normalHover, xSmall, xSmallHover });
};

export default HomeFill;
