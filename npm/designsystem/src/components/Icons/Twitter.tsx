import React from 'react';
import {SvgPathProps} from './Icon';

const Twitter: React.FC<SvgPathProps> = ({isExtraSmall, isHovered}: SvgPathProps): JSX.Element => {
  const normal = (
    <path d="M9.697 35.689c8.87 3.125 15.319-.125 18.526-2.512 5.404-4.022 8.864-10.982 8.047-16.19a.65.65 0 01.321-.665l3.116-1.781-2.039-.222a.65.65 0 01-.505-.949l.711-1.345-2.615 1.325a.655.655 0 01-.761-.128c-1.119-1.154-2.691-1.833-4.67-2.02-1.49-.141-2.767.226-3.794 1.09-2.448 2.058-2.803 6.238-2.806 6.28a.65.65 0 01-.505.583c-4.906 1.107-11.298-3.409-13.733-5.328-.342 6.818 1.568 11.095 3.29 13.523 1.971 2.777 4.127 3.802 4.148 3.812a.652.652 0 01.272.946c-1.607 2.454-4.673 3.303-7.003 3.581m7.187 2.595c-3.082.001-6.594-.698-10.485-2.561a.65.65 0 01-.348-.754.639.639 0 01.679-.48c.059.003 5.846.412 8.454-2.533-2.18-1.348-8.538-6.44-7.403-19.489a.65.65 0 011.076-.433c.078.069 7.735 6.71 13.133 5.935.181-1.285.867-4.705 3.207-6.672 1.305-1.096 2.902-1.563 4.754-1.389 2.102.198 3.826.895 5.132 2.073l4.026-2.039a.653.653 0 01.758.124.652.652 0 01.111.76l-1.219 2.304 3.081.335a.651.651 0 01.252 1.211l-4.476 2.557c.651 5.672-2.91 12.74-8.617 16.987-2.419 1.801-6.567 4.064-12.115 4.064" />
  );

  const normalHover = (
    <path d="M39.11 9.942a.65.65 0 01.868.884L38.76 13.13l3.08.335a.648.648 0 01.252 1.21l-4.476 2.558c.652 5.67-2.91 12.739-8.617 16.986-2.419 1.8-6.566 4.064-12.114 4.064-3.082 0-6.595-.697-10.485-2.561a.65.65 0 01.331-1.234c.056.003 5.846.412 8.454-2.533-2.18-1.348-8.538-6.44-7.404-19.49a.65.65 0 011.077-.432c.08.069 7.731 6.71 13.132 5.935.181-1.285.868-4.705 3.207-6.672 1.305-1.096 2.906-1.563 4.754-1.39 2.103.199 3.827.896 5.132 2.074zm-9.283 1.26c-1.489-.141-2.766.226-3.794 1.09-2.448 2.058-2.802 6.238-2.805 6.28a.651.651 0 01-.505.583c-4.907 1.107-11.299-3.41-13.734-5.328-.34 6.818 1.57 11.096 3.29 13.523 1.971 2.778 4.127 3.802 4.15 3.812a.65.65 0 01.271.947c-1.608 2.453-4.673 3.302-7.004 3.58 8.871 3.125 15.32-.124 18.527-2.512 5.403-4.022 8.863-10.982 8.047-16.19a.652.652 0 01.32-.665l3.116-1.781-2.039-.221a.65.65 0 01-.505-.95l.711-1.345-2.615 1.325a.655.655 0 01-.76-.128c-1.12-1.153-2.69-1.833-4.67-2.02zm-.385 3.212a1.156 1.156 0 11-.002 2.312 1.156 1.156 0 01.002-2.312z" />
  );

  return isHovered ? normalHover : normal;
};

export default Twitter;