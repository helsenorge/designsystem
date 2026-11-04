import type { SvgPathProps } from '../Icon';

import { getIcon } from '../Icon/utils';

const Subcategory: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const small = (
    <>
      <path d="m27.984 36.31 9.532-10.16H20.643c-7.892 0-14.313-6.421-14.313-14.314v-5.2h2v5.2c0 6.79 5.523 12.314 12.313 12.314h17.01l-9.862-10.268 1.442-1.386 12.058 12.556-11.849 12.626-1.458-1.368Z" />
    </>
  );

  const smallHover = (
    <>
      <path d="m27.985 36.395 9.532-10.159h-20.39c-7.892 0-14.314-6.421-14.314-14.314v-1.683h2v1.683c0 6.79 5.525 12.314 12.314 12.314h20.526l-9.861-10.268 1.442-1.386 12.057 12.556-11.848 12.626-1.458-1.369Z" />
    </>
  );

  const xSmall = (
    <>
      <path
        d="M20.544 26.233H36.81l-9.116 9.717 1.842 1.728 12.02-12.81-12.23-12.735-1.823 1.75 9.434 9.824H20.544c-6.644 0-12.05-5.406-12.05-12.05v-5.2H5.968v5.2c0 8.037 6.539 14.576 14.576 14.576"
        fill-rule="evenodd"
        clip-rule="evenodd"
      />
    </>
  );

  const xSmallHover = (
    <>
      <path
        d="M17.027 26.41H36.81l-9.117 9.716 1.843 1.727 12.02-12.81-12.23-12.734-1.823 1.75 9.434 9.824h-19.91c-6.644 0-12.05-5.406-12.05-12.05V10.15H2.45v1.682c0 8.038 6.539 14.577 14.576 14.577"
        fill-rule="evenodd"
        clip-rule="evenodd"
      />
    </>
  );

  return getIcon({ size, isHovered, normal: small, normalHover: smallHover, xSmall, xSmallHover });
};

export default Subcategory;
