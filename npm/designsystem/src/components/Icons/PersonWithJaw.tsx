import React from 'react';

import { SvgPathProps } from '../Icon';

const PersonWithJaw: React.FC<SvgPathProps> = ({ isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <g>
      <path d="M28.405 20.32a1.02 1.02 0 100 2.04 1.02 1.02 0 000-2.04" />
      <path d="M36.3 26.617a.823.823 0 01-.705.387h-1.858v2c-4.609.087-9.15-1.267-10.046-1.551a.793.793 0 00-.808.203.804.804 0 00-.184.829c1.637 4.679 4.098 6.396 5.09 6.92v4.123H15.646V34.13c0-2.601-.917-4.415-1.888-6.336-1.078-2.133-2.192-4.338-2.192-7.971 0-5.46 4.22-11.351 11.043-11.351 5.395 0 11.128 4.056 11.128 11.572v.143l2.617 5.625a.824.824 0 01-.054.804m-7.753 7.715c-.504-.24-2.665-1.457-4.268-5.348 1.891.529 5.518 1.357 9.291 1.316a5.29 5.29 0 01-5.022 4.032m8.983-9.068l-2.494-5.365C34.965 11.632 28.6 7.173 22.61 7.173c-6.807 0-12.345 5.675-12.345 12.65 0 3.943 1.24 6.396 2.333 8.559.938 1.855 1.748 3.458 1.748 5.749v6.698H29.09v-5.217a6.608 6.608 0 005.948-6.568v-.74h.557a2.13 2.13 0 001.801-.99 2.126 2.126 0 00.136-2.05" />
    </g>
  );

  const normalHover = (
    <g>
      <path d="M28.406 20.32c-.563 0-1.021.457-1.021 1.02a1.021 1.021 0 002.04 0c0-.563-.457-1.02-1.02-1.02" />
      <path d="M36.3 26.617a.821.821 0 01-.706.387h-1.856V29c-4.06.025-8.542-1.493-10.286-2.085-.227-.077-.41-.14-.544-.182a.803.803 0 00-.988 1.034c1.7 4.86 4.797 6.995 5.868 7.613v4.147h-12.14V34.13c0-2.601-.919-4.415-1.89-6.336-1.078-2.133-2.192-4.338-2.192-7.971 0-5.46 4.221-11.351 11.043-11.351 5.395 0 11.13 4.056 11.13 11.572v.143l2.615 5.625a.824.824 0 01-.054.804m-7.729 7.713c-.64-.354-3.35-2.038-5.047-6.018 2.026.68 6.164 1.983 10.047 1.993a5.292 5.292 0 01-5 4.025m8.961-9.066l-2.494-5.365C34.965 11.632 28.6 7.173 22.61 7.173c-6.807 0-12.344 5.675-12.344 12.65 0 3.943 1.24 6.396 2.333 8.559.938 1.855 1.748 3.458 1.748 5.749v6.698H29.09v-5.217a6.609 6.609 0 005.95-6.568v-.74h.555c.734 0 1.408-.37 1.803-.988a2.13 2.13 0 00.135-2.052" />
    </g>
  );

  return isHovered ? normalHover : normal;
};

export default PersonWithJaw;
