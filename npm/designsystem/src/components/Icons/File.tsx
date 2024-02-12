import React from 'react';

import { getIcon } from '../../utils/icon';
import { SvgPathProps } from '../Icon';

const File: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <path
      fillRule={'evenodd'}
      d="M10.712 40.388h26.576v-19.58a5 5 0 0 0-1.448-3.52l-8.123-8.195a5 5 0 0 0-3.551-1.48H10.712v32.775Zm1.276-1.276h24.024V20.638a2 2 0 0 0-2-2h-7.75l-.01-7.752a2 2 0 0 0-2-1.998H11.988v30.224Zm22.478-21.484h-7.143v-7.225l7.143 7.225Z"
    />
  );

  const normalHover = (
    <path
      fillRule={'evenodd'}
      d="M10.712 40.388h26.576V22.31a5 5 0 0 0-1.45-3.522l-9.621-9.697a5 5 0 0 0-3.55-1.479H10.712v32.776Zm1.276-1.276h24.024V22.138a2 2 0 0 0-2-2h-9.25l-.01-9.252a2 2 0 0 0-2-1.998H11.988v30.224Zm22.478-19.984h-8.643v-8.725l8.643 8.725Z"
    />
  );

  const xSmall = (
    <path
      fillRule={'evenodd'}
      d="M10.396 40.711h27.208V21.157a3 3 0 0 0-.874-2.117L25.92 8.184a3 3 0 0 0-2.126-.883H10.396v33.41Zm1.592-1.599h24.024V20.96a2 2 0 0 0-2-2h-8.08v-8.071a2 2 0 0 0-2-2H11.989v30.224Zm21.215-21.485h-5.88v-5.961l5.88 5.961Z"
    />
  );

  const xSmallHover = (
    <path
      fillRule={'evenodd'}
      d="M10.396 40.711h27.208V23.683a3 3 0 0 0-.875-2.117L23.393 8.183a3 3 0 0 0-2.125-.882H10.396v33.41Zm1.592-1.599h24.024V23.485a2 2 0 0 0-2-2H23.406V10.888a2 2 0 0 0-2-2h-9.418v30.224Zm21.215-18.959h-8.406v-8.488l8.406 8.488Z"
    />
  );

  return getIcon({ size, isHovered, normal, normalHover, xSmall, xSmallHover });
};

export default File;
