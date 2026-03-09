import type { SvgPathProps } from '../Icon';

import { getIcon } from '../Icon/utils';

const ArrowLeft: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = <path d="m20.925 9.929 1.142 1.377-10.044 11.721h27.048v1.947H12.023l10.044 11.718-1.142 1.379L8.93 24 20.925 9.929Z" />;

  const normalHover = (
    <path d="m14.925 9.929 1.142 1.377-10.044 11.72h36.048v1.947H6.023l10.044 11.718-1.142 1.379L2.93 24 14.925 9.929Z" />
  );

  const xSmall = <path d="m20.925 9.718 1.443 1.739L12.364 22.77h27.18v2.46h-27.18l10.004 11.308-1.443 1.742L8.455 24l12.47-14.283Z" />;

  const xSmallHover = (
    <path d="m14.61 9.719 1.442 1.739L6.048 22.772h36.023v2.46H6.048L16.052 36.54l-1.443 1.741-12.47-14.28L14.61 9.719Z" />
  );

  return getIcon({ size, isHovered, normal, normalHover, xSmall, xSmallHover });
};

export default ArrowLeft;
