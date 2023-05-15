import React from 'react';

import { SvgPathProps } from './Icon';

const Laboratory: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <path
      fillRule={'evenodd'}
      d="M17.28 10.02a.682.682 0 100-1.365.682.682 0 000 1.364zm2.121-2.092a.681.681 0 10.002-1.362.681.681 0 00-.002 1.362zm6.273 0a.681.681 0 100-1.362.681.681 0 000 1.362zm3.46 2.091a.682.682 0 10-.001-1.364.682.682 0 000 1.364zm-5.582 0a.682.682 0 10.002-1.365.682.682 0 00-.002 1.365zM37.74 38.841H10.01V37.18c0-.822.668-1.49 1.49-1.49h24.75c.822 0 1.49.668 1.49 1.49v1.662zM12.28 34.39h23.188v-1.498H12.28v1.498zm0-13.983h4.885v7.412a2.535 2.535 0 002.532 2.533 2.536 2.536 0 002.533-2.533v-7.412h3.3v7.412a2.535 2.535 0 002.531 2.533 2.535 2.535 0 002.532-2.533v-7.412h4.875v11.485H12.28V20.406zm6.185 0h2.464v7.412c0 .68-.552 1.233-1.232 1.233a1.234 1.234 0 01-1.232-1.233v-7.412zm0-1.299h2.464v-3.639h-2.464v3.64zm0-4.689h2.464v-1.62h-2.464v1.62zm8.363 5.988h2.465v7.412c0 .68-.553 1.233-1.232 1.233-.68 0-1.233-.553-1.233-1.233v-7.412zm0-1.299h2.464v-3.639h-2.464v3.64zm0-4.689h2.464v-1.62h-2.464v1.62zm9.941 20.023v-16.7h-1.3v1.365h-4.876v-7.609H25.53v7.61H22.23v-7.61h-5.065v7.61H12.28V17.74h-1.299v16.701A2.793 2.793 0 008.71 37.18v2.962H39.04V37.18a2.793 2.793 0 00-2.27-2.738z"
    />
  );

  const normalHover = (
    <path
      fillRule={'evenodd'}
      d="M17.28 9.27a.682.682 0 100-1.365.682.682 0 000 1.364zm2.122-3.592a.682.682 0 100-1.364.682.682 0 000 1.364zM37.74 38.841H10.01V37.18c0-.822.668-1.49 1.49-1.49h24.75c.822 0 1.49.668 1.49 1.49v1.662zM12.28 34.39H35.47v-1.498H12.28v1.498zm0-13.983h4.886v7.412a2.535 2.535 0 002.532 2.533 2.535 2.535 0 002.532-2.533v-7.412h3.299v7.412a2.535 2.535 0 002.532 2.533 2.535 2.535 0 002.533-2.533v-7.412h4.875v11.485H12.28V20.406zm6.186 0h2.464v7.412c0 .68-.552 1.233-1.232 1.233a1.234 1.234 0 01-1.232-1.233v-7.412zm0-1.299h2.464v-3.639h-2.464v3.64zm0-4.689h2.464v-1.62h-2.464v1.62zm8.363 5.988h2.464v7.412c0 .68-.553 1.233-1.232 1.233a1.234 1.234 0 01-1.232-1.233v-7.412zm0-1.299h2.464v-3.639h-2.464v3.64zm0-4.689h2.464v-1.62h-2.464v1.62zm9.94 20.023v-16.7h-1.3v1.365h-4.875v-7.609h-5.065v7.61h-3.3v-7.61h-5.063v7.61H12.28V17.74h-1.3v16.701A2.793 2.793 0 008.71 37.18v2.962h30.33V37.18a2.793 2.793 0 00-2.271-2.738zM23.553 9.27a.682.682 0 100-1.363.682.682 0 000 1.363zm2.12-4.34a.682.682 0 10.002-1.364.682.682 0 00-.001 1.363zm3.46 3.59a.682.682 0 100-1.364.682.682 0 000 1.364z"
    />
  );

  return isHovered ? normalHover : normal;
};

export default Laboratory;
