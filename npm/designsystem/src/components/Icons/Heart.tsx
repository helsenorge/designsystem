import React from 'react';
import { getIcon, SvgPathProps } from './Icon';

const Heart: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <path d="M36.368 23.08L23.876 36.002l-12.492-12.92c-2.621-2.73-2.532-7.086.2-9.708a6.84 6.84 0 014.752-1.908 6.85 6.85 0 014.956 2.11l2.584 2.692 2.583-2.693a6.875 6.875 0 019.708-.2c2.73 2.621 2.82 6.976.2 9.705m.7-10.644c-3.25-3.116-8.428-3.009-11.546.238l-1.645 1.716-1.647-1.716c-3.116-3.247-8.297-3.356-11.546-.238-3.248 3.118-3.354 8.298-.236 11.547l13.429 13.89 13.429-13.89c3.117-3.249 3.01-8.429-.238-11.547m-25.705 5.79a4.93 4.93 0 001.376 3.54l.938-.9a3.642 3.642 0 01-1.015-2.614 3.65 3.65 0 011.13-2.577 3.659 3.659 0 012.546-1.024v-1.3a4.957 4.957 0 00-3.446 1.386 4.943 4.943 0 00-1.53 3.49" />
  );

  const normalHover = (
    <path d="M11.39 18.265a4.833 4.833 0 001.348 3.469l.794-.762a3.74 3.74 0 01-1.042-2.685 3.752 3.752 0 011.161-2.647 3.758 3.758 0 012.614-1.052v-1.099a4.85 4.85 0 00-3.376 1.358 4.843 4.843 0 00-1.499 3.418m25.99 5.891L23.803 38.197l-13.57-14.036a8.318 8.318 0 01-2.332-5.967 8.317 8.317 0 012.572-5.865A8.328 8.328 0 0116.265 10c2.301 0 4.445.913 6.037 2.574l1.502 1.565 1.5-1.565A8.292 8.292 0 0131.342 10a8.33 8.33 0 015.791 2.329 8.313 8.313 0 012.572 5.865 8.308 8.308 0 01-2.326 5.962m.655-12.764A9.622 9.622 0 0031.342 8.7a9.586 9.586 0 00-6.976 2.973l-.562.587-.564-.587A9.585 9.585 0 0016.265 8.7a9.616 9.616 0 00-6.69 2.692 9.603 9.603 0 00-2.973 6.774 9.612 9.612 0 002.694 6.896l14.508 15.006 14.511-15.01a9.604 9.604 0 002.69-6.892 9.602 9.602 0 00-2.97-6.774" />
  );

  const small = (
    <path d="M16.001 11.872a6.61 6.61 0 00-4.605 1.854 6.615 6.615 0 00-2.048 4.665 6.625 6.625 0 001.853 4.749l12.366 12.79 12.37-12.793a6.618 6.618 0 001.85-4.746 6.608 6.608 0 00-2.047-4.665c-1.283-1.231-2.952-1.837-4.747-1.853a6.614 6.614 0 00-4.666 2.047l-2.76 2.876-2.76-2.876a6.609 6.609 0 00-4.666-2.047h-.14zm7.566 26.602L9.927 24.366a8.375 8.375 0 01-2.346-6.01 8.369 8.369 0 012.59-5.905c1.622-1.559 3.738-2.37 6.007-2.345a8.367 8.367 0 015.905 2.59l1.484 1.547 1.486-1.547a8.364 8.364 0 015.904-2.59c2.246-.034 4.384.786 6.007 2.345a8.362 8.362 0 012.59 5.905 8.368 8.368 0 01-2.343 6.008l-13.644 14.11z" />
  );

  const smallHover = (
    <path d="M10.234 23.696l13.142 13.592 13.143-13.595a7.683 7.683 0 002.15-5.51 7.685 7.685 0 00-2.378-5.419 7.694 7.694 0 00-5.352-2.152 7.668 7.668 0 00-5.58 2.376l-1.983 2.069-1.986-2.068a7.666 7.666 0 00-5.578-2.377 7.69 7.69 0 00-5.352 2.152 7.667 7.667 0 00-2.374 5.42 7.684 7.684 0 002.148 5.512zM23.376 39.83L8.96 24.922a9.443 9.443 0 01-2.642-6.775 9.436 9.436 0 012.916-6.659 9.452 9.452 0 016.578-2.646 9.41 9.41 0 016.852 2.923l.712.739.708-.739a9.413 9.413 0 016.855-2.923c2.465 0 4.8.94 6.578 2.646a9.447 9.447 0 012.919 6.657 9.436 9.436 0 01-2.644 6.775L23.376 39.83z" />
  );

  return getIcon(size, isHovered, normal, normalHover, small, smallHover);
};

export default Heart;
