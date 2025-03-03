import React from 'react';

import { SvgPathProps } from '../Icon';

const StickyNote: React.FC<SvgPathProps> = ({ isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 38.33h14.27a4.65 4.65 0 0 0 3.325-1.399l9.392-9.602a4.65 4.65 0 0 0 1.326-3.252V10H10v28.33Zm1.3-1.3V11.3h25.713v10.293h-.006V22.8a2.35 2.35 0 0 1-2.35 2.35h-8.81v9.528a2.35 2.35 0 0 1-2.35 2.35H11.3Zm23.357-10.58c.631 0 1.225-.16 1.742-.441a3.357 3.357 0 0 1-.341.41l-9.047 9.249c.088-.315.136-.647.136-.99V26.45h7.51ZM14.974 16.167h18.379v-1.3H14.974v1.3Zm7.568 10.813h-7.568v-1.3h7.568v1.3Zm-7.568-5.406h18.379v-1.3H14.974v1.3Z"
    />
  );

  const normalHover = (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M38.313 38.33H10V10h28.313v28.33ZM11.3 11.3v25.73h25.713V11.3H11.3Zm3.674 4.867h18.378v-1.3H14.974v1.3Zm7.568 10.813h-7.568v-1.3h7.568v1.3Zm-7.568-5.407h18.378v-1.3H14.974v1.3Z"
    />
  );

  return isHovered ? normalHover : normal;
};

export default StickyNote;
