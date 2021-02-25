import React from 'react';
import { SvgPathProps } from './Icon';

const Surgery: React.FC<SvgPathProps> = ({ isExtraSmall, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <path
      fillRule={'evenodd'}
      d="M20.807 7.674a2.92 2.92 0 012.917-2.917h.21a2.92 2.92 0 012.918 2.917v1.75c0 .016-.003.028-.003.043H20.81c0-.015-.004-.027-.004-.042V7.674zm3.128 4.668h-.211a2.914 2.914 0 01-2.716-1.875h5.644a2.916 2.916 0 01-2.717 1.875zm-.211 1.3h.21a4.223 4.223 0 004.219-4.217V7.674a4.223 4.223 0 00-4.218-4.218h-.211a4.223 4.223 0 00-4.217 4.218v1.75a4.223 4.223 0 004.217 4.219zM9.622 32.112a2.777 2.777 0 012.774 2.774 2.777 2.777 0 01-2.774 2.773 2.776 2.776 0 01-2.774-2.773 2.777 2.777 0 012.774-2.774zm0 6.848a4.08 4.08 0 004.074-4.074 4.08 4.08 0 00-4.074-4.075 4.079 4.079 0 00-4.074 4.075 4.078 4.078 0 004.074 4.074zm20.744.828h-10.39a4.05 4.05 0 01-4.045-4.046 4.05 4.05 0 014.045-4.045h11.98v8.09h-1.59zM15.026 24.36l2.007-6.493a2.39 2.39 0 012.296-1.69h8.923c1.049 0 1.969.672 2.29 1.67l2.113 6.57a1.35 1.35 0 01-.273 1.46l-3.958 4.105c-.534.552-1.488.528-1.995-.056-.453-.521-.393-1.357.135-1.905l3.228-3.348-1.591-5.106-1.241.386 1.362 4.372-2.694 2.793c-.875.908-1.036 2.266-.451 3.277h-2.693c.585-1.011.424-2.368-.45-3.275l-2.696-2.795 1.362-4.372-1.241-.386-1.591 5.106 3.23 3.35c.527.546.586 1.382.134 1.903-.505.58-1.467.604-1.996.057l-3.958-4.105c-.375-.39-.482-.962-.252-1.518zm17.58 6.035h-2.774l3.486-3.615c.736-.762.946-1.886.556-2.812l-2.094-6.52a3.695 3.695 0 00-3.528-2.571h-8.923a3.685 3.685 0 00-3.538 2.606l-1.986 6.433a2.65 2.65 0 00.537 2.864l3.814 3.955c-2.05.749-3.525 2.7-3.525 5.005 0 1.624.744 3.065 1.89 4.046H4.752v4.507h1.3v-3.206h25.905v3.206h1.3V31.696H42.6v-1.3h-9.993z"
    />
  );

  const normalHover = (
    <path
      fillRule={'evenodd'}
      d="M20.806 7.674a2.92 2.92 0 012.917-2.917h.211a2.92 2.92 0 012.917 2.917v1.75c0 .016-.003.028-.004.043H20.81c0-.015-.004-.027-.004-.042V7.674zm3.128 4.668h-.21a2.914 2.914 0 01-2.717-1.875h5.644a2.916 2.916 0 01-2.717 1.875zm-.21 1.3h.21a4.223 4.223 0 004.218-4.217V7.674a4.223 4.223 0 00-4.218-4.218h-.21a4.223 4.223 0 00-4.218 4.218v1.75a4.223 4.223 0 004.217 4.219zM9.62 32.112a2.777 2.777 0 012.775 2.774 2.777 2.777 0 01-2.775 2.773 2.776 2.776 0 01-2.773-2.773A2.776 2.776 0 019.62 32.11zm0 6.848a4.08 4.08 0 004.075-4.074A4.08 4.08 0 009.62 30.81a4.08 4.08 0 00-4.074 4.075 4.08 4.08 0 004.074 4.074zm20.745.828h-10.39a4.05 4.05 0 01-4.045-4.046 4.05 4.05 0 014.045-4.045h11.981v8.09h-1.59zM22.36 25.61l-2.972-1.451 1.311-4.206-1.242-.386-1.642 5.272 3.925 1.912c.65.392.923 1.185.621 1.804-.176.36-.484.615-.868.718a1.345 1.345 0 01-1.033-.14l-5.23-3.307c-.337-.386-.425-.934-.205-1.466l2.007-6.493a2.39 2.39 0 012.296-1.69h8.923c1.05 0 1.97.672 2.29 1.67l2.113 6.57a1.35 1.35 0 01-.273 1.46l-3.958 4.105c-.534.552-1.489.528-1.995-.056-.453-.521-.393-1.357.135-1.905l3.228-3.348-1.59-5.106-1.242.386 1.362 4.372-2.694 2.793c-.875.908-1.037 2.266-.45 3.277h-3.002a2.656 2.656 0 001.354-1.27c.595-1.22.104-2.751-1.169-3.515zm10.246 4.785h-2.775l3.486-3.615c.735-.762.946-1.886.555-2.812l-2.093-6.52a3.695 3.695 0 00-3.528-2.571h-8.923a3.685 3.685 0 00-3.538 2.606l-1.986 6.433a2.65 2.65 0 00.537 2.864l5.438 3.46c.105.063.216.107.327.155h-.13a5.351 5.351 0 00-5.346 5.345c0 1.624.744 3.065 1.891 4.046H4.75v4.507H6.05v-3.206H31.956v3.206h1.3V31.696H42.6v-1.3h-9.993z"
    />
  );

  return isHovered ? normalHover : normal;
};

export default Surgery;