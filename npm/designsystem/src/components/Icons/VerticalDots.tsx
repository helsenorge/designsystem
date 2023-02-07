import React from 'react';
import { getIcon, SvgPathProps } from './Icon';

const VerticalDots: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <path d="M23.5 16.934c1.045 0 1.9-.855 1.9-1.9s-.855-1.9-1.9-1.9-1.9.855-1.9 1.9.855 1.9 1.9 1.9zm0 8.465c1.045 0 1.9-.855 1.9-1.9s-.855-1.9-1.9-1.9-1.9.855-1.9 1.9.855 1.9 1.9 1.9zm0 8.465c1.045 0 1.9-.855 1.9-1.9s-.855-1.9-1.9-1.9-1.9.855-1.9 1.9.855 1.9 1.9 1.9z" />
  );

  const normalHover = (
    <path d="M23.5 14.408c1.045 0 1.9-.855 1.9-1.9s-.855-1.9-1.9-1.9-1.9.855-1.9 1.9.855 1.9 1.9 1.9zm0 10.991c1.045 0 1.9-.855 1.9-1.9s-.855-1.9-1.9-1.9-1.9.855-1.9 1.9.855 1.9 1.9 1.9zm0 10.992c1.045 0 1.9-.856 1.9-1.9 0-1.046-.855-1.9-1.9-1.9s-1.9.854-1.9 1.9c0 1.044.855 1.9 1.9 1.9z" />
  );

  const xSmall = (
    <path d="M24 17.936c1.32 0 2.4-1.081 2.4-2.401 0-1.321-1.08-2.4-2.4-2.4-1.32 0-2.4 1.079-2.4 2.4 0 1.32 1.08 2.4 2.4 2.4zm0 8.465c1.32 0 2.4-1.081 2.4-2.401 0-1.32-1.08-2.4-2.4-2.4-1.32 0-2.4 1.08-2.4 2.4 0 1.32 1.08 2.4 2.4 2.4zm0 8.465c1.32 0 2.4-1.081 2.4-2.4 0-1.322-1.08-2.402-2.4-2.402-1.32 0-2.4 1.08-2.4 2.401 0 1.32 1.08 2.4 2.4 2.4z" />
  );

  const xSmallHover = (
    <path d="M24 15.41c1.32 0 2.4-1.082 2.4-2.401 0-1.321-1.08-2.401-2.4-2.401-1.32 0-2.4 1.08-2.4 2.4 0 1.32 1.08 2.401 2.4 2.401zm0 10.99c1.32 0 2.4-1.08 2.4-2.4 0-1.32-1.08-2.4-2.4-2.4-1.32 0-2.4 1.08-2.4 2.4 0 1.32 1.08 2.4 2.4 2.4zm0 10.992c1.32 0 2.4-1.08 2.4-2.4 0-1.321-1.08-2.401-2.4-2.401-1.32 0-2.4 1.08-2.4 2.4 0 1.32 1.08 2.401 2.4 2.401z" />
  );

  return getIcon({ size, isHovered, normal, normalHover, xSmall, xSmallHover });
};

export default VerticalDots;
