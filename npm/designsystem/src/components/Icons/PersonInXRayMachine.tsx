import React from 'react';
import { SvgPathProps } from './Icon';

const PersonInXRayMachine: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <path
      fillRule={'evenodd'}
      d="M24.412 37.565l2.108-.26.004-.001c.575-.072.97.21 1.148.502a.84.84 0 01-.034.95c-1.056 1.529-2.381 2.303-3.937 2.303-1.557 0-2.881-.774-3.937-2.303a.84.84 0 01-.034-.95c.159-.26.489-.513.967-.513.059 0 .12.003.185.012l2.107.259c.472.06.952.06 1.423 0zm-8.39-6.232l.429.959c.038-.017 3.587-1.581 6.75-1.751l-.007 2.14c-3.032.165-6.282 1.6-6.427 1.664l.428.959c.033-.014 3.169-1.4 5.994-1.57l-.01 2.792c-.02-.002-.04-.001-.06-.004l-2.105-.26c-.885-.117-1.74.277-2.18.997a1.9 1.9 0 00.066 2.095c1.246 1.803 2.906 2.756 4.8 2.756 1.896 0 3.556-.953 4.802-2.756a1.9 1.9 0 00.066-2.095c-.44-.72-1.295-1.116-2.177-.996l-2.108.26c-.018.002-.037 0-.054.003l.01-2.794c2.836.156 6.016 1.558 6.05 1.572l.428-.96c-.146-.063-3.43-1.511-6.473-1.664l.008-2.14c3.17.162 6.743 1.735 6.78 1.752l.428-.96c-.161-.072-3.825-1.687-7.204-1.843l.008-2.17c2.83.164 5.99 1.558 6.025 1.572l.428-.96c-.154-.067-3.802-1.68-6.975-1.68-3.173 0-6.821 1.613-6.975 1.68l.428.96c.033-.014 3.187-1.407 6.019-1.571l-.008 2.17c-3.373.162-7.021 1.77-7.183 1.843zm.01-20.038h.262v1.592h-.262a.796.796 0 010-1.592zm1.562 0h.728a4.032 4.032 0 003.54-2.107 4.086 4.086 0 003.574 2.107h4.72v2.02a6.09 6.09 0 01-6.082 6.082h-.398a6.09 6.09 0 01-6.082-6.082v-2.02zm0-1.284a6.09 6.09 0 016.082-6.082h.398a6.09 6.09 0 016.083 6.082v.284h-4.721a3.088 3.088 0 01-3.084-3.084v-.212h-1v.266a3.033 3.033 0 01-3.03 3.03h-.728v-.284zm13.862 1.284h.262a.797.797 0 010 1.592h-.262v-1.592zm-15.424 2.592h.29c.295 3.803 3.477 6.81 7.354 6.81h.398c3.878 0 7.06-3.007 7.354-6.81h.29c.99 0 1.796-.805 1.796-1.796 0-.99-.806-1.796-1.796-1.796h-.262v-.284c0-4.07-3.311-7.383-7.382-7.383h-.398c-4.07 0-7.382 3.313-7.382 7.383v.284h-.262a1.797 1.797 0 000 3.592zM9.874 43.82h28.002V23.193H9.874V43.82zm-1.3 1.3h30.602V21.894H8.574v23.229zm12.69-31a.502.502 0 100-1.005.502.502 0 000 1.005zm5.293 0a.502.502 0 100-1.004.502.502 0 000 1.004z"
    />
  );

  const normalHover = (
    <path
      fillRule={'evenodd'}
      d="M24.412 37.565l2.108-.26.004-.001c.576-.072.97.21 1.148.502a.838.838 0 01-.034.95c-1.056 1.529-2.38 2.303-3.937 2.303s-2.881-.774-3.936-2.303a.84.84 0 01-.035-.95c.159-.26.489-.513.967-.513.059 0 .12.003.185.012l2.107.259c.473.06.952.06 1.423 0zm-8.39-6.232l.429.959c.038-.017 3.588-1.581 6.75-1.751l-.007 2.14c-3.031.165-6.282 1.6-6.427 1.664l.428.959c.033-.014 3.169-1.4 5.994-1.57l-.01 2.792c-.02-.002-.04-.001-.06-.004l-2.104-.26c-.885-.117-1.741.277-2.181.997-.4.655-.374 1.457.067 2.095 1.245 1.803 2.906 2.756 4.8 2.756 1.895 0 3.555-.953 4.8-2.756a1.9 1.9 0 00.067-2.095c-.44-.72-1.294-1.114-2.177-.996l-2.108.26c-.018.002-.036 0-.054.003l.01-2.794c2.836.156 6.017 1.558 6.05 1.572l.428-.96c-.146-.063-3.43-1.511-6.473-1.664l.008-2.14c3.17.162 6.743 1.735 6.78 1.752l.429-.96c-.162-.072-3.826-1.687-7.205-1.843l.009-2.17c2.829.164 5.99 1.558 6.024 1.572l.428-.96c-.154-.067-3.802-1.68-6.975-1.68-3.173 0-6.821 1.613-6.975 1.68l.428.96c.034-.014 3.187-1.407 6.019-1.571l-.008 2.17c-3.373.162-7.021 1.77-7.183 1.843zM9.875 43.82h28.002V23.193H9.874V43.82zm-1.3 1.3h30.603V21.894H8.574v23.229zm7.459-32.826h.26v1.02c0 .185.015.365.029.547v.025h-.29a.797.797 0 010-1.592zm1.56 0h.729a4.03 4.03 0 003.54-2.107 4.086 4.086 0 003.574 2.107h4.72v1.02a6.09 6.09 0 01-6.082 6.082h-.397a6.09 6.09 0 01-6.083-6.082v-1.02zm0-2.284a6.09 6.09 0 016.084-6.082h.397a6.09 6.09 0 016.083 6.082v1.284h-4.721a3.088 3.088 0 01-3.084-3.084v-.212h-1v.266a3.033 3.033 0 01-3.03 3.03h-.728V10.01zm13.836 3.85c.013-.181.028-.361.028-.546v-1.02h.26a.797.797 0 010 1.592h-.288v-.025zm-15.396 1.026h.434c.722 3.318 3.679 5.81 7.21 5.81h.397c3.53 0 6.487-2.492 7.21-5.81h.434c.99 0 1.796-.805 1.796-1.796 0-.99-.806-1.796-1.796-1.796h-.261V10.01c0-4.07-3.312-7.383-7.383-7.383h-.397c-4.071 0-7.383 3.313-7.383 7.383v1.284h-.261a1.797 1.797 0 000 3.592zm10.525.234a.502.502 0 10-.001-1.005.502.502 0 000 1.005zm-5.294 0a.502.502 0 100-1.004.502.502 0 000 1.004z"
    />
  );

  return isHovered ? normalHover : normal;
};

export default PersonInXRayMachine;
