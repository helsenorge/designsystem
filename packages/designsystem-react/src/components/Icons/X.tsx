import React from 'react';
import {SvgPathProps} from './Icon';

const X: React.FC<SvgPathProps> = ({isExtraSmall, isHovered}: SvgPathProps): JSX.Element => {
  const normal = (
    <path d="M25.403 24l10.259-10.259-1.403-1.403L24 22.597l-10.259-10.26-1.403 1.403L22.597 24 12.338 34.26l1.403 1.403L24 25.403l10.259 10.259 1.403-1.403z" />
  );

  const normalHover = (
    <path d="M24 22.597L12.327 10.924l-1.403 1.402L22.597 24 10.923 35.674l1.403 1.402L24 25.403l11.674 11.673 1.403-1.402L25.403 24l11.673-11.674-1.403-1.402z" />
  );

  const simplified = (
    <path d="M25.773 24l10.432-10.432-1.772-1.773-10.432 10.433-10.433-10.433-1.773 1.772L22.229 24 11.795 34.433l1.773 1.772 10.433-10.433 10.432 10.433 1.772-1.773z" />
  );

  const simplifiedHover = (
    <path d="M24 22.227L11.781 10.008l-1.772 1.772 12.219 12.219-12.22 12.22 1.772 1.772L24 25.771l12.22 12.22 1.772-1.772-12.22-12.22L37.991 11.78l-1.772-1.772z" />
  );

  return isExtraSmall ? (isHovered ? simplifiedHover : simplified) : isHovered ? normalHover : normal;
};

export default X;
