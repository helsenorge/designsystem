import type { SvgPathProps } from '../Icon';

import { getIcon } from '../Icon/utils';

const Sort: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <path d="m15.679 36.574 6.002-6.003 1.238 1.238-8.114 8.115-.003-.003H14.8L6.687 31.81l1.238-1.238 6.004 6.004V12.02h1.75v24.555Zm25.913-20.317-1.238 1.237-6.172-6.172v24.703h-1.75V11.322l-6.171 6.172-1.238-1.237 8.284-8.285 8.285 8.285Z" />
  );

  const normalHover = (
    <path d="m41.592 14.255-1.237 1.237-6.172-6.172v24.703h-1.75V9.32l-6.172 6.172-1.238-1.237 8.285-8.285 8.284 8.285ZM15.679 38.572l6.003-6.003 1.237 1.238-8.114 8.115-.003-.003H14.8l-8.114-8.112 1.238-1.238 6.004 6.004V14.018h1.75v24.554Z" />
  );

  const xSmall = (
    <>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M31.905 12.936h-1.894v20.013h1.895V12.936Zm-13.913 2.219h-1.895v19.793h1.895V15.155Z"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="m32.296 11.918-1.34-1.34-6.77 6.77 1.34 1.34 6.77-6.77ZM15.707 36.096l1.34 1.34 6.77-6.771-1.34-1.34-6.77 6.771Z"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="m36.39 18.686 1.34-1.34-6.77-6.769-1.34 1.34 6.77 6.77ZM11.611 29.324l-1.34 1.34 6.771 6.77 1.34-1.34-6.77-6.77Z"
      />
    </>
  );

  const xSmallHover = (
    <>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M31.905 11.673h-1.894v20.013h1.895V11.673Zm-13.913 4.744h-1.895v19.794h1.895V16.417Z"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="m32.296 10.654-1.34-1.34-6.77 6.77 1.34 1.34 6.77-6.77ZM15.707 37.36l1.34 1.34 6.77-6.771-1.34-1.34-6.77 6.77Z"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="m36.39 17.424 1.34-1.34-6.77-6.77-1.34 1.34 6.77 6.77ZM11.611 30.588l-1.34 1.34 6.771 6.77 1.34-1.34-6.77-6.77Z"
      />
    </>
  );

  return getIcon({ size, isHovered, normal, normalHover, xSmall, xSmallHover });
};

export default Sort;
