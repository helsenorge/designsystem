import React from 'react';

import { SvgPathProps } from './Icon';

const PersonWithBrokenArm: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <path d="M27.79 15.91a.488.488 0 100-.977.488.488 0 000 .976zm-10.234-2.734h.236v1.52h-.236a.76.76 0 010-1.52zm1.537 0h.689a3.937 3.937 0 003.444-2.035 3.99 3.99 0 003.475 2.035h4.572v1.95a5.904 5.904 0 01-5.897 5.896h-.386a5.904 5.904 0 01-5.897-5.897v-1.949zm0-1.263a5.904 5.904 0 015.897-5.898h.386a5.905 5.905 0 015.897 5.898v.263H26.7a2.99 2.99 0 01-2.986-2.986v-.207h-1v.26a2.937 2.937 0 01-2.933 2.933h-.69v-.263zm13.48 1.263h.237a.76.76 0 010 1.52h-.237v-1.52zm-15.017 2.52h.266c.292 3.701 3.392 6.626 7.168 6.626h.386c3.776 0 6.875-2.925 7.168-6.626h.266c.97 0 1.76-.79 1.76-1.76s-.79-1.76-1.76-1.76h-.237v-.263c0-3.969-3.23-7.197-7.197-7.197h-.386c-3.97 0-7.198 3.228-7.198 7.197v.263h-.236c-.971 0-1.76.79-1.76 1.76s.789 1.76 1.76 1.76zm5.088.213a.488.488 0 100-.976.488.488 0 000 .976zm13.045 25.825h-3.316v-6.948h-.9v6.948h-14.84v-3.097h7.096a2.862 2.862 0 002.858-2.859 2.853 2.853 0 00-2.427-2.814l7.668-7.984c3.434 2.064 3.86 7.001 3.86 9.287v7.467zm-11.96-7.514a1.56 1.56 0 011.559 1.558c0 .86-.7 1.56-1.56 1.56H19.96l2.994-3.118h.775zm-9.381 3.117v.005l-2.287-.004v-3.07c0-.177.014-.35.023-.526l18.222-9.408c.235.066.465.137.68.223l-8.032 8.363v.001l-4.242 4.416h-4.364zm5.743-13.292a9.485 9.485 0 004.899 1.365h.386c.337 0 .673-.027 1.007-.063L12.19 32.674c.645-4.146 3.754-7.619 7.9-8.629zm9.878-1.142l-.241-.046-.21.123a8.204 8.204 0 01-4.142 1.131h-.386a8.194 8.194 0 01-4.432-1.306l-.226-.146-.263.057c-5.394 1.172-9.308 6.03-9.308 11.551v4.37l4.572.007v4.39h21.656v-8.767c0-6.367-2.56-10.509-7.02-11.364z" />
  );

  const normalHover = (
    <path d="M17.556 14.176h.236v.949c0 .193.014.382.03.57h-.266a.76.76 0 010-1.52zm1.537 0h.69c1.48 0 2.773-.823 3.443-2.035a3.988 3.988 0 003.475 2.035h4.572v.949a5.903 5.903 0 01-5.897 5.897h-.386a5.903 5.903 0 01-5.897-5.897v-.95zm0-2.263a5.903 5.903 0 015.897-5.897h.386a5.903 5.903 0 015.897 5.897v1.263H26.7a2.99 2.99 0 01-2.986-2.985v-.208h-1v.26a2.936 2.936 0 01-2.932 2.933h-.69v-1.263zm13.48 3.212v-.95h.236a.761.761 0 010 1.52h-.265c.015-.188.029-.377.029-.57zm-15.017 1.57h.415c.719 3.215 3.59 5.627 7.019 5.627h.386c3.429 0 6.3-2.412 7.019-5.626h.414c.97 0 1.76-.79 1.76-1.76s-.79-1.76-1.76-1.76h-.236v-1.263c0-3.968-3.228-7.197-7.197-7.197h-.386c-3.97 0-7.198 3.229-7.198 7.197v1.263h-.236c-.97 0-1.76.79-1.76 1.76s.79 1.76 1.76 1.76zm18.133 25.039h-3.316v-6.948h-.9v6.948h-14.84v-3.097h7.096a2.861 2.861 0 002.859-2.858 2.855 2.855 0 00-2.428-2.815l7.668-7.984c3.434 2.064 3.86 7 3.86 9.288v7.466zm-11.96-7.514a1.56 1.56 0 010 3.117h-3.77l2.994-3.117h.776zm-9.381 3.117v.005l-2.287-.004v-3.07c0-.177.014-.351.023-.526l18.222-9.408c.234.067.465.137.68.224l-8.032 8.363h-.001l-4.241 4.416h-4.364zm5.743-13.292a9.476 9.476 0 004.899 1.366h.386c.337 0 .673-.028 1.007-.064L12.19 32.674c.645-4.146 3.754-7.62 7.9-8.63zm9.878-1.141l-.24-.047-.211.124a8.213 8.213 0 01-4.142 1.13h-.386a8.194 8.194 0 01-4.432-1.306l-.227-.146-.262.058c-5.393 1.17-9.308 6.029-9.308 11.55v4.369l4.572.008v4.39H36.99v-8.766c0-6.368-2.56-10.51-7.021-11.364zm-7.325-5.995a.488.488 0 100-.976.488.488 0 000 .976zm5.147 0a.488.488 0 10.001-.977.488.488 0 00-.001.977z" />
  );

  return isHovered ? normalHover : normal;
};

export default PersonWithBrokenArm;
