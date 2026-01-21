import type React from 'react';

import type { SvgPathProps } from '../Icon';

import { getIcon } from '../Icon/utils';

const TriangleX: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <>
      <path
        fillRule="evenodd"
        d="m24 7 19 33.712H5L24 7Zm-5.792 17.951a1.185 1.185 0 1 1 1.676-1.675l4.01 4.01 3.895-3.895a1.19 1.19 0 0 1 1.683 1.683l-3.895 3.895 4.387 4.387a1.185 1.185 0 0 1-1.675 1.675l-4.387-4.386-4.503 4.502a1.19 1.19 0 0 1-1.683-1.683l4.503-4.502-4.01-4.011Z"
        clipRule="evenodd"
      />
    </>
  );

  const normalHover = (
    <>
      <path
        fillRule="evenodd"
        d="m24 7 19 33.712H5L24 7Zm-4.243 19.433a1.185 1.185 0 0 1 1.676-1.676l2.563 2.564 2.564-2.564a1.19 1.19 0 0 1 1.683 1.683l-2.564 2.564 2.564 2.563a1.184 1.184 0 1 1-1.676 1.676l-2.563-2.564-2.564 2.564a1.19 1.19 0 1 1-1.683-1.683l2.564-2.564-2.564-2.563Z"
        clipRule="evenodd"
      />
    </>
  );

  const xSmall = (
    <>
      <path
        fillRule="evenodd"
        d="m24 7.5 19 33.712H5L24 7.5Zm-5.792 17.95a1.185 1.185 0 0 1 1.676-1.676l4.01 4.01 3.895-3.894a1.19 1.19 0 1 1 1.683 1.683l-3.895 3.895 4.387 4.387a1.184 1.184 0 1 1-1.675 1.675l-4.387-4.387-4.502 4.502a1.19 1.19 0 1 1-1.683-1.683l4.502-4.502-4.01-4.01Z"
        clipRule="evenodd"
      />
    </>
  );

  const xSmallHover = (
    <>
      <path
        fillRule="evenodd"
        d="m24 7.5 19 33.712H5L24 7.5Zm-4.243 19.433a1.185 1.185 0 0 1 1.676-1.675l2.563 2.564 2.564-2.564a1.19 1.19 0 0 1 1.683 1.683l-2.564 2.564 2.564 2.563a1.185 1.185 0 0 1-1.676 1.675l-2.563-2.563-2.564 2.564a1.19 1.19 0 1 1-1.683-1.683l2.564-2.564-2.564-2.564Z"
        clipRule="evenodd"
      />
    </>
  );

  return getIcon({ size, isHovered, normal, normalHover, xSmall, xSmallHover });
};

export default TriangleX;
