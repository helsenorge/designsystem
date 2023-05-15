import React from 'react';

import { SvgPathProps } from './Icon';

const Music: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <path
      fillRule={'evenodd'}
      d="M18.237 15.566h17.459v-4.057H18.237v4.057zm13.967 20.485a3.496 3.496 0 01-3.492-3.492 3.496 3.496 0 013.492-3.493 3.496 3.496 0 013.492 3.493 3.496 3.496 0 01-3.492 3.492zm-18.759 0a3.497 3.497 0 01-3.492-3.492 3.497 3.497 0 013.492-3.493 3.497 3.497 0 013.493 3.493 3.497 3.497 0 01-3.493 3.492zm3.493-25.842v19.09a4.77 4.77 0 00-3.493-1.533 4.798 4.798 0 00-4.792 4.793 4.798 4.798 0 004.792 4.792 4.797 4.797 0 004.792-4.792V16.866h17.459v12.433a4.766 4.766 0 00-3.492-1.533 4.798 4.798 0 00-4.792 4.793 4.798 4.798 0 004.792 4.792 4.797 4.797 0 004.792-4.792v-22.35H16.938z"
    />
  );

  const normalHover = (
    <path
      fillRule={'evenodd'}
      d="M18.237 15.493v-4.049l17.46-1.862v4.05l-17.46 1.861zm13.967 18.683a3.496 3.496 0 01-3.492-3.493 3.496 3.496 0 013.492-3.492 3.496 3.496 0 013.492 3.492 3.496 3.496 0 01-3.492 3.493zm-18.759 1.875a3.496 3.496 0 01-3.492-3.493 3.496 3.496 0 013.492-3.492 3.496 3.496 0 013.492 3.492 3.496 3.496 0 01-3.492 3.493zM36.996 8.136l-20.059 2.14v19.023a4.767 4.767 0 00-3.492-1.533 4.797 4.797 0 00-4.792 4.792 4.797 4.797 0 004.792 4.792 4.797 4.797 0 004.792-4.792V16.801l17.46-1.862v12.485a4.766 4.766 0 00-3.493-1.533 4.797 4.797 0 00-4.792 4.792 4.797 4.797 0 004.792 4.793 4.798 4.798 0 004.792-4.793c0-.043-.01-.082-.012-.125h.012V8.136z"
    />
  );

  return isHovered ? normalHover : normal;
};

export default Music;
