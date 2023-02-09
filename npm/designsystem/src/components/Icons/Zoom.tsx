import React from 'react';
import { getIcon, SvgPathProps } from './Icon';

const Zoom: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <path
      d="M21.866 20.005h5.573v1.6h-5.573v5.572h-1.6v-5.572h-5.572v-1.6h5.572v-5.573h1.6v5.573zM37.758 38.11a2.24 2.24 0 0 1-1.606.612 2.23 2.23 0 0 1-1.568-.703l-6.066-6.421a13.263 13.263 0 0 0 1.562-1.25 13.312 13.312 0 0 0 1.65-1.888l6.118 6.476c.85.9.81 2.324-.09 3.174zm-17.02-5.783a11.452 11.452 0 0 1-8.052-3.607 11.45 11.45 0 0 1-3.142-8.243c.178-6.243 5.312-11.2 11.518-11.2.11 0 .222.002.333.005 6.353.18 11.375 5.497 11.194 11.85a11.456 11.456 0 0 1-3.607 8.053c-2.24 2.114-5.166 3.24-8.244 3.142zm18.273 1.51-6.406-6.782a13.068 13.068 0 0 0 1.583-5.876c.1-3.505-1.171-6.84-3.58-9.388a13.036 13.036 0 0 0-9.167-4.108C14.2 7.482 8.15 13.196 7.945 20.43a13.043 13.043 0 0 0 3.578 9.388 13.042 13.042 0 0 0 9.553 4.113c2.136 0 4.198-.513 6.048-1.48l6.297 6.666a3.82 3.82 0 0 0 2.685 1.203l.113.002a3.82 3.82 0 0 0 2.637-1.05 3.85 3.85 0 0 0 .155-5.436z"
      fillRule="evenodd"
    />
  );

  const normalHover = (
    <path
      d="M21.866 20.005h6.278v1.6h-6.278v6.278h-1.6v-6.278h-6.278v-1.6h6.278v-6.278h1.6v6.278zm15.89 18.105c-.898.85-2.323.81-3.173-.091l-5.25-5.558a14.432 14.432 0 0 0 3.212-3.14l5.303 5.615c.85.9.809 2.323-.091 3.174zm-17.052-4.6a12.627 12.627 0 0 1-8.88-3.977 12.621 12.621 0 0 1-3.463-9.09 12.623 12.623 0 0 1 3.977-8.878 12.62 12.62 0 0 1 9.09-3.466c7.006.2 12.543 6.062 12.344 13.068-.2 7.006-6.068 12.558-13.068 12.343zm18.307.327-5.556-5.882a14.21 14.21 0 0 0 1.916-6.742c.225-7.888-6.01-14.488-13.897-14.713a14.22 14.22 0 0 0-10.235 3.9 14.218 14.218 0 0 0-4.478 9.997 14.217 14.217 0 0 0 3.9 10.234 14.219 14.219 0 0 0 10.41 4.485c2.49 0 4.836-.651 6.885-1.782l5.464 5.784a3.82 3.82 0 0 0 2.799 1.205 3.82 3.82 0 0 0 2.637-1.05 3.85 3.85 0 0 0 .155-5.436z"
      fillRule="evenodd"
    />
  );

  const xSmall = (
    <path
      d="M22.591 20.708h3.645v2.02H22.59v3.644h-2.02v-3.643h-3.644v-2.021h3.643v-3.645h2.021v3.645zm11.882 13.63c-.5.5-1.372.5-1.874 0l-4.47-4.472c.691-.555 1.304-1.2 1.834-1.912l4.51 4.51a1.318 1.318 0 0 1 0 1.873zm-21.334-12.62c0-4.656 3.787-8.443 8.442-8.443 4.656 0 8.443 3.787 8.443 8.443 0 4.655-3.787 8.442-8.443 8.442-4.655 0-8.442-3.787-8.442-8.442zm22.764 9.316-4.866-4.864a10.39 10.39 0 0 0 1.008-4.452c0-5.77-4.694-10.464-10.464-10.464-5.769 0-10.463 4.694-10.463 10.464 0 5.77 4.694 10.463 10.463 10.463 1.738 0 3.375-.432 4.819-1.185l4.77 4.77c.632.631 1.474.98 2.367.98s1.734-.349 2.366-.98c.631-.632.98-1.472.98-2.366 0-.893-.349-1.733-.98-2.366z"
      fillRule="evenodd"
    />
  );

  const xSmallHover = (
    <path
      d="M22.592 20.708H27v2.02h-4.408v4.408H20.57v-4.407h-4.409v-2.021h4.409v-4.409h2.02v4.409zm11.881 13.63c-.499.498-1.372.5-1.873 0l-3.724-3.725a11.63 11.63 0 0 0 1.834-1.912l3.763 3.763c.25.25.388.583.388.936 0 .355-.138.687-.388.937zm-22.382-12.62c0-5.233 4.258-9.49 9.49-9.49 5.233 0 9.49 4.257 9.49 9.49 0 5.232-4.257 9.49-9.49 9.49-5.232 0-9.49-4.258-9.49-9.49zm23.812 9.316-4.083-4.083a11.423 11.423 0 0 0 1.272-5.233c0-6.347-5.163-11.51-11.51-11.51-6.347 0-11.51 5.163-11.51 11.51 0 6.346 5.163 11.51 11.51 11.51 2.03 0 3.934-.533 5.591-1.459l3.998 3.997c.632.631 1.473.98 2.366.98s1.734-.349 2.365-.98c.632-.632.98-1.472.98-2.366 0-.893-.348-1.733-.98-2.366z"
      fillRule="evenodd"
    />
  );

  return getIcon({ size, isHovered, normal, normalHover, xSmall, xSmallHover });
};

export default Zoom;
