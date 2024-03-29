import React from 'react';

import { getIcon, SvgPathProps } from '../Icon';

const PersonalPlan: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <>
      <path
        fillRule={'evenodd'}
        d="M44.62 15.2 38.42 9l-.26-.23H4.1a.75.75 0 0 0-.75.75v29.39a.76.76 0 0 0 .75.75h39.8a.75.75 0 0 0 .75-.75V15.54l-.03-.34Zm-6-4.21 3.86 3.86h-3.86v-3.86ZM4.7 38.36V10.07h32.62v5.33a.76.76 0 0 0 .75.75h5.33v22.21H4.7Z"
      />
      <path
        fillRule={'evenodd'}
        d="m33.91 24.98-.32-.07-.24.13a4.25 4.25 0 0 1-3.91 0l-.31-.12-.25.07a5.53 5.53 0 0 0-3.92 5.27v2.63a.738.738 0 0 0 .75.75H37.1a.75.75 0 0 0 .75-.75v-2.63a5.542 5.542 0 0 0-3.94-5.28Zm2.63 7.35H26.26v-2.08a4.228 4.228 0 0 1 2.8-4 5.59 5.59 0 0 0 4.68 0 4.23 4.23 0 0 1 2.8 4v2.08Zm-5.16-8.24a4.14 4.14 0 0 0 4.14-4.14v-1.46a4.14 4.14 0 0 0-8.27 0v1.46a4.14 4.14 0 0 0 4.13 4.14Zm-2.83-5.6a2.84 2.84 0 0 1 5.67 0v1.46a2.842 2.842 0 0 1-3.96 2.777 2.842 2.842 0 0 1-1.71-2.777v-1.46Zm-10.94-2.64-4.08 4.09-1.8-1.8a.641.641 0 0 0-.92 0 .66.66 0 0 0 0 .92L13 21.24a.742.742 0 0 0 1.06 0l4.47-4.47a.638.638 0 0 0 0-.92.66.66 0 0 0-.92 0Zm0 9.93-4.08 4.08-1.8-1.79a.641.641 0 0 0-.92 0 .66.66 0 0 0 0 .92L13 31.17a.74.74 0 0 0 .53.22.729.729 0 0 0 .53-.22l4.47-4.47a.638.638 0 0 0 0-.92.66.66 0 0 0-.92 0Z"
      />
    </>
  );

  const normalHover = (
    <>
      <path
        fillRule={'evenodd'}
        d="M43.9 8.77H4.1a.75.75 0 0 0-.75.75v29.39a.76.76 0 0 0 .75.75h39.8a.75.75 0 0 0 .75-.75V9.52a.743.743 0 0 0-.462-.696.74.74 0 0 0-.288-.054Zm-.55 29.59H4.65V10.07h38.7v28.29Z"
      />
      <path
        fillRule={'evenodd'}
        d="M13 21.24a.71.71 0 0 0 .53.22.79.79 0 0 0 .53-.22l4.47-4.47a.638.638 0 0 0 0-.92.66.66 0 0 0-.92 0l-4.05 4.13-1.8-1.8a.64.64 0 0 0-.92 0 .66.66 0 0 0 0 .92L13 21.24Zm0 9.93c.14.14.331.22.53.22a.849.849 0 0 0 .53-.22l4.47-4.47a.64.64 0 0 0 0-.92.66.66 0 0 0-.92 0l-4.08 4.08-1.8-1.79a.641.641 0 0 0-.92 0 .66.66 0 0 0 0 .92L13 31.17Zm20.91-6.19-.32-.07-.24.13a4.25 4.25 0 0 1-3.91 0l-.31-.12-.25.07a5.53 5.53 0 0 0-3.92 5.27v2.63a.738.738 0 0 0 .75.75H37.1a.75.75 0 0 0 .75-.75v-2.63a5.542 5.542 0 0 0-3.94-5.28Zm2.63 7.35H26.26v-2.08a4.228 4.228 0 0 1 2.8-4 5.59 5.59 0 0 0 4.68 0 4.23 4.23 0 0 1 2.8 4v2.08Zm-5.16-8.24a4.14 4.14 0 0 0 4.14-4.14v-1.46a4.14 4.14 0 0 0-8.27 0v1.46a4.14 4.14 0 0 0 4.13 4.14Zm-2.83-5.6a2.84 2.84 0 0 1 5.67 0v1.46a2.842 2.842 0 0 1-3.96 2.777 2.842 2.842 0 0 1-1.71-2.777v-1.46Z"
      />
    </>
  );

  return getIcon({ size, isHovered, normal, normalHover });
};

export default PersonalPlan;
