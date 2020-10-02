import React from 'react';
import {SvgPathProps} from './Icon';

const Reply: React.FC<SvgPathProps> = ({isExtraSmall, isHovered}: SvgPathProps): JSX.Element => {
  const normal = (
    <g>
      <path d="M41.29 37.678h-2v-5.2c0-6.79-5.522-12.314-12.312-12.314H7.708v-2h19.27c7.892 0 14.313 6.42 14.313 14.314v5.2z" />
      <path d="M18.388 31.819L6.33 19.263 18.179 6.637l1.458 1.368L9.088 19.248 19.83 30.433z" />
    </g>
  );

  const normalHover = (
    <g>
      <path d="M41.29 34.16h-2v-1.682c0-6.79-5.523-12.314-12.312-12.314H4.192v-2h22.786c7.892 0 14.313 6.42 14.313 14.314v1.683z" />
      <path d="M14.87 31.819L2.814 19.263 14.662 6.637l1.458 1.368L5.571 19.248l10.742 11.185z" />
    </g>
  );

  const simplified = (
    <path d="M27.254 17.363H10.801l9.222-9.647L18.158 6 6 18.719l12.372 12.645 1.844-1.739-9.544-9.754h16.582c6.721 0 12.19 5.368 12.19 11.965V37H42v-5.164c0-7.98-6.615-14.473-14.746-14.473" />
  );

  const simplifiedHover = (
    <path d="M26.462 17.567H6.733l9.092-9.82L13.987 6 2 18.947l12.197 12.871 1.818-1.77-9.41-9.928h19.857c6.626 0 12.018 5.464 12.018 12.18V34H41v-1.7c0-8.124-6.522-14.733-14.538-14.733" />
  );

  return isExtraSmall ? (isHovered ? simplifiedHover : simplified) : isHovered ? normalHover : normal;
};

export default Reply;
