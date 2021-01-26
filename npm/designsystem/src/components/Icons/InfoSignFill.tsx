import React from 'react';
import {SvgPathProps} from './Icon';

const InfoSignFill: React.FC<SvgPathProps> = ({isExtraSmall, isHovered}: SvgPathProps): JSX.Element => {
  const normal = (
    <path d="M26.372 31.239h-4.709v-.544c.129-.01.256-.022.38-.037a1.31 1.31 0 00.32-.075.614.614 0 00.335-.256.883.883 0 00.097-.444v-6.337a.87.87 0 00-.119-.459 1.003 1.003 0 00-.298-.316 1.546 1.546 0 00-.406-.171 2.65 2.65 0 00-.496-.105v-.544l3.652-.193.111.111v7.917c0 .174.038.322.112.443a.672.672 0 00.321.272 2.368 2.368 0 00.7.194v.544zM23.726 16.21a1.559 1.559 0 11-.002 3.118 1.559 1.559 0 01.002-3.118zm.275-7.514C15.562 8.696 8.696 15.561 8.696 24c0 8.438 6.866 15.304 15.305 15.304 8.438 0 15.303-6.866 15.303-15.304 0-8.439-6.865-15.304-15.303-15.304z" />
  );

  const normalHover = (
    <path d="M26.372 31.239h-4.709v-.544c.129-.01.256-.022.38-.037a1.31 1.31 0 00.32-.075.614.614 0 00.335-.256.883.883 0 00.097-.444v-6.337a.87.87 0 00-.119-.459 1.003 1.003 0 00-.298-.316 1.546 1.546 0 00-.406-.171 2.65 2.65 0 00-.496-.105v-.544l3.652-.193.111.111v7.917c0 .174.038.322.112.443a.672.672 0 00.321.272 2.368 2.368 0 00.7.194v.544zM23.726 14.21a1.559 1.559 0 11-.002 3.118 1.559 1.559 0 01.002-3.118zm.275-5.514C15.562 8.696 8.696 15.561 8.696 24c0 8.438 6.866 15.304 15.305 15.304 8.438 0 15.303-6.866 15.303-15.304 0-8.439-6.865-15.304-15.303-15.304z" />
  );

  const simplified = (
    <path d="M26.367 31.224h-4.7v-.543a8.88 8.88 0 00.38-.037c.124-.015.23-.04.32-.075a.612.612 0 00.334-.255.881.881 0 00.097-.443v-6.324a.868.868 0 00-.12-.458 1.001 1.001 0 00-.297-.315 1.543 1.543 0 00-.405-.171 2.644 2.644 0 00-.495-.105v-.543l3.645-.192.11.11v7.9c0 .174.038.322.112.443a.67.67 0 00.32.271 2.363 2.363 0 00.699.194v.543zm-2.64-14.998a1.556 1.556 0 11-.002 3.111 1.556 1.556 0 01.002-3.11zM24 8.728C15.58 8.728 8.728 15.578 8.728 24c0 8.42 6.852 15.272 15.273 15.272 8.42 0 15.27-6.852 15.27-15.272 0-8.421-6.85-15.272-15.27-15.272z" />
  );

  const simplifiedHover = (
    <path d="M26.367 31.224h-4.7v-.543a8.88 8.88 0 00.38-.037c.124-.015.23-.04.32-.075a.612.612 0 00.334-.255.881.881 0 00.097-.443v-6.324a.868.868 0 00-.12-.458 1.001 1.001 0 00-.297-.315 1.543 1.543 0 00-.405-.171 2.644 2.644 0 00-.495-.105v-.543l3.645-.192.11.11v7.9c0 .174.038.322.112.443a.67.67 0 00.32.271 2.363 2.363 0 00.699.194v.543zM23.727 13.7a1.556 1.556 0 11-.002 3.111 1.556 1.556 0 01.002-3.11zM24 8.728C15.58 8.728 8.728 15.578 8.728 24c0 8.42 6.852 15.272 15.273 15.272 8.42 0 15.27-6.852 15.27-15.272 0-8.421-6.85-15.272-15.27-15.272z" />
  );

  return isExtraSmall ? (isHovered ? simplifiedHover : simplified) : isHovered ? normalHover : normal;
};

export default InfoSignFill;