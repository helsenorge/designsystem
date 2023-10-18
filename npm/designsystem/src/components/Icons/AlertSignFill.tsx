import React from 'react';

import { getIcon, SvgPathProps } from '../Icon';

const AlertSignFill: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <path d="M24.898 21.447v7.228a.893.893 0 01-1.785 0v-7.228a.892.892 0 111.785 0zm.5 11.601a1.394 1.394 0 11-2.787-.001 1.394 1.394 0 012.787.001zm-18.822 6.71h34.847L24.111 8.242 6.576 39.758z" />
  );

  const normalHover = (
    <path d="M24.898 19.447v7.228a.893.893 0 01-1.785 0v-7.228a.892.892 0 111.785 0zm.5 13.601a1.394 1.394 0 11-2.787-.001 1.394 1.394 0 012.787.001zm-18.822 6.71h34.847L24.111 8.242 6.576 39.758z" />
  );

  const xSmall = (
    <path d="M24.896 21.452v7.213a.891.891 0 01-1.782 0v-7.213a.89.89 0 111.782 0zm.5 11.577a1.39 1.39 0 11-2.782-.001 1.39 1.39 0 012.782.001zM6.613 39.725h34.774L24.11 8.275 6.613 39.725z" />
  );

  const xSmallHover = (
    <path d="M24.896 18.926v7.213a.891.891 0 01-1.782 0v-7.213a.89.89 0 111.782 0zm.5 14.103a1.39 1.39 0 11-2.782-.001 1.39 1.39 0 012.782.001zM6.613 39.725h34.774L24.11 8.275 6.613 39.725z" />
  );

  return getIcon({ size, isHovered, normal, normalHover, xSmall, xSmallHover });
};

export default AlertSignFill;
