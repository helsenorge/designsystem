import React from 'react';

import { getIcon } from '../../utils/icon';
import { SvgPathProps } from '../Icon';

const History: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <path d="M23.863 10.082c7.794 0 14.112 6.319 14.112 14.113s-6.318 14.112-14.112 14.112a14.117 14.117 0 01-13.756-10.95l-.07-.319 1.274-.26c1.21 5.915 6.438 10.229 12.552 10.229 7.076 0 12.812-5.736 12.812-12.812S30.94 11.382 23.863 11.382c-3.95 0-7.598 1.8-10.007 4.81l4.949.001v1.3H11.97l-.336-7.12 1.298-.06.22 4.69a14.087 14.087 0 0110.71-4.921zm-.235 9.306v6.125h4.585v1h-5.585v-7.125h1z" />
  );

  const normalHover = (
    <path d="M33.843 14.236c5.51 5.51 5.51 14.446 0 19.958a14.118 14.118 0 01-17.451 1.996l-.294-.188.716-1.085c5.038 3.326 11.787 2.68 16.11-1.642 5.002-5.005 5.002-13.117 0-18.12-5.005-5.003-13.116-5.003-18.12 0a12.788 12.788 0 00-3.675 10.477l3.5-3.499.919.92-4.834 4.832-5.271-4.796.875-.962L9.79 25.29a14.085 14.085 0 014.093-11.053c5.512-5.511 14.447-5.511 19.959 0zm-10.351 5.132l-.001 6.126h4.586v1h-5.585v-7.126h1z" />
  );

  const xSmall = (
    <path d="M22.363 19.193v7.383h5.842v-1.514h-4.328v-5.869h-1.514zm1.493-9.461c-4.04 0-7.883 1.732-10.573 4.693l-.204-4.315-1.608.075.342 7.269h6.984v-1.61h-4.593c2.395-2.828 5.923-4.501 9.652-4.501 6.978 0 12.656 5.677 12.656 12.658 0 6.977-5.678 12.655-12.656 12.655-5.989 0-11.203-4.25-12.4-10.105l-1.58.323c1.352 6.603 7.23 11.394 13.98 11.394 7.867 0 14.267-6.4 14.267-14.267 0-7.869-6.4-14.269-14.267-14.269z" />
  );

  const xSmallHover = (
    <path d="M22.232 19.147v7.383h5.842v-1.514h-4.328v-5.869h-1.514zm11.718-5.242c-5.563-5.564-14.615-5.564-20.177 0a14.307 14.307 0 00-4.158 10.793L6.421 21.79l-1.085 1.191 5.382 4.897 4.938-4.937-1.14-1.14-3.248 3.25c-.305-3.692 1.006-7.37 3.644-10.007 4.934-4.934 12.965-4.934 17.899 0 4.935 4.933 4.935 12.965 0 17.898-4.236 4.233-10.926 4.915-15.913 1.622l-.888 1.346a14.18 14.18 0 007.827 2.342c3.693 0 7.365-1.422 10.113-4.17 5.564-5.563 5.564-14.615 0-20.178z" />
  );

  return getIcon({ size, isHovered, normal, normalHover, xSmall, xSmallHover });
};

export default History;
