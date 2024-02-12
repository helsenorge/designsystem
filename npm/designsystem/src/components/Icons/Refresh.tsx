import React from 'react';

import { getIcon } from '../../utils/icon';
import { SvgPathProps } from '../Icon';

const Refresh: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <path d="M24.137 10.082c4.483 0 8.614 2.106 11.26 5.606l.217.294-1.057.758a12.79 12.79 0 00-10.42-5.358c-7.076 0-12.812 5.737-12.812 12.813 0 7.076 5.736 12.813 12.812 12.813a12.818 12.818 0 0012.486-9.926l.066-.304 1.274.26c-1.334 6.518-7.092 11.27-13.826 11.27-7.794 0-14.112-6.319-14.112-14.113s6.318-14.113 14.112-14.113zm10.93.23l1.299.062-.337 7.119h-6.835v-1.3l5.595-.001.278-5.88z" />
  );

  const normalHover = (
    <path d="M34.116 14.216a14.085 14.085 0 014.093 11.053l3.473-3.162.875.962-5.272 4.796-4.833-4.832.92-.92 3.5 3.499a12.788 12.788 0 00-3.675-10.477c-5.004-5.003-13.116-5.003-18.12 0-5.004 5.004-5.004 13.116 0 18.12a12.818 12.818 0 0015.833 1.82l.276-.178.716 1.085c-5.551 3.665-12.983 2.953-17.744-1.808-5.512-5.511-5.512-14.447 0-19.958 5.512-5.511 14.446-5.511 19.958 0z" />
  );

  const xSmall = (
    <path d="M36.77 26.886c-1.2 5.877-6.437 10.143-12.447 10.143-7.004 0-12.703-5.698-12.703-12.703 0-7.006 5.7-12.706 12.703-12.706 3.778 0 7.35 1.713 9.753 4.596h-4.694v1.515h6.939l.34-7.222-1.514-.07-.21 4.437a14.256 14.256 0 00-10.614-4.77c-7.84 0-14.218 6.378-14.218 14.22 0 7.84 6.378 14.218 14.218 14.218 6.728 0 12.586-4.775 13.933-11.355l-1.485-.303z" />
  );

  const xSmallHover = (
    <path d="M41.79 22.152l-3.285 2.99a14.26 14.26 0 00-4.131-10.877c-5.544-5.546-14.566-5.546-20.11 0-5.545 5.544-5.545 14.566 0 20.11a14.24 14.24 0 0010.079 4.155c2.707 0 5.425-.765 7.8-2.333l-.834-1.265c-5.007 3.304-11.724 2.618-15.974-1.629-4.952-4.954-4.952-13.014 0-17.967 4.954-4.951 13.013-4.951 17.968 0 2.671 2.67 3.985 6.407 3.646 10.146l-3.318-3.32-1.074 1.07 4.906 4.908 5.35-4.867-1.022-1.12z" />
  );

  return getIcon({ size, isHovered, normal, normalHover, xSmall, xSmallHover });
};

export default Refresh;
