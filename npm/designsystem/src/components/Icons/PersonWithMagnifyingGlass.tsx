import React from 'react';
import { SvgPathProps } from './Icon';

const PersonWithMagnifyingGlass: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <g>
      <path d="M37.62 26.616a.821.821 0 01-.705.387h-1.857v2.04c0 2.924-2.376 5.3-5.298 5.3h-.651v5.185H16.968V34.13c0-2.28-.695-3.941-1.623-5.805l3.349-3.365a6.395 6.395 0 002.946.719 6.453 6.453 0 006.445-6.445 6.452 6.452 0 00-6.445-6.444 6.452 6.452 0 00-6.445 6.444c0 .975.224 1.895.613 2.724l-2.26 2.269a14.433 14.433 0 01-.661-4.404c0-5.46 4.22-11.351 11.043-11.351 5.395 0 11.128 4.056 11.128 11.572v.143l2.617 5.625a.822.822 0 01-.054.803zm-21.124-7.381a5.15 5.15 0 015.144-5.143 5.15 5.15 0 015.144 5.143 5.15 5.15 0 01-5.144 5.145 5.15 5.15 0 01-5.144-5.145zm-4.917 11.028a.78.78 0 11-1.104-1.105l6.025-6.051c.315.417.676.798 1.08 1.128l-6.001 6.028zm27.274-5L36.358 19.9C36.285 11.632 29.92 7.173 23.93 7.173c-6.807 0-12.344 5.675-12.344 12.65 0 1.956.306 3.69.935 5.438L9.555 28.24a2.083 2.083 0 000 2.943 2.07 2.07 0 001.47.608c.535 0 1.069-.203 1.475-.61l1.876-1.882c.77 1.588 1.29 2.973 1.29 4.832v6.698H30.41v-5.217a6.608 6.608 0 005.949-6.568v-.741h.556c.734 0 1.408-.37 1.803-.988a2.131 2.131 0 00.135-2.051z" />
      <path d="M25.727 19.235h-1.3a2.79 2.79 0 01-2.788 2.787v1.3a4.093 4.093 0 004.088-4.087" />
    </g>
  );

  const normalHover = (
    <g>
      <path d="M36.877 26.616a.821.821 0 01-.706.387h-1.857v2.04c0 2.924-2.376 5.3-5.299 5.3h-.65v5.185h-12.14V34.13c0-2.281-.696-3.942-1.625-5.808l2.743-2.758a7.213 7.213 0 003.553.935c4.005 0 7.264-3.26 7.264-7.265s-3.259-7.264-7.264-7.264c-4.006 0-7.265 3.259-7.265 7.264 0 1.203.3 2.336.818 3.337l-1.645 1.654a14.401 14.401 0 01-.66-4.402c0-5.46 4.22-11.351 11.042-11.351 5.395 0 11.128 4.056 11.128 11.572v.143l2.617 5.625a.822.822 0 01-.054.803zm-21.945-7.381a5.97 5.97 0 015.964-5.963 5.97 5.97 0 015.963 5.963 5.97 5.97 0 01-5.963 5.964 5.97 5.97 0 01-5.964-5.964zm-4.096 11.028a.782.782 0 11-1.105-1.106l5.44-5.467c.32.412.682.793 1.083 1.127l-5.418 5.446zm27.273-5L35.614 19.9c-.073-8.267-6.438-12.726-12.428-12.726-6.807 0-12.344 5.675-12.344 12.65 0 1.958.306 3.693.934 5.437l-2.965 2.98a2.084 2.084 0 000 2.943 2.07 2.07 0 001.471.608c.533 0 1.067-.203 1.474-.61l1.875-1.884c.772 1.59 1.292 2.975 1.292 4.834v6.698h14.742v-5.217a6.609 6.609 0 005.95-6.568v-.741h.556c.734 0 1.408-.37 1.803-.988a2.131 2.131 0 00.135-2.051z" />
      <path d="M25.469 19.235h-1.301a3.276 3.276 0 01-3.272 3.273v1.3a4.58 4.58 0 004.573-4.573" />
    </g>
  );

  return isHovered ? normalHover : normal;
};

export default PersonWithMagnifyingGlass;
