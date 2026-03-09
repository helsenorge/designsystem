import type { SvgPathProps } from '../Icon';

import { getIcon } from '../Icon/utils';

const DotAttachment: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 16.434C15 11.647 19.122 8 23.915 8c4.792 0 8.92 3.646 8.931 8.437v18.185c0 3.04-2.604 5.265-5.508 5.265s-5.509-2.224-5.509-5.265V21.42h4v13.202c0 .565.537 1.265 1.509 1.265.971 0 1.508-.7 1.508-1.265V16.445C28.84 14.12 26.77 12 23.915 12 21.058 12 19 14.12 19 16.434V37.69h-4V16.434Z"
    />
  );

  const normalHover = (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.25 14.469C16.016 10.344 19.975 8 23.915 8c4.792 0 8.92 3.646 8.931 8.437v18.185c0 3.04-2.604 5.265-5.508 5.265s-5.509-2.224-5.509-5.265V21.42h4v13.202c0 .565.537 1.265 1.509 1.265.971 0 1.508-.7 1.508-1.265V16.445C28.84 14.12 26.77 12 23.915 12c-2.857 0-4.509 1.828-4.759 3.375L15 37.69h-4c1.45-7.7 2.797-15.112 4.25-23.221Z"
    />
  );

  return getIcon({ size, isHovered, normal, normalHover });
};

export default DotAttachment;
