import React from 'react';
import { getIcon, SvgPathProps } from './Icon';

const Gallery: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <path
      fillRule={'evenodd'}
      d="M29.141 38.174h9.031v-9.032h-9.031v9.032zm-1.8 1.799h12.632V27.341H27.341v12.632zM9.828 38.174h9.031v-9.032H9.828v9.032zm-1.8 1.799H20.66V27.341H8.028v12.632zm21.113-21.115h9.031V9.826h-9.031v9.032zm-1.8 1.8h12.632V8.026H27.341v12.632zm-17.513-1.8h9.031V9.826H9.828v9.032zm-1.8 1.8H20.66V8.026H8.028v12.632z"
    />
  );

  const normalHover = (
    <path
      fillRule={'evenodd'}
      d="M29.141 39.437h10.295V29.142H29.141v10.295zm-1.8 1.8h13.895V27.342H27.341v13.895zm-18.777-1.8h10.295V29.142H8.564v10.295zm-1.8 1.8h13.895V27.342H6.764v13.895zm1.8-22.379h10.295V8.563H8.564v10.295zm-1.8 1.8h13.895V6.763H6.764v13.895zm22.377-1.8h10.295V8.563H29.141v10.295zm-1.8 1.8h13.895V6.763H27.341v13.895z"
    />
  );

  const small = (
    <path
      fillRule={'evenodd'}
      d="M29.615 37.7h8.084v-8.084h-8.084V37.7zm-2.274 2.274h12.632V27.342H27.34v12.632zM10.301 37.7h8.084v-8.084h-8.084V37.7zm-2.274 2.274H20.66V27.342H8.027v12.632zm21.588-21.59h8.084V10.3h-8.084v8.084zm-2.274 2.274h12.632V8.026H27.34v12.632zm-17.04-2.274h8.084V10.3h-8.084v8.084zm-2.274 2.274H20.66V8.026H8.027v12.632z"
    />
  );

  const smallHover = (
    <path
      fillRule={'evenodd'}
      d="M29.615 38.963h9.347v-9.347h-9.347v9.347zm-2.274 2.274h13.895V27.342H27.34v13.895zM9.038 38.963h9.347v-9.347H9.038v9.347zm-2.274 2.274H20.66V27.342H6.764v13.895zm2.274-22.853h9.347V9.037H9.038v9.347zm-2.274 2.274H20.66V6.763H6.764v13.895zm22.85-2.274h9.348V9.037h-9.347v9.347zm-2.273 2.274h13.895V6.763H27.34v13.895z"
    />
  );
  return getIcon(size, isHovered, normal, normalHover, small, smallHover);
};

export default Gallery;
