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
      d="M28.157 4.205h-4.975v4.466l-4.16-4.405L3.683 20.42l.747.709 2.667-2.809v15.476h23.81V18.344l2.664 2.816.748-.707-6.16-6.514V4.205Zm-6.776 19.122v9.44h-5.176v-9.44h5.176Zm-2.603-6.146a2.18 2.18 0 1 0 0-4.36 2.18 2.18 0 0 0 0 4.36Z"
    />
  );

  const xSmallHover = (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M28.158 4.205h-4.976v4.466l-4.159-4.405L3.683 20.42l.746.709 2.667-2.809v15.476h9.109v-10.47h2.073v12.909l3.77-2.44h8.858v-15.45l2.664 2.816.748-.707-6.16-6.514V4.205ZM21.38 23.327v9.675l-2.073 1.342V23.327h2.073Zm-2.603-6.149a2.177 2.177 0 1 0 0-4.353 2.177 2.177 0 0 0 0 4.353Z"
    />
  );

  return getIcon({ size, isHovered, normal, normalHover, xSmall, xSmallHover });
};

export default HomeFill;
