import React from 'react';
import { returnIcon, SvgPathProps } from './Icon';

const X: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <path d="M25.403 24l10.259-10.259-1.403-1.403L24 22.597l-10.259-10.26-1.403 1.403L22.597 24 12.338 34.26l1.403 1.403L24 25.403l10.259 10.259 1.403-1.403z" />
  );

  const normalHover = (
    <path d="M24 22.597L12.327 10.924l-1.403 1.402L22.597 24 10.923 35.674l1.403 1.402L24 25.403l11.674 11.673 1.403-1.402L25.403 24l11.673-11.674-1.403-1.402z" />
  );

  const small = (
    <path d="M25.773 24l10.432-10.432-1.772-1.773-10.432 10.433-10.433-10.433-1.773 1.772L22.229 24 11.795 34.433l1.773 1.772 10.433-10.433 10.432 10.433 1.772-1.773z" />
  );

  const smallHover = (
    <path d="M24 22.227L11.781 10.008l-1.772 1.772 12.219 12.219-12.22 12.22 1.772 1.772L24 25.771l12.22 12.22 1.772-1.772-12.22-12.22L37.991 11.78l-1.772-1.772z" />
  );

  const tiny = (
    <path d="M36.3746 13.6056 34.3946 11.6256 24.0006 22.0196 13.6066 11.6256 11.6266 13.6056 22.0206 23.9996 11.6266 34.3936 13.6066 36.3736 24.0006 25.9796 34.3946 36.3736 36.3746 34.3936 25.9806 23.9996" />
  );

  const tinyHover = (
    <path d="M39.0362 10.9454 37.0562 8.9654 24.0002 22.0194 10.9442 8.9654 8.9642 10.9454 22.0202 23.9994 8.9642 37.0554 10.9442 39.0354 24.0002 25.9814 37.0562 39.0354 39.0362 37.0554 25.9802 23.9994" />
  );

  return returnIcon(size, isHovered, normal, normalHover, small, smallHover, tiny, tinyHover);
};

export default X;
