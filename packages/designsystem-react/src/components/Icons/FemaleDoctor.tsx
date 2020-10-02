import React from 'react';
import {SvgPathProps} from './Icon';

const FemaleDoctor: React.FC<SvgPathProps> = ({isExtraSmall, isHovered}: SvgPathProps): JSX.Element => {
  const normal = (
    <path d="M16.032 15.022h.262v1.59h-.262a.797.797 0 010-1.59zm1.562 0h.727a4.036 4.036 0 003.542-2.108 4.086 4.086 0 003.573 2.108h4.72v2.019a6.09 6.09 0 01-6.082 6.083h-.398a6.09 6.09 0 01-6.082-6.083v-2.02zm0-1.285a6.088 6.088 0 016.082-6.082h.398a6.088 6.088 0 016.082 6.082v.285h-4.72a3.088 3.088 0 01-3.085-3.084v-.214h-1v.267a3.033 3.033 0 01-3.03 3.03h-.727v-.284zm6.281-9.351a2.385 2.385 0 012.377 2.298 7.329 7.329 0 00-2.178-.33h-.398a7.33 7.33 0 00-2.178.33 2.385 2.385 0 012.377-2.298zm7.581 10.636h.262a.796.796 0 010 1.59h-.262v-1.59zm-15.424 2.59h.291c.294 3.805 3.476 6.81 7.353 6.81h.398c3.877 0 7.06-3.005 7.353-6.81h.291a1.797 1.797 0 000-3.59h-.262v-.285a7.388 7.388 0 00-3.895-6.504v-.461a3.69 3.69 0 00-3.686-3.686 3.69 3.69 0 00-3.686 3.686v.46a7.386 7.386 0 00-3.895 6.505v.285h-.262c-.99 0-1.796.806-1.796 1.796s.806 1.795 1.796 1.795zm10.525.235a.503.503 0 100-1.005.503.503 0 000 1.005zm-5.294 0a.503.503 0 100-1.006.503.503 0 000 1.006zm13.248 23.749H13.24v-6.684c0-3.64 2.278-6.908 5.624-8.21V32.2a1.895 1.895 0 00-1.446 1.836c0 1.046.85 1.897 1.896 1.897a1.899 1.899 0 001.896-1.897c0-.89-.618-1.633-1.447-1.836v-5.502c2.594 1.143 5.666 1.139 8.255-.013v3.543a2.135 2.135 0 00-1.68 2.083v2.973h.898V32.31a1.232 1.232 0 012.464 0v2.973h.9V32.31a2.136 2.136 0 00-1.682-2.083v-3.515c3.33 1.31 5.594 4.572 5.594 8.199v6.684zM19.313 33.04a.997.997 0 110 1.993.997.997 0 010-1.993zm9.205-7.842l-.254-.073-.232.124c-2.545 1.355-5.77 1.355-8.314 0l-.233-.124-.254.073c-4.294 1.246-7.293 5.24-7.293 9.713v7.984h23.873v-7.984c0-4.473-2.999-8.467-7.293-9.713z" />
  );

  const normalHover = (
    <path d="M26.557 17.847a.503.503 0 10-.001-1.005.503.503 0 000 1.005zm-2.721 4.124a1.85 1.85 0 001.849-1.85h-3.697c0 1.022.827 1.85 1.848 1.85zm-2.572-4.124a.503.503 0 10-.001-1.005.503.503 0 000 1.005zm13.248 23.749H13.239V34.91c0-3.638 2.278-6.907 5.624-8.21V32.2a1.894 1.894 0 00-1.446 1.836c0 1.045.85 1.896 1.896 1.896a1.899 1.899 0 001.896-1.896c0-.89-.618-1.633-1.446-1.836v-5.502c2.593 1.143 5.665 1.139 8.254-.013v3.543a2.134 2.134 0 00-1.681 2.082v2.974h.9V32.31a1.233 1.233 0 012.464 0v2.974h.899V32.31a2.134 2.134 0 00-1.681-2.082v-3.516c3.328 1.31 5.594 4.573 5.594 8.199v6.685zm-15.2-8.556c.55 0 .997.447.997.996a.997.997 0 01-.996.996.997.997 0 01-.996-.996c0-.55.447-.996.996-.996zm9.206-7.841l-.253-.073-.233.124c-2.544 1.355-5.77 1.355-8.313 0l-.234-.124-.253.073c-4.294 1.246-7.293 5.239-7.293 9.712v7.984H35.81V34.91c0-4.473-3-8.466-7.293-9.712zM16.032 15.022h.262v1.59h-.262a.797.797 0 010-1.59zm1.562 0h.727a4.034 4.034 0 003.542-2.108 4.087 4.087 0 003.573 2.108h4.72v2.018a6.09 6.09 0 01-6.082 6.083h-.398a6.09 6.09 0 01-6.082-6.083v-2.018zm0-1.285a6.088 6.088 0 016.082-6.082h.398a6.088 6.088 0 016.082 6.082v.285h-4.72a3.088 3.088 0 01-3.084-3.085v-.213h-1v.267a3.034 3.034 0 01-3.031 3.03h-.727v-.284zm6.28-9.351a2.383 2.383 0 012.378 2.297 7.36 7.36 0 00-2.178-.328h-.398a7.36 7.36 0 00-2.178.328 2.384 2.384 0 012.377-2.297zm7.582 10.636h.262a.797.797 0 010 1.591h-.262v-1.591zm-15.424 2.59h.29c.295 3.804 3.477 6.81 7.354 6.81h.398c3.878 0 7.059-3.006 7.354-6.81h.29c.99 0 1.796-.805 1.796-1.794 0-.991-.806-1.796-1.796-1.796h-.262v-.285a7.386 7.386 0 00-3.895-6.504v-.461a3.69 3.69 0 00-3.686-3.686 3.69 3.69 0 00-3.686 3.686v.46a7.386 7.386 0 00-3.895 6.505v.285h-.262c-.99 0-1.796.805-1.796 1.796 0 .989.806 1.795 1.796 1.795z" />
  );

  return isHovered ? normalHover : normal;
};

export default FemaleDoctor;
