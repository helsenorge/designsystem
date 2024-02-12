import React from 'react';

import { getIcon } from '../../utils/icon';
import { SvgPathProps } from '../Icon';

const Menu: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = <path d="M37.656 31.434v1.75H10.269v-1.75h27.387zm0-8.842v1.75H10.269v-1.75h27.387zm0-8.464v1.75H10.269v-1.75h27.387z" />;

  const normalHover = (
    <path d="M37.686 22.626v1.75H10.299v-1.75h27.387zm0-9.774v1.75H10.299v-1.75h27.387zm0 19.87v1.75H10.299v-1.75h27.387z" />
  );

  const xSmall = (
    <path d="M37.88 31.211v2.274H10.105v-2.274H37.88zm0-8.842v2.274H10.105v-2.274H37.88zm0-8.474v2.273H10.105v-2.273H37.88z" />
  );

  const xSmallHover = (
    <path d="M37.88 32.475v2.273H10.105v-2.273H37.88zm0-10.106v2.274H10.105v-2.274H37.88zm0-9.737v2.273H10.105v-2.273H37.88z" />
  );

  return getIcon({ size, isHovered, normal, normalHover, xSmall, xSmallHover });
};

export default Menu;
