import React from 'react';
import { IconSize } from '.';
import { getIcon, SvgPathProps } from './Icon';

const Syringe: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <path
      d="m35.619 14.844-2.356-2.342 3.135-3.155 2.356 2.342-3.135 3.155Zm-6.847 9.932-5.397-5.363 2.405-2.419 2.797 2.78.705-.709-2.798-2.78 4.343-4.37 5.396 5.361-7.451 7.5Zm-6.036 6.074a3.776 3.776 0 0 1-2.686 1.122h-.012a3.78 3.78 0 0 1-2.681-1.106 3.777 3.777 0 0 1-1.123-2.685 3.78 3.78 0 0 1 1.106-2.693l1.724-1.735 2.598 2.582.706-.709-2.6-2.583 2.69-2.708 5.398 5.363-5.12 5.152Zm-5.526 2.558a1.688 1.688 0 0 1-2.394-2.378l.643-.647c.248.512.566.992.982 1.405.415.413.898.73 1.412.974l-.643.646Zm24-19.28.916-.923-7.267-7.219-.916.921 1.533 1.524-3.135 3.155-3.523-3.5-.916.922 2.003 1.99-13.487 13.574a5.07 5.07 0 0 0-1.484 3.613c0 .272.039.537.08.801l-1.12 1.128a2.988 2.988 0 0 0-.393 3.712l-6.365 6.406.922.916 6.365-6.406a2.977 2.977 0 0 0 3.709-.418l1.122-1.128c.258.04.517.076.783.076h.018a5.069 5.069 0 0 0 3.603-1.506l13.487-13.574 2.002 1.99.916-.922-3.522-3.5 3.136-3.156 1.533 1.523Z"
      fillRule="evenodd"
    />
  );

  const normalHover = (
    <path
      d="m25.27 28.3-5.397-5.363 2.614-2.63 2.684 2.667.86-.865-2.685-2.667 2.433-2.448 2.798 2.78.705-.71-2.798-2.78 4.342-4.37 5.397 5.363L25.27 28.3Zm-2.534 2.55a3.778 3.778 0 0 1-2.687 1.122h-.012a3.78 3.78 0 0 1-2.68-1.105 3.78 3.78 0 0 1-1.123-2.686 3.778 3.778 0 0 1 1.105-2.693l1.618-1.63 5.397 5.364-1.618 1.628Zm-5.527 2.559a1.691 1.691 0 0 1-2.385.008 1.69 1.69 0 0 1-.008-2.387l.642-.647a5.1 5.1 0 0 0 .982 1.406 5.09 5.09 0 0 0 1.412.973l-.643.647ZM35.076 10.67l2.356 2.34-1.814 1.833-2.357-2.342 1.815-1.831Zm3.278 3.257 1.533 1.523.916-.922-1.534-1.524-2.133-2.12-3.6-3.577-.916.922 1.534 1.524-1.815 1.832-3.522-3.5-.916.922 2.003 1.99-13.487 13.574a5.066 5.066 0 0 0-1.483 3.613c0 .272.038.538.08.8l-1.12 1.129a2.99 2.99 0 0 0-.394 3.713l-6.364 6.405.922.916 6.364-6.405a2.983 2.983 0 0 0 3.71-.418l1.121-1.13c.258.04.517.077.784.077h.017a5.07 5.07 0 0 0 3.604-1.506l13.487-13.573 2.002 1.989.916-.922-3.523-3.5 1.814-1.832Z"
      fillRule="evenodd"
    />
  );

  return getIcon(IconSize.Medium, isHovered, normal, normalHover);
};

export default Syringe;
