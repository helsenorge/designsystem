import React from 'react';
import {SvgPathProps} from './Icon';

const AlertSignStroke: React.FC<SvgPathProps> = ({isExtraSmall, isHovered}: SvgPathProps): JSX.Element => {
  const normal = (
    <path d="M24.003 31.578a1.394 1.394 0 100 2.788 1.394 1.394 0 000-2.788zm.098-20.19l14.687 26.735H9.227L24.1 11.388zm.008-2.929L6.816 39.541h34.367L24.109 8.459zm-.106 21.033c.494 0 .893-.4.893-.893v-7.228a.893.893 0 00-1.786 0v7.228c0 .493.4.893.893.893z" />
  );

  const normalHover = (
    <path d="M24.003 31.578a1.394 1.394 0 100 2.788 1.394 1.394 0 000-2.788zm.098-20.19l14.687 26.735H9.227L24.1 11.388zm.008-2.929L6.816 39.541h34.367L24.109 8.459zm-.106 19.033c.494 0 .893-.4.893-.893v-7.228a.893.893 0 00-1.786 0v7.228c0 .493.4.893.893.893z" />
  );

  const simplified = (
    <path d="M24.003 31.562a1.39 1.39 0 100 2.782 1.39 1.39 0 000-2.782zm.097-20.147l14.656 26.678H9.258L24.1 11.415zm.008-2.923L6.853 39.508h34.294L24.108 8.492zm-.105 20.988c.492 0 .892-.399.892-.89v-7.213a.891.891 0 00-1.783 0v7.212c0 .492.4.891.891.891z" />
  );

  const simplifiedHover = (
    <path d="M24.003 31.562a1.39 1.39 0 100 2.782 1.39 1.39 0 000-2.782zm.097-20.147l14.656 26.678H9.258L24.1 11.415zm.008-2.923L6.853 39.508h34.294L24.108 8.492zm-.105 18.462c.492 0 .892-.399.892-.891V18.85a.891.891 0 00-1.783 0v7.213c0 .492.4.891.891.891z" />
  );

  return isExtraSmall ? (isHovered ? simplifiedHover : simplified) : isHovered ? normalHover : normal;
};

export default AlertSignStroke;