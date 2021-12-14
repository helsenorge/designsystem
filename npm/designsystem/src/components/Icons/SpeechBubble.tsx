import React from 'react';
import { returnIcon, SvgPathProps } from './Icon';

const SpeechBubble: React.FC<SvgPathProps> = ({ isExtraSmall, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <path
      d="M14.003 25.497H27.96v-1.301H14.003v1.3Zm0-4.572h19.602v-1.301H14.003v1.3Zm25.08 7.662A2.818 2.818 0 0 1 36.27 31.4h-4.996v3.33l-5.178-3.33H11.73a2.818 2.818 0 0 1-2.816-2.814V17.234a2.818 2.818 0 0 1 2.816-2.814h24.538a2.817 2.817 0 0 1 2.815 2.814v11.353ZM36.27 13.119H11.73a4.121 4.121 0 0 0-4.116 4.115v11.353a4.121 4.121 0 0 0 4.116 4.115h13.982l6.86 4.41v-4.41h3.696a4.12 4.12 0 0 0 4.115-4.115V17.234a4.12 4.12 0 0 0-4.115-4.115Z"
      fill-rule="evenodd"
    />
  );
  const normalHover = (
    <path
      d="M14.003 25.497h19.602v-1.301H14.003v1.3Zm0-4.572h19.602v-1.301H14.003v1.3Zm25.08 7.662A2.817 2.817 0 0 1 36.27 31.4h-4.997v3.33l-5.178-3.33H11.73a2.817 2.817 0 0 1-2.814-2.814V17.234a2.817 2.817 0 0 1 2.814-2.814h24.54a2.817 2.817 0 0 1 2.814 2.814v11.353ZM36.27 13.119H11.73a4.12 4.12 0 0 0-4.114 4.115v11.353a4.12 4.12 0 0 0 4.114 4.115h13.983l6.86 4.41v-4.41h3.697a4.12 4.12 0 0 0 4.114-4.115V17.234a4.12 4.12 0 0 0-4.114-4.115Z"
      fill-rule="evenodd"
    />
  );
  const simplified = (
    <path
      d="M14.003 25.669h13.958v-1.644H14.003v1.644Zm0-4.574h19.602V19.45H14.003v1.644Zm24.91 7.492a2.647 2.647 0 0 1-2.644 2.643h-5.166v3.189l-4.958-3.189H11.73a2.647 2.647 0 0 1-2.644-2.643V17.236a2.646 2.646 0 0 1 2.644-2.644h24.538a2.646 2.646 0 0 1 2.644 2.644v11.35Zm-2.644-15.638H11.731a4.29 4.29 0 0 0-4.286 4.287v11.35a4.29 4.29 0 0 0 4.286 4.286h13.931l7.083 4.554v-4.554h3.524a4.29 4.29 0 0 0 4.286-4.285V17.236a4.29 4.29 0 0 0-4.286-4.287Z"
      fill-rule="evenodd"
    />
  );
  const simplifiedHover = (
    <path
      d="M14.003 25.669h19.602v-1.644H14.003v1.644Zm0-4.574h19.602V19.45H14.003v1.644Zm24.91 7.492a2.647 2.647 0 0 1-2.644 2.643h-5.166v3.189l-4.958-3.189H11.73a2.647 2.647 0 0 1-2.644-2.643V17.236a2.646 2.646 0 0 1 2.644-2.644h24.538a2.646 2.646 0 0 1 2.644 2.644v11.35Zm-2.644-15.638H11.731a4.29 4.29 0 0 0-4.286 4.287v11.35a4.29 4.29 0 0 0 4.286 4.286h13.931l7.083 4.554v-4.554h3.524a4.29 4.29 0 0 0 4.286-4.285V17.236a4.29 4.29 0 0 0-4.286-4.287Z"
      fill-rule="evenodd"
    />
  );
  return returnIcon(isExtraSmall, isHovered, normal, normalHover, simplified, simplifiedHover);
};

export default SpeechBubble;
